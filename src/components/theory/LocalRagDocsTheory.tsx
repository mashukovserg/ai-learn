"use client";

import React from 'react';
import Term from '@/components/Term';
import Terminal from '@/components/Terminal';

export default function LocalRagDocsTheory({ lang }: { lang: string }) {
  const ru = lang === 'ru';
  return (
    <div className="space-y-12">

      {/* Chapter 1 */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 1: Задача — спросить свои документы, никому их не отдавая' : 'Chapter 1: The Task — Ask Your Documents Without Handing Them Over'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru
              ? 'Начнем с конкретной ситуации. У вас есть папка документов, которые нельзя загружать в облачный чат: договоры под NDA, интервью с людьми, которые доверили вам записи, черновики диссертации, медицинские выписки, внутренние отчеты компании. Документов сотни, помнить их наизусть невозможно, а вопросы к ним возникают постоянно: «в каком договоре был пункт о неустойке?», «кто из собеседников упоминал переезд завода?», «где я уже писал про эту методику?».'
              : 'Let us start with a concrete situation. You have a folder of documents that must not be uploaded to a cloud chat: contracts under NDA, interviews with people who trusted you with their recordings, dissertation drafts, medical records, internal company reports. There are hundreds of documents, memorizing them is impossible, and questions about them come up all the time: "which contract had the penalty clause?", "which interviewee mentioned the factory relocation?", "where have I already written about this method?".'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru
              ? 'Хочется простого: задать вопрос обычным языком и получить ответ со ссылками на конкретные места в документах. Облачные сервисы это умеют — но каждый загруженный файл покидает вашу машину и оказывается на чужих серверах. Для NDA это прямое нарушение, для чужих персональных данных — риск, за который отвечаете вы. Локальные модели решают ровно эту задачу: весь пайплайн — от чтения файлов до генерации ответа — работает на вашем железе, данные никуда не уходят, интернет после установки вообще не нужен. Это и есть тот случай, когда локальная модель выбирается не из идеологии, а потому что облако запрещено условиями задачи.'
              : 'What you want is simple: ask a question in plain language and get an answer with references to specific places in the documents. Cloud services can do this — but every uploaded file leaves your machine and lands on someone else\'s servers. For an NDA that is a direct violation; for other people\'s personal data it is a risk you personally carry. Local models solve exactly this: the entire pipeline — from reading files to generating the answer — runs on your hardware, the data never leaves, and after setup you do not even need the internet. This is the case where a local model is chosen not out of ideology but because the cloud is forbidden by the task itself.'}
          </p>
        </div>
      </section>

      {/* Chapter 2 */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 2: Как это работает — RAG на пальцах' : 'Chapter 2: How It Works — RAG in Plain Terms'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                {'Модель не может «прочитать всё и запомнить»: документов слишком много, а окно контекста ограничено. Поэтому задача решается приемом, который называется '}
                <Term id="rag" lang={lang}>RAG</Term>
                {' (Retrieval-Augmented Generation): модель отвечает не из своей памяти, а по фрагментам документов, которые система нашла под конкретный вопрос, — и показывает источники. У этого приема две фазы, и их важно не путать.'}
              </>
            ) : (
              <>
                {'The model cannot "read everything and remember it": there are too many documents, and the context window is limited. So the task is solved with a technique called '}
                <Term id="rag" lang={lang}>RAG</Term>
                {' (Retrieval-Augmented Generation): the model answers not from its own memory but from the document fragments the system found for the specific question — and it shows the sources. The technique has two phases, and it is important not to mix them up.'}
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                {'Фаза индексации выполняется один раз, заранее. Каждый документ разбивается на небольшие фрагменты — это называется '}
                <Term id="chunking" lang={lang}>чанкинг</Term>
                {'. Для каждого фрагмента строится '}
                <Term id="embeddings" lang={lang}>эмбеддинг</Term>
                {' — числовой вектор, в котором близкий смысл дает близкие числа. Все вектора складываются в '}
                <Term id="vector-db" lang={lang}>векторную базу</Term>
                {'. На этом индексация заканчивается: документы «разложены по смыслу», как книги по полкам.'}
              </>
            ) : (
              <>
                {'The indexing phase runs once, in advance. Each document is split into small fragments — this is called '}
                <Term id="chunking" lang={lang}>chunking</Term>
                {'. For every fragment the system builds an '}
                <Term id="embeddings" lang={lang}>embedding</Term>
                {' — a numeric vector where similar meaning produces similar numbers. All vectors go into a '}
                <Term id="vector-db" lang={lang}>vector database</Term>
                {'. That is the whole indexing phase: the documents are now "shelved by meaning," like books in a library.'}
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru
              ? 'Фаза запроса выполняется каждый раз, когда вы задаете вопрос. Вопрос превращается в такой же вектор той же моделью эмбеддингов. База находит фрагменты с ближайшими векторами — то есть ближайшие по смыслу, даже если слова другие. Найденные фрагменты подставляются в промпт, и генеративная модель пишет ответ строго по ним, со ссылками на файлы. Итого шесть шагов: разбить на чанки → построить эмбеддинги документов → сохранить в базу → построить эмбеддинг вопроса → найти похожие фрагменты → сгенерировать ответ по найденному.'
              : 'The query phase runs every time you ask a question. The question is turned into the same kind of vector by the same embedding model. The database finds the fragments with the closest vectors — closest in meaning, even when the words differ. The found fragments are placed into the prompt, and the generative model writes the answer strictly from them, with references to the files. Six steps in total: split into chunks → embed the documents → store in the database → embed the question → find similar fragments → generate the answer from what was found.'}
          </p>
        </div>
      </section>

      {/* Chapter 3 */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 3: Выбор моделей под задачу' : 'Chapter 3: Choosing Models for the Task'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru
              ? 'В пайплайне работают две разные модели, и выбирать их нужно по отдельности. Первая — модель эмбеддингов: она отвечает за то, найдутся ли нужные фрагменты вообще. Вторая — генеративная модель: она пишет ответ по найденному. Ошибка в первой не лечится второй: если поиск принес не те фрагменты, даже отличный генератор уверенно ответит не по тем местам.'
              : 'Two different models work in the pipeline, and they are chosen separately. The first is the embedding model: it decides whether the right fragments are found at all. The second is the generative model: it writes the answer from what was found. A mistake in the first cannot be fixed by the second: if retrieval brings the wrong fragments, even an excellent generator will confidently answer from the wrong places.'}
          </p>
          <div className="bg-deep border border-accent-500/20 rounded-lg p-5">
            <h4 className="text-heading font-bold mb-2">
              {ru ? 'Главная ловушка: язык корпуса' : 'The main trap: the language of your corpus'}
            </h4>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {ru ? (
                <>
                  {'Популярные компактные модели эмбеддингов вроде all-MiniLM обучены в основном на английском. Если ваш архив на русском или смешанный (русские заметки, английские статьи), такая модель молча ломается: вектора русского текста живут в другой части пространства, и русский вопрос просто не находит английские фрагменты — и наоборот. Ошибки не будет, будет тихо плохой поиск. Для смешанных корпусов нужна многоязычная модель, обученная выравнивать языки в одном пространстве: например, multilingual-e5 или bge-m3. Сверять кандидатов удобно по публичному рейтингу '}
                  <a href="https://huggingface.co/spaces/mteb/leaderboard" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">MTEB</a>
                  {' — там модели сравниваются по задачам поиска на десятках языков.'}
                </>
              ) : (
                <>
                  {'Popular compact embedding models like all-MiniLM are trained mostly on English. If your archive is in Russian or mixed (Russian notes, English papers), such a model breaks silently: vectors of Russian text live in a different part of the space, and a Russian question simply fails to find English fragments — and vice versa. There will be no error message, just quietly bad search. Mixed corpora need a multilingual model trained to align languages in one space: for example, multilingual-e5 or bge-m3. A convenient place to compare candidates is the public '}
                  <a href="https://huggingface.co/spaces/mteb/leaderboard" target="_blank" rel="noreferrer noopener" className="text-accent-300 hover:text-accent-200 underline underline-offset-4">MTEB</a>
                  {' leaderboard, where models are ranked on retrieval tasks across dozens of languages.'}
                </>
              )}
            </p>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                {'Генеративную модель выбирают по железу и языку: Llama 3.1 8B — надежная рабочая лошадка, Qwen 2.5 7B заметно сильнее в русском. В '}
                <Term id="quantization" lang={lang}>квантизации</Term>
                {' Q4 такие модели умещаются в 5–6 ГБ '}
                <Term id="vram" lang={lang}>VRAM</Term>
                {' — то есть работают на обычном ноутбуке. И одно железное правило на весь пайплайн: вопрос и документы должны кодироваться одной и той же моделью эмбеддингов. Вектора разных моделей живут в разных пространствах, сравнивать их бессмысленно — поменяли модель, значит, переиндексируете весь архив.'}
              </>
            ) : (
              <>
                {'The generative model is chosen by hardware and language: Llama 3.1 8B is a reliable workhorse, Qwen 2.5 7B is noticeably stronger in Russian. In Q4 '}
                <Term id="quantization" lang={lang}>quantization</Term>
                {' such models fit into 5–6 GB of '}
                <Term id="vram" lang={lang}>VRAM</Term>
                {' — meaning they run on an ordinary laptop. And one iron rule for the whole pipeline: the question and the documents must be encoded by the same embedding model. Vectors from different models live in different spaces and comparing them is meaningless — change the model, and you reindex the entire archive.'}
              </>
            )}
          </p>
        </div>
      </section>

      {/* Chapter 4 */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 4: Собираем пайплайн' : 'Chapter 4: Building the Pipeline'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru
              ? 'Практический минимум выглядит скромно: Ollama раздает обе модели (эмбеддинги и генерацию) через один локальный API, небольшой скрипт индексирует папку, второй — отвечает на вопросы. Никаких серверов и подписок; всё, что ниже, происходит на вашей машине.'
              : 'The practical minimum is modest: Ollama serves both models (embeddings and generation) through one local API, a small script indexes the folder, another answers questions. No servers, no subscriptions; everything below happens on your machine.'}
          </p>
          <Terminal
            title={'local-rag · zsh'}
            lines={[
              { cmd: 'ollama pull bge-m3', comment: ru ? '# многоязычные эмбеддинги' : '# multilingual embeddings' },
              { cmd: 'ollama pull qwen2.5:7b', comment: ru ? '# генератор с сильным русским' : '# generator strong in Russian' },
              { cmd: 'python index.py ~/docs', comment: ru ? '# индексация: один раз' : '# indexing: run once' },
              { out: ru ? '312 файлов → 4 806 чанков → эмбеддинги → база сохранена' : '312 files → 4,806 chunks → embeddings → database saved' },
              { cmd: ru ? 'python ask.py "в каком договоре пункт о неустойке?"' : 'python ask.py "which contract has the penalty clause?"' },
              { out: ru ? 'Ответ: пункт 7.2 договора с ООО «Вектор»…' : 'Answer: clause 7.2 of the Vector LLC contract…', tone: 'ok' },
              { out: ru ? 'Источники: dogovor-vektor.pdf (стр. 12), prilozhenie-2.pdf' : 'Sources: contract-vector.pdf (p. 12), appendix-2.pdf' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru
              ? 'Обратите внимание на последнюю строку: ответ приходит вместе с источниками. Это не украшение, а главный механизм доверия в RAG — каждое утверждение можно проверить, открыв указанный файл на указанной странице. Если система не может показать, откуда взят ответ, это не поиск по документам, а пересказ по памяти модели — со всеми ее галлюцинациями.'
              : 'Note the last line: the answer arrives together with its sources. This is not decoration but the main trust mechanism in RAG — every claim can be checked by opening the named file at the named page. If a system cannot show where an answer came from, it is not document search but a retelling from the model\'s memory — hallucinations included.'}
          </p>
        </div>
      </section>

      {/* Chapter 5 */}
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru ? 'Глава 5: Ловушки качества и честные границы' : 'Chapter 5: Quality Traps and Honest Limits'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru
              ? 'Когда ответы плохие, первым делом проверяйте не генератор, а поиск: посмотрите, какие именно фрагменты нашлись под ваш вопрос. В девяти случаях из десяти проблема там — вопрос нашел не те чанки, и модель честно ответила не по тем местам. Частые причины: слишком крупные чанки (в один фрагмент попало три разные темы, вектор «размылся»), слишком мелкие (мысль разрезана посередине), англоязычная модель эмбеддингов на русском корпусе.'
              : 'When answers are bad, check retrieval first, not the generator: look at which fragments were actually found for your question. Nine times out of ten the problem is there — the question found the wrong chunks, and the model honestly answered from the wrong places. Common causes: chunks too large (three different topics in one fragment, the vector gets "smeared"), chunks too small (a thought cut in the middle), an English-only embedding model on a Russian corpus.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru
              ? 'И честная граница: локальный RAG выигрывает там, где важна приватность и большой архив, но проигрывает облачным моделям в сложном рассуждении поверх найденного — маленькая модель хуже сводит противоречивые фрагменты и хуже пишет длинные аналитические ответы. Рабочее правило такое: чувствительные данные — только локально; публичные данные и сложная аналитика — можно и в облако. Выбор инструмента следует за ограничениями задачи, а не наоборот.'
              : 'And the honest limit: local RAG wins where privacy matters and the archive is large, but loses to cloud models at complex reasoning over the retrieved text — a small model is worse at reconciling contradictory fragments and at writing long analytical answers. The working rule: sensitive data — local only; public data and heavy analysis — the cloud is fine too. The tool follows the constraints of the task, not the other way around.'}
          </p>
        </div>
      </section>

    </div>
  );
}
