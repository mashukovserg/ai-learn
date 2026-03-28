"use client";

import React from 'react';
import { Database, Search, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function ResearchGroundingTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
            <Search className="text-emerald-500" />
            {lang === 'ru' ? 'Зачем модели нужен внешний источник' : 'Why Models Need External Evidence'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Представьте блестящего юриста, который пишет сложное заключение исключительно по памяти, не открывая ни одного документа. Каким бы умным он ни был, он рискует перепутать точные даты, номера статей и прецеденты. Это происходит не от незнания, а потому что человеческая память работает ассоциативно, а не фотографически.'
                : 'Imagine a brilliant lawyer writing a complex legal brief entirely from memory, without opening a single document. No matter how smart they are, they risk confusing exact dates, article numbers, and precedents. This happens not out of ignorance, but because human memory works associatively, not photographically.'}
            </p>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Большая Языковая Модель (LLM) устроена похожим образом. Все её "знания" — это веса (математические параметры), зафиксированные в момент окончания обучения. При генерации ответа она статистически предсказывает следующее слово. Она обязана выдать наиболее вероятный ответ, даже если фактически "не уверена" в нем. Именно поэтому возникают галлюцинации.'
                : 'A Large Language Model (LLM) works in a similar way. All its "knowledge" consists of weights (mathematical parameters) fixed at the moment training ended. During generation, it statistically predicts the next word. It is forced to output the most probable answer, even if it is factually "unsure" of it. This is exactly why hallucinations occur.'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'В бытовых разговорах или при написании стихов это незаметно. Но в задачах, где цена ошибки критически высока — медицинские диагнозы, финансовая аналитика, юриспруденция — приблизительность статистического предсказания становится недопустимой. Решение состоит не в том, чтобы заставить модель "знать всё наизусть", а в том, чтобы дать ей возможность "погуглить" и свериться с фактами перед ответом. Этот подход называется "Заземлением" (Grounding).'
                : 'In casual conversation or poetry writing, this is unnoticeable. But in high-stakes tasks where the cost of an error is critical — medical diagnoses, financial analytics, law — the approximation of statistical prediction becomes unacceptable. The solution is not to force the model to "know everything by heart," but to let it "google" and verify facts before answering. This approach is called "Grounding."'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 1: The RAG Architecture */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-blue-400">
            <Database className="text-blue-500" />
            {lang === 'ru' ? 'Глава 1: Анатомия RAG' : 'Chapter 1: The Anatomy of RAG'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-6">
              {lang === 'ru'
                ? 'Главный архитектурный паттерн для заземления ИИ — это RAG (Retrieval-Augmented Generation / Генерация, дополненная поиском). Он превращает языковую модель из "всезнайки" в умного аналитика, который работает с предоставленными документами. Процесс состоит из трёх ключевых фаз.'
                : 'The primary architectural pattern for grounding AI is RAG (Retrieval-Augmented Generation). It transforms a language model from a "know-it-all" into a smart analyst working with provided documents. The process consists of three key phases.'}
            </p>
            
            <div className="space-y-6">
              <div className="bg-deep border border-border-subtle rounded-lg p-5">
                <h4 className="text-blue-400 font-bold mb-2">1. Поиск (Retrieve)</h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'ru'
                    ? 'Пользователь задает вопрос. Система берет этот вопрос и идет искать релевантную информацию во внешней базе данных (база знаний компании, интернет, папки с PDF). Поиск может быть ключевым (как в Google) или семантическим (через векторные базы данных и эмбеддинги).'
                    : 'The user asks a question. The system takes this query and searches for relevant information in an external database (company knowledge base, internet, PDF folders). The search can be keyword-based (like Google) or semantic (via vector databases and embeddings).'}
                </p>
              </div>
              <div className="bg-deep border border-border-subtle rounded-lg p-5">
                <h4 className="text-blue-400 font-bold mb-2">2. Дополнение (Augment)</h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'ru'
                    ? 'Найденные фрагменты текста не отдаются пользователю сразу. Они вставляются в скрытый системный промпт для LLM. Теперь промпт выглядит так: "Ответь на вопрос пользователя, используя ТОЛЬКО следующие факты: [Вставка 5 абзацев текста]. Вопрос: [Вопрос пользователя]".'
                    : 'The retrieved text chunks are not shown directly to the user. They are injected into a hidden system prompt for the LLM. The prompt now looks like: "Answer the user\'s question using ONLY the following facts: [Insert 5 paragraphs of text]. Question: [User question]".'}
                </p>
              </div>
              <div className="bg-deep border border-border-subtle rounded-lg p-5">
                <h4 className="text-blue-400 font-bold mb-2">3. Генерация (Generate)</h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'ru'
                    ? 'Модель читает весь этот контекст и формулирует красивый, связный и точный ответ. Самое важное: она использует свои лингвистические навыки для синтеза текста, но факты берет из жестко заданного контекста, а не из своей "внутренней памяти".'
                    : 'The model reads all this context and formulates a beautiful, coherent, and precise answer. Crucially, it uses its linguistic skills to synthesize text, but pulls facts from the hardcoded context rather than its "internal memory."'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: Where Grounding Fails */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-amber-400">
            <AlertTriangle className="text-amber-500" />
            {lang === 'ru' ? 'Глава 2: Где ломается RAG' : 'Chapter 2: Where RAG Fails'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Заземление работает только в том случае, если каждое звено в цепочке RAG надежно. На практике инженеры постоянно борются с утечками качества на трех уровнях.'
                : 'Grounding only works if every link in the RAG chain is reliable. In practice, engineers constantly battle quality leaks at three levels.'}
            </p>

            <ul className="text-neutral-400 space-y-4 mb-6">
              <li>
                <strong className="text-amber-300">{lang === 'ru' ? 'Проблема 1: Слепой поиск (Bad Retrieval).' : 'Problem 1: Blind Retrieval.'}</strong><br />
                {lang === 'ru'
                  ? 'Если поисковая система не смогла найти нужный документ в корпоративной базе и не передала его модели, LLM либо честно скажет "Я не знаю", либо (что хуже) начнет фантазировать. Качество RAG на 80% зависит от качества поиска, а не от ума языковой модели.'
                  : 'If the search engine fails to find the right document in the database and doesn\'t pass it to the model, the LLM will either honestly say "I don\'t know" or (worse) start hallucinating. RAG quality depends 80% on search quality, not the LLM\'s intelligence.'}
              </li>
              <li>
                <strong className="text-amber-300">{lang === 'ru' ? 'Проблема 2: Потеря в середине (Lost in the Middle).' : 'Problem 2: Lost in the Middle.'}</strong><br />
                {lang === 'ru'
                  ? 'Даже если вы нашли 20 релевантных документов и запихнули их в контекстное окно, модель может проигнорировать факты, находящиеся в середине текста. LLM склонны обращать больше внимания на начало и конец промпта.'
                  : 'Even if you find 20 relevant documents and cram them into the context window, the model might ignore facts located in the middle of the text. LLMs tend to pay more attention to the beginning and end of a prompt.'}
              </li>
              <li>
                <strong className="text-amber-300">{lang === 'ru' ? 'Проблема 3: Ложное цитирование (Citation Hallucination).' : 'Problem 3: Citation Hallucination.'}</strong><br />
                {lang === 'ru'
                  ? 'Модель может сгенерировать ответ и поставить красивую ссылку на документ [Source 3]. Но если пользователь перейдет по ссылке, он обнаружит, что в документе ничего подобного не написано. Это самый опасный вид сбоя, так как он создает ложное чувство надежности.'
                  : 'The model might generate an answer and add a neat citation like [Source 3]. But if the user clicks the link, they find the document says nothing of the sort. This is the most dangerous failure, as it creates a false sense of reliability.'}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Chapter 3: Trust Calibration and UX */}
      <section>
        <div className="bg-card-dark border border-border-card rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-cyan-400">
            <ShieldCheck className="text-cyan-500" />
            {lang === 'ru' ? 'Глава 3: Калибровка доверия и UX' : 'Chapter 3: Trust Calibration and UX'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Ответственность за "заземление" лежит не только на бэкенд-инженерах, но и на проектировщиках интерфейсов (UX/UI). Система должна уметь калибровать доверие пользователя.'
                : 'The responsibility for grounding lies not only with backend engineers but also with UI/UX designers. The system must be able to calibrate the user\'s trust.'}
            </p>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Надежный ИИ-ассистент не должен всегда отвечать тоном абсолютной уверенности. Он должен сигнализировать о степени достоверности своих выводов:'
                : 'A reliable AI assistant should not always reply with a tone of absolute certainty. It must signal the degree of confidence in its conclusions:'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded p-4 text-center">
                <span className="block text-emerald-400 font-bold mb-1">{lang === 'ru' ? 'Высокое доверие' : 'High Trust'}</span>
                <span className="text-xs text-neutral-400">{lang === 'ru' ? 'Факт подтвержден 3+ независимыми источниками.' : 'Fact confirmed by 3+ independent sources.'}</span>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded p-4 text-center">
                <span className="block text-amber-400 font-bold mb-1">{lang === 'ru' ? 'Низкое доверие' : 'Low Trust'}</span>
                <span className="text-xs text-neutral-400">{lang === 'ru' ? 'Единственный или устаревший источник.' : 'Single or outdated source.'}</span>
              </div>
              <div className="bg-rose-500/10 border border-rose-500/20 rounded p-4 text-center">
                <span className="block text-rose-400 font-bold mb-1">{lang === 'ru' ? 'Отказ от ответа' : 'Refusal to Answer'}</span>
                <span className="text-xs text-neutral-400">{lang === 'ru' ? '"Я не нашел информации в базе."' : '"I found no information in the database."'}</span>
              </div>
            </div>

            <div className="bg-deep border border-border-subtle rounded-lg p-5 italic text-sm text-neutral-400">
              {lang === 'ru'
                ? 'Для пользователя отказ модели ответить на вопрос из-за отсутствия данных — это не баг, а признак высококачественной и безопасной системы. Лучше честное "не знаю", чем убедительная выдумка.'
                : 'For a user, a model\'s refusal to answer due to lack of data is not a bug; it is a sign of a high-quality, safe system. An honest "I don\'t know" is always better than a convincing fabrication.'}
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-2 text-white">
          {lang === 'ru' ? 'Итог: Эпоха проверяемости' : 'Summary: The Era of Verifiability'}
        </h3>
        <p className="text-neutral-300 text-sm leading-relaxed">
          {lang === 'ru'
            ? 'Переход к RAG и системам заземления означает важный сдвиг в AI-индустрии. Мы перестали пытаться впихнуть все знания мира в веса нейросети. Вместо этого мы используем LLM как "когнитивный процессор", который рассуждает над предоставленными ему внешними фактами. Это единственный путь к созданию корпоративных систем, которым можно доверять.'
            : 'The shift to RAG and grounding systems marks a major transition in the AI industry. We stopped trying to cram all the world\'s knowledge into a neural net\'s weights. Instead, we use the LLM as a "cognitive processor" that reasons over provided external facts. This is the only way to build enterprise systems you can actually trust.'}
        </p>
      </section>
    </div>
  );
}
