"use client";

import React from 'react';
import Link from 'next/link';
import Term from '@/components/Term';
import Terminal from '@/components/Terminal';

const DOCS_URL = 'https://code.claude.com/docs/en/permission-modes';
const LINK_CLS = 'text-accent-300 hover:text-accent-200 underline underline-offset-4';

const STATUSLINE_JSON = `{
  "statusLine": {
    "type": "command",
    "command": "~/.claude/statusline.sh",
    "padding": 2
  }
}`;

export default function ClaudeCodeProWorkflowTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Claude Code в ежедневной работе: управление автономией' : 'Claude Code in Daily Work: Managing Autonomy'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Эта комната завершает путь агентной разработки и опирается на всё пройденное: цикл агента, работу в терминале, контекст-инжиниринг, MCP. Комната <Link href={`/${lang}/rooms/claude-code-agentic-loop`} className={LINK_CLS}>«Анатомия цикла Claude Code»</Link> объясняла, что происходит внутри агента. Здесь речь о том, как управлять им день за днём: сколько автономии выдавать, как планировать до правок, как возвращаться к прерванной работе, как откатывать неудачные попытки и как настраивать инструмент под себя и под команду.</>
              ) : (
                <>This room closes the agent-coding path and builds on everything before it: the agent loop, terminal work, context engineering, MCP. The <Link href={`/${lang}/rooms/claude-code-agentic-loop`} className={LINK_CLS}>Claude Code Agentic Loop</Link> room explained what happens inside the agent. This one is about managing it day to day: how much autonomy to grant, how to plan before editing, how to return to interrupted work, how to roll back failed attempts, and how to configure the tool for yourself and for a team.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Все факты сверены с официальной документацией Claude Code — страницами о <a href={DOCS_URL} target="_blank" rel="noreferrer noopener" className={LINK_CLS}>режимах прав</a>, сессиях, чекпоинтах, настройках, строке состояния и хуках — в октябре 2026 года, на версии 2.1.304; терминальные фрагменты сняты с этой же версии. Документация обновляется часто, поэтому в каждой главе сначала идёт механизм — какую проблему решает функция, — а уже потом конкретные команды и клавиши. Если клавиша поменяется, механизм останется.</>
              ) : (
                <>All the facts were checked against the official Claude Code documentation — the pages on <a href={DOCS_URL} target="_blank" rel="noreferrer noopener" className={LINK_CLS}>permission modes</a>, sessions, checkpoints, settings, the status line, and hooks — in October 2026, on version 2.1.304; the terminal fragments were captured from the same version. The documentation is updated often, so every chapter starts with the mechanism — which problem a feature solves — and only then gives specific commands and keys. If a key changes, the mechanism stays.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Сквозная мысль комнаты — управление автономией. Агент полезен ровно настолько, насколько ему можно доверить работу без постоянного надзора, и опасен ровно настолько, насколько этому доверию не соответствуют страховки. Режимы прав, план, чекпоинты, иерархия настроек и хуки — разные ручки одного регулятора: каждая позволяет выдать агенту больше свободы там, где это безопасно, и меньше там, где ошибка обходится дорого.'
                : 'The common thread of the room is managing autonomy. An agent is useful exactly to the extent that it can be trusted with work without constant supervision, and dangerous exactly to the extent that the safeguards do not match that trust. Permission modes, plans, checkpoints, the settings hierarchy, and hooks are different knobs on one regulator: each lets you give the agent more freedom where it is safe and less where a mistake is expensive.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'План комнаты — шесть глав. Сначала режимы прав и режим планирования: сколько свободы выдать и как договориться о подходе до правок. Затем сессии и чекпоинты: как продолжить работу, ответвиться и откатиться. Затем настройки и их приоритет: кто кого переопределяет, когда у вас, у команды и у организации разные мнения. В конце — строка состояния и хуки: постоянная обратная связь и автоматизация, которая срабатывает без участия модели.'
                : 'The room has six chapters. First permission modes and plan mode: how much freedom to grant and how to agree on an approach before editing. Then sessions and checkpoints: how to continue work, branch off, and roll back. Then settings and their precedence: who overrides whom when you, your team, and your organization disagree. Finally the status line and hooks: constant feedback and automation that fires without the model\'s involvement.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 1 */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 1: Режимы прав — сколько автономии выдать' : 'Chapter 1: Permission Modes — How Much Autonomy to Grant'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <><Term id="permission-mode" lang={lang}>Режим прав</Term> задаёт базовую линию: что агент делает без вашего подтверждения. Основных режимов четыре. Manual (в конфигурации он называется default): без вопросов только чтение, а всё, что меняет файлы или запускает команды, требует подтверждения. acceptEdits: агент сам правит файлы и выполняет обычные файловые команды вроде mkdir и mv, но спрашивает о прочих. plan: только исследование и план, исходники не меняются. auto: разрешено всё, но с фоновыми проверками классификатора, который блокирует рискованные действия вместо того, чтобы спрашивать вас.</>
              ) : (
                <>A <Term id="permission-mode" lang={lang}>permission mode</Term> sets the baseline: what the agent does without your approval. There are four main modes. Manual (called default in the configuration): only reads run without asking, and anything that changes files or runs commands needs approval. acceptEdits: the agent edits files and runs common filesystem commands such as mkdir and mv on its own, but asks about other commands. plan: exploration and a plan only, the source stays unchanged. auto: everything is allowed, but with background checks by a classifier that blocks risky actions instead of asking you.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Два оставшихся режима — для особых условий. dontAsk разрешает только заранее одобренные инструменты и чтение в рабочих каталогах, а всё, что потребовало бы вопроса, просто запрещает: это режим для закрытых сценариев в CI и скриптах, где спросить некого. bypassPermissions разрешает всё без проверок; документация прямо ограничивает его изолированными контейнерами и виртуальными машинами. Флаг с говорящим названием --dangerously-skip-permissions включает именно его. Полный список режимов виден в справке самого инструмента.'
                : 'The two remaining modes are for special conditions. dontAsk allows only pre-approved tools and reads in the working directories, and simply denies anything that would need a question: this is the mode for locked-down scenarios in CI and scripts, where there is nobody to ask. bypassPermissions allows everything without checks; the documentation explicitly limits it to isolated containers and virtual machines. The flag with the telling name --dangerously-skip-permissions turns on exactly this mode. The full list of modes is visible in the tool\'s own help.'}
            </p>
            <Terminal
              title="claude 2.1.304 · bash"
              lines={[
                { cmd: 'claude --help', comment: lang === 'ru' ? '# фрагмент, отступы сокращены' : '# excerpt, indentation shortened' },
                { out: '  --permission-mode <mode>  Permission mode to use for the session' },
                { out: '                            (choices: "acceptEdits", "auto",' },
                { out: '                            "bypassPermissions", "manual",' },
                { out: '                            "dontAsk", "plan")' },
              ]}
            />
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'В справке вместо default стоит manual — это допустимый синоним при вводе. Переключение в сессии — Shift+Tab: из auto первое нажатие ведёт в Manual, дальше по кругу acceptEdits и plan; текущий режим виден в строке под полем ввода, например «⏸ plan mode on». При запуске режим задаёт флаг --permission-mode, а режим по умолчанию для проекта — ключ permissions.defaultMode в настройках. Поверх режима работают правила для конкретных инструментов и команд: разрешить, спросить, запретить — например, разрешить Bash(npm test). Правила запрета действуют в любом режиме, даже в bypassPermissions.'
                : 'The help says manual instead of default — an accepted synonym when you type the value. In a session you switch with Shift+Tab: from auto the first press goes to Manual, then around through acceptEdits and plan; the current mode is shown in the line under the input, for example "⏸ plan mode on." At startup the mode is set by the --permission-mode flag, and a project\'s default mode by the permissions.defaultMode settings key. On top of the mode, rules for specific tools and commands apply: allow, ask, deny — for example, allow Bash(npm test). Deny rules apply in every mode, even in bypassPermissions.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Есть и действия, которые не одобряет автоматически ни один режим: инструменты с явным правилом «спрашивать», вопросы агента к вам и удаление критических путей — корня файловой системы, каталогов верхнего уровня, домашнего каталога, рабочего каталога и его родителей. Практический выбор режима выглядит так. Незнакомый код или чувствительная задача — Manual или plan. Итерации над кодом, который вы всё равно просматриваете, — acceptEdits. Длинные задачи, где вопросы утомляют, — auto. CI — dontAsk с явным списком разрешений. bypassPermissions — только там, где ошибке негде навредить.'
                : 'There are also actions that no mode approves automatically: tools with an explicit "ask" rule, the agent\'s questions to you, and removal of critical paths — the filesystem root, top-level directories, your home directory, the working directory and its parents. In practice, choosing a mode looks like this. Unfamiliar code or a sensitive task — Manual or plan. Iterating on code you review anyway — acceptEdits. Long tasks where questions become tiring — auto. CI — dontAsk with an explicit allow list. bypassPermissions — only where a mistake has nothing to harm.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 2 */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 2: Режим планирования: сначала план, потом правки' : 'Chapter 2: Plan Mode: The Plan First, Then the Edits'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'В режиме планирования агент исследует и предлагает, но не меняет исходники: читает файлы, запускает команды для изучения проекта и пишет план. Правки заблокированы, пока вы не одобрите план. Войти можно тремя способами: Shift+Tab в сессии, префикс /plan перед отдельным сообщением или флаг --permission-mode plan при запуске. Повторное нажатие Shift+Tab выходит из режима без одобрения плана — например, если вы передумали и хотите просто задать вопрос.'
                : 'In plan mode the agent explores and proposes but does not change the source: it reads files, runs commands to study the project, and writes a plan. Edits are blocked until you approve the plan. There are three ways in: Shift+Tab in a session, a /plan prefix in front of a single message, or the --permission-mode plan flag at startup. Pressing Shift+Tab again leaves the mode without approving a plan — for example, if you changed your mind and just want to ask a question.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Когда план готов, агент показывает его и спрашивает, как действовать дальше. Вариантов три: одобрить и продолжить в автоматическом режиме; одобрить и подтверждать каждую правку вручную; отказаться и продолжить планирование, объяснив, что изменить. Клавиши Ctrl+G открывают план в вашем текстовом редакторе, и его можно поправить руками до того, как агент начнёт работу. Одобрение выводит сессию из режима планирования в выбранный режим, а принятый план к тому же даёт сессии осмысленное название.'
                : 'When the plan is ready, the agent presents it and asks how to proceed. There are three options: approve and continue in auto mode; approve and confirm each edit manually; decline and keep planning, explaining what to change. Ctrl+G opens the plan in your text editor, so you can fix it by hand before the agent starts. Approval takes the session out of plan mode into the chosen mode, and an accepted plan also gives the session a meaningful title.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'План — не только способ подумать вместе с агентом, но и артефакт. Он хранится на диске и после сжатия контекста возвращается в него заново, тогда как подробные договорённости из ранних сообщений сжатие может потерять. Поэтому план работает как короткая спецификация задачи, которая переживает длинную сессию: агент сверяется с ним, даже когда начало разговора уже свёрнуто в резюме. Это прямое следствие механики компакции, разобранной в комнате об анатомии цикла.'
                : 'A plan is not only a way to think together with the agent but also an artifact. It is stored on disk and re-injected into the context after compaction, while detailed agreements from early messages may be lost in compression. That is why a plan works as a short task specification that survives a long session: the agent checks against it even when the beginning of the conversation has already been folded into a summary. This follows directly from the compaction mechanics covered in the agentic-loop room.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Когда планировать, а когда нет. План окупается, когда изменение затрагивает несколько файлов, когда код незнаком, когда разумных подходов несколько и цена неверного выбора высока. Для правки одной строки он избыточен: исследование займёт больше времени, чем сама правка. Хорошее рабочее правило: если вы не можете заранее сказать, какие файлы изменятся, начните с плана. Тот же принцип «сначала обсудить, потом править» в OpenCode реализован через отдельного агента plan — сравните с комнатой <Link href={`/${lang}/rooms/opencode-terminal-agent`} className={LINK_CLS}>«OpenCode: открытый агент в терминале»</Link>.</>
              ) : (
                <>When to plan and when not to. A plan pays off when a change touches several files, when the code is unfamiliar, when there are several reasonable approaches and the cost of a wrong choice is high. For a one-line fix it is overkill: the exploration takes longer than the edit itself. A good working rule: if you cannot say in advance which files will change, start with a plan. The same &quot;discuss first, edit later&quot; principle is implemented in OpenCode as a separate plan agent — compare with the <Link href={`/${lang}/rooms/opencode-terminal-agent`} className={LINK_CLS}>OpenCode: The Open Terminal Agent</Link> room.</>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 3 */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 3: Сессии: продолжить, найти, ответвиться' : 'Chapter 3: Sessions: Continue, Find, Branch Off'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Claude Code непрерывно сохраняет разговор на диск: каждое сообщение, вызов инструмента и результат пишутся в текстовый JSONL-файл в каталоге ~/.claude/projects/. Это не только архив: благодаря такой записи сессию можно продолжить после закрытия терминала, найти среди прочих, разветвить и откатить. При этом сессии независимы. Новая начинается с чистого контекстного окна, без истории предыдущих; то, что должно переходить между сессиями, живёт в CLAUDE.md и автоматической памяти. Точки входа видны прямо в справке.'
                : 'Claude Code continuously saves the conversation to disk: every message, tool call, and result is written to a plain-text JSONL file in the ~/.claude/projects/ directory. This is more than an archive: thanks to the record, a session can be continued after the terminal is closed, found among others, branched, and rolled back. At the same time sessions are independent. A new one starts with a clean context window, without the history of previous ones; whatever must carry over between sessions lives in CLAUDE.md and auto memory. The entry points are visible right in the help.'}
            </p>
            <Terminal
              title="claude 2.1.304 · bash"
              lines={[
                { cmd: 'claude --help', comment: lang === 'ru' ? '# фрагмент: флаги сессий' : '# excerpt: session flags' },
                { out: '  -c, --continue        Continue the most recent conversation in' },
                { out: '                        the current directory' },
                { out: '  --fork-session        When resuming, create a new session ID' },
                { out: '                        instead of reusing the original (use' },
                { out: '                        with --resume or --continue)' },
                { out: '  -n, --name <name>     Set a display name for this session' },
                { out: '                        (shown in the prompt box, /resume' },
                { out: '                        picker, and terminal title)' },
                { out: '  -r, --resume [value]  Resume a conversation by session ID or' },
                { out: '                        name, or open interactive picker with' },
                { out: '                        optional search term' },
              ]}
            />
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Читается так. claude -c открывает последнюю сессию в текущем каталоге — самый частый случай «вернуться к тому, что делал». claude -r без аргумента открывает список для выбора, с аргументом продолжает сессию по ID или по имени. Имя задаётся при запуске (claude -n auth-refactor) или в процессе командой /rename; безымянная сессия получает автоматический заголовок по первому сообщению, и по нему тоже можно возобновить. Внутри работающей сессии переключиться на другую можно командой /resume.'
                : 'This reads as follows. claude -c opens the most recent session in the current directory — the most common case of "get back to what I was doing." claude -r with no argument opens a picker; with an argument it resumes a session by ID or by name. A name is set at startup (claude -n auth-refactor) or along the way with /rename; an unnamed session gets an automatic title based on the first message, and it can be resumed by that title too. Inside a running session you can switch to another one with /resume.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Ответвление — способ попробовать другой подход, не теряя текущий. Команда /branch или флаг --fork-session вместе с -c или -r копирует историю в новую сессию с новым ID; оригинал остаётся нетронутым и доступен в списке. Противоположный случай стоит знать как ошибку: если открыть одну и ту же сессию в двух терминалах без ответвления, сообщения из обоих перемешаются в одной записи. Сессии привязаны к каталогу, поэтому для параллельной работы над разными ветками удобны <Term id="worktree" lang={lang}>git worktree</Term> — отдельные каталоги для отдельных веток, у каждого свои сессии.</>
              ) : (
                <>Branching off is a way to try a different approach without losing the current one. The /branch command, or the --fork-session flag together with -c or -r, copies the history into a new session with a new ID; the original stays untouched and available in the picker. The opposite case is worth knowing as a mistake: if you open the same session in two terminals without forking, the messages from both interleave into one record. Sessions are tied to a directory, so for parallel work on different branches <Term id="worktree" lang={lang}>git worktrees</Term> are convenient — separate directories for separate branches, each with its own sessions.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Сессии — ещё и способ разделять задачи. Команда /clear начинает чистый контекст для новой задачи, но прежний разговор не удаляет: он сохранён и доступен через /resume, а в том же процессе — и через меню отката. Отсюда рабочая привычка: одна задача — одна именованная сессия. Переключаясь между задачами, не тащите в контекст старую историю — она занимает место и отвлекает модель, — а открывайте нужную сессию по имени. Закрытая задача оставляет после себя журнал: что агент читал, что правил и чем проверял, — тот самый журнал, который разбирался в комнате об анатомии цикла.'
                : 'Sessions are also a way to separate tasks. The /clear command starts a clean context for a new task but does not delete the previous conversation: it is saved and available through /resume, and within the same process also through the rewind menu. Hence a working habit: one task, one named session. When you switch between tasks, do not drag the old history into the context — it takes space and distracts the model — but open the right session by name. A finished task leaves a log behind: what the agent read, what it edited, and how it verified — the very kind of log taken apart in the agentic-loop room.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 4 */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 4: Чекпоинты и /rewind: откат без страха' : 'Chapter 4: Checkpoints and /rewind: Rolling Back Without Fear'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Каждое ваше сообщение, которое начинает новый ход, создаёт <Term id="checkpoint" lang={lang}>чекпоинт</Term>: Claude Code сохраняет состояние файлов, которые агент правит своими инструментами. В сессии хранятся снимки для ста последних чекпоинтов, вместе с разговором, поэтому откат работает и после возобновления сессии. Снимки удаляются при плановой очистке — по умолчанию примерно через 30 дней после последнего сохранения; срок задаёт настройка cleanupPeriodDays.</>
              ) : (
                <>Each of your messages that starts a new turn creates a <Term id="checkpoint" lang={lang}>checkpoint</Term>: Claude Code saves the state of the files the agent edits with its tools. A session keeps snapshots for the 100 most recent checkpoints, together with the conversation, so rollback works after resuming a session too. Snapshots are deleted in the scheduled cleanup — by default about 30 days after the last save; the period is set by the cleanupPeriodDays setting.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Меню отката открывается командой /rewind или двойным Esc на пустой строке ввода. В нём список ваших сообщений; выбрав точку, можно восстановить код и разговор; восстановить только разговор, оставив код как есть; восстановить только код, оставив разговор; сжать разговор начиная с этой точки или до неё. Последние два варианта — точечная альтернатива /compact: они освобождают контекст, не трогая файлы. После восстановления разговора исходное сообщение возвращается в поле ввода — его можно отредактировать и отправить заново.'
                : 'The rewind menu opens with /rewind or a double Esc on an empty input line. It lists your messages; after picking a point, you can restore code and conversation; restore only the conversation, keeping the code as it is; restore only the code, keeping the conversation; or summarize the conversation from that point or up to it. The last two options are a targeted alternative to /compact: they free context without touching files. After the conversation is restored, the original message comes back into the input field, ready to be edited and sent again.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Типичные сценарии. Агент выбрал неудачный подход и успел переписать три файла — откатить код и разговор к сообщению с задачей и сформулировать её точнее. Код получился хорошим, но разговор зашёл в тупик и засорил контекст — восстановить только разговор. Длинная отладка съела окно — сжать её середину, сохранив исходные инструкции. Откат дешёв, и это меняет саму манеру работы: варианты можно пробовать смелее, зная, что вернуться к исходной точке — дело нескольких секунд.'
                : 'Typical scenarios. The agent took a bad approach and has already rewritten three files — roll back code and conversation to the message with the task and phrase it more precisely. The code came out well, but the conversation hit a dead end and cluttered the context — restore only the conversation. A long debugging session ate the window — summarize its middle, keeping the original instructions. Rollback is cheap, and that changes the way you work: you can try options more boldly, knowing that returning to the starting point takes a few seconds.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'У механизма есть границы. Изменения, сделанные командами оболочки (rm, mv, cp), не отслеживаются. Правки субагентов, как правило, не попадают в чекпоинты основной сессии, и откатывать их приходится через git. Ручные правки вне Claude Code и изменения из параллельных сессий тоже не учитываются, а действия во внешних системах — запись в базу данных, вызов API, деплой — не откатываются вовсе. Чекпоинты — механизм уровня сессии, а не замена системе контроля версий: для истории, веток и совместной работы остаётся git. Похожую роль в OpenCode играет команда /undo, но и она не отменяет коммитов.'
                : 'The mechanism has limits. Changes made by shell commands (rm, mv, cp) are not tracked. Subagent edits usually do not land in the main session\'s checkpoints, and they have to be reverted with git. Manual edits outside Claude Code and changes from parallel sessions are not captured either, and actions in external systems — a database write, an API call, a deployment — cannot be rolled back at all. Checkpoints are a session-level mechanism, not a replacement for version control: history, branches, and collaboration remain git\'s job. The /undo command plays a similar role in OpenCode, and it does not replace commits either.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 5 */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 5: Настройки: кто кого переопределяет' : 'Chapter 5: Settings: Who Overrides Whom'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Claude Code читает настройки из четырёх файлов, и у каждого своя область действия. Пользовательские (~/.claude/settings.json) действуют во всех ваших проектах на этой машине: тема, модель по умолчанию, личные правила прав. Общие проектные (.claude/settings.json в репозитории) коммитятся и действуют для всей команды: общие права, хуки, плагины, переменные окружения. Локальные проектные (.claude/settings.local.json) — ваши личные поправки для одного проекта; создавая этот файл, Claude Code сам исключает его из git. Наконец, управляемые настройки разворачивает организация — файлом managed-settings.json, политикой MDM или с консоли claude.ai.'
                : 'Claude Code reads settings from four files, and each has its own scope. User settings (~/.claude/settings.json) apply in all your projects on this machine: theme, default model, personal permission rules. Shared project settings (.claude/settings.json in the repository) are committed and apply to the whole team: shared permissions, hooks, plugins, environment variables. Local project settings (.claude/settings.local.json) are your personal overrides for one project; when Claude Code creates this file, it keeps it out of git itself. Finally, managed settings are deployed by an organization — via a managed-settings.json file, an MDM policy, or the claude.ai console.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Если один и тот же ключ задан в нескольких местах, побеждает уровень выше. Порядок приоритета, от высшего к низшему: управляемые настройки организации; командная строка (JSON через флаг --settings, только на эту сессию); локальные проектные; общие проектные; пользовательские. Неочевидное здесь вот что: общие проектные настройки команды сильнее ваших пользовательских, а ваши локальные проектные — сильнее командных. Управляемые не переопределяет ничто, даже флаг --settings.'
                : 'When the same key is set in several places, the higher level wins. The order of precedence, from highest to lowest: the organization\'s managed settings; the command line (JSON via the --settings flag, for this session only); local project settings; shared project settings; user settings. The non-obvious part is this: the team\'s shared project settings beat your user settings, and your local project settings beat the team\'s. Nothing overrides managed settings, not even the --settings flag.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Пример из документации. Вы отключили подсказки под индикатором работы, записав "spinnerTipsEnabled": false в ~/.claude/settings.json. В одном проекте подсказки всё равно появляются: командный .claude/settings.json включает их, а проектный уровень выше пользовательского. Вернуть своё можно, записав false в .claude/settings.local.json этого проекта — локальный уровень выше командного, и коллег это не затронет. Если же подсказки включила организация через управляемые настройки, вернуть значение нельзя: команда /status покажет, откуда пришёл ключ, а менять политику придётся через администратора.'
                : 'An example from the documentation. You turned off the tips under the progress spinner by writing "spinnerTipsEnabled": false in ~/.claude/settings.json. In one project the tips still appear: the team\'s .claude/settings.json turns them on, and the project level is above the user level. You can get your value back by writing false in that project\'s .claude/settings.local.json — the local level is above the team\'s, and your colleagues are not affected. But if the organization turned the tips on through managed settings, you cannot get your value back: /status shows where the key came from, and changing the policy goes through an administrator.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Из правила «побеждает высший» есть исключение: списки сливаются. Если permissions.allow задан и в пользовательском, и в проектном файле, Claude Code объединяет оба списка, а не выбирает один. Это удобно: команда задаёт общий набор разрешений, а вы добавляете свои, не стирая чужие. Переменные окружения в эту лестницу не входят — для них порядок определён отдельно для каждой пары «переменная — ключ». А инструкции в CLAUDE.md — отдельная система со своими уровнями (организация, пользователь, проект, локальный файл); её разбирает комната <Link href={`/${lang}/rooms/context-engineering-101`} className={LINK_CLS}>«Контекст-инжиниринг 101»</Link>.</>
              ) : (
                <>There is one exception to &quot;the highest wins&quot;: lists merge. If permissions.allow is set in both the user and the project file, Claude Code combines both lists rather than picking one. This is convenient: the team defines a shared set of permissions, and you add your own without erasing anyone else&apos;s. Environment variables are not part of this ladder — their order is defined separately for each variable-and-key pair. And instructions in CLAUDE.md are a separate system with its own levels (organization, user, project, local file); the <Link href={`/${lang}/rooms/context-engineering-101`} className={LINK_CLS}>Context Engineering 101</Link> room covers it.</>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 6 */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 6: Строка состояния, хуки и учёт расходов' : 'Chapter 6: The Status Line, Hooks, and Cost Tracking'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Строка состояния — настраиваемая полоса внизу интерфейса. Устроена она просто: Claude Code запускает указанный вами скрипт, передаёт ему на стандартный ввод JSON с данными сессии и показывает то, что скрипт напечатает. В JSON есть модель, рабочий каталог, стоимость сессии, заполненность контекстного окна (поле context_window.used_percentage, оно считается только по входным токенам) и многое другое. Скрипт можно написать на чём угодно — bash, Python, Node.js; работает он локально и токенов не тратит.'
                : 'The status line is a customizable bar at the bottom of the interface. It works simply: Claude Code runs a script you specify, passes it JSON with session data on standard input, and displays whatever the script prints. The JSON includes the model, the working directory, the session cost, context-window usage (the context_window.used_percentage field, computed from input tokens only), and much more. The script can be written in anything — bash, Python, Node.js; it runs locally and spends no tokens.'}
            </p>
            <div className="bg-deep border border-border-subtle rounded-lg p-4 my-4">
              <p className="text-xs text-neutral-500 font-medium mb-2 uppercase tracking-wider">
                {lang === 'ru' ? 'Подключение скрипта в ~/.claude/settings.json (пример из документации)' : 'Wiring a script in ~/.claude/settings.json (documentation example)'}
              </p>
              <pre className="text-sm text-accent-300/90 leading-relaxed overflow-x-auto whitespace-pre">{STATUSLINE_JSON}</pre>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Настроить строку можно двумя путями. Команда /statusline принимает описание на естественном языке — например, «показывай модель и процент контекста с полоской» — и сама пишет скрипт в ~/.claude/ и прописывает его в настройках. Или вручную, как в примере выше: ключ statusLine с типом command и путём к скрипту. Скрипт перезапускается по событиям — новое сообщение агента, завершение /compact, смена режима прав; обновления сглаживаются с интервалом 300 мс, а для часов и других данных по времени есть параметр refreshInterval.'
                : 'There are two ways to set it up. The /statusline command takes a natural-language description — for example, "show the model and context percentage with a progress bar" — and writes the script into ~/.claude/ and registers it in the settings itself. Or by hand, as in the example above: a statusLine key with the command type and a path to the script. The script re-runs on events — a new agent message, /compact finishing, a permission mode change; updates are debounced at 300 ms, and for a clock or other time-based data there is a refreshInterval parameter.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <><Term id="agent-hook" lang={lang}>Хуки</Term> — следующая ступень автоматизации. Хук — команда, которую Claude Code сам запускает в определённый момент жизненного цикла: SessionStart — при начале или возобновлении сессии; PreToolUse — перед вызовом инструмента, и такой хук может вызов заблокировать; PostToolUse — после успешного вызова; Stop — когда агент закончил ответ; Notification — когда Claude Code отправляет уведомление, например о том, что ждёт вашего подтверждения. Типичные применения из документации: прогнать форматтер после каждой правки, запретить правки защищённых файлов, получить уведомление о вопросе агента, вернуть важный контекст после сжатия.</>
              ) : (
                <><Term id="agent-hook" lang={lang}>Hooks</Term> are the next step of automation. A hook is a command that Claude Code itself runs at a specific point in its lifecycle: SessionStart — when a session begins or resumes; PreToolUse — before a tool call, and such a hook can block the call; PostToolUse — after a successful call; Stop — when the agent has finished responding; Notification — when Claude Code sends a notification, for example that it is waiting for your approval. Typical uses from the documentation: run a formatter after every edit, block edits to protected files, get notified when the agent asks something, restore important context after compaction.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Главное отличие хука от инструкции в CLAUDE.md — детерминированность. Правило в CLAUDE.md — просьба к модели: она его учитывает, но может забыть или неверно применить, особенно после сжатия длинной истории. Хук выполняет обвязка, а не модель: если хук PostToolUse запускает форматтер, форматтер запустится после каждой правки без исключений. Отсюда практическое правило: то, что должно происходить всегда, оформляйте хуком; то, что требует суждения, — инструкцией. Хуки живут в тех же файлах настроек, поэтому хук из командного .claude/settings.json получит каждый, кто работает с репозиторием.'
                : 'The key difference between a hook and an instruction in CLAUDE.md is determinism. A rule in CLAUDE.md is a request to the model: it takes it into account but may forget it or apply it wrongly, especially after a long history is compacted. A hook is executed by the harness, not by the model: if a PostToolUse hook runs a formatter, the formatter runs after every edit without exception. Hence a practical rule: what must always happen goes into a hook; what requires judgment goes into an instruction. Hooks live in the same settings files, so a hook in the team\'s .claude/settings.json reaches everyone who works with the repository.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Последнее — деньги. Команда /usage показывает расход текущей сессии: при работе через API — токены и оценку в долларах по прейскуранту, для подписчиков тарифов Pro и Max — шкалы использования лимитов. Долларовая оценка вычисляется локально и не заменяет официальный учёт в консоли. Связка «строка состояния плюс /usage» даёт постоянную обратную связь о цене работы, а на уровне команды эту тему продолжает комната <Link href={`/${lang}/rooms/agentic-cost-latency`} className={LINK_CLS}>AC-302 о стоимости и задержках</Link>.</>
              ) : (
                <>One last thing — money. The /usage command shows the current session&apos;s spending: when working through the API, tokens and a dollar estimate at list price; for Pro and Max subscribers, bars showing usage of the plan limits. The dollar estimate is computed locally and does not replace the official accounting in the console. The &quot;status line plus /usage&quot; pair gives constant feedback on the price of the work, and at the team level the topic continues in the <Link href={`/${lang}/rooms/agentic-cost-latency`} className={LINK_CLS}>AC-302 room on cost and latency</Link>.</>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Practitioner's summary */}
      <section>
        <div className="bg-card-dark border border-accent-500/20 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4 text-heading">
            {lang === 'ru' ? 'Итог для практика (краткий блок)' : 'Practitioner\'s Summary (short block)'}
          </h3>
          <ul className="text-neutral-300 leading-relaxed space-y-3 list-disc list-inside">
            <li>{lang === 'ru' ? 'Режимы: Manual (default), acceptEdits, plan, auto — по Shift+Tab; dontAsk — для CI; bypassPermissions — только в изоляции. Правила запрета действуют в любом режиме.' : 'Modes: Manual (default), acceptEdits, plan, auto — via Shift+Tab; dontAsk — for CI; bypassPermissions — only in isolation. Deny rules apply in every mode.'}</li>
            <li>{lang === 'ru' ? 'План: Shift+Tab или /plan, одобрение — с выбором следующего режима, Ctrl+G — правка плана в редакторе; план переживает сжатие контекста.' : 'Plan: Shift+Tab or /plan, approval with a choice of the next mode, Ctrl+G to edit the plan in an editor; the plan survives context compaction.'}</li>
            <li>{lang === 'ru' ? 'Сессии: claude -c — последняя, claude -r — выбор или по имени, -n и /rename — имя, /branch и --fork-session — копия с новым ID.' : 'Sessions: claude -c — the latest, claude -r — picker or by name, -n and /rename — naming, /branch and --fork-session — a copy with a new ID.'}</li>
            <li>{lang === 'ru' ? 'Откат: /rewind или Esc Esc; только правки файловых инструментов, не команды оболочки и не внешние системы; git остаётся обязательным.' : 'Rollback: /rewind or Esc Esc; only file-tool edits, not shell commands and not external systems; git remains mandatory.'}</li>
            <li>{lang === 'ru' ? 'Приоритет настроек: managed → --settings → local → project → user; списки вроде permissions.allow сливаются.' : 'Settings precedence: managed → --settings → local → project → user; lists such as permissions.allow merge.'}</li>
            <li>{lang === 'ru' ? 'Строка состояния — скрипт с JSON на stdin; хуки — детерминированная автоматизация, которую выполняет обвязка, а не модель; расход — /usage.' : 'The status line is a script with JSON on stdin; hooks are deterministic automation executed by the harness, not the model; spending is in /usage.'}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
