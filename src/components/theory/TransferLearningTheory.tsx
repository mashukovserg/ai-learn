"use client";

import React from 'react';
import Link from 'next/link';
import Term from '@/components/Term';
import Terminal from '@/components/Terminal';
import Screenshot from '@/components/Screenshot';

type LocalizedText = { ru: string; en: string };

const YOSINSKI_URL = 'https://arxiv.org/abs/1411.1792';
const RAZAVIAN_URL = 'https://doi.org/10.1109/CVPRW.2014.131';
const RAGHU_URL = 'https://arxiv.org/abs/1902.07208';
const ULMFIT_URL = 'https://doi.org/10.18653/v1/P18-1031';
const BERT_URL = 'https://doi.org/10.18653/v1/N19-1423';
const LORA_URL = 'https://arxiv.org/abs/2106.09685';
const INTRINSIC_URL = 'https://doi.org/10.18653/v1/2021.acl-long.568';
const NEYSHABUR_URL = 'https://arxiv.org/abs/2008.11687';
const LIMA_URL = 'https://arxiv.org/abs/2305.11206';
const GPT3_URL = 'https://arxiv.org/abs/2005.14165';
const DEDUP_URL = 'https://doi.org/10.18653/v1/2022.acl-long.577';
const DOREMI_URL = 'https://arxiv.org/abs/2305.10429';
const INSTRUCTGPT_URL = 'https://arxiv.org/abs/2203.02155';
const R1_URL = 'https://doi.org/10.1038/s41586-025-09422-z';
const COT_URL = 'https://arxiv.org/abs/2201.11903';
const XU_URL = 'https://arxiv.org/abs/2401.11817';
const KALAI_URL = 'https://arxiv.org/abs/2509.04664';
const OPENAI_HALLUC_POST_URL = 'https://openai.com/index/why-language-models-hallucinate/';
const OPENAI_FT_URL = 'https://developers.openai.com/api/docs/guides/model-optimization';
const OPENAI_DEPRECATIONS_URL = 'https://developers.openai.com/api/docs/deprecations';
const GEMINI_TUNING_URL = 'https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/tuning/supervised-tuning/use';
const HF_BERT_URL = 'https://huggingface.co/google-bert/bert-base-uncased';

const SOURCES: { authors: string; title: string; venue: string; note: LocalizedText; href: string; label: string }[] = [
  {
    authors: 'Yosinski J., Clune J., Bengio Y., Lipson H.',
    title: 'How transferable are features in deep neural networks?',
    venue: 'NeurIPS 2014',
    note: { ru: 'первые слои общие, верхние специфичны; переносимость падает с удалением задач', en: 'first layers are general, top layers specific; transferability falls as tasks grow apart' },
    href: YOSINSKI_URL,
    label: 'arXiv:1411.1792',
  },
  {
    authors: 'Razavian A. S., Azizpour H., Sullivan J., Carlsson S.',
    title: 'CNN Features off-the-shelf: an Astounding Baseline for Recognition',
    venue: 'CVPR Workshops 2014',
    note: { ru: 'признаки OverFeat + линейный SVM против специализированных систем', en: 'OverFeat features + a linear SVM against specialised systems' },
    href: RAZAVIAN_URL,
    label: 'doi:10.1109/CVPRW.2014.131',
  },
  {
    authors: 'Raghu M., Zhang C., Kleinberg J., Bengio S.',
    title: 'Transfusion: Understanding Transfer Learning for Medical Imaging',
    venue: 'NeurIPS 2019',
    note: { ru: 'перенос с ImageNet на медицинские снимки даёт меньше, чем принято считать', en: 'transfer from ImageNet to medical images gives less than commonly assumed' },
    href: RAGHU_URL,
    label: 'arXiv:1902.07208',
  },
  {
    authors: 'Howard J., Ruder S.',
    title: 'Universal Language Model Fine-tuning for Text Classification',
    venue: 'ACL 2018',
    note: { ru: '100 размеченных и 50 тыс. неразмеченных отзывов IMDb против обучения с нуля на в 100 раз большем числе размеченных', en: '100 labelled plus 50k unlabelled IMDb reviews against training from scratch on 100× more labelled data' },
    href: ULMFIT_URL,
    label: 'doi:10.18653/v1/P18-1031',
  },
  {
    authors: 'Devlin J., Chang M.-W., Lee K., Toutanova K.',
    title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
    venue: 'NAACL 2019',
    note: { ru: 'предобучение на пропущенных словах: маскируется 15% токенов', en: 'pretraining on masked words: 15% of tokens are masked' },
    href: BERT_URL,
    label: 'doi:10.18653/v1/N19-1423',
  },
  {
    authors: 'Hu E. J. et al.',
    title: 'LoRA: Low-Rank Adaptation of Large Language Models',
    venue: 'ICLR 2022',
    note: { ru: 'для GPT-3 175B — в 10 000 раз меньше обучаемых параметров и в 3 раза меньше памяти GPU', en: 'for GPT-3 175B — 10,000× fewer trainable parameters and 3× less GPU memory' },
    href: LORA_URL,
    label: 'arXiv:2106.09685',
  },
  {
    authors: 'Aghajanyan A., Zettlemoyer L., Gupta S.',
    title: 'Intrinsic Dimensionality Explains the Effectiveness of Language Model Fine-Tuning',
    venue: 'ACL 2021',
    note: { ru: 'RoBERTa-Large: около 200 обучаемых параметров дают 90% качества полного дообучения на MRPC', en: 'RoBERTa-Large: about 200 trainable parameters reach 90% of full fine-tuning quality on MRPC' },
    href: INTRINSIC_URL,
    label: 'doi:10.18653/v1/2021.acl-long.568',
  },
  {
    authors: 'Neyshabur B., Sedghi H., Zhang C.',
    title: 'What is being transferred in transfer learning?',
    venue: 'NeurIPS 2020',
    note: { ru: 'модели, дообученные из одной точки, остаются в одном бассейне ландшафта потерь', en: 'models fine-tuned from one checkpoint stay in the same basin of the loss landscape' },
    href: NEYSHABUR_URL,
    label: 'arXiv:2008.11687',
  },
  {
    authors: 'Zhou C. et al.',
    title: 'LIMA: Less Is More for Alignment',
    venue: 'NeurIPS 2023',
    note: { ru: '1000 отобранных примеров, гипотеза поверхностного выравнивания', en: '1,000 curated examples, the superficial alignment hypothesis' },
    href: LIMA_URL,
    label: 'arXiv:2305.11206',
  },
  {
    authors: 'Brown T. B. et al.',
    title: 'Language Models are Few-Shot Learners',
    venue: 'NeurIPS 2020',
    note: { ru: 'фильтрация Common Crawl классификатором, веса смеси, few-shot без обновления весов', en: 'Common Crawl filtered with a classifier, mixture weights, few-shot with no weight updates' },
    href: GPT3_URL,
    label: 'arXiv:2005.14165',
  },
  {
    authors: 'Lee K. et al.',
    title: 'Deduplicating Training Data Makes Language Models Better',
    venue: 'ACL 2022',
    note: { ru: 'после дедупликации модель в 10 раз реже воспроизводит заученный текст', en: 'after deduplication the model emits memorised text ten times less often' },
    href: DEDUP_URL,
    label: 'doi:10.18653/v1/2022.acl-long.577',
  },
  {
    authors: 'Xie S. M. et al.',
    title: 'DoReMi: Optimizing Data Mixtures Speeds Up Language Model Pretraining',
    venue: 'NeurIPS 2023',
    note: { ru: 'пропорции доменов подбирает маленькая модель-посредник', en: 'domain proportions are set by a small proxy model' },
    href: DOREMI_URL,
    label: 'arXiv:2305.10429',
  },
  {
    authors: 'Ouyang L. et al.',
    title: 'Training language models to follow instructions with human feedback',
    venue: 'NeurIPS 2022',
    note: { ru: 'InstructGPT 1,3B предпочитают GPT-3 175B', en: '1.3B InstructGPT is preferred to 175B GPT-3' },
    href: INSTRUCTGPT_URL,
    label: 'arXiv:2203.02155',
  },
  {
    authors: 'DeepSeek-AI (Guo D. et al.)',
    title: 'DeepSeek-R1 incentivizes reasoning in LLMs through reinforcement learning',
    venue: 'Nature 2025',
    note: { ru: 'RL на задачах с проверяемым ответом: AIME 2024 с 15,6% до 77,9% (в arXiv v1 — 71,0%)', en: 'RL on tasks with verifiable answers: AIME 2024 from 15.6% to 77.9% (71.0% in arXiv v1)' },
    href: R1_URL,
    label: 'doi:10.1038/s41586-025-09422-z',
  },
  {
    authors: 'Wei J. et al.',
    title: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models',
    venue: 'NeurIPS 2022',
    note: { ru: 'PaLM 540B на GSM8K: 17,9% → 56,9% без изменения весов', en: 'PaLM 540B on GSM8K: 17.9% → 56.9% with no weight changes' },
    href: COT_URL,
    label: 'arXiv:2201.11903',
  },
  {
    authors: 'Xu Z., Jain S., Kankanhalli M.',
    title: 'Hallucination is Inevitable: An Innate Limitation of Large Language Models',
    venue: 'arXiv preprint 2024',
    note: { ru: 'формальный результат: полностью устранить галлюцинации нельзя', en: 'a formal result: hallucination cannot be eliminated completely' },
    href: XU_URL,
    label: 'arXiv:2401.11817',
  },
  {
    authors: 'Kalai A. T., Nachum O., Vempala S. S., Zhang E.',
    title: 'Why Language Models Hallucinate',
    venue: 'OpenAI, arXiv 2025',
    note: { ru: 'галлюцинации поддерживает оценка, которая поощряет угадывание', en: 'hallucinations are sustained by grading that rewards guessing' },
    href: KALAI_URL,
    label: 'arXiv:2509.04664',
  },
  {
    authors: 'OpenAI.',
    title: 'Why language models hallucinate',
    venue: 'openai.com, 2025',
    note: { ru: 'таблица SimpleQA из системной карточки GPT-5: доля отказов, точность и доля ошибок двух моделей', en: 'the SimpleQA table from the GPT-5 system card: abstention, accuracy and error rates of two models' },
    href: OPENAI_HALLUC_POST_URL,
    label: 'openai.com/index/why-language-models-hallucinate',
  },
  {
    authors: 'OpenAI.',
    title: 'Model optimization (fine-tuning guide)',
    venue: 'developers.openai.com',
    note: { ru: 'дообучение через API: SFT, DPO и reinforcement fine-tuning', en: 'fine-tuning through the API: SFT, DPO and reinforcement fine-tuning' },
    href: OPENAI_FT_URL,
    label: 'developers.openai.com/api/docs/guides/model-optimization',
  },
  {
    authors: 'OpenAI.',
    title: 'Deprecations — Update to OpenAI’s self-serve fine-tuning',
    venue: 'developers.openai.com',
    note: { ru: 'график сворачивания дообучения: 7 мая 2026, 2 июля 2026, 6 января 2027', en: 'the fine-tuning wind-down schedule: May 7, 2026, July 2, 2026, Jan 6, 2027' },
    href: OPENAI_DEPRECATIONS_URL,
    label: 'developers.openai.com/api/docs/deprecations',
  },
  {
    authors: 'Google Cloud.',
    title: 'Tune Gemini models with supervised fine-tuning',
    venue: 'docs.cloud.google.com',
    note: { ru: 'дообучение закрытых моделей Gemini, среди настроек — размер адаптера', en: 'fine-tuning closed Gemini models, with adapter size among the settings' },
    href: GEMINI_TUNING_URL,
    label: 'docs.cloud.google.com/gemini-enterprise-agent-platform/…/supervised-tuning',
  },
  {
    authors: 'Hugging Face.',
    title: 'google-bert/bert-base-uncased — Model tree',
    venue: 'huggingface.co',
    note: { ru: 'число дообученных версий, адаптеров, квантизаций и слияний', en: 'counts of fine-tunes, adapters, quantizations and merges' },
    href: HF_BERT_URL,
    label: 'huggingface.co/google-bert/bert-base-uncased',
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

export default function TransferLearningTheory({ lang }: { lang: string }) {
  const ru = lang === 'ru';

  return (
    <div className="space-y-8">
      {/* Chapter 1: From scratch vs reuse */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 1: Учить с нуля или переиспользовать' : 'Chapter 1: Train From Scratch or Reuse'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Представьте, что вам нужно научить человека читать рентгеновские снимки. Можно начать с младенца: сначала
                он научится различать края и тени, потом формы, потом отличать кость от мягких тканей — и только через годы
                дойдёт до переломов. А можно взять выпускника медицинского вуза. Видеть он уже умеет, и ему остаётся освоить
                узкую часть. Второй путь короче, потому что основная работа сделана раньше и ради другой цели.
              </>
            ) : (
              <>
                Imagine you need to teach someone to read X-ray images. You could start with an infant: first they learn to
                tell edges from shadows, then shapes, then bone from soft tissue — and only years later do they get to
                fractures. Or you could take a medical graduate. They already know how to see, and only the narrow part is
                left to learn. The second route is shorter because most of the work was done earlier, and for a different
                purpose.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                В машинном обучении работает та же логика. Модель сначала учат на большой и общей задаче, а потом
                переиспользуют выученное для другой, обычно более узкой. Такой подход называется{' '}
                <Term id="transfer-learning" lang={lang}>transfer learning</Term> — по-русски перенос обучения или
                трансферное обучение. Первый этап называют <Term id="pretraining" lang={lang}>предобучением</Term>{' '}
                (pretraining), второй — адаптацией, а всю схему коротко записывают как «pretrain → adapt».
              </>
            ) : (
              <>
                Machine learning runs on the same logic. A model is first trained on a large, general task, and what it
                learned is then reused for another, usually narrower one. This approach is called{' '}
                <Term id="transfer-learning" lang={lang}>transfer learning</Term>. The first stage is called{' '}
                <Term id="pretraining" lang={lang}>pretraining</Term>, the second adaptation, and the whole scheme is
                written in short as &quot;pretrain → adapt&quot;.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Зачем это нужно, видно по данным. Общую задачу размечать дёшево. Для языка это «предскажи следующее слово»:
                ответ уже есть в самом тексте, поэтому любой текст из интернета становится обучающим примером. Целевая
                задача обычно маленькая: две тысячи размеченных договоров, пятьсот снимков с диагнозом врача. Модели,
                которую учат на таком объёме с нуля, пришлось бы самой открыть, что такое слово или край изображения, — и
                на паре тысяч примеров она ничего хорошего не выучит.
              </>
            ) : (
              <>
                Why bother becomes clear from the data. The general task is cheap to label. For language it is &quot;predict
                the next word&quot;: the answer is already in the text itself, so any text on the internet becomes a
                training example. The target task is usually small: two thousand labelled contracts, five hundred scans
                with a doctor&apos;s diagnosis. A model trained on that much from scratch would have to discover on its
                own what a word or an image edge is — and on a couple of thousand examples it learns nothing good.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Как выглядит это разделение на практике, видно по одной команде. Ниже в Python загружается BERT — языковая
                модель 2018 года — для задачи из двух классов, например «спам / не спам». Обратите внимание на
                предупреждение, которое печатает библиотека transformers.
              </>
            ) : (
              <>
                What this split looks like in practice shows up in a single command. Below, Python loads BERT — a 2018
                language model — for a two-class task, say &quot;spam / not spam&quot;. Pay attention to the warning the
                transformers library prints.
              </>
            )}
          </p>
          <Terminal
            title="python3 · zsh"
            lines={[
              { cmd: 'from transformers import AutoModelForSequenceClassification', prompt: '>>>' },
              { cmd: 'model = AutoModelForSequenceClassification.from_pretrained("bert-base-uncased", num_labels=2)', prompt: '>>>' },
              { out: "Some weights of BertForSequenceClassification were not initialized from the model checkpoint at bert-base-uncased and are newly initialized: ['classifier.bias', 'classifier.weight']", tone: 'warn' },
              { out: 'You should probably TRAIN this model on a down-stream task to be able to use it for predictions and inference.', tone: 'warn' },
              { cmd: 'sum(p.numel() for p in model.parameters())', prompt: '>>>', comment: ru ? '# все параметры' : '# all parameters' },
              { out: '109483778' },
              { cmd: 'sum(p.numel() for p in model.classifier.parameters())', prompt: '>>>', comment: ru ? '# новая «голова»' : '# the new "head"' },
              { out: '1538' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Библиотека сообщает, что всё в модели загружено из предобученного файла, кроме двух тензоров — весов и
                смещения классификатора, которые созданы заново. Из 109 483 778 параметров новые только 1 538: маленькая
                «голова», которая переводит представление текста в два класса. Остальные 109 482 240 пришли из
                предобучения на книгах и английской Википедии. Адаптация обучит голову и слегка подвинет всё остальное.
              </>
            ) : (
              <>
                The library reports that everything in the model was loaded from the pretrained file except two tensors —
                the classifier&apos;s weight and bias, which were created fresh. Of 109,483,778 parameters only 1,538 are
                new: a small &quot;head&quot; that maps the text representation onto two classes. The other 109,482,240
                came from pretraining on books and English Wikipedia. Adaptation will train the head and nudge everything
                else slightly.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Отсюда ставка всей парадигмы: одна большая общая модель плюс дешёвая адаптация обходится лучше, чем много
                маленьких специализированных моделей, каждая из которых учится с нуля. Дальше в комнате — откуда эта ставка
                взялась, насколько глубоко можно вмешиваться в предобученную модель, что при этом происходит геометрически
                и что в этой картине обычно упрощают.
              </>
            ) : (
              <>
                Hence the bet behind the whole paradigm: one large general model plus cheap adaptation works out better
                than many small specialised models, each trained from scratch. The rest of the room covers where this bet
                came from, how deeply you can intervene in a pretrained model, what happens geometrically when you do, and
                what this picture usually oversimplifies.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 2: History */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 2: Откуда идея — зрение в 2014-м, язык в 2018-м' : 'Chapter 2: Where the Idea Came From — Vision in 2014, Language in 2018'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Идея старше больших языковых моделей. В компьютерном зрении около 2014 года стало понятно, что сеть,
                обученная распознавать тысячу категорий фотографий из ImageNet, на нижних слоях учит довольно универсальные
                вещи: края, текстуры, простые формы. Йосински с соавторами проверили это напрямую (
                <Cite href={YOSINSKI_URL}>Yosinski et al. 2014: 1</Cite>). Первый слой таких сетей раз за разом выучивает
                похожие детекторы краёв и цветовых пятен — независимо от набора данных и задачи. Чем выше слой, тем
                специфичнее признаки для исходной задачи и тем хуже они переносятся на задачу, далёкую от исходной.
              </>
            ) : (
              <>
                The idea is older than large language models. In computer vision, around 2014 it became clear that a
                network trained to recognise a thousand photo categories from ImageNet learns fairly universal things in
                its lower layers: edges, textures, simple shapes. Yosinski and colleagues tested this directly (
                <Cite href={YOSINSKI_URL}>Yosinski et al. 2014: 1</Cite>). The first layer of such networks learns similar
                edge and colour-blob detectors time after time — regardless of the dataset and the task. The higher the
                layer, the more specific its features are to the original task, and the worse they transfer to a task far
                from it.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Практический вывод сделали быстро. Разавян с соавторами взяли признаки из сети OverFeat, обученной на
                ImageNet, поставили сверху простой линейный классификатор и сравнили результат с системами, которые годами
                настраивали под конкретные задачи (<Cite href={RAZAVIAN_URL}>Razavian et al. 2014: 512</Cite>). Во всех
                задачах классификации изображений из их набора такая связка оказалась стабильно лучше, а в поиске похожих
                изображений — почти везде. Авторы назвали её «поразительной базовой линией». С тех пор типичный рецепт выглядел так: забрать нижние слои, заменить верхушку и дообучить её на
                своих данных, например на рентгеновских снимках.
              </>
            ) : (
              <>
                The practical conclusion came quickly. Razavian and colleagues took features from the OverFeat network
                trained on ImageNet, put a simple linear classifier on top, and compared the result with systems that had
                been tuned for specific tasks for years (<Cite href={RAZAVIAN_URL}>Razavian et al. 2014: 512</Cite>). On
                every image classification task in their set this combination came out consistently better, and on
                similar-image retrieval almost everywhere. The authors called it &quot;an astounding baseline&quot;. From then on the typical recipe was: take the lower layers, replace the top, and fine-tune
                it on your own data, for instance on X-ray images.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                У рецепта есть граница, и её тоже измерили. Рагху с соавторами проверили перенос с ImageNet на медицинские
                снимки — глазное дно и рентген грудной клетки (<Cite href={RAGHU_URL}>Raghu et al. 2019: 1, 7</Cite>). На
                больших медицинских наборах данных выигрыш в качестве оказался небольшим, а маленькие модели, обученные с
                нуля, работали сопоставимо. Главной пользой переноса там стала более быстрая сходимость обучения. Перенос
                сильнее всего помогает, когда исходная и целевая задачи близки, а целевых данных мало.
              </>
            ) : (
              <>
                The recipe has a limit, and that was measured too. Raghu and colleagues tested transfer from ImageNet to
                medical images — retinal fundus photos and chest X-rays (<Cite href={RAGHU_URL}>Raghu et al. 2019: 1, 7</Cite>).
                On large medical datasets the quality gain turned out small, and small models trained from scratch
                performed comparably. The main benefit of transfer there was faster convergence. Transfer helps most when
                the source and target tasks are close and target data is scarce.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                В обработке языка тот же сдвиг произошёл в 2018 году, и уложился он в один год: ULMFiT в январе, ELMo в
                феврале, GPT в июне, BERT в октябре. Общая задача у них — предсказать следующее слово (GPT, ULMFiT) или
                слово, скрытое в середине фразы (BERT маскирует 15% токенов,{' '}
                <Cite href={BERT_URL}>Devlin et al. 2019: 4174</Cite>). Представления, выученные на такой задаче по огромному
                корпусу, переносятся почти на любую языковую задачу. ULMFiT показал это числом на отзывах IMDb: 100
                размеченных примеров плюс 50 тысяч неразмеченных отзывов дали то же качество, что обучение с нуля на в 100
                раз большем числе размеченных; без неразмеченных — на в 10 раз большем (
                <Cite href={ULMFIT_URL}>Howard, Ruder 2018: 328, 334</Cite>).
              </>
            ) : (
              <>
                In language processing the same shift happened in 2018, and it fit into a single year: ULMFiT in January,
                ELMo in February, GPT in June, BERT in October. Their general task is to predict the next word (GPT,
                ULMFiT) or a word hidden in the middle of a sentence (BERT masks 15% of tokens,{' '}
                <Cite href={BERT_URL}>Devlin et al. 2019: 4174</Cite>). Representations learned on such a task over a huge
                corpus transfer to almost any language task. ULMFiT put a number on it with IMDb reviews: 100 labelled
                examples plus 50,000 unlabelled reviews matched training from scratch on 100 times more labelled data;
                without the unlabelled ones, on 10 times more (<Cite href={ULMFIT_URL}>Howard, Ruder 2018: 328, 334</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Сколько узких задач выросло из одной предобученной модели, видно на Hugging Face — крупнейшем открытом
                каталоге моделей. На странице каждой модели есть блок Model tree: он считает репозитории, авторы которых
                указали эту модель как базовую. Ниже — такой блок для той самой bert-base-uncased из терминала выше.
              </>
            ) : (
              <>
                How many narrow tasks grew out of one pretrained model can be seen on Hugging Face, the largest open model
                catalogue. Every model page has a Model tree block: it counts the repositories whose authors named this
                model as their base. Below is that block for the same bert-base-uncased from the terminal above.
              </>
            )}
          </p>
          <Screenshot
            src="/images/rooms/transfer-learning/hf-bert-model-tree.png"
            alt={ru
              ? 'Блок Model tree на странице google-bert/bert-base-uncased на Hugging Face: Adapters — 142 модели, Finetunes — 6996 моделей, Merges — 7 моделей, Quantizations — 33 модели'
              : 'The Model tree block on the google-bert/bert-base-uncased page on Hugging Face: Adapters — 142 models, Finetunes — 6996 models, Merges — 7 models, Quantizations — 33 models'}
            width={1082}
            height={414}
            caption={ru
              ? 'Дерево моделей bert-base-uncased на Hugging Face (снимок сделан 28 сентября 2026 года; числа растут). Нажмите, чтобы рассмотреть.'
              : 'The bert-base-uncased model tree on Hugging Face (captured on 28 September 2026; the counts keep growing). Tap to view larger.'}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Модель 2018 года сегодня служит основой для 6 996 дообученных версий и 142 адаптеров, а за последний месяц
                её скачали 41,7 млн раз. Если открыть список дообученных версий, видно, насколько разные задачи стоят на
                одном предобучении: детекторы спама и фишинга, классификаторы эмоций и тональности отзывов, распознавание
                аббревиатур, поиск аномалий в логах. Читать эти числа стоит как нижнюю границу: в дерево попадают только
                репозитории, где автор явно указал базовую модель в карточке.
              </>
            ) : (
              <>
                A 2018 model today serves as the base for 6,996 fine-tuned versions and 142 adapters, and it was downloaded
                41.7 million times in the last month. Open the list of fine-tunes and you see how different the tasks
                resting on one pretraining are: spam and phishing detectors, emotion and review-sentiment classifiers,
                acronym recognition, anomaly detection in logs. Read these numbers as a lower bound: the tree includes
                only repositories whose authors explicitly named the base model in the model card.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 3: The adaptation ladder */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 3: Лестница адаптации — от весов к промпту' : 'Chapter 3: The Adaptation Ladder — From Weights to the Prompt'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Вернёмся к выпускнику медвуза. Его можно отправить в ординатуру на несколько лет, можно дать короткий курс
                по одной теме, а можно просто вручить памятку перед сменой. Чем глубже вмешательство, тем оно дороже и тем
                сильнее меняет человека. С предобученной моделью так же: подтолкнуть её к целевой задаче можно на разную
                глубину. Ниже четыре способа, от самого глубокого к самому лёгкому.
              </>
            ) : (
              <>
                Back to the medical graduate. You can send them into a residency for several years, give them a short
                course on one topic, or simply hand them a checklist before a shift. The deeper the intervention, the more
                it costs and the more it changes the person. The same holds for a pretrained model: you can push it toward
                the target task at different depths. Below are four ways, from the deepest to the lightest.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                <strong>Полное дообучение (fine-tuning).</strong> Меняются все веса модели, но обычно немного: скорость
                обучения маленькая, эпох мало, и модель стартует не из случайной точки, а из предобученной. Это самый
                дорогой вариант, потому что в памяти приходится держать градиенты и состояние оптимизатора для каждого
                параметра. И самый рискованный: модель может разучиться тому, что умела. Этот эффект называется
                катастрофическим забыванием, и его практическая сторона разобрана в комнате{' '}
                <RoomLink lang={lang} id="fine-tuning-101">«Файн-тюнинг и адаптация»</RoomLink>.
              </>
            ) : (
              <>
                <strong>Full fine-tuning.</strong> All the model&apos;s weights change, but usually only a little: the
                learning rate is small, there are few epochs, and the model starts from the pretrained point rather than
                a random one. This is the most expensive option, because gradients and optimiser state have to be held in
                memory for every parameter. It is also the riskiest: the model can unlearn what it could do. This effect
                is called catastrophic forgetting, and its practical side is covered in the{' '}
                <RoomLink lang={lang} id="fine-tuning-101">Fine-Tuning &amp; Adaptation</RoomLink> room.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                <strong>Параметрически-эффективное дообучение (LoRA, адаптеры).</strong> Основные веса заморожены, учится
                только маленькая добавка к ним. Метод LoRA, предложенный в 2021 году, для GPT-3 со 175 млрд параметров
                сокращает число обучаемых параметров в 10 000 раз, а требования к памяти GPU — в 3 раза (
                <Cite href={LORA_URL}>Hu et al. 2021: 1</Cite>). Сам факт, что это работает, многое говорит: нужный сдвиг от
                предобученной точки часто низкоранговый, то есть небольшой. Агаджанян с соавторами показали это напрямую:
                у модели RoBERTa-Large обучали всего около 200 параметров, пересчитанных на все её веса, и она достигала
                90% качества полного дообучения на задаче MRPC (<Cite href={INTRINSIC_URL}>Aghajanyan et al. 2021: 7319</Cite>).
              </>
            ) : (
              <>
                <strong>Parameter-efficient fine-tuning (LoRA, adapters).</strong> The main weights are frozen, and only a
                small add-on to them is trained. LoRA, proposed in 2021, cuts the number of trainable parameters for the
                175-billion-parameter GPT-3 by 10,000 times and its GPU memory requirement by 3 times (
                <Cite href={LORA_URL}>Hu et al. 2021: 1</Cite>). The very fact that this works says a lot: the shift needed
                from the pretrained point is often low-rank, that is, small. Aghajanyan and colleagues showed it directly:
                RoBERTa-Large with only about 200 trained parameters, projected back onto all of its weights, reached
                90% of full fine-tuning quality on the MRPC task (
                <Cite href={INTRINSIC_URL}>Aghajanyan et al. 2021: 7319</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                <strong><Term id="post-training" lang={lang}>Post-training</Term> (пост-обучение).</strong> Так называют всё
                обучение после предобучения, которое превращает «продолжателя текстов» в ассистента: обычно сначала{' '}
                <Term id="sft" lang={lang}>SFT</Term> на примерах инструкций и ответов, затем обучение с подкреплением — на
                оценках людей (<Term id="rlhf" lang={lang}>RLHF</Term>) или на задачах с проверяемым ответом, например в
                математике и коде. Формально это тоже перенос: веса предобученной модели сдвигаются под новую цель. По
                технике это то же дообучение, полное или через адаптеры, — отличается цель: не одна узкая задача, а
                поведение в целом. Методы подробно разобраны в комнате{' '}
                <RoomLink lang={lang} id="ai-alignment">«Alignment: выравнивание ИИ»</RoomLink>.
              </>
            ) : (
              <>
                <strong><Term id="post-training" lang={lang}>Post-training</Term>.</strong> This is the name for all the
                training after pretraining that turns a &quot;text continuer&quot; into an assistant: usually{' '}
                <Term id="sft" lang={lang}>SFT</Term> on examples of instructions and answers first, then reinforcement
                learning — on human ratings (<Term id="rlhf" lang={lang}>RLHF</Term>) or on tasks with verifiable answers,
                such as maths and code. Formally this is transfer too: the pretrained weights shift toward a new goal. In
                technique it is the same fine-tuning, full or through adapters — what differs is the goal: not one narrow
                task but behaviour as a whole. The methods are covered in detail in the{' '}
                <RoomLink lang={lang} id="ai-alignment">AI Alignment &amp; RLHF</RoomLink> room.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                <strong>Промптинг, или in-context learning.</strong> Веса не меняются вообще — меняется только вход. Вы
                кладёте в промпт несколько примеров «вход → ответ» или просите рассуждать по шагам, и модель подстраивается
                прямо во время ответа. Промпт работает с уже готовыми весами и ничего в них не записывает. Это самая
                дешёвая и самая обратимая ступень: убрали примеры — поведение вернулось. Её предел — то, что модель уже
                умеет; к этому пределу вернёмся в главе 6, а приёмы собраны в комнате{' '}
                <RoomLink lang={lang} id="prompting-101">по промптингу</RoomLink>.
              </>
            ) : (
              <>
                <strong>Prompting, or in-context learning.</strong> The weights do not change at all — only the input
                does. You put a few &quot;input → answer&quot; examples into the prompt or ask the model to reason step by
                step, and it adapts right while answering. The prompt works with the finished weights and writes nothing
                into them. This is the cheapest and most reversible rung: remove the examples and the behaviour comes back.
                Its limit is what the model can already do; we return to that limit in chapter 6, and the techniques are
                collected in the <RoomLink lang={lang} id="prompting-101">prompting room</RoomLink>.
              </>
            )}
          </p>
          <div className="bg-card border border-border-emphasis rounded-xl p-5">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-neutral-400">
                <thead>
                  <tr className="border-b border-border-emphasis">
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{ru ? 'Способ' : 'Method'}</th>
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{ru ? 'Что меняется' : 'What changes'}</th>
                    <th className="text-left py-2 text-neutral-500 font-medium">{ru ? 'Как откатить' : 'How to roll back'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300">{ru ? 'Полное дообучение' : 'Full fine-tuning'}</td>
                    <td className="py-2 pr-4">{ru ? 'все веса, обычно немного' : 'all weights, usually a little'}</td>
                    <td className="py-2">{ru ? 'вернуться к исходной копии весов' : 'go back to the original copy of the weights'}</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300">{ru ? 'LoRA, адаптеры' : 'LoRA, adapters'}</td>
                    <td className="py-2 pr-4">{ru ? 'маленькая добавка, основа заморожена' : 'a small add-on, the base frozen'}</td>
                    <td className="py-2">{ru ? 'отключить адаптер' : 'detach the adapter'}</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300">Post-training</td>
                    <td className="py-2 pr-4">{ru ? 'веса или добавка; цель — поведение ассистента' : 'weights or an add-on; the goal is assistant behaviour'}</td>
                    <td className="py-2">{ru ? 'выпустить новую версию модели' : 'ship a new model version'}</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-neutral-300">{ru ? 'Промпт, in-context learning' : 'Prompt, in-context learning'}</td>
                    <td className="py-2 pr-4">{ru ? 'только вход' : 'only the input'}</td>
                    <td className="py-2">{ru ? 'убрать примеры из промпта' : 'remove the examples from the prompt'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: Geometry */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 4: Геометрия — ландшафт потерь' : 'Chapter 4: Geometry — the Loss Landscape'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Представьте горную местность в тумане. Каждая точка на карте — один возможный набор весов модели, а высота
                в этой точке — то, насколько модель ошибается. Эту высоту называют функцией потерь (loss), а всю местность —
                ландшафтом потерь. Обучение — спуск: модель видит только наклон под ногами и делает шаг вниз, потом ещё
                один. Настоящий ландшафт имеет миллиарды измерений, а не два, но для интуиции горной карты хватает.
              </>
            ) : (
              <>
                Picture mountain terrain in fog. Every point on the map is one possible set of model weights, and the
                altitude at that point is how wrong the model is. That altitude is called the loss function, and the whole
                terrain is the loss landscape. Training is a descent: the model sees only the slope under its feet and
                takes a step down, then another. The real landscape has billions of dimensions, not two, but for intuition
                the mountain map is enough.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                В этой картине предобучение — долгий спуск из случайной точки в широкую низину, где потери малы сразу для
                огромного числа задач. Адаптация — это в основном локальное движение из этой точки: небольшие шаги рядом, а
                не новый поход через хребты. Отсюда маленькая скорость обучения при дообучении, и отсюда же успех LoRA:
                если нужный сдвиг небольшой, его можно описать малым числом параметров.
              </>
            ) : (
              <>
                In this picture, pretraining is a long descent from a random point into a wide valley where the loss is
                low for a huge number of tasks at once. Adaptation is mostly local movement from that point: small steps
                nearby, not a new trek across the ridges. That is why fine-tuning uses a small learning rate, and it is
                also why LoRA succeeds: if the needed shift is small, a small number of parameters can describe it.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Это не только метафора — это измерили. Нейшабур с соавторами взяли две копии одной предобученной модели,
                дообучили их на разных данных и посмотрели на точки, лежащие на прямой между их весами (
                <Cite href={NEYSHABUR_URL}>Neyshabur et al. 2020: 2</Cite>). Потери на всём пути оставались низкими: обе
                дообученные модели лежат в одном «бассейне» ландшафта. У моделей, обученных с нуля, такой общей низины
                нет: между ними на прямой поднимается барьер — даже когда обе начинали из одной и той же случайной точки.
              </>
            ) : (
              <>
                This is not only a metaphor — it has been measured. Neyshabur and colleagues took two copies of one
                pretrained model, fine-tuned them on different data, and looked at the points lying on the straight line
                between their weights (<Cite href={NEYSHABUR_URL}>Neyshabur et al. 2020: 2</Cite>). The loss stayed low all
                along the path: both fine-tuned models lie in the same &quot;basin&quot; of the landscape. Models trained
                from scratch share no such valley: a barrier rises between them on the line — even when both started from
                the very same random point.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Если адаптация — короткий шаг, то знания должны приходить из предобучения. Это проверили в работе LIMA 2023
                года (<Cite href={LIMA_URL}>Zhou et al. 2023: 1–2</Cite>). Модель LLaMa на 65 млрд параметров дообучили
                всего на 1000 тщательно отобранных примерах, без обучения с подкреплением. В сравнении, которое проводили
                люди, её ответы в 43% случаев признали равными ответам GPT-4 или лучше. Авторы сформулировали гипотезу
                поверхностного выравнивания: знания и способности модель почти целиком получает при предобучении, а
                адаптация в основном выбирает режим и стиль, в котором их показывать.
              </>
            ) : (
              <>
                If adaptation is a short step, knowledge must come from pretraining. The 2023 LIMA paper tested this (
                <Cite href={LIMA_URL}>Zhou et al. 2023: 1–2</Cite>). A 65-billion-parameter LLaMa model was fine-tuned on only
                1,000 carefully selected examples, with no reinforcement learning. In a comparison run by people, its
                answers were judged equal to or better than GPT-4&apos;s in 43% of cases. The authors formulated the
                superficial alignment hypothesis: a model gets its knowledge and capabilities almost entirely during
                pretraining, and adaptation mostly selects the mode and style in which to show them.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Из этого следует практический вывод. Если нужно, чтобы модель знала новые факты — свежий каталог товаров,
                внутренние регламенты, — эти факты надёжнее подавать во входе, через контекст или RAG, чем пытаться
                впечатать их тысячей примеров. Дообучение хорошо закрепляет формат и манеру ответа; новые знания оно
                переносит плохо.
              </>
            ) : (
              <>
                A practical conclusion follows. If you need the model to know new facts — a fresh product catalogue,
                internal regulations — those facts are more reliably supplied in the input, through the context or RAG,
                than imprinted with a thousand examples. Fine-tuning is good at fixing the format and manner of answers;
                it transfers new knowledge poorly.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Где в этой картине промпт? Он вообще не двигает точку по ландшафту: веса остаются на месте. Полезнее думать
                так: промпт выбирает, какую из уже существующих «траекторий» модель запустит. Если нужная способность в
                модели есть, хороший промпт может достать её далеко. Если её нет, никакие токены инструкции не помогут.
              </>
            ) : (
              <>
                Where is the prompt in this picture? It does not move the point across the landscape at all: the weights
                stay put. A more useful way to think about it: the prompt selects which of the already existing
                &quot;trajectories&quot; the model will run. If the needed capability is in the model, a good prompt can
                reach it far. If it is not, no instruction tokens will help.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 5: Data curation and post-training */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 5: Не «среднее по интернету» — курирование данных и post-training' : 'Chapter 5: Not "the Internet Average" — Data Curation and Post-training'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Картину «модель учится на реальном распределении текстов, и её состав никто сознательно не выбирает»
                встречаешь часто. Она устарела. Ещё до начала предобучения корпус чистят и перемешивают по правилам, и
                этими правилами крупные лаборатории занимаются так же серьёзно, как архитектурой. Приёмов три. Первый —
                дедупликация: Ли с соавторами нашли в корпусе C4 одно предложение из 61 слова, повторённое больше 60 000
                раз, а после удаления дубликатов модель в 10 раз реже воспроизводила заученный текст дословно (
                <Cite href={DEDUP_URL}>Lee et al. 2022: 8424</Cite>).
              </>
            ) : (
              <>
                The picture &quot;the model learns from the real distribution of texts, and nobody deliberately chooses
                what goes in&quot; comes up often. It is out of date. Before pretraining even starts, the corpus is cleaned
                and mixed by rules, and large labs work on those rules as seriously as on architecture. There are three
                jobs. The first is deduplication: Lee and colleagues found a single 61-word sentence repeated over 60,000
                times in the C4 corpus, and after duplicates were removed the model reproduced memorised text verbatim ten
                times less often (<Cite href={DEDUP_URL}>Lee et al. 2022: 8424</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Второй — фильтры качества, часто в виде отдельного классификатора. Для GPT-3 простой классификатор учился
                отличать тексты, похожие на WebText, Википедию и корпус книг, от сырого Common Crawl; из 45 ТБ сжатого
                текста после фильтрации осталось 570 ГБ (<Cite href={GPT3_URL}>Brown et al. 2020: 8, 43</Cite>). Третий —
                пропорции доменов. Источники GPT-3 брали не пропорционально их размеру: Common Crawl давал 60% смеси, а
                Википедию модель за обучение увидела 3,4 раза, тогда как Common Crawl — меньше половины одного прохода (
                <Cite href={GPT3_URL}>там же: 9</Cite>). Код и
                математику сегодня систематически берут с повышенным весом, а для подбора пропорций есть целые методы:
                в DoReMi их выставляет маленькая модель-посредник, и большая модель доходит до того же качества за меньшее
                число шагов (<Cite href={DOREMI_URL}>Xie et al. 2023: 1</Cite>). К этому добавляют синтетические данные.
              </>
            ) : (
              <>
                The second is quality filters, often in the form of a separate classifier. For GPT-3 a simple classifier
                learned to tell texts resembling WebText, Wikipedia and a books corpus from raw Common Crawl; of 45 TB of
                compressed text, 570 GB remained after filtering (<Cite href={GPT3_URL}>Brown et al. 2020: 8, 43</Cite>).
                The third is domain proportions. GPT-3&apos;s sources were not sampled in proportion to their size: Common
                Crawl made up 60% of the mix, yet the model saw Wikipedia 3.4 times over training and Common Crawl less
                than half of one pass (<Cite href={GPT3_URL}>ibid.: 9</Cite>). Code and maths are now systematically upweighted, and there are whole methods for
                choosing proportions: in DoReMi a small proxy model sets them, and the large model reaches the same
                quality in fewer steps (<Cite href={DOREMI_URL}>Xie et al. 2023: 1</Cite>). Synthetic data is added on top.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Итог стоит сформулировать аккуратно. Готовой онтологии знаний, по которой размечают корпус, действительно
                нет. Но и «реального распределения текстов» нет: смесь данных подобрана под цели. Просто цели
                прагматические — «лучше на задачах по коду», «меньше заученного мусора», — а не онтологические.
              </>
            ) : (
              <>
                The conclusion is worth stating carefully. There really is no ready-made ontology of knowledge against which
                the corpus is labelled. But there is no &quot;real distribution of texts&quot; either: the data mixture is
                chosen to fit goals. The goals are simply pragmatic — &quot;better on coding tasks&quot;, &quot;less
                memorised junk&quot; — rather than ontological.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Вторая частая картина — «пользователь разговаривает со средним по всем текстам, поэтому модели обречены быть
                посредственными». Посредственность и усреднённость — скорее свойство базовой модели после предобучения.
                Post-training сдвигает поведение заметно. В работе об InstructGPT 2022 года люди предпочитали ответы модели
                на 1,3 млрд параметров после post-training ответам исходной GPT-3 на 175 млрд — при в 100 раз меньшем
                размере (<Cite href={INSTRUCTGPT_URL}>Ouyang et al. 2022: 1</Cite>).
              </>
            ) : (
              <>
                The second common picture is &quot;the user talks to an average of all texts, so models are doomed to be
                mediocre&quot;. Mediocrity and averageness are rather a property of the base model after pretraining.
                Post-training shifts behaviour noticeably. In the 2022 InstructGPT paper, people preferred the answers of a
                1.3-billion-parameter model after post-training to those of the original 175-billion-parameter GPT-3 —
                despite being 100 times smaller (<Cite href={INSTRUCTGPT_URL}>Ouyang et al. 2022: 1</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Последние пару лет к этому добавилось обучение с подкреплением на задачах с проверяемым ответом —
                математике и коде, где правильность решения можно проверить программой, а не мнением человека. Оно даёт
                прирост именно там, где «среднее по интернету» слабое. В DeepSeek-R1 такое обучение без единого примера
                рассуждений от людей подняло долю решённых задач олимпиады AIME 2024 с 15,6% до 77,9% (
                <Cite href={R1_URL}>DeepSeek-AI 2025: 634</Cite>). Так что тезис «модели должны быть посредственными» верен для
                объекта предобучения, но не для продукта.
              </>
            ) : (
              <>
                In the last couple of years, reinforcement learning on tasks with verifiable answers has been added to
                this — maths and code, where a program rather than a person&apos;s opinion can check whether a solution is
                right. It brings gains exactly where &quot;the internet average&quot; is weak. In DeepSeek-R1, such
                training, without a single human-written reasoning example, raised the share of solved AIME 2024 olympiad
                problems from 15.6% to 77.9% (<Cite href={R1_URL}>DeepSeek-AI 2025: 634</Cite>). So the thesis &quot;models must
                be mediocre&quot; holds for the object of pretraining, not for the product.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 6: Prompting, closed models, hallucinations */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 6: Промпт, закрытые модели и галлюцинации — где проходят границы' : 'Chapter 6: Prompts, Closed Models and Hallucinations — Where the Limits Lie'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Промпт слабее дообучения, но не настолько, чтобы считать его почти бесполезным. В статье о GPT-3 2020 года
                несколько примеров в промпте, без единого обновления весов, поднимали точность на вопросах TriviaQA с 64,3%
                до 71,2% (<Cite href={GPT3_URL}>Brown et al. 2020: 13</Cite>). Просьба рассуждать по шагам (chain of
                thought) дала модели PaLM 540B на школьных задачах GSM8K 56,9% вместо 17,9% (
                <Cite href={COT_URL}>Wei et al. 2022: 20</Cite>).
              </>
            ) : (
              <>
                The prompt is weaker than fine-tuning, but not so weak that it can be written off. In the 2020 GPT-3 paper,
                a few examples in the prompt, without a single weight update, raised accuracy on TriviaQA questions from
                64.3% to 71.2% (<Cite href={GPT3_URL}>Brown et al. 2020: 13</Cite>). Asking the model to reason step by
                step (chain of thought) gave PaLM 540B 56.9% instead of 17.9% on the GSM8K school maths problems (
                <Cite href={COT_URL}>Wei et al. 2022: 20</Cite>).
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Но у той же работы есть и вторая половина результата: прирост от рассуждения по шагам появлялся только у
                моделей примерно от 100 млрд параметров, а маленькие модели писали гладкие, но нелогичные цепочки (
                <Cite href={COT_URL}>Wei et al. 2022: 4</Cite>). Это
                граница из главы 4 в числах: промпт достаёт способность, если она в модели есть, и не создаёт её, если нет.
              </>
            ) : (
              <>
                But the same paper has a second half to its result: the gain from step-by-step reasoning appeared only in
                models of roughly 100 billion parameters and up, while small models wrote fluent but illogical chains (
                <Cite href={COT_URL}>Wei et al. 2022: 4</Cite>). This
                is the limit from chapter 4 in numbers: a prompt reaches a capability if it is in the model and does not
                create it if it is not.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Второе частое утверждение — «закрытую модель дообучить невозможно». Веса для этого на руках не нужны. Вы
                загружаете данные, провайдер обучает модель на своей инфраструктуре и выдаёт идентификатор новой модели, а
                веса остаются у него. Так устроено дообучение моделей Gemini в облаке Google (
                <Cite href={GEMINI_TUNING_URL}>Google Cloud, supervised tuning</Cite>). Среди настроек там есть размер
                адаптера: провайдер и сам дообучает через небольшую добавку к весам, то есть на второй ступени лестницы из
                главы 3.
              </>
            ) : (
              <>
                The second common claim is &quot;a closed model cannot be fine-tuned&quot;. You do not need the weights in
                hand for that. You upload data, the provider trains the model on its infrastructure and hands you the
                identifier of a new model, while the weights stay with the provider. That is how Gemini models are
                fine-tuned in Google&apos;s cloud (<Cite href={GEMINI_TUNING_URL}>Google Cloud, supervised tuning</Cite>).
                One of the settings there is the adapter size: the provider itself fine-tunes through a small add-on to the
                weights, that is, on the second rung of the ladder from chapter 3.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                У этого пути есть ограничение, которого нет у открытых весов: доступность решает провайдер. OpenAI долго
                предлагала дообучение через API (<Cite href={OPENAI_FT_URL}>OpenAI, Model optimization</Cite>), а в мае
                2026 года начала сворачивать платформу. Ниже — уведомление об этом в документации компании.
              </>
            ) : (
              <>
                This route has a limit that open weights do not: the provider decides whether it is available. OpenAI
                offered fine-tuning through its API for a long time (<Cite href={OPENAI_FT_URL}>OpenAI, Model
                optimization</Cite>), and in May 2026 it began winding the platform down. Below is the notice about it in
                the company&apos;s documentation.
              </>
            )}
          </p>
          <Screenshot
            src="/images/rooms/transfer-learning/openai-fine-tuning-winddown.png"
            alt={ru
              ? 'Раздел «Update to OpenAI’s self-serve fine-tuning» на странице Deprecations документации OpenAI: таблица с датами 7 мая 2026, 2 июля 2026 и 6 января 2027 и ограничениями на создание задач дообучения'
              : 'The “Update to OpenAI’s self-serve fine-tuning” section on the Deprecations page of the OpenAI docs: a table with the dates May 7, 2026, July 2, 2026 and Jan 6, 2027 and the restrictions on creating fine-tuning jobs'}
            width={1616}
            height={854}
            caption={ru
              ? 'Уведомление о сворачивании дообучения на странице Deprecations в документации OpenAI (снимок сделан 28 сентября 2026 года). Нажмите, чтобы рассмотреть.'
              : 'The fine-tuning wind-down notice on the Deprecations page of the OpenAI docs (captured on 28 September 2026). Tap to view larger.'}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Таблица читается как график закрытия двери (<Cite href={OPENAI_DEPRECATIONS_URL}>OpenAI, Deprecations</Cite>).
                С 7 мая 2026 года дообучение недоступно организациям, которые им раньше не пользовались; с 2 июля — тем,
                кто 60 дней не обращался к своим дообученным моделям; с 6 января 2027 года новые задачи не смогут создавать
                и активные клиенты. Уже дообученные модели продолжат отвечать, пока не выведут из эксплуатации их базовую
                модель. Отсюда два вывода. «Невозможно» — слишком сильно: дообучение закрытых моделей существует. Но и
                рассчитывать на него долгосрочно можно только в пределах решений провайдера; если адаптация — часть вашего
                продукта на годы, открытые веса дают контроль, которого API не даёт.
              </>
            ) : (
              <>
                The table reads as a schedule for closing a door (<Cite href={OPENAI_DEPRECATIONS_URL}>OpenAI,
                Deprecations</Cite>). From May 7, 2026, fine-tuning is unavailable to organisations that had not used it
                before; from July 2, to those that had not called their fine-tuned models for 60 days; from January 6, 2027,
                even active customers will not be able to create new jobs. Models already fine-tuned keep answering until
                their base model is retired. Two conclusions follow. &quot;Impossible&quot; is too strong: fine-tuning of
                closed models exists. But you can rely on it long-term only within the provider&apos;s decisions; if
                adaptation is part of your product for years, open weights give a control that an API does not.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Третье — про <Term id="hallucination" lang={lang}>галлюцинации</Term>. Есть формальные результаты, что
                полностью устранить их нельзя: Сюй с соавторами доказывают, что любая вычислимая языковая модель будет
                галлюцинировать на каких-то входах — в рамках их формальной модели, где ответы сверяют с заданной «истинной» функцией (
                <Cite href={XU_URL}>Xu et al. 2024: 2, 7</Cite>). Калаи с соавторами из
                OpenAI связывают галлюцинации с тем, как устроены обучение и оценка (
                <Cite href={KALAI_URL}>Kalai et al. 2025: 1</Cite>): большинство тестов ставит ноль и за ошибку, и за
                ответ «не знаю», поэтому модели, как студенту на экзамене, выгоднее угадывать.
              </>
            ) : (
              <>
                The third is about <Term id="hallucination" lang={lang}>hallucinations</Term>. There are formal results
                showing they cannot be eliminated completely: Xu and colleagues prove that any computable language model
                will hallucinate on some inputs — within their formal setting, where answers are checked against a given &quot;ground truth&quot; function (
                <Cite href={XU_URL}>Xu et al. 2024: 2, 7</Cite>). Kalai and colleagues at
                OpenAI tie hallucinations to how training and evaluation are set up (
                <Cite href={KALAI_URL}>Kalai et al. 2025: 1</Cite>): most tests give zero both for a wrong answer and for
                &quot;I don&apos;t know&quot;, so the model, like a student in an exam, is better off guessing.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Но «неустранимы в принципе» не значит «всегда». Частоту можно снижать, и её снижают. В сопроводительном
                посте OpenAI приводит сравнение на тесте SimpleQA из системной карточки GPT-5 (
                <Cite href={OPENAI_HALLUC_POST_URL}>OpenAI 2025</Cite>):
                у двух моделей почти одинаковая точность, 22% и 24%, но доля ошибок — 26% против 75%, потому что первая в
                52% случаев отвечает «не знаю», а вторая — только в 1%.
              </>
            ) : (
              <>
                But &quot;impossible to eliminate in principle&quot; does not mean &quot;always&quot;. The rate can be
                reduced, and it is. In its companion post OpenAI gives a comparison on the SimpleQA test from the GPT-5 system card (
                <Cite href={OPENAI_HALLUC_POST_URL}>OpenAI 2025</Cite>): two models have almost the same accuracy, 22% and
                24%, but their error rates are 26% versus 75%, because the first answers &quot;I don&apos;t know&quot; in
                52% of cases and the second in only 1%.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Если свести комнату к одной фразе: transfer learning — это ставка на то, что одна большая общая модель плюс
                дешёвая адаптация лучше, чем много маленьких специализированных. Геометрия из главы 4 хорошо описывает этот
                процесс. Но и данные для предобучения, и post-training сегодня активно направляют вручную — и именно это
                отличает продукт от «среднего по интернету».
              </>
            ) : (
              <>
                To put the room in one sentence: transfer learning is a bet that one large general model plus cheap
                adaptation beats many small specialised ones. The geometry from chapter 4 describes this process well. But
                both the pretraining data and post-training are now actively steered by hand — and that is exactly what
                separates the product from &quot;the internet average&quot;.
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
            ? 'Все числа в этой комнате опираются на источники ниже; ссылки проверены 28.09.2026. Номер после года в тексте — страница в опубликованной версии работы или в её arXiv-версии, если журнальной нет.'
            : 'Every number in this room rests on the sources below; the links were checked on 2026-09-28. The number after the year in the text is the page in the published version of the work, or in its arXiv version where there is no journal one.'}
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
