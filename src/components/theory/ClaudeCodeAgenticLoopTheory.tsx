import React from 'react';
import Terminal from '@/components/Terminal';

export default function ClaudeCodeAgenticLoopTheory({ lang }: { lang: string }) {
  if (lang === 'ru') {
    return (
      <>
        <section>
          <h2>Внутри &quot;мозга&quot; агента</h2>
          <p>
            Многие путают ИИ-агента с обычным чат-ботом. Если чат-бот — это <strong>собеседник</strong>, то 
            Claude Code — это <strong>сотрудник</strong>. Главное различие кроется в его способности выполнять 
            автономный цикл действий без вашего участия на каждом шаге.
          </p>
        </section>

        <section className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-xl my-8">
          <h3 className="text-emerald-500 mt-0">Три фазы цикла: Сбор, Действие, Проверка</h3>
          <p>Агент работает итерациями. Каждая итерация (loop) состоит из трех этапов:</p>
          <ol className="space-y-4">
            <li>
              <strong>1. Сбор контекста (Gather Context):</strong> Агент изучает среду. Он читает файлы, 
              ищет по кодовой базе, проверяет структуру проекта. Это его &quot;глаза&quot;.
            </li>
            <li>
              <strong>2. Действие (Take Action):</strong> На основе собранных данных агент принимает решение. 
              Он может отредактировать файл, создать новую директорию или вызвать внешнюю команду. Это его &quot;руки&quot;.
            </li>
            <li>
              <strong>3. Верификация (Verify Results):</strong> Самый важный этап. Агент проверяет, привело ли
              его действие к нужному результату. Он запускает тесты (`npm test`, `pytest`) или проверяет логи.
            </li>
          </ol>
          <Terminal
            title="claude · цикл"
            lines={[
              { cmd: 'почини баг в пагинации', prompt: '>' },
              { out: '● сбор ▸ rg "paginate" src/  →  utils/page.ts:12' },
              { out: '● действие ▸ edit utils/page.ts  +4 -1' },
              { out: '● проверка ▸ npm test' },
              { out: '✓ 128 passed', tone: 'ok' },
            ]}
          />
        </section>

        <section>
          <h3>Инструменты как интерфейс</h3>
          <p>
            LLM сама по себе заперта в &quot;цифровой коробке&quot; и может только генерировать текст. Чтобы взаимодействовать 
            с вашим компьютером, Claude Code использует <strong>инструменты (tools)</strong> — специальные функции, 
            которые он умеет вызывать.
          </p>
          <p>
            Когда агент говорит: &quot;Я сейчас исправлю этот баг&quot;, на самом деле он генерирует команду для вызова инструмента 
            `edit_file` с конкретными параметрами. Это делает его работу детерминированной и надежной.
          </p>
        </section>

        <section>
          <h3>Память и сжатие (Auto-compacting)</h3>
          <p>
            У агента есть &quot;рабочая память&quot; — контекстное окно (обычно 200,000 токенов). В длинных сессиях память 
            заполняется. Чтобы не &quot;забыть&quot; задачу, Claude Code использует <strong>auto-compact buffer (22%)</strong>. 
            При приближении к лимиту он автоматически суммаризирует историю диалога, оставляя только самое важное.
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <section>
        <h2>Inside the Agent&apos;s &quot;Brain&quot;</h2>
        <p>
          Many confuse an AI agent with a regular chatbot. While a chatbot is a <strong>conversationalist</strong>, 
          Claude Code is an <strong>employee</strong>. The main difference lies in its ability to perform 
          an autonomous loop of actions without your intervention at every step.
        </p>
      </section>

      <section className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-xl my-8">
        <h3 className="text-emerald-500 mt-0">Three Phases of the Loop: Gather, Act, Verify</h3>
        <p>The agent works in iterations. Each iteration (loop) consists of three stages:</p>
        <ol className="space-y-4">
          <li>
            <strong>1. Gather Context:</strong> The agent studies the environment. It reads files, 
            searches the codebase, and checks the project structure. These are its &quot;eyes.&quot;
          </li>
          <li>
            <strong>2. Take Action:</strong> Based on the gathered data, the agent makes a decision. 
            It might edit a file, create a new directory, or run an external command. These are its &quot;hands.&quot;
          </li>
          <li>
            <strong>3. Verify Results:</strong> The most critical stage. The agent checks if
            its action led to the desired outcome. It runs tests (`npm test`, `pytest`) or checks logs.
          </li>
        </ol>
        <Terminal
          title="claude · loop"
          lines={[
            { cmd: 'fix the pagination bug', prompt: '>' },
            { out: '● gather ▸ rg "paginate" src/  →  utils/page.ts:12' },
            { out: '● act ▸ edit utils/page.ts  +4 -1' },
            { out: '● verify ▸ npm test' },
            { out: '✓ 128 passed', tone: 'ok' },
          ]}
        />
      </section>

      <section>
        <h3>Tools as an Interface</h3>
        <p>
          An LLM by itself is locked in a &quot;digital box&quot; and can only generate text. To interact 
          with your computer, Claude Code uses <strong>tools</strong> — special functions 
          it knows how to invoke.
        </p>
        <p>
          When the agent says, &quot;I&apos;ll fix this bug now,&quot; it is actually generating a command to call the 
          `edit_file` tool with specific parameters. This makes its work deterministic and reliable.
        </p>
      </section>

      <section>
        <h3>Memory and Auto-compacting</h3>
        <p>
          The agent has &quot;working memory&quot; — the context window (usually 200,000 tokens). In long sessions, this memory 
          fills up. To avoid &quot;forgetting&quot; the task, Claude Code uses an <strong>auto-compact buffer (22%)</strong>. 
          As it approaches the limit, it automatically summarizes the dialogue history, keeping only what matters most.
        </p>
      </section>
    </>
  );
}
