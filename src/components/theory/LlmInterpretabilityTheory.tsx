"use client";

import React from 'react';
import Link from 'next/link';
import Term from '@/components/Term';
import Screenshot from '@/components/Screenshot';

type LocalizedText = { ru: string; en: string };

const DOSHI_URL = 'https://arxiv.org/abs/1702.08608';
const RUDIN_URL = 'https://doi.org/10.1038/s42256-019-0048-x';
const AI_ACT_URL = 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj';
const OMNIBUS_URL = 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj';
const JAIN_URL = 'https://doi.org/10.18653/v1/N19-1357';
const WIEGREFFE_URL = 'https://doi.org/10.18653/v1/D19-1002';
const ADEBAYO_URL = 'https://arxiv.org/abs/1810.03292';
const FRAMEWORK_URL = 'https://transformer-circuits.pub/2021/framework/index.html';
const ALAIN_URL = 'https://arxiv.org/abs/1610.01644';
const OTHELLO_URL = 'https://arxiv.org/abs/2210.13382';
const NANDA_URL = 'https://doi.org/10.18653/v1/2023.blackboxnlp-1.2';
const HEWITT_URL = 'https://doi.org/10.18653/v1/D19-1275';
const BELINKOV_URL = 'https://doi.org/10.1162/coli_a_00422';
const LOGIT_LENS_URL = 'https://www.lesswrong.com/posts/AcKRB8wDpdaN6v6ru/interpreting-gpt-the-logit-lens';
const TUNED_LENS_URL = 'https://arxiv.org/abs/2303.08112';
const ZOOM_IN_URL = 'https://doi.org/10.23915/distill.00024.001';
const INDUCTION_URL = 'https://arxiv.org/abs/2209.11895';
const TOY_URL = 'https://arxiv.org/abs/2209.10652';
const MONO_URL = 'https://transformer-circuits.pub/2023/monosemantic-features/index.html';
const SCALING_URL = 'https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html';
const GOLDEN_GATE_URL = 'https://www.anthropic.com/news/golden-gate-claude';
const GAO_URL = 'https://arxiv.org/abs/2406.04093';
const GEMMA_SCOPE_URL = 'https://doi.org/10.18653/v1/2024.blackboxnlp-1.19';
const NP_3124_URL = 'https://www.neuronpedia.org/gemma-2-2b/20-gemmascope-res-16k/3124';
const NP_1566_URL = 'https://www.neuronpedia.org/gemma-2-2b/20-gemmascope-res-16k/1566';
const METHODS_URL = 'https://transformer-circuits.pub/2025/attribution-graphs/methods.html';
const BIOLOGY_URL = 'https://transformer-circuits.pub/2025/attribution-graphs/biology.html';
const CIRCUIT_TRACER_URL = 'https://www.anthropic.com/research/open-source-circuit-tracing';
const GDM_SAE_URL = 'https://www.alignmentforum.org/posts/4uXCAJNuPKtKBsi28/';
const AMODEI_URL = 'https://www.darioamodei.com/post/the-urgency-of-interpretability';

const SOURCES: { authors: string; title: string; venue: string; note: LocalizedText; href: string; label: string }[] = [
  {
    authors: 'Doshi-Velez F., Kim B.',
    title: 'Towards A Rigorous Science of Interpretable Machine Learning',
    venue: 'arXiv preprint 2017',
    note: { ru: 'определение интерпретируемости; локальные и глобальные объяснения', en: 'a definition of interpretability; local and global explanations' },
    href: DOSHI_URL,
    label: 'arXiv:1702.08608',
  },
  {
    authors: 'Rudin C.',
    title: 'Stop explaining black box machine learning models for high stakes decisions and use interpretable models instead',
    venue: 'Nature Machine Intelligence 1, 206–215 (2019)',
    note: { ru: 'COMPAS (130+ факторов) против списка из трёх правил CORELS; страницы в тексте — по arXiv v3', en: 'COMPAS (130+ factors) against a three-rule CORELS list; pages in the text follow arXiv v3' },
    href: RUDIN_URL,
    label: 'doi:10.1038/s42256-019-0048-x',
  },
  {
    authors: 'European Union.',
    title: 'Regulation (EU) 2024/1689 (AI Act)',
    venue: 'OJ L, 12.07.2024',
    note: { ru: 'ст. 13 — прозрачность для эксплуатантов; ст. 86 — право на объяснение; приложение III, п. 5(b) — кредитный скоринг', en: 'Art. 13 — transparency to deployers; Art. 86 — right to explanation; Annex III, point 5(b) — credit scoring' },
    href: AI_ACT_URL,
    label: 'eur-lex.europa.eu/eli/reg/2024/1689/oj',
  },
  {
    authors: 'European Union.',
    title: 'Regulation (EU) 2026/1744 (Digital Omnibus on AI)',
    venue: 'OJ L, 24.07.2026',
    note: { ru: 'перенос требований для систем высокого риска из приложения III на 2 декабря 2027 года', en: 'moves the requirements for Annex III high-risk systems to 2 December 2027' },
    href: OMNIBUS_URL,
    label: 'eur-lex.europa.eu/eli/reg/2026/1744/oj',
  },
  {
    authors: 'Jain S., Wallace B. C.',
    title: 'Attention is not Explanation',
    venue: 'NAACL 2019',
    note: { ru: 'веса внимания слабо и непоследовательно согласуются с важностью признаков (BiRNN)', en: 'attention weights agree only weakly and inconsistently with feature importance (BiRNN)' },
    href: JAIN_URL,
    label: 'doi:10.18653/v1/N19-1357',
  },
  {
    authors: 'Wiegreffe S., Pinter Y.',
    title: 'Attention is not not Explanation',
    venue: 'EMNLP 2019',
    note: { ru: 'внимание даёт «одно из объяснений», а не «объяснение»', en: 'attention gives "an explanation", not "the explanation"' },
    href: WIEGREFFE_URL,
    label: 'doi:10.18653/v1/D19-1002',
  },
  {
    authors: 'Adebayo J. et al.',
    title: 'Sanity Checks for Saliency Maps',
    venue: 'NeurIPS 2018',
    note: { ru: 'тест со случайными весами: часть карт значимости почти не зависит от модели; страницы в тексте — по arXiv v3', en: 'the random-weights test: some saliency maps barely depend on the model; pages in the text follow arXiv v3' },
    href: ADEBAYO_URL,
    label: 'arXiv:1810.03292',
  },
  {
    authors: 'Elhage N. et al.',
    title: 'A Mathematical Framework for Transformer Circuits',
    venue: 'transformer-circuits.pub, 2021',
    note: { ru: 'остаточный поток как канал связи между слоями', en: 'the residual stream as a communication channel between layers' },
    href: FRAMEWORK_URL,
    label: 'transformer-circuits.pub/2021/framework',
  },
  {
    authors: 'Alain G., Bengio Y.',
    title: 'Understanding intermediate layers using linear classifier probes',
    venue: 'arXiv preprint 2016',
    note: { ru: 'линейные зонды как «термометры» в разных точках сети', en: 'linear probes as "thermometers" at different points of the network' },
    href: ALAIN_URL,
    label: 'arXiv:1610.01644',
  },
  {
    authors: 'Li K. et al.',
    title: 'Emergent World Representations: Exploring a Sequence Model Trained on a Synthetic Task',
    venue: 'ICLR 2023',
    note: { ru: 'Othello-GPT: состояние доски восстанавливается зондом и управляет ходами', en: 'Othello-GPT: the board state is recovered by a probe and drives the moves' },
    href: OTHELLO_URL,
    label: 'arXiv:2210.13382',
  },
  {
    authors: 'Nanda N., Lee A., Wattenberg M.',
    title: 'Emergent Linear Representations in World Models of Self-Supervised Sequence Models',
    venue: 'BlackboxNLP 2023, pp. 16–30',
    note: { ru: 'кодировка «моё / твоё»: линейный зонд — 99,6%', en: 'the "mine / yours" encoding: a linear probe reaches 99.6%' },
    href: NANDA_URL,
    label: 'doi:10.18653/v1/2023.blackboxnlp-1.2',
  },
  {
    authors: 'Hewitt J., Liang P.',
    title: 'Designing and Interpreting Probes with Control Tasks',
    venue: 'EMNLP 2019',
    note: { ru: 'контрольные задачи и селективность зонда', en: 'control tasks and probe selectivity' },
    href: HEWITT_URL,
    label: 'doi:10.18653/v1/D19-1275',
  },
  {
    authors: 'Belinkov Y.',
    title: 'Probing Classifiers: Promises, Shortcomings, and Advances',
    venue: 'Computational Linguistics 48(1), 2022',
    note: { ru: 'зонд показывает корреляцию, а не то, что модель пользуется свойством', en: 'a probe shows correlation, not that the model uses the property' },
    href: BELINKOV_URL,
    label: 'doi:10.1162/coli_a_00422',
  },
  {
    authors: 'nostalgebraist.',
    title: 'interpreting GPT: the logit lens',
    venue: 'LessWrong, 31.08.2020',
    note: { ru: 'промежуточные слои GPT-2, прочитанные через выходной слой', en: 'GPT-2\'s intermediate layers read through the output layer' },
    href: LOGIT_LENS_URL,
    label: 'lesswrong.com/posts/AcKRB8wDpdaN6v6ru',
  },
  {
    authors: 'Belrose N. et al.',
    title: 'Eliciting Latent Predictions from Transformers with the Tuned Lens',
    venue: 'arXiv 2023',
    note: { ru: 'logit lens ненадёжен на части моделей; tuned lens обучает поправку для каждого слоя', en: 'the logit lens is unreliable on some models; the tuned lens trains a correction per layer' },
    href: TUNED_LENS_URL,
    label: 'arXiv:2303.08112',
  },
  {
    authors: 'Olah C. et al.',
    title: 'Zoom In: An Introduction to Circuits',
    venue: 'Distill, 2020',
    note: { ru: 'три гипотезы: признаки, схемы, универсальность', en: 'three claims: features, circuits, universality' },
    href: ZOOM_IN_URL,
    label: 'doi:10.23915/distill.00024.001',
  },
  {
    authors: 'Olsson C. et al.',
    title: 'In-context Learning and Induction Heads',
    venue: 'transformer-circuits.pub, 2022',
    note: { ru: 'индукционные головы: [A][B] … [A] → [B]', en: 'induction heads: [A][B] … [A] → [B]' },
    href: INDUCTION_URL,
    label: 'arXiv:2209.11895',
  },
  {
    authors: 'Elhage N. et al.',
    title: 'Toy Models of Superposition',
    venue: 'transformer-circuits.pub, 2022',
    note: { ru: 'больше признаков, чем измерений, если признаки разрежены', en: 'more features than dimensions when features are sparse' },
    href: TOY_URL,
    label: 'arXiv:2209.10652',
  },
  {
    authors: 'Bricken T. et al.',
    title: 'Towards Monosemanticity: Decomposing Language Models With Dictionary Learning',
    venue: 'transformer-circuits.pub, 2023',
    note: { ru: '512 нейронов → 4096 признаков; медианная оценка 12 против 0', en: '512 neurons → 4,096 features; a median score of 12 against 0' },
    href: MONO_URL,
    label: 'transformer-circuits.pub/2023/monosemantic-features',
  },
  {
    authors: 'Templeton A. et al.',
    title: 'Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet',
    venue: 'transformer-circuits.pub, 2024',
    note: { ru: 'SAE на 1M, 4M и 34M признаков; признак «Золотые Ворота» и управление им', en: 'SAEs of 1M, 4M and 34M features; the Golden Gate Bridge feature and steering it' },
    href: SCALING_URL,
    label: 'transformer-circuits.pub/2024/scaling-monosemanticity',
  },
  {
    authors: 'Anthropic.',
    title: 'Golden Gate Claude',
    venue: 'anthropic.com, 23.05.2024',
    note: { ru: 'исследовательское демо, доступное 24 часа', en: 'a research demo available for 24 hours' },
    href: GOLDEN_GATE_URL,
    label: 'anthropic.com/news/golden-gate-claude',
  },
  {
    authors: 'Gao L. et al.',
    title: 'Scaling and evaluating sparse autoencoders',
    venue: 'OpenAI, arXiv 2024',
    note: { ru: 'SAE на 16 млн признаков для активаций GPT-4', en: 'a 16-million-latent SAE on GPT-4 activations' },
    href: GAO_URL,
    label: 'arXiv:2406.04093',
  },
  {
    authors: 'Lieberum T. et al.',
    title: 'Gemma Scope: Open Sparse Autoencoders Everywhere All At Once on Gemma 2',
    venue: 'BlackboxNLP 2024, pp. 278–300',
    note: { ru: 'более 400 открытых SAE и более 30 млн признаков', en: 'more than 400 open SAEs and more than 30 million features' },
    href: GEMMA_SCOPE_URL,
    label: 'doi:10.18653/v1/2024.blackboxnlp-1.19',
  },
  {
    authors: 'Neuronpedia.',
    title: 'gemma-2-2b · 20-gemmascope-res-16k · 3124',
    venue: 'neuronpedia.org',
    note: { ru: 'признак Gemma Scope про Сан-Франциско и район залива, снимок 01.10.2026', en: 'a Gemma Scope feature for San Francisco and the Bay Area, captured 2026-10-01' },
    href: NP_3124_URL,
    label: 'neuronpedia.org/gemma-2-2b/20-gemmascope-res-16k/3124',
  },
  {
    authors: 'Neuronpedia.',
    title: 'gemma-2-2b · 20-gemmascope-res-16k · 1566',
    venue: 'neuronpedia.org',
    note: { ru: 'признак со спорным автоматическим описанием, снимок 01.10.2026', en: 'a feature with a disputed automatic explanation, captured 2026-10-01' },
    href: NP_1566_URL,
    label: 'neuronpedia.org/gemma-2-2b/20-gemmascope-res-16k/1566',
  },
  {
    authors: 'Ameisen E. et al.',
    title: 'Circuit Tracing: Revealing Computational Graphs in Language Models',
    venue: 'transformer-circuits.pub, 2025',
    note: { ru: 'заменяющая модель и графы атрибуции', en: 'the replacement model and attribution graphs' },
    href: METHODS_URL,
    label: 'transformer-circuits.pub/2025/attribution-graphs/methods',
  },
  {
    authors: 'Lindsey J. et al.',
    title: 'On the Biology of a Large Language Model',
    venue: 'transformer-circuits.pub, 2025',
    note: { ru: 'Dallas → Texas → Austin, планирование рифмы, «примерно четверть промптов»', en: 'Dallas → Texas → Austin, rhyme planning, "about a quarter of the prompts"' },
    href: BIOLOGY_URL,
    label: 'transformer-circuits.pub/2025/attribution-graphs/biology',
  },
  {
    authors: 'Anthropic.',
    title: 'Open-sourcing circuit tracing tools',
    venue: 'anthropic.com, 29.05.2025',
    note: { ru: 'открытый инструмент для Gemma-2-2b и Llama-3.2-1b с интерфейсом на Neuronpedia', en: 'an open tool for Gemma-2-2b and Llama-3.2-1b with a Neuronpedia frontend' },
    href: CIRCUIT_TRACER_URL,
    label: 'anthropic.com/research/open-source-circuit-tracing',
  },
  {
    authors: 'Smith L., Rajamanoharan S., Conmy A. et al. (Google DeepMind)',
    title: 'Negative Results for SAEs On Downstream Tasks and Deprioritising SAE Research',
    venue: 'AI Alignment Forum, 26.03.2025',
    note: { ru: 'простые линейные зонды обошли зонды на признаках SAE', en: 'plain linear probes beat probes built on SAE features' },
    href: GDM_SAE_URL,
    label: 'alignmentforum.org/posts/4uXCAJNuPKtKBsi28',
  },
  {
    authors: 'Amodei D.',
    title: 'The Urgency of Interpretability',
    venue: 'darioamodei.com, April 2025',
    note: { ru: 'заявленная цель Anthropic на 2027 год', en: 'Anthropic\'s stated goal for 2027' },
    href: AMODEI_URL,
    label: 'darioamodei.com/post/the-urgency-of-interpretability',
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

export default function LlmInterpretabilityTheory({ lang }: { lang: string }) {
  const ru = lang === 'ru';

  return (
    <div className="space-y-8">
      {/* Chapter 1: Everything visible, nothing understood */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 1: Всё видно, но ничего не понятно' : 'Chapter 1: Everything Visible, Nothing Understood'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Представьте, что коллега передал вам таблицу на восемь миллиардов ячеек, по которой считается важное решение.
                Каждую ячейку можно открыть и прочитать. Но ответить на вопрос «почему таблица выдала именно это?» это не
                помогает: числа видны, а их смысл — нет.
              </>
            ) : (
              <>
                Imagine a colleague hands you a spreadsheet of eight billion cells that computes an important decision. You
                can open and read every cell. But that does not help you answer &quot;why did the spreadsheet produce exactly
                this?&quot;: the numbers are visible, their meaning is not.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                С языковой моделью с открытыми весами ровно так. У Llama 3.1 8B около восьми миллиардов параметров, и все они
                лежат в файле (см. комнату <RoomLink lang={lang} id="llama-3-1-8b">про Llama 3.1 8B</RoomLink>). Поэтому
                «чёрный ящик» — это не про спрятанные данные, а про смысл. Интерпретируемость в классическом определении
                Доши-Велес и Кима — способность объяснить или представить работу модели в понятных человеку терминах (
                <Cite href={DOSHI_URL}>Doshi-Velez, Kim 2017: 2</Cite>).
              </>
            ) : (
              <>
                A language model with open weights is exactly like that. Llama 3.1 8B has about eight billion parameters,
                and all of them sit in a file (see the <RoomLink lang={lang} id="llama-3-1-8b">Llama 3.1 8B</RoomLink> room).
                So &quot;black box&quot; is not about hidden data but about meaning. Interpretability, in Doshi-Velez and
                Kim&apos;s classic definition, is the ability to explain or present a model&apos;s workings in terms a human
                can understand (<Cite href={DOSHI_URL}>Doshi-Velez, Kim 2017: 2</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Объяснения отвечают на разные вопросы. Локальное объяснение говорит о причинах одного конкретного решения:
                почему отклонена именно эта заявка на кредит. Глобальное — о закономерностях, которыми модель пользуется
                вообще (<Cite href={DOSHI_URL}>Doshi-Velez, Kim 2017: 7</Cite>). В этой комнате карта внимания или карта
                значимости для одного входа и граф атрибуции для одного промпта — локальные объяснения. Словарь признаков
                целого слоя, зонд, обученный на тысячах примеров, и короткий список правил — глобальные. Вторая ось — когда
                появляется объяснение: модель может быть понятной по устройству, как список из трёх правил, или её объясняют
                уже после обучения, как большую нейросеть.
              </>
            ) : (
              <>
                Explanations answer different questions. A local explanation is about the reasons for one specific decision:
                why this particular loan application was rejected. A global one is about the patterns the model uses in
                general (<Cite href={DOSHI_URL}>Doshi-Velez, Kim 2017: 7</Cite>). In this room, an attention map or a
                saliency map for one input and an attribution graph for one prompt are local explanations. A dictionary of
                features for a whole layer, a probe trained on thousands of examples, and a short list of rules are global.
                The second axis is when the explanation appears: a model can be understandable by design, like a list of
                three rules, or it can be explained after training, like a large neural network.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Зачем это нужно, видно по регулированию. Регламент ЕС об ИИ требует, чтобы системы высокого риска были
                достаточно прозрачны для эксплуатанта, чтобы тот мог интерпретировать их выход (ст. 13), а человек, которого
                затронуло решение такой системы, получил право на объяснение роли ИИ в этом решении (ст. 86). Оценка
                кредитоспособности граждан прямо названа в списке систем высокого риска (приложение III, п. 5(b);{' '}
                <Cite href={AI_ACT_URL}>Regulation (EU) 2024/1689</Cite>). Требования к таким системам из приложения III
                применяются с 2 декабря 2027 года — этот срок перенёс пакет поправок Digital Omnibus (
                <Cite href={OMNIBUS_URL}>Regulation (EU) 2026/1744</Cite>; подробнее — в комнате{' '}
                <RoomLink lang={lang} id="ai-regulation-eu">о регулировании ИИ в ЕС</RoomLink>).
              </>
            ) : (
              <>
                Why it matters shows up in regulation. The EU AI Act requires high-risk systems to be transparent enough for
                the deployer to interpret their output (Art. 13), and gives a person affected by such a system&apos;s decision
                the right to an explanation of the AI&apos;s role in it (Art. 86). Creditworthiness assessment of natural
                persons is named explicitly in the list of high-risk systems (Annex III, point 5(b);{' '}
                <Cite href={AI_ACT_URL}>Regulation (EU) 2024/1689</Cite>). The requirements for these Annex III systems apply
                from 2 December 2027 — the date was moved by the Digital Omnibus amendment package (
                <Cite href={OMNIBUS_URL}>Regulation (EU) 2026/1744</Cite>; more in the{' '}
                <RoomLink lang={lang} id="ai-regulation-eu">EU AI regulation</RoomLink> room).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Синтия Рудин предлагает для решений с высокой ценой ошибки другой путь: не объяснять чёрный ящик, а сразу
                брать понятную по устройству модель. Её пример — система COMPAS, которая оценивает риск повторного
                правонарушения по 130 с лишним факторам и закрыта как коммерческий продукт. Список всего из трёх правил на
                основе возраста и числа прошлых правонарушений (алгоритм CORELS) показал на тех же данных из округа Броуард
                сопоставимую точность (<Cite href={RUDIN_URL}>Rudin 2019: 6, 10</Cite>). Для языковой модели такой замены нет:
                её не перепишешь тремя правилами. Поэтому дальше речь пойдёт об объяснениях после обучения — о том, как
                исследователи заглядывают внутрь уже готовой модели.
              </>
            ) : (
              <>
                For decisions where errors are costly, Cynthia Rudin proposes another route: rather than explaining a black
                box, use a model that is understandable by design from the start. Her example is COMPAS, a system that scores
                the risk of reoffending from more than 130 factors and is closed as a commercial product. A list of just three
                rules based on age and number of prior offences (the CORELS algorithm) showed comparable accuracy on the same
                Broward County data (<Cite href={RUDIN_URL}>Rudin 2019: 6, 10</Cite>). A language model has no such
                substitute: you cannot rewrite it as three rules. So the rest of the room is about explanations after training
                — how researchers look inside a model that already exists.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 2: Attention maps and their limits */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 2: Карта внимания — ещё не объяснение' : 'Chapter 2: An Attention Map Is Not Yet an Explanation'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Прибор, который следит за взглядом, покажет, что ученик долго смотрел на третью строку условия задачи. Но он не
                покажет, понял ли ученик эту строку и как она повлияла на ответ. Куда смотрели — ещё не то, что подумали.
              </>
            ) : (
              <>
                An eye tracker will show that a student looked at the third line of a problem for a long time. It will not
                show whether the student understood that line or how it shaped the answer. Where someone looked is not yet
                what they thought.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                У трансформера есть похожий соблазн — веса внимания (о механизме — в комнате{' '}
                <RoomLink lang={lang} id="llm-mechanics">«Как мыслят LLM»</RoomLink>). Их легко нарисовать тепловой картой и
                сказать: «вот на какие слова модель обращала внимание». Джейн и Уоллес проверили, насколько такой карте можно
                верить. Веса внимания согласовывались с градиентными оценками важности слов лишь слабо и непоследовательно, а
                для одного и того же предсказания можно было подобрать совсем другое распределение внимания (
                <Cite href={JAIN_URL}>Jain, Wallace 2019: 3543–3544</Cite>). Оговорка: опыты шли на рекуррентных сетях
                (BiRNN), а не на современных трансформерах.
              </>
            ) : (
              <>
                A transformer offers a similar temptation — attention weights (on the mechanism, see the{' '}
                <RoomLink lang={lang} id="llm-mechanics">How LLMs Think</RoomLink> room). They are easy to draw as a heat map
                and say: &quot;these are the words the model paid attention to&quot;. Jain and Wallace tested how far such a map
                can be trusted. Attention weights agreed with gradient-based estimates of word importance only weakly and
                inconsistently, and for the same prediction one could find a completely different attention distribution (
                <Cite href={JAIN_URL}>Jain, Wallace 2019: 3543–3544</Cite>). A caveat: the experiments were on recurrent
                networks (BiRNN), not modern transformers.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Вигрефф и Пинтер ответили статьёй с говорящим названием «Attention is not not Explanation». Их довод: всё
                зависит от того, что считать объяснением; внимание даёт одно из объяснений, но не единственное и не
                окончательное (<Cite href={WIEGREFFE_URL}>Wiegreffe, Pinter 2019: 11, 13</Cite>). Из спора выросло рабочее
                правило: карта внимания — сигнал, который стоит проверить, а не доказательство того, о чём «думала» модель.
              </>
            ) : (
              <>
                Wiegreffe and Pinter replied with a paper whose title says it all: &quot;Attention is not not
                Explanation&quot;. Their argument: it depends on what counts as an explanation; attention provides an
                explanation, but not the only one and not the final one (
                <Cite href={WIEGREFFE_URL}>Wiegreffe, Pinter 2019: 11, 13</Cite>). A working rule grew out of the dispute: an
                attention map is a signal worth checking, not proof of what the model was &quot;thinking&quot;.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Как именно проверять объяснение, показали Адебайо с соавторами на картах значимости (saliency maps) для
                распознавания изображений. Их тест простой: построить карту для обученной сети, затем для такой же сети со
                случайными весами — и сравнить. Если карта почти не меняется, она описывает картинку, а не модель. Часть
                популярных методов, например Guided Backprop, оказалась нечувствительна к весам верхних слоёв и выдавала
                картинку, похожую на результат обычного выделения контуров; простые градиенты и GradCAM проверку прошли (
                <Cite href={ADEBAYO_URL}>Adebayo et al. 2018: 1, 3, 5</Cite>).
              </>
            ) : (
              <>
                How exactly to check an explanation was shown by Adebayo and colleagues on saliency maps for image
                recognition. Their test is simple: build the map for a trained network, then for the same network with random
                weights — and compare. If the map barely changes, it describes the picture, not the model. Some popular
                methods, such as Guided Backprop, turned out to be insensitive to the weights of the upper layers and produced
                something resembling plain edge detection; plain gradients and GradCAM passed the check (
                <Cite href={ADEBAYO_URL}>Adebayo et al. 2018: 1, 3, 5</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Есть и устройственная причина не останавливаться на внимании. В трансформере все слои читают и пишут в общий
                остаточный поток (residual stream), который работает как канал связи между ними (
                <Cite href={FRAMEWORK_URL}>Elhage et al. 2021</Cite>). Внимание переносит информацию между позициями, а
                значительная часть вычислений идёт в других блоках. Карта внимания показывает, откуда информация пришла, но не
                что с ней сделали. Чтобы узнать это, нужно читать сами активации — с этого начинается следующая глава.
              </>
            ) : (
              <>
                There is also an architectural reason not to stop at attention. In a transformer every layer reads from and
                writes to a shared residual stream, which works as a communication channel between them (
                <Cite href={FRAMEWORK_URL}>Elhage et al. 2021</Cite>). Attention moves information between positions, while a
                large share of the computation happens in other blocks. An attention map shows where information came from,
                not what was done with it. Finding that out means reading the activations themselves — which is where the next
                chapter begins.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 3: Probing, logit lens, features */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 3: Зонды, logit lens и первые схемы' : 'Chapter 3: Probes, the Logit Lens and the First Circuits'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Чтобы понять, как прогревается печь, не нужно её разбирать: достаточно поставить термометры в разных местах.
                Ален и Бенджио предложили смотреть на нейросеть так же. Их «термометры» — маленькие линейные классификаторы,
                которые обучают отдельно от самой модели на её промежуточных активациях (
                <Cite href={ALAIN_URL}>Alain, Bengio 2016: 1–2</Cite>).
              </>
            ) : (
              <>
                To understand how an oven heats up, you do not need to take it apart: thermometers at different points are
                enough. Alain and Bengio proposed looking at a neural network the same way. Their &quot;thermometers&quot; are
                small linear classifiers trained separately from the model itself on its intermediate activations (
                <Cite href={ALAIN_URL}>Alain, Bengio 2016: 1–2</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Этот метод называют <Term id="probing" lang={lang}>пробингом</Term> (probing), а классификатор — зондом. Самый
                наглядный пример — Othello-GPT. Ли с соавторами обучили небольшую GPT только на последовательностях ходов в
                игре «Отелло»: 60 токенов-клеток, никаких правил и никакой доски. Модель научилась делать допустимые ходы почти
                без ошибок. Зонд восстанавливал по её активациям состояние доски: нелинейный — с ошибкой 1,7%, линейный — около
                20%. А когда исследователи меняли это внутреннее представление, менялись и ходы, которые предсказывала модель
                (<Cite href={OTHELLO_URL}>Li et al. 2023: 3–7</Cite>). Нанда с соавторами показали, что линейный зонд
                справляется почти идеально, 99,6%, если спрашивать не «чёрная или белая фишка», а «моя или соперника» (
                <Cite href={NANDA_URL}>Nanda et al. 2023: 16, 18</Cite>): модель хранила доску в своей системе координат.
              </>
            ) : (
              <>
                This method is called <Term id="probing" lang={lang}>probing</Term>, and the classifier a probe. The most vivid
                example is Othello-GPT. Li and colleagues trained a small GPT only on sequences of moves in the game Othello: 60
                tile tokens, no rules and no board. The model learned to make legal moves almost without error. A probe recovered
                the board state from its activations: a nonlinear one with a 1.7% error, a linear one with about 20%. And when
                the researchers altered this internal representation, the moves the model predicted changed too (
                <Cite href={OTHELLO_URL}>Li et al. 2023: 3–7</Cite>). Nanda and colleagues showed that a linear probe does almost
                perfectly, 99.6%, if you ask not &quot;black or white piece&quot; but &quot;mine or the opponent&apos;s&quot; (
                <Cite href={NANDA_URL}>Nanda et al. 2023: 16, 18</Cite>): the model kept the board in its own frame of
                reference.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                У зондов есть ловушка. Хьюитт и Лян заметили, что достаточно мощный зонд может сам выучить задачу, а не
                прочитать её из модели. Они дали зондам контрольную задачу со случайными ответами: при разметке частей речи
                нейросетевой зонд набрал 97,3% на настоящей задаче и 92,8% на бессмысленной, линейный — 97,2% и 71,2% (
                <Cite href={HEWITT_URL}>Hewitt, Liang 2019: 2734, 2737</Cite>). Разницу между ними авторы назвали
                селективностью. Белинков подытожил: зонд показывает, что информацию можно извлечь из активаций, но не
                доказывает, что модель ею пользуется (<Cite href={BELINKOV_URL}>Belinkov 2022: 212–213</Cite>). Поэтому в
                Othello-GPT решающим был опыт с вмешательством, а не точность зонда.
              </>
            ) : (
              <>
                Probes have a trap. Hewitt and Liang noticed that a powerful enough probe can learn the task itself rather than
                read it out of the model. They gave probes a control task with random answers: on part-of-speech tagging, a
                neural-network probe scored 97.3% on the real task and 92.8% on the meaningless one, a linear probe 97.2% and
                71.2% (<Cite href={HEWITT_URL}>Hewitt, Liang 2019: 2734, 2737</Cite>). The authors called the gap between them
                selectivity. Belinkov summed it up: a probe shows that information can be extracted from the activations, but
                does not prove that the model uses it (<Cite href={BELINKOV_URL}>Belinkov 2022: 212–213</Cite>). That is why in
                Othello-GPT the decisive evidence was the intervention experiment, not probe accuracy.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Второй приём не требует обучать ничего нового. В 2020 году автор под ником nostalgebraist применил к
                промежуточным слоям GPT-2 тот же выходной слой, которым модель превращает последний слой в вероятности слов.
                Оказалось, что такие «промежуточные прогнозы» осмысленны и часто сходятся к итоговому ответу задолго до
                последнего слоя (<Cite href={LOGIT_LENS_URL}>nostalgebraist 2020</Cite>). Приём назвали logit lens. На части
                моделей, например BLOOM и GPT-Neo, он работает плохо; tuned lens исправляет это, обучая небольшую поправку для
                каждого слоя (<Cite href={TUNED_LENS_URL}>Belrose et al. 2023: 1–2</Cite>).
              </>
            ) : (
              <>
                The second technique needs no new training. In 2020 a writer known as nostalgebraist applied to GPT-2&apos;s
                intermediate layers the same output layer the model uses to turn its last layer into word probabilities. These
                &quot;intermediate predictions&quot; turned out to make sense and often converged on the final answer long
                before the last layer (<Cite href={LOGIT_LENS_URL}>nostalgebraist 2020</Cite>). The technique was named the
                logit lens. On some models, such as BLOOM and GPT-Neo, it works poorly; the tuned lens fixes this by training a
                small correction for each layer (<Cite href={TUNED_LENS_URL}>Belrose et al. 2023: 1–2</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Зонды и линзы проверяют гипотезу «модель хранит X». Более амбициозная программа — разобрать модель как
                механизм. Её называют <Term id="mechanistic-interpretability" lang={lang}>механистической
                интерпретируемостью</Term>. Её исходные гипотезы сформулировали Ола с соавторами: признаки — основная единица
                нейросети и соответствуют направлениям в пространстве активаций; признаки связаны весами в схемы (circuits);
                похожие признаки и схемы возникают в разных моделях (<Cite href={ZOOM_IN_URL}>Olah et al. 2020</Cite>).
                Пример найденной схемы — индукционные головы: пара механизмов внимания, которая продолжает повтор по шаблону
                «[A][B] … [A] → [B]» (<Cite href={INDUCTION_URL}>Olsson et al. 2022: 1–2</Cite>).
              </>
            ) : (
              <>
                Probes and lenses test the hypothesis &quot;the model stores X&quot;. A more ambitious programme is to take the
                model apart like a mechanism. It is called{' '}
                <Term id="mechanistic-interpretability" lang={lang}>mechanistic interpretability</Term>. Its starting
                hypotheses were set out by Olah and colleagues: features are the basic unit of a neural network and correspond
                to directions in activation space; features are connected by weights into circuits; similar features and
                circuits arise in different models (<Cite href={ZOOM_IN_URL}>Olah et al. 2020</Cite>). One circuit found this
                way is the induction head: a pair of attention mechanisms that continues a repetition following the pattern
                &quot;[A][B] … [A] → [B]&quot; (<Cite href={INDUCTION_URL}>Olsson et al. 2022: 1–2</Cite>).
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 4: Superposition and a dictionary of features */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 4: Суперпозиция и словарь признаков' : 'Chapter 4: Superposition and a Dictionary of Features'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                В гардеробе театра 500 крючков, а за неделю приходят тысячи зрителей. Это работает, потому что одновременно в
                зале лишь малая часть из них. Но если подойти к одному крючку и спросить «чей он?», ответ будет «то одного, то
                другого» — по самому крючку не понять, кто в зале.
              </>
            ) : (
              <>
                A theatre cloakroom has 500 hooks, yet thousands of people come through in a week. It works because only a small
                share of them is in the hall at any one time. But if you walk up to one hook and ask &quot;whose is it?&quot;,
                the answer is &quot;sometimes one person&apos;s, sometimes another&apos;s&quot; — the hook alone does not tell
                you who is in the hall.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                С нейронами то же. Исследователи давно замечали полисемантичные нейроны: один нейрон срабатывает на несколько
                не связанных понятий. Элхаге с соавторами объяснили это на игрушечных моделях. Понятий, которые модели полезно
                различать, больше, чем у неё измерений, но в любом конкретном тексте большинство из них отсутствует. Поэтому
                модель может хранить больше признаков, чем у неё нейронов, — каждый как почти независимое направление, ценой
                небольших помех между ними (<Cite href={TOY_URL}>Elhage et al. 2022: 1, 3, 7</Cite>). Это явление называют{' '}
                <Term id="superposition" lang={lang}>суперпозицией</Term>. Его следствие неприятно: читать модель «по
                нейронам» не получается.
              </>
            ) : (
              <>
                Neurons are the same. Researchers had long noticed polysemantic neurons: a single neuron fires on several
                unrelated concepts. Elhage and colleagues explained this with toy models. There are more concepts a model would
                find useful to tell apart than it has dimensions, but most of them are absent from any given text. So the model
                can store more features than it has neurons — each as an almost independent direction, at the cost of a little
                interference between them (<Cite href={TOY_URL}>Elhage et al. 2022: 1, 3, 7</Cite>). This phenomenon is called{' '}
                <Term id="superposition" lang={lang}>superposition</Term>. Its consequence is awkward: the model cannot be read
                &quot;neuron by neuron&quot;.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Если признаки сложены в суперпозицию, их нужно распутать. Для этого рядом с моделью обучают отдельную
                небольшую сеть — <Term id="sparse-autoencoder" lang={lang}>sparse autoencoder</Term> (SAE, разреженный
                автокодировщик). Она восстанавливает активации слоя через словарь из многих признаков при условии, что на
                каждом токене включены лишь немногие из них. В первой большой работе Anthropic взяла однослойный трансформер
                с 512 нейронами и разложила его активации на словари от 512 до 131 072 признаков; основной разбор шёл по
                словарю из 4096 признаков. Медианная оценка понятности по рубрике исследователей составила 12 у признаков и 0
                у нейронов, а этот словарь объяснял 79% вклада слоя в качество модели (
                <Cite href={MONO_URL}>Bricken et al. 2023</Cite>).
              </>
            ) : (
              <>
                If features are packed in superposition, they need untangling. For that, a separate small network is trained
                next to the model — a <Term id="sparse-autoencoder" lang={lang}>sparse autoencoder</Term> (SAE). It
                reconstructs a layer&apos;s activations through a dictionary of many features, under the condition that only a
                few of them are active on each token. In the first major study, Anthropic took a one-layer transformer with 512
                neurons and decomposed its activations into dictionaries of 512 to 131,072 features; the detailed analysis used
                a dictionary of 4,096 features. On the researchers&apos; rubric the median interpretability score was 12 for
                features and 0 for neurons, and this dictionary accounted for 79% of the layer&apos;s contribution to model
                quality (<Cite href={MONO_URL}>Bricken et al. 2023</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Потом метод масштабировали. Для Claude 3 Sonnet обучили SAE на 1, 4 и 34 млн признаков; на токене в среднем
                активно меньше 300 из них (<Cite href={SCALING_URL}>Templeton et al. 2024</Cite>). OpenAI обучила SAE на 16
                млн признаков на активациях GPT-4 (<Cite href={GAO_URL}>Gao et al. 2024: 1</Cite>). Google DeepMind выложила
                открытый набор Gemma Scope: более 400 SAE и более 30 млн признаков для всех слоёв Gemma 2 2B и 9B. На это ушло
                больше 20% вычислений, затраченных на обучение GPT-3, и около 20 ПиБ сохранённых активаций (
                <Cite href={GEMMA_SCOPE_URL}>Lieberum et al. 2024: 278–279</Cite>). Признаки Gemma Scope можно посмотреть в
                открытом каталоге Neuronpedia. Ниже — страница признака 3124 из 20-го слоя Gemma 2 2B.
              </>
            ) : (
              <>
                Then the method was scaled up. For Claude 3 Sonnet, SAEs with 1, 4 and 34 million features were trained; fewer
                than 300 of them are active per token on average (<Cite href={SCALING_URL}>Templeton et al. 2024</Cite>). OpenAI
                trained a 16-million-feature SAE on GPT-4 activations (<Cite href={GAO_URL}>Gao et al. 2024: 1</Cite>). Google
                DeepMind released the open Gemma Scope suite: more than 400 SAEs and more than 30 million features for every
                layer of Gemma 2 2B and 9B. It took more than 20% of the compute used to train GPT-3 and about 20 PiB of saved
                activations (<Cite href={GEMMA_SCOPE_URL}>Lieberum et al. 2024: 278–279</Cite>). Gemma Scope features can be
                browsed in the open Neuronpedia catalogue. Below is the page for feature 3124 from layer 20 of Gemma 2 2B.
              </>
            )}
          </p>
          <Screenshot
            src="/images/rooms/llm-interpretability/neuronpedia-feature-3124.png"
            alt={ru
              ? 'Страница признака 3124 слоя 20 модели Gemma 2 2B (Gemma Scope, 16k) на Neuronpedia: автоматические описания «references to San Francisco and related locations», «Location or place names», «San Francisco, Oakland, Bay Area»; положительные логиты SF, Bay, Contra, Oakland, Berkeley, Alameda, BART, Marin; плотность активаций 0,193%; примеры текстов с наибольшей активацией об Окленде, мосте Золотые Ворота и районе залива Сан-Франциско'
              : 'The Neuronpedia page for feature 3124 in layer 20 of Gemma 2 2B (Gemma Scope, 16k): automatic explanations "references to San Francisco and related locations", "Location or place names", "San Francisco, Oakland, Bay Area"; positive logits SF, Bay, Contra, Oakland, Berkeley, Alameda, BART, Marin; activation density 0.193%; top-activating texts about Oakland, the Golden Gate Bridge and the San Francisco Bay Area'}
            width={2000}
            height={1278}
            caption={ru
              ? 'Признак 3124 слоя 20 Gemma 2 2B в каталоге Neuronpedia (снимок 1 октября 2026 года; описания генерируются моделями и могут меняться). Нажмите, чтобы рассмотреть.'
              : 'Feature 3124 in layer 20 of Gemma 2 2B in the Neuronpedia catalogue (captured on 1 October 2026; the explanations are model-generated and may change). Tap to view larger.'}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Читайте страницу по блокам. Слева — описания, которые сгенерировали другие языковые модели: два из трёх прямо называют
                Сан-Франциско и район залива, третье говорит шире — о названиях мест. В центре — токены, вероятность которых признак повышает: SF, Bay, Oakland,
                Berkeley, BART, Marin. Справа — плотность: признак срабатывает примерно на двух токенах из тысячи, это и есть
                разреженность. Внизу — тексты, на которых он активнее всего: про Оклендские холмы, мост Золотые Ворота, залив.
                Всё это пока корреляции. Проверить, что признак действительно влияет на поведение модели, можно кнопкой Steer
                — то есть вмешательством, о котором следующая глава.
              </>
            ) : (
              <>
                Read the page block by block. On the left are explanations generated by other language models: two of the three name
                San Francisco and the Bay Area outright, the third speaks more broadly of place names. In the middle are the tokens whose probability the feature raises: SF, Bay,
                Oakland, Berkeley, BART, Marin. On the right is the density: the feature fires on roughly two tokens in a
                thousand — that is the sparsity. At the bottom are the texts where it is most active: about the Oakland Hills,
                the Golden Gate Bridge, the bay. All of this is still correlation. Checking that the feature really affects the
                model&apos;s behaviour takes the Steer button — that is, an intervention, which is the subject of the next
                chapter.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 5: Steering and circuits */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 5: Управление признаками и схемы вычислений' : 'Chapter 5: Steering Features and Tracing Circuits'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Чтобы убедиться, что выключатель управляет именно этой лампой, его щёлкают и смотрят, что погасло. Наблюдать,
                что лампа и выключатель «часто горят вместе», недостаточно.
              </>
            ) : (
              <>
                To be sure a switch controls this particular lamp, you flip it and see what goes dark. Observing that the lamp
                and the switch &quot;are often on together&quot; is not enough.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                С признаками поступают так же: во время работы модели значение признака искусственно задают очень высоким или
                нулевым и смотрят, как меняется ответ. Это называют управлением признаком (feature steering). В работе о Claude
                3 Sonnet признак «Золотые Ворота» (номер 34M/31164353) зафиксировали на уровне в 10 раз выше его максимума — и
                модель начала называть себя мостом (<Cite href={SCALING_URL}>Templeton et al. 2024</Cite>). Ниже — рисунок из
                этой работы: слева ответы модели без вмешательства, справа — с зафиксированным признаком.
              </>
            ) : (
              <>
                Features are treated the same way: while the model runs, a feature&apos;s value is artificially set very high
                or to zero, and you watch how the answer changes. This is called feature steering. In the Claude 3 Sonnet study,
                the Golden Gate Bridge feature (number 34M/31164353) was clamped at 10 times its maximum — and the model began
                calling itself the bridge (<Cite href={SCALING_URL}>Templeton et al. 2024</Cite>). Below is a figure from that
                study: on the left the model&apos;s answers without intervention, on the right with the feature clamped.
              </>
            )}
          </p>
          <Screenshot
            src="/images/rooms/llm-interpretability/golden-gate-steering.png"
            alt={ru
              ? 'Рисунок из Scaling Monosemanticity: на вопрос «what is your physical form?» модель по умолчанию отвечает, что физической формы у неё нет, а с признаком The Golden Gate Bridge, зафиксированным на 10× максимума, описывает себя как мост Золотые Ворота; на вопрос о самой интересной науке модель по умолчанию отвечает Physics, а с признаком Brain sciences — Neuroscience'
              : 'A figure from Scaling Monosemanticity: asked "what is your physical form?", the default model says it has no physical form, while with The Golden Gate Bridge feature clamped to 10× its max it describes itself as the Golden Gate Bridge; asked for the most interesting science, the default model answers Physics, while with the Brain sciences feature it answers Neuroscience'}
            width={1408}
            height={880}
            caption={ru
              ? 'Управление признаками в Claude 3 Sonnet; фрагмент рисунка из статьи Scaling Monosemanticity на transformer-circuits.pub (снимок 1 октября 2026 года). Нажмите, чтобы рассмотреть.'
              : 'Feature steering in Claude 3 Sonnet; part of a figure from the Scaling Monosemanticity paper on transformer-circuits.pub (captured on 1 October 2026). Tap to view larger.'}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Во втором ряду признак «науки о мозге» меняет ответ с «физики» на «нейронауку». Вмешательство показывает, что
                признак причинно влияет на поведение, а не просто срабатывает рядом с нужными словами. Но 10-кратное
                превышение максимума — грубое воздействие: оно говорит о теме, которую признак продвигает, а не о том, что
                модель «верит» в своё тождество с мостом. В мае 2024 года Anthropic на сутки открыла такую модель для всех под
                названием Golden Gate Claude (<Cite href={GOLDEN_GATE_URL}>Anthropic 2024</Cite>). В той же работе нашлись
                признаки, важные для безопасности: небезопасный код, предвзятость, угодливость, обман (
                <Cite href={SCALING_URL}>Templeton et al. 2024</Cite>).
              </>
            ) : (
              <>
                In the second row, a &quot;brain sciences&quot; feature changes the answer from physics to neuroscience. The
                intervention shows that the feature causally affects behaviour rather than merely firing near the right words.
                But clamping at 10 times the maximum is a blunt intervention: it tells you about the topic the feature pushes,
                not that the model &quot;believes&quot; it is the bridge. In May 2024 Anthropic opened such a model to everyone
                for a day under the name Golden Gate Claude (<Cite href={GOLDEN_GATE_URL}>Anthropic 2024</Cite>). The same study
                found features that matter for safety: unsafe code, bias, sycophancy, deception (
                <Cite href={SCALING_URL}>Templeton et al. 2024</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Если собрать шаги вместе, работа со словарём признаков идёт так. Сначала собирают активации одного слоя модели
                на большом объёме текста. Затем на них обучают SAE, который восстанавливает активации через немногие
                включённые признаки. Потом читают тексты с наибольшей активацией каждого признака и дают ему описание. И
                наконец проверяют описание вмешательством: фиксируют признак и смотрят, как меняется поведение модели.
              </>
            ) : (
              <>
                Put together, work with a feature dictionary goes like this. First, activations of one model layer are
                collected over a large amount of text. Then an SAE is trained on them to reconstruct the activations through a
                few active features. Next, the top-activating texts of each feature are read and the feature is given a
                description. Finally, the description is checked by intervention: the feature is clamped and you watch how the
                model&apos;s behaviour changes.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Следующий шаг — увидеть не отдельный признак, а путь от входа к ответу. В 2025 году Anthropic описала графы
                атрибуции: блоки модели заменяют более понятной «заменяющей моделью» и отслеживают, какие признаки влияют на
                какие (<Cite href={METHODS_URL}>Ameisen et al. 2025</Cite>). Метод применили к Claude 3.5 Haiku. Ниже —
                упрощённый граф для промпта «Fact: the capital of the state containing Dallas is».
              </>
            ) : (
              <>
                The next step is to see not a single feature but the path from input to answer. In 2025 Anthropic described
                attribution graphs: the model&apos;s blocks are replaced with a more understandable &quot;replacement
                model&quot;, and one traces which features influence which (<Cite href={METHODS_URL}>Ameisen et al. 2025</Cite>).
                The method was applied to Claude 3.5 Haiku. Below is a simplified graph for the prompt &quot;Fact: the capital of
                the state containing Dallas is&quot;.
              </>
            )}
          </p>
          <Screenshot
            src="/images/rooms/llm-interpretability/dallas-austin-attribution-graph.png"
            alt={ru
              ? 'Рисунок 6 из статьи On the Biology of a Large Language Model: упрощённый граф атрибуции для промпта «Fact: the capital of the state containing Dallas is» с ответом Austin; от токенов capital и state идёт узел «say a capital», от токена Dallas — узел Texas, оба ведут к узлу «say Austin» и к ответу'
              : 'Figure 6 from On the Biology of a Large Language Model: a simplified attribution graph for the prompt "Fact: the capital of the state containing Dallas is" with the answer Austin; the capital and state tokens lead to a "say a capital" node, the Dallas token to a Texas node, and both lead to a "say Austin" node and to the answer'}
            width={2000}
            height={1102}
            caption={ru
              ? 'Граф атрибуции Dallas → Texas → Austin для Claude 3.5 Haiku; рисунок 6 из статьи On the Biology of a Large Language Model на transformer-circuits.pub (снимок 1 октября 2026 года). Нажмите, чтобы рассмотреть.'
              : 'The Dallas → Texas → Austin attribution graph for Claude 3.5 Haiku; Figure 6 of On the Biology of a Large Language Model on transformer-circuits.pub (captured on 1 October 2026). Tap to view larger.'}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Граф показывает два шага внутри модели: из «Dallas» получается «Texas», а вместе с «скажи столицу» это даёт
                «Austin». Авторы проверили это вмешательством: когда признаки «Texas» подавили и вместо них включили признаки
                «California», модель ответила «Sacramento» (<Cite href={BIOLOGY_URL}>Lindsey et al. 2025</Cite>). В той же
                работе нашлось планирование в стихах: модель выбирает слово для рифмы ещё до того, как начинает писать строку.
                Ограничения авторы называют сами: граф описывает упрощённую заменяющую модель, а содержательный результат
                удаётся получить примерно для четверти опробованных промптов. В мае 2025 года инструмент открыли для моделей
                Gemma-2-2b и Llama-3.2-1b, с интерфейсом на Neuronpedia (
                <Cite href={CIRCUIT_TRACER_URL}>Anthropic 2025</Cite>).
              </>
            ) : (
              <>
                The graph shows two steps inside the model: &quot;Dallas&quot; yields &quot;Texas&quot;, and together with
                &quot;say a capital&quot; that gives &quot;Austin&quot;. The authors checked this by intervention: when the
                &quot;Texas&quot; features were suppressed and &quot;California&quot; features switched on instead, the model
                answered &quot;Sacramento&quot; (<Cite href={BIOLOGY_URL}>Lindsey et al. 2025</Cite>). The same work found
                planning in poetry: the model picks the rhyming word before it starts writing the line. The authors state the
                limits themselves: the graph describes a simplified replacement model, and a meaningful result is obtained for
                roughly a quarter of the prompts tried. In May 2025 the tool was opened up for the Gemma-2-2b and Llama-3.2-1b
                models, with a frontend on Neuronpedia (<Cite href={CIRCUIT_TRACER_URL}>Anthropic 2025</Cite>).
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 6: The explanation has to be checked too */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 6: Объяснение тоже надо проверять' : 'Chapter 6: The Explanation Has to Be Checked Too'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Подпись под архивной фотографией кто-то когда-то сделал, и она может быть неверной. Опытный архивист читает
                подпись как гипотезу и сверяет её с самим снимком. С описаниями признаков нужно поступать так же: их пишут
                тоже модели, и они тоже ошибаются.
              </>
            ) : (
              <>
                The caption under an archive photo was written by someone at some point, and it can be wrong. An experienced
                archivist reads the caption as a hypothesis and checks it against the photo itself. Feature explanations call
                for the same treatment: they too are written by models, and they too make mistakes.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Вот пример из того же слоя Gemma 2 2B — признак 1566. Первое описание в списке, сгенерированное Claude 3.5
                Sonnet, называет его «упоминаниями достопримечательности Golden Gate в Сан-Франциско». Посмотрите, на каких
                текстах признак срабатывает сильнее всего.
              </>
            ) : (
              <>
                Here is an example from the same layer of Gemma 2 2B — feature 1566. The first explanation in the list,
                generated by Claude 3.5 Sonnet, calls it &quot;references to the Golden Gate landmark in San Francisco&quot;.
                Look at the texts where the feature fires most strongly.
              </>
            )}
          </p>
          <Screenshot
            src="/images/rooms/llm-interpretability/neuronpedia-feature-1566.png"
            alt={ru
              ? 'Страница признака 1566 слоя 20 модели Gemma 2 2B на Neuronpedia: первое описание «references to the "Golden Gate" landmark in San Francisco» (claude-3-5-sonnet), другие описания про слово «Golden» в названиях наград и спортивных команд; тексты с наибольшей активацией — Golden Globe, GoldenWaveFlow в коде, Kent State Golden Flashes, Golden Horseshoe, Golden Gate Park, Golden State Warriors, golden goose'
              : 'The Neuronpedia page for feature 1566 in layer 20 of Gemma 2 2B: the first explanation "references to the \'Golden Gate\' landmark in San Francisco" (claude-3-5-sonnet), other explanations about "Golden" in names of awards and sports teams; top-activating texts — Golden Globe, GoldenWaveFlow in code, Kent State Golden Flashes, Golden Horseshoe, Golden Gate Park, Golden State Warriors, golden goose'}
            width={2000}
            height={1341}
            caption={ru
              ? 'Признак 1566 слоя 20 Gemma 2 2B в каталоге Neuronpedia (снимок 1 октября 2026 года). Нажмите, чтобы рассмотреть.'
              : 'Feature 1566 in layer 20 of Gemma 2 2B in the Neuronpedia catalogue (captured on 1 October 2026). Tap to view larger.'}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Сильнейшие срабатывания — «Golden Globe», переменная GoldenWaveFlow в коде, футбольная команда Kent State
                Golden Flashes, район Golden Horseshoe, баскетбольная Golden State Warriors и «golden goose». Golden Gate Park
                среди них есть, но это лишь один случай из многих. Три других описания на той же странице ближе к правде:
                признак реагирует на слово «Golden» в названиях. Первое описание обобщило по нескольким примерам и ошиблось.
                Отсюда порядок работы: читать сами примеры активаций, сравнивать описания между собой и проверять их
                вмешательством.
              </>
            ) : (
              <>
                The strongest activations are &quot;Golden Globe&quot;, a GoldenWaveFlow variable in code, the Kent State Golden
                Flashes football team, the Golden Horseshoe region, the Golden State Warriors basketball team and &quot;golden
                goose&quot;. Golden Gate Park is among them, but only as one case of many. The three other explanations on the
                same page are closer to the truth: the feature responds to the word &quot;Golden&quot; in names. The first
                explanation generalised from a few examples and got it wrong. Hence the working order: read the activation
                examples themselves, compare the explanations with each other, and check them by intervention.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                У самих SAE тоже есть пределы. Словарь объясняет активации не полностью: в работе 2023 года — 79% вклада слоя,
                а в SAE на 34 млн признаков для Claude 3 Sonnet около 65% признаков оказались «мёртвыми», то есть почти никогда
                не включались (<Cite href={MONO_URL}>Bricken et al. 2023</Cite>;{' '}
                <Cite href={SCALING_URL}>Templeton et al. 2024</Cite>). В марте 2025 года команда интерпретируемости Google
                DeepMind опубликовала отрицательный результат: в задаче распознавания вредных намерений в запросах зонды на
                признаках SAE работали хуже простых линейных зондов на исходных активациях. Команда сообщила, что временно
                снижает приоритет фундаментальных исследований SAE, но оставляет их в наборе инструментов (
                <Cite href={GDM_SAE_URL}>Smith et al. 2025</Cite>).
              </>
            ) : (
              <>
                SAEs themselves have limits too. A dictionary does not explain the activations fully: 79% of the layer&apos;s
                contribution in the 2023 study, and in the 34-million-feature SAE for Claude 3 Sonnet about 65% of features
                turned out &quot;dead&quot;, meaning they almost never fired (<Cite href={MONO_URL}>Bricken et al. 2023</Cite>;{' '}
                <Cite href={SCALING_URL}>Templeton et al. 2024</Cite>). In March 2025 Google DeepMind&apos;s interpretability
                team published a negative result: on detecting harmful intent in requests, probes built on SAE features did
                worse than plain linear probes on the raw activations. The team said it was deprioritising fundamental SAE
                research for now while keeping SAEs in its toolkit (<Cite href={GDM_SAE_URL}>Smith et al. 2025</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Что это значит на практике? Представьте, что регулятор спрашивает банк, почему ИИ отказал клиенту в кредите. Ни
                карта внимания, ни описание признака, ни граф атрибуции, который удаётся построить для четверти промптов, не
                дают сегодня надёжного объяснения отдельного решения большой языковой модели. Аргумент Рудин здесь работает в
                полную силу: решение о кредите разумнее принимать понятной по устройству моделью с явными причинами отказа, а
                языковой модели оставить то, где её ошибку легко заметить, — например, черновик письма клиенту.
              </>
            ) : (
              <>
                What does this mean in practice? Imagine a regulator asks a bank why its AI turned a customer down for a loan.
                Neither an attention map, nor a feature explanation, nor an attribution graph that can be built for a quarter of
                prompts gives a reliable explanation of an individual decision by a large language model today. Rudin&apos;s
                argument applies in full here: the credit decision is better made by a model that is understandable by design,
                with explicit reasons for refusal, while the language model is left with work where its mistakes are easy to
                spot — a draft of the letter to the customer, for instance.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Куда движется область, видно по заявленным целям. Глава Anthropic Дарио Амодеи в 2025 году назвал цель
                компании — к 2027 году добиться, чтобы интерпретируемость надёжно обнаруживала большинство проблем моделей (
                <Cite href={AMODEI_URL}>Amodei 2025</Cite>). Это цель одной компании, а не достигнутый результат. Пока
                интерпретируемость работает вместе с другими инструментами контроля — например, с чтением рассуждений моделей
                из комнаты <RoomLink lang={lang} id="reasoning-models">о моделях-рассуждателях</RoomLink>, — а не вместо них.
              </>
            ) : (
              <>
                Where the field is heading shows in stated goals. In 2025 Anthropic&apos;s CEO Dario Amodei named the
                company&apos;s goal — by 2027, for interpretability to reliably detect most model problems (
                <Cite href={AMODEI_URL}>Amodei 2025</Cite>). That is one company&apos;s goal, not an achieved result. For now
                interpretability works alongside other oversight tools — such as reading models&apos; reasoning, covered in the{' '}
                <RoomLink lang={lang} id="reasoning-models">reasoning models</RoomLink> room — rather than instead of them.
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
            ? 'Все числа в этой комнате опираются на источники ниже; ссылки проверены 01.10.2026. Номер после года в тексте — страница в опубликованной версии работы или в её arXiv-версии, если печатная недоступна. Статьи на transformer-circuits.pub, Distill и в блогах не имеют страниц и цитируются без номера.'
            : 'Every number in this room rests on the sources below; the links were checked on 2026-10-01. The number after the year in the text is the page in the published version of the work, or in its arXiv version where the printed one is unavailable. Articles on transformer-circuits.pub, Distill and blogs have no pages and are cited without a number.'}
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
