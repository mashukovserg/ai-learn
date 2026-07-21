"use client";

import React from 'react';
import Term from '@/components/Term';
import Terminal from '@/components/Terminal';

export default function McpToolEcosystemsTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-8">
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 1: Проблема N×M интеграций'
            : 'Chapter 1: The N×M Integration Problem'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Представьте мир, где каждый AI-ассистент должен писать собственный коннектор к каждому
                внешнему сервису: GitHub, Slack, база данных, файловая система, CI/CD. Если у вас N
                приложений и M сервисов, то нужно N×M уникальных интеграций. Каждая — свой формат,
                свои ошибки, свой код авторизации. Именно так выглядел ландшафт до появления{' '}
                <Term id="mcp" lang={lang}>MCP</Term>.
              </>
            ) : (
              <>
                Imagine a world where every AI assistant has to write its own connector to every
                external service: GitHub, Slack, a database, the filesystem, CI/CD. With N
                applications and M services you need N×M unique integrations. Each one has its own
                format, its own error handling, its own auth code. That was the landscape before{' '}
                <Term id="mcp" lang={lang}>MCP</Term>.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                <Term id="mcp" lang={lang}>Model Context Protocol</Term> решает эту проблему так же,
                как USB-C решил хаос зарядных кабелей: один стандартный интерфейс между моделью и
                внешним миром. Разработчик пишет <Term id="mcp-server" lang={lang}>MCP Server</Term>{' '}
                один раз, и любое приложение-хост (Claude Desktop, VS Code, Cursor, собственный бот)
                может его подключить без переписывания кода. Протокол открытый, спецификация публичная,
                а экосистема серверов растёт экспоненциально.
              </>
            ) : (
              <>
                <Term id="mcp" lang={lang}>Model Context Protocol</Term> solves this the same way
                USB-C solved the charging-cable chaos: one standard interface between the model and
                the outside world. A developer writes an{' '}
                <Term id="mcp-server" lang={lang}>MCP Server</Term> once, and any host application
                (Claude Desktop, VS Code, Cursor, a custom bot) can connect to it without rewriting
                code. The protocol is open, the spec is public, and the server ecosystem is growing
                exponentially.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 2: Архитектура MCP — Host, Client, Server'
            : 'Chapter 2: MCP Architecture — Host, Client, Server'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Архитектура MCP состоит из трёх слоёв. <strong>Host</strong> — это приложение, с которым
                работает пользователь (Claude Desktop, IDE, чат-бот). Host управляет подключениями,
                безопасностью и согласием пользователя. Внутри Host живёт один или несколько{' '}
                <strong>MCP Client</strong> — каждый поддерживает соединение 1:1 с одним{' '}
                <strong>MCP Server</strong>. Сервер предоставляет конкретные возможности: инструменты,
                данные, шаблоны промптов.
              </>
            ) : (
              <>
                MCP architecture has three layers. The <strong>Host</strong> is the user-facing
                application (Claude Desktop, an IDE, a chatbot). The Host manages connections,
                security, and user consent. Inside the Host live one or more{' '}
                <strong>MCP Clients</strong> — each maintains a 1:1 connection to a single{' '}
                <strong>MCP Server</strong>. The Server exposes specific capabilities: tools, data,
                and prompt templates.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Поток запроса выглядит так: пользователь отправляет сообщение → Host передаёт его LLM →
                модель решает вызвать инструмент через{' '}
                <Term id="function-calling" lang={lang}>function calling</Term> → Client пересылает
                вызов на соответствующий Server → Server выполняет операцию (читает файл, делает API-запрос,
                ищет в базе) → результат возвращается обратно через Client в модель. Весь обмен
                происходит по протоколу <Term id="json-rpc" lang={lang}>JSON-RPC 2.0</Term> — тому же
                формату, что используется в{' '}
                <Term id="lsp" lang={lang}>Language Server Protocol (LSP)</Term>.
              </>
            ) : (
              <>
                The request flow looks like this: user sends a message → Host passes it to the LLM →
                the model decides to invoke a tool via{' '}
                <Term id="function-calling" lang={lang}>function calling</Term> → the Client forwards
                the call to the appropriate Server → the Server executes the operation (reads a file,
                makes an API call, queries a database) → the result travels back through the Client
                to the model. All communication uses{' '}
                <Term id="json-rpc" lang={lang}>JSON-RPC 2.0</Term> — the same format used in{' '}
                <Term id="lsp" lang={lang}>Language Server Protocol (LSP)</Term>.
              </>
            )}
          </p>
          <Terminal
            title="mcp · zsh"
            lines={[
              { cmd: 'claude mcp add filesystem npx @modelcontextprotocol/server-filesystem ~/repo', comment: lang === 'ru' ? '# подключить сервер' : '# register a server' },
              { out: 'added "filesystem" (stdio) · 3 tools' },
              { cmd: lang === 'ru' ? 'покажи README' : 'show the README', prompt: '>' },
              { out: '● filesystem ▸ read_file(README.md) → 1.2 kB' },
              { out: lang === 'ru' ? '✓ ответ на основе файла' : '✓ answered from the file', tone: 'ok' },
            ]}
          />
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 3: Три примитива MCP Server'
            : 'Chapter 3: Three MCP Server Primitives'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                MCP Server предоставляет три типа возможностей. <strong>Tools</strong> — это функции,
                которые модель может вызвать: поиск по коду, создание тикета, запуск теста. Каждый tool
                имеет имя, описание и JSON Schema для аргументов. <strong>Resources</strong> — это
                структурированные данные, которые модель может прочитать для контекста: файлы, записи
                из базы, конфигурации. Resources идентифицируются по URI и могут быть статическими или
                динамическими. <strong>Prompts</strong> — это готовые шаблоны взаимодействия: воркфлоу,
                которые сервер предлагает пользователю как отправные точки.
              </>
            ) : (
              <>
                An MCP Server exposes three types of capabilities. <strong>Tools</strong> are functions
                the model can call: search code, create a ticket, run a test. Each tool has a name,
                description, and JSON Schema for its arguments. <strong>Resources</strong> are
                structured data the model can read for context: files, database records, configurations.
                Resources are identified by URI and can be static or dynamic.{' '}
                <strong>Prompts</strong> are pre-built interaction templates: workflows the server
                offers users as starting points.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Ключевое различие: <strong>Tools</strong> управляются моделью (model-controlled) — LLM
                сама решает, когда их вызвать. <strong>Resources</strong> управляются приложением
                (application-controlled) — Host решает, какие данные предоставить в контекст.{' '}
                <strong>Prompts</strong> управляются пользователем (user-controlled) — человек выбирает
                шаблон для запуска. Это разделение ответственности — фундаментальный принцип
                безопасности MCP.
              </>
            ) : (
              <>
                The key distinction: <strong>Tools</strong> are model-controlled — the LLM decides
                when to call them. <strong>Resources</strong> are application-controlled — the Host
                decides which data to provide as context. <strong>Prompts</strong> are user-controlled
                — the human picks a template to start with. This separation of control is a
                fundamental MCP security principle.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 4: Транспорты — stdio и HTTP'
            : 'Chapter 4: Transports — stdio and HTTP'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                MCP поддерживает два основных транспорта. <strong>stdio</strong> — для локальных
                серверов: Host запускает MCP Server как дочерний процесс и общается через stdin/stdout.
                Идеально для доступа к файловой системе, локальным базам данных, CLI-инструментам.
                Никакой сетевой конфигурации не нужно. <strong>Streamable HTTP</strong> — для удалённых
                серверов: клиент отправляет HTTP POST-запросы, а сервер может стримить ответы через
                Server-Sent Events (SSE). Подходит для облачных интеграций и shared-сервисов.
              </>
            ) : (
              <>
                MCP supports two main transports. <strong>stdio</strong> is for local servers: the
                Host launches the MCP Server as a child process and communicates via stdin/stdout.
                Ideal for filesystem access, local databases, and CLI tools — no network config
                needed. <strong>Streamable HTTP</strong> is for remote servers: the client sends HTTP
                POST requests and the server can stream responses via Server-Sent Events (SSE).
                Suited for cloud integrations and shared services.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Выбор транспорта зависит от сценария. Для инструмента, который работает с локальными
                файлами разработчика — stdio. Для корпоративного сервера, к которому подключаются
                несколько пользователей — HTTP. Важно: протокол один и тот же (JSON-RPC 2.0), меняется
                только способ доставки сообщений. Это позволяет переключать транспорт без изменения
                логики сервера.
              </>
            ) : (
              <>
                Transport choice depends on the use case. For a tool working with local developer
                files — stdio. For an enterprise server serving multiple users — HTTP. The key point:
                the protocol is the same (JSON-RPC 2.0), only the message delivery mechanism changes.
                This lets you switch transports without changing server logic.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 5: Экосистема и безопасность'
            : 'Chapter 5: Ecosystem and Security'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Экосистема MCP-серверов уже охватывает сотни интеграций: файловые системы, GitHub,
                Slack, базы данных (PostgreSQL, SQLite), поисковые движки, Kubernetes, Terraform,
                мониторинг и десятки других. Серверы можно писать на любом языке — Python и TypeScript
                имеют официальные SDK, но протокол достаточно прост для реализации на Go, Rust, Java.
                Инструмент <Term id="mcp-inspector" lang={lang}>MCP Inspector</Term> позволяет
                тестировать серверы интерактивно прямо в браузере.
              </>
            ) : (
              <>
                The MCP server ecosystem already covers hundreds of integrations: filesystems, GitHub,
                Slack, databases (PostgreSQL, SQLite), search engines, Kubernetes, Terraform,
                monitoring, and dozens more. Servers can be written in any language — Python and
                TypeScript have official SDKs, but the protocol is simple enough to implement in Go,
                Rust, or Java. The <Term id="mcp-inspector" lang={lang}>MCP Inspector</Term> tool
                lets you test servers interactively right in the browser.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Безопасность в MCP строится на нескольких принципах. Во-первых, <strong>принцип
                минимальных привилегий</strong>: каждый сервер должен запрашивать только те права,
                которые ему реально нужны. Во-вторых, <strong>user consent</strong>: Host обязан
                получить явное согласие пользователя перед вызовом опасных инструментов. В-третьих,{' '}
                <strong>изоляция серверов</strong>: серверы не видят друг друга и не могут напрямую
                обмениваться данными. Наконец, данные пользователя не должны передаваться третьим
                сторонам без явного разрешения — это фундаментальное требование протокола.
              </>
            ) : (
              <>
                MCP security rests on several principles. First, <strong>least privilege</strong>:
                each server should request only the permissions it actually needs. Second,{' '}
                <strong>user consent</strong>: the Host must obtain explicit user approval before
                invoking dangerous tools. Third, <strong>server isolation</strong>: servers cannot see
                each other or directly exchange data. Finally, user data must not be shared with third
                parties without explicit permission — a fundamental protocol requirement.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 6: Жизненный цикл MCP-соединения'
            : 'Chapter 6: MCP Connection Lifecycle'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Каждое MCP-соединение проходит через три фазы. <strong>Initialization</strong>: Client
                и Server обмениваются сообщениями <code className="text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded text-sm">initialize</code> и{' '}
                <code className="text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded text-sm">initialized</code>,
                согласовывая версию протокола и список capabilities. Это критический момент: если версии
                несовместимы, соединение не устанавливается. <strong>Operation</strong>: после инициализации
                начинается штатный обмен — Client вызывает tools, читает resources, а Server может отправлять
                уведомления (notifications) об изменениях. <strong>Shutdown</strong>: Client или Server
                инициирует корректное завершение через close-сообщение, освобождая ресурсы.
              </>
            ) : (
              <>
                Every MCP connection goes through three phases. <strong>Initialization</strong>: the Client
                and Server exchange{' '}
                <code className="text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded text-sm">initialize</code> and{' '}
                <code className="text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded text-sm">initialized</code>{' '}
                messages, negotiating the protocol version and capabilities list. This is critical: if versions
                are incompatible, the connection is not established. <strong>Operation</strong>: after
                initialization, normal exchange begins — the Client calls tools, reads resources, and the Server
                can send notifications about changes. <strong>Shutdown</strong>: the Client or Server initiates
                a clean termination via a close message, freeing resources.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Важная деталь — <strong>capability negotiation</strong>. Не каждый Server предоставляет все три
                примитива. Сервер для файловой системы может объявить только tools и resources, без prompts.
                Сервер для шаблонов код-ревью может предоставить только prompts. Client узнает доступные
                возможности при инициализации и не пытается вызвать то, чего нет. Это делает протокол
                расширяемым: новые capabilities можно добавлять в будущие версии без ломающих изменений.
                Серверы также поддерживают <strong>dynamic tool discovery</strong> — список инструментов может
                обновляться в runtime через notification{' '}
                <code className="text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded text-sm">notifications/tools/list_changed</code>.
              </>
            ) : (
              <>
                An important detail is <strong>capability negotiation</strong>. Not every Server exposes all
                three primitives. A filesystem server might declare only tools and resources, with no prompts.
                A code-review template server might expose only prompts. The Client learns available
                capabilities during initialization and never attempts to invoke what does not exist. This makes
                the protocol extensible: new capabilities can be added in future versions without breaking
                changes. Servers also support <strong>dynamic tool discovery</strong> — the tool list can
                update at runtime via the{' '}
                <code className="text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded text-sm">notifications/tools/list_changed</code>{' '}
                notification.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 7: Паттерны и антипаттерны MCP-серверов'
            : 'Chapter 7: MCP Server Patterns and Anti-Patterns'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Опыт экосистемы выявил устойчивые паттерны проектирования. <strong>Тонкий адаптер</strong> —
                сервер не дублирует данные, а проксирует запросы к существующему API с правильной JSON Schema.
                Это минимизирует расхождение между MCP-сервером и источником истины.{' '}
                <strong>Composed tools</strong> — один сервер предоставляет несколько связанных инструментов
                (например, GitHub-сервер: search_issues, read_pr, create_comment), но каждый tool делает ровно
                одну операцию. <strong>Resource templates</strong> — URI ресурсов параметризуются
                (например, <code className="text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded text-sm">db://tables/&#123;table_name&#125;/schema</code>),
                позволяя модели запрашивать конкретные данные без перечисления всех вариантов.
              </>
            ) : (
              <>
                Ecosystem experience has revealed stable design patterns. <strong>Thin adapter</strong> — the
                server does not duplicate data but proxies requests to an existing API with proper JSON Schema.
                This minimizes drift between the MCP server and the source of truth.{' '}
                <strong>Composed tools</strong> — a single server exposes several related tools (e.g., a GitHub
                server: search_issues, read_pr, create_comment), but each tool does exactly one operation.{' '}
                <strong>Resource templates</strong> — resource URIs are parameterized
                (e.g., <code className="text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded text-sm">db://tables/&#123;table_name&#125;/schema</code>),
                letting the model request specific data without enumerating all options.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Антипаттерны не менее поучительны. <strong>God Server</strong> — один сервер с доступом ко
                всему: нарушает least privilege и превращает любую уязвимость в критическую.{' '}
                <strong>Unbounded tools</strong> — инструмент без лимитов: например, SQL-запрос без timeout
                или ограничения на количество строк. Модель может случайно запустить{' '}
                <code className="text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded text-sm">SELECT * FROM logs</code>{' '}
                на таблице с миллиардами записей. <strong>Missing descriptions</strong> — tools без
                человекочитаемых описаний и примеров. LLM выбирает инструменты по описанию; если оно пустое
                или криптичное, модель будет вызывать tool некорректно или игнорировать его. Хорошая практика:
                каждый tool description должен содержать одно предложение «что делает» и одно «когда
                использовать».
              </>
            ) : (
              <>
                Anti-patterns are equally instructive. <strong>God Server</strong> — one server with access to
                everything: violates least privilege and turns any vulnerability into a critical one.{' '}
                <strong>Unbounded tools</strong> — a tool with no limits: for example, an SQL query with no
                timeout or row cap. The model may accidentally run{' '}
                <code className="text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded text-sm">SELECT * FROM logs</code>{' '}
                on a table with billions of rows. <strong>Missing descriptions</strong> — tools without
                human-readable descriptions and examples. The LLM picks tools by description; if it is empty
                or cryptic, the model will call the tool incorrectly or ignore it entirely. Best practice:
                every tool description should have one sentence for &quot;what it does&quot; and one for
                &quot;when to use it.&quot;
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 8: MCP в реальных сценариях'
            : 'Chapter 8: MCP in Real-World Scenarios'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                На практике MCP превращает AI-ассистента из «умного собеседника» в «умного исполнителя».
                Разработчик подключает MCP-сервер для GitHub — и ассистент может искать issues, читать
                PR, создавать комментарии. Подключает сервер для PostgreSQL — и модель может
                анализировать схему, писать и выполнять запросы. Подключает сервер для Slack — и
                ассистент отправляет отчёты в каналы команды. Каждый сервер — это «суперспособность»,
                которую можно добавить или убрать одной строкой в конфигурации.
              </>
            ) : (
              <>
                In practice MCP transforms an AI assistant from a &quot;smart conversationalist&quot; into a
                &quot;smart executor.&quot; A developer connects an MCP server for GitHub — and the assistant
                can search issues, read PRs, and post comments. Connects a PostgreSQL server — and
                the model can analyze schemas, write and run queries. Connects a Slack server — and
                the assistant sends reports to team channels. Each server is a &quot;superpower&quot; that can
                be added or removed with a single config line.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Ключевой паттерн — <strong>композиция серверов</strong>. Один Host может подключить
                десятки серверов одновременно, и модель сама выбирает нужные инструменты для задачи.
                Например, для code review агент использует GitHub-сервер (получить diff), файловый
                сервер (прочитать связанные файлы) и CI-сервер (проверить статус тестов). Это
                принципиально отличается от монолитных плагинов: каждый сервер делает одну вещь
                хорошо, а модель оркестрирует их в реальном времени.
              </>
            ) : (
              <>
                The key pattern is <strong>server composition</strong>. A single Host can connect
                dozens of servers simultaneously, and the model picks the right tools for each task.
                For example, during code review the agent uses the GitHub server (get the diff), the
                filesystem server (read related files), and the CI server (check test status). This
                is fundamentally different from monolithic plugins: each server does one thing well,
                and the model orchestrates them in real time.
              </>
            )}
          </p>
        </div>
      </section>
    </div>
  );
}
