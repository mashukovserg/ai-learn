"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type Lang = 'en' | 'ru';
type TrackId = 'ic' | 'research' | 'management';
type ChipTone = 'amber' | 'mint' | 'violet' | 'stone';

interface LocalizedText {
  en: string;
  ru: string;
}

interface StageChip {
  label: LocalizedText;
  tone: ChipTone;
}

interface Stage {
  id: string;
  years: LocalizedText;
  title: LocalizedText;
  level: LocalizedText;
  summary: LocalizedText;
  details: LocalizedText[];
  chips: StageChip[];
}

interface BranchCard {
  title: LocalizedText;
  body: LocalizedText;
  badge: StageChip;
}

interface DecisionCard {
  title: LocalizedText;
  body: LocalizedText;
}

interface Roadmap {
  title: LocalizedText;
  subtitle: LocalizedText;
  stages: Stage[];
  branchesTitle: LocalizedText;
  branches: BranchCard[];
}

const CHIP_STYLES: Record<ChipTone, string> = {
  amber: 'bg-amber-100 text-amber-900 border border-amber-200/80',
  mint: 'bg-emerald-100 text-emerald-950 border border-emerald-200/80',
  violet: 'bg-violet-100 text-violet-900 border border-violet-200/80',
  stone: 'bg-stone-100 text-stone-700 border border-stone-200/80',
};

const TRACK_LABELS: Record<TrackId, LocalizedText> = {
  ic: { en: 'IC Track', ru: 'IC-трек' },
  research: { en: 'Research Track', ru: 'Research-трек' },
  management: { en: 'Management Track', ru: 'Management-трек' },
};

const ROADMAPS: Record<TrackId, Roadmap> = {
  ic: {
    title: {
      en: 'The main IC path is about owning real systems, not collecting isolated model demos.',
      ru: 'Главная IC-траектория строится вокруг ответственности за реальные системы, а не вокруг набора разрозненных демо моделей.'
    },
    subtitle: {
      en: 'Progress usually moves from implementation, to production ownership, to technical leverage across a wider surface area.',
      ru: 'Рост обычно идет от реализации, к владению продакшн-контуром, а затем к техническому влиянию на более широкую часть продукта и платформы.'
    },
    stages: [
      {
        id: 'junior-ai-builder',
        years: { en: '0-2 yrs', ru: '0-2 года' },
        title: { en: 'Junior AI Builder', ru: 'Junior AI Builder' },
        level: { en: 'L3-L4 · foundations', ru: 'L3-L4 · база' },
        summary: {
          en: 'You learn Python, data handling, prompting discipline, evaluation basics, and how to ship narrow features with guidance.',
          ru: 'На этом этапе вы осваиваете Python, работу с данными, дисциплину промптинга, базовые eval-практики и выпуск узких фич под руководством.'
        },
        details: [
          {
            en: 'The goal is not to become a researcher overnight. The goal is to become reliable at turning an ambiguous request into a small working artifact: a notebook, a retrieval workflow, a classifier, or a simple automation with measurable output.',
            ru: 'Цель на этом шаге не в том, чтобы сразу стать исследователем. Цель в том, чтобы надежно превращать расплывчатый запрос в небольшой рабочий артефакт: ноутбук, retrieval-воркфлоу, классификатор или простую автоматизацию с измеримым результатом.'
          },
          {
            en: 'Strong signals here are consistency and learning speed. Teams look for people who can read logs, inspect failures, compare prompts or models, and improve a system without inventing unnecessary complexity.',
            ru: 'Сильный сигнал на этом уровне - это последовательность и скорость обучения. Команды ищут людей, которые умеют читать логи, разбирать сбои, сравнивать промпты или модели и улучшать систему без лишней сложности.'
          }
        ],
        chips: [
          { label: { en: 'Python fluency', ru: 'Python fluency' }, tone: 'amber' },
          { label: { en: 'Data cleaning', ru: 'Подготовка данных' }, tone: 'stone' },
          { label: { en: 'Prompt iteration', ru: 'Итерация промптов' }, tone: 'amber' },
          { label: { en: 'Basic evals', ru: 'Базовые evals' }, tone: 'mint' },
        ]
      },
      {
        id: 'ai-engineer',
        years: { en: '2-4 yrs', ru: '2-4 года' },
        title: { en: 'AI Engineer', ru: 'AI Engineer' },
        level: { en: 'L4-L5 · product delivery', ru: 'L4-L5 · выпуск фич' },
        summary: {
          en: 'You move from prototypes to production: serving, data contracts, monitoring, regression control, and user-facing reliability.',
          ru: 'Фокус смещается от прототипов к продакшну: serving, контракты данных, мониторинг, контроль регрессий и пользовательская надежность.'
        },
        details: [
          {
            en: 'This is where many people discover whether they enjoy product-facing engineering. The work becomes less about one clever prompt and more about keeping an end-to-end system stable when latency, bad inputs, and changing business requirements show up.',
            ru: 'Именно здесь многие понимают, нравится ли им продуктовая инженерия. Работа становится меньше про один удачный промпт и больше про поддержку целостной системы, когда появляются задержки, плохие входные данные и меняющиеся требования бизнеса.'
          },
          {
            en: 'A strong AI engineer can explain tradeoffs in plain language: why retrieval quality matters, when a cheaper model is enough, when you need a fallback path, and how to measure if a release actually improved outcomes.',
            ru: 'Сильный AI Engineer умеет объяснять компромиссы простым языком: почему важно качество retrieval, когда достаточно более дешевой модели, когда нужен fallback-путь и как измерить, что релиз действительно улучшил результат.'
          }
        ],
        chips: [
          { label: { en: 'Model serving', ru: 'Model serving' }, tone: 'amber' },
          { label: { en: 'Observability', ru: 'Observability' }, tone: 'stone' },
          { label: { en: 'Regression control', ru: 'Контроль регрессий' }, tone: 'amber' },
          { label: { en: 'User outcomes', ru: 'Пользовательский результат' }, tone: 'mint' },
        ]
      },
      {
        id: 'senior-ai-engineer',
        years: { en: '4-6 yrs', ru: '4-6 лет' },
        title: { en: 'Senior AI Engineer', ru: 'Senior AI Engineer' },
        level: { en: 'L5-L6 · system ownership', ru: 'L5-L6 · владение системой' },
        summary: {
          en: 'You own architecture choices, technical review, failure modes, and the skill bar for the people building nearby systems.',
          ru: 'На этом уровне вы владеете архитектурными решениями, техническим ревью, картой отказов и планкой качества для людей вокруг системы.'
        },
        details: [
          {
            en: 'Senior scope means ambiguity. You are often the person deciding whether the bottleneck is data quality, evaluation design, infrastructure, or product framing. Your impact grows because your judgment prevents expensive wrong turns.',
            ru: 'Senior-уровень означает работу с неопределенностью. Часто именно вы решаете, где находится узкое место: в качестве данных, дизайне evals, инфраструктуре или продуктовой постановке. Влияние растет потому, что ваше суждение экономит команде дорогие ошибочные шаги.'
          },
          {
            en: 'This is also the branching point. Some people double down on deep technical leadership and move toward staff or platform roles. Others discover they care more about research novelty, roadmap leverage, or people leadership.',
            ru: 'Это и есть точка развилки. Кто-то усиливает техническое лидерство и идет в staff или platform-роли. Кто-то понимает, что ему ближе исследовательская новизна, влияние на roadmap или руководство людьми.'
          }
        ],
        chips: [
          { label: { en: 'Architecture judgment', ru: 'Архитектурное суждение' }, tone: 'amber' },
          { label: { en: 'Code review culture', ru: 'Культура ревью' }, tone: 'stone' },
          { label: { en: 'Failure analysis', ru: 'Разбор отказов' }, tone: 'amber' },
          { label: { en: 'Technical mentoring', ru: 'Техническое менторство' }, tone: 'mint' },
        ]
      },
      {
        id: 'staff-principal-ai-engineer',
        years: { en: '6+ yrs', ru: '6+ лет' },
        title: { en: 'Staff / Principal AI Engineer', ru: 'Staff / Principal AI Engineer' },
        level: { en: 'L6+ · multi-team leverage', ru: 'L6+ · влияние на несколько команд' },
        summary: {
          en: 'You shape standards, platform capabilities, and cross-team decision quality. The role is still technical, but the blast radius is wider.',
          ru: 'Вы формируете стандарты, платформенные возможности и качество решений между командами. Роль остается технической, но радиус влияния становится шире.'
        },
        details: [
          {
            en: 'At this level the question is rarely "can you build it?" The question is "which systems should multiple teams share, which abstractions reduce repeated mistakes, and what technical direction helps the organization move faster next year?"',
            ru: 'На этом уровне вопрос редко звучит как "можете ли вы это собрать?". Гораздо чаще вопрос такой: "какие системы должны быть общими для нескольких команд, какие абстракции уменьшают повторяющиеся ошибки и какое техническое направление ускорит организацию в следующем году?"'
          },
          {
            en: 'People often remain individual contributors here for a long time. The IC ladder is not a waiting room before management. It is a full career if you enjoy system design, technical influence, and building leverage through architecture.',
            ru: 'Многие остаются individual contributor на этом уровне надолго. IC-лестница не является залом ожидания перед management. Это полноценная карьера, если вам нравится системный дизайн, техническое влияние и создание рычага через архитектуру.'
          }
        ],
        chips: [
          { label: { en: 'System design', ru: 'Системный дизайн' }, tone: 'mint' },
          { label: { en: 'Platform leverage', ru: 'Платформенный рычаг' }, tone: 'amber' },
          { label: { en: 'Standards', ru: 'Стандарты' }, tone: 'stone' },
          { label: { en: 'Cross-team direction', ru: 'Межкомандное направление' }, tone: 'violet' },
        ]
      }
    ],
    branchesTitle: {
      en: 'Common branch points after senior IC level',
      ru: 'Типичные развилки после senior IC-уровня'
    },
    branches: [
      {
        title: { en: 'Research Scientist', ru: 'Research Scientist' },
        body: {
          en: 'Best fit for people who want deeper work on methods, experiments, papers, or original model ideas.',
          ru: 'Подходит тем, кто хочет идти глубже в методы, эксперименты, публикации или оригинальные идеи моделей.'
        },
        badge: { label: { en: 'Novelty focus', ru: 'Фокус на новизне' }, tone: 'violet' }
      },
      {
        title: { en: 'ML Platform Engineer', ru: 'ML Platform Engineer' },
        body: {
          en: 'Fits engineers who prefer tooling, training infrastructure, inference reliability, and reusable platform layers.',
          ru: 'Подходит инженерам, которым ближе инструменты, training-инфраструктура, надежность inference и переиспользуемые платформенные слои.'
        },
        badge: { label: { en: 'Systems focus', ru: 'Фокус на системах' }, tone: 'mint' }
      },
      {
        title: { en: 'AI Product Manager', ru: 'AI Product Manager' },
        body: {
          en: 'A strong branch for people who enjoy translating model capability into roadmap, metrics, and user value.',
          ru: 'Сильная ветка для тех, кому нравится переводить возможности моделей в roadmap, метрики и пользовательскую ценность.'
        },
        badge: { label: { en: 'Hybrid role', ru: 'Гибридная роль' }, tone: 'amber' }
      },
      {
        title: { en: 'Engineering Manager', ru: 'Engineering Manager' },
        body: {
          en: 'The right move if you gain energy from hiring, coaching, prioritization, and raising the bar through a team.',
          ru: 'Подходит тем, кто получает энергию от найма, коучинга, приоритизации и роста планки качества через команду.'
        },
        badge: { label: { en: 'People leverage', ru: 'Влияние через людей' }, tone: 'stone' }
      }
    ]
  },
  research: {
    title: {
      en: 'Research careers reward depth, patience, and a real appetite for unanswered questions.',
      ru: 'Research-карьера вознаграждает глубину, терпение и реальный интерес к вопросам без готового ответа.'
    },
    subtitle: {
      en: 'The further you move, the more your value comes from experimental rigor, taste in problem selection, and clarity about what is genuinely new.',
      ru: 'Чем дальше вы идете, тем больше ценность создают экспериментальная строгость, вкус к выбору задач и ясность в том, что действительно является новым.'
    },
    stages: [
      {
        id: 'research-engineer',
        years: { en: '0-2 yrs', ru: '0-2 года' },
        title: { en: 'Research Engineer', ru: 'Research Engineer' },
        level: { en: 'entry level · implementation depth', ru: 'entry level · глубина реализации' },
        summary: {
          en: 'You support experiments, reproduce papers, and learn how research infrastructure and scientific discipline interact.',
          ru: 'Вы поддерживаете эксперименты, воспроизводите статьи и учитесь тому, как исследовательская инфраструктура сочетается с научной дисциплиной.'
        },
        details: [
          {
            en: 'Many people enter research through engineering first. That route is healthy because it teaches rigor. If an experiment cannot be reproduced, compared fairly, or measured clearly, the research story is weaker than it looks in a slide deck.',
            ru: 'Многие приходят в research через инженерию, и это полезный путь, потому что он учит строгости. Если эксперимент нельзя воспроизвести, честно сравнить или ясно измерить, исследовательская история слабее, чем кажется на красивом слайде.'
          },
          {
            en: 'Early signals are careful baselines, well-kept experiment logs, and the ability to tell whether an improvement is substantial or just noise from setup differences.',
            ru: 'Ранние сильные сигналы - аккуратные базовые линии, хорошие журналы экспериментов и умение отличать реальное улучшение от шума, вызванного различиями в setup.'
          }
        ],
        chips: [
          { label: { en: 'Paper reproduction', ru: 'Воспроизведение статей' }, tone: 'violet' },
          { label: { en: 'Experiment logs', ru: 'Журналы экспериментов' }, tone: 'stone' },
          { label: { en: 'Benchmark discipline', ru: 'Дисциплина бенчмарков' }, tone: 'amber' },
          { label: { en: 'Model debugging', ru: 'Отладка моделей' }, tone: 'mint' },
        ]
      },
      {
        id: 'applied-scientist',
        years: { en: '2-4 yrs', ru: '2-4 года' },
        title: { en: 'Applied Scientist', ru: 'Applied Scientist' },
        level: { en: 'mid level · high-value experiments', ru: 'mid level · ценные эксперименты' },
        summary: {
          en: 'You work where novelty meets product usefulness, turning experiments into practical gains for ranking, retrieval, recommendation, or multimodal systems.',
          ru: 'Вы работаете там, где новизна встречается с продуктовой пользой, превращая эксперименты в практическое улучшение ranking, retrieval, recommendation или multimodal-систем.'
        },
        details: [
          {
            en: 'Applied science is a strong fit for people who like evidence but still want visible user impact. The best work here improves a metric that matters and survives contact with real deployment constraints.',
            ru: 'Applied science хорошо подходит тем, кто любит доказательность, но при этом хочет видеть заметное пользовательское влияние. Лучшие результаты на этом уровне улучшают важную метрику и выдерживают столкновение с ограничениями реального продакшна.'
          },
          {
            en: 'The role often acts as a bridge between pure research and shipping teams. That means taste matters: not every elegant idea is worth operational cost, and not every fast product request deserves research time.',
            ru: 'Эта роль часто выступает мостом между чистым research и командами доставки. Поэтому здесь важен вкус: не каждая красивая идея оправдывает операционную цену, и не каждый быстрый продуктовый запрос стоит исследовательского времени.'
          }
        ],
        chips: [
          { label: { en: 'A/B testing', ru: 'A/B testing' }, tone: 'amber' },
          { label: { en: 'Retrieval quality', ru: 'Качество retrieval' }, tone: 'mint' },
          { label: { en: 'Model adaptation', ru: 'Адаптация моделей' }, tone: 'violet' },
          { label: { en: 'Metric design', ru: 'Дизайн метрик' }, tone: 'stone' },
        ]
      },
      {
        id: 'research-scientist',
        years: { en: '4-7 yrs', ru: '4-7 лет' },
        title: { en: 'Research Scientist', ru: 'Research Scientist' },
        level: { en: 'senior · novelty and direction', ru: 'senior · новизна и направление' },
        summary: {
          en: 'You own deeper questions, shape experiment agendas, and decide which hypotheses are worth expensive cycles.',
          ru: 'Вы владеете более глубокими вопросами, формируете программу экспериментов и решаете, какие гипотезы стоят дорогих циклов вычислений.'
        },
        details: [
          {
            en: 'This level requires more than reading papers. It requires forming a point of view. You need to identify a meaningful gap, design a credible path to test it, and explain why a result changes what the team should believe or build next.',
            ru: 'Этот уровень требует большего, чем чтение статей. Он требует собственной позиции. Нужно увидеть значимый пробел, спроектировать убедительный путь проверки и объяснить, почему результат меняет то, во что команда должна верить или что она должна строить дальше.'
          },
          {
            en: 'For many people, a graduate degree helps here, but the deeper signal is sustained research judgment. Can you design experiments that teach the team something important, even when the answer is negative?',
            ru: 'Для многих людей здесь помогает graduate degree, но более глубокий сигнал - устойчивое исследовательское суждение. Умеете ли вы строить такие эксперименты, которые учат команду чему-то важному, даже если ответ оказывается отрицательным?'
          }
        ],
        chips: [
          { label: { en: 'Hypothesis design', ru: 'Дизайн гипотез' }, tone: 'violet' },
          { label: { en: 'Publication quality', ru: 'Качество публикаций' }, tone: 'amber' },
          { label: { en: 'Novel architectures', ru: 'Новые архитектуры' }, tone: 'mint' },
          { label: { en: 'Scientific writing', ru: 'Научное письмо' }, tone: 'stone' },
        ]
      },
      {
        id: 'research-lead',
        years: { en: '7+ yrs', ru: '7+ лет' },
        title: { en: 'Research Lead / Lab Lead', ru: 'Research Lead / Lab Lead' },
        level: { en: 'staff-equivalent · agenda setting', ru: 'staff-equivalent · формирование agenda' },
        summary: {
          en: 'You define a program of work, allocate attention across multiple bets, and translate research direction into an institutional advantage.',
          ru: 'Вы определяете программу работы, распределяете внимание между несколькими ставками и переводите исследовательское направление в институциональное преимущество.'
        },
        details: [
          {
            en: 'The role combines senior judgment with selective leadership. You need enough technical depth to challenge weak ideas and enough organizational clarity to protect the team from random, fashionable distractions.',
            ru: 'Роль объединяет senior-суждение и избирательное лидерство. Нужна достаточная техническая глубина, чтобы оспаривать слабые идеи, и организационная ясность, чтобы защищать команду от случайных и модных отвлечений.'
          },
          {
            en: 'Strong research leads are careful with focus. They know that a lab loses edge when it chases every trend, and they build a culture where replication, writing, and evidence are taken as seriously as originality.',
            ru: 'Сильные research leads очень внимательны к фокусу. Они понимают, что лаборатория теряет остроту, когда гонится за каждым трендом, и строят культуру, где воспроизводимость, письмо и доказательность ценятся так же высоко, как оригинальность.'
          }
        ],
        chips: [
          { label: { en: 'Research agenda', ru: 'Research agenda' }, tone: 'violet' },
          { label: { en: 'Talent density', ru: 'Плотность таланта' }, tone: 'stone' },
          { label: { en: 'Compute prioritization', ru: 'Приоритизация compute' }, tone: 'amber' },
          { label: { en: 'Institutional focus', ru: 'Институциональный фокус' }, tone: 'mint' },
        ]
      }
    ],
    branchesTitle: {
      en: 'Typical branches around the research path',
      ru: 'Типичные развилки вокруг research-траектории'
    },
    branches: [
      {
        title: { en: 'Applied Scientist', ru: 'Applied Scientist' },
        body: {
          en: 'Closer to deployed systems and measurable business impact, while still keeping experimental depth.',
          ru: 'Ближе к внедренным системам и измеримому бизнес-эффекту, при сохранении экспериментальной глубины.'
        },
        badge: { label: { en: 'Product adjacency', ru: 'Близость к продукту' }, tone: 'amber' }
      },
      {
        title: { en: 'Research Engineer', ru: 'Research Engineer' },
        body: {
          en: 'Best for people who love scaling experiments, training tooling, and implementation quality.',
          ru: 'Подходит тем, кто любит масштабирование экспериментов, training-tooling и качество реализации.'
        },
        badge: { label: { en: 'Implementation depth', ru: 'Глубина реализации' }, tone: 'mint' }
      },
      {
        title: { en: 'Open-source maintainer', ru: 'Open-source maintainer' },
        body: {
          en: 'A path where public technical artifacts, community trust, and reusable tooling become the main output.',
          ru: 'Путь, где главным результатом становятся публичные технические артефакты, доверие сообщества и переиспользуемые инструменты.'
        },
        badge: { label: { en: 'Public artifacts', ru: 'Публичные артефакты' }, tone: 'stone' }
      },
      {
        title: { en: 'Research Manager', ru: 'Research Manager' },
        body: {
          en: 'For scientists who want to multiply impact through hiring, focus management, and lab operating rhythm.',
          ru: 'Для scientists, которые хотят увеличивать влияние через найм, управление фокусом и ритм работы лаборатории.'
        },
        badge: { label: { en: 'Lab leadership', ru: 'Лидерство лаборатории' }, tone: 'violet' }
      }
    ]
  },
  management: {
    title: {
      en: 'Management becomes a strong path when your best work happens through coordination, prioritization, and raising the bar through other people.',
      ru: 'Management становится сильной траекторией тогда, когда ваш лучший результат появляется через координацию, приоритизацию и рост планки качества через других людей.'
    },
    subtitle: {
      en: 'The role shifts from direct technical output to building the environment where technical work can compound.',
      ru: 'Фокус смещается от прямого технического результата к созданию среды, в которой техническая работа может накапливать эффект.'
    },
    stages: [
      {
        id: 'tech-lead',
        years: { en: '4-6 yrs', ru: '4-6 лет' },
        title: { en: 'Tech Lead', ru: 'Tech Lead' },
        level: { en: 'bridge role · hands-on plus coordination', ru: 'bridge role · hands-on плюс координация' },
        summary: {
          en: 'You still build, but you also coordinate execution, review technical choices, and keep the team moving through ambiguity.',
          ru: 'Вы по-прежнему строите руками, но уже координируете исполнение, ревьюите технические решения и проводите команду через неопределенность.'
        },
        details: [
          {
            en: 'Tech lead is often the first serious management-adjacent test. You need enough technical credibility to guide architecture and enough communication clarity to unblock work before confusion turns into delay.',
            ru: 'Tech Lead часто становится первой серьезной проверкой на management-смежную работу. Нужна достаточная техническая репутация, чтобы направлять архитектуру, и достаточная ясность коммуникации, чтобы снимать блокеры до того, как путаница превратится в задержку.'
          },
          {
            en: 'People sometimes assume this role is only a title upgrade from senior engineer. In practice it requires a different habit: measuring success by how cleanly the team executes, not by how much code you personally wrote that week.',
            ru: 'Иногда кажется, что эта роль - просто титульный апгрейд senior engineer. На практике она требует другой привычки: измерять успех тем, насколько чисто отработала команда, а не тем, сколько строк кода лично вы написали за неделю.'
          }
        ],
        chips: [
          { label: { en: 'Execution clarity', ru: 'Ясность исполнения' }, tone: 'amber' },
          { label: { en: 'Technical review', ru: 'Техническое ревью' }, tone: 'stone' },
          { label: { en: 'Project coordination', ru: 'Координация проекта' }, tone: 'amber' },
          { label: { en: 'System design', ru: 'Системный дизайн' }, tone: 'mint' },
        ]
      },
      {
        id: 'engineering-manager',
        years: { en: '6-9 yrs', ru: '6-9 лет' },
        title: { en: 'Engineering Manager', ru: 'Engineering Manager' },
        level: { en: 'M1-M2 · team leverage', ru: 'M1-M2 · влияние через команду' },
        summary: {
          en: 'You focus on hiring, feedback, planning, team health, and making sure the technical bar remains high over time.',
          ru: 'Фокус переходит на найм, обратную связь, планирование, здоровье команды и сохранение высокой технической планки на дистанции.'
        },
        details: [
          {
            en: 'Good engineering managers in AI are not removed from the technical landscape. They understand what makes evaluation credible, what kinds of failure modes deserve escalation, and when a team is avoiding a hard architectural decision.',
            ru: 'Хорошие engineering managers в AI не оторваны от технического ландшафта. Они понимают, что делает eval достоверным, какие типы отказов заслуживают эскалации и в какой момент команда уходит от тяжелого архитектурного решения.'
          },
          {
            en: 'The management ladder rewards judgment, not control. The strongest signal is whether people around you get sharper, more focused, and more reliable because of the operating environment you create.',
            ru: 'Management-лестница вознаграждает суждение, а не контроль. Самый сильный сигнал - становятся ли люди рядом с вами точнее, сфокусированнее и надежнее благодаря той операционной среде, которую вы создаете.'
          }
        ],
        chips: [
          { label: { en: 'Hiring', ru: 'Найм' }, tone: 'amber' },
          { label: { en: 'Performance reviews', ru: 'Performance reviews' }, tone: 'stone' },
          { label: { en: 'Roadmap planning', ru: 'Планирование roadmap' }, tone: 'amber' },
          { label: { en: 'Technical bar', ru: 'Техническая планка' }, tone: 'mint' },
        ]
      },
      {
        id: 'director-vp-ai',
        years: { en: '9+ yrs', ru: '9+ лет' },
        title: { en: 'Director / VP of AI', ru: 'Director / VP of AI' },
        level: { en: 'M3+ · org direction', ru: 'M3+ · направление организации' },
        summary: {
          en: 'You connect org design, headcount, platform bets, and AI strategy into one operating direction.',
          ru: 'Вы связываете дизайн организации, headcount, платформенные ставки и AI-стратегию в одно операционное направление.'
        },
        details: [
          {
            en: 'This is no longer a role about solving the hardest notebook yourself. It is about seeing where the organization must concentrate talent, where platform investment has multiplicative value, and where technical ambition must be matched with delivery discipline.',
            ru: 'Это уже не роль про решение самого сложного ноутбука своими руками. Она про понимание того, где организации нужно концентрировать талант, где инвестиции в платформу дают мультипликативный эффект и где техническая амбиция должна быть уравновешена дисциплиной доставки.'
          },
          {
            en: 'Strong AI leaders are concrete. They can explain what the team will build, what evidence justifies the investment, what risks matter, and how capabilities translate into a business advantage over several planning cycles.',
            ru: 'Сильные AI-лидеры конкретны. Они умеют объяснить, что команда будет строить, какие доказательства оправдывают инвестицию, какие риски важны и как возможности превращаются в бизнес-преимущество на горизонте нескольких циклов планирования.'
          }
        ],
        chips: [
          { label: { en: 'Org design', ru: 'Дизайн организации' }, tone: 'amber' },
          { label: { en: 'Executive clarity', ru: 'Executive clarity' }, tone: 'stone' },
          { label: { en: 'Budget decisions', ru: 'Бюджетные решения' }, tone: 'amber' },
          { label: { en: 'AI vision', ru: 'AI vision' }, tone: 'violet' },
        ]
      }
    ],
    branchesTitle: {
      en: 'Common management-side branches in AI',
      ru: 'Типичные management-развилки в AI'
    },
    branches: [
      {
        title: { en: 'AI Product Director', ru: 'AI Product Director' },
        body: {
          en: 'For leaders who prefer strategy, portfolio decisions, and cross-functional prioritization over direct people management.',
          ru: 'Для лидеров, которым ближе стратегия, портфельные решения и межфункциональная приоритизация, чем прямое управление людьми.'
        },
        badge: { label: { en: 'Strategy heavy', ru: 'Упор на стратегию' }, tone: 'amber' }
      },
      {
        title: { en: 'Head of Platform', ru: 'Head of Platform' },
        body: {
          en: 'A path focused on common infra, deployment standards, governance, and shared technical leverage.',
          ru: 'Путь с фокусом на общую инфраструктуру, стандарты доставки, governance и общий технический рычаг.'
        },
        badge: { label: { en: 'Platform leadership', ru: 'Лидерство платформы' }, tone: 'mint' }
      },
      {
        title: { en: 'Solutions Lead', ru: 'Solutions Lead' },
        body: {
          en: 'Best for people who like client-facing architecture, partner communication, and translating capabilities into adoption.',
          ru: 'Подходит тем, кому нравится клиентская архитектура, общение с партнерами и перевод возможностей в реальное внедрение.'
        },
        badge: { label: { en: 'External alignment', ru: 'Внешняя координация' }, tone: 'stone' }
      },
      {
        title: { en: 'Research Manager', ru: 'Research Manager' },
        body: {
          en: 'A crossover branch for leaders who want to manage scientific teams without leaving technical depth completely.',
          ru: 'Переходная ветка для лидеров, которые хотят управлять исследовательскими командами, не покидая полностью техническую глубину.'
        },
        badge: { label: { en: 'Science leadership', ru: 'Лидерство в research' }, tone: 'violet' }
      }
    ]
  }
};

const DECISION_CARDS: DecisionCard[] = [
  {
    title: {
      en: 'Choose research when the question itself excites you.',
      ru: 'Выбирайте research, если вас по-настоящему заводит сам вопрос.'
    },
    body: {
      en: 'If you enjoy papers, novel hypotheses, and patient experimental loops more than shipping deadlines, the research branch is structurally aligned with your motivation.',
      ru: 'Если вам ближе статьи, новые гипотезы и терпеливые экспериментальные циклы, чем дедлайны релизов, research-ветка структурно лучше совпадает с вашей мотивацией.'
    }
  },
  {
    title: {
      en: 'Choose IC / platform when you want to ship reliable systems.',
      ru: 'Выбирайте IC / platform, если хотите выпускать надежные системы.'
    },
    body: {
      en: 'This path rewards engineers who like production ownership, debugging, performance tradeoffs, and measurable improvement in user outcomes.',
      ru: 'Эта траектория вознаграждает инженеров, которым нравится владение продакшном, отладка, компромиссы по производительности и измеримое улучшение пользовательского результата.'
    }
  },
  {
    title: {
      en: 'Choose management when your impact compounds through people.',
      ru: 'Выбирайте management, если ваш результат начинает расти через людей.'
    },
    body: {
      en: 'If you increasingly care about hiring, team clarity, prioritization, and operating rhythm, management can be a stronger fit than continuing to optimize for personal code output.',
      ru: 'Если вас все больше волнуют найм, ясность команды, приоритизация и операционный ритм, management может подойти лучше, чем дальнейшая оптимизация под личный кодовый output.'
    }
  }
];

function text(value: LocalizedText, lang: Lang) {
  return value[lang];
}

export default function AiCareerTrajectoriesTheory({ lang }: { lang: string }) {
  const currentLang = lang === 'ru' ? 'ru' : 'en';
  const [selectedTrack, setSelectedTrack] = useState<TrackId>('ic');
  const [openStageId, setOpenStageId] = useState<string>(ROADMAPS.ic.stages[0].id);

  const roadmap = ROADMAPS[selectedTrack];

  return (
    <div className="not-prose space-y-8">
      <section className="bg-card-dark border border-border-card rounded-[1.75rem] p-6 md:p-8">
        <div className="max-w-3xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-neutral-500 font-mono mb-4">
            {currentLang === 'ru' ? 'Карта карьеры' : 'Career Roadmap'}
          </p>
          <h2
            className="text-4xl md:text-6xl font-semibold text-neutral-100 leading-[0.95] mb-5"
            style={{ fontFamily: 'var(--font-reading, "Iowan Old Style"), Georgia, serif' }}
          >
            {currentLang === 'ru' ? 'Карьерные траектории в AI' : 'AI Career Trajectories'}
          </h2>
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed mb-3">
            {currentLang === 'ru'
              ? 'Используйте карту как ориентир, а не как жесткую лестницу. В AI рост зависит от того, любите ли вы исследовательскую новизну, выпуск надежных систем или увеличение результата через координацию команды.'
              : 'Use this map as orientation, not as a rigid ladder. In AI, career growth depends on whether you prefer research novelty, shipping reliable systems, or multiplying impact through team coordination.'}
          </p>
          <p className="text-sm text-neutral-500 leading-relaxed">
            {currentLang === 'ru'
              ? 'Годы приблизительны. Названия ролей различаются между стартапами, лабораториями и крупными компаниями, но логика переходов обычно похожа.'
              : 'The year ranges are approximate. Role titles vary across startups, labs, and large companies, but the transition logic is usually similar.'}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {(Object.keys(TRACK_LABELS) as TrackId[]).map((track) => {
            const isActive = selectedTrack === track;
            return (
              <button
                key={track}
                type="button"
                onClick={() => {
                  setSelectedTrack(track);
                  setOpenStageId(ROADMAPS[track].stages[0].id);
                }}
                className={`rounded-2xl border px-5 py-3 text-base md:text-lg font-mono transition-colors ${
                  isActive
                    ? 'bg-card border-border-emphasis text-neutral-100'
                    : 'bg-base border-border-card text-neutral-400 hover:text-neutral-200 hover:border-border-emphasis'
                }`}
              >
                {text(TRACK_LABELS[track], currentLang)}
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-border-card bg-card p-5 md:p-6">
          <h3 className="text-lg md:text-xl text-neutral-100 font-semibold mb-2">{text(roadmap.title, currentLang)}</h3>
          <p className="text-sm md:text-base text-neutral-400 leading-relaxed">{text(roadmap.subtitle, currentLang)}</p>
        </div>

        <div className="mt-8 space-y-6">
          {roadmap.stages.map((stage) => {
            const isOpen = openStageId === stage.id;

            return (
              <div key={stage.id} className="grid grid-cols-1 md:grid-cols-[96px_minmax(0,1fr)] gap-4 items-start">
                <div className="hidden md:flex flex-col items-center pt-4">
                  <div className="w-8 h-8 rounded-full border border-border-emphasis bg-card flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
                  </div>
                  <div className="w-px h-full min-h-[72px] bg-border-card" />
                  <span className="text-sm font-mono text-neutral-500 mt-2">{text(stage.years, currentLang)}</span>
                </div>

                <div className="rounded-[1.5rem] border border-border-card bg-card p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-2 md:hidden">
                        {text(stage.years, currentLang)}
                      </p>
                      <h4 className="text-2xl md:text-3xl font-medium text-neutral-100 mb-1">{text(stage.title, currentLang)}</h4>
                      <p className="text-sm md:text-base font-mono uppercase tracking-[0.14em] text-neutral-500">
                        {text(stage.level, currentLang)}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setOpenStageId(isOpen ? '' : stage.id)}
                      className="shrink-0 rounded-full border border-border-card bg-base p-2 text-neutral-400 hover:text-neutral-200 hover:border-border-emphasis transition-colors"
                      aria-label={isOpen ? (currentLang === 'ru' ? 'Свернуть этап' : 'Collapse stage') : (currentLang === 'ru' ? 'Развернуть этап' : 'Expand stage')}
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  <p className="mt-4 text-sm md:text-base text-neutral-300 leading-relaxed">{text(stage.summary, currentLang)}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {stage.chips.map((chip) => (
                      <span key={text(chip.label, currentLang)} className={`px-3 py-1 rounded-full text-sm font-medium ${CHIP_STYLES[chip.tone]}`}>
                        {text(chip.label, currentLang)}
                      </span>
                    ))}
                  </div>

                  {isOpen && (
                    <div className="mt-5 space-y-4 border-t border-border-card pt-5">
                      {stage.details.map((detail) => (
                        <p key={text(detail, currentLang)} className="text-sm md:text-base text-neutral-300 leading-relaxed">
                          {text(detail, currentLang)}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-[1.75rem] p-6 md:p-8">
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 font-mono mb-5">
          {text(roadmap.branchesTitle, currentLang)}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {roadmap.branches.map((branch) => (
            <article key={text(branch.title, currentLang)} className="rounded-[1.35rem] border border-border-card bg-base p-5">
              <h3 className="text-2xl font-medium text-neutral-100 mb-3">{text(branch.title, currentLang)}</h3>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-4">{text(branch.body, currentLang)}</p>
              <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${CHIP_STYLES[branch.badge.tone]}`}>
                {text(branch.badge.label, currentLang)}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-[1.75rem] p-6 md:p-8">
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 font-mono mb-5">
          {currentLang === 'ru' ? 'Как выбрать свой путь' : 'How to choose your lane'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {DECISION_CARDS.map((card) => (
            <article key={text(card.title, currentLang)} className="rounded-[1.35rem] border border-border-card bg-base p-5">
              <h3 className="text-lg font-medium text-neutral-100 mb-3">{text(card.title, currentLang)}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{text(card.body, currentLang)}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
