'use client';

import { useLang } from '@/hooks/useLang';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FaqItem {
  question: { ru: string; en: string };
  answer: { ru: string; en: string };
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: {
      ru: 'Как устроена нумерация комнат? Почему AC-103, а потом AC-201?',
      en: 'How does room numbering work? Why AC-103, then AC-201?',
    },
    answer: {
      ru: `Номер комнаты состоит из трёх частей:

**Префикс** — код пути обучения. Например, \`AC\` = Agent Coding.

**Первая цифра** — номер модуля (блока):
- \`1xx\` — Модуль A: Основы (Foundations)
- \`2xx\` — Модуль B: Циклы разработки и качество (Build Loops & Quality)
- \`3xx\` — Модуль C: Доставка и командная работа (Shipping & Team Ops)
- \`4xx\` — Модуль D: Продакшен и итоговый проект (Production & Capstone)

**Последние две цифры** — порядковый номер комнаты внутри модуля. Обычно \`01\`, \`02\`, \`03\`... Номер \`99\` зарезервирован для итогового проекта (Capstone).

Пример: **AC-203** = Agent Coding, Модуль B (2xx), третья комната (03) — «Agentic UI Delivery».

Эта система позаимствована из университетских курсов, где 100-level = вводные, 200-level = промежуточные, 300-level = продвинутые, 400-level = специализация и дипломный проект.`,
      en: `A room number has three parts:

**Prefix** — the learning path code. For example, \`AC\` = Agent Coding.

**First digit** — the module (block) number:
- \`1xx\` — Module A: Foundations
- \`2xx\` — Module B: Build Loops & Quality
- \`3xx\` — Module C: Shipping & Team Operations
- \`4xx\` — Module D: Production Reality & Capstone

**Last two digits** — the room's sequence number within that module. Typically \`01\`, \`02\`, \`03\`... The number \`99\` is reserved for capstone projects.

Example: **AC-203** = Agent Coding, Module B (2xx), third room (03) — "Agentic UI Delivery".

This system is inspired by university course numbering, where 100-level = introductory, 200-level = intermediate, 300-level = advanced, 400-level = specialization and capstone.`,
    },
  },
  {
    question: {
      ru: 'Что такое «путь обучения» (Learning Path)?',
      en: 'What is a Learning Path?',
    },
    answer: {
      ru: `Путь обучения — это структурированная последовательность комнат, объединённых общей темой. Каждый путь разбит на модули (A, B, C, D), которые идут от основ к продвинутым темам.

Сейчас на платформе доступны пути:
- **AI Foundations** — основы ИИ для начинающих
- **Ideas and Debates in AI** — история и дискуссии об ИИ
- **Practical ML** — практическое машинное обучение
- **Agentic Systems** — агентские системы
- **Agent Coding** — инженерная работа с coding-агентами

Вы можете проходить пути в любом порядке, но внутри каждого пути комнаты выстроены последовательно: каждая следующая опирается на знания из предыдущей.`,
      en: `A Learning Path is a structured sequence of rooms united by a common theme. Each path is divided into modules (A, B, C, D) that progress from fundamentals to advanced topics.

Currently available paths:
- **AI Foundations** — AI basics for beginners
- **Ideas and Debates in AI** — history and debates about AI
- **Practical ML** — hands-on machine learning
- **Agentic Systems** — autonomous agent architectures
- **Agent Coding** — engineering with coding agents

You can take paths in any order, but within each path rooms are sequential: each one builds on knowledge from the previous.`,
    },
  },
  {
    question: {
      ru: 'Что такое «комната» (Room)?',
      en: 'What is a Room?',
    },
    answer: {
      ru: `Комната — это один урок на платформе. Каждая комната состоит из двух частей:

1. **Теория** — интерактивный материал с визуализациями, примерами и терминами.
2. **Задания** — набор из 8–12 заданий разных типов: тесты, сортировка, категоризация, сценарии, менторские вопросы и другие.

Название «комната» вдохновлено форматом TryHackMe, где каждый урок — это отдельное пространство для исследования темы.`,
      en: `A Room is a single lesson on the platform. Each room has two parts:

1. **Theory** — interactive material with visualizations, examples, and key terms.
2. **Tasks** — a set of 8–12 tasks of various types: quizzes, sorting, categorization, scenarios, mentor questions, and more.

The name "room" is inspired by the TryHackMe format, where each lesson is a self-contained space for exploring a topic.`,
    },
  },
  {
    question: {
      ru: 'Что такое модули A, B, C, D?',
      en: 'What are modules A, B, C, D?',
    },
    answer: {
      ru: `Модули — это тематические блоки внутри каждого пути обучения. Они задают уровень сложности и фокус:

| Модуль | Уровень | Фокус |
|--------|---------|-------|
| **A** (1xx) | Основы | Ключевые концепции, терминология, ментальные модели |
| **B** (2xx) | Практика | Применение на практике, инструменты, рабочие циклы |
| **C** (3xx) | Масштаб | Командная работа, процессы, production-ready подходы |
| **D** (4xx) | Эксперт | Инциденты, оптимизация, итоговый проект |

Каждый модуль содержит 2–4 комнаты. Проходить их лучше последовательно.`,
      en: `Modules are thematic blocks within each learning path. They set the difficulty level and focus:

| Module | Level | Focus |
|--------|-------|-------|
| **A** (1xx) | Foundations | Core concepts, terminology, mental models |
| **B** (2xx) | Practice | Hands-on application, tools, build loops |
| **C** (3xx) | Scale | Teamwork, processes, production-ready approaches |
| **D** (4xx) | Expert | Incidents, optimization, capstone project |

Each module contains 2–4 rooms. Best completed in order.`,
    },
  },
  {
    question: {
      ru: 'Нужно ли проходить комнаты по порядку?',
      en: 'Do I have to complete rooms in order?',
    },
    answer: {
      ru: `Рекомендуется, но не обязательно. Каждая комната внутри пути опирается на знания из предыдущих, поэтому последовательное прохождение даст лучший результат. Однако, если вы уже знакомы с темой, можете перейти к любой открытой комнате.`,
      en: `Recommended but not required. Each room within a path builds on knowledge from previous rooms, so sequential completion gives the best results. However, if you're already familiar with a topic, you can jump to any unlocked room.`,
    },
  },
  {
    question: {
      ru: 'Какие типы заданий есть на платформе?',
      en: 'What task types are available?',
    },
    answer: {
      ru: `На платформе используется несколько типов интерактивных заданий:

- **Multiple Choice** — выбор одного правильного ответа
- **Multiple Select** — выбор нескольких правильных ответов
- **Input** — ввод ответа вручную (ключевое слово или короткая фраза)
- **Sorting** — расположение элементов в правильном порядке
- **Categorize** — распределение элементов по категориям
- **Timeline** — расстановка событий в хронологическом порядке
- **Scenario** — анализ ситуации и выбор лучшего решения
- **Mentor** — открытый вопрос, оцениваемый AI-ментором

Разнообразие форматов помогает проверять понимание с разных сторон, а не просто запоминание фактов.`,
      en: `The platform uses several interactive task types:

- **Multiple Choice** — select one correct answer
- **Multiple Select** — select multiple correct answers
- **Input** — type an answer (keyword or short phrase)
- **Sorting** — arrange items in the correct order
- **Categorize** — sort items into categories
- **Timeline** — place events in chronological order
- **Scenario** — analyze a situation and choose the best solution
- **Mentor** — open-ended question evaluated by an AI mentor

The variety of formats helps test understanding from multiple angles, not just fact recall.`,
    },
  },
];

function FaqAccordion({ item, lang }: { item: FaqItem; lang: 'ru' | 'en' }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border-subtle rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="text-sm font-medium text-neutral-200">
          {item.question[lang]}
        </span>
        <ChevronDown
          size={16}
          className={`text-neutral-500 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0">
          <div className="text-sm text-neutral-400 leading-relaxed whitespace-pre-line prose prose-invert prose-sm max-w-none
            [&_strong]:text-neutral-200 [&_code]:text-emerald-300 [&_code]:bg-emerald-500/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded
            [&_table]:border-collapse [&_th]:text-left [&_th]:text-neutral-300 [&_th]:pb-2 [&_th]:pr-6 [&_td]:pr-6 [&_td]:py-1 [&_td]:text-neutral-400
            [&_h2]:text-neutral-200 [&_h2]:text-base [&_h2]:mt-0">
            <FormattedMarkdown text={item.answer[lang]} />
          </div>
        </div>
      )}
    </div>
  );
}

function FormattedMarkdown({ text }: { text: string }) {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let tableLines: string[] = [];
  let inTable = false;

  const processInline = (line: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    const regex = /(\*\*.*?\*\*|`[^`]+`)/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        parts.push(line.slice(lastIndex, match.index));
      }
      const token = match[0];
      if (token.startsWith('**')) {
        parts.push(<strong key={match.index}>{token.slice(2, -2)}</strong>);
      } else if (token.startsWith('`')) {
        parts.push(<code key={match.index}>{token.slice(1, -1)}</code>);
      }
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < line.length) {
      parts.push(line.slice(lastIndex));
    }
    return parts;
  };

  const flushTable = () => {
    if (tableLines.length < 2) return;
    const headerLine = tableLines[0];
    const dataLines = tableLines.slice(2); // skip separator
    const headers = headerLine.split('|').map(h => h.trim()).filter(Boolean);
    elements.push(
      <table key={`table-${elements.length}`} className="my-3">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{processInline(h)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataLines.map((row, ri) => {
            const cells = row.split('|').map(c => c.trim()).filter(Boolean);
            return (
              <tr key={ri}>
                {cells.map((c, ci) => (
                  <td key={ci}>{processInline(c)}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
    tableLines = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('|')) {
      inTable = true;
      tableLines.push(line);
      continue;
    }

    if (inTable) {
      inTable = false;
      flushTable();
    }

    if (line.trim() === '') {
      elements.push(<br key={`br-${i}`} />);
    } else if (line.startsWith('- ')) {
      elements.push(
        <div key={i} className="flex gap-2 ml-1">
          <span className="text-emerald-400/60 shrink-0">-</span>
          <span>{processInline(line.slice(2))}</span>
        </div>
      );
    } else {
      elements.push(<p key={i} className="my-0">{processInline(line)}</p>);
    }
  }

  if (inTable) flushTable();

  return <>{elements}</>;
}

export default function FaqPage() {
  const lang = useLang() as 'ru' | 'en';

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-10">
        <h1 className="text-2xl font-semibold mb-3 text-neutral-200">
          {lang === 'ru' ? 'Частые вопросы' : 'FAQ'}
        </h1>
        <p className="text-neutral-500 text-sm max-w-2xl leading-relaxed">
          {lang === 'ru'
            ? 'Как устроена платформа, что такое комнаты, пути и модули.'
            : 'How the platform works: rooms, paths, and modules explained.'}
        </p>
      </div>

      <div className="space-y-2">
        {FAQ_ITEMS.map((item, i) => (
          <FaqAccordion key={i} item={item} lang={lang} />
        ))}
      </div>
    </div>
  );
}
