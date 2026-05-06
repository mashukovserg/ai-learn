import { LocalizedTask } from '../types';

export const mcpToolEcosystemsTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Что лучше всего описывает Model Context Protocol (MCP)?',
      en: 'What best describes the Model Context Protocol (MCP)?',
    },
    options: [
      {
        ru: 'Проприетарный API, доступный только через облако Anthropic.',
        en: 'A proprietary API available only through the Anthropic cloud.',
      },
      {
        ru: 'Открытый стандарт для подключения AI-моделей к внешним данным и инструментам через единый протокол.',
        en: 'An open standard for connecting AI models to external data and tools through a unified protocol.',
      },
      {
        ru: 'Формат файлов для хранения весов модели.',
        en: 'A file format for storing model weights.',
      },
    ],
    answer: {
      ru: 'Открытый стандарт для подключения AI-моделей к внешним данным и инструментам через единый протокол.',
      en: 'An open standard for connecting AI models to external data and tools through a unified protocol.',
    },
    explanation: {
      ru: 'Верно. MCP — открытый протокол (часто сравнивают с «USB-C для AI»), который стандартизирует взаимодействие моделей с внешними системами.',
      en: 'Correct. MCP is an open protocol (often called "USB-C for AI") that standardizes how models interact with external systems.',
    },
  },
  {
    id: 2,
    type: 'input',
    question: {
      ru: 'Как называется компонент MCP-архитектуры, который предоставляет инструменты и ресурсы для AI-модели?',
      en: 'What is the MCP architecture component that exposes tools and resources to the AI model called?',
    },
    answer: ['mcp server', 'server', 'сервер', 'mcp-сервер'],
    hint: {
      ru: 'Это серверная часть протокола, к которой подключается клиент.',
      en: 'It is the server-side component that a client connects to.',
    },
    explanation: {
      ru: 'Да. MCP Server предоставляет инструменты (tools), ресурсы (resources) и промпты (prompts) через стандартизированный интерфейс.',
      en: 'Yes. An MCP Server exposes tools, resources, and prompts through a standardized interface.',
    },
  },
  {
    id: 3,
    type: 'sorting',
    question: {
      ru: 'Расположите участников MCP-взаимодействия в порядке потока запроса.',
      en: 'Arrange MCP interaction participants in the order of a request flow.',
    },
    initialItems: [
      { ru: 'MCP Server выполняет операцию и возвращает результат', en: 'MCP Server executes the operation and returns a result' },
      { ru: 'Пользователь отправляет запрос в Host-приложение', en: 'User sends a request to the Host application' },
      { ru: 'MCP Client пересылает вызов инструмента на Server', en: 'MCP Client forwards the tool call to the Server' },
      { ru: 'LLM решает вызвать инструмент через function calling', en: 'LLM decides to invoke a tool via function calling' },
    ],
    correctOrder: [
      { ru: 'Пользователь отправляет запрос в Host-приложение', en: 'User sends a request to the Host application' },
      { ru: 'LLM решает вызвать инструмент через function calling', en: 'LLM decides to invoke a tool via function calling' },
      { ru: 'MCP Client пересылает вызов инструмента на Server', en: 'MCP Client forwards the tool call to the Server' },
      { ru: 'MCP Server выполняет операцию и возвращает результат', en: 'MCP Server executes the operation and returns a result' },
    ],
    answer: '',
    explanation: {
      ru: 'Верно. Запрос идёт от пользователя через Host → LLM → Client → Server и обратно.',
      en: 'Correct. The request flows from user through Host → LLM → Client → Server and back.',
    },
  },
  {
    id: 4,
    type: 'multiple-select',
    question: {
      ru: 'Какие примитивы (capabilities) предоставляет MCP Server? Выберите все подходящие.',
      en: 'Which primitives (capabilities) does an MCP Server expose? Select all that apply.',
    },
    options: [
      { ru: 'Tools — функции, которые модель может вызвать', en: 'Tools — functions the model can invoke' },
      { ru: 'Resources — структурированные данные для контекста', en: 'Resources — structured data for context' },
      { ru: 'Weights — веса модели для дообучения', en: 'Weights — model weights for fine-tuning' },
      { ru: 'Prompts — шаблоны промптов и воркфлоу', en: 'Prompts — prompt templates and workflows' },
    ],
    answer: [
      { ru: 'Tools — функции, которые модель может вызвать', en: 'Tools — functions the model can invoke' },
      { ru: 'Resources — структурированные данные для контекста', en: 'Resources — structured data for context' },
      { ru: 'Prompts — шаблоны промптов и воркфлоу', en: 'Prompts — prompt templates and workflows' },
    ],
    explanation: {
      ru: 'Три основных примитива MCP Server: Tools (вызываемые функции), Resources (данные/контекст) и Prompts (шаблоны). Веса модели не являются частью протокола.',
      en: 'The three core MCP Server primitives are Tools (callable functions), Resources (data/context), and Prompts (templates). Model weights are not part of the protocol.',
    },
  },
  {
    id: 5,
    type: 'categorize',
    question: {
      ru: 'Распределите компоненты по ролям в MCP-архитектуре: Host / Client / Server.',
      en: 'Map components to their roles in MCP architecture: Host / Client / Server.',
    },
    answer: '',
    explanation: {
      ru: 'Host — приложение пользователя. Client поддерживает соединение 1:1 с сервером. Server предоставляет конкретные возможности.',
      en: 'Host is the user-facing application. Client maintains a 1:1 connection to a server. Server exposes specific capabilities.',
    },
    categorize: {
      buckets: [
        { ru: 'Host', en: 'Host' },
        { ru: 'Client', en: 'Client' },
        { ru: 'Server', en: 'Server' },
      ],
      items: [
        { ru: 'Claude Desktop, VS Code, IDE-плагин', en: 'Claude Desktop, VS Code, IDE plugin' },
        { ru: 'Поддерживает соединение 1:1 и маршрутизирует запросы', en: 'Maintains 1:1 connection and routes requests' },
        { ru: 'Предоставляет tools, resources и prompts', en: 'Exposes tools, resources, and prompts' },
        { ru: 'Управляет согласием пользователя и безопасностью', en: 'Manages user consent and security policy' },
      ],
      correctMapping: {
        'Claude Desktop, VS Code, IDE plugin': 'Host',
        'Maintains 1:1 connection and routes requests': 'Client',
        'Exposes tools, resources, and prompts': 'Server',
        'Manages user consent and security policy': 'Host',
      },
    },
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: {
      ru: 'Какой транспорт MCP лучше всего подходит для локальных интеграций (например, доступ к файловой системе)?',
      en: 'Which MCP transport is best suited for local integrations (e.g., filesystem access)?',
    },
    options: [
      {
        ru: 'HTTP + SSE — для удалённых серверов через сеть.',
        en: 'HTTP + SSE — for remote servers over the network.',
      },
      {
        ru: 'stdio — общение через stdin/stdout локального процесса.',
        en: 'stdio — communication via stdin/stdout of a local process.',
      },
      {
        ru: 'WebSocket — только для браузерных приложений.',
        en: 'WebSocket — only for browser-based applications.',
      },
    ],
    answer: {
      ru: 'stdio — общение через stdin/stdout локального процесса.',
      en: 'stdio — communication via stdin/stdout of a local process.',
    },
    explanation: {
      ru: 'Верно. stdio-транспорт запускает MCP Server как дочерний процесс и обменивается JSON-RPC через stdin/stdout — идеально для локальных инструментов.',
      en: 'Correct. The stdio transport launches the MCP Server as a child process and exchanges JSON-RPC via stdin/stdout — ideal for local tools.',
    },
  },
  {
    id: 7,
    type: 'mentor',
    question: {
      ru: 'Сценарий: команда хочет подключить внутреннюю базу знаний к AI-ассистенту через MCP',
      en: 'Scenario: a team wants to connect an internal knowledge base to an AI assistant via MCP',
    },
    answer: '',
    explanation: {
      ru: 'MCP Server для базы знаний должен предоставлять resources для контекста и tools для поиска, а Host контролирует доступ.',
      en: 'An MCP Server for a knowledge base should expose resources for context and tools for search, with the Host controlling access.',
    },
    dialogue: {
      mentorMessage: {
        ru: 'Твоя команда хочет, чтобы AI-ассистент мог искать по внутренней wiki и цитировать статьи. У wiki есть REST API. Какой подход выберешь?',
        en: 'Your team wants the AI assistant to search an internal wiki and cite articles. The wiki has a REST API. Which approach do you choose?',
      },
      userOptions: [
        {
          text: {
            ru: 'Скопировать всю wiki в контекстное окно модели при каждом запросе.',
            en: 'Copy the entire wiki into the model context window on every request.',
          },
          reaction: {
            ru: 'Это не масштабируется: контекстное окно ограничено, а стоимость будет огромной. Плюс данные устареют между копированиями.',
            en: 'This does not scale: the context window is limited, cost will be enormous, and data goes stale between copies.',
          },
          isCorrect: false,
        },
        {
          text: {
            ru: 'Написать MCP Server, который оборачивает wiki REST API: tool для поиска статей и resource для получения контента конкретной страницы.',
            en: 'Build an MCP Server wrapping the wiki REST API: a tool for searching articles and a resource for fetching specific page content.',
          },
          reaction: {
            ru: 'Отлично. Модель вызывает search tool по запросу, получает релевантные статьи как ресурсы и может их цитировать. Данные всегда актуальны, контекст минимален.',
            en: 'Excellent. The model calls the search tool on demand, gets relevant articles as resources, and can cite them. Data stays fresh and context stays minimal.',
          },
          deepening: {
            ru: 'Это паттерн «тонкий MCP-адаптер»: сервер не дублирует данные, а проксирует запросы к существующему API с правильной схемой.',
            en: 'This is the "thin MCP adapter" pattern: the server does not duplicate data but proxies requests to the existing API with a proper schema.',
          },
          isCorrect: true,
        },
        {
          text: {
            ru: 'Дать модели прямой доступ к базе данных wiki без промежуточного слоя.',
            en: 'Give the model direct database access to the wiki without an intermediary layer.',
          },
          reaction: {
            ru: 'Опасно: без промежуточного слоя нет контроля доступа, валидации запросов и ограничения на чтение/запись.',
            en: 'Dangerous: without an intermediary layer there is no access control, query validation, or read/write restriction.',
          },
          isCorrect: false,
        },
      ],
    },
  },
  {
    id: 8,
    type: 'timeline',
    question: {
      ru: 'Упорядочите этапы создания и подключения MCP Server.',
      en: 'Arrange the stages of building and connecting an MCP Server.',
    },
    answer: '',
    explanation: {
      ru: 'Правильно. Сначала определяем capabilities, затем реализуем хендлеры, подключаем транспорт, тестируем и регистрируем в Host.',
      en: 'Correct. First define capabilities, then implement handlers, connect transport, test, and register in the Host.',
    },
    timeline: {
      events: [
        {
          label: { ru: 'Определить tools и resources, которые сервер будет предоставлять', en: 'Define tools and resources the server will expose' },
          year: 'Step 1',
        },
        {
          label: { ru: 'Реализовать хендлеры для каждого tool и resource', en: 'Implement handlers for each tool and resource' },
          year: 'Step 2',
        },
        {
          label: { ru: 'Подключить транспорт (stdio или HTTP+SSE)', en: 'Connect transport (stdio or HTTP+SSE)' },
          year: 'Step 3',
        },
        {
          label: { ru: 'Протестировать сервер с MCP Inspector', en: 'Test the server with MCP Inspector' },
          year: 'Step 4',
        },
        {
          label: { ru: 'Зарегистрировать сервер в конфигурации Host-приложения', en: 'Register the server in the Host application config' },
          year: 'Step 5',
        },
      ],
      correctOrder: [
        { ru: 'Определить tools и resources, которые сервер будет предоставлять', en: 'Define tools and resources the server will expose' },
        { ru: 'Реализовать хендлеры для каждого tool и resource', en: 'Implement handlers for each tool and resource' },
        { ru: 'Подключить транспорт (stdio или HTTP+SSE)', en: 'Connect transport (stdio or HTTP+SSE)' },
        { ru: 'Протестировать сервер с MCP Inspector', en: 'Test the server with MCP Inspector' },
        { ru: 'Зарегистрировать сервер в конфигурации Host-приложения', en: 'Register the server in the Host application config' },
      ],
    },
  },
  {
    id: 9,
    type: 'scenario',
    question: {
      ru: 'Миссия: спроектировать tool-экосистему для DevOps-агента',
      en: 'Mission: design a tool ecosystem for a DevOps agent',
    },
    answer: '',
    explanation: {
      ru: 'Лучшая стратегия: несколько специализированных MCP-серверов с минимальными правами и human-in-the-loop для опасных операций.',
      en: 'Best strategy: multiple specialized MCP servers with least-privilege permissions and human-in-the-loop for dangerous operations.',
    },
    scenario: {
      brief: {
        ru: 'DevOps-агент должен: читать логи из Grafana, управлять деплоями в Kubernetes, и создавать тикеты в Jira. Нужно спроектировать MCP-архитектуру.',
        en: 'A DevOps agent must: read logs from Grafana, manage deployments in Kubernetes, and create tickets in Jira. You need to design the MCP architecture.',
      },
      constraints: [
        { ru: 'Агент не должен иметь доступ к delete/scale-down в production без подтверждения', en: 'Agent must not have access to delete/scale-down in production without approval' },
        { ru: 'Каждая интеграция должна быть независимо обновляемой', en: 'Each integration must be independently updatable' },
      ],
      choices: [
        {
          text: {
            ru: 'Один MCP Server с доступом ко всем трем системам и полными правами.',
            en: 'One MCP Server with access to all three systems and full permissions.',
          },
          outcome: {
            ru: 'Монолит нарушает принцип наименьших привилегий и не позволяет обновлять интеграции независимо.',
            en: 'A monolith violates least-privilege and prevents independent integration updates.',
          },
          score: 15,
        },
        {
          text: {
            ru: 'Три отдельных MCP Server (Grafana read-only, K8s с human-approval для опасных операций, Jira write). Host управляет согласием.',
            en: 'Three separate MCP Servers (Grafana read-only, K8s with human-approval for dangerous ops, Jira write). Host manages consent.',
          },
          outcome: {
            ru: 'Каждый сервер минимально привилегирован, независимо обновляется, а опасные действия требуют подтверждения. Идеальная архитектура.',
            en: 'Each server has minimal privileges, updates independently, and dangerous actions require approval. Ideal architecture.',
          },
          score: 95,
        },
        {
          text: {
            ru: 'Два сервера: один для чтения (Grafana + Jira), один для записи (K8s + Jira). Без human-in-the-loop.',
            en: 'Two servers: one for reads (Grafana + Jira), one for writes (K8s + Jira). No human-in-the-loop.',
          },
          outcome: {
            ru: 'Разделение по read/write лучше монолита, но K8s без human-approval в production — нарушение требования безопасности.',
            en: 'Read/write split is better than a monolith, but K8s without human-approval in production violates the safety requirement.',
          },
          score: 45,
        },
      ],
      passingScore: 70,
    },
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: {
      ru: 'Почему MCP использует JSON-RPC 2.0 в качестве формата сообщений?',
      en: 'Why does MCP use JSON-RPC 2.0 as its message format?',
    },
    options: [
      {
        ru: 'Это единственный формат, который поддерживает Python.',
        en: 'It is the only format Python supports.',
      },
      {
        ru: 'JSON-RPC 2.0 — легковесный, stateless-формат с поддержкой запросов, ответов и нотификаций, уже принятый в IDE-экосистеме (LSP).',
        en: 'JSON-RPC 2.0 is a lightweight, stateless format supporting requests, responses, and notifications, already adopted in the IDE ecosystem (LSP).',
      },
      {
        ru: 'Потому что REST API устарели и больше не используются.',
        en: 'Because REST APIs are deprecated and no longer used.',
      },
    ],
    answer: {
      ru: 'JSON-RPC 2.0 — легковесный, stateless-формат с поддержкой запросов, ответов и нотификаций, уже принятый в IDE-экосистеме (LSP).',
      en: 'JSON-RPC 2.0 is a lightweight, stateless format supporting requests, responses, and notifications, already adopted in the IDE ecosystem (LSP).',
    },
    explanation: {
      ru: 'Верно. JSON-RPC 2.0 хорошо знаком разработчикам через LSP (Language Server Protocol) и обеспечивает простой, стандартизированный обмен сообщениями.',
      en: 'Correct. JSON-RPC 2.0 is familiar to developers through LSP (Language Server Protocol) and provides simple, standardized message exchange.',
    },
  },
  {
    id: 11,
    type: 'input',
    question: {
      ru: 'Как называется официальный инструмент для отладки и тестирования MCP-серверов в браузере?',
      en: 'What is the official tool for debugging and testing MCP servers in the browser called?',
    },
    answer: ['mcp inspector', 'inspector'],
    hint: {
      ru: 'Два слова: MCP + ???',
      en: 'Two words: MCP + ???',
    },
    explanation: {
      ru: 'Да. MCP Inspector — интерактивный инструмент для тестирования серверов: можно вызывать tools, читать resources и проверять prompts.',
      en: 'Yes. MCP Inspector is an interactive tool for testing servers: you can call tools, read resources, and verify prompts.',
    },
  },
  {
    id: 12,
    type: 'mentor',
    question: {
      ru: 'Безопасность в MCP: кто контролирует, какие инструменты может вызвать модель?',
      en: 'MCP security: who controls which tools the model can invoke?',
    },
    answer: '',
    explanation: {
      ru: 'В MCP именно Host-приложение и пользователь контролируют доступ. Модель не может самостоятельно расширить свои права.',
      en: 'In MCP, the Host application and user control access. The model cannot unilaterally expand its own permissions.',
    },
    dialogue: {
      mentorMessage: {
        ru: 'Модель через MCP обнаружила новый сервер с инструментом для удаления файлов. Кто должен одобрить его использование?',
        en: 'The model discovered a new MCP server with a file-deletion tool. Who should approve its use?',
      },
      userOptions: [
        {
          text: {
            ru: 'Модель сама решает, когда вызывать инструмент — она достаточно умная.',
            en: 'The model decides on its own when to call the tool — it is smart enough.',
          },
          reaction: {
            ru: 'Нет. Принцип MCP: модель предлагает вызов, но Host и пользователь принимают решение. Human-in-the-loop обязателен для опасных операций.',
            en: 'No. MCP principle: the model proposes a call, but the Host and user make the decision. Human-in-the-loop is required for dangerous operations.',
          },
          isCorrect: false,
        },
        {
          text: {
            ru: 'Host-приложение проверяет политику доступа, и пользователь явно подтверждает использование нового инструмента.',
            en: 'The Host application checks the access policy, and the user explicitly confirms use of the new tool.',
          },
          reaction: {
            ru: 'Правильно. MCP построен на принципе «пользователь контролирует»: Host проверяет scope, а user даёт consent.',
            en: 'Correct. MCP is built on the "user in control" principle: the Host checks scope, and the user gives consent.',
          },
          deepening: {
            ru: 'Это архитектурное решение MCP: разделение между discovery (модель узнаёт об инструментах) и authorization (пользователь одобряет их использование).',
            en: 'This is an architectural MCP decision: separation between discovery (model learns about tools) and authorization (user approves their use).',
          },
          isCorrect: true,
        },
      ],
    },
  },
  {
    id: 13,
    type: 'sorting',
    question: {
      ru: 'Расположите фазы жизненного цикла MCP-соединения в правильном порядке.',
      en: 'Arrange the MCP connection lifecycle phases in the correct order.',
    },
    initialItems: [
      { ru: 'Shutdown: корректное завершение и освобождение ресурсов', en: 'Shutdown: clean termination and resource release' },
      { ru: 'Operation: штатный обмен — вызовы tools, чтение resources, notifications', en: 'Operation: normal exchange — tool calls, resource reads, notifications' },
      { ru: 'Initialization: обмен initialize/initialized, согласование capabilities', en: 'Initialization: exchange initialize/initialized, negotiate capabilities' },
    ],
    correctOrder: [
      { ru: 'Initialization: обмен initialize/initialized, согласование capabilities', en: 'Initialization: exchange initialize/initialized, negotiate capabilities' },
      { ru: 'Operation: штатный обмен — вызовы tools, чтение resources, notifications', en: 'Operation: normal exchange — tool calls, resource reads, notifications' },
      { ru: 'Shutdown: корректное завершение и освобождение ресурсов', en: 'Shutdown: clean termination and resource release' },
    ],
    answer: '',
    explanation: {
      ru: 'Верно. Соединение начинается с инициализации (согласование версии и capabilities), затем переходит в рабочую фазу, и завершается корректным shutdown.',
      en: 'Correct. A connection starts with initialization (version and capability negotiation), then enters the operation phase, and ends with a clean shutdown.',
    },
  },
  {
    id: 14,
    type: 'categorize',
    question: {
      ru: 'Распределите примеры по категориям: паттерн или антипаттерн проектирования MCP-серверов.',
      en: 'Categorize the examples as MCP server design patterns or anti-patterns.',
    },
    answer: '',
    explanation: {
      ru: 'Тонкий адаптер и composed tools — проверенные паттерны. God Server и tools без описаний — антипаттерны, ведущие к проблемам безопасности и некорректному использованию.',
      en: 'Thin adapter and composed tools are proven patterns. God Server and tools without descriptions are anti-patterns that lead to security issues and misuse.',
    },
    categorize: {
      buckets: [
        { ru: 'Паттерн', en: 'Pattern' },
        { ru: 'Антипаттерн', en: 'Anti-pattern' },
      ],
      items: [
        { ru: 'Тонкий адаптер: проксирует запросы к существующему API', en: 'Thin adapter: proxies requests to an existing API' },
        { ru: 'God Server: один сервер с доступом ко всем системам', en: 'God Server: one server with access to all systems' },
        { ru: 'Composed tools: несколько связанных инструментов, каждый делает одну операцию', en: 'Composed tools: several related tools, each does one operation' },
        { ru: 'Tools без описаний и примеров использования', en: 'Tools without descriptions or usage examples' },
        { ru: 'Resource templates: параметризованные URI для запроса конкретных данных', en: 'Resource templates: parameterized URIs for requesting specific data' },
        { ru: 'SQL-инструмент без timeout и ограничения на строки', en: 'SQL tool without timeout or row limit' },
      ],
      correctMapping: {
        'Thin adapter: proxies requests to an existing API': 'Pattern',
        'God Server: one server with access to all systems': 'Anti-pattern',
        'Composed tools: several related tools, each does one operation': 'Pattern',
        'Tools without descriptions or usage examples': 'Anti-pattern',
        'Resource templates: parameterized URIs for requesting specific data': 'Pattern',
        'SQL tool without timeout or row limit': 'Anti-pattern',
      },
    },
  },
  {
    id: 15,
    type: 'scenario',
    question: {
      ru: 'Миссия: выбрать транспорт и архитектуру для корпоративного MCP-сервера',
      en: 'Mission: choose transport and architecture for a corporate MCP server',
    },
    answer: '',
    explanation: {
      ru: 'Для multi-user корпоративного сценария с аутентификацией нужен HTTP-транспорт, OAuth 2.0 и отдельные серверы по доменам.',
      en: 'For a multi-user corporate scenario with authentication, HTTP transport with OAuth 2.0 and domain-separated servers is the right choice.',
    },
    scenario: {
      brief: {
        ru: 'Компания запускает AI-ассистента для 200 сотрудников. Нужен доступ к CRM, внутренней wiki и системе тикетов. Данные содержат персональную информацию клиентов.',
        en: 'A company is launching an AI assistant for 200 employees. It needs access to the CRM, internal wiki, and ticketing system. Data contains customer PII.',
      },
      constraints: [
        { ru: 'Каждый сотрудник должен видеть только данные, к которым имеет доступ', en: 'Each employee must only see data they have access to' },
        { ru: 'Серверы должны работать централизованно, не на машинах сотрудников', en: 'Servers must run centrally, not on employee machines' },
      ],
      choices: [
        {
          text: {
            ru: 'stdio-транспорт: каждый сотрудник запускает локальные MCP-серверы на своей машине.',
            en: 'stdio transport: each employee runs local MCP servers on their machine.',
          },
          outcome: {
            ru: 'stdio требует локального запуска процессов — не подходит для централизованного развертывания на 200 пользователей. Управление доступом невозможно.',
            en: 'stdio requires local process launch — unsuitable for centralized deployment across 200 users. Access control is not feasible.',
          },
          score: 10,
        },
        {
          text: {
            ru: 'Streamable HTTP с OAuth 2.0: три отдельных MCP-сервера (CRM, wiki, тикеты) за API gateway с проверкой прав на уровне каждого запроса.',
            en: 'Streamable HTTP with OAuth 2.0: three separate MCP servers (CRM, wiki, tickets) behind an API gateway with per-request access control.',
          },
          outcome: {
            ru: 'HTTP-транспорт позволяет централизованно развернуть серверы, OAuth обеспечивает аутентификацию, а разделение по доменам — независимое обновление и least privilege.',
            en: 'HTTP transport enables centralized deployment, OAuth handles authentication, and domain separation ensures independent updates and least privilege.',
          },
          score: 95,
        },
        {
          text: {
            ru: 'Один HTTP MCP-сервер для всех трёх систем с API-ключом на уровне компании.',
            en: 'One HTTP MCP server for all three systems with a company-level API key.',
          },
          outcome: {
            ru: 'Единый API-ключ не различает сотрудников — все видят все данные. God Server + отсутствие per-user auth нарушает оба ограничения.',
            en: 'A single API key does not distinguish employees — everyone sees all data. God Server + missing per-user auth violates both constraints.',
          },
          score: 20,
        },
      ],
      passingScore: 70,
    },
  },
];
