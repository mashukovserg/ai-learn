"use client";

import React from 'react';
import Link from 'next/link';
import Term from '@/components/Term';
import Screenshot from '@/components/Screenshot';

const LINK_CLS = 'text-accent-300 hover:text-accent-200 underline underline-offset-4';

const HLE_URL = 'https://lastexam.ai/';
const HLE_PAPER_URL = 'https://doi.org/10.1038/s41586-025-09962-4';
const GSM1K_URL = 'https://arxiv.org/abs/2405.00332';
const MEASURE_INTELLIGENCE_URL = 'https://arxiv.org/abs/1911.01547';
const EPOCH_DATA_URL = 'https://epoch.ai/blog/will-we-run-out-of-data-limits-of-llm-scaling-based-on-human-generated-data';

export default function FrontierEvalsTheory({ lang }: { lang: string }) {
  const ru = lang === 'ru';

  return (
    <>
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Как измерить модель, когда экзамены кончились' : 'How to Measure a Model When the Exams Run Out'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru ? (
            <>
              Любое заявление «наша модель умнее» опирается на какой-то замер. Долгое время замеры выглядели как школьный экзамен: набор вопросов с известными ответами, у кого больше правильных — тот и лучше. Такие наборы называют бенчмарками, а систему тестов и метрик вокруг них — <Term id="evals" lang={lang}>эвалюацией</Term>. Пока модели были слабыми, школьная логика работала: разрыв между «отвечает наугад» и «отвечает как студент» виден на любом тесте.
            </>
          ) : (
            <>
              Every claim that «our model is smarter» rests on some measurement. For a long time the measurements looked like school exams: a set of questions with known answers, and whoever gets more of them right wins. Such sets are called benchmarks, and the system of tests and metrics around them — <Term id="evals" lang={lang}>evals</Term>. While models were weak, the school logic worked: the gap between «answers at random» and «answers like a student» shows up on any test.
            </>
          )}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'К середине 2020-х эта логика сломалась сразу с двух сторон. Сверху — модели добрались до потолка: на популярных экзаменах фронтирные системы отвечают правильно почти всегда, и различить их между собой тест уже не может. Снизу — подкрался более неприятный дефект: вопросы старых тестов лежат в открытом интернете годами, а модели учатся на копии этого интернета. Высокий балл перестал отличать «умеет рассуждать» от «видел ответ при обучении».'
            : 'By the mid-2020s this logic broke from two directions at once. From above, models hit the ceiling: on the popular exams frontier systems answer correctly almost every time, and the test can no longer tell them apart. From below crept a nastier defect: the questions of the old tests have been sitting on the open internet for years, and models train on a copy of that internet. A high score stopped distinguishing «can reason» from «saw the answer during training».'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Отсюда — фронтирные эвалы (frontier evals): тесты, собранные на границе человеческих знаний, из вопросов, которых модель гарантированно не видела при обучении и ответы на которые нельзя нагуглить. Их цель — проверить не память, а рассуждение в условиях новизны. Разница примерно как между пересказом параграфа из учебника и задачей, которую в учебник ещё не успели записать.'
            : 'Hence frontier evals: tests assembled at the frontier of human knowledge, from questions the model is guaranteed not to have seen during training and whose answers cannot be googled. Their goal is to check not memory but reasoning under novelty. The difference is roughly between retelling a textbook paragraph and solving a problem that has not yet made it into any textbook.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Полезно сразу расставить старые измерения по местам. Тест Тьюринга — «может ли машина сойти за человека в переписке» — проверяет правдоподобие разговора, и современные чат-боты проходят его походя; о способности решать новые задачи он не говорит ничего. Проверка грамматики, фактов, пересказ — всё это измерения вчерашнего дня: важные для продукта, но бесполезные на фронтире. Эта комната о том, чем их заменили: жизненный цикл бенчмарка и контаминация, устройство Humanity’s Last Exam, режим рассуждений, чтение лидербордов без наивности — и то, что лежит за пределами любых экзаменов.'
            : 'It helps to place the old measurements straight away. The Turing test — «can a machine pass for a human in conversation» — checks the plausibility of dialogue, and modern chatbots pass it in passing; it says nothing about solving new problems. Grammar checks, fact quizzes, summarisation — yesterday’s measurements: important for products, useless at the frontier. This room is about what replaced them: the benchmark life cycle and contamination, the design of Humanity’s Last Exam, the reasoning mode, reading leaderboards without naivety — and what lies beyond any exam.'}
        </p>
      </div>

      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Жизненный цикл бенчмарка: от 5% до бесполезности' : 'The Benchmark Life Cycle: From 5% to Useless'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'У бенчмарков есть предсказуемая судьба, и она повторялась уже много раз. Сначала публикуется новый трудный набор задач. Первые замеры фронтирных моделей дают скромные проценты — порядка 5–10, иногда меньше. Затем лаборатории начинают целиться именно в этот тест: он попадает в отчёты, пресс-релизы и обзоры, каждый новый релиз хвастается приростом. Через какое-то время лучшие модели выбивают за 90% — говорят, что бенчмарк «насыщен» (saturated). С этого момента он бесполезен для оценки новых систем: все сильные модели упираются в один и тот же потолок, и различий между ними тест больше не видит. Индустрия публикует следующий, ещё более трудный набор — цикл начинается заново.'
            : 'Benchmarks have a predictable fate, and it has repeated many times. First a new, hard set of problems is published. The first frontier-model runs produce modest numbers — around 5–10 percent, sometimes less. Then the labs begin aiming at precisely this test: it enters reports, press releases and reviews, and every new release brags about the gain. After a while the best models push past 90% — the benchmark is said to be saturated. From that moment it is useless for evaluating new systems: every strong model hits the same ceiling, and the test no longer sees differences between them. The industry publishes the next, even harder set — and the cycle starts over.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Классические примеры этой судьбы — MMLU и ARC. MMLU (2020) — 57 предметов, от школьной математики до права, вопросы с вариантами ответов; когда-то он был серьёзным испытанием, сегодня фронтирные модели отвечают правильно более чем в 90% случаев. ARC (AI2 Reasoning Challenge, 2018) — научные вопросы уровня начальной школы — насыщен давно и полностью. Оба теста честно отслужили своё; проблема не в них, а в том, что их продолжают цитировать как доказательство «интеллекта».'
            : 'The classic examples of this fate are MMLU and ARC. MMLU (2020) — 57 subjects from school mathematics to law, multiple-choice; once a serious challenge, today frontier models answer over 90% of it correctly. ARC (the AI2 Reasoning Challenge, 2018) — grade-school science questions — saturated long ago and completely. Both tests served honourably; the problem is not with them but with the habit of still citing them as proof of «intelligence».'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru ? (
            <>
              Вторая, более коварная причина смерти бенчмарка — <Term id="benchmark-contamination" lang={lang}>контаминация</Term>. Модели обучаются на корпусах, собранных из интернета, а вопросы и ответы популярных тестов лежат в этом интернете: в статьях, репозиториях, конспектах, на форумах. Ответ просачивается в обучающую выборку, и модель воспроизводит его по памяти, а тест засчитывает это как рассуждение. Снаружи оба случая выглядят одинаково — правильный ответ; различить их по итоговому баллу невозможно.
            </>
          ) : (
            <>
              The second, sneakier cause of benchmark death is <Term id="benchmark-contamination" lang={lang}>contamination</Term>. Models train on corpora scraped from the internet, and the questions and answers of popular tests live on that internet: in articles, repositories, lecture notes, forums. The answer seeps into the training set, the model reproduces it from memory, and the test scores it as reasoning. From outside the two cases look identical — a correct answer; the final score cannot tell them apart.
            </>
          )}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru ? (
            <>
              Контаминацию удалось поймать за руку экспериментально. В 2024 году Scale AI написала с нуля GSM1k — набор школьных арифметических задач, по трудности и стилю неотличимых от знаменитого GSM8K, но нигде не публиковавшихся (<a href={GSM1K_URL} target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Zhang et al. 2024</a>). Если модель действительно умеет считать, ей всё равно, старые задачи или новые. Оказалось — не всё равно: у ряда семейств моделей точность на свежих задачах упала до 8 процентных пунктов, что авторы связывают с переобучением на утёкший тест; сильнейшие фронтирные модели при этом почти не просели. Один и тот же балл на GSM8K скрывал и настоящий навык, и заученные ответы.
            </>
          ) : (
            <>
              Contamination has been caught red-handed experimentally. In 2024 Scale AI wrote GSM1k from scratch — grade-school arithmetic problems matched in difficulty and style to the famous GSM8K but never published anywhere (<a href={GSM1K_URL} target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Zhang et al. 2024</a>). If a model can genuinely do arithmetic, it should not care whether the problems are old or new. It turned out to care: several model families dropped by up to 8 percentage points on the fresh problems, which the authors attribute to overfitting on the leaked test; the strongest frontier models barely moved. The same GSM8K score was hiding both real skill and memorised answers.
            </>
          )}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Отсюда рабочий вывод всей комнаты: балл бенчмарка — это измерение, у которого есть срок годности и условия хранения. Насыщение съедает его сверху, контаминация — снизу. Любой замер, которому вы собираетесь верить, должен отвечать на два вопроса: мог ли тест утечь в обучающие данные и остался ли у него запас сложности, чтобы различать сильные модели.'
            : 'Hence the working conclusion of this whole room: a benchmark score is a measurement with a shelf life and storage conditions. Saturation eats it from above, contamination from below. Any measurement you intend to trust must answer two questions: could the test have leaked into the training data, and does it retain enough headroom to tell strong models apart.'}
        </p>
      </div>

      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Humanity’s Last Exam: экзамен, который нельзя нагуглить' : 'Humanity’s Last Exam: The Exam You Cannot Google'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru ? (
            <>
              Самый известный ответ на смерть старых бенчмарков — Humanity’s Last Exam (HLE), совместный проект Scale AI и Center for AI Safety, запущенный в январе 2025 года под руководством Дэна Хендрикса (CAIS) и Александра Ванга (тогда — глава Scale AI). Замысел прямо противоположен MMLU: не собрать вопросы из открытых источников, а заказать их экспертам с нуля. Итоговый набор — 2500 вопросов более чем по ста дисциплинам, от математики и химии до классической филологии; их писали около тысячи специалистов из более чем 500 институций примерно в 50 странах (<a href={HLE_URL} target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">lastexam.ai</a>).
            </>
          ) : (
            <>
              The best-known answer to the death of the old benchmarks is Humanity’s Last Exam (HLE), a joint project of Scale AI and the Center for AI Safety, launched in January 2025 and led by Dan Hendrycks (CAIS) and Alexandr Wang (then CEO of Scale AI). The design is the opposite of MMLU: not collecting questions from open sources but commissioning them from experts from scratch. The final set is 2,500 questions across more than a hundred disciplines, from mathematics and chemistry to classical philology, written by roughly a thousand specialists from over 500 institutions in about 50 countries (<a href={HLE_URL} target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">lastexam.ai</a>).
            </>
          )}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Два механизма делают HLE именно фронтирным тестом. Первый — отбор был состязательным: вопрос-кандидат прогоняли через сильнейшие модели того времени, и если хоть одна отвечала правильно (а на вопросах с вариантами — лучше случайного угадывания), вопрос отклонялся. В набор попало только то, на чём фронтир гарантированно ломался. За лучшие вопросы платили из призового фонда в 500 тысяч долларов: по 5000 за каждый из 50 сильнейших, по 500 за следующие 500. Второй механизм — защита от утечки: публично выложены не все вопросы, часть удержана в закрытом наборе. Если будущая модель вдруг покажет подозрительно большой разрыв между публичной и закрытой частью — это прямой детектор того, что публичная часть попала в обучение.'
            : 'Two mechanisms make HLE a genuinely frontier test. First, selection was adversarial: each candidate question was run through the strongest models of the day, and if any answered correctly (or, on multiple choice, better than random guessing), the question was rejected. Only what reliably broke the frontier made it in. The best questions were paid for from a $500,000 prize pool: $5,000 for each of the top 50, $500 for each of the next 500. Second, leak protection: not all questions are public — part is withheld as a private set. If a future model shows a suspicious gap between the public and private parts, that is a direct detector of the public part having entered training data.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Запуск подтвердил замысел: GPT-4o отвечал правильно на 3,3% вопросов, Claude 3.5 Sonnet — на 4,3%, рассуждающие o1 и DeepSeek-R1 — на 9,1% и 9,4%. Тот самый фронтир, что играючи решает MMLU на девяносто с лишним, на свежих экспертных вопросах оказался в самом начале шкалы — ровно это и означает «запас сложности». Дальше сработал жизненный цикл из предыдущей главы, только в ускоренной съёмке — посмотрите на официальный график прогресса.'
            : 'The launch confirmed the design: GPT-4o answered 3.3% of the questions correctly, Claude 3.5 Sonnet 4.3%, the reasoning models o1 and DeepSeek-R1 9.1% and 9.4%. The same frontier that breezes through MMLU at ninety-plus found itself at the very bottom of the scale on fresh expert questions — which is exactly what «headroom» means. Then the life cycle from the previous chapter kicked in, only in time-lapse — look at the official progress chart.'}
        </p>
        <Screenshot
          src="/images/rooms/frontier-evals-logic/hle-progress-chart.png"
          alt={ru
            ? 'График «AI Progress on Humanity’s Last Exam» с сайта lastexam.ai: точность моделей от ноября 2024 (GPT-4o около 3%) до июля 2026 (лучшие системы выше 50%).'
            : 'The «AI Progress on Humanity’s Last Exam» chart from lastexam.ai: model accuracy from November 2024 (GPT-4o near 3%) to July 2026 (top systems above 50%).'}
          width={2200}
          height={860}
          caption={ru
            ? 'lastexam.ai, график прогресса (источник данных — CAIS AI Dashboard). Захват 20.08.2026. Нажмите, чтобы рассмотреть.'
            : 'lastexam.ai, the progress chart (data source: CAIS AI Dashboard). Captured 2026-08-20. Tap to view larger.'}
        />
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'За двадцать месяцев кривая прошла путь от единиц процентов до пятидесяти с лишним: осенью 2025-го фронтир перевалил за треть, к лету 2026-го лучшие системы решают больше половины «нерешаемого» экзамена. Это одновременно и достижение моделей, и напоминание, что даже специально сконструированный запас сложности выедается за пару лет. Создатели ответили на это ещё в октябре 2025-го, выпустив HLE-Rolling — «живую» версию, куда постоянно добавляются свежие вопросы: бенчмарк перестаёт быть застывшим набором и превращается в поток.'
            : 'In twenty months the curve went from single digits to fifty-plus: by autumn 2025 the frontier passed a third, and by summer 2026 the best systems solve more than half of the «unsolvable» exam. That is both an achievement of the models and a reminder that even deliberately engineered headroom gets eaten within a couple of years. The creators answered back in October 2025 by releasing HLE-Rolling — a living version continuously topped up with fresh questions: the benchmark stops being a frozen set and becomes a stream.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru ? (
            <>
              Название — осознанная ирония. Авторы прямо пишут: HLE, возможно, последний закрытый академический экзамен, который имеет смысл давать моделям, — но далеко не последний бенчмарк для ИИ. Высокий балл здесь означает экспертный уровень на вопросах с проверяемым ответом; о способности к открытой исследовательской работе он не говорит ничего. Работа опубликована в Nature (<a href={HLE_PAPER_URL} target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Phan et al. 2026</a>), и на её странице результатов есть вторая колонка, о которой пойдёт речь через главу, — калибровка.
            </>
          ) : (
            <>
              The name is deliberate irony. The authors say it plainly: HLE may be the last closed-ended academic exam worth giving to models — but it is far from the last benchmark for AI. A high score here means expert level on questions with checkable answers; it says nothing about open-ended research ability. The work is published in Nature (<a href={HLE_PAPER_URL} target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Phan et al. 2026</a>), and its results page carries a second column we will get to in a chapter — calibration.
            </>
          )}
        </p>
      </div>

      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Режим рассуждений: интеллект за время ответа' : 'The Reasoning Mode: Intelligence at Answer Time'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru ? (
            <>
              Параллельно с новыми экзаменами сменилось и то, что на них сдают. Классическая модель отвечает сразу: один проход, первый пришедший «в голову» токен за токеном. Рассуждающая модель сначала думает: раскладывает задачу на шаги, проверяет собственные гипотезы, ловит свои ошибки, пробует другой путь — и только потом отвечает. Вычисления, потраченные на это думание, называют <Term id="test-time-compute" lang={lang}>test-time compute</Term> — «вычислениями во время ответа». Это смена парадигмы: раньше интеллект модели фиксировался в момент окончания обучения, теперь его можно докупать в момент вопроса.
            </>
          ) : (
            <>
              In parallel with the new exams, what takes them changed too. A classic model answers immediately: one pass, the first thing that «comes to mind», token by token. A reasoning model thinks first: breaks the problem into steps, checks its own hypotheses, catches its own mistakes, tries another path — and only then answers. The compute spent on that thinking is called <Term id="test-time-compute" lang={lang}>test-time compute</Term>. It is a paradigm shift: a model’s intelligence used to be fixed the moment training ended; now you can buy more of it at question time.
            </>
          )}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru ? (
            <>
              По сути это второй, независимый закон роста — в дополнение к классическим <Term id="scaling-laws" lang={lang}>законам масштабирования</Term> обучения. Самая наглядная демонстрация случилась в декабре 2024-го на ARC-AGI, тесте абстрактных головоломок: система o3 в экономном режиме решила 75,7% полузакрытого набора, а та же самая система с большим бюджетом на размышления — 87,5%. Модель одна и та же; разница — только в количестве вычислений, потраченных на ответ, причём в дорогом режиме счёт шёл на тысячи долларов за одну задачу. На свежем математическом наборе FrontierMath картина та же: при запуске осенью 2024-го фронтир решал меньше 2% задач, o3 была анонсирована с результатом около 25%.
            </>
          ) : (
            <>
              In effect this is a second, independent growth law — on top of the classic training <Term id="scaling-laws" lang={lang}>scaling laws</Term>. The most vivid demonstration came in December 2024 on ARC-AGI, a test of abstract puzzles: the o3 system solved 75.7% of the semi-private set in its economical mode, and the very same system with a large thinking budget — 87.5%. Same model; the only difference is the amount of compute spent on the answer, and in the expensive mode the bill ran to thousands of dollars per single problem. On the fresh FrontierMath set the picture is the same: at its autumn 2024 launch the frontier solved under 2% of the problems, and o3 was announced at around 25%.
            </>
          )}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Для фронтирных эвалов это меняет саму процедуру замера. Бюджет размышлений — от секунд до часов, а в отдельных постановках — сутки и больше: системе AlphaProof от DeepMind на задачах математической олимпиады IMO 2024 позволяли думать до трёх дней. И точность на трудных задачах заметно растёт с бюджетом — за счёт перебора и проверки гипотез. Значит, у любого результата теперь есть обязательная сноска: сколько модель думала и сколько это стоило. Сравнивать пятисекундный ответ одной системы с многочасовым размышлением другой — бессмысленно; рост точности покупается деньгами и временем, и у него есть убывающая отдача.'
            : 'For frontier evals this changes the measurement procedure itself. Thinking budgets run from seconds to hours, and in some setups to a day and beyond: DeepMind’s AlphaProof was allowed up to three days per problem on the IMO 2024 olympiad tasks. And accuracy on hard tasks grows markedly with the budget — through iteration and hypothesis checking. So every result now carries a mandatory footnote: how long the model thought and what that cost. Comparing one system’s five-second answer with another’s multi-hour deliberation is meaningless; the accuracy gain is bought with money and time, and it has diminishing returns.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'И ещё одно следствие, о котором чаще всего забывают: когда модель отвечает цепочкой рассуждений, проверять надо цепочку, а не только итог. Правильный ответ при бредовом решении — это не успех, а лотерейный билет: на четырёх вариантах ответа даже монетка угадывает в четверти случаев, а модель, «уверенно» галлюцинирующая промежуточные шаги, завтра тем же способом придёт к неправильному итогу. Эвалы нового поколения поэтому оценивают весь путь решения: логика шагов, честность промежуточных утверждений, соответствие вывода собственным выкладкам. Именно способность пройти проверку по шагам отделяет рассуждение от удачного угадывания.'
            : 'And one more consequence, most often forgotten: when a model answers with a chain of reasoning, it is the chain that must be checked, not just the outcome. A correct answer atop nonsense working is not a success but a lottery ticket: with four answer options even a coin guesses right a quarter of the time, and a model that «confidently» hallucinates its intermediate steps will use the same trick to reach a wrong outcome tomorrow. Next-generation evals therefore grade the whole solution path: the logic of the steps, the honesty of intermediate claims, whether the conclusion follows from the model’s own working. It is surviving a step-by-step check that separates reasoning from a lucky guess.'}
        </p>
      </div>

      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Как читать лидерборд' : 'How to Read a Leaderboard'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Теперь соберём всё это в навык, ради которого комната и существует: читать таблицы результатов без наивности. Заявление «наша модель — №1 на бенчмарке рассуждений» — это не факт, а начало проверки. Первый вопрос: одинаковы ли условия замера. У результата есть режим: pass@1 — доля задач, решённых с первой попытки, pass@k и cons@64 — режимы со многими попытками, где итог агрегируется по десяткам сэмплов. Сравнивать чужой pass@1 со своим cons@64 — всё равно что сравнивать чужой первый выстрел со своей лучшей серией из шестидесяти четырёх.'
            : 'Now let us fold all of this into the skill this room exists for: reading results tables without naivety. The claim «our model is #1 on a reasoning benchmark» is not a fact but the start of a verification. First question: were the measurement conditions equal. A result has a mode: pass@1 is the share of problems solved on the first attempt; pass@k and cons@64 are multi-attempt modes where the outcome is aggregated over dozens of samples. Comparing someone else’s pass@1 with your own cons@64 is like comparing their first shot with your best out of sixty-four.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Это не гипотетическая придирка. В феврале 2025-го xAI показала графики, на которых Grok 3 обгонял o3-mini на математической олимпиаде AIME. Критики — среди них сотрудники OpenAI — заметили, что для Grok на графике стоял режим cons@64, а для конкурента — pass@1; xAI с критикой не согласилась, и спор про «честные графики» несколько дней занимал всю индустрию. Для нас в нём важен не виновный, а вывод: даже громкое сравнение от большой лаборатории нужно читать вместе с подписью к осям.'
            : 'This is not a hypothetical quibble. In February 2025, xAI showed charts of Grok 3 beating o3-mini on the AIME mathematics olympiad. Critics — OpenAI employees among them — noticed the chart used cons@64 for Grok but pass@1 for the competitor; xAI rejected the criticism, and the argument about «honest charts» occupied the industry for days. What matters for us is not the culprit but the lesson: even a loud comparison from a major lab must be read together with the axis labels.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Второй вопрос: мог ли тест утечь в обучение — вспомните GSM1k; стандартная защита, на которую стоит смотреть, — закрытый набор вопросов, как у HLE или ARC-AGI. Третий: сопоставимы ли конфигурации — доступ к инструментам, бюджет размышлений, число прогонов. И четвёртый, самый простой: один бенчмарк — это одно измерение. Модель, лучшая в математике, может быть посредственной в письме или в агентных задачах; «№1» без указания, в чём именно, — маркетинг, а не измерение.'
            : 'Second question: could the test have leaked into training — recall GSM1k; the standard defense to look for is a private question set, as in HLE or ARC-AGI. Third: are the configurations comparable — tool access, thinking budget, number of runs. And fourth, the simplest: one benchmark is one measurement. A model best at mathematics can be mediocre at writing or agentic tasks; a «#1» without saying at what is marketing, not measurement.'}
        </p>
        <Screenshot
          src="/images/rooms/frontier-evals-logic/hle-leaderboard-calibration.png"
          alt={ru
            ? 'Таблица результатов Humanity’s Last Exam с двумя колонками — Accuracy и Calibration Error: Gemini 3 Pro 38,3% точности при 57,2% ошибки калибровки, GPT-4o — 2,7% точности при 89% ошибки калибровки.'
            : 'The Humanity’s Last Exam results table with two columns — Accuracy and Calibration Error: Gemini 3 Pro at 38.3% accuracy with 57.2% calibration error, GPT-4o at 2.7% accuracy with 89% calibration error.'}
          width={2230}
          height={1340}
          caption={ru
            ? 'lastexam.ai, «Quantitative Results»: финальный набор из 2500 вопросов, судья — o3-mini. Захват 20.08.2026. Нажмите, чтобы рассмотреть.'
            : 'lastexam.ai, «Quantitative Results»: the finalized 2,500-question set, judged by o3-mini. Captured 2026-08-20. Tap to view larger.'}
        />
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Официальная таблица HLE — редкий пример лидерборда, который учит его же читать. Обратите внимание на условия мелким шрифтом: указан судья (ответы оценивает модель o3-mini) и дата фиксации набора — это и есть та самая подпись к осям. Но главное — вторая колонка, Calibration Error. Моделей просят давать не только ответ, но и уверенность в нём от 0 до 100%; ошибка калибровки показывает, насколько заявленная уверенность расходится с реальной точностью. Посмотрите на строку GPT-4o: 2,7% правильных ответов — при ошибке калибровки 89%. Модель, не решающая почти ничего, была почти во всём уверена. Сверхуверенность на непосильных вопросах — систематическое свойство нынешних систем, и это второй, тихий провал, который таблица показывает рядом с первым.'
            : 'The official HLE table is a rare leaderboard that teaches you how to read leaderboards. Note the fine print of the conditions: the judge is named (answers are graded by o3-mini) and the dataset freeze date is given — that is exactly the axis label. But the main thing is the second column, Calibration Error. Models are asked to give not only an answer but their confidence in it from 0 to 100%; calibration error shows how far the stated confidence diverges from actual accuracy. Look at the GPT-4o row: 2.7% correct — with an 89% calibration error. A model that solves almost nothing was confident about almost everything. Overconfidence on impossible questions is a systematic property of current systems, and it is the second, quieter failure the table shows next to the first.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Есть и обратная сторона: хороший бенчмарк — не только термометр, но и компас. Исследовательские команды прямо называют такие тесты «северной звездой» (North Star): понятная, честно измеримая цель организует работу лабораторий на месяцы вперёд — фонд ARC Prize формулирует свою миссию именно в этих словах. У компаса есть известный дефект — закон Гудхарта: когда метрика становится целью, она перестаёт быть хорошей метрикой; поэтому индустрия и живёт на конвейере из новых экзаменов, а не на одном вечном.'
            : 'There is a flip side: a good benchmark is not only a thermometer but a compass. Research teams openly call such tests a North Star: a clear, honestly measurable goal organises a lab’s work for months ahead — the ARC Prize foundation states its mission in exactly those words. The compass has a known defect — Goodhart’s law: when a metric becomes the target, it stops being a good metric; which is why the industry lives on a conveyor of new exams rather than one eternal test.'}
        </p>
      </div>

      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'За пределами экзаменов: вычисления, энергия и данные' : 'Beyond Exams: Compute, Energy, and Data'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Что остаётся, когда и специально сконструированные экзамены начинают насыщаться? Следующая ступень — задачи, у которых вообще нет ключа с ответами: реальные проблемы индустрии и науки. Найти молекулу-кандидата для лекарства, оптимизировать компоновку чипа, довести многошаговый агентный проект до результата — здесь оценка перестаёт быть проверкой по эталону и становится проверкой по последствиям: соединение либо работает в лаборатории, либо нет. Многошаговое агентное планирование — самая доступная форма таких испытаний: агенту дают цель, инструменты и время, а оценивают достигнутый результат, а не совпадение с ключом.'
            : 'What remains when even purpose-built exams start to saturate? The next rung is tasks that have no answer key at all: real problems of industry and science. Finding a candidate molecule for a drug, optimising a chip layout, carrying a multi-step agentic project to a result — here evaluation stops being a check against a key and becomes a check against consequences: the compound either works in the lab or it does not. Multi-step agent planning is the most accessible form of such trials: the agent gets a goal, tools and time, and what is graded is the achieved outcome, not a match with the key.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Практический рецепт для собственных задач следует прямо отсюда. Если ваша модель «прошла все тесты на сто процентов» — это говорит о тестах, а не о модели. Настоящая проверка строится из ещё не решённых проблем вашей собственной области: возьмите вопросы, над которыми ваши эксперты работают прямо сейчас и ответы на которые ещё нигде не записаны, — ровно так, как HLE собирали из нерешаемых для моделей вопросов действующих исследователей. Дорого, зато измеряет способность к новому, а не память о старом.'
            : 'A practical recipe for your own tasks follows directly. If your model «passed every test at one hundred percent», that says something about the tests, not the model. A real check is built from the still-unsolved problems of your own field: take the questions your experts are working on right now, whose answers are not yet written anywhere — exactly the way HLE was assembled from working researchers’ model-breaking questions. Expensive, but it measures the capacity for the new rather than memory of the old.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Дальше начинается разговор не про тесты, а про пределы роста. Александр Ванг раскладывает лидерство в ИИ на три опоры: вычисления, алгоритмы и данные. С вычислениями всё упирается не столько в число ускорителей, сколько в электричество: Ванг любит показывать две кривые суммарных гигаватт — у Китая она уверенно растёт, у США почти плоская. Этот разрыв в доступных вычислительных мощностях и энергоснабжении между странами в дискуссиях называют compute gap, и он превращает энергосети и дата-центры в фактор национального уровня: экзамены меряют модель, а этот показатель — способность страны вообще участвовать в гонке.'
            : 'Beyond that, the conversation stops being about tests and becomes about limits to growth. Alexandr Wang breaks AI leadership into three pillars: compute, algorithms, and data. On compute, the binding constraint is less the number of accelerators than electricity: Wang likes to show two curves of total gigawatts — China’s climbing steadily, the US’s nearly flat. This gap between nations in available computing power and the energy to run it is what discussions call the compute gap, and it turns power grids and data centres into a national-level factor: exams measure a model, this measures a country’s ability to stay in the race at all.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru ? (
            <>
              Третья опора — данные — упирается в неожиданный потолок: открытый интернет заканчивается. Оценка Epoch AI: запас качественного публичного человеческого текста будет полностью выбран для обучения в промежутке 2026–2032 годов (<a href={EPOCH_DATA_URL} target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Villalobos et al.</a>); Илья Суцкевер сформулировал то же короче — данные это «ископаемое топливо ИИ», а интернет у нас один. Ванг делает из этого стратегический вывод: преимущество переходит к уникальным закрытым данным — медицинским архивам, промышленным логам, государственным реестрам; он называет данные стратегическим активом, говорит о data dominance и предлагает странам собирать национальные резервы данных. В дискуссиях эту рамку называют суверенитетом данных (data sovereignty): кто владеет уникальными данными, тот владеет и куском будущего фронтира — и, как мы видели всю комнату, куском будущих экзаменов для него.
            </>
          ) : (
            <>
              The third pillar — data — runs into an unexpected ceiling: the open internet is running out. Epoch AI’s estimate: the stock of high-quality public human text will be fully used up for training somewhere between 2026 and 2032 (<a href={EPOCH_DATA_URL} target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">Villalobos et al.</a>); Ilya Sutskever put it more bluntly — data is the «fossil fuel of AI», and we have but one internet. Wang draws the strategic conclusion: the advantage shifts to unique proprietary data — medical archives, industrial logs, state registries; he calls data a strategic asset, speaks of data dominance, and urges nations to build national data reserves. Discussions call this frame data sovereignty: whoever owns unique data owns a piece of the future frontier — and, as this whole room has shown, a piece of its future exams.
            </>
          )}
        </p>
      </div>

      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Навык или способность его набирать' : 'Skill, or the Ability to Acquire It'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Под всеми предыдущими главами лежит вопрос, который редко задают вслух: что вообще означает высокий балл. Интуитивно кажется, что он означает «система умеет». Но умение всегда чем-то оплачено — примерами в обучающей выборке, встроенными подсказками, тренировкой на похожих задачах. И если оплатить можно неограниченно, то и уровень умения можно, грубо говоря, купить: достаточно дать системе достаточно данных нужного вида, и балл вырастет, ничего не сообщив о том, справится ли она с задачей другого вида.'
            : 'Underneath all the previous chapters lies a question rarely asked out loud: what does a high score actually mean. Intuitively it seems to mean "the system can do it". But an ability is always paid for — with examples in the training set, with built-in priors, with practice on similar problems. And if you can pay without limit, then a level of ability can, crudely put, be bought: give the system enough data of the right kind and the score rises, telling you nothing about whether it will handle a problem of a different kind.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru ? (
            <>
              Этот довод в законченном виде сформулировал Франсуа Шолле в работе <a href={MEASURE_INTELLIGENCE_URL} target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">«On the Measure of Intelligence»</a> (2019). Его претензия к принятой практике проста: измеряя навык в конкретной задаче, мы не измеряем интеллект, потому что «unlimited priors or unlimited training data allow experimenters to “buy” arbitrary levels of skills for a system» — неограниченные априорные знания или данные позволяют купить любой уровень навыка, и это маскирует собственную способность системы обобщать. Взамен он предложил измерять <Term id="skill-acquisition-efficiency" lang={lang}>эффективность освоения навыка</Term>: не насколько система хороша в известной задаче, а насколько дёшево она осваивает новую относительно того, с чем начинала. Под это определение он и построил ARC — набор головоломок на явно заданных, близких к врождённым человеческим априорных знаниях.
            </>
          ) : (
            <>
              The argument was set out in full by François Chollet in <a href={MEASURE_INTELLIGENCE_URL} target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">&ldquo;On the Measure of Intelligence&rdquo;</a> (2019). His objection to standard practice is simple: measuring skill at a given task does not measure intelligence, because &ldquo;unlimited priors or unlimited training data allow experimenters to &lsquo;buy&rsquo; arbitrary levels of skills for a system&rdquo; — which masks the system&rsquo;s own power to generalise. In its place he proposed measuring <Term id="skill-acquisition-efficiency" lang={lang}>skill-acquisition efficiency</Term>: not how good a system is at a known task, but how cheaply it picks up a new one relative to what it started with. ARC was built to that definition — a set of puzzles resting on an explicit set of priors designed to be as close as possible to innate human ones.
            </>
          )}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Отсюда видно, почему две проблемы из первых глав — насыщение и контаминация — не случайные болезни бенчмарков, а следствия одного устройства. Тест, который меряет навык, стареет ровно в тот момент, когда навык стало чем оплатить: задачи попали в обучающую выборку или под них натренировались специально. Тест, который меряет способность осваивать новое, стареет медленнее, потому что «новое» нельзя выучить заранее по определению. Именно поэтому ARC живёт с 2019 года, а очередной набор школьных задач списывается за пару лет.'
            : 'From here you can see why the two problems from the earlier chapters — saturation and contamination — are not accidental diseases of benchmarks but consequences of one design. A test that measures skill ages exactly when there is something to pay for that skill with: the problems entered the training set, or the system was trained specifically for them. A test that measures the ability to acquire something new ages more slowly, because "new" cannot be learned in advance by definition. That is why ARC has been alive since 2019 while yet another set of school problems is written off within a couple of years.'}
        </p>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru ? (
            <>
              У этого различения есть побочный эффект, который стоит проговорить: оно применимо не только к моделям. Разрыв между «набрал балл» и «способен освоить новое» ровно тот же, что и разрыв между закрытыми тикетами и умением вести задачу самому, — его разбирает комната <Link href={`/${lang}/rooms/ai-career-trajectories`} className={LINK_CLS}>«Карьерные траектории в AI»</Link>. И проверяется он одинаково с обеих сторон: задачей, которой раньше не было. Для модели это свежий закрытый набор, для инженера — инцидент, ответа на который нет ни в документации, ни в обучающей выборке.
            </>
          ) : (
            <>
              The distinction has a side effect worth naming: it applies to more than models. The gap between &ldquo;scored well&rdquo; and &ldquo;able to pick up something new&rdquo; is the same gap as the one between closed tickets and the ability to carry a task alone — the subject of the <Link href={`/${lang}/rooms/ai-career-trajectories`} className={LINK_CLS}>AI Career Trajectories</Link> room. And it is tested the same way from either side: with a problem that did not exist before. For a model that is a fresh private set; for an engineer, an incident whose answer is in neither the documentation nor the training data.
            </>
          )}
        </p>
      </div>

      <div className="bg-card-dark border border-accent-500/20 rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Итог для практика (краткий блок)' : 'Practitioner’s Summary (short block)'}
        </h2>
        <ul className="text-neutral-300 leading-relaxed space-y-3 list-disc list-inside">
          <li>{ru ? 'Балл бенчмарка — измерение со сроком годности: насыщение съедает его сверху (90%+ — тест списан), контаминация — снизу (ответы утекли в обучение).' : 'A benchmark score is a measurement with a shelf life: saturation eats it from above (90%+ — the test is spent), contamination from below (answers leaked into training).'}</li>
          <li>{ru ? 'Фронтирный тест строится состязательно: в HLE вопрос попадал, только если фронтирные модели на нём ломались; закрытый набор — детектор утечки.' : 'A frontier test is built adversarially: an HLE question got in only if frontier models broke on it; the private set is the leak detector.'}</li>
          <li>{ru ? 'Точность рассуждающих моделей растёт с бюджетом размышлений — у любого результата теперь есть сноска: сколько думала и сколько это стоило.' : 'Reasoning-model accuracy grows with the thinking budget — every result now carries a footnote: how long it thought and what it cost.'}</li>
          <li>{ru ? 'Проверяйте цепочку, а не только итог: правильный ответ при бредовом решении — лотерейный билет, а не интеллект.' : 'Check the chain, not just the outcome: a correct answer atop nonsense working is a lottery ticket, not intelligence.'}</li>
          <li>{ru ? 'Заявление «модель №1» читается с четырьмя вопросами: тот же режим и число попыток? нет утечки? сопоставимые конфигурации? и №1 — в чём именно?' : 'Read any «#1 model» claim with four questions: same mode and attempts? no leakage? comparable configurations? and #1 at what, exactly?'}</li>
          <li>{ru ? 'Своя проверка сильнее чужого лидерборда: собирайте эвал из нерешённых задач собственной области.' : 'Your own check beats someone else’s leaderboard: build the eval from your field’s unsolved problems.'}</li>
          <li>{ru ? 'Спрашивайте, что балл измеряет: навык в известной задаче можно «купить» данными и подсказками, способность осваивать новое — нет.' : 'Ask what the score measures: skill at a known task can be «bought» with data and priors; the ability to acquire something new cannot.'}</li>
        </ul>
      </div>

      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-heading">
          {ru ? 'Источники' : 'Sources'}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {ru
            ? 'Числа и механизмы этой комнаты опираются на первоисточники ниже; лидерборд и график прогресса захвачены с официального сайта 20.08.2026. Проверить их существование можно по постоянным ссылкам — это хорошая привычка после любой главы про измерения.'
            : 'The numbers and mechanisms in this room rest on the primary sources below; the leaderboard and progress chart were captured from the official site on 2026-08-20. Verifying they exist via the permanent links is a good habit after any chapter about measurement.'}
        </p>
        <div className="bg-deep border border-border-subtle rounded-lg p-5 my-4">
          <p className="text-xs text-neutral-500 font-medium mb-3 uppercase tracking-wider">
            {ru ? 'Источники' : 'Sources'}
          </p>
          <ul className="text-sm text-neutral-400 space-y-3">
            <li>
              Phan, L., et al. (2026).{' '}
              {ru
                ? '«Humanity’s Last Exam» — устройство бенчмарка, состязательный отбор, закрытый набор, стартовые результаты и калибровка.'
                : '"Humanity’s Last Exam" — the benchmark design, adversarial selection, private set, launch results, and calibration.'}{' '}
              <em>Nature</em> 649:1139–1146.{' '}
              <a href={HLE_PAPER_URL} target="_blank" rel="noopener noreferrer" className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300">
                doi.org/10.1038/s41586-025-09962-4
              </a>
              {' · '}
              <a href={HLE_URL} target="_blank" rel="noopener noreferrer" className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300">
                lastexam.ai
              </a>
            </li>
            <li>
              Zhang, H., et al. (2024).{' '}
              {ru
                ? '«A Careful Examination of Large Language Model Performance on Grade School Arithmetic» (GSM1k, NeurIPS 2024) — экспериментальная поимка контаминации: падение до 8 п.п. на свежих задачах.'
                : '"A Careful Examination of Large Language Model Performance on Grade School Arithmetic" (GSM1k, NeurIPS 2024) — contamination caught experimentally: drops of up to 8 points on fresh problems.'}{' '}
              <a href={GSM1K_URL} target="_blank" rel="noopener noreferrer" className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300">
                arxiv.org/abs/2405.00332
              </a>
            </li>
            <li>
              Villalobos, P., et al. (Epoch AI).{' '}
              {ru
                ? '«Will We Run Out of Data?» — оценка исчерпания запаса качественного публичного текста в 2026–2032 годах.'
                : '"Will We Run Out of Data?" — the estimate that high-quality public text runs out for training in 2026–2032.'}{' '}
              <a href={EPOCH_DATA_URL} target="_blank" rel="noopener noreferrer" className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300">
                epoch.ai
              </a>
            </li>
            <li>
              Chollet, F. (2019).{' '}
              {ru
                ? '«On the Measure of Intelligence» — критика измерения навыка в конкретной задаче, определение интеллекта как эффективности освоения навыка и устройство ARC.'
                : '"On the Measure of Intelligence" — the critique of measuring skill at a given task, intelligence defined as skill-acquisition efficiency, and the design of ARC.'}{' '}
              <a href={MEASURE_INTELLIGENCE_URL} target="_blank" rel="noopener noreferrer" className="text-accent-400 border-b border-accent-500/40 hover:text-accent-300">
                arxiv.org/abs/1911.01547
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
