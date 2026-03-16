import React from 'react';
import Term from '@/components/Term';
import { Database, Cpu, Workflow, Layers, Zap, ShieldAlert, BookOpen, Repeat, Filter, Layout } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AiRagTheory({ lang }: { lang: string }) {
  return (
    <>
      {/* Chapter 1: The Knowledge Gap */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Database className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 1: Проблема закрытых знаний — Почему ИИ нужен поиск' : 'Chapter 1: The Problem of Closed Knowledge — Why AI Needs Search'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed text-lg">
            {lang === 'ru'
              ? 'Представьте, что вы наняли самого умного юриста в мире, но он перестал читать законы два года назад. Он может рассуждать блестяще, используя свою логику, но он абсолютно не осведомлен о новых поправках, принятых вчера, или о ваших личных документах, которые лежат у вас на столе. Именно в таком состоянии находится обычная большая языковая модель (LLM). Её знания "заморожены" в момент окончания обучения (Knowledge Cutoff). Она знает всё о мире до определенной даты, но ничего о том, что происходит прямо сейчас или внутри вашей компании.'
              : 'Imagine hiring the smartest lawyer in the world, but they stopped reading the laws two years ago. They can reason brilliantly using their logic, but they are completely unaware of new amendments passed yesterday or your private documents sitting on your desk. This is the exact state of a standard Large Language Model (LLM). Its knowledge is "frozen" at the time training ended (Knowledge Cutoff). It knows everything about the world up to a certain date, but nothing about what is happening right now or inside your company.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? <><Term id="rag" lang={lang}>RAG</Term> {' (Retrieval-Augmented Generation) — это архитектурный паттерн, который дает ИИ "открытую книгу". Вместо того чтобы полагаться только на свои веса (внутреннюю память), модель сначала ищет нужную информацию во внешнем источнике, читает её и только на основе этого выдает ответ. Это фундаментально меняет роль модели: она перестает быть "базой данных" и становится "процессором", который умеет обрабатывать предоставленные ему факты.'}</>
              : <><Term id="rag" lang={lang}>RAG</Term> {' (Retrieval-Augmented Generation) is an architectural pattern that gives AI an "open book." Instead of relying solely on its weights (internal memory), the model first searches for the required information in an external source, reads it, and only then provides an answer based on that. This fundamentally changes the model\'s role: it stops being a "database" and becomes a "processor" that knows how to handle facts provided to it.'}</>}
          </p>
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-emerald-500/20 my-8">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
              <Zap size={18} /> {lang === 'ru' ? 'Почему не просто дообучить (Fine-tuning)?' : 'Why not just Fine-tuning?'}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-white font-semibold">{lang === 'ru' ? 'Fine-tuning (Дообучение):' : 'Fine-tuning:'}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {lang === 'ru'
                    ? 'Это как если бы юрист пытался выучить все новые законы наизусть. Это дорого, долго, и как только выйдет новый закон, знания снова станут неактуальными. Подходит для изменения стиля или специализации.'
                    : 'It\'s like a lawyer trying to memorize all new laws. It\'s expensive, time-consuming, and as soon as a new law is passed, the knowledge becomes outdated again. Best for changing style or specialization.'}
                </p>
              </div>
              <div className="space-y-2 border-l border-neutral-800 pl-6">
                <p className="text-white font-semibold">{lang === 'ru' ? 'RAG (Поиск):' : 'RAG (Search):'}</p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {lang === 'ru'
                    ? 'Это как дать юристу доступ к актуальной базе данных. Мы просто подкладываем ему нужные страницы. Это дешево, работает в реальном времени и позволяет модели цитировать источники.'
                    : 'It\'s like giving a lawyer access to an up-to-date database. We just provide the right pages. It\'s cheap, works in real-time, and allows the model to cite sources.'}
                </p>
              </div>
            </div>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Главное преимущество RAG — это "заземление" (grounding). Когда модель видит текст перед собой, риск того, что она выдумает факт (галлюцинация), резко снижается. Она ограничена тем контекстом, который мы ей предоставили. Это делает технологию пригодной для бизнеса, медицины и юриспруденции, где цена ошибки слишком высока.'
              : 'The main advantage of RAG is "grounding." When the model sees the text in front of it, the risk of it inventing a fact (hallucination) drops sharply. It is constrained by the context we provide. This makes the technology suitable for business, medicine, and law, where the cost of error is too high.'}
          </p>
        </div>
      </div>

      {/* Chapter 2: Chunking and Embeddings — The Math of Meaning */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Layers className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 2: Чанкинг и Эмбеддинги — Как компьютер понимает смысл' : 'Chapter 2: Chunking and Embeddings — How Computers Understand Meaning'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Как ИИ находит нужную страницу в базе из миллиона документов за миллисекунды? Обычный поиск по ключевым словам ("Ctrl+F") не сработает, если вы спросите "Как починить машину?", а в документе написано "Инструкция по ремонту транспортного средства". Секрет в превращении смысла текста в математические координаты — эмбеддинги.'
              : 'How does AI find the right page in a database of a million documents in milliseconds? Standard keyword search ("Ctrl+F") won\'t work if you ask "How to fix a car?" while the document says "Vehicle repair manual." The secret lies in transforming text meaning into mathematical coordinates — embeddings.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 rounded-xl border border-[#262626] bg-[#1a1a1a] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5"><Layout size={48} /></div>
               <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest">{lang === 'ru' ? 'Чанкинг (Chunking)' : 'Chunking'}</h4>
               <p className=" text-neutral-400 leading-relaxed">
                 {lang === 'ru'
                   ? 'Огромные документы разрезаются на мелкие куски — "чанки". Если передать модели всю книгу сразу, она потеряет фокус. Идеальный чанк должен быть достаточно мал, чтобы содержать одну законченную мысль, но достаточно велик, чтобы в нем сохранялся контекст (например, 500-1000 токенов).'
                   : 'Massive documents are sliced into small pieces called "chunks." If you give the model an entire book at once, it loses focus. An ideal chunk should be small enough to contain one complete thought but large enough to preserve context (e.g., 500-1000 tokens).'}
               </p>
            </div>
            <div className="p-6 rounded-xl border border-[#262626] bg-[#1a1a1a] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5"><Cpu size={48} /></div>
               <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-widest">{lang === 'ru' ? 'Эмбеддинги (Embeddings)' : 'Embeddings'}</h4>
               <p className=" text-neutral-400 leading-relaxed">
                 {lang === 'ru'
                   ? 'Каждый чанк проходит через специальную нейросеть, которая превращает его в список из сотен или тысяч чисел (вектор). Похожие по смыслу тексты в этом пространстве чисел находятся рядом. Математически "король" и "королева" будут ближе друг к другу, чем "король" и "яблоко".'
                   : 'Each chunk passes through a specialized neural network that converts it into a list of hundreds or thousands of numbers (a vector). Semantically similar texts are located close to each other in this numeric space. Mathematically, "king" and "queen" will be closer to each other than "king" and "apple".'}
               </p>
            </div>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Важно понимать, что эмбеддинги не просто запоминают слова, они кодируют концепции. Это позволяет систему RAG находить ответы даже на вопросы, сформулированные совсем другими словами, чем в исходном тексте. Мы переходим от поиска по буквам к поиску по смыслу.'
              : 'It is important to understand that embeddings don\'t just memorize words; they encode concepts. This allows the RAG system to find answers even to questions formulated in completely different words than in the source text. We are moving from searching by letters to searching by meaning.'}
          </p>
        </div>
      </div>

      {/* Chapter 3: The Search Architecture — Vector Databases */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <BookOpen className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 3: Архитектура поиска — Векторные базы данных' : 'Chapter 3: Search Architecture — Vector Databases'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Где хранить эти миллионы векторов? Обычные базы данных (SQL) созданы для поиска точных совпадений, а не для вычисления "близости смыслов". Для этого были созданы векторные базы данных (Vector DB), такие как Pinecone, Weaviate или открытые решения вроде Milvus и Chroma.'
              : 'Where to store these millions of vectors? Standard databases (SQL) are designed for exact matches, not for calculating "semantic proximity." For this, Vector Databases (Vector DB) were created, such as Pinecone, Weaviate, or open-source solutions like Milvus and Chroma.'}
          </p>
          <div className="bg-[#0a0a0a] p-8 rounded-xl border border-[#262626] relative overflow-hidden">
            <h4 className="text-emerald-400 font-bold mb-6 uppercase tracking-widest">{lang === 'ru' ? 'Как работает индексация?' : 'How Indexing Works?'}</h4>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 text-emerald-500 font-bold">1</div>
                <div>
                  <p className="text-white font-semibold mb-1">{lang === 'ru' ? 'Загрузка документов' : 'Document Ingestion'}</p>
                  <p className="text-neutral-500 text-sm">{lang === 'ru' ? 'Вы подаете PDF, Word или текстовые файлы в систему.' : 'You feed PDF, Word, or text files into the system.'}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 text-blue-500 font-bold">2</div>
                <div>
                  <p className="text-white font-semibold mb-1">{lang === 'ru' ? 'Создание индекса' : 'Index Creation'}</p>
                  <p className="text-neutral-500 text-sm">{lang === 'ru' ? 'Система организует векторы в специальные структуры (например, HNSW), которые позволяют искать "ближайших соседей" невероятно быстро.' : 'The system organizes vectors into specialized structures (e.g., HNSW) that allow searching for "nearest neighbors" incredibly fast.'}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20 text-purple-500 font-bold">3</div>
                <div>
                  <p className="text-white font-semibold mb-1">{lang === 'ru' ? 'Семантический поиск' : 'Semantic Retrieval'}</p>
                  <p className="text-neutral-500 text-sm">{lang === 'ru' ? 'Когда приходит вопрос, база данных мгновенно находит чанки, векторы которых находятся в той же области пространства.' : 'When a question arrives, the database instantly finds chunks whose vectors are in the same region of space.'}</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Главная инновация здесь — алгоритмы ANN (Approximate Nearest Neighbors). Они не сравнивают ваш вопрос с каждым документом по очереди (это было бы слишком долго), а используют умные "карты", чтобы сразу сузить область поиска. Это позволяет RAG работать на петабайтах данных с задержкой в доли секунды.'
              : 'The key innovation here is ANN (Approximate Nearest Neighbors) algorithms. They don\'t compare your question with every document one by one (that would be too slow); instead, they use smart "maps" to narrow down the search area immediately. This allows RAG to operate on petabytes of data with sub-second latency.'}
          </p>
        </div>
      </div>

      {/* Chapter 4: The Augmentation Loop — How it Works Step by Step */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Workflow className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 4: Цикл генерации — От вопроса к ответу' : 'Chapter 4: The Generation Loop — From Query to Answer'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Когда пользователь задает вопрос, начинается "магия" дополнения запроса. Процесс RAG — это не просто поиск, это сложная хореография данных, которая происходит за кулисами чата.'
              : 'When a user asks a question, the "magic" of query augmentation begins. The RAG process is not just search; it is a sophisticated choreography of data happening behind the scenes of the chat.'}
          </p>
          <div className="space-y-4">
            {[
              { step: 1, title: { ru: 'Query Embedding', en: 'Query Embedding' }, desc: { ru: 'Вопрос пользователя превращается в вектор точно так же, как ранее ваши документы. Теперь мы можем сравнить их в одном "пространстве смыслов".', en: 'The user\'s question is converted into a vector exactly like your documents were earlier. Now we can compare them in the same "semantic space."' } },
              { step: 2, title: { ru: 'Context Retrieval', en: 'Context Retrieval' }, desc: { ru: 'Система извлекает ТОП-3 или ТОП-5 наиболее релевантных фрагментов (чанков) из векторной базы данных.', en: 'The system retrieves the TOP-3 or TOP-5 most relevant fragments (chunks) from the vector database.' } },
              { step: 3, title: { ru: 'Prompt Augmentation', en: 'Prompt Augmentation' }, desc: { ru: 'Финальный промпт для LLM пересобирается. Он выглядит примерно так: "Используя ТОЛЬКО предоставленный контекст ниже, ответь на вопрос. [КОНТЕКСТ]. Вопрос: [ВАШ ВОПРОС]".', en: 'The final prompt for the LLM is reconstructed. It looks something like: "Using ONLY the provided context below, answer the question. [CONTEXT]. Question: [YOUR QUESTION]."' } },
              { step: 4, title: { ru: 'Grounded Generation', en: 'Grounded Generation' }, desc: { ru: 'Модель читает предоставленный текст и генерирует ответ, который "заземлен" на эти факты. Она не галлюцинирует, а работает как аналитик с документами.', en: 'The model reads the provided text and generates a response that is "grounded" in these facts. It doesn\'t hallucinate; it acts like an analyst working with documents.' } },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4 p-5 rounded-xl bg-[#1a1a1a] border border-[#262626] hover:border-emerald-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-500 font-bold font-mono border border-emerald-500/20">{item.step}</div>
                <div>
                  <h5 className="text-white font-bold mb-1">{lang === 'ru' ? item.title.ru : item.title.en}</h5>
                  <p className=" text-neutral-400 text-sm leading-relaxed">{lang === 'ru' ? item.desc.ru : item.desc.en}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Важный момент: модель никогда не видела всю вашу базу данных целиком. Она видит только те крошечные кусочки, которые поиск посчитал нужными. Это позволяет соблюдать приватность и экономить ресурсы, не "скармливая" модели лишнюю информацию.'
              : 'Key point: the model never sees your entire database at once. It only sees those tiny pieces that the search deemed necessary. This ensures privacy and saves resources by not "feeding" the model redundant information.'}
          </p>
        </div>
      </div>

      {/* Chapter 5: Advanced RAG & Challenges — Lost in the Middle */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Filter className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 5: Продвинутый RAG и ловушки — Почему это сложно' : 'Chapter 5: Advanced RAG and Pitfalls — Why it is Challenging'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Технология RAG кажется простой, но на пути к идеальному результату стоят инженерные вызовы. Самый известный из них — феномен "Lost in the Middle" (Потеря в середине). Исследования показали, что нейросети лучше всего помнят информацию из начала и конца предоставленного контекста, а факты в середине часто игнорируют.'
              : 'RAG technology seems simple, but engineering challenges lie on the path to perfect results. The most famous is the "Lost in the Middle" phenomenon. Research has shown that neural networks best remember information from the beginning and end of the provided context, while facts in the middle are often ignored.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-xl">
               <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
                 <ShieldAlert size={18} />
                 {lang === 'ru' ? 'Context Noise (Шум)' : 'Context Noise'}
               </h4>
               <p className=" text-neutral-300 text-sm leading-relaxed">
                 {lang === 'ru'
                   ? 'Если поиск нашел нерелевантные чанки, модель может запутаться. "Мусор" на входе дает "мусор" на выходе. Очистка данных — 80% успеха в RAG.'
                   : 'If retrieval finds irrelevant chunks, the model may get confused. "Garbage in, garbage out." Data cleaning is 80% of RAG success.'}
               </p>
            </div>
            <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-xl">
               <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                 <Repeat size={18} />
                 {lang === 'ru' ? 'Reranking (Переранжирование)' : 'Reranking'}
               </h4>
               <p className=" text-neutral-300 text-sm leading-relaxed">
                 {lang === 'ru'
                   ? 'Это второй этап после поиска. Маленькая, но очень точная модель еще раз перепроверяет найденные чанки и ставит самые важные наверх. Это решает проблему "потери в середине".'
                   : 'This is the second stage after retrieval. A small but very precise model re-checks the found chunks and puts the most important ones at the top. This solves the "lost in the middle" problem.'}
               </p>
            </div>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Будущее технологии — это Agentic RAG. Это системы, где ИИ сам решает: достаточно ли ему информации или нужно сходить в поиск еще раз, переформулировать запрос или проверить другой источник. Мы переходим от простого "найди и покажи" к "найди, проанализируй и убедись".'
              : 'The future of the technology is Agentic RAG. These are systems where the AI itself decides: whether it has enough information or needs to search again, rephrase the query, or check another source. We are moving from simple "retrieve and show" to "retrieve, analyze, and verify."'}
          </p>
          <div className="bg-emerald-500/10 p-8 rounded-2xl border border-emerald-500/20 text-center mt-8">
             <h3 className="text-2xl font-bold text-white mb-4">{lang === 'ru' ? 'Вы освоили фундамент корпоративного ИИ' : 'You have Mastered the Foundation of Enterprise AI'}</h3>
             <p className="text-neutral-300 leading-relaxed italic">
               {lang === 'ru'
                 ? 'Умение подключать ИИ к реальности через RAG — это то, что отличает простую игрушку от серьезного бизнес-инструмента. Вы готовы переходить к практике!'
                 : 'The ability to connect AI to reality via RAG is what separates a simple toy from a serious business tool. You are ready to move on to practice!'}
             </p>
          </div>
        </div>
      </div>
    </>
  );
}
