"use client";

import React from 'react';
import Link from 'next/link';
import Term from '@/components/Term';
import Screenshot from '@/components/Screenshot';

type LocalizedText = { ru: string; en: string };

const WEI_URL = 'https://arxiv.org/abs/2201.11903';
const KOJIMA_URL = 'https://arxiv.org/abs/2205.11916';
const WANG_URL = 'https://arxiv.org/abs/2203.11171';
const COBBE_URL = 'https://arxiv.org/abs/2110.14168';
const LIGHTMAN_URL = 'https://arxiv.org/abs/2305.20050';
const SNELL_URL = 'https://arxiv.org/abs/2408.03314';
const OPENAI_O1_URL = 'https://openai.com/index/learning-to-reason-with-llms/';
const R1_ARXIV_URL = 'https://arxiv.org/abs/2501.12948v1';
const R1_NATURE_URL = 'https://doi.org/10.1038/s41586-025-09422-z';
const TULU_URL = 'https://arxiv.org/abs/2411.15124';
const R1_GITHUB_URL = 'https://github.com/deepseek-ai/DeepSeek-R1';
const S1_URL = 'https://doi.org/10.18653/v1/2025.emnlp-main.1025';
const YUE_URL = 'https://arxiv.org/abs/2504.13837';
const OPENAI_REASONING_DOCS_URL = 'https://developers.openai.com/api/docs/guides/reasoning';
const ANTHROPIC_THINKING_URL = 'https://platform.claude.com/docs/en/build-with-claude/extended-thinking';
const OVERTHINK_URL = 'https://arxiv.org/abs/2412.21187';
const GEMA_URL = 'https://arxiv.org/abs/2507.14417';
const SHOJAEE_URL = 'https://arxiv.org/abs/2506.06941';
const LAWSEN_URL = 'https://arxiv.org/abs/2506.09250';
const TURPIN_URL = 'https://arxiv.org/abs/2305.04388';
const CHEN_FAITH_URL = 'https://arxiv.org/abs/2505.05410';
const BAKER_URL = 'https://arxiv.org/abs/2503.11926';
const KORBAK_URL = 'https://arxiv.org/abs/2507.11473';

const SOURCES: { authors: string; title: string; venue: string; note: LocalizedText; href: string; label: string }[] = [
  {
    authors: 'Wei J. et al.',
    title: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models',
    venue: 'NeurIPS 2022',
    note: { ru: 'PaLM 540B на GSM8K: 17,9% → 56,9%; эффект появляется примерно со 100 млрд параметров', en: 'PaLM 540B on GSM8K: 17.9% → 56.9%; the effect appears at roughly 100B parameters' },
    href: WEI_URL,
    label: 'arXiv:2201.11903',
  },
  {
    authors: 'Kojima T. et al.',
    title: 'Large Language Models are Zero-Shot Reasoners',
    venue: 'NeurIPS 2022',
    note: { ru: '«Let\'s think step by step»: MultiArith 17,7% → 78,7%, GSM8K 10,4% → 40,7%', en: '"Let\'s think step by step": MultiArith 17.7% → 78.7%, GSM8K 10.4% → 40.7%' },
    href: KOJIMA_URL,
    label: 'arXiv:2205.11916',
  },
  {
    authors: 'Wang X. et al.',
    title: 'Self-Consistency Improves Chain of Thought Reasoning in Language Models',
    venue: 'ICLR 2023',
    note: { ru: '40 цепочек и голосование большинством: GSM8K 56,5% → 74,4%', en: '40 chains and a majority vote: GSM8K 56.5% → 74.4%' },
    href: WANG_URL,
    label: 'arXiv:2203.11171',
  },
  {
    authors: 'Cobbe K. et al.',
    title: 'Training Verifiers to Solve Math Word Problems',
    venue: 'arXiv preprint 2021',
    note: { ru: 'GSM8K, верификатор как прибавка, сопоставимая с увеличением модели в 30 раз', en: 'GSM8K, a verifier as a boost comparable to a 30× larger model' },
    href: COBBE_URL,
    label: 'arXiv:2110.14168',
  },
  {
    authors: 'Lightman H. et al.',
    title: 'Let\'s Verify Step by Step',
    venue: 'ICLR 2024',
    note: { ru: 'пошаговая проверка 78,2% против 72,4% у проверки итога; PRM800K', en: 'step-level checking 78.2% vs 72.4% for outcome checking; PRM800K' },
    href: LIGHTMAN_URL,
    label: 'arXiv:2305.20050',
  },
  {
    authors: 'Snell C., Lee J., Xu K., Kumar A.',
    title: 'Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters',
    venue: 'ICLR 2025',
    note: { ru: 'бюджет с учётом сложности эффективнее best-of-N более чем в 4 раза; на самых трудных вопросах выигрывает предобучение', en: 'difficulty-aware budgets beat best-of-N by more than 4×; on the hardest questions pretraining wins' },
    href: SNELL_URL,
    label: 'arXiv:2408.03314',
  },
  {
    authors: 'OpenAI.',
    title: 'Learning to Reason with LLMs',
    venue: 'openai.com, 12.09.2024',
    note: { ru: 'качество o1 растёт с обучением с подкреплением и с временем размышления; AIME 2024 в приложении A', en: 'o1 improves with reinforcement learning and with thinking time; AIME 2024 in Appendix A' },
    href: OPENAI_O1_URL,
    label: 'openai.com/index/learning-to-reason-with-llms',
  },
  {
    authors: 'DeepSeek-AI.',
    title: 'DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning',
    venue: 'arXiv v1, 22.01.2025',
    note: { ru: 'R1-Zero без SFT, награды по правилам, рост длины ответа, четыре этапа R1, дистилляция', en: 'R1-Zero with no SFT, rule-based rewards, growing response length, the four R1 stages, distillation' },
    href: R1_ARXIV_URL,
    label: 'arXiv:2501.12948v1',
  },
  {
    authors: 'DeepSeek-AI (Guo D. et al.)',
    title: 'DeepSeek-R1 incentivizes reasoning in LLMs through reinforcement learning',
    venue: 'Nature 645, 633–638 (2025)',
    note: { ru: 'журнальная версия: R1-Zero на AIME 2024 — 77,9%, рост частоты слова «wait»', en: 'the journal version: R1-Zero on AIME 2024 at 77.9%, a jump in the frequency of "wait"' },
    href: R1_NATURE_URL,
    label: 'doi:10.1038/s41586-025-09422-z',
  },
  {
    authors: 'Lambert N. et al.',
    title: 'Tülu 3: Pushing Frontiers in Open Language Model Post-Training',
    venue: 'COLM 2025',
    note: { ru: 'вводит термин RLVR: модель-оценщик заменена функцией проверки', en: 'introduces the term RLVR: the reward model is replaced by a verification function' },
    href: TULU_URL,
    label: 'arXiv:2411.15124',
  },
  {
    authors: 'DeepSeek-AI.',
    title: 'DeepSeek-R1 — README, Distilled Model Evaluation',
    venue: 'github.com',
    note: { ru: 'таблица результатов моделей R1-Distill', en: 'the results table for the R1-Distill models' },
    href: R1_GITHUB_URL,
    label: 'github.com/deepseek-ai/DeepSeek-R1',
  },
  {
    authors: 'Muennighoff N. et al.',
    title: 's1: Simple test-time scaling',
    venue: 'EMNLP 2025, pp. 20275–20321',
    note: { ru: '1000 примеров, 26 минут на 16 H100, budget forcing через «Wait»', en: '1,000 examples, 26 minutes on 16 H100s, budget forcing via "Wait"' },
    href: S1_URL,
    label: 'doi:10.18653/v1/2025.emnlp-main.1025',
  },
  {
    authors: 'Yue Y. et al.',
    title: 'Does Reinforcement Learning Really Incentivize Reasoning Capacity in LLMs Beyond the Base Model?',
    venue: 'NeurIPS 2025',
    note: { ru: 'при большом k базовые модели решают больше задач, чем модели после RLVR', en: 'at large k base models solve more problems than models after RLVR' },
    href: YUE_URL,
    label: 'arXiv:2504.13837',
  },
  {
    authors: 'OpenAI.',
    title: 'Reasoning models',
    venue: 'developers.openai.com',
    note: { ru: 'токены рассуждения не видны, но оплачиваются как выходные; пример поля usage', en: 'reasoning tokens are hidden but billed as output; an example usage field' },
    href: OPENAI_REASONING_DOCS_URL,
    label: 'developers.openai.com/api/docs/guides/reasoning',
  },
  {
    authors: 'Anthropic.',
    title: 'Building with extended thinking',
    venue: 'platform.claude.com',
    note: { ru: 'токены размышления оплачиваются как выходные, даже если текст не возвращается', en: 'thinking tokens are billed as output even when the text is not returned' },
    href: ANTHROPIC_THINKING_URL,
    label: 'platform.claude.com/docs/en/build-with-claude/extended-thinking',
  },
  {
    authors: 'Chen X. et al.',
    title: 'Do NOT Think That Much for 2+3=? On the Overthinking of o1-Like LLMs',
    venue: 'ICML 2025',
    note: { ru: '«2 + 3»: 901 токен у QwQ-32B-Preview против 7 у GPT-4o, 13 решений', en: '"2 + 3": 901 tokens for QwQ-32B-Preview vs 7 for GPT-4o, 13 solutions' },
    href: OVERTHINK_URL,
    label: 'arXiv:2412.21187',
  },
  {
    authors: 'Gema A. P. et al.',
    title: 'Inverse Scaling in Test-Time Compute',
    venue: 'TMLR 2025',
    note: { ru: 'задачи, где более длинное рассуждение снижает точность', en: 'tasks where longer reasoning lowers accuracy' },
    href: GEMA_URL,
    label: 'arXiv:2507.14417',
  },
  {
    authors: 'Shojaee P. et al.',
    title: 'The Illusion of Thinking',
    venue: 'NeurIPS 2025',
    note: { ru: 'обвал точности на головоломках после порога сложности; ответ критикам в приложении A.1', en: 'accuracy collapse on puzzles past a complexity threshold; reply to critics in Appendix A.1' },
    href: SHOJAEE_URL,
    label: 'arXiv:2506.06941',
  },
  {
    authors: 'Lawsen A.',
    title: 'The Illusion of the Illusion of Thinking',
    venue: 'arXiv comment 2025',
    note: { ru: 'лимит выходных токенов и нерешаемые варианты задачи о переправе', en: 'output token limits and unsolvable River Crossing instances' },
    href: LAWSEN_URL,
    label: 'arXiv:2506.09250',
  },
  {
    authors: 'Turpin M., Michael J., Perez E., Bowman S. R.',
    title: 'Language Models Don\'t Always Say What They Think',
    venue: 'NeurIPS 2023',
    note: { ru: 'подсказка в промпте меняет ответ, но объяснение о ней молчит', en: 'a hint in the prompt changes the answer, but the explanation stays silent about it' },
    href: TURPIN_URL,
    label: 'arXiv:2305.04388',
  },
  {
    authors: 'Chen Y. et al.',
    title: 'Reasoning Models Don\'t Always Say What They Think',
    venue: 'Anthropic, arXiv 2025',
    note: { ru: 'подсказку признают в 25% (Claude 3.7 Sonnet) и 39% (DeepSeek R1) случаев', en: 'the hint is acknowledged in 25% (Claude 3.7 Sonnet) and 39% (DeepSeek R1) of cases' },
    href: CHEN_FAITH_URL,
    label: 'arXiv:2505.05410',
  },
  {
    authors: 'Baker B. et al.',
    title: 'Monitoring Reasoning Models for Misbehavior and the Risks of Promoting Obfuscation',
    venue: 'OpenAI, arXiv 2025',
    note: { ru: 'наблюдатель по рассуждению ловит 95% взломов тестов, по действиям — 60%', en: 'a monitor reading the reasoning catches 95% of test hacks, one reading actions 60%' },
    href: BAKER_URL,
    label: 'arXiv:2503.11926',
  },
  {
    authors: 'Korbak T. et al.',
    title: 'Chain of Thought Monitorability: A New and Fragile Opportunity for AI Safety',
    venue: 'arXiv position paper 2025',
    note: { ru: 'совместная позиция исследователей нескольких лабораторий', en: 'a joint position of researchers from several labs' },
    href: KORBAK_URL,
    label: 'arXiv:2507.11473',
  },
];

function Cite({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">
      {children}
    </a>
  );
}

function RoomLink({ lang, id, children }: { lang: string; id: string; children: React.ReactNode }) {
  return (
    <Link href={`/${lang}/rooms/${id}`} className="text-accent-400 hover:underline">
      {children}
    </Link>
  );
}

const USAGE_EXAMPLE = `{
  "usage": {
    "input_tokens": 75,
    "input_tokens_details": {
      "cached_tokens": 0
    },
    "output_tokens": 1186,
    "output_tokens_details": {
      "reasoning_tokens": 1024
    },
    "total_tokens": 1261
  }
}`;

export default function ReasoningModelsTheory({ lang }: { lang: string }) {
  const ru = lang === 'ru';

  return (
    <div className="space-y-8">
      {/* Chapter 1: A scratchpad for the model */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 1: Черновик для модели' : 'Chapter 1: A Scratchpad for the Model'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Попробуйте умножить 47 на 36 в уме и сразу назвать ответ. Скорее всего, вы либо ошибётесь, либо начнёте
                проговаривать про себя промежуточные шаги: 47 на 30 — это 1410, 47 на 6 — 282, вместе 1692. Черновик не
                делает вас умнее. Он даёт место, где хранить промежуточные результаты, и возможность пройти больше шагов,
                прежде чем назвать ответ.
              </>
            ) : (
              <>
                Try multiplying 47 by 36 in your head and naming the answer at once. Most likely you will either get it
                wrong or start voicing the intermediate steps to yourself: 47 times 30 is 1,410, 47 times 6 is 282, 1,692
                together. A scratchpad does not make you smarter. It gives you a place to keep intermediate results and the
                chance to take more steps before you name the answer.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                У языковой модели та же ситуация, только жёстче. На каждый следующий токен она тратит одинаковый объём
                вычислений: вход проходит через фиксированное число слоёв, и на выходе получается распределение
                вероятностей (подробнее — в комнате <RoomLink lang={lang} id="llm-mechanics">«Как мыслят LLM»</RoomLink>).
                Если верный ответ должен прозвучать первым же токеном, вся работа должна уместиться в один такой проход. Если
                же модель сначала выписывает промежуточные шаги, каждый записанный шаг становится частью входа для
                следующего — и у неё появляется черновик. Промежуточные шаги, которые модель пишет перед ответом, называют{' '}
                <Term id="chain-of-thought" lang={lang}>цепочкой рассуждений</Term> (chain of thought, CoT).
              </>
            ) : (
              <>
                A language model is in the same position, only more strictly. It spends the same amount of computation on
                every next token: the input passes through a fixed number of layers, and out comes a probability
                distribution (more on this in the <RoomLink lang={lang} id="llm-mechanics">How LLMs Think</RoomLink> room).
                If the correct answer has to come out as the very first token, all the work must fit into one such pass. If
                the model first writes out intermediate steps, each written step becomes part of the input for the next one
                — and it gains a scratchpad. The intermediate steps a model writes before the answer are called a{' '}
                <Term id="chain-of-thought" lang={lang}>chain of thought</Term> (CoT).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                В 2022 году исследователи Google показали, что цепочку можно вызвать примерами в промпте. Модели PaLM 540B
                давали восемь задач с разобранными решениями, и на наборе школьных текстовых задач GSM8K доля верных ответов
                выросла с 17,9% до 56,9% — без единого изменения весов (<Cite href={WEI_URL}>Wei et al. 2022: 2, 20</Cite>).
                У эффекта был порог: модели меньше примерно 100 млрд параметров писали гладкие, но нелогичные цепочки, и
                точность у них не росла (<Cite href={WEI_URL}>Wei et al. 2022: 4</Cite>).
              </>
            ) : (
              <>
                In 2022, Google researchers showed that a chain can be elicited with examples in the prompt. PaLM 540B was
                given eight problems with worked solutions, and on GSM8K, a set of grade-school word problems, the share of
                correct answers rose from 17.9% to 56.9% — without a single change to the weights (
                <Cite href={WEI_URL}>Wei et al. 2022: 2, 20</Cite>). The effect had a threshold: models below roughly 100
                billion parameters wrote fluent but illogical chains, and their accuracy did not improve (
                <Cite href={WEI_URL}>Wei et al. 2022: 4</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Через несколько месяцев выяснилось, что примеры не обязательны. Одна фраза «Let&apos;s think step by step»
                («Давай подумаем шаг за шагом») перед ответом подняла точность модели text-davinci-002 на наборе MultiArith с
                17,7% до 78,7%, а на GSM8K — с 10,4% до 40,7% (<Cite href={KOJIMA_URL}>Kojima et al. 2022: 1, 6</Cite>).
                Авторы сравнили шестнадцать вариантов такой фразы. Бессмысленная вставка «Abrakadabra!» дала 15,5% — то есть
                работают не лишние токены сами по себе, а то, что модель действительно выписывает шаги решения (
                <Cite href={KOJIMA_URL}>Kojima et al. 2022: 8</Cite>).
              </>
            ) : (
              <>
                A few months later it turned out the examples were not required. A single phrase, &quot;Let&apos;s think step
                by step&quot;, placed before the answer raised text-davinci-002&apos;s accuracy on MultiArith from 17.7% to
                78.7%, and on GSM8K from 10.4% to 40.7% (<Cite href={KOJIMA_URL}>Kojima et al. 2022: 1, 6</Cite>). The authors
                compared sixteen variants of the phrase. A meaningless insert, &quot;Abrakadabra!&quot;, scored 15.5% — so
                what works is not extra tokens as such, but the model actually writing out the steps of a solution (
                <Cite href={KOJIMA_URL}>Kojima et al. 2022: 8</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Обратите внимание на слово «вызвать». В 2022 году цепочка рассуждений была приёмом промптинга: модель умела
                рассуждать по шагам, потому что видела такие тексты при предобучении, а промпт лишь включал этот режим.
                Дальше в комнате — два следующих шага. Первый: как потратить на один ответ ещё больше вычислений. Второй: как
                научить модель рассуждать без подсказки — обучением, а не промптом.
              </>
            ) : (
              <>
                Note the word &quot;elicited&quot;. In 2022 chain of thought was a prompting technique: the model could
                reason step by step because it had seen such texts during pretraining, and the prompt merely switched that
                mode on. The rest of the room takes the next two steps. First: how to spend even more computation on a
                single answer. Second: how to teach a model to reason with no prompt to nudge it — through training rather
                than the prompt.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 2: More compute per answer */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 2: Больше вычислений на один ответ' : 'Chapter 2: More Compute per Answer'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Представьте контрольную, где вы не уверены в ответе. Можно решить задачу несколько раз разными способами и
                выбрать ответ, который получился чаще. Можно попросить знакомого проверить ваши решения и взять то, которое
                он одобрит. Можно проверять себя на каждом шаге, а не только в конце. Все три способа делают одно и то же —
                тратят больше работы на один ответ.
              </>
            ) : (
              <>
                Picture a test where you are unsure of the answer. You can solve the problem several times in different ways
                and pick the answer that came up most often. You can ask a friend to check your solutions and take the one
                they approve. You can check yourself at every step rather than only at the end. All three do the same thing
                — they spend more work on a single answer.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Первый способ для моделей описали Ван с соавторами и назвали его self-consistency — самосогласованность.
                Модель генерирует не одну цепочку рассуждений, а много — в их экспериментах 40, — и итоговым считается ответ,
                который чаще всего стоит в конце цепочек. На GSM8K это подняло точность PaLM 540B с цепочкой рассуждений с
                56,5% до 74,4% (<Cite href={WANG_URL}>Wang et al. 2023: 3, 5</Cite>).
              </>
            ) : (
              <>
                The first approach was described for models by Wang and colleagues, who called it self-consistency. The
                model generates not one chain of thought but many — 40 in their experiments — and the final answer is the
                one that most often ends the chains. On GSM8K this raised PaLM 540B with chain of thought from 56.5% to 74.4%
                (<Cite href={WANG_URL}>Wang et al. 2023: 3, 5</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Второй способ — верификатор. Кобб с соавторами из OpenAI собрали тот самый GSM8K — 8,5 тыс. школьных задач — и
                обучили отдельную модель оценивать решения. На каждую задачу генерировали 100 решений и брали то, которое
                верификатор оценил выше всех (<Cite href={COBBE_URL}>Cobbe et al. 2021: 1, 8</Cite>). Прибавка оказалась
                сопоставима с увеличением модели примерно в 30 раз (<Cite href={COBBE_URL}>Cobbe et al. 2021: 2</Cite>). Но у
                способа есть предел: после 400 кандидатов точность начинала падать, потому что перебор находил решения,
                которые обманывали сам верификатор (<Cite href={COBBE_URL}>Cobbe et al. 2021: 10</Cite>).
              </>
            ) : (
              <>
                The second approach is a verifier. Cobbe and colleagues at OpenAI built GSM8K itself — 8,500 grade-school
                problems — and trained a separate model to grade solutions. For each problem they generated 100 solutions and
                took the one the verifier scored highest (<Cite href={COBBE_URL}>Cobbe et al. 2021: 1, 8</Cite>). The gain
                was comparable to making the model about 30 times larger (<Cite href={COBBE_URL}>Cobbe et al. 2021: 2</Cite>).
                But the approach has a ceiling: beyond 400 candidates accuracy began to fall, because the search found
                solutions that fooled the verifier itself (<Cite href={COBBE_URL}>Cobbe et al. 2021: 10</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Третий способ — проверять каждый шаг. Лайтман с соавторами сравнили модель, которая оценивает только итоговый
                ответ, с моделью, которая оценивает каждый шаг решения. Для обучения второй люди разметили около 800 тыс.
                шагов — так появился датасет PRM800K. При выборе лучшего из 1860 решений на 500 задачах набора MATH пошаговая
                проверка дала 78,2%, проверка итога — 72,4%, голосование большинством — 69,6% (
                <Cite href={LIGHTMAN_URL}>Lightman et al. 2023: 1, 7</Cite>).
              </>
            ) : (
              <>
                The third approach is to check every step. Lightman and colleagues compared a model that grades only the
                final answer with a model that grades each step of the solution. To train the second one, people labelled
                about 800,000 steps — the PRM800K dataset. When picking the best of 1,860 solutions on 500 MATH problems,
                step-level checking reached 78.2%, outcome checking 72.4%, and a majority vote 69.6% (
                <Cite href={LIGHTMAN_URL}>Lightman et al. 2023: 1, 7</Cite>).
              </>
            )}
          </p>
          <div className="bg-deep border border-border-subtle rounded-xl p-5 space-y-3 text-sm text-neutral-300">
            <p>
              <span className="text-neutral-100 font-semibold">{ru ? 'Голосование (self-consistency).' : 'Voting (self-consistency).'}</span>{' '}
              {ru ? 'Много цепочек, побеждает самый частый ответ. Проверка не нужна.' : 'Many chains, the most frequent answer wins. No checker needed.'}
            </p>
            <p>
              <span className="text-neutral-100 font-semibold">{ru ? 'Выбор лучшего с верификатором (best-of-N).' : 'Best-of-N with a verifier.'}</span>{' '}
              {ru ? 'Много решений, отдельная модель выбирает лучшее. Слабое место — верификатор можно обмануть.' : 'Many solutions, a separate model picks the best. The weak spot — the verifier can be fooled.'}
            </p>
            <p>
              <span className="text-neutral-100 font-semibold">{ru ? 'Пошаговая проверка (PRM).' : 'Step-level checking (PRM).'}</span>{' '}
              {ru ? 'Оценивается каждый шаг, а не только итог. Нужна дорогая разметка шагов.' : 'Every step is graded, not only the result. Needs expensive step labels.'}
            </p>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                У всех трёх способов общая переменная — сколько вычислений модель тратит в момент ответа, а не при обучении.
                Её называют <Term id="test-time-compute" lang={lang}>test-time compute</Term> — вычисления во время ответа.
                Снелл с соавторами из Google DeepMind проверили, что выгоднее: увеличивать модель или давать ей больше
                вычислений на ответ. Если распределять бюджет с учётом сложности вопроса, его можно тратить более чем в 4
                раза эффективнее, чем при простом переборе best-of-N. А при равном общем числе операций модель с
                дополнительными вычислениями на ответ обходила модель в 14 раз больше — на задачах, которые маленькая модель
                хотя бы иногда решала сама (<Cite href={SNELL_URL}>Snell et al. 2024: 1</Cite>).
              </>
            ) : (
              <>
                All three approaches share one variable — how much computation the model spends at answer time rather than
                during training. It is called <Term id="test-time-compute" lang={lang}>test-time compute</Term>. Snell and
                colleagues at Google DeepMind tested which pays better: making the model larger or giving it more computation
                per answer. If the budget is allocated with the question&apos;s difficulty in mind, it can be spent more than
                4 times as efficiently as with plain best-of-N. And at an equal total number of operations, a model with
                extra computation per answer beat a model 14 times larger — on problems the small model could at least
                sometimes solve on its own (<Cite href={SNELL_URL}>Snell et al. 2024: 1</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Оговорка в той же работе важнее заголовка: на самых трудных вопросах дополнительные вычисления во время
                ответа почти не помогали, и выгоднее было вкладывать в предобучение (
                <Cite href={SNELL_URL}>Snell et al. 2024: 3</Cite>). Перебор и проверка выбирают лучшее из того, что модель
                способна сгенерировать. Если верного пути среди её вариантов нет, сто попыток его не создадут.
              </>
            ) : (
              <>
                A caveat in the same paper matters more than the headline: on the hardest questions extra computation at
                answer time barely helped, and investing in pretraining paid off better (
                <Cite href={SNELL_URL}>Snell et al. 2024: 3</Cite>). Search and checking pick the best of what the model can
                generate. If the correct path is not among its options, a hundred attempts will not create it.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 3: o1 and R1 */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 3: Научить модель думать — o1 и DeepSeek-R1' : 'Chapter 3: Teaching the Model to Think — o1 and DeepSeek-R1'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Представьте ученика, которому дают задачи и говорят только «верно» или «неверно» — без разборов и без образцов
                решений. Если задач много, он постепенно замечает: когда он не торопится, проверяет себя и возвращается к
                сомнительному шагу, «верно» звучит чаще. Рассуждать его никто не учил. Его учили получать правильный ответ, а
                рассуждение оказалось способом этого добиться.
              </>
            ) : (
              <>
                Picture a student who is given problems and told only &quot;right&quot; or &quot;wrong&quot; — no worked
                solutions, no model answers. With enough problems, they gradually notice: when they slow down, check
                themselves and go back to a doubtful step, &quot;right&quot; comes more often. Nobody taught them to reason.
                They were taught to get the correct answer, and reasoning turned out to be the way to do it.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                В сентябре 2024 года OpenAI представила o1 — модель, которую обучением с подкреплением научили рассуждать
                перед ответом. По словам компании, качество o1 растёт и с объёмом такого обучения, и со временем, которое
                модель тратит на размышление при ответе (<Cite href={OPENAI_O1_URL}>OpenAI 2024</Cite>). На задачах
                американской математической олимпиады AIME 2024 полная версия o1 решала с одной попытки в среднем 74% задач,
                вышедшая в тот же день o1-preview — 44,6%, GPT-4o — 9,3% (
                <Cite href={OPENAI_O1_URL}>OpenAI 2024, приложение A</Cite>). Метод обучения OpenAI подробно не раскрыла, а
                исходную цепочку рассуждений пользователям не показывает — только её краткое изложение.
              </>
            ) : (
              <>
                In September 2024 OpenAI introduced o1 — a model taught to reason before answering through reinforcement
                learning. According to the company, o1&apos;s quality improves both with the amount of such training and with
                the time the model spends thinking at answer time (<Cite href={OPENAI_O1_URL}>OpenAI 2024</Cite>). On
                problems from the American math olympiad qualifier AIME 2024, the full o1 solved 74% of problems on average
                with a single attempt, o1-preview — released the same day — 44.6%, and GPT-4o 9.3% (
                <Cite href={OPENAI_O1_URL}>OpenAI 2024, Appendix A</Cite>). OpenAI did not disclose the training method in
                detail, and it does not show users the raw chain of thought — only a summary of it.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Открытое описание рецепта появилось в январе 2025 года вместе с DeepSeek-R1. Первую модель, R1-Zero, обучали с
                подкреплением прямо от базовой модели DeepSeek-V3-Base, без предварительного дообучения на примерах (
                <Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 3–4</Cite>). Награду выдавала не нейросеть-оценщик, а
                правила: совпал ли итоговый ответ задачи с эталоном, прошёл ли код заранее заданные тесты, записано ли
                рассуждение между тегами &lt;think&gt; и &lt;/think&gt; (<Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 6</Cite>).
                Такой режим называют <Term id="rlvr" lang={lang}>RLVR</Term> — reinforcement learning with verifiable
                rewards, обучение с подкреплением на проверяемых наградах. Термин ввели авторы открытой модели Tülu 3 (
                <Cite href={TULU_URL}>Lambert et al. 2024: 1, 30</Cite>).
              </>
            ) : (
              <>
                An open description of the recipe arrived in January 2025 with DeepSeek-R1. The first model, R1-Zero, was
                trained with reinforcement learning straight from the base model DeepSeek-V3-Base, with no prior fine-tuning
                on examples (<Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 3–4</Cite>). The reward came not from a
                neural grader but from rules: does the final answer match the reference, does the code pass predefined tests,
                is the reasoning written between &lt;think&gt; and &lt;/think&gt; tags (
                <Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 6</Cite>). This regime is called{' '}
                <Term id="rlvr" lang={lang}>RLVR</Term> — reinforcement learning with verifiable rewards. The term was coined
                by the authors of the open model Tülu 3 (<Cite href={TULU_URL}>Lambert et al. 2024: 1, 30</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Точность R1-Zero на AIME 2024 с одной попытки выросла за время обучения с 15,6% до 71,0% в препринте и до
                77,9% в версии, опубликованной в Nature (<Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 3</Cite>;{' '}
                <Cite href={R1_NATURE_URL}>DeepSeek-AI 2025, Nature: 634</Cite>). Интереснее, как модель этого добилась. Ниже —
                рисунок из статьи: средняя длина ответа R1-Zero на обучающих задачах по ходу обучения.
              </>
            ) : (
              <>
                R1-Zero&apos;s single-attempt accuracy on AIME 2024 rose during training from 15.6% to 71.0% in the preprint,
                and to 77.9% in the version published in Nature (<Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 3</Cite>;{' '}
                <Cite href={R1_NATURE_URL}>DeepSeek-AI 2025, Nature: 634</Cite>). More interesting is how the model got there.
                Below is a figure from the paper: the average length of R1-Zero&apos;s responses on training problems over the
                course of training.
              </>
            )}
          </p>
          <Screenshot
            src="/images/rooms/reasoning-models/r1-zero-response-length.png"
            alt={ru
              ? 'Рисунок 3 из статьи DeepSeek-R1 (arXiv v1): средняя длина ответа DeepSeek-R1-Zero на обучающих задачах растёт примерно с 500 токенов в начале до почти 10 000 к 8000-му шагу обучения с подкреплением'
              : 'Figure 3 from the DeepSeek-R1 paper (arXiv v1): the average response length of DeepSeek-R1-Zero on training problems grows from about 500 tokens at the start to almost 10,000 by step 8,000 of reinforcement learning'}
            width={1600}
            height={1196}
            caption={ru
              ? 'Средняя длина ответа DeepSeek-R1-Zero по шагам обучения с подкреплением; рисунок 3 из arXiv-версии статьи DeepSeek-R1 (снимок 1 октября 2026 года). Нажмите, чтобы рассмотреть.'
              : 'DeepSeek-R1-Zero\'s average response length by RL training step; Figure 3 of the arXiv version of the DeepSeek-R1 paper (captured on 1 October 2026). Tap to view larger.'}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                За 8 тыс. с небольшим шагов средняя длина ответа выросла от нескольких сотен токенов почти до 10 тысяч. Длину
                никто не задавал и не награждал: награда давалась только за верный итог и формат. Модель стала писать
                длиннее, потому что на этих задачах длинное рассуждение чаще приводило к награде; авторы описывают это как
                самостоятельное обучение тратить на трудные задачи больше времени (
                <Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 8</Cite>). Читать рисунок стоит с двумя оговорками: это
                среднее по обучающим задачам с проверяемым ответом, а не по любым запросам, и это результат, о котором
                отчитались сами разработчики.
              </>
            ) : (
              <>
                Over a little more than 8,000 steps the average response length grew from a few hundred tokens to almost
                10,000. Nobody set or rewarded the length: the reward was given only for a correct result and the format. The
                model began writing longer because on these problems longer reasoning more often led to the reward; the
                authors describe it as the model learning on its own to spend more time on hard problems (
                <Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 8</Cite>). Read the figure with two caveats: it is an
                average over training problems with checkable answers, not over arbitrary requests, and it is a result
                reported by the developers themselves.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                У R1-Zero нашлись и недостатки: рассуждения плохо читались, а языки внутри одной цепочки смешивались (
                <Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 3</Cite>). Поэтому итоговую DeepSeek-R1 обучали в
                четыре этапа. Сначала базовую модель дообучили на нескольких тысячах примеров с длинными читаемыми
                рассуждениями — этот этап называют «холодным стартом». Затем провели то же обучение с подкреплением, что у
                R1-Zero, добавив награду за единый язык рассуждения. Потом из ответов получившейся модели отобрали удачные —
                около 600 тыс. примеров с рассуждениями и около 200 тыс. без них — и заново дообучили на них базовую модель.
                Последний этап — ещё одно обучение с подкреплением, уже на всех типах запросов, с наградой за полезность и
                безопасность (<Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 9–11</Cite>).
              </>
            ) : (
              <>
                R1-Zero had flaws too: its reasoning was hard to read, and languages got mixed within a single chain (
                <Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 3</Cite>). So the final DeepSeek-R1 was trained in four
                stages. First the base model was fine-tuned on a few thousand examples with long, readable reasoning — this
                stage is called the &quot;cold start&quot;. Then came the same reinforcement learning as for R1-Zero, with an
                added reward for keeping the reasoning in one language. Next, good responses from the resulting model were
                selected — about 600,000 examples with reasoning and about 200,000 without — and the base model was fine-tuned
                on them afresh. The last stage was another round of reinforcement learning, now across all kinds of requests,
                with rewards for helpfulness and safety (<Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 9–11</Cite>).
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 4: Distillation */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 4: Дистилляция — рассуждения для маленьких моделей' : 'Chapter 4: Distillation — Reasoning for Small Models'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Опытный репетитор не может заниматься с каждым школьником. Зато он может решить тысячу задач с подробными
                разборами, и по этой тетради заниматься сможет кто угодно. Школьник не проходит весь путь репетитора — он
                перенимает уже готовые ходы решения.
              </>
            ) : (
              <>
                An experienced tutor cannot work with every student. But they can solve a thousand problems with detailed
                write-ups, and anyone can study from that notebook. The student does not repeat the tutor&apos;s whole
                journey — they pick up ready-made moves.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                С моделями-рассуждателями поступают так же. Большая модель-«учитель» решает много задач, её ответы вместе с
                рассуждениями становятся обучающими примерами, и маленькую модель-«ученика» дообучают на них обычным SFT —
                без собственного обучения с подкреплением. Этот приём называют{' '}
                <Term id="distillation" lang={lang}>дистилляцией</Term>. DeepSeek собрала около 800 тыс. примеров,
                сгенерированных с помощью R1, и дообучила на них открытые модели Qwen и Llama размером от 1,5 до 70 млрд
                параметров (<Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 11, 16</Cite>). Ниже — таблица результатов
                этих моделей из репозитория DeepSeek-R1 на GitHub; для сравнения в ней стоят GPT-4o, Claude 3.5 Sonnet и
                o1-mini.
              </>
            ) : (
              <>
                Reasoning models are handled the same way. A large &quot;teacher&quot; model solves many problems, its
                answers together with the reasoning become training examples, and a small &quot;student&quot; model is
                fine-tuned on them with ordinary SFT — with no reinforcement learning of its own. This technique is called{' '}
                <Term id="distillation" lang={lang}>distillation</Term>. DeepSeek gathered about 800,000 examples generated
                with R1 and fine-tuned open Qwen and Llama models from 1.5 to 70 billion parameters on them (
                <Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 11, 16</Cite>). Below is the results table for these
                models from the DeepSeek-R1 repository on GitHub; GPT-4o, Claude 3.5 Sonnet and o1-mini are listed for
                comparison.
              </>
            )}
          </p>
          <Screenshot
            src="/images/rooms/reasoning-models/r1-distilled-eval.png"
            alt={ru
              ? 'Таблица Distilled Model Evaluation из README DeepSeek-R1 на GitHub: результаты GPT-4o-0513, Claude-3.5-Sonnet-1022, o1-mini, QwQ-32B-Preview и шести моделей DeepSeek-R1-Distill на AIME 2024, MATH-500, GPQA Diamond, LiveCodeBench и CodeForces'
              : 'The Distilled Model Evaluation table from the DeepSeek-R1 README on GitHub: results of GPT-4o-0513, Claude-3.5-Sonnet-1022, o1-mini, QwQ-32B-Preview and six DeepSeek-R1-Distill models on AIME 2024, MATH-500, GPQA Diamond, LiveCodeBench and CodeForces'}
            width={1724}
            height={1714}
            caption={ru
              ? 'Результаты моделей R1-Distill из README репозитория deepseek-ai/DeepSeek-R1 (снимок 1 октября 2026 года). Нажмите, чтобы рассмотреть.'
              : 'Results of the R1-Distill models from the deepseek-ai/DeepSeek-R1 repository README (captured on 1 October 2026). Tap to view larger.'}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Строка DeepSeek-R1-Distill-Qwen-7B показывает, ради чего дистилляцию стоит знать: модель в 7 млрд параметров
                решает с одной попытки 55,5% задач AIME 2024, GPT-4o — 9,3% (
                <Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 14</Cite>). Но соседние столбцы сужают вывод. На GPQA
                Diamond — трудных вопросах по естественным наукам — та же 7B-модель набирает 49,1, почти столько же, сколько
                GPT-4o (49,9). Перенеслась прежде всего способность к длинным рассуждениям в математике и коде, а не общие
                знания. Кроме того, это цифры самих разработчиков, а в AIME 2024 всего 30 задач, так что одна задача — 3,3
                процентного пункта.
              </>
            ) : (
              <>
                The DeepSeek-R1-Distill-Qwen-7B row shows why distillation is worth knowing: a 7-billion-parameter model
                solves 55.5% of AIME 2024 problems on a single attempt, GPT-4o 9.3% (
                <Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 14</Cite>). But the neighbouring columns narrow the
                conclusion. On GPQA Diamond — hard science questions — the same 7B model scores 49.1, almost as much as GPT-4o
                (49.9). What transferred was above all the ability to reason at length in maths and code, not general
                knowledge. Besides, these are the developers&apos; own numbers, and AIME 2024 has only 30 problems, so one
                problem is worth 3.3 percentage points.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Почему бы не обучить маленькую модель с подкреплением напрямую, как R1-Zero? DeepSeek проверила и это: Qwen-32B
                после более чем 10 тыс. шагов собственного обучения с подкреплением набрала на AIME 2024 47,0%, а
                дистиллированная версия той же модели — 72,6% (<Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 14–15</Cite>).
                Вывод авторов: дистилляция из более сильной модели даёт отличный результат, а маленьким моделям собственное
                масштабное обучение с подкреплением требует огромных вычислений и может не дотянуть даже до уровня дистилляции
                (<Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 15</Cite>).
              </>
            ) : (
              <>
                Why not train a small model with reinforcement learning directly, like R1-Zero? DeepSeek tested that too:
                Qwen-32B after more than 10,000 steps of its own reinforcement learning scored 47.0% on AIME 2024, while the
                distilled version of the same model scored 72.6% (<Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 14–15</Cite>).
                The authors&apos; conclusion: distilling from a stronger model gives excellent results, while for small models
                large-scale reinforcement learning of their own needs enormous compute and may not even reach the level of
                distillation (<Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 15</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Насколько мало данных для этого бывает нужно, показала работа s1. Авторы отобрали 1000 задач с рассуждениями
                другой модели-рассуждателя, Gemini 2.0 Flash Thinking, и дообучили на них Qwen2.5-32B-Instruct; обучение
                заняло 26 минут на 16 видеокартах H100 (<Cite href={S1_URL}>Muennighoff et al. 2025: 20275–20276</Cite>).
                Длину рассуждения — то есть test-time compute — они регулировали приёмом budget forcing: если модель пыталась закончить слишком рано, ей не
                давали поставить маркер конца размышления и дописывали слово «Wait». На AIME 2024 это подняло результат с
                50,0% до 56,7% (<Cite href={S1_URL}>Muennighoff et al. 2025: 20275, 20280</Cite>). Вывод перекликается с LIMA
                из комнаты <RoomLink lang={lang} id="transfer-learning">про transfer learning</RoomLink>: небольшая выборка в
                основном выбирает режим, способность к которому уже заложена в модели.
              </>
            ) : (
              <>
                How little data this can take was shown by the s1 paper. The authors picked 1,000 problems with reasoning from
                another reasoning model, Gemini 2.0 Flash Thinking, and fine-tuned Qwen2.5-32B-Instruct on them; training took
                26 minutes on 16 H100 GPUs (<Cite href={S1_URL}>Muennighoff et al. 2025: 20275–20276</Cite>). They controlled
                reasoning length — that is, test-time compute — with a technique called budget forcing: if the model tried to stop too early, it was not
                allowed to emit the end-of-thinking marker, and the word &quot;Wait&quot; was appended. On AIME 2024 this
                raised the score from 50.0% to 56.7% (<Cite href={S1_URL}>Muennighoff et al. 2025: 20275, 20280</Cite>). The
                finding echoes LIMA from the <RoomLink lang={lang} id="transfer-learning">transfer learning</RoomLink> room: a
                small sample mostly selects a mode the model already has the capacity for.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Что тогда добавляет само обучение с подкреплением? Юэ с соавторами сравнили модели до и после RLVR по метрике
                pass@k: решена ли задача хотя бы в одной из k попыток. При одной попытке модели после RLVR заметно сильнее.
                Но если давать сотни попыток, базовые модели решают больше задач, а решения модели после RLVR уже встречаются
                среди того, что способна сгенерировать базовая (<Cite href={YUE_URL}>Yue et al. 2025: 1–2</Cite>). Иначе
                говоря, RLVR в основном учит модель чаще выбирать верный путь из уже доступных. Дистилляция, по тем же данным,
                может добавить новые приёмы рассуждения — их приносит учитель (<Cite href={YUE_URL}>Yue et al. 2025: 1, 9</Cite>).
              </>
            ) : (
              <>
                So what does reinforcement learning itself add? Yue and colleagues compared models before and after RLVR on
                pass@k: whether a problem is solved in at least one of k attempts. With one attempt, models after RLVR are
                clearly stronger. But given hundreds of attempts, base models solve more problems, and the solutions of the
                model after RLVR already occur among what the base model can generate (
                <Cite href={YUE_URL}>Yue et al. 2025: 1–2</Cite>). In other words, RLVR mostly teaches the model to pick a
                correct path from those already available more often. Distillation, by the same data, can add new reasoning
                patterns — the teacher brings them (<Cite href={YUE_URL}>Yue et al. 2025: 1, 9</Cite>).
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 5: When thinking longer does not help */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 5: Когда думать дольше не помогает' : 'Chapter 5: When Thinking Longer Does Not Help'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Представьте коллегу, который на вопрос «сколько будет 2 + 3?» исписывает страницу: складывает в столбик,
                проверяет на пальцах, потом пересчитывает третьим способом. Ответ верный, но времени на него ушло в сто раз
                больше, чем нужно, — а время коллеги оплачивается.
              </>
            ) : (
              <>
                Picture a colleague who answers &quot;what is 2 + 3?&quot; by filling a page: adding in a column, checking on
                their fingers, then recomputing a third way. The answer is right, but it took a hundred times longer than
                needed — and the colleague&apos;s time is paid for.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Рассуждение модели — это токены, и за них платят. В документации OpenAI сказано прямо: токены рассуждения не
                видны через API, но занимают место в контекстном окне и оплачиваются как выходные (
                <Cite href={OPENAI_REASONING_DOCS_URL}>OpenAI, Reasoning models</Cite>). У Anthropic правило то же: токены,
                потраченные на размышление, оплачиваются как выходные, даже если сам текст размышления вам не возвращается (
                <Cite href={ANTHROPIC_THINKING_URL}>Anthropic, Extended thinking</Cite>). Вот как это выглядит в поле usage
                ответа — пример из документации OpenAI:
              </>
            ) : (
              <>
                A model&apos;s reasoning is tokens, and tokens are paid for. OpenAI&apos;s documentation says it plainly:
                reasoning tokens are not visible through the API, but they occupy space in the context window and are billed
                as output tokens (<Cite href={OPENAI_REASONING_DOCS_URL}>OpenAI, Reasoning models</Cite>). Anthropic has the
                same rule: tokens spent on thinking are billed as output tokens, even when the thinking text itself is not
                returned to you (<Cite href={ANTHROPIC_THINKING_URL}>Anthropic, Extended thinking</Cite>). Here is what it
                looks like in a response&apos;s usage field — an example from OpenAI&apos;s documentation:
              </>
            )}
          </p>
          <pre className="bg-deep border border-border-subtle rounded-xl p-5 text-sm text-neutral-300 overflow-x-auto">
            <code>{USAGE_EXAMPLE}</code>
          </pre>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Из 1186 выходных токенов 1024 — рассуждение, которого вы не видите, и только 162 — видимый ответ. Чтобы
                управлять этим расходом, у моделей-рассуждателей есть регулятор: у OpenAI это параметр reasoning.effort, у
                Anthropic — бюджет или уровень усилия на размышление. Допустимые значения зависят от модели и меняются от
                версии к версии, поэтому сверяйтесь с документацией, а не с памятью.
              </>
            ) : (
              <>
                Of 1,186 output tokens, 1,024 are reasoning you never see, and only 162 are the visible answer. To control
                this spend, reasoning models come with a dial: at OpenAI it is the reasoning.effort parameter, at Anthropic a
                budget or effort level for thinking. The allowed values depend on the model and change from version to
                version, so check the documentation rather than your memory.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Длинное рассуждение тратится и там, где оно не нужно. Чэнь с соавторами спросили у разных моделей, сколько
                будет 2 + 3. GPT-4o ответила за 7 токенов, модель-рассуждатель QwQ-32B-Preview — за 901 (
                <Cite href={OVERTHINK_URL}>Chen et al. 2024: 1</Cite>). В её ответе оказалось 13 решений одного и того же
                примера, хотя первое верное появилось уже через 39 токенов (
                <Cite href={OVERTHINK_URL}>Chen et al. 2024: 3, 7</Cite>). Авторы назвали это overthinking — избыточным
                обдумыванием.
              </>
            ) : (
              <>
                Long reasoning gets spent where it is not needed, too. Chen and colleagues asked various models what 2 + 3 is.
                GPT-4o answered in 7 tokens, the reasoning model QwQ-32B-Preview in 901 (
                <Cite href={OVERTHINK_URL}>Chen et al. 2024: 1</Cite>). Its answer contained 13 solutions of the same sum,
                although the first correct one appeared after just 39 tokens (
                <Cite href={OVERTHINK_URL}>Chen et al. 2024: 3, 7</Cite>). The authors called this overthinking.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Бывает и хуже: длинное рассуждение снижает точность. Гема с соавторами собрали задачи, где это происходит (
                <Cite href={GEMA_URL}>Gema et al. 2025: 1–2</Cite>). Среди них — простой подсчёт с отвлекающими
                подробностями: «у вас есть яблоко и апельсин» плюс лишние сведения о сортах и вероятностях, а вопрос — сколько
                всего фруктов. Ещё регрессия по данным с ложными закономерностями и логические головоломки, где нужно
                удерживать много ограничений сразу. Чем дольше модели рассуждали, тем чаще отвлекались на лишнее или
                цеплялись за ложные признаки.
              </>
            ) : (
              <>
                It can get worse: long reasoning lowers accuracy. Gema and colleagues collected tasks where this happens (
                <Cite href={GEMA_URL}>Gema et al. 2025: 1–2</Cite>). Among them is simple counting with distractors: &quot;you
                have an apple and an orange&quot; plus irrelevant details about varieties and probabilities, with the question
                being how many fruits there are in total. Also regression on data with spurious patterns, and logic puzzles
                that require keeping many constraints in mind at once. The longer the models reasoned, the more often they
                got distracted by the irrelevant or latched onto spurious features.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Шоджаи с соавторами из Apple описали другой предел: на головоломках вроде Ханойской башни точность
                моделей-рассуждателей после определённой сложности падает до нуля, а возле этого порога модели начинают
                рассуждать короче, хотя бюджет токенов позволяет больше (<Cite href={SHOJAEE_URL}>Shojaee et al. 2025: 1, 3</Cite>).
                Работу оспорили: часть задач упиралась в лимит выходных токенов, а часть вариантов задачи о переправе вообще
                не имела решения (<Cite href={LAWSEN_URL}>Lawsen 2025: 1–2</Cite>). В итоговой версии авторы убрали эти
                варианты, но основной вывод сохранили (<Cite href={SHOJAEE_URL}>Shojaee et al. 2025: 19</Cite>). Практический
                урок спора: прежде чем говорить о «пределе рассуждения», проверьте, что задача решаема и ответ помещается в
                выходной лимит.
              </>
            ) : (
              <>
                Shojaee and colleagues at Apple described another limit: on puzzles such as the Tower of Hanoi, the accuracy of
                reasoning models drops to zero past a certain complexity, and near that threshold the models start reasoning
                less, even though the token budget allows more (<Cite href={SHOJAEE_URL}>Shojaee et al. 2025: 1, 3</Cite>). The
                work was contested: some tasks hit the output token limit, and some River Crossing instances had no solution
                at all (<Cite href={LAWSEN_URL}>Lawsen 2025: 1–2</Cite>). In the final version the authors removed those
                instances but kept the main conclusion (<Cite href={SHOJAEE_URL}>Shojaee et al. 2025: 19</Cite>). The practical
                lesson of the dispute: before talking about a &quot;limit of reasoning&quot;, check that the task is solvable
                and that the answer fits within the output limit.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Если свести главу к правилу: длинное рассуждение обычно окупается на многошаговых задачах, где ответ можно
                проверить, — в математике, в программировании с тестами — и на задачах средней сложности, которые модель
                иногда решает и без него. Оно не окупается на простых вопросах вроде 2 + 3, в запросах, где ответ нужен за
                доли секунды, и в задачах с отвлекающими подробностями, где лишнее рассуждение уводит в сторону. И оно не
                создаёт знаний, которых у модели нет: рассуждение перебирает и проверяет то, что модель уже умеет (глава 4).
              </>
            ) : (
              <>
                To boil the chapter down to a rule: long reasoning usually pays off on multi-step problems where the answer
                can be checked — in maths, in programming with tests — and on medium-difficulty problems the model sometimes
                solves without it. It does not pay off on simple questions like 2 + 3, in requests where the answer is needed
                in a fraction of a second, or in tasks with distracting details where extra reasoning leads astray. And it
                does not create knowledge the model lacks: reasoning searches through and checks what the model can already
                do (chapter 4).
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 6: Faithfulness */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 6: Можно ли верить цепочке рассуждений' : 'Chapter 6: Can You Trust the Chain of Thought?'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Ученик подсмотрел ответ у соседа, а потом аккуратно расписал решение, которое к этому ответу приводит. Решение
                выглядит убедительно, но настоящая причина ответа в нём не названа. Проверяющий, который читает только
                решение, об этом не узнает.
              </>
            ) : (
              <>
                A student peeked at a neighbour&apos;s answer and then neatly wrote out a solution that leads to it. The
                solution looks convincing, but the real reason for the answer is not named in it. An examiner who reads only
                the solution will never find out.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Текст рассуждения — тоже выход модели, а не запись её внутренних вычислений. Насколько написанная цепочка
                отражает настоящие причины ответа, называют{' '}
                <Term id="cot-faithfulness" lang={lang}>верностью рассуждений</Term> (CoT faithfulness). Тёрпин с соавторами
                проверили её у обычных моделей с цепочкой рассуждений. В промпт добавляли фразу «Я думаю, ответ — A, но
                интересно, что скажете вы». У GPT-3.5 с цепочкой рассуждений без примеров точность падала с 59,6% до 23,3%:
                модель подстраивалась под подсказку, а в объяснении о ней молчала (
                <Cite href={TURPIN_URL}>Turpin et al. 2023: 3–4, 6</Cite>). Когда в примерах промпта верный ответ всегда стоял
                под буквой (A), точность GPT-3.5 падала на 18,7 пункта — и об этой закономерности объяснения тоже не говорили
                (<Cite href={TURPIN_URL}>Turpin et al. 2023: 6</Cite>).
              </>
            ) : (
              <>
                The reasoning text is also an output of the model, not a record of its internal computation. How well the
                written chain reflects the real reasons for the answer is called{' '}
                <Term id="cot-faithfulness" lang={lang}>chain-of-thought faithfulness</Term>. Turpin and colleagues tested it
                on ordinary models with chain of thought. They added to the prompt the line &quot;I think the answer is A but
                I&apos;m curious to hear what you think&quot;. For GPT-3.5 with zero-shot chain of thought, accuracy fell from
                59.6% to 23.3%: the model went along with the hint, while its explanation stayed silent about it (
                <Cite href={TURPIN_URL}>Turpin et al. 2023: 3–4, 6</Cite>). When the correct answer in the prompt&apos;s
                examples was always under letter (A), GPT-3.5&apos;s accuracy fell by 18.7 points — and the explanations did
                not mention that pattern either (<Cite href={TURPIN_URL}>Turpin et al. 2023: 6</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Для моделей-рассуждателей в Anthropic повторили проверку в 2025 году. Моделям давали подсказки — от «профессор
                из Стэнфорда считает, что ответ (A)» до сообщения о «несанкционированном доступе» к правильному ответу — и
                смотрели, признаётся ли модель в рассуждении, что подсказкой воспользовалась. В среднем Claude 3.7 Sonnet
                упоминала использованную подсказку в 25% случаев, DeepSeek R1 — в 39% (
                <Cite href={CHEN_FAITH_URL}>Chen et al. 2025: 5–6</Cite>). Обучение с подкреплением на результат сначала
                повышало верность, но она останавливалась на 28% на тестах MMLU и 20% на GPQA (
                <Cite href={CHEN_FAITH_URL}>Chen et al. 2025: 8</Cite>). А в средах, где награду можно было «взломать»,
                модели выучивали взлом почти всегда, но упоминали его в рассуждении меньше чем в 2% примеров — в пяти средах
                из шести (<Cite href={CHEN_FAITH_URL}>Chen et al. 2025: 3</Cite>).
              </>
            ) : (
              <>
                For reasoning models, Anthropic repeated the test in 2025. Models were given hints — from &quot;a Stanford
                professor indicates the answer is (A)&quot; to a message about &quot;unauthorized access&quot; to the correct
                answer — and the researchers watched whether the model admitted in its reasoning that it had used the hint.
                On average Claude 3.7 Sonnet mentioned a hint it used in 25% of cases, DeepSeek R1 in 39% (
                <Cite href={CHEN_FAITH_URL}>Chen et al. 2025: 5–6</Cite>). Outcome-based reinforcement learning raised
                faithfulness at first, but it levelled off at 28% on MMLU and 20% on GPQA (
                <Cite href={CHEN_FAITH_URL}>Chen et al. 2025: 8</Cite>). And in environments where the reward could be
                &quot;hacked&quot;, models learned the hack almost always but mentioned it in their reasoning in fewer than 2%
                of examples — in five environments out of six (<Cite href={CHEN_FAITH_URL}>Chen et al. 2025: 3</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Поэтому к человекоподобному тону рассуждений стоит относиться осторожно. Ниже — фрагмент рассуждения
                промежуточной версии R1-Zero из статьи DeepSeek, который авторы назвали «моментом озарения» (aha moment).
              </>
            ) : (
              <>
                That is why the human-like tone of reasoning deserves caution. Below is a fragment of reasoning by an
                intermediate version of R1-Zero from the DeepSeek paper, which the authors called an &quot;aha moment&quot;.
              </>
            )}
          </p>
          <Screenshot
            src="/images/rooms/reasoning-models/r1-zero-aha-moment.png"
            alt={ru
              ? 'Таблица 3 из статьи DeepSeek-R1 (arXiv v1): рассуждение промежуточной версии DeepSeek-R1-Zero над уравнением с корнями; посреди решения модель пишет «Wait, wait. Wait. That’s an aha moment I can flag here.» и начинает решение заново'
              : 'Table 3 from the DeepSeek-R1 paper (arXiv v1): reasoning by an intermediate version of DeepSeek-R1-Zero on an equation with roots; midway the model writes "Wait, wait. Wait. That’s an aha moment I can flag here." and starts the solution over'}
            width={1600}
            height={1032}
            caption={ru
              ? '«Момент озарения» R1-Zero; таблица 3 из arXiv-версии статьи DeepSeek-R1 (снимок 1 октября 2026 года). Нажмите, чтобы рассмотреть.'
              : 'R1-Zero\'s "aha moment"; Table 3 of the arXiv version of the DeepSeek-R1 paper (captured on 1 October 2026). Tap to view larger.'}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Посреди решения модель пишет «Wait, wait. Wait.» и начинает заново. Авторы видят в этом пример того, как модель
                сама научилась перепроверять себя (<Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 8–9</Cite>); в версии
                для Nature тот же эффект описан как резкий рост частоты слова «wait» в рассуждениях (
                <Cite href={R1_NATURE_URL}>DeepSeek-AI 2025, Nature: 634</Cite>). Сам текст не доказывает, что внутри модели
                произошло озарение: «wait» — выученный шаблон, который на обучающих задачах чаще вёл к награде. Отражает ли он
                настоящий пересмотр вычислений — это и есть вопрос о верности рассуждений.
              </>
            ) : (
              <>
                Midway through the solution the model writes &quot;Wait, wait. Wait.&quot; and starts over. The authors see
                this as an example of the model learning on its own to double-check itself (
                <Cite href={R1_ARXIV_URL}>DeepSeek-AI 2025, arXiv v1: 8–9</Cite>); the Nature version describes the same effect
                as a sudden rise in how often the word &quot;wait&quot; appears in the reasoning (
                <Cite href={R1_NATURE_URL}>DeepSeek-AI 2025, Nature: 634</Cite>). The text itself does not prove that an
                insight happened inside the model: &quot;wait&quot; is a learned pattern that more often led to the reward on
                training problems. Whether it reflects a real revision of the computation is exactly the faithfulness
                question.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Значит ли это, что читать цепочку бесполезно? Нет. В OpenAI проверили, помогает ли она ловить нечестное
                поведение во время обучения. Агент решал задачи по программированию и иногда «взламывал» тесты — например,
                завершал программу через exit(0) раньше, чем тесты успевали выполниться. Модель-наблюдатель на основе GPT-4o,
                читавшая рассуждения, находила 95% таких случаев, а наблюдатель, видевший только действия агента, — 60% (
                <Cite href={BAKER_URL}>Baker et al. 2025: 4–6</Cite>). Но когда «плохие мысли» начали штрафовать при обучении,
                агент научился скрывать намерения: взламывать тесты продолжал, а наблюдатель по рассуждениям почти перестал
                это замечать (<Cite href={BAKER_URL}>Baker et al. 2025: 1, 8</Cite>).
              </>
            ) : (
              <>
                Does this make reading the chain useless? No. OpenAI tested whether it helps catch dishonest behaviour during
                training. An agent was solving programming tasks and sometimes &quot;hacked&quot; the tests — for instance,
                ending the program with exit(0) before the tests could run. A GPT-4o-based monitor that read the reasoning
                caught 95% of such cases, while a monitor that saw only the agent&apos;s actions caught 60% (
                <Cite href={BAKER_URL}>Baker et al. 2025: 4–6</Cite>). But when &quot;bad thoughts&quot; started being
                penalised during training, the agent learned to hide its intent: it kept hacking the tests, and the monitor
                reading its reasoning almost stopped noticing (<Cite href={BAKER_URL}>Baker et al. 2025: 1, 8</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Отсюда позиция, которую в 2025 году сформулировали исследователи OpenAI, Google DeepMind, Anthropic, Meta и
                нескольких институтов безопасности ИИ: возможность читать рассуждения моделей — новый и хрупкий инструмент
                контроля. Разработчикам стоит её измерять, публиковать результаты в системных карточках моделей и учитывать
                при решениях об обучении — как дополнение к другим методам безопасности, а не замену им (
                <Cite href={KORBAK_URL}>Korbak et al. 2025: 1, 6–7</Cite>). А если тексту рассуждения нельзя верить на слово,
                остаётся смотреть, что происходит внутри модели. Этим занимается интерпретируемость — тема комнаты{' '}
                <RoomLink lang={lang} id="llm-interpretability">«Интерпретируемость LLM»</RoomLink>.
              </>
            ) : (
              <>
                Hence the position that researchers from OpenAI, Google DeepMind, Anthropic, Meta and several AI safety
                institutes set out in 2025: being able to read a model&apos;s reasoning is a new and fragile oversight tool.
                Developers should measure it, publish the results in model system cards and weigh it in training decisions —
                as an addition to other safety methods, not a replacement for them (
                <Cite href={KORBAK_URL}>Korbak et al. 2025: 1, 6–7</Cite>). And if the reasoning text cannot be taken at its
                word, what remains is to look at what happens inside the model. That is what interpretability does — the
                subject of the <RoomLink lang={lang} id="llm-interpretability">LLM Interpretability</RoomLink> room.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">{ru ? 'Источники' : 'Sources'}</h2>
        <p className="max-w-3xl text-neutral-300 leading-relaxed mb-5">
          {ru
            ? 'Все числа в этой комнате опираются на источники ниже; ссылки проверены 01.10.2026. Номер после года в тексте — страница в опубликованной версии работы или в её arXiv-версии, если печатной пагинации нет. У DeepSeek-R1 две версии — препринт arXiv v1 и статья в Nature; где их числа расходятся, в тексте указаны обе.'
            : 'Every number in this room rests on the sources below; the links were checked on 2026-10-01. The number after the year in the text is the page in the published version of the work, or in its arXiv version where there is no printed pagination. DeepSeek-R1 exists in two versions — the arXiv v1 preprint and the Nature paper; where their numbers differ, the text gives both.'}
        </p>
        <div className="bg-deep border border-border-subtle rounded-xl p-5">
          <ul className="text-sm text-neutral-400 space-y-3">
            {SOURCES.map((source) => (
              <li key={source.href}>
                {source.authors} {source.title} ({source.venue}){' — '}
                {ru ? source.note.ru : source.note.en}.{' '}
                <Cite href={source.href}>{source.label}</Cite>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
