"use client";

import React from 'react';
import Link from 'next/link';
import Term from '@/components/Term';
import Terminal from '@/components/Terminal';

const DOCS_URL = 'https://code.claude.com/docs/en/how-claude-code-works';
const LINK_CLS = 'text-accent-300 hover:text-accent-200 underline underline-offset-4';

export default function ClaudeCodeAgenticLoopTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Claude Code изнутри: цикл, который идёт у вас на глазах' : 'Claude Code from the Inside: the Loop Running in Front of You'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>В комнате <Link href={`/${lang}/rooms/agent-coding-foundations`} className={LINK_CLS}>«AC-101: Основы агентной разработки»</Link> цикл агента разбирался в общем виде: план, действие, проверка, восстановление после ошибок. Здесь та же идея показана на конкретном инструменте — Claude Code, кодинг-агенте Anthropic, который работает в терминале, в IDE, в настольном приложении и в облаке. Задача комнаты — научиться читать то, что агент делает у вас на глазах: какие шаги он выбирает, почему вызывает именно эти инструменты и где в этом процессе остаётся место для вас.</>
              ) : (
                <>The <Link href={`/${lang}/rooms/agent-coding-foundations`} className={LINK_CLS}>AC-101: Agent Coding Foundations</Link> room took the agent loop apart in general terms: plan, act, verify, recover from errors. Here the same idea is shown on a concrete tool — Claude Code, Anthropic&apos;s coding agent, which runs in the terminal, in IDEs, in a desktop app, and in the cloud. The goal of the room is to learn to read what the agent does in front of you: which steps it picks, why it calls these particular tools, and where in the process there is still room for you.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Опорный источник — официальная документация Claude Code, прежде всего страница <a href={DOCS_URL} target="_blank" rel="noreferrer noopener" className={LINK_CLS}>«How Claude Code works»</a> и связанные с ней страницы о контекстном окне, инструментах и чекпоинтах. Факты сверены с ней в октябре 2026 года, на версии 2.1.304. Документация меняется быстро: названия режимов, команды и пороги обновляются чаще, чем раз в квартал. Поэтому в комнате важнее механизмы — зачем агенту цикл, почему контекст приходится сжимать, — чем конкретные клавиши, которые завтра могут поменяться.</>
              ) : (
                <>The reference source is the official Claude Code documentation, above all the <a href={DOCS_URL} target="_blank" rel="noreferrer noopener" className={LINK_CLS}>&quot;How Claude Code works&quot;</a> page and the related pages on the context window, tools, and checkpoints. The facts were checked against it in October 2026, on version 2.1.304. The documentation changes fast: mode names, commands, and thresholds are updated more often than once a quarter. That is why mechanisms matter more in this room — why an agent needs a loop, why its context has to be compressed — than specific keys that may change tomorrow.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Главный экспонат комнаты — не рекламный пример, а журнал реальной сессии. Этот сайт развивается в том числе руками Claude Code, и каждая сессия оставляет на диске подробную запись: какие инструменты вызывались, с какими аргументами и в какой момент. В третьей главе мы прочитаем такую запись — сессию, которая добавила на платформу термин глоссария и снимок экрана, — и разметим её по фазам цикла.'
                : 'The room\'s main exhibit is not a marketing example but the log of a real session. This site is developed partly by Claude Code itself, and every session leaves a detailed record on disk: which tools were called, with which arguments, and at what moment. In chapter three we will read such a record — a session that added a glossary term and a screenshot to the platform — and mark it up by the phases of the loop.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>План такой: сначала цикл как таковой и роль обвязки вокруг модели; затем инструменты, через которые модель действует; затем разбор реальной сессии; затем контекстное окно и его сжатие; в конце — место человека: остановка, права и откат. Продвинутые приёмы — режимы прав во всех подробностях, сессии, настройки, хуки — вынесены в комнату <Link href={`/${lang}/rooms/claude-code-pro-workflow`} className={LINK_CLS}>«Claude Code: Профессиональный воркфлоу»</Link> в конце пути.</>
              ) : (
                <>The plan: first the loop itself and the role of the harness around the model; then the tools through which the model acts; then the real session; then the context window and its compression; and finally the human&apos;s place: stopping, permissions, and rollback. Advanced techniques — permission modes in full detail, sessions, settings, hooks — are left for the <Link href={`/${lang}/rooms/claude-code-pro-workflow`} className={LINK_CLS}>Claude Code: Pro Workflow</Link> room at the end of the path.</>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 1 */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 1: Цикл и обвязка вокруг модели' : 'Chapter 1: The Loop and the Harness Around the Model'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Получив задачу, Claude Code проходит три фазы: собирает контекст, действует и проверяет результат. Документация отдельно оговаривает, что фазы не идут строго по очереди, а перетекают друг в друга: посреди правок агент может снова заглянуть в код, а проверка может показать, что контекст надо собирать заново. Цикл повторяется, пока задача не решена или пока его не остановит человек.'
                : 'Given a task, Claude Code goes through three phases: it gathers context, takes action, and verifies the result. The documentation specifically notes that the phases do not run strictly in turn but blend into each other: in the middle of editing the agent may look at the code again, and verification may show that context has to be gathered anew. The loop repeats until the task is done or until a human stops it.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Цикл подстраивается под запрос. Вопрос о кодовой базе может обойтись одним сбором контекста: прочитать несколько файлов и ответить. Исправление бага обычно проходит все три фазы, и не один раз. Документация приводит пример с упавшими тестами: запустить тесты и увидеть, что падает, найти связанные файлы, прочитать код и понять причину, внести правку, снова запустить тесты, а если они упали — вернуться к поиску. Рефакторинг может потребовать больше проверки, чем самих правок. Каждый следующий шаг агент выбирает по итогам предыдущего, связывая в цепочку десятки действий и корректируя курс по ходу.'
                : 'The loop adapts to the request. A question about the codebase may need nothing but context gathering: read a few files and answer. A bug fix usually goes through all three phases, more than once. The documentation gives an example with failing tests: run the tests and see what fails, find the related files, read the code and understand the cause, make the fix, run the tests again, and if they fail, go back to searching. A refactor may call for more verification than editing. The agent picks each next step based on the result of the previous one, chaining dozens of actions together and correcting course along the way.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>За циклом стоят две части. Модель рассуждает: понимает задачу, читает код, решает, что делать дальше. Инструменты действуют: читают файлы, правят их, запускают команды. Сам Claude Code — это слой вокруг модели, который даёт ей инструменты и управляет тем, что попадает в её контекст. Документация называет такой слой <Term id="agentic-harness" lang={lang}>агентной обвязкой (agentic harness)</Term>. Разделение полезно на практике: когда агент ведёт себя странно, причина может быть и в рассуждениях модели, и в том, какой контекст ей собрала обвязка.</>
              ) : (
                <>Two parts stand behind the loop. The model reasons: it understands the task, reads code, decides what to do next. The tools act: they read files, edit them, run commands. Claude Code itself is the layer around the model that gives it tools and manages what goes into its context. The documentation calls this layer the <Term id="agentic-harness" lang={lang}>agentic harness</Term>. The distinction is practical: when the agent behaves oddly, the cause may lie in the model&apos;s reasoning or in the context the harness assembled for it.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Отсюда и отличие от чат-бота. Чат получает вопрос и один раз отвечает текстом; что делать с ответом, решаете вы. Агент получает цель и сам выполняет шаги, наблюдая их результаты: прочитал файл, узнал новое, выбрал следующий шаг. Поэтому к агенту применима логика делегирования, а не диктовки: документация советует описать проблему и где её искать, а какие файлы читать и какие команды запускать, агент выберет сам. Обратная сторона делегирования — ответственность за проверку результата, о которой пойдёт речь в третьей и пятой главах.'
                : 'This is also the difference from a chatbot. A chat receives a question and answers once with text; what to do with the answer is up to you. An agent receives a goal and carries out the steps itself, observing their results: it read a file, learned something, picked the next step. That is why delegation rather than dictation applies to an agent: the documentation advises describing the problem and where to look, and leaving it to the agent to decide which files to read and which commands to run. The flip side of delegation is responsibility for verifying the result, which chapters three and five deal with.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 2 */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 2: Инструменты — чем агент действует' : 'Chapter 2: Tools — How the Agent Acts'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Без инструментов модель может только писать текст. С инструментами она читает код, правит файлы, запускает команды, ищет в интернете и обращается к внешним сервисам. Технически это <Term id="function-calling" lang={lang}>вызов функций</Term>: модель формирует структурированный запрос — имя инструмента и аргументы, — а выполняет его обвязка. Результат возвращается в контекст модели и влияет на следующий шаг. Так и замыкается цикл: каждое действие порождает новое наблюдение, а наблюдение — следующее действие.</>
              ) : (
                <>Without tools a model can only write text. With tools it reads code, edits files, runs commands, searches the web, and calls external services. Technically this is <Term id="function-calling" lang={lang}>function calling</Term>: the model forms a structured request — a tool name and arguments — and the harness executes it. The result goes back into the model&apos;s context and shapes the next step. This is how the loop closes: every action produces a new observation, and every observation leads to the next action.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Встроенные инструменты документация делит на пять групп. Файловые операции: Read читает файл, Edit вносит точечную правку, Write создаёт или перезаписывает файл целиком. Поиск: найти файлы по шаблону имени и строки по регулярному выражению. Выполнение: Bash запускает команды оболочки — сборку, тесты, git. Веб: WebSearch ищет, WebFetch загружает страницы документации. Анализ кода: через языковые серверы агент видит ошибки типов после правки и переходит к определениям. Сверх этого есть служебные инструменты: Agent запускает <Term id="subagent" lang={lang}>субагента</Term>, AskUserQuestion задаёт вам уточняющий вопрос с вариантами ответа.</>
              ) : (
                <>The documentation splits the built-in tools into five groups. File operations: Read reads a file, Edit makes a targeted change, Write creates or overwrites a whole file. Search: find files by name pattern and lines by regular expression. Execution: Bash runs shell commands — builds, tests, git. Web: WebSearch searches, WebFetch loads documentation pages. Code intelligence: through language servers the agent sees type errors after an edit and jumps to definitions. On top of these there are orchestration tools: Agent starts a <Term id="subagent" lang={lang}>subagent</Term>, AskUserQuestion asks you a clarifying multiple-choice question.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Деталь, которая удивляет при первом чтении журнала: на macOS, Linux и WSL отдельные инструменты поиска Glob и Grep по умолчанию не входят в набор, и агент ищет через Bash — командами find и grep, за которыми в его оболочке стоят встроенные быстрые утилиты bfs и ugrep. Поэтому поиск в журнале часто выглядит как обычная команда оболочки, а не как вызов отдельного инструмента. Для прав это тоже важно: такой поиск проходит через правила для Bash.'
                : 'A detail that surprises on a first reading of a log: on macOS, Linux, and WSL the separate Glob and Grep search tools are not in the default set, and the agent searches through Bash — with find and grep commands, which in its shell run built-in fast utilities, bfs and ugrep. That is why a search in the log often looks like an ordinary shell command rather than a call to a dedicated tool. It matters for permissions too: such a search goes through the rules for Bash.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Инструменты различаются и по риску. Чтение файлов в рабочей директории разрешения не требует: оно ничего не меняет. Правка, запись и команды оболочки в ручном режиме требуют подтверждения, потому что меняют состояние системы; исключение — встроенный набор команд только для чтения вроде git status. Отсюда простое правило чтения любого журнала: шаги чтения дёшевы и безопасны, шаги записи — это места, где стоит смотреть внимательнее. Как режимы прав распределяют эти разрешения, разобрано в пятой главе.'
                : 'Tools also differ in risk. Reading files in the working directory needs no permission: it changes nothing. Editing, writing, and shell commands need approval in manual mode, because they change the state of the system; the exception is a built-in set of read-only commands such as git status. Hence a simple rule for reading any log: read steps are cheap and safe, write steps are the places worth a closer look. How permission modes distribute these approvals is covered in chapter five.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 3 */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 3: Разбор реальной сессии' : 'Chapter 3: Reading a Real Session'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Теперь главный экспонат. 20 октября 2026 года владелец AI-Learn ответил Claude Code коротким сообщением: «да, добавь термин и скриншот». Речь шла о том, чтобы добавить в глоссарий платформы термин stealth-model и вставить в комнату про OpenCode снимок окна выбора модели — это договорились сделать несколькими сообщениями раньше. Ниже — последовательность вызовов инструментов этой сессии, извлечённая из её журнала: JSONL-файла в каталоге ~/.claude/projects/. Время указано по UTC, длинные команды сокращены, порядок и инструменты — как в журнале.'
                : 'Now the main exhibit. On October 20, 2026, the owner of AI-Learn replied to Claude Code with a short message: "да, добавь термин и скриншот" ("yes, add the term and the screenshot"). The task was to add the term stealth-model to the platform glossary and to place a capture of the model picker into the OpenCode room — agreed a few messages earlier. Below is the sequence of tool calls of that session, extracted from its log: a JSONL file in the ~/.claude/projects/ directory. Times are UTC, long commands are shortened, the order and the tools are as in the log.'}
            </p>
            <Terminal
              title={lang === 'ru' ? 'claude · журнал сессии, 20.10.2026' : 'claude · session log, 2026-10-20'}
              lines={[
                { cmd: 'да, добавь термин и скриншот', prompt: '>' },
                { out: '09:48:18 ● Bash ▸ git status -sb; file …/images/1.png' },
                { out: '09:48:20 ● Bash ▸ git switch -c content/opencode-stealth-model-zen-picker' },
                { out: lang === 'ru' ? '09:48:25 ● Bash ▸ awk … docs/AGENTS.md   # правило о скриншотах' : '09:48:25 ● Bash ▸ awk … docs/AGENTS.md   # the screenshot rule' },
                { out: '09:48:35 ● Read ▸ …/images/1.png' },
                { out: '09:48:46 ● Bash ▸ python3 … crop → opencode-zen-free-models.webp' },
                { out: '09:48:50 ● Bash ▸ grep -n … src/data/glossary.ts' },
                { out: '09:48:53 ● Bash ▸ cat src/data/rooms/__tests__/opencode-terminal-agent.test.ts' },
                { out: '09:49:43 ● Edit ▸ src/data/glossary.ts', tone: 'warn' },
                { out: '09:49:50 ● Edit ▸ OpencodeTerminalAgentTheory.tsx', tone: 'warn' },
                { out: "09:50:19 ● Bash ▸ grep -n \"id: 'llm-landscape'\" metadata.ts" },
                { out: '09:50:43 ● Edit ▸ OpencodeTerminalAgentTheory.tsx', tone: 'warn' },
                { out: '09:50:55 ● Edit ▸ __tests__/opencode-terminal-agent.test.ts (×2)', tone: 'warn' },
                { out: '09:50:57 ● Bash ▸ npm run check-all' },
                { out: '      Tests  2688 passed (2688)', tone: 'ok' },
                { out: lang === 'ru' ? '09:52:09 ● Bash ▸ node verify.cjs   # комната в браузере, ru и en' : '09:52:09 ● Bash ▸ node verify.cjs   # the room in a browser, ru and en' },
                { out: '      ru {"shots":4,"termNotFound":0} · en {"shots":4,"termNotFound":0}', tone: 'ok' },
                { out: '09:53:39 ● Bash ▸ git add … && git commit' },
              ]}
            />
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Разметим журнал по фазам. До первой правки кода прошло одиннадцать вызовов — почти полторы минуты: состояние репозитория, сама комната, правило проекта о скриншотах, исходный снимок, формат глоссария, тест комнаты (в журнале выше показаны не все из них). Меняют что-либо только два: создание отдельной git-ветки и обрезка снимка, причём перед обрезкой агент сначала посмотрел на исходник. Ни одной правки исходного кода, пока не стало ясно, как устроен файл, который предстоит менять, и какой тест может сломаться.'
                : 'Let us mark up the log by phase. Eleven calls — almost a minute and a half — passed before the first code edit: the repository state, the room itself, the project rule on screenshots, the original capture, the glossary format, the room test (the log above does not show all of them). Only two of them change anything: creating a separate git branch and cropping the capture, and before cropping the agent first looked at the original. Not a single edit to the source until it was clear how the file to be changed is structured and which test might break.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Фаза действия заняла около минуты: правка глоссария, две правки теории, правка теста. Обратите внимание на вызов в 09:50:19 между правками: агенту понадобилось точное русское название комнаты для ссылки, и он вернулся к сбору контекста посреди действия — именно о таком перетекании фаз говорит документация. Правка теста тоже показательна: тест комнаты требовал ровно три снимка, и агент обновил его до запуска, потому что прочитал этот тест на этапе сбора контекста. Без чтения тест упал бы при первой проверке.'
                : 'The action phase took about a minute: a glossary edit, two theory edits, a test edit. Note the call at 09:50:19 between the edits: the agent needed the exact Russian title of a room for a link and went back to gathering context in the middle of acting — precisely the blending of phases the documentation describes. The test edit is telling too: the room test required exactly three captures, and the agent updated it before running anything, because it had read that test during context gathering. Without that reading, the test would have failed on the first check.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Проверка шла в два слоя. Сначала npm run check-all: линтер, проверка типов и 2688 тестов — всё зелёное. Но тесты проверяют данные, а не то, что увидит читатель. Поэтому дальше агент запустил сайт и открыл комнату в браузере на двух языках: на месте ли четыре снимка и находится ли новый термин в глоссарии. Только после этого — запись в документацию и коммит. Весь цикл от сообщения до коммита занял меньше шести минут, из них на правки ушло меньше двух. Такое соотношение типично: большую часть работы агента составляют чтение и проверка, а не написание кода.'
                : 'Verification came in two layers. First npm run check-all: the linter, the type checker, and 2,688 tests — all green. But tests check data, not what a reader will see. So next the agent started the site and opened the room in a browser in both languages: were all four captures in place, and did the new term resolve in the glossary. Only then came the documentation entry and the commit. The whole cycle from message to commit took under six minutes, and the edits took under two of them. That ratio is typical: most of an agent\'s work is reading and verifying, not writing code.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Заметьте и то, чего в журнале нет. Сообщение владельца состояло из пяти слов, и этого хватило, потому что объём работы был согласован раньше: агент предложил добавить термин и снимок, человек ответил «да». Короткая команда сработала благодаря предыдущим ходам разговора, а не вопреки им. Журнал показывает действия, но не рассуждения между ними; о том, почему агент выбрал именно эти шаги, можно судить только по их порядку. Именно поэтому порядок шагов — главное, что стоит уметь читать.'
                : 'Note also what the log does not contain. The owner\'s message was five words long, and that was enough because the scope had been agreed earlier: the agent proposed adding the term and the capture, and the human said "yes." The short command worked because of the earlier turns of the conversation, not in spite of them. The log shows actions but not the reasoning between them; why the agent chose these particular steps can be judged only from their order. That is exactly why the order of steps is the main thing worth learning to read.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 4 */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 4: Контекстное окно и его сжатие' : 'Chapter 4: The Context Window and Its Compression'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Всё, что агент знает о задаче в данный момент, лежит в его <Term id="context-window" lang={lang}>контекстном окне</Term>. Ещё до вашего первого сообщения туда загружаются системные инструкции, файлы CLAUDE.md, автоматическая память (первые 200 строк или 25 КБ файла MEMORY.md — что наступит раньше), сведения о среде и состоянии git, имена инструментов MCP-серверов и однострочные описания скиллов. Полные схемы MCP-инструментов и тексты скиллов подгружаются по требованию, когда понадобятся: так стартовый объём сессии остаётся небольшим.</>
              ) : (
                <>Everything the agent knows about the task at a given moment lives in its <Term id="context-window" lang={lang}>context window</Term>. Even before your first message, it is loaded with the system instructions, CLAUDE.md files, auto memory (the first 200 lines or 25 KB of MEMORY.md, whichever comes first), information about the environment and git state, the tool names of MCP servers, and one-line skill descriptions. Full MCP tool schemas and skill bodies load on demand, when they are needed: this keeps the starting size of a session small.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Дальше окно растёт с каждым шагом цикла: каждый прочитанный файл, каждый вывод команды и каждая правка остаются в истории. В сессии из третьей главы агент прочитал теорию комнаты, тест, фрагменты глоссария и правил проекта — всё это заняло место. Многие актуальные модели Claude поддерживают окно в 1 миллион токенов (доступность зависит от тарифа), но и оно конечно, а с ростом истории внимание модели к ранним деталям слабеет — эффект, который в комнате о контекст-инжиниринге называется <Term id="context-rot" lang={lang}>«гниением контекста»</Term>.</>
              ) : (
                <>From there the window grows with every step of the loop: every file read, every command output, and every edit stays in the history. In the session from chapter three the agent read the room&apos;s theory, its test, and fragments of the glossary and the project rules — all of that took space. Many current Claude models support a 1-million-token window (availability depends on the plan), but even that is finite, and as the history grows, the model&apos;s attention to early details weakens — the effect the context-engineering room calls <Term id="context-rot" lang={lang}>context rot</Term>.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>При приближении к пределу Claude Code сжимает контекст автоматически — это называется <Term id="compaction" lang={lang}>компакцией</Term>. Сначала он убирает старые выводы инструментов, а если этого мало, заменяет историю структурированным резюме. Ваши запросы и ключевые фрагменты кода сохраняются, но подробные инструкции, данные в начале разговора, могут потеряться. После сжатия часть контекста возвращается с диска: корневой CLAUDE.md, автоматическая память, план из режима планирования, а также до пяти недавно изменённых файлов из тех, что агент читал или правил.</>
              ) : (
                <>As it approaches the limit, Claude Code compresses the context automatically — this is called <Term id="compaction" lang={lang}>compaction</Term>. It first clears old tool outputs, and if that is not enough, it replaces the history with a structured summary. Your requests and key code snippets are preserved, but detailed instructions given early in the conversation may be lost. After compaction, part of the context comes back from disk: the root CLAUDE.md, auto memory, the plan from plan mode, and up to five recently modified files among those the agent read or edited.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Практические выводы. Постоянные правила держите в CLAUDE.md, а не в сообщениях: файл перечитывается после сжатия, сообщение — нет. Команда /context показывает, что сейчас занимает окно; /compact с указанием фокуса — например, «/compact focus on the API changes» — сжимает историю так, как нужно вам, а не так, как угадает автомат; /clear начинает чистый контекст при переходе к несвязанной задаче. Большие исследования удобно отдавать субагенту: он работает в собственном окне, и в ваше возвращается только итог. Экономика окна подробно разобрана в комнате <Link href={`/${lang}/rooms/context-engineering-101`} className={LINK_CLS}>«Контекст-инжиниринг 101»</Link>.</>
              ) : (
                <>The practical conclusions. Keep persistent rules in CLAUDE.md rather than in messages: the file is re-read after compaction, a message is not. The /context command shows what currently occupies the window; /compact with a focus — for example, &quot;/compact focus on the API changes&quot; — compresses the history the way you need rather than the way the automatic pass guesses; /clear starts a clean context when you switch to an unrelated task. Large research is best handed to a subagent: it works in its own window, and only the result comes back into yours. The economics of the window are covered in detail in the <Link href={`/${lang}/rooms/context-engineering-101`} className={LINK_CLS}>Context Engineering 101</Link> room.</>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 5 */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-heading">
            {lang === 'ru' ? 'Глава 5: Человек в цикле: остановить, ограничить, откатить' : 'Chapter 5: The Human in the Loop: Stop, Limit, Roll Back'}
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Агент работает автономно, но вы остаётесь частью цикла — это принцип <Term id="human-in-the-loop" lang={lang}>human-in-the-loop</Term> в конкретном исполнении. Вмешаться можно двумя способами. Клавиша Esc останавливает агента сразу: текущий вызов инструмента отменяется, сделанная работа сохраняется, и агент ждёт указаний. Если останавливать не нужно, достаточно набрать уточнение и нажать Enter: сообщение встанет в очередь, агент прочитает его, как только завершатся текущие вызовы инструментов, и скорректирует следующий шаг. Ctrl+C тоже прерывает работающую операцию; если ничего не выполняется, первое нажатие очищает строку ввода, второе закрывает Claude Code.</>
              ) : (
                <>The agent works autonomously, but you remain part of the loop — this is the <Term id="human-in-the-loop" lang={lang}>human-in-the-loop</Term> principle in a concrete form. There are two ways to step in. The Esc key stops the agent at once: the running tool call is cancelled, the work done so far is kept, and the agent waits for instructions. If stopping is not needed, just type a correction and press Enter: the message is queued, the agent reads it as soon as the current tool calls finish, and adjusts its next step. Ctrl+C also interrupts a running operation; if nothing is running, the first press clears the input and the second exits Claude Code.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Второй рычаг — права. Режим прав задаёт, что агент может делать, не спрашивая вас. В ручном режиме (Manual) он спрашивает перед правками файлов и командами оболочки. В режиме accept edits он правит файлы сам, но спрашивает о прочих командах. В режиме планирования (plan) он исследует код и предлагает план, не трогая исходники. В автоматическом режиме (auto) классификатор в фоне проверяет действия и блокирует рискованные вместо того, чтобы спрашивать вас; с версии 2.1.283 это стартовый режим интерактивных сессий в терминале и VS Code. Режимы переключаются клавишами Shift+Tab, а отдельные команды вроде npm test можно разрешить заранее в настройках проекта.'
                : 'The second lever is permissions. A permission mode sets what the agent may do without asking you. In manual mode (Manual) it asks before file edits and shell commands. In accept edits mode it edits files on its own but asks about other commands. In plan mode it explores the code and proposes a plan without touching the source. In auto mode a background classifier reviews actions and blocks the risky ones instead of asking you; since version 2.1.283 it is the starting mode for interactive sessions in the terminal and VS Code. Modes are switched with Shift+Tab, and individual commands such as npm test can be allowed in advance in the project settings.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>Третий рычаг — откат. Перед каждым вашим сообщением, которое начинает новый ход, Claude Code сохраняет снимок файлов — <Term id="checkpoint" lang={lang}>чекпоинт</Term>. Если агент ушёл не туда, двойное нажатие Esc на пустой строке ввода или команда /rewind открывает меню отката: вернуть к выбранному моменту код, разговор или и то, и другое. Чекпоинты хранятся вместе с сессией и переживают её возобновление, так что откатиться можно и на следующий день.</>
              ) : (
                <>The third lever is rollback. Before each of your messages that starts a new turn, Claude Code saves a snapshot of the files — a <Term id="checkpoint" lang={lang}>checkpoint</Term>. If the agent went the wrong way, pressing Esc twice on an empty input line or running /rewind opens the rewind menu: restore the code, the conversation, or both to the chosen moment. Checkpoints are stored with the session and survive resuming it, so you can roll back the next day too.</>
              )}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru' ? (
                <>У отката есть границы, и знать их стоит заранее. Чекпоинты отслеживают только правки, сделанные инструментами редактирования файлов: если агент удалил или переместил файл командой оболочки (rm, mv), откат этого не вернёт. Действия во внешних системах — база данных, API, деплой — откатить нельзя вовсе. И чекпоинты не заменяют git: это быстрая отмена внутри сессии, а не история проекта. Для действий с внешними последствиями защита — права, для долгой истории — коммиты, как в комнате <Link href={`/${lang}/rooms/git-safety-net`} className={LINK_CLS}>«AC-105: Git как страховка агентной работы»</Link>.</>
              ) : (
                <>Rollback has limits, and they are worth knowing in advance. Checkpoints track only edits made by the file-editing tools: if the agent deleted or moved a file with a shell command (rm, mv), rewinding will not bring it back. Actions in external systems — a database, an API, a deployment — cannot be rolled back at all. And checkpoints do not replace git: they are a quick undo inside a session, not the history of a project. For actions with external consequences the protection is permissions; for long-term history it is commits, as in the <Link href={`/${lang}/rooms/git-safety-net`} className={LINK_CLS}>AC-105: Git as a Safety Net for Agent Work</Link> room.</>
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
            <li>{lang === 'ru' ? 'Цикл: сбор контекста → действие → проверка, с повторами; фазы перетекают друг в друга, а их набор зависит от задачи.' : 'The loop: gather context → act → verify, with repeats; the phases blend, and which ones run depends on the task.'}</li>
            <li>{lang === 'ru' ? 'Модель рассуждает, инструменты действуют, Claude Code — обвязка, которая даёт инструменты и собирает контекст.' : 'The model reasons, the tools act, and Claude Code is the harness that provides the tools and assembles the context.'}</li>
            <li>{lang === 'ru' ? 'В журнале хорошей сессии чтения и проверки больше, чем правок; правки — места, куда стоит смотреть внимательнее.' : 'A good session log has more reading and verifying than editing; the edits are the places to look at closely.'}</li>
            <li>{lang === 'ru' ? 'Контекст сжимается автоматически; постоянные правила — в CLAUDE.md, состояние окна — /context, управляемое сжатие — /compact с фокусом.' : 'Context is compacted automatically; persistent rules go in CLAUDE.md, the window state is in /context, and guided compression is /compact with a focus.'}</li>
            <li>{lang === 'ru' ? 'Esc останавливает, Shift+Tab меняет режим прав, Esc Esc или /rewind откатывает правки файлов — но не команды оболочки и не внешние системы.' : 'Esc stops, Shift+Tab changes the permission mode, Esc Esc or /rewind rolls back file edits — but not shell commands and not external systems.'}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
