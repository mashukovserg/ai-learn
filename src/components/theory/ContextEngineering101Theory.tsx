"use client";

import React from 'react';
import Term from '@/components/Term';
import Terminal from '@/components/Terminal';

export default function ContextEngineering101Theory({ lang }: { lang: string }) {
  const ru = lang === 'ru';

  return (
    <div className="space-y-8">
      {/* Chapter 1: What context engineering is */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 1: Что такое контекст-инжиниринг'
            : 'Chapter 1: What Context Engineering Is'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Качество работы агента ограничено тем, что находится в его{' '}
                <Term id="context-window" lang={lang}>контекстном окне</Term> в момент принятия решения.{' '}
                <Term id="context-engineering" lang={lang}>Контекст-инжиниринг</Term> — дисциплина управления
                всем информационным окружением агента: системными инструкциями, описаниями инструментов,
                персистентной памятью, знаниями, подгружаемыми через{' '}
                <Term id="rag" lang={lang}>RAG</Term>, историей диалога, рабочими заметками текущей задачи,
                скиллами и субагентами. Всё это конкурирует за одно и то же окно, и инженер решает, что и
                когда в него попадает.
              </>
            ) : (
              <>
                An agent&apos;s quality is bounded by what sits in its{' '}
                <Term id="context-window" lang={lang}>context window</Term> at decision time.{' '}
                <Term id="context-engineering" lang={lang}>Context engineering</Term> is the discipline of
                managing the agent&apos;s entire information environment: system instructions, tool
                descriptions, persistent memory, knowledge retrieved via{' '}
                <Term id="rag" lang={lang}>RAG</Term>, dialogue history, working notes of the current task,
                skills, and subagents. All of it competes for the same window, and the engineer decides what
                enters it and when.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Промпт-инжиниринг при таком взгляде — часть контекст-инжиниринга: оптимизация одной из
                составляющих окна, а не отдельная дисциплина. Слои контекста удобно упорядочить по
                стабильности — от того, что загружено всегда, к тому, что живёт минуты. Самый стабильный
                слой — системные инструкции: они присутствуют в каждой сессии. За ними идёт индекс
                персистентной памяти: тоже загружен всегда, но короткий. Дальше — тематические файлы со
                знаниями: они читаются по запросу, когда нужны. Самый волатильный слой — вывод инструментов:
                он появляется внутри одной задачи и не должен переживать её.
              </>
            ) : (
              <>
                Prompt engineering, seen this way, is a subset of context engineering: optimizing one
                component of the window, not a separate discipline. Context layers are best ordered by
                stability — from what is always loaded down to what lives for minutes. The most stable layer
                is system instructions: they are present in every session. Next comes the persistent memory
                index: also always loaded, but short. Then topic files with knowledge: they are read on
                demand, when needed. The most volatile layer is tool output: it appears inside a single task
                and should not outlive it.
              </>
            )}
          </p>
          <div className="bg-deep border border-border-subtle rounded-lg p-4 my-4 overflow-x-auto">
            <p className="text-xs text-neutral-500 font-medium mb-2 uppercase tracking-wider">
              {ru ? 'Слои контекста: от стабильного к волатильному' : 'Context layers: stable to volatile'}
            </p>
            <table className="w-full text-sm text-neutral-300">
              <tbody>
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4 text-neutral-500">1</td>
                  <td className="py-2 pr-4">{ru ? 'Системные инструкции' : 'System instructions'}</td>
                  <td className="py-2 text-neutral-500">{ru ? 'загружены всегда' : 'always loaded'}</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4 text-neutral-500">2</td>
                  <td className="py-2 pr-4">{ru ? 'Индекс памяти' : 'Memory index'}</td>
                  <td className="py-2 text-neutral-500">{ru ? 'загружен всегда, короткий' : 'always loaded, short'}</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4 text-neutral-500">3</td>
                  <td className="py-2 pr-4">{ru ? 'Тематические файлы' : 'Topic files'}</td>
                  <td className="py-2 text-neutral-500">{ru ? 'читаются по запросу' : 'read on demand'}</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4 text-neutral-500">4</td>
                  <td className="py-2 pr-4">{ru ? 'Скиллы' : 'Skills'}</td>
                  <td className="py-2 text-neutral-500">{ru ? 'подгружаются при вызове' : 'loaded on invocation'}</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4 text-neutral-500">5</td>
                  <td className="py-2 pr-4">{ru ? 'Вывод инструментов' : 'Tool output'}</td>
                  <td className="py-2 text-neutral-500">{ru ? 'живёт внутри задачи' : 'lives inside a task'}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-neutral-500">6</td>
                  <td className="py-2 pr-4">{ru ? 'История диалога' : 'Dialogue history'}</td>
                  <td className="py-2 text-neutral-500">{ru ? 'живёт внутри сессии' : 'lives inside a session'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Chapter 2: Window economics */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 2: Экономика контекстного окна'
            : 'Chapter 2: Context Window Economics'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Главный принцип дисциплины: хороший контекст — это минимальный объём максимально полезной
                информации, а не максимум того, что влезает. Причина в экономике внимания: каждый токен
                постоянно загружаемого контекста конкурирует с фактической задачей за внимание модели.
                Нерелевантная строка — шум, который ухудшает ответ, даже когда до лимита окна ещё далеко.
                Поэтому строка, претендующая на постоянную загрузку, обязана проходить ROI-тест: улучшает
                ли она заметную долю сессий? Если нет — ей место в файле, который читается по запросу, или
                нигде.
              </>
            ) : (
              <>
                The core principle of the discipline: good context is the minimal volume of maximally useful
                information, not the maximum that fits. The reason is attention economics: every token of
                always-loaded context competes with the actual task for the model&apos;s attention. An
                irrelevant line is noise that degrades the answer even when the window limit is nowhere in
                sight. So a line that claims a permanent slot must pass the ROI test: does it improve a
                meaningful share of sessions? If not, it belongs in a file read on demand — or nowhere.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                У запущенной гигиены есть имя: <Term id="context-rot" lang={lang}>context rot</Term> —
                деградация качества ответов по мере того, как контекст распухает и устаревает. Записи о
                давно удалённых файлах, дубли правил, отменённые решения — всё это продолжает занимать окно
                и сбивать модель. Отсюда второе правило: удаление лучше архива. Мёртвый контекст хуже
                отсутствия контекста, потому что отсутствие хотя бы не врёт. Метрика здоровья окна —
                отношение сигнала к шуму: каждый токен либо помогает текущей задаче, либо мешает ей.
              </>
            ) : (
              <>
                Neglected hygiene has a name: <Term id="context-rot" lang={lang}>context rot</Term> — the
                degradation of output quality as context bloats and goes stale. Entries about long-deleted
                files, duplicated rules, reversed decisions — all of it keeps occupying the window and
                misleading the model. Hence the second rule: deletion beats archiving. Dead context is worse
                than no context, because absence at least does not lie. The window&apos;s health metric is
                its signal-to-noise ratio: every token either helps the current task or hurts it.
              </>
            )}
          </p>
          <div className="bg-emerald-500/5 border-l-4 border-emerald-500 p-6 my-4">
            <h4 className="font-bold text-heading mb-2">
              {ru ? 'Практика инструментов, 2026' : 'Tool practice, 2026'}
            </h4>
            <p className="text-neutral-400 leading-relaxed text-sm">
              {ru
                ? 'Конкретные цифры зависят от инструмента. Например, практика Claude Code на 2026 год: файл-конституция — примерно до 60 строк; индекс памяти — жёсткий лимит 200 строк, дальше хвост просто не загружается и становится невидимым; общий бюджет автозагрузки — порядка 8 тысяч токенов на сессию. Это механика конкретной реализации, а не универсальный закон: в другой среде числа будут другими. Переносится принцип — у постоянной загрузки есть бюджет, и он мал.'
                : 'Exact numbers are tool-specific. For example, Claude Code practice as of 2026: the constitution file — roughly up to 60 lines; the memory index — a hard 200-line limit, past which the tail simply does not load and becomes invisible; a total auto-load budget of about 8 thousand tokens per session. That is the mechanics of one implementation, not a universal law: another environment will have different numbers. What transfers is the principle — always-on loading has a budget, and it is small.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 3: Artifacts — what goes where */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 3: Артефакты знаний — что куда оформлять'
            : 'Chapter 3: Knowledge Artifacts — What Goes Where'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Знания проекта раскладываются по четырём видам артефактов, и у каждого своя роль. Постоянное
                правило, которое должно соблюдаться в каждой сессии, идёт в файл-конституцию — он загружен
                всегда и делит бюджет окна со всем остальным. Проверенный короткий факт, нужный в
                большинстве сессий, идёт в индекс памяти. Повторяемая процедура оформляется скиллом —
                инструкцией, которая подгружается при вызове. Автономная роль со своим workflow и своими
                инструментами становится агентом с изолированным контекстом.
              </>
            ) : (
              <>
                Project knowledge falls into four kinds of artifacts, each with its own role. A standing rule
                that must hold in every session goes into the constitution file — always loaded, sharing the
                window budget with everything else. A verified short fact needed in most sessions goes into
                the memory index. A repeatable procedure becomes a skill — an instruction loaded on
                invocation. An autonomous role with its own workflow and tools becomes an agent with an
                isolated context.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Индекс памяти подчиняется принципу «карта, а не книга»: он указывает, где лежат детали, а не
                содержит их. Одна-две строки на факт плюс ссылка на тематический файл — этого достаточно.
                Сами детали живут в тематических файлах, которые не тратят постоянный бюджет: агент читает
                их, когда они нужны задаче. Стиль записи во всех постоянных слоях — телеграфный: максимум
                информации, минимум слов. Плохо: «мы решили использовать один шрифт, потому что это улучшает
                читаемость». Хорошо: «Шрифт: IBM Plex, один на весь проект».
              </>
            ) : (
              <>
                The memory index follows the &quot;map, not a book&quot; principle: it points to where details
                live rather than containing them. One or two lines per fact plus a link to a topic file is
                enough. The details themselves live in topic files that spend none of the permanent budget:
                the agent reads them when the task needs them. The writing style in all permanent layers is
                telegraphic: maximum information, minimum words. Bad: &quot;we decided to use a single font
                because it improves readability&quot;. Good: &quot;Font: IBM Plex, one for the whole
                project&quot;.
              </>
            )}
          </p>
          <div className="bg-deep border border-border-subtle rounded-lg p-4 my-4 overflow-x-auto">
            <p className="text-xs text-neutral-500 font-medium mb-2 uppercase tracking-wider">
              {ru ? 'Что появилось — куда оформить' : 'What appeared — where it goes'}
            </p>
            <table className="w-full text-sm text-neutral-300">
              <tbody>
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4">{ru ? 'Постоянное правило' : 'A standing rule'}</td>
                  <td className="py-2 text-emerald-400">{ru ? 'файл-конституция' : 'constitution file'}</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4">{ru ? 'Проверенный факт' : 'A verified fact'}</td>
                  <td className="py-2 text-emerald-400">{ru ? 'индекс памяти' : 'memory index'}</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4">{ru ? 'Подробная документация' : 'Detailed documentation'}</td>
                  <td className="py-2 text-emerald-400">{ru ? 'тематический файл' : 'topic file'}</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2 pr-4">{ru ? 'Повторяемая процедура' : 'A repeatable procedure'}</td>
                  <td className="py-2 text-emerald-400">{ru ? 'скилл' : 'skill'}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">{ru ? 'Автономная роль' : 'An autonomous role'}</td>
                  <td className="py-2 text-emerald-400">{ru ? 'агент' : 'agent'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Chapter 4: Skills and agents as artifacts */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 4: Скиллы и агенты как артефакты'
            : 'Chapter 4: Skills and Agents as Artifacts'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Скилл — это повторяемая процедура, упакованная в отдельный файл-инструкцию. Ключевая часть
                скилла — его описание (description): именно по нему агент решает, применять ли скилл без
                явного вызова. Поэтому описание в первую очередь сообщает, когда скилл вызывать, а не только
                что он делает. Логика проста: повторяемые процедуры не проговариваются в чате каждый раз, а
                кодифицируются в артефакты. Третий раз объясняете агенту одну и ту же последовательность
                шагов — это сигнал, что пора оформить скилл.
              </>
            ) : (
              <>
                A skill is a repeatable procedure packaged into a standalone instruction file. Its key part
                is the description: that is what the agent uses to decide whether to apply the skill without
                an explicit call. So the description must first of all convey when to invoke the skill, not
                just what it does. The logic is simple: repeatable procedures are not re-explained in chat
                every time — they get codified into artifacts. Explaining the same sequence of steps to an
                agent for the third time is the signal that it is time to write a skill.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Скилл создавать не стоит, если задача одноразовая, если инструкция занимает пару строк
                (проще держать её правилом в конституции) или если процедура быстро меняется — артефакт
                устареет раньше, чем окупится. Скилл оправдан, когда процедура повторяется, когда нужно
                одинаковое качество выполнения от раза к разу и когда хочется разгрузить постоянный контекст,
                вынеся процедуру в слой, подгружаемый по требованию. Агент отличается от скилла масштабом:
                это не процедура, а роль — со своим workflow, своим форматом результата и минимальным
                набором инструментов. Агенту, который только читает, не выдают право записи; зоны записи
                называются явно.
              </>
            ) : (
              <>
                Do not create a skill when the task is one-off, when the instruction fits in a couple of
                lines (easier kept as a constitution rule), or when the procedure changes quickly — the
                artifact will go stale before it pays off. A skill is justified when the procedure repeats,
                when you need consistent execution quality every time, and when you want to unload the
                permanent context by moving the procedure into an on-demand layer. An agent differs from a
                skill in scale: it is not a procedure but a role — with its own workflow, its own output
                format, and a minimal tool set. An agent that only reads gets no write access; write zones
                are named explicitly.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Итоговое правило выбора артефакта: ограничение, которое должно соблюдаться всегда, — в
                конституцию; повторяемая процедура, вызываемая по требованию, — в скилл; делегируемая роль со
                своим процессом и инструментами — в агента. В скиллы при этом не кладут продуктовые и
                доменные знания — они принадлежат контексту проекта; скилл кодифицирует процедуру.
              </>
            ) : (
              <>
                The resulting artifact-selection rule: a constraint that must always hold goes into the
                constitution; a repeatable procedure invoked on demand becomes a skill; a delegated role with
                its own process and tools becomes an agent. Product and domain knowledge does not go into
                skills — it belongs to the project context; a skill codifies a procedure.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 5: Hygiene as a cycle */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 5: Гигиена контекста как цикл'
            : 'Chapter 5: Context Hygiene as a Cycle'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Контекст должен эволюционировать, а не храниться. Рабочий цикл гигиены состоит из четырёх
                операций: аудит — сверка записей с реальным состоянием проекта; обновление — добавление и
                правка фактов с проверкой «в какой слой это идёт»; реструктуризация — перекладка, когда
                индекс подходит к лимиту или знания расползлись без ясной принадлежности; чистка — удаление
                протухшего. Сигналы протухания заметны при аудите: упоминания файлов, которых больше нет,
                давно выполненные «TODO», версии технологий, которые сменились, отменённые решения.
              </>
            ) : (
              <>
                Context should evolve, not accumulate. The working hygiene cycle has four operations: audit —
                checking entries against the real state of the project; update — adding and editing facts
                with the &quot;which layer does this go to&quot; check; restructure — reshuffling when the
                index approaches its limit or knowledge has sprawled without clear ownership; cleanup —
                deleting the stale. Staleness signals show up during an audit: references to files that no
                longer exist, long-done &quot;TODO&quot; items, technology versions that have changed,
                reversed decisions.
              </>
            )}
          </p>
          <Terminal
            title="hygiene · zsh"
            lines={[
              { cmd: 'wc -l memory/MEMORY.md', comment: ru ? '# проверить размер индекса' : '# check the index size' },
              { out: '214 memory/MEMORY.md' },
              { out: ru ? '! хвост за лимитом инструмента невидим' : '! the tail beyond the tool limit is invisible', tone: 'warn' },
              { cmd: 'agent audit context', comment: ru ? '# дубли, протухшее, сироты' : '# duplicates, stale, orphans' },
              { out: '✕ 3 stale · 1 duplicate · 2 orphan files', tone: 'bad' },
              { cmd: 'agent cleanup --approve', comment: '# delete > archive' },
              { out: '✓ MEMORY.md 214 → 152', tone: 'ok' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Самый волатильный слой — историю диалога — обслуживает отдельный механизм: compaction. При
                приближении к лимиту окна история сжимается в краткое резюме, сохраняющее важное; стабильные
                слои при этом не трогаются. Как это устроено в конкретном инструменте, разобрано в комнате
                «Claude Code: агентный цикл» на примере auto-compact. Интеллектуальные предки дисциплины —
                методологии управления знаниями: PARA (проекты, зоны, ресурсы, архив), Zettelkasten (один
                файл — одна атомарная тема, связи между файлами) и прогрессивная суммаризация (каждый слой —
                сжатие слоя ниже). Контекст-инжиниринг переносит их из личных заметок в окружение агента.
              </>
            ) : (
              <>
                The most volatile layer — dialogue history — is served by a separate mechanism: compaction.
                As the window limit approaches, the history is compressed into a brief summary that keeps
                what matters; stable layers stay untouched. How a specific tool does this is unpacked in the
                &quot;Claude Code: Agentic Loop&quot; room using auto-compact as the example. The
                discipline&apos;s intellectual ancestors are knowledge-management methodologies: PARA
                (projects, areas, resources, archive), Zettelkasten (one file — one atomic topic, links
                between files), and progressive summarization (each layer compresses the layer below).
                Context engineering carries them from personal notes into the agent&apos;s environment.
              </>
            )}
          </p>
          <div className="bg-emerald-500/5 border-l-4 border-emerald-500 p-6 my-4">
            <h4 className="font-bold text-heading mb-2">
              {ru ? 'Куда дальше' : 'Where to Go Next'}
            </h4>
            <p className="text-neutral-400 leading-relaxed text-sm">
              {ru
                ? 'Персистентность и настройки конкретного инструмента — в комнате «Claude Code: Профессиональный воркфлоу». Механика сжатия истории — в «Claude Code: агентный цикл». Контракты задач для агентов — в «Prompt Contracts», а инструментальный слой и MCP — в «MCP и экосистемы инструментов».'
                : 'Tool-specific persistence and settings live in the "Claude Code: Pro Workflow" room. History-compression mechanics are in "Claude Code: Agentic Loop". Task contracts for agents are in "Prompt Contracts", and the tooling layer with MCP is in "MCP & Tool Ecosystems".'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
