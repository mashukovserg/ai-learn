"use client";

import { FormEvent, use, useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Loader2, PlayCircle, RefreshCw } from 'lucide-react';

type TaskStatus = 'queued' | 'in_progress' | 'review' | 'done' | 'blocked';
type RunStatus = 'running' | 'completed' | 'failed';

type AgentTask = {
  id: number;
  title: string;
  objective: string;
  role: string;
  priority: number;
  status: TaskStatus;
  context: Record<string, string> | null;
  created_at: string;
  updated_at: string;
};

type AgentRun = {
  id: number;
  task_id: number;
  status: RunStatus;
  summary: string;
  output_text: string;
  dedupe_hit: boolean;
  error_message: string | null;
  created_at: string;
  updated_at: string;
};

type AgentKnowledgeItem = {
  id: number;
  task_id: number | null;
  title: string;
  body: string;
  fingerprint: string;
  tags: string[];
  created_at: string;
};

type CycleRunResult = {
  executed: boolean;
  message: string;
};

const TASK_STATUSES: TaskStatus[] = ['queued', 'in_progress', 'review', 'done', 'blocked'];

const AGENT_ROLES = [
  'generalist',
  'system_evaluator',
  'content_architect',
  'ux_guardrail',
  'localization_sync',
];

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    credentials: 'include',
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const detail = body?.detail ? String(body.detail) : `HTTP ${res.status}`;
    throw new Error(detail);
  }

  return res.json() as Promise<T>;
}

export default function AgentOpsPage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = use(props.params);
  const [tasks, setTasks] = useState<AgentTask[]>([]);
  const [runs, setRuns] = useState<AgentRun[]>([]);
  const [knowledge, setKnowledge] = useState<AgentKnowledgeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [cycleRunning, setCycleRunning] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [title, setTitle] = useState('');
  const [objective, setObjective] = useState('');
  const [role, setRole] = useState('generalist');
  const [priority, setPriority] = useState(100);
  const [creating, setCreating] = useState(false);

  const t = useMemo(() => {
    if (lang === 'ru') {
      return {
        home: 'Главная',
        labs: 'Лаборатории',
        pageTitle: 'Agent Ops',
        pageDesc: 'MVP-консоль для AI-first цикла: очередь задач, запуск цикла, логи выполнения и база знаний.',
        createTask: 'Создать задачу',
        taskTitle: 'Заголовок задачи',
        taskObjective: 'Цель задачи',
        taskRole: 'Роль агента',
        roleGeneralist: 'Универсал',
        roleEvaluator: 'Диагност',
        roleArchitect: 'Архитектор',
        roleUX: 'UX-страж',
        roleLocalization: 'Локализация',
        taskPriority: 'Приоритет (меньше = выше)',
        createButton: 'Добавить в очередь',
        runCycle: 'Запустить 1 цикл',
        reload: 'Обновить',
        queueTitle: 'Очередь задач',
        runsTitle: 'Последние запуски',
        knowledgeTitle: 'База знаний',
        noTasks: 'Задач пока нет.',
        noRuns: 'Запусков пока нет.',
        noKnowledge: 'Записей пока нет.',
        authError: 'Нужна авторизация. Войдите в аккаунт и откройте страницу снова.',
        defaultError: 'Не удалось загрузить данные.',
        createdOk: 'Задача добавлена в очередь.',
        runningCycle: 'Цикл выполнен.',
        statusUpdated: 'Статус задачи обновлен.',
        titlePlaceholder: 'Например: Подготовить обзор рынка AI-курсов для SMB',
        objectivePlaceholder: 'Опишите ожидаемый результат, ограничения, целевой формат.',
        taskId: 'Задача',
        dedupeHit: 'Дубликат найден',
        dedupeNo: 'Новая запись',
        loading: 'Загрузка...',
        cycleNoTasks: 'Очередь пуста, запускать нечего.',
        cycleError: 'Цикл завершился с ошибкой.',
      };
    }

    return {
      home: 'Home',
      labs: 'Labs',
      pageTitle: 'Agent Ops',
      pageDesc: 'MVP console for AI-first cycles: task queue, cycle execution, run logs, and knowledge base.',
      createTask: 'Create task',
      taskTitle: 'Task title',
      taskObjective: 'Task objective',
      taskRole: 'Agent role',
      roleGeneralist: 'Generalist',
      roleEvaluator: 'Evaluator',
      roleArchitect: 'Architect',
      roleUX: 'UX Guardrail',
      roleLocalization: 'Localization',
      taskPriority: 'Priority (lower = higher)',
      createButton: 'Add to queue',
      runCycle: 'Run 1 cycle',
      reload: 'Reload',
      queueTitle: 'Task queue',
      runsTitle: 'Recent runs',
      knowledgeTitle: 'Knowledge base',
      noTasks: 'No tasks yet.',
      noRuns: 'No runs yet.',
      noKnowledge: 'No knowledge items yet.',
      authError: 'Authentication required. Sign in and reopen this page.',
      defaultError: 'Failed to load data.',
      createdOk: 'Task has been queued.',
      runningCycle: 'Cycle run completed.',
      statusUpdated: 'Task status updated.',
      titlePlaceholder: 'Example: Prepare market scan for AI courses in SMB segment',
      objectivePlaceholder: 'Describe expected output, constraints, and target format.',
      taskId: 'Task',
      dedupeHit: 'Duplicate matched',
      dedupeNo: 'New item',
      loading: 'Loading...',
      cycleNoTasks: 'Queue is empty, nothing to run.',
      cycleError: 'Cycle finished with an error.',
    };
  }, [lang]);

  const loadAll = useCallback(async (silent = false) => {
    try {
      if (silent) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      setErrorMessage(null);

      const [tasksData, runsData, knowledgeData] = await Promise.all([
        fetchJson<AgentTask[]>('/api/agent/tasks'),
        fetchJson<AgentRun[]>('/api/agent/runs?limit=12'),
        fetchJson<AgentKnowledgeItem[]>('/api/agent/knowledge?limit=12'),
      ]);

      setTasks(tasksData);
      setRuns(runsData);
      setKnowledge(knowledgeData);
    } catch (error) {
      const text = error instanceof Error ? error.message : t.defaultError;
      if (text.includes('401')) {
        setErrorMessage(t.authError);
      } else {
        setErrorMessage(text || t.defaultError);
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [t.authError, t.defaultError]);

  useEffect(() => {
    void loadAll(false);
  }, [loadAll]);

  const onCreateTask = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCreating(true);
    setErrorMessage(null);
    setStatusMessage(null);

    try {
      await fetchJson<AgentTask>('/api/agent/tasks', {
        method: 'POST',
        body: JSON.stringify({
          title: title.trim(),
          objective: objective.trim(),
          role,
          priority,
        }),
      });

      setTitle('');
      setObjective('');
      setRole('generalist');
      setPriority(100);
      setStatusMessage(t.createdOk);
      await loadAll(true);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : t.defaultError);
    } finally {
      setCreating(false);
    }
  };

  const onRunCycle = async () => {
    setCycleRunning(true);
    setErrorMessage(null);
    setStatusMessage(null);

    try {
      const result = await fetchJson<CycleRunResult>('/api/agent/cycle/run', { method: 'POST', body: '{}' });
      if (result.executed) {
        setStatusMessage(t.runningCycle);
      } else if (result.message === 'No queued tasks available') {
        setStatusMessage(t.cycleNoTasks);
      } else {
        setStatusMessage(t.cycleError);
      }
      await loadAll(true);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : t.defaultError);
    } finally {
      setCycleRunning(false);
    }
  };

  const onUpdateStatus = async (taskId: number, status: TaskStatus) => {
    setErrorMessage(null);
    setStatusMessage(null);

    try {
      await fetchJson<AgentTask>(`/api/agent/tasks/${taskId}/status`, {
        method: 'POST',
        body: JSON.stringify({ status }),
      });
      setStatusMessage(t.statusUpdated);
      await loadAll(true);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : t.defaultError);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
        <Link href={`/${lang}`} className="hover:text-neutral-300 transition-colors">
          {t.home}
        </Link>
        <ChevronRight size={14} />
        <Link href={`/${lang}/labs`} className="hover:text-neutral-300 transition-colors">
          {t.labs}
        </Link>
        <ChevronRight size={14} />
        <span className="text-neutral-300">{t.pageTitle}</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2 text-neutral-200">{t.pageTitle}</h1>
        <p className="text-neutral-500 text-sm leading-relaxed text-left">{t.pageDesc}</p>
      </div>

      <div className="bg-input border border-border-subtle rounded-xl p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <h2 className="text-lg font-semibold text-neutral-200">{t.createTask}</h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onRunCycle}
              disabled={cycleRunning || loading}
              className="px-3.5 py-2 rounded-md text-sm font-semibold bg-accent-300 text-accent-950 hover:bg-accent-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              {cycleRunning ? <Loader2 size={15} className="animate-spin" /> : <PlayCircle size={15} />}
              {t.runCycle}
            </button>
            <button
              type="button"
              onClick={() => void loadAll(true)}
              disabled={refreshing || loading}
              className="px-3.5 py-2 rounded-md text-sm border border-border-emphasis text-neutral-300 hover:bg-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {refreshing ? <Loader2 size={15} className="animate-spin" /> : <RefreshCw size={15} />}
              {t.reload}
            </button>
          </div>
        </div>

        <form onSubmit={onCreateTask} className="space-y-3">
          <div>
            <label className="text-xs text-neutral-500 block mb-1.5">{t.taskTitle}</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              maxLength={180}
              placeholder={t.titlePlaceholder}
              className="w-full bg-base border border-border-subtle rounded-lg px-3 py-2.5 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-accent-500/40"
            />
          </div>

          <div>
            <label className="text-xs text-neutral-500 block mb-1.5">{t.taskObjective}</label>
            <textarea
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              required
              maxLength={4000}
              rows={4}
              placeholder={t.objectivePlaceholder}
              className="w-full bg-base border border-border-subtle rounded-lg px-3 py-2.5 text-sm text-neutral-200 placeholder-neutral-600 resize-none focus:outline-none focus:border-accent-500/40"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="text-xs text-neutral-500 block mb-1.5">{t.taskRole}</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-base border border-border-subtle rounded-lg px-3 py-2.5 text-sm text-neutral-200 focus:outline-none focus:border-accent-500/40"
              >
                {AGENT_ROLES.map((r) => (
                  <option key={r} value={r}>
                    {r === 'generalist' && t.roleGeneralist}
                    {r === 'system_evaluator' && t.roleEvaluator}
                    {r === 'content_architect' && t.roleArchitect}
                    {r === 'ux_guardrail' && t.roleUX}
                    {r === 'localization_sync' && t.roleLocalization}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs text-neutral-500 block mb-1.5">{t.taskPriority}</label>
              <input
                type="number"
                min={1}
                max={1000}
                value={priority}
                onChange={(e) => setPriority(Number(e.target.value))}
                className="w-28 bg-base border border-border-subtle rounded-lg px-3 py-2.5 text-sm text-neutral-200 focus:outline-none focus:border-accent-500/40"
              />
            </div>
            <button
              type="submit"
              disabled={creating || !title.trim() || !objective.trim()}
              className="mt-5 px-4 py-2 rounded-md text-sm font-semibold bg-accent-300 text-accent-950 hover:bg-accent-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center min-w-32"
            >
              {creating ? <Loader2 size={14} className="animate-spin" /> : t.createButton}
            </button>
          </div>
        </form>
      </div>

      {statusMessage && (
        <div className="mb-4 text-sm rounded-md px-4 py-3 border bg-accent-500/10 border-accent-500/25 text-accent-200">
          {statusMessage}
        </div>
      )}

      {errorMessage && (
        <div className="mb-4 text-sm rounded-md px-4 py-3 border bg-red-500/10 border-red-500/25 text-red-300">
          {errorMessage}
        </div>
      )}

      {loading ? (
        <div className="bg-input border border-border-subtle rounded-xl p-6 text-sm text-neutral-500 flex items-center gap-2">
          <Loader2 size={16} className="animate-spin" />
          {t.loading}
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <section className="bg-input border border-border-subtle rounded-xl p-5 xl:col-span-2">
            <h3 className="text-base font-semibold text-neutral-200 mb-3">{t.queueTitle}</h3>
            {tasks.length === 0 ? (
              <p className="text-sm text-neutral-500">{t.noTasks}</p>
            ) : (
              <div className="space-y-3">
                {tasks.map((task) => (
                  <article key={task.id} className="bg-base border border-border-subtle rounded-lg p-3.5">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-neutral-200">#{task.id} {task.title}</p>
                          <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${
                            task.role === 'system_evaluator' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                            task.role === 'content_architect' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                            task.role === 'ux_guardrail' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                            task.role === 'localization_sync' ? 'bg-pink-500/10 text-pink-400 border-pink-500/20' :
                            'bg-neutral-800 text-neutral-400 border-border-subtle'
                          }`}>
                            {task.role === 'generalist' && t.roleGeneralist}
                            {task.role === 'system_evaluator' && t.roleEvaluator}
                            {task.role === 'content_architect' && t.roleArchitect}
                            {task.role === 'ux_guardrail' && t.roleUX}
                            {task.role === 'localization_sync' && t.roleLocalization}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 mt-1">P{task.priority} · {task.status}</p>
                      </div>
                      <select
                        value={task.status}
                        onChange={(e) => void onUpdateStatus(task.id, e.target.value as TaskStatus)}
                        className="bg-card border border-border-subtle rounded-md px-2 py-1.5 text-xs text-neutral-200"
                      >
                        {TASK_STATUSES.map((status) => (
                          <option value={status} key={status}>{status}</option>
                        ))}
                      </select>
                    </div>
                    <p className="text-sm text-neutral-400 mt-2 leading-relaxed text-left">{task.objective}</p>
                  </article>
                ))}
              </div>
            )}
          </section>

          <section className="bg-input border border-border-subtle rounded-xl p-5">
            <h3 className="text-base font-semibold text-neutral-200 mb-3">{t.runsTitle}</h3>
            {runs.length === 0 ? (
              <p className="text-sm text-neutral-500">{t.noRuns}</p>
            ) : (
              <div className="space-y-2.5">
                {runs.map((run) => (
                  <article key={run.id} className="bg-base border border-border-subtle rounded-lg p-3">
                    <p className="text-xs text-neutral-500 mb-1">#{run.id} · {t.taskId} #{run.task_id}</p>
                    <p className="text-sm text-neutral-200">{run.summary || run.status}</p>
                    <p className="text-xs text-neutral-500 mt-1">
                      {run.dedupe_hit ? t.dedupeHit : t.dedupeNo}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </section>

          <section className="bg-input border border-border-subtle rounded-xl p-5 xl:col-span-3">
            <h3 className="text-base font-semibold text-neutral-200 mb-3">{t.knowledgeTitle}</h3>
            {knowledge.length === 0 ? (
              <p className="text-sm text-neutral-500">{t.noKnowledge}</p>
            ) : (
              <div className="space-y-3">
                {knowledge.map((item) => (
                  <article key={item.id} className="bg-base border border-border-subtle rounded-lg p-3.5">
                    <p className="text-sm font-semibold text-neutral-200">#{item.id} {item.title}</p>
                    <p className="text-xs text-neutral-500 mt-1">{item.fingerprint.slice(0, 16)}...</p>
                    <p className="text-sm text-neutral-400 mt-2 leading-relaxed text-left whitespace-pre-wrap line-clamp-4">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
