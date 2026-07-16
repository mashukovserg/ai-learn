import React from 'react';
import Terminal from '@/components/Terminal';

export default function ClaudeCodeProWorkflowTheory({ lang }: { lang: string }) {
  if (lang === 'ru') {
    return (
      <>
        <section>
          <h2>Мастерство управления CLI</h2>
          <p>
            Claude Code в терминале — это мощный инструмент, требующий навыков управления. 
            Профессиональный воркфлоу строится вокруг трех столпов: <strong>контроля</strong>, 
            <strong>персистентности</strong> и <strong>кастомизации</strong>.
          </p>
        </section>

        <section className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-xl my-8">
          <h3 className="text-emerald-500 mt-0">Планы и Разрешения</h3>
          <p>
            Прежде чем разрешить агенту менять ваш код, используйте режим <strong>/plan</strong>. 
            Это заставляет Claude сначала составить пошаговый список действий в виде Markdown-файла. 
            Вы можете обсудить этот план, внести правки и только потом нажать &quot;Execute&quot;.
          </p>
          <p>
            <strong>Совет:</strong> Сохраняйте планы в отдельные файлы проекта. Это ваша страховка
            и документация архитектурных решений агента.
          </p>
          <Terminal
            title="claude · сессия"
            lines={[
              { cmd: '/plan добавить rate-limit на /login', prompt: '>', comment: '# режим плана' },
              { out: '● читаю src/auth/login.ts …' },
              { out: '● план готов → plans/rate-limit.md  (3 шага)' },
              { cmd: 'execute', prompt: '>', comment: '# только после ревью плана' },
              { out: '● правка src/auth/login.ts  +18 -2' },
              { out: '● npm test → 42 passed', tone: 'ok' },
            ]}
          />
        </section>

        <section>
          <h3>Жизненный цикл сессий: Resume & Rewind</h3>
          <p>
            Каждая сессия в Claude Code сохраняется на диске в формате JSONL (в папке `~/.claude/projects`). 
            Это дает вам уникальные возможности:
          </p>
          <ul>
            <li><strong>/resume:</strong> Если ваш компьютер завис или вы случайно закрыли терминал, вы можете продолжить работу с того же места, используя ID сессии. Более того, вы можете возобновить сессию, начатую в веб-интерфейсе, в локальном терминале.</li>
            <li><strong>/rewind:</strong> Позволяет откатить сессию к любому сообщению в прошлом. Если агент зашел в тупик, не мучайтесь — просто сделайте &quot;rewind&quot; и попробуйте другой подход.</li>
          </ul>
        </section>

        <section>
          <h3>Кастомизация: Status Line</h3>
          <p>
            Нижняя строка в терминале Claude Code — полноценный <strong>интерфейс телеметрии</strong>, а не декоративная надпись.
            Вы можете создать файл `status-line.sh` и выводить туда любые данные: стоимость текущей сессии,
            расход токенов или даже статус ваших тестов.
          </p>
          <p>
            Claude Code передает в ваш скрипт JSON с данными сессии через стандартный ввод (stdin), 
            а вы возвращаете строку, которую хотите видеть на экране. Это можно реализовать на 
            Bash, Python или Node.js.
          </p>
        </section>

        <section>
          <h3>Иерархия настроек (Scopes)</h3>
          <p>Настройки Claude Code наследуются сверху вниз:</p>
          <ol>
            <li><strong>Managed Settings:</strong> Настройки организации (IT/DevOps). Высший приоритет.</li>
            <li><strong>User Settings:</strong> Ваши глобальные предпочтения.</li>
            <li><strong>Project Settings:</strong> Настройки конкретного репозитория.</li>
            <li><strong>Local Settings:</strong> Ваши личные настройки для проекта, которые не попадают в Git.</li>
          </ol>
        </section>
      </>
    );
  }

  return (
    <>
      <section>
        <h2>CLI Mastery</h2>
        <p>
          Claude Code in the terminal is a powerful tool that requires management skills.
          A professional workflow is built around three pillars: <strong>control</strong>,
          <strong>persistence</strong>, and <strong>customization</strong>.
        </p>
      </section>

      <section className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-xl my-8">
        <h3 className="text-emerald-500 mt-0">Plans and Permissions</h3>
        <p>
          Before allowing the agent to change your code, use <strong>/plan</strong> mode.
          This forces Claude to first draft a step-by-step action list as a Markdown file.
          You can discuss this plan, make edits, and only then hit &quot;Execute.&quot;
        </p>
        <p>
          <strong>Tip:</strong> Save plans into separate project files. This is your insurance
          and documentation of the agent&apos;s architectural decisions.
        </p>
        <Terminal
          title="claude · session"
          lines={[
            { cmd: '/plan add rate-limiting to /login', prompt: '>', comment: '# plan mode' },
            { out: '● reading src/auth/login.ts …' },
            { out: '● plan written → plans/rate-limit.md  (3 steps)' },
            { cmd: 'execute', prompt: '>', comment: '# only after reviewing the plan' },
            { out: '● edited src/auth/login.ts  +18 -2' },
            { out: '● npm test → 42 passed', tone: 'ok' },
          ]}
        />
      </section>

      <section>
        <h3>Session Lifecycle: Resume & Rewind</h3>
        <p>
          Every session in Claude Code is saved to disk in JSONL format (in `~/.claude/projects`).
          This gives you unique capabilities:
        </p>
        <ul>
          <li><strong>/resume:</strong> If your computer freezes or you accidentally close the terminal, you can continue from the exact same spot using the session ID. Moreover, you can resume a session started in the web UI within your local terminal.</li>
          <li><strong>/rewind:</strong> Allows you to roll back the session to any previous message. If the agent hits a dead end, don&apos;t struggle — just &quot;rewind&quot; and try a different approach.</li>
        </ul>
      </section>

      <section>
        <h3>Customization: Status Line</h3>
        <p>
          The bottom line in the Claude Code terminal is not just text; it&apos;s a <strong>telemetry interface</strong>.
          You can create a `status-line.sh` file and output any data: current session cost,
          token usage, or even your test status.
        </p>
        <p>
          Claude Code passes a JSON with session data to your script via standard input (stdin),
          and you return the string you want to see on the screen. This can be implemented in
          Bash, Python, or Node.js.
        </p>
      </section>

      <section>
        <h3>Setting Hierarchy (Scopes)</h3>
        <p>Claude Code settings are inherited top-down:</p>
        <ol>
          <li><strong>Managed Settings:</strong> Organization-wide settings (IT/DevOps). Highest priority.</li>
          <li><strong>User Settings:</strong> Your global preferences.</li>
          <li><strong>Project Settings:</strong> Specific repository settings.</li>
          <li><strong>Local Settings:</strong> Your personal project settings that stay out of Git.</li>
        </ol>
      </section>
    </>
  );
}
