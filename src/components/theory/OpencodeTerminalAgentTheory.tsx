"use client";

import React from 'react';
import Link from 'next/link';
import Term from '@/components/Term';
import Terminal from '@/components/Terminal';
import Screenshot from '@/components/Screenshot';

const SHOTS = '/images/rooms/opencode-terminal-agent';
const GITHUB_URL = 'https://github.com/anomalyco/opencode';
const LINK_CLS = 'text-accent-300 hover:text-accent-200 underline underline-offset-4';

export default function OpencodeTerminalAgentTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'OpenCode: открытый агент в терминале' : 'OpenCode: The Open Agent in the Terminal'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'В этом пути вы уже разобрали, как устроен цикл кодинг-агента и как выглядит дисциплина работы с ним в терминале. Все примеры до сих пор опирались в основном на закрытые коммерческие инструменты. У них есть общее свойство: код агента закрыт, а модель, на которой он работает, выбирает поставщик. OpenCode — проверка того, насколько эти идеи универсальны: тот же цикл «собрать контекст → изменить код → проверить результат», но в проекте, у которого открыт исходный код и не зафиксирована модель.'
                : 'Earlier in this path you took apart how a coding agent\'s loop works and what disciplined terminal work with one looks like. So far the examples have mostly relied on closed commercial tools. They share one property: the agent\'s code is closed, and the model it runs on is chosen by the company that ships it. OpenCode is a test of how universal those ideas are: the same "gather context → change code → verify the result" loop, but in a project whose source code is open and whose model is not fixed.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Комната построена вокруг трёх подлинных снимков одной рабочей сессии OpenCode — сессии, в которой владелец AI-Learn поручил агенту править документацию этого самого сайта. Это не постановочные кадры из рекламы: на снимках видны реальные имена файлов из репозитория платформы, реальный счётчик токенов и реальное сообщение о том, что на машине сломался git. Читать такие снимки — отдельный навык: интерфейс терминального агента плотный, и почти каждая строка в нём что-то означает.'
                : 'The room is built around three genuine captures of one working OpenCode session — a session in which the owner of AI-Learn had the agent edit the documentation of this very site. These are not staged marketing frames: the captures show real file names from the platform repository, a real token counter, and a real report that git was broken on the machine. Reading such captures is a skill of its own: a terminal agent\'s interface is dense, and nearly every line in it means something.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'План комнаты такой. Сначала — что за проект OpenCode и почему открытость кода и свобода выбора модели меняют расстановку сил. Затем — агенты build и plan: как один инструмент разводит «думать» и «править» через систему прав. Дальше — команды: файл правил AGENTS.md, откат /undo, навигация /timeline и проверка /review. Четвёртая глава медленно читает реальный ход сессии — от подписи агента до строки состояния. Пятая — про модели: что такое шлюз OpenCode Zen и почему в подписи агента может стоять модель с несерьёзным именем Big Pickle.'
                : 'The plan of the room is this. First, what kind of project OpenCode is and why open code plus a free choice of model changes the balance of power. Then the build and plan agents: how one tool separates "thinking" from "editing" through a permission system. Next, the commands: the AGENTS.md rules file, the /undo rollback, /timeline navigation, and the /review check. Chapter four slowly reads the real session — from the agent label to the status bar. Chapter five is about models: what the OpenCode Zen gateway is and why the agent label can carry a model with the unserious name Big Pickle.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Отдельная причина смотреть на OpenCode внимательно: приёмы из других комнат этого пути — режим планирования, файл правил проекта, чекпоинты, контроль контекстного окна — здесь встречаются под другими именами. Когда одна и та же идея независимо появляется в конкурирующих инструментах, это сигнал, что идея принадлежит ремеслу, а не конкретному продукту. Такие совпадения в этой комнате будут отмечаться явно — со ссылками на комнаты, где каждый приём разобран подробно.'
                : 'There is a separate reason to look at OpenCode closely: the techniques from other rooms in this path — a planning mode, a project rules file, checkpoints, context-window control — appear here under different names. When the same idea shows up independently in competing tools, that is a signal the idea belongs to the craft rather than to a particular product. This room will point out those coincidences explicitly — with links to the rooms where each technique is covered in detail.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 1 */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 1: Что такое OpenCode' : 'Chapter 1: What OpenCode Is'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>OpenCode — кодинг-<Term id="agent" lang={lang}>агент</Term> с открытым исходным кодом под лицензией MIT. Основной интерфейс — терминальный (TUI, text user interface), но есть настольное приложение и расширение для IDE. Проект развивает команда Anomaly; <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener" className={LINK_CLS}>репозиторий на GitHub</a> к августу 2026 года собрал порядка двухсот тысяч звёзд — по этой метрике это один из самых заметных открытых агентов вообще. Открытость здесь означает буквально: код, который решает, какие файлы читать, как формировать промпт и когда останавливаться, можно открыть и прочитать — а при желании изменить.</>
              ) : (
                <>OpenCode is an open-source coding <Term id="agent" lang={lang}>agent</Term> under the MIT license. Its primary interface is a terminal one (a TUI, text user interface), with a desktop app and an IDE extension alongside. The project is developed by the Anomaly team; by August 2026 <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener" className={LINK_CLS}>the GitHub repository</a> had gathered around two hundred thousand stars — by that metric, one of the most visible open agents anywhere. Openness here is literal: the code that decides which files to read, how to build the prompt, and when to stop can be opened and read — and, if you wish, changed.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Второе отличие важнее первого: OpenCode не привязан к модели. Собственной фундаментальной модели у проекта нет, и он её не навязывает — агент подключается к любому поставщику по API-ключу: Anthropic, OpenAI, Google, открытые модели через локальные среды запуска или облачные шлюзы. Для команды, которая не может отправлять код внешнему сервису, это способ получить агента на своей инфраструктуре; для остальных — возможность менять модель под задачу и бюджет, не меняя привычки и настройки.'
                : 'The second difference matters more than the first: OpenCode is not tied to a model. The project has no foundation model of its own and imposes none — the agent connects to any provider via an API key: Anthropic, OpenAI, Google, open models through local runtimes or cloud gateways. For a team that cannot send code to an external service, this is a way to get an agent on their own infrastructure; for everyone else, a way to swap the model to fit the task and the budget without changing habits or settings.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Установка — одна команда, и дальше агент запускается из каталога проекта. Сессия ниже показывает типичное начало: установить, зайти в репозиторий, запустить.'
                : 'Installation is a single command, and from there the agent starts from the project directory. The session below shows a typical start: install, enter the repository, run.'}
            </p>
            <Terminal
              title="opencode · zsh"
              lines={[
                { cmd: 'curl -fsSL https://opencode.ai/install | bash', comment: lang === 'ru' ? '# или: npm i -g opencode-ai' : '# or: npm i -g opencode-ai' },
                { out: 'opencode installed successfully', tone: 'ok' },
                { cmd: 'cd my-project' },
                { cmd: 'opencode', comment: lang === 'ru' ? '# TUI откроется в этом каталоге' : '# the TUI opens in this directory' },
              ]}
            />
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Почему открытый агент — событие для этого пути, а не просто ещё один инструмент в списке? Потому что он разделяет два вопроса, которые в закрытых продуктах склеены: «кто написал агента» и «чья модель думает». В закрытом инструменте оба ответа даёт один поставщик, и смена одного означает смену другого. В OpenCode оркестровка и интеллект разведены: скрипты, права, интерфейс — от открытого проекта; модель — от кого угодно. Дальше в комнате будет видно, что из этого разделения следуют вполне практические вещи: от выбора разных моделей для разных агентов до слепых тестов моделей под кодовыми именами.'
                : 'Why is an open agent an event for this path rather than one more list entry? Because it separates two questions that closed products glue together: "who wrote the agent" and "whose model does the thinking." In a closed tool one company answers both, and changing one answer means changing the other. In OpenCode, orchestration and intelligence are decoupled: the scripts, permissions, and interface come from the open project; the model comes from anyone. Later in the room you will see practical consequences of this split — from assigning different models to different agents to blind tests of models under codenames.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 2 */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 2: Агенты build и plan — права вместо обещаний' : 'Chapter 2: The build and plan Agents — Permissions, Not Promises'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'В OpenCode «агент» — это именованный профиль поверх сессии: свой системный промпт, свой набор прав, при желании — своя модель. Встроенных основных агентов два. Build — рабочая лошадка по умолчанию: ему доступны все инструменты, включая правку файлов и команды оболочки. Plan — агент для обсуждения и анализа: у него правки файлов и bash-команды по умолчанию переведены в режим «спросить разрешение», поэтому случайно изменить код из него нельзя. Разница между ними — именно в правах, а не в модели: оба могут работать на одной и той же модели.'
                : 'In OpenCode an "agent" is a named profile over the session: its own system prompt, its own permission set, optionally its own model. There are two built-in primary agents. Build is the default workhorse: all tools are available to it, including file edits and shell commands. Plan is the agent for discussion and analysis: its file edits and bash commands default to "ask permission" mode, so code cannot be changed from it by accident. The difference between them is precisely permissions, not the model: both can run on the same model.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Идея не уникальна для OpenCode: в Claude Code ту же роль играет режим планирования — его подробно разбирает комната <Link href={`/${lang}/rooms/claude-code-pro-workflow`} className={LINK_CLS}>«Claude Code: Профессиональный воркфлоу»</Link> дальше в этом пути. Смысл тот же — развести «думать» и «править» так, чтобы ограничение обеспечивалось системой, а не вежливой просьбой в промпте. Просьба «ничего не меняй» — пожелание, которое модель может проигнорировать; право, выключенное в системе разрешений, — граница, которую она физически не пересечёт без вашего подтверждения. Переключаются агенты клавишей Tab или командой /agents, которая открывает диалог выбора.</>
              ) : (
                <>The idea is not unique to OpenCode: in Claude Code the same role is played by the planning mode — covered in detail by the <Link href={`/${lang}/rooms/claude-code-pro-workflow`} className={LINK_CLS}>Claude Code: Pro Workflow</Link> room later in this path. The point is the same — separate &quot;thinking&quot; from &quot;editing&quot; so that the restriction is enforced by the system rather than by a polite request in the prompt. A &quot;change nothing&quot; request is a wish the model may ignore; a right switched off in the permission system is a boundary it physically will not cross without your confirmation. Agents are switched with the Tab key or the /agents command, which opens a selection dialog.</>
              )}
            </p>
            <Screenshot
              src={`${SHOTS}/opencode-agent-select.webp`}
              alt={lang === 'ru'
                ? 'Диалог Select agent в OpenCode поверх сессии: строка поиска и два пункта — build native (подсвечен) и plan native с точкой активного агента.'
                : 'The Select agent dialog in OpenCode over a session: a search field and two entries — build native (highlighted) and plan native with the active-agent dot.'}
              width={2000}
              height={942}
              caption={lang === 'ru'
                ? 'Диалог /agents: два встроенных основных агента, build и plan. Точка слева отмечает активного. Захват 22.08.2026. Нажмите, чтобы рассмотреть.'
                : 'The /agents dialog: the two built-in primary agents, build and plan. The dot on the left marks the active one. Captured 2026-08-22. Tap to view larger.'}
            />
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'На снимке диалог показывает оба встроенных агента с пометкой «native» — так помечаются агенты, поставляемые с самим инструментом, в отличие от определённых пользователем. Точка слева от plan означает, что сессия сейчас в нём: владелец обсуждал следующую задачу, не давая агенту права правок. Подсветка на build — просто позиция курсора: один Enter, и права сменятся. Обратите внимание, как дёшево стоит это переключение — не новый инструмент, не новая сессия, а один диалог посреди работы; контекст разговора при этом сохраняется.'
                : 'In the capture the dialog shows both built-in agents tagged "native" — the tag marks agents that ship with the tool itself, as opposed to user-defined ones. The dot to the left of plan means the session is currently in it: the owner was discussing the next task without granting edit rights. The highlight on build is just the cursor position: one Enter and the permissions change. Note how cheap this switch is — not a new tool, not a new session, but one dialog in the middle of the work; the conversation context is preserved.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Кроме двух встроенных, агентов можно определять самому: markdown-файл в каталоге .opencode/agents/ проекта (или в глобальном каталоге конфигурации) задаёт имя, промпт, права и модель нового агента; есть и интерактивный мастер opencode agent create. Отдельный ярус — субагенты: специализированные помощники (например, встроенные general для многошаговых задач и explore для чтения кода без права записи), которых основной агент вызывает сам или которых вы зовёте в сообщении через @имя. Так один терминал превращается в маленькую команду с разделением обязанностей — тема, знакомая вам по комнате <Link href={`/${lang}/rooms/multi-agent-collaboration`} className={LINK_CLS}>«Паттерны многоагентного взаимодействия»</Link>.</>
              ) : (
                <>Beyond the two built-ins you can define agents yourself: a markdown file in the project&apos;s .opencode/agents/ directory (or in the global config directory) sets the new agent&apos;s name, prompt, permissions, and model; there is also an interactive opencode agent create wizard. A separate tier is subagents: specialized helpers (for example, the built-in general for multi-step work and explore for read-only code study) that the primary agent invokes on its own, or that you summon in a message via @name. One terminal thus becomes a small team with a division of labor — a theme you know from the <Link href={`/${lang}/rooms/multi-agent-collaboration`} className={LINK_CLS}>Multi-Agent Collaboration Patterns</Link> room.</>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 3 */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 3: Команды — правила проекта и машина времени' : 'Chapter 3: Commands — Project Rules and the Time Machine'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Всё управление сессией в OpenCode доступно через слэш-команды: наберите / в поле ввода, и появится палитра, которая фильтруется по мере набора. На снимке ниже владелец набрал /age — палитра сузилась до пяти команд, и по этим пяти видно устройство инструмента лучше, чем по иной странице документации.'
                : 'All session control in OpenCode is available through slash commands: type / in the input field and a palette appears, filtering as you type. In the capture below the owner has typed /age — the palette has narrowed to five commands, and those five reveal the tool\'s design better than many a documentation page.'}
            </p>
            <Screenshot
              src={`${SHOTS}/opencode-command-palette.webp`}
              alt={lang === 'ru'
                ? 'Палитра команд OpenCode после набора /age: пункты /agents (Switch agent), /init (guided AGENTS.md setup), /timeline (Jump to message), /undo (Undo previous message), /review (review changes [commit|branch|pr], defaults to uncommitted).'
                : 'The OpenCode command palette after typing /age: entries /agents (Switch agent), /init (guided AGENTS.md setup), /timeline (Jump to message), /undo (Undo previous message), /review (review changes [commit|branch|pr], defaults to uncommitted).'}
              width={2000}
              height={957}
              caption={lang === 'ru'
                ? 'Палитра слэш-команд, отфильтрованная по «/age». Подсказка справа от каждой команды описывает её назначение. Захват 22.08.2026. Нажмите, чтобы рассмотреть.'
                : 'The slash-command palette filtered by "/age". The hint to the right of each command describes its purpose. Captured 2026-08-22. Tap to view larger.'}
            />
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Первая по важности здесь — /init, «guided AGENTS.md setup». Команда осматривает репозиторий и создаёт AGENTS.md — файл правил проекта: как собирать, как тестировать, какие соглашения соблюдать. Это открытая конвенция, нейтральная к инструменту: тот же файл читают многие агенты разных производителей, так что правила пишутся один раз, а не по копии на инструмент. Роль та же, что у файла CLAUDE.md в Claude Code, а такие файлы-«конституции» проекта подробно разбирает комната <Link href={`/${lang}/rooms/context-engineering-101`} className={LINK_CLS}>«Контекст-инжиниринг 101»</Link> дальше в пути — и, к слову, у репозитория самого AI-Learn такой файл есть: в четвёртой главе будет видно, как агент ему подчиняется.</>
              ) : (
                <>First in importance here is /init, the &quot;guided AGENTS.md setup.&quot; The command inspects the repository and creates AGENTS.md — the project rules file: how to build, how to test, which conventions to follow. It is an open, tool-neutral convention: the same file is read by many agents from different makers, so the rules are written once rather than once per tool. The role is the same as CLAUDE.md&apos;s in Claude Code, and such project &quot;constitution&quot; files are covered in detail by the <Link href={`/${lang}/rooms/context-engineering-101`} className={LINK_CLS}>Context Engineering 101</Link> room later in the path — and, as it happens, the AI-Learn repository itself has such a file: chapter four shows the agent obeying it.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Пара /undo и /timeline — машина времени сессии. /undo откатывает последний ход, причём не только сообщение в чате, но и сделанные в нём правки файлов: под капотом OpenCode ведёт git-чекпоинты, поэтому неудачный заход отменяется целиком, а /redo возвращает его обратно. /timeline прыгает к произвольному сообщению истории. Это ровно та страховочная сетка, о которой была <Link href={`/${lang}/rooms/git-safety-net`} className={LINK_CLS}>комната про git</Link>: дешёвый откат меняет саму манеру работы — рискованные попытки перестают быть дорогими. Наконец, /review запускает проверку изменений — коммита, ветки или PR, а по умолчанию именно незакоммиченных правок: удобный момент увидеть дифф глазами до фиксации.</>
              ) : (
                <>The /undo and /timeline pair is the session&apos;s time machine. /undo rolls back the last turn — not just the chat message but the file edits made in it: under the hood OpenCode keeps git checkpoints, so a failed attempt is cancelled as a whole, and /redo brings it back. /timeline jumps to any message in the history. This is exactly the safety net <Link href={`/${lang}/rooms/git-safety-net`} className={LINK_CLS}>the git room</Link> was about: a cheap rollback changes how you work — risky attempts stop being expensive. Finally, /review runs a check of changes — a commit, a branch, or a PR, and by default precisely the uncommitted edits: a convenient moment to see the diff with your own eyes before committing.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Заметьте, что ни одна из этих команд не про «написать код». Они про раму вокруг кода: правила, откат, навигацию, проверку. Это устойчивый признак зрелых агентных инструментов — основная сложность живёт не в генерации текста программы, а в управлении процессом: что агенту можно, как отменить лишнее и как убедиться, что сделано именно то, что просили. Палитра OpenCode просто делает эту раму видимой и досягаемой за два нажатия.'
                : 'Notice that none of these commands is about "writing code." They are about the frame around the code: rules, rollback, navigation, verification. That is a stable trait of mature agent tools — the real difficulty lives not in generating program text but in managing the process: what the agent may do, how to cancel the superfluous, and how to confirm that what was done is what was asked. The OpenCode palette simply makes that frame visible and reachable in two keystrokes.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 4 */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 4: Читаем реальную сессию' : 'Chapter 4: Reading a Real Session'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Теперь главный экспонат комнаты. Владелец AI-Learn поручил OpenCode добавить запись в бэклог платформы — файл docs/BACKLOG.md этого репозитория. Снимок сделан в момент, когда агент build закончил ход и отчитался, а внизу уже ждёт поле ввода, переключённое на агента plan. Прочтите отчёт агента на снимке целиком — он короткий, и в нём интересна каждая из трёх частей.'
                : 'Now the room\'s main exhibit. The owner of AI-Learn asked OpenCode to add an entry to the platform\'s backlog — the docs/BACKLOG.md file of this repository. The capture is taken at the moment the build agent has finished its turn and reported, while at the bottom the input field is already waiting, switched to the plan agent. Read the agent\'s report in the capture in full — it is short, and each of its three parts is telling.'}
            </p>
            <Screenshot
              src={`${SHOTS}/opencode-build-turn-status-bar.webp`}
              alt={lang === 'ru'
                ? 'Завершённый ход OpenCode: отчёт о правке docs/BACKLOG.md и docs/BACKLOG.ru.md, предупреждение о недоступном git, подпись Build · Big Pickle · 1m 5s, поле ввода с подписью Plan · Big Pickle OpenCode Zen и строка состояния со скрытым рабочим каталогом и счётчиком 58.3K (29%).'
                : 'A finished OpenCode turn: a report on editing docs/BACKLOG.md and docs/BACKLOG.ru.md, a warning about unavailable git, the Build · Big Pickle · 1m 5s label, an input field labeled Plan · Big Pickle OpenCode Zen, and a status bar with a redacted working directory and a 58.3K (29%) counter.'}
              width={2000}
              height={742}
              caption={lang === 'ru'
                ? 'Ход агента build в репозитории AI-Learn: правка бэклога в двух языковых зеркалах и честное примечание про git. Захват 22.08.2026. Нажмите, чтобы рассмотреть.'
                : 'A build-agent turn in the AI-Learn repository: a backlog edit in both language mirrors and an honest note about git. Captured 2026-08-22. Tap to view larger.'}
            />
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Часть первая: агент изменил не один файл, а два — docs/BACKLOG.md и его зеркало docs/BACKLOG.ru.md. Владелец не просил об этом в сообщении; требование двуязычных зеркал записано в правилах репозитория, в том самом файле AGENTS.md из третьей главы. Правило, однажды положенное в файл, сработало без напоминания — это и есть аргумент в пользу /init. Часть вторая: агент сообщает, что git на машине недоступен (macOS предлагает установить Command Line Tools через xcode-select), поэтому изменение пока не закоммичено. Он не скрыл ограничение и не изобразил успех — он назвал состояние среды и последствие: работа лежит незафиксированной. Часть третья: он предлагает следующий шаг и задаёт вопрос, а не молчит и не действует самовольно.'
                : 'Part one: the agent changed not one file but two — docs/BACKLOG.md and its mirror docs/BACKLOG.ru.md. The owner did not ask for that in the message; the bilingual-mirrors requirement is written in the repository rules, in the very AGENTS.md file from chapter three. A rule once placed in the file fired without a reminder — which is the argument for /init. Part two: the agent reports that git is unavailable on the machine (macOS is prompting to install the Command Line Tools via xcode-select), so the change is uncommitted for now. It neither hid the limitation nor faked success — it named the state of the environment and the consequence: the work sits unrecorded. Part three: it proposes a next step and asks a question rather than staying silent or acting on its own.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Теперь служебные строки. Подпись под ответом — «Build · Big Pickle · 1m 5s» — читается как «какой агент · какая модель · сколько длился ход». Подпись у поля ввода — «Plan · Big Pickle · OpenCode Zen» — говорит, что следующее сообщение уйдёт агенту plan, на модели Big Pickle, подключённой через шлюз OpenCode Zen (о нём — следующая глава). В самом низу — строка состояния: слева рабочий каталог (на снимке скрыт), справа «58.3K (29%)» — заполненность <Term id="context-window" lang={lang}>контекстного окна</Term>: история сессии заняла 58,3 тысячи токенов, 29% лимита модели, — и подсказка ctrl+p для списка команд. За этим счётчиком стоит вся экономика контекста — тема комнаты <Link href={`/${lang}/rooms/context-engineering-101`} className={LINK_CLS}>«Контекст-инжиниринг 101»</Link>, следующей в этом пути, — сжатая до двух чисел в углу экрана.</>
              ) : (
                <>Now the service lines. The label under the reply — &quot;Build · Big Pickle · 1m 5s&quot; — reads as &quot;which agent · which model · how long the turn took.&quot; The label by the input field — &quot;Plan · Big Pickle · OpenCode Zen&quot; — says the next message will go to the plan agent, on the Big Pickle model, connected through the OpenCode Zen gateway (the next chapter covers it). At the very bottom is the status bar: the working directory on the left (redacted in the capture); on the right &quot;58.3K (29%)&quot; — <Term id="context-window" lang={lang}>context-window</Term> usage: the session history occupies 58.3 thousand tokens, 29% of the model limit — and the ctrl+p hint for the command list. Behind that counter sits the entire economics of context — the subject of the <Link href={`/${lang}/rooms/context-engineering-101`} className={LINK_CLS}>Context Engineering 101</Link> room, next in this path — compressed into two numbers in a corner of the screen.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Из всего увиденного складывается аккуратный цикл работы в новом репозитории: сначала /init, чтобы правила проекта попали в AGENTS.md; затем обсуждение подхода в plan, где правки заблокированы правами; затем переключение в build и сами изменения; затем /review, чтобы прочитать дифф глазами; и в конце — git-коммит, а если заход не удался — /undo. Сессия на снимке застряла на предпоследнем шаге не по вине агента: фиксация невозможна, пока на машине нет git. Правильная реакция — не «продолжим, потом закоммитим», а восстановить инструмент фиксации и снять риск: незакоммиченная работа живёт до первой случайности.'
                : 'Everything seen here adds up to a careful cycle for a fresh repository: first /init, so the project rules land in AGENTS.md; then discussing the approach in plan, where edits are blocked by permissions; then switching to build for the changes themselves; then /review, to read the diff with your own eyes; and finally a git commit — or /undo if the attempt failed. The session in the capture is stuck at the second-to-last step through no fault of the agent: committing is impossible while the machine has no git. The right reaction is not "let\'s continue and commit later" but to restore the commit tool and remove the risk: uncommitted work survives only until the first accident.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 5 */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 5: Модели, шлюз Zen и огурец под псевдонимом' : 'Chapter 5: Models, the Zen Gateway, and a Pickle Under an Alias'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Свобода выбора модели рождает практический вопрос: а какую, собственно, выбрать? Поставщиков десятки, у каждого несколько моделей, и не любая из них хорошо работает в агентном цикле: одной не хватает длины контекста, другая слабо вызывает инструменты, третья дорога для черновой работы. Ответ OpenCode — шлюз OpenCode Zen: курируемый список моделей, которые команда проекта прогнала через собственные бенчмарки агентного кодинга и проверила вместе с поставщиками, что модели обслуживаются корректно. Подключение обычное: аккаунт, API-ключ, оплата по токенам (тарифы — за миллион токенов), с лимитами расходов.'
                : 'Freedom of model choice raises a practical question: which one, exactly? There are dozens of providers, each with several models, and not every model works well in an agentic loop: one lacks context length, another is weak at calling tools, a third is too expensive for draft work. OpenCode\'s answer is the OpenCode Zen gateway: a curated list of models the project team has run through its own agentic-coding benchmarks and verified with providers to be served correctly. Connecting is ordinary: an account, an API key, per-token payment (rates are per million tokens), with spending limits.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Здесь и разгадка несерьёзного имени из четвёртой главы. Big Pickle — «большой огурец» — это модель под кодовым именем: какая-то лаборатория выложила через Zen новую модель, не раскрывая, кто её сделал. Такие модели называют stealth-моделями; на время оценки они бывают бесплатными — с оговоркой, которую стоит читать внимательно: собранные в этот период данные могут использоваться для улучшения модели. Кодовое имя убирает эффект бренда: пользователи судят модель по работе, а не по логотипу на ней. Для лаборатории это честный полевой тест; для пользователя — сильная модель бесплатно, в обмен на данные и на неопределённость: что это за модель и что станет с ценой после раскрытия, заранее неизвестно.'
                : 'Here lies the answer to chapter four\'s unserious name. Big Pickle is a model under a codename: some lab shipped a new model through Zen without revealing who made it. Such models are called stealth models; during evaluation they are sometimes free — with a clause worth reading carefully: data collected in that period may be used to improve the model. The codename removes the brand effect: users judge the model by its work, not by the logo on it. For the lab it is an honest field test; for the user, a strong model at no cost — in exchange for data and for uncertainty: what the model is and what the price becomes after the reveal is unknown in advance.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Оговорка про данные — не мелкий шрифт, а рабочий критерий выбора. Для открытого пет-проекта обмен «код в обмен на бесплатные токены» может быть разумным; для кода под NDA — недопустим независимо от цены. Заметьте, что это решение вообще не про качество модели: сильная модель с неподходящими условиями обработки данных проигрывает более слабой с подходящими. Свобода выбора модели, с которой начиналась глава, означает и обязанность делать такой выбор осознанно — по контексту, цене, качеству и судьбе ваших данных сразу.'
                : 'The data clause is not fine print but a working selection criterion. For an open pet project, "code in exchange for free tokens" can be a reasonable trade; for code under an NDA it is unacceptable at any price. Note that this decision is not about model quality at all: a strong model with unsuitable data terms loses to a weaker one with suitable terms. The freedom of model choice this chapter began with also means the duty to make that choice deliberately — weighing context, price, quality, and the fate of your data at once.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Последний штрих: модель назначается и на агента. Профиль агента из второй главы может нести собственную модель, поэтому ничто не мешает держать дорогую сильную модель в build, где происходят реальные правки, и быструю дешёвую в plan или в субагенте-разведчике, где важна скорость чтения, а не тонкость письма. На снимках этой комнаты владелец держит одну модель в обоих агентах — тоже осмысленный выбор: одна модель означает одинаковое понимание контекста до и после переключения прав. Инструмент не диктует стратегию; он делает её настраиваемой.'
                : 'One finishing touch: models are assigned per agent, too. The agent profile from chapter two can carry its own model, so nothing prevents keeping an expensive strong model in build, where the real edits happen, and a fast cheap one in plan or in a scout subagent, where reading speed matters more than writing finesse. In this room\'s captures the owner keeps one model in both agents — a sensible choice as well: one model means the same understanding of the context before and after the permission switch. The tool does not dictate the strategy; it makes it configurable.'}
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
            <li>{lang === 'ru' ? 'OpenCode — открытый (MIT) терминальный агент от команды Anomaly: код агента читаем, модель подключается от любого поставщика по API-ключу.' : 'OpenCode is an open (MIT) terminal agent by the Anomaly team: the agent code is readable, and a model from any provider connects via an API key.'}</li>
            <li>{lang === 'ru' ? 'Build правит, plan обсуждает: у plan правки файлов и bash-команды требуют подтверждения — граница обеспечена правами, а не просьбой. Переключение — Tab или /agents.' : 'Build edits, plan discusses: for plan, file edits and bash commands require confirmation — the boundary is enforced by permissions, not by a request. Switch with Tab or /agents.'}</li>
            <li>{lang === 'ru' ? '/init создаёт AGENTS.md — открытый файл правил проекта; /undo откатывает ход вместе с правками файлов; /timeline прыгает по истории; /review проверяет изменения (по умолчанию — незакоммиченные).' : '/init creates AGENTS.md — the open project rules file; /undo rolls back a turn together with its file edits; /timeline jumps through history; /review checks changes (uncommitted ones by default).'}</li>
            <li>{lang === 'ru' ? 'Аккуратный цикл: /init → обсуждение в plan → правки в build → /review → коммит или /undo. Строка состояния показывает заполненность контекстного окна (например, 58.3K — 29%).' : 'The careful cycle: /init → discuss in plan → edit in build → /review → commit or /undo. The status bar shows context-window usage (for example, 58.3K — 29%).'}</li>
            <li>{lang === 'ru' ? 'OpenCode Zen — курируемый шлюз моделей с оплатой за токены; stealth-модели вроде Big Pickle бесплатны на период оценки, но данные могут идти на улучшение модели — для чувствительного кода это критерий отбора.' : 'OpenCode Zen is a curated model gateway with per-token pricing; stealth models like Big Pickle are free during evaluation, but the data may go toward improving the model — a selection criterion for sensitive code.'}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
