import hashlib
import re

from fastapi import APIRouter
from openai import APIError, AsyncOpenAI, RateLimitError
from sqlalchemy import Select, select

from app.api.dependencies import CurrentUserIDDep, DBSessionDep
from app.api.exceptions import HTTPBadRequestException, HTTPNotFoundException
from app.db.models.agent_ops import AgentKnowledgeItemORM, AgentRunORM, AgentTaskORM
from settings import settings

from .schemas import (
    AgentCycleRunResponseDTO,
    AgentKnowledgeItemDTO,
    AgentRunDTO,
    AgentTaskCreateDTO,
    AgentTaskDTO,
    AgentTaskStatusUpdateDTO,
)

agent_router = APIRouter(prefix='/agent')

DEFAULT_AGENT_MODEL = 'qwen/qwen3-32b'

_client: AsyncOpenAI | None = None


def _get_client() -> AsyncOpenAI | None:
    global _client  # noqa: PLW0603
    if not settings.GROQ_API_KEY:
        return None
    if _client is None:
        _client = AsyncOpenAI(
            api_key=settings.GROQ_API_KEY,
            base_url='https://api.groq.com/openai/v1',
        )
    return _client


def _fingerprint(text: str) -> str:
    normalized = re.sub(r'\s+', ' ', text).strip().lower()
    return hashlib.sha256(normalized.encode('utf-8')).hexdigest()


def _task_dto(task: AgentTaskORM) -> AgentTaskDTO:
    return AgentTaskDTO(
        id=task.id,
        title=task.title,
        objective=task.objective,
        priority=task.priority,
        status=task.status,
        context=task.context_json,
        created_at=task.created_at,
        updated_at=task.updated_at,
    )


def _run_dto(run: AgentRunORM) -> AgentRunDTO:
    return AgentRunDTO(
        id=run.id,
        task_id=run.task_id,
        status=run.status,
        summary=run.summary,
        output_text=run.output_text,
        dedupe_hit=run.dedupe_hit,
        error_message=run.error_message,
        created_at=run.created_at,
        updated_at=run.updated_at,
    )


def _knowledge_dto(item: AgentKnowledgeItemORM) -> AgentKnowledgeItemDTO:
    return AgentKnowledgeItemDTO(
        id=item.id,
        task_id=item.task_id,
        title=item.title,
        body=item.body,
        fingerprint=item.fingerprint,
        tags=item.tags,
        created_at=item.created_at,
    )


def _build_task_prompt(task: AgentTaskORM) -> str:
    context_lines = []
    if task.context_json:
        context_lines = [f'- {key}: {value}' for key, value in task.context_json.items()]
    context_text = '\n'.join(context_lines) if context_lines else '- no explicit context provided'

    return (
        'You are an operations AI agent. Produce a concise execution output for a single backlog task. '
        'Keep the response factual and structured for human review.\n\n'
        f'Task title: {task.title}\n'
        f'Task objective: {task.objective}\n'
        f'Priority: {task.priority}\n'
        'Context:\n'
        f'{context_text}\n\n'
        'Return sections exactly in this order:\n'
        '1) Outcome summary\n'
        '2) Evidence and rationale\n'
        '3) Next action recommendations'
    )


async def _execute_task_with_model(task: AgentTaskORM) -> str:
    client = _get_client()
    if client is None:
        return (
            f'Outcome summary\nDraft execution prepared for "{task.title}".\n\n'
            'Evidence and rationale\n'
            'The system is running in fallback mode because GROQ_API_KEY is not configured. '
            'This draft preserves workflow continuity for review and manual follow-up.\n\n'
            'Next action recommendations\n'
            'Provide API credentials to enable model-based execution, then re-run the cycle for a full response.'
        )

    response = await client.chat.completions.create(
        model=DEFAULT_AGENT_MODEL,
        messages=[
            {'role': 'system', 'content': 'You are a precise AI operations assistant.'},
            {'role': 'user', 'content': _build_task_prompt(task)},
        ],
        max_tokens=900,
        temperature=0.3,
    )

    return response.choices[0].message.content or ''


async def _get_task_for_update(db_session: DBSessionDep, user_id: int, task_id: int) -> AgentTaskORM:
    task = await db_session.get(AgentTaskORM, task_id)
    if task is None or task.user_id != user_id:
        raise HTTPNotFoundException(detail='Task not found')
    return task


def _queued_task_stmt(user_id: int) -> Select[tuple[AgentTaskORM]]:
    return (
        select(AgentTaskORM)
        .where(AgentTaskORM.user_id == user_id, AgentTaskORM.status == 'queued')
        .order_by(AgentTaskORM.priority.asc(), AgentTaskORM.id.asc())
        .with_for_update(skip_locked=True)
    )


@agent_router.get('/tasks', response_model=list[AgentTaskDTO])
async def list_tasks(
    user_id: CurrentUserIDDep,
    db_session: DBSessionDep,
    status: str | None = None,
) -> list[AgentTaskDTO]:
    stmt = select(AgentTaskORM).where(AgentTaskORM.user_id == user_id)
    if status is not None:
        stmt = stmt.where(AgentTaskORM.status == status)

    rows = await db_session.execute(stmt.order_by(AgentTaskORM.priority.asc(), AgentTaskORM.id.asc()))
    tasks = rows.scalars().all()
    return [_task_dto(task) for task in tasks]


@agent_router.post('/tasks', response_model=AgentTaskDTO)
async def create_task(
    body: AgentTaskCreateDTO,
    user_id: CurrentUserIDDep,
    db_session: DBSessionDep,
) -> AgentTaskDTO:
    task = AgentTaskORM(
        user_id=user_id,
        title=body.title.strip(),
        objective=body.objective.strip(),
        priority=body.priority,
        status='queued',
        context_json=body.context,
    )

    db_session.add(task)
    await db_session.commit()
    await db_session.refresh(task)

    return _task_dto(task)


@agent_router.post('/tasks/{task_id}/status', response_model=AgentTaskDTO)
async def update_task_status(
    task_id: int,
    body: AgentTaskStatusUpdateDTO,
    user_id: CurrentUserIDDep,
    db_session: DBSessionDep,
) -> AgentTaskDTO:
    task = await _get_task_for_update(db_session, user_id, task_id)
    task.status = body.status
    await db_session.commit()
    await db_session.refresh(task)

    return _task_dto(task)


@agent_router.get('/runs', response_model=list[AgentRunDTO])
async def list_runs(
    user_id: CurrentUserIDDep,
    db_session: DBSessionDep,
    limit: int = 20,
) -> list[AgentRunDTO]:
    if limit < 1 or limit > 100:
        raise HTTPBadRequestException(detail='limit must be in range 1..100')

    rows = await db_session.execute(
        select(AgentRunORM)
        .where(AgentRunORM.user_id == user_id)
        .order_by(AgentRunORM.created_at.desc())
        .limit(limit)
    )
    runs = rows.scalars().all()
    return [_run_dto(run) for run in runs]


@agent_router.get('/knowledge', response_model=list[AgentKnowledgeItemDTO])
async def list_knowledge(
    user_id: CurrentUserIDDep,
    db_session: DBSessionDep,
    limit: int = 20,
) -> list[AgentKnowledgeItemDTO]:
    if limit < 1 or limit > 100:
        raise HTTPBadRequestException(detail='limit must be in range 1..100')

    rows = await db_session.execute(
        select(AgentKnowledgeItemORM)
        .where(AgentKnowledgeItemORM.user_id == user_id)
        .order_by(AgentKnowledgeItemORM.created_at.desc())
        .limit(limit)
    )
    items = rows.scalars().all()
    return [_knowledge_dto(item) for item in items]


@agent_router.post('/cycle/run', response_model=AgentCycleRunResponseDTO)
async def run_cycle(
    user_id: CurrentUserIDDep,
    db_session: DBSessionDep,
) -> AgentCycleRunResponseDTO:
    row = await db_session.execute(_queued_task_stmt(user_id))
    task = row.scalars().first()

    if task is None:
        return AgentCycleRunResponseDTO(
            executed=False,
            message='No queued tasks available',
            task=None,
            run=None,
            knowledge_item=None,
        )

    task.status = 'in_progress'

    run = AgentRunORM(
        user_id=user_id,
        task_id=task.id,
        status='running',
        summary='',
        output_text='',
        dedupe_hit=False,
    )
    db_session.add(run)
    await db_session.commit()
    await db_session.refresh(task)
    await db_session.refresh(run)

    try:
        output_text = await _execute_task_with_model(task)
    except RateLimitError as exc:
        run.status = 'failed'
        run.error_message = f'Rate limit: {exc}'
        task.status = 'queued'
        await db_session.commit()
        await db_session.refresh(task)
        await db_session.refresh(run)
        return AgentCycleRunResponseDTO(
            executed=False,
            message='Rate limit reached; task returned to queue',
            task=_task_dto(task),
            run=_run_dto(run),
            knowledge_item=None,
        )
    except APIError as exc:
        run.status = 'failed'
        run.error_message = f'API error: {exc.message}'
        task.status = 'blocked'
        await db_session.commit()
        await db_session.refresh(task)
        await db_session.refresh(run)
        return AgentCycleRunResponseDTO(
            executed=False,
            message='Model API error; task moved to blocked',
            task=_task_dto(task),
            run=_run_dto(run),
            knowledge_item=None,
        )
    except Exception as exc:  # noqa: BLE001
        run.status = 'failed'
        run.error_message = f'Unexpected error: {exc}'
        task.status = 'blocked'
        await db_session.commit()
        await db_session.refresh(task)
        await db_session.refresh(run)
        return AgentCycleRunResponseDTO(
            executed=False,
            message='Unexpected execution error; task moved to blocked',
            task=_task_dto(task),
            run=_run_dto(run),
            knowledge_item=None,
        )

    summary = output_text.split('\n', maxsplit=1)[0].strip() or task.title
    fingerprint = _fingerprint(output_text)

    existing = await db_session.execute(
        select(AgentKnowledgeItemORM).where(
            AgentKnowledgeItemORM.user_id == user_id,
            AgentKnowledgeItemORM.fingerprint == fingerprint,
        )
    )
    knowledge_item = existing.scalars().first()

    dedupe_hit = knowledge_item is not None
    if knowledge_item is None:
        knowledge_item = AgentKnowledgeItemORM(
            user_id=user_id,
            task_id=task.id,
            title=task.title,
            body=output_text,
            fingerprint=fingerprint,
            tags=['auto-generated', 'agent-cycle'],
        )
        db_session.add(knowledge_item)

    task.status = 'review'
    run.status = 'completed'
    run.summary = summary
    run.output_text = output_text
    run.dedupe_hit = dedupe_hit
    run.error_message = None

    await db_session.commit()
    await db_session.refresh(task)
    await db_session.refresh(run)
    await db_session.refresh(knowledge_item)

    return AgentCycleRunResponseDTO(
        executed=True,
        message='Task executed and moved to review',
        task=_task_dto(task),
        run=_run_dto(run),
        knowledge_item=_knowledge_dto(knowledge_item),
    )
