"use client";

import React from 'react';
import { Info, GitCompare, Ruler, Database, Scissors, Workflow, AlertTriangle } from 'lucide-react';

export default function Embeddings101Theory({ lang }: { lang: string }) {
  return (
    <>
      {/* Chapter 1: What Are Embeddings? */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Info className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 1: Что такое эмбеддинги?' : 'Chapter 1: What Are Embeddings?'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed text-lg">
            {lang === 'ru'
              ? 'Компьютеры не умеют читать. Они умеют считать. Чтобы работать с текстом, нужно превратить слова в числа — причём так, чтобы похожие по смыслу слова получали похожие числа. Именно это и делают эмбеддинги: они превращают текст в вектор — массив чисел фиксированной длины, который кодирует значение.'
              : 'Computers can\'t read. They compute. To work with text, we need to turn words into numbers — and in a way that semantically similar words get similar numbers. That\'s exactly what embeddings do: they convert text into a vector — a fixed-length array of numbers that encodes meaning.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Прорыв произошёл в 2013 году с Word2Vec. Исследователи из Google показали, что обученные на большом корпусе текста вектора обладают удивительными свойствами: king - man + woman ≈ queen. Арифметика со смыслом! Вектора научились ловить семантические отношения между словами.'
              : 'The breakthrough came in 2013 with Word2Vec. Researchers at Google showed that vectors trained on a large text corpus have surprising properties: king - man + woman ≈ queen. Arithmetic with meaning! Vectors learned to capture semantic relationships between words.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Современные трансформерные эмбеддинги пошли дальше: они учитывают контекст. Слово «банк» в предложении «я сел на банк у реки» и «я открыл счёт в банке» получит разные вектора. Это огромный шаг по сравнению со статическими эмбеддингами, где у каждого слова был ровно один вектор.'
              : 'Modern transformer embeddings go further: they are context-aware. The word "bank" in "I sat on the river bank" and "I opened a bank account" will get different vectors. This is a huge leap from static embeddings, where each word had exactly one vector.'}
          </p>

          <div className="bg-card border border-border-emphasis rounded-xl p-5">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-neutral-400">
                <thead>
                  <tr className="border-b border-border-emphasis">
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Модель' : 'Model'}</th>
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Размерность' : 'Dimensions'}</th>
                    <th className="text-left py-2 text-neutral-500 font-medium">{lang === 'ru' ? 'Примечание' : 'Note'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">all-MiniLM-L6</td>
                    <td className="py-2 pr-4">384</td>
                    <td className="py-2">{lang === 'ru' ? 'Лёгкая, быстрая, бесплатная' : 'Lightweight, fast, free'}</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">BERT base</td>
                    <td className="py-2 pr-4">768</td>
                    <td className="py-2">{lang === 'ru' ? 'Классика, хорошая базовая линия' : 'Classic, good baseline'}</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">text-embedding-ada-002</td>
                    <td className="py-2 pr-4">1536</td>
                    <td className="py-2">{lang === 'ru' ? 'OpenAI, платная API' : 'OpenAI, paid API'}</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-neutral-300 font-medium">text-embedding-3-small</td>
                    <td className="py-2 pr-4">1536</td>
                    <td className="py-2">{lang === 'ru' ? 'OpenAI, новее и дешевле ada-002' : 'OpenAI, newer and cheaper than ada-002'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-emerald-500/5 border-l-4 border-emerald-500 p-6 my-6">
            <h4 className="font-bold text-emerald-400 mb-2">{lang === 'ru' ? 'Ключевая аналогия' : 'Key Analogy'}</h4>
            <p className="text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'Эмбеддинг — это GPS-координаты для смысла. Как GPS превращает адрес «Москва, Красная площадь» в числа (55.7539, 37.6208), так эмбеддинг превращает текст в координаты в пространстве значений. Близкие по смыслу тексты — близкие точки на карте.'
                : 'An embedding is like GPS coordinates for meaning. Just as GPS turns the address "Red Square, Moscow" into numbers (55.7539, 37.6208), an embedding turns text into coordinates in a meaning space. Semantically similar texts are nearby points on the map.'}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 2: From TF-IDF to Transformers */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <GitCompare className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 2: От TF-IDF до трансформеров' : 'Chapter 2: From TF-IDF to Transformers'}
        </h2>
        <div className="space-y-6">
          <div className="bg-card p-5 rounded-xl border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">TF-IDF</h4>
            <p className="text-neutral-400 leading-relaxed text-sm">
              {lang === 'ru'
                ? 'Самый простой подход: представить документ как «мешок слов» и посчитать, какие слова встречаются часто в этом документе, но редко в корпусе. Проблема: TF-IDF не понимает семантику. «Собака» и «щенок» — абсолютно разные слова. «Автомобиль» и «машина» — тоже. Совпадение считается только по точному тексту.'
                : 'The simplest approach: represent a document as a "bag of words" and count which words appear frequently in this document but rarely in the corpus. The problem: TF-IDF doesn\'t understand semantics. "Dog" and "puppy" are completely different words. "Car" and "automobile" too. Matching is purely lexical.'}
            </p>
          </div>

          <div className="bg-card p-5 rounded-xl border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">Word2Vec / GloVe</h4>
            <p className="text-neutral-400 leading-relaxed text-sm">
              {lang === 'ru'
                ? 'Прорыв 2013-2014: каждое слово получает плотный вектор (обычно 100-300 измерений), обученный на контекстах слова в огромном корпусе. Теперь «собака» и «щенок» действительно близки в векторном пространстве. Но есть ограничение: один вектор на слово. «Банк» всегда один и тот же — что у реки, что финансовый.'
                : 'Breakthrough of 2013-2014: each word gets a dense vector (typically 100-300 dimensions) trained on word contexts in a huge corpus. Now "dog" and "puppy" are truly close in vector space. But there\'s a limitation: one vector per word. "Bank" is always the same — whether river bank or financial bank.'}
            </p>
          </div>

          <div className="bg-card p-5 rounded-xl border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">BERT / {lang === 'ru' ? 'Трансформерные эмбеддинги' : 'Transformer Embeddings'}</h4>
            <p className="text-neutral-400 leading-relaxed text-sm">
              {lang === 'ru'
                ? 'С 2018 года трансформеры генерируют контекстуальные эмбеддинги: одно и то же слово получает разный вектор в зависимости от окружения. Модель «читает» всё предложение целиком через механизм внимания (attention) и формирует вектор для каждого токена с учётом всех остальных. Это радикально улучшило качество поиска и понимания текста.'
                : 'Since 2018, transformers generate contextual embeddings: the same word gets a different vector depending on its surroundings. The model "reads" the entire sentence through the attention mechanism and forms a vector for each token considering all others. This radically improved search quality and text understanding.'}
            </p>
          </div>

          <div className="bg-card p-5 rounded-xl border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'Современные модели эмбеддингов' : 'Modern Embedding Models'}</h4>
            <div className="space-y-2 text-sm text-neutral-400">
              <div><span className="text-neutral-300 font-medium">text-embedding-3-small (OpenAI)</span> — {lang === 'ru' ? '1536 измерений, отличное качество, платная API ($0.02/1M токенов)' : '1536 dimensions, excellent quality, paid API ($0.02/1M tokens)'}</div>
              <div><span className="text-neutral-300 font-medium">all-MiniLM-L6-v2 (sentence-transformers)</span> — {lang === 'ru' ? '384 измерения, бесплатная, можно запускать локально' : '384 dimensions, free, can run locally'}</div>
              <div><span className="text-neutral-300 font-medium">Cohere embed-v3</span> — {lang === 'ru' ? 'поддержка 100+ языков, отдельные режимы для поиска и классификации' : '100+ language support, separate modes for search and classification'}</div>
              <div><span className="text-neutral-300 font-medium">BGE / GTE (open-source)</span> — {lang === 'ru' ? 'китайские open-source модели, конкурируют с OpenAI по качеству' : 'Chinese open-source models, compete with OpenAI on quality'}</div>
            </div>
          </div>

          {/* Comparison table */}
          <div className="bg-card border border-border-emphasis rounded-xl p-5">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">
              {lang === 'ru' ? 'Сравнение подходов' : 'Approach Comparison'}
            </span>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-neutral-400">
                <thead>
                  <tr className="border-b border-border-emphasis">
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium"></th>
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">TF-IDF</th>
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">Word2Vec</th>
                    <th className="text-left py-2 text-neutral-500 font-medium">{lang === 'ru' ? 'Трансформеры' : 'Transformers'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">{lang === 'ru' ? 'Размерность' : 'Dimensions'}</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Размер словаря (10K-100K)' : 'Vocab size (10K-100K)'}</td>
                    <td className="py-2 pr-4">100-300</td>
                    <td className="py-2">384-3072</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">{lang === 'ru' ? 'Семантика' : 'Semantics'}</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Нет' : 'No'}</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Да (статическая)' : 'Yes (static)'}</td>
                    <td className="py-2">{lang === 'ru' ? 'Да (контекстуальная)' : 'Yes (contextual)'}</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">{lang === 'ru' ? 'Контекст' : 'Context'}</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Нет' : 'No'}</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Нет' : 'No'}</td>
                    <td className="py-2">{lang === 'ru' ? 'Да' : 'Yes'}</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-neutral-300 font-medium">{lang === 'ru' ? 'Скорость' : 'Speed'}</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Очень быстро' : 'Very fast'}</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Быстро' : 'Fast'}</td>
                    <td className="py-2">{lang === 'ru' ? 'Медленнее (GPU)' : 'Slower (GPU)'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 3: Similarity & Distance */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Ruler className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 3: Сходство и расстояние' : 'Chapter 3: Similarity & Distance'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Раз у нас есть вектора, нужно уметь измерять, насколько они похожи. Это фундаментальная операция: именно она определяет, какие документы «релевантны» вашему запросу. Существует три основных метрики.'
              : 'Once we have vectors, we need to measure how similar they are. This is the fundamental operation: it determines which documents are "relevant" to your query. There are three main metrics.'}
          </p>

          <div className="bg-card p-5 rounded-xl border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'Косинусное сходство (Cosine Similarity)' : 'Cosine Similarity'}</h4>
            <p className="text-neutral-400 leading-relaxed text-sm mb-3">
              {lang === 'ru'
                ? 'Самая популярная метрика. Измеряет угол между двумя векторами, игнорируя их длину. Значения от -1 (противоположные) через 0 (ортогональные, не связаны) до 1 (идентичные по направлению). На практике для текстовых эмбеддингов значения обычно от 0 до 1.'
                : 'The most popular metric. Measures the angle between two vectors, ignoring their magnitude. Values range from -1 (opposite) through 0 (orthogonal, unrelated) to 1 (identical direction). In practice, for text embeddings values typically range from 0 to 1.'}
            </p>
            <div className="bg-black/40 rounded-lg p-4 font-mono text-xs text-neutral-400">
              <div className="text-neutral-500 mb-2">cosine_similarity(A, B) = (A · B) / (||A|| × ||B||)</div>
              <div className="text-emerald-400 mt-2">{lang === 'ru' ? '// Результат: от -1 до 1. Чем ближе к 1, тем более похожи.' : '// Result: -1 to 1. Closer to 1 = more similar.'}</div>
            </div>
          </div>

          <div className="bg-card p-5 rounded-xl border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'Скалярное произведение (Dot Product)' : 'Dot Product'}</h4>
            <p className="text-neutral-400 leading-relaxed text-sm mb-3">
              {lang === 'ru'
                ? 'Похоже на косинусное сходство, но учитывает длину (магнитуду) векторов. Если вектора нормализованы (длина = 1), скалярное произведение и косинусное сходство дают одинаковый результат. Используется, когда длина вектора несёт информацию (например, популярность документа).'
                : 'Similar to cosine similarity, but magnitude matters. If vectors are normalized (length = 1), dot product and cosine similarity give the same result. Used when vector magnitude carries information (e.g., document popularity).'}
            </p>
            <div className="bg-black/40 rounded-lg p-4 font-mono text-xs text-neutral-400">
              <div className="text-neutral-500 mb-2">dot_product(A, B) = Σ(Ai × Bi)</div>
              <div className="text-emerald-400 mt-2">{lang === 'ru' ? '// Результат: не ограничен. Чем больше, тем более похожи.' : '// Result: unbounded. Higher = more similar.'}</div>
            </div>
          </div>

          <div className="bg-card p-5 rounded-xl border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'Евклидово расстояние (L2)' : 'Euclidean Distance (L2)'}</h4>
            <p className="text-neutral-400 leading-relaxed text-sm mb-3">
              {lang === 'ru'
                ? 'Прямолинейное расстояние между двумя точками в векторном пространстве. Интуитивно понятно, но чувствительно к масштабу. Чем меньше расстояние, тем ближе вектора (обратная логика по сравнению с cosine similarity).'
                : 'Straight-line distance between two points in vector space. Intuitive, but sensitive to scale. The smaller the distance, the closer the vectors (inverse logic compared to cosine similarity).'}
            </p>
            <div className="bg-black/40 rounded-lg p-4 font-mono text-xs text-neutral-400">
              <div className="text-neutral-500 mb-2">euclidean(A, B) = √(Σ(Ai - Bi)²)</div>
              <div className="text-emerald-400 mt-2">{lang === 'ru' ? '// Результат: от 0 до ∞. Чем ближе к 0, тем более похожи.' : '// Result: 0 to ∞. Closer to 0 = more similar.'}</div>
            </div>
          </div>

          {/* When to use which */}
          <div className="bg-card border border-border-emphasis rounded-xl p-5">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">
              {lang === 'ru' ? 'Когда использовать какую метрику' : 'When to Use Which Metric'}
            </span>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-neutral-400">
                <thead>
                  <tr className="border-b border-border-emphasis">
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Метрика' : 'Metric'}</th>
                    <th className="text-left py-2 text-neutral-500 font-medium">{lang === 'ru' ? 'Лучше всего подходит' : 'Best For'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">Cosine</td>
                    <td className="py-2">{lang === 'ru' ? 'Семантический поиск, сравнение текстов (по умолчанию)' : 'Semantic search, text comparison (default choice)'}</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">Dot Product</td>
                    <td className="py-2">{lang === 'ru' ? 'Нормализованные эмбеддинги, рекомендательные системы' : 'Normalized embeddings, recommendation systems'}</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-neutral-300 font-medium">Euclidean</td>
                    <td className="py-2">{lang === 'ru' ? 'Кластеризация, обнаружение аномалий' : 'Clustering, anomaly detection'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-emerald-500/5 border-l-4 border-emerald-500 p-6 my-6">
            <h4 className="font-bold text-emerald-400 mb-2">{lang === 'ru' ? 'Визуальная интуиция' : 'Visual Intuition'}</h4>
            <p className="text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'Два документа о «машинном обучении» будут близки в векторном пространстве, даже если не делят ни одного общего слова. Один может говорить о «нейросетевых архитектурах и обратном распространении», другой — о «deep learning pipelines and gradient descent». TF-IDF скажет: 0% совпадений. Эмбеддинги скажут: это практически одна тема.'
                : 'Two documents about "machine learning" will be close in vector space even if they share zero words. One might discuss "neural network architectures and backpropagation," the other — "deep learning pipelines and gradient descent." TF-IDF says: 0% overlap. Embeddings say: these are practically the same topic.'}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 4: Vector Databases */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Database className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 4: Векторные базы данных' : 'Chapter 4: Vector Databases'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Обычные базы данных оптимизированы для точного поиска: найти запись с id=42 или все записи где price < 100. Для этого существуют B-tree индексы. Но когда у вас миллион векторов по 1536 измерений и нужно найти 10 ближайших — B-tree бесполезен. Нужны специализированные структуры данных.'
              : 'Traditional databases are optimized for exact lookups: find the record with id=42, or all records where price < 100. B-tree indexes handle this well. But when you have a million vectors of 1536 dimensions and need to find the 10 nearest ones — B-trees are useless. You need specialized data structures.'}
          </p>

          <div className="bg-card p-5 rounded-xl border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'Алгоритмы приближённого поиска (ANN)' : 'Approximate Nearest Neighbor (ANN) Algorithms'}</h4>
            <p className="text-neutral-400 leading-relaxed text-sm mb-4">
              {lang === 'ru'
                ? 'Точный поиск ближайшего соседа (brute force) — O(n) по каждому запросу. При миллионах документов это слишком медленно. ANN-алгоритмы жертвуют немного точностью ради скорости: вместо гарантированно ближайшего возвращают «почти наверняка ближайший» за O(log n).'
                : 'Exact nearest neighbor search (brute force) is O(n) per query. With millions of documents, that\'s too slow. ANN algorithms sacrifice a bit of accuracy for speed: instead of the guaranteed nearest, they return "almost certainly nearest" in O(log n).'}
            </p>
            <div className="space-y-2 text-sm text-neutral-400">
              <div><span className="text-neutral-300 font-medium">HNSW (Hierarchical Navigable Small World)</span> — {lang === 'ru' ? 'Графовый алгоритм. Быстрый поиск, высокая точность, но ест много RAM. Самый популярный выбор.' : 'Graph-based algorithm. Fast search, high accuracy, but memory-hungry. The most popular choice.'}</div>
              <div><span className="text-neutral-300 font-medium">IVF (Inverted File Index)</span> — {lang === 'ru' ? 'Разбивает пространство на кластеры, ищет только в ближайших. Экономичнее по памяти, чуть менее точный.' : 'Partitions the space into clusters, searches only nearest ones. More memory-efficient, slightly less accurate.'}</div>
            </div>
          </div>

          {/* Vector DB comparison */}
          <div className="bg-card border border-border-emphasis rounded-xl p-5">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">
              {lang === 'ru' ? 'Сравнение векторных баз данных' : 'Vector Database Comparison'}
            </span>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-neutral-400">
                <thead>
                  <tr className="border-b border-border-emphasis">
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'База' : 'Database'}</th>
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Тип' : 'Type'}</th>
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Фильтрация' : 'Filtering'}</th>
                    <th className="text-left py-2 text-neutral-500 font-medium">{lang === 'ru' ? 'Ценообразование' : 'Pricing'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">Pinecone</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Облако (managed)' : 'Hosted (managed)'}</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Метаданные, неймспейсы' : 'Metadata, namespaces'}</td>
                    <td className="py-2">{lang === 'ru' ? 'Бесплатный тир, потом от $70/мес' : 'Free tier, then from $70/mo'}</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">Weaviate</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Облако / self-hosted' : 'Hosted / self-hosted'}</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'GraphQL фильтры' : 'GraphQL filters'}</td>
                    <td className="py-2">{lang === 'ru' ? 'Open-source, облако платно' : 'Open-source, cloud paid'}</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">Qdrant</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Облако / self-hosted' : 'Hosted / self-hosted'}</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Богатые фильтры, payload' : 'Rich filters, payload'}</td>
                    <td className="py-2">{lang === 'ru' ? 'Open-source, облако от $25/мес' : 'Open-source, cloud from $25/mo'}</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">Chroma</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Локальная / self-hosted' : 'Local / self-hosted'}</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Метаданные' : 'Metadata'}</td>
                    <td className="py-2">{lang === 'ru' ? 'Open-source, бесплатно' : 'Open-source, free'}</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-neutral-300 font-medium">pgvector</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Расширение PostgreSQL' : 'PostgreSQL extension'}</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Полный SQL' : 'Full SQL'}</td>
                    <td className="py-2">{lang === 'ru' ? 'Бесплатно (ваш Postgres)' : 'Free (your Postgres)'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-amber-500/5 border border-amber-500/15 rounded-lg p-5">
            <h4 className="text-amber-400 font-bold mb-2 text-sm">{lang === 'ru' ? 'Когда pgvector достаточно' : 'When pgvector Is Enough'}</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {lang === 'ru'
                ? 'Если у вас до ~1 млн векторов и уже есть PostgreSQL — начинайте с pgvector. Не нужно поднимать отдельную инфраструктуру. Выделенная векторная БД оправдана при миллионах-миллиардах записей, строгих требованиях к latency (<10ms) или необходимости горизонтального масштабирования.'
                : 'If you have up to ~1M vectors and already run PostgreSQL — start with pgvector. No need for separate infrastructure. A dedicated vector DB is justified at millions-to-billions of records, strict latency requirements (<10ms), or horizontal scaling needs.'}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 5: Chunking Strategies */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Scissors className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 5: Стратегии чанкинга' : 'Chapter 5: Chunking Strategies'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Модели эмбеддингов имеют ограничение на длину входа — обычно 512 токенов (некоторые современные модели до 8192). Длинные документы нужно разбивать на фрагменты (чанки). Как именно вы это делаете — критически влияет на качество поиска.'
              : 'Embedding models have input length limits — typically 512 tokens (some modern models up to 8192). Long documents must be split into chunks. How you do this critically affects retrieval quality.'}
          </p>

          <div className="bg-card p-5 rounded-xl border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'Фиксированный размер' : 'Fixed-Size Chunking'}</h4>
            <p className="text-neutral-400 leading-relaxed text-sm mb-3">
              {lang === 'ru'
                ? 'Простейший подход: разрезать текст каждые N символов или токенов. Плюс — предсказуемо и просто. Минус — разрез может прийтись на середину предложения или абзаца, ломая контекст.'
                : 'The simplest approach: cut text every N characters or tokens. Pro — predictable and simple. Con — the cut can land in the middle of a sentence or paragraph, breaking context.'}
            </p>
            <div className="bg-black/40 rounded-lg p-4 font-mono text-xs text-neutral-400">
              <div className="text-neutral-500 mb-2">{lang === 'ru' ? '// Пример: чанк обрезан на полуслове' : '// Example: chunk cut mid-sentence'}</div>
              <div>{lang === 'ru' ? 'Чанк 1: "...нейросеть обучается методом обратного распространения ош"' : 'Chunk 1: "...the neural network trains using backpropaga"'}</div>
              <div>{lang === 'ru' ? 'Чанк 2: "ибки, минимизируя функцию потерь на каждом шаге..."' : 'Chunk 2: "tion, minimizing the loss function at each step..."'}</div>
            </div>
          </div>

          <div className="bg-card p-5 rounded-xl border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'Семантический чанкинг' : 'Semantic Chunking'}</h4>
            <p className="text-neutral-400 leading-relaxed text-sm">
              {lang === 'ru'
                ? 'Разрезать по естественным границам: абзацы, заголовки, секции. Markdown-документы разбиваются по заголовкам (## Section). HTML — по тегам. Результат лучше, но требует понимания структуры документа.'
                : 'Split at natural boundaries: paragraphs, headings, sections. Markdown documents split by headings (## Section). HTML — by tags. Better results, but requires understanding document structure.'}
            </p>
          </div>

          <div className="bg-card p-5 rounded-xl border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'Перекрывающиеся чанки (Sliding Window)' : 'Overlapping Chunks (Sliding Window)'}</h4>
            <p className="text-neutral-400 leading-relaxed text-sm mb-3">
              {lang === 'ru'
                ? 'Компромисс: чанки фиксированного размера, но с перекрытием. Например, чанк 512 токенов с перекрытием 50 — каждый следующий чанк начинается на 50 токенов раньше, чем закончился предыдущий. Так информация на границах не теряется.'
                : 'A compromise: fixed-size chunks, but with overlap. For example, 512-token chunks with 50-token overlap — each next chunk starts 50 tokens before the previous one ended. This way, information at boundaries is preserved.'}
            </p>
            <div className="bg-black/40 rounded-lg p-4 font-mono text-xs text-neutral-400">
              <div className="text-neutral-500 mb-2">{lang === 'ru' ? '// Sliding window: размер=512, перекрытие=50' : '// Sliding window: size=512, overlap=50'}</div>
              <div>Chunk 1: tokens[0:512]</div>
              <div>Chunk 2: tokens[462:974]   <span className="text-emerald-400">{lang === 'ru' ? '← 50 токенов перекрытия' : '← 50 tokens overlap'}</span></div>
              <div>Chunk 3: tokens[924:1436]</div>
            </div>
          </div>

          {/* Chunk size tradeoffs */}
          <div className="bg-card border border-border-emphasis rounded-xl p-5">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">
              {lang === 'ru' ? 'Размер чанков по типу задачи' : 'Chunk Sizes by Use Case'}
            </span>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-neutral-400">
                <thead>
                  <tr className="border-b border-border-emphasis">
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Задача' : 'Use Case'}</th>
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Размер чанка' : 'Chunk Size'}</th>
                    <th className="text-left py-2 text-neutral-500 font-medium">{lang === 'ru' ? 'Почему' : 'Why'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">Q&A</td>
                    <td className="py-2 pr-4">256-512 {lang === 'ru' ? 'токенов' : 'tokens'}</td>
                    <td className="py-2">{lang === 'ru' ? 'Точный ответ важнее широкого контекста' : 'Precise answer matters more than broad context'}</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">{lang === 'ru' ? 'Суммаризация' : 'Summarization'}</td>
                    <td className="py-2 pr-4">1024-2048 {lang === 'ru' ? 'токенов' : 'tokens'}</td>
                    <td className="py-2">{lang === 'ru' ? 'Нужен широкий контекст для связного резюме' : 'Broad context needed for coherent summary'}</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">{lang === 'ru' ? 'Код' : 'Code'}</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'На уровне функций' : 'Function-level'}</td>
                    <td className="py-2">{lang === 'ru' ? 'Функция — естественная единица смысла' : 'A function is a natural unit of meaning'}</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-neutral-300 font-medium">{lang === 'ru' ? 'Чат / диалог' : 'Chat / dialogue'}</td>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'По сообщениям' : 'Per message'}</td>
                    <td className="py-2">{lang === 'ru' ? 'Каждое сообщение — отдельный смысловой блок' : 'Each message is a separate semantic unit'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-emerald-500/5 border-l-4 border-emerald-500 p-6 my-6">
            <h4 className="font-bold text-emerald-400 mb-2">{lang === 'ru' ? 'Главный трейдофф' : 'The Core Tradeoff'}</h4>
            <p className="text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'Маленькие чанки = точный поиск, но теряется контекст. Большие чанки = больше контекста, но «размывается» релевантность (один абзац про тему, три абзаца нет — а эмбеддинг усреднён по всему чанку). Золотой середины не существует — нужно тестировать на ваших данных.'
                : 'Small chunks = precise retrieval, but context is lost. Large chunks = more context, but relevance gets "diluted" (one paragraph on topic, three not — but the embedding averages over the whole chunk). There\'s no golden mean — you need to test on your data.'}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 6: Building a RAG Pipeline with Embeddings */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Workflow className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 6: RAG-пайплайн на эмбеддингах' : 'Chapter 6: Building a RAG Pipeline with Embeddings'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Теперь соберём всё вместе. RAG (Retrieval-Augmented Generation) — это архитектура, где LLM получает релевантный контекст из внешней базы знаний перед генерацией ответа. Эмбеддинги — ключевая технология, которая делает это возможным.'
              : 'Now let\'s put it all together. RAG (Retrieval-Augmented Generation) is an architecture where an LLM receives relevant context from an external knowledge base before generating an answer. Embeddings are the key technology that makes this possible.'}
          </p>

          <div className="bg-card p-5 rounded-xl border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'Полный поток данных' : 'The Full Data Flow'}</h4>
            <div className="bg-black/40 rounded-lg p-4 font-mono text-xs text-neutral-400">
              <div className="text-neutral-500 mb-3">{lang === 'ru' ? '// Фаза индексации (один раз)' : '// Indexing phase (once)'}</div>
              <div>Document → <span className="text-emerald-400">Chunk</span> → <span className="text-emerald-400">Embed</span> → <span className="text-emerald-400">Store</span> {lang === 'ru' ? 'в векторную БД' : 'in vector DB'}</div>
              <div className="mt-4 text-neutral-500 mb-3">{lang === 'ru' ? '// Фаза запроса (каждый раз)' : '// Query phase (every time)'}</div>
              <div>User Query → <span className="text-emerald-400">Embed</span> → <span className="text-emerald-400">Search</span> vector DB → <span className="text-emerald-400">Retrieve</span> top-K → <span className="text-emerald-400">Inject</span> {lang === 'ru' ? 'в промпт' : 'into prompt'} → <span className="text-emerald-400">LLM</span> → Answer</div>
            </div>
          </div>

          <div className="bg-card p-5 rounded-xl border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'Ре-ранкинг: от top-100 к top-5' : 'Re-ranking: From Top-100 to Top-5'}</h4>
            <p className="text-neutral-400 leading-relaxed text-sm mb-3">
              {lang === 'ru'
                ? 'Bi-encoder (модель эмбеддингов) быстр, но неточен: он кодирует запрос и документы отдельно. Cross-encoder медленный, но точный: он видит запрос и документ вместе и выдаёт скор релевантности. Стратегия — достать 100 результатов быстрым bi-encoder, затем пере-ранжировать их точным cross-encoder и взять top-5.'
                : 'A bi-encoder (embedding model) is fast but imprecise: it encodes query and documents separately. A cross-encoder is slow but accurate: it sees query and document together and outputs a relevance score. The strategy — retrieve 100 results with a fast bi-encoder, then re-rank with an accurate cross-encoder and take the top 5.'}
            </p>
            <div className="bg-black/40 rounded-lg p-4 font-mono text-xs text-neutral-400">
              <div className="text-neutral-500 mb-2">{lang === 'ru' ? '// Двухэтапный поиск' : '// Two-stage retrieval'}</div>
              <div>candidates = vector_db.search(query_embedding, top_k=100)</div>
              <div>scores = cross_encoder.score(query, candidates)</div>
              <div>top_results = sort_by_score(candidates, scores)[:5]</div>
            </div>
          </div>

          <div className="bg-card p-5 rounded-xl border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'Гибридный поиск: BM25 + эмбеддинги' : 'Hybrid Search: BM25 + Embeddings'}</h4>
            <p className="text-neutral-400 leading-relaxed text-sm mb-3">
              {lang === 'ru'
                ? 'Семантический поиск отлично находит смысловые совпадения, но может пропустить точные термины (названия продуктов, коды ошибок, имена). Keyword-поиск (BM25) находит точные совпадения, но не понимает синонимы. Лучший результат — комбинация обоих: сначала ищем по обоим каналам, потом объединяем результаты с весами.'
                : 'Semantic search excels at finding meaning matches, but can miss exact terms (product names, error codes, proper nouns). Keyword search (BM25) finds exact matches but doesn\'t understand synonyms. The best result is a combination: search both channels, then merge results with weights.'}
            </p>
            <div className="bg-black/40 rounded-lg p-4 font-mono text-xs text-neutral-400">
              <div className="text-neutral-500 mb-2">{lang === 'ru' ? '// Гибридный поиск' : '// Hybrid search'}</div>
              <div>semantic_results = vector_db.search(query_embedding, top_k=50)</div>
              <div>keyword_results = bm25_index.search(query_text, top_k=50)</div>
              <div className="mt-2 text-emerald-400">{lang === 'ru' ? '// Reciprocal Rank Fusion для объединения' : '// Reciprocal Rank Fusion to merge'}</div>
              <div>final_results = rrf_merge(semantic_results, keyword_results)</div>
            </div>
          </div>

          {/* Practical pseudocode */}
          <div className="bg-card p-5 rounded-xl border border-border-card">
            <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs">{lang === 'ru' ? 'Полный пример (псевдокод)' : 'Full Example (Pseudocode)'}</h4>
            <div className="bg-black/40 rounded-lg p-4 font-mono text-xs text-neutral-400 overflow-x-auto">
              <div className="text-neutral-500 mb-2">{lang === 'ru' ? '// 1. Пользователь задаёт вопрос' : '// 1. User asks a question'}</div>
              <div>query = &quot;{lang === 'ru' ? 'Как настроить автоскейлинг в Kubernetes?' : 'How to configure autoscaling in Kubernetes?'}&quot;</div>
              <div className="mt-3 text-neutral-500 mb-2">{lang === 'ru' ? '// 2. Получаем эмбеддинг запроса' : '// 2. Get query embedding'}</div>
              <div>query_vec = embedding_model.encode(query)  <span className="text-neutral-600">{/* [0.023, -0.041, ..., 0.087] */}</span></div>
              <div className="mt-3 text-neutral-500 mb-2">{lang === 'ru' ? '// 3. Ищем в векторной БД' : '// 3. Search vector DB'}</div>
              <div>chunks = vector_db.search(query_vec, top_k=5)</div>
              <div className="mt-3 text-neutral-500 mb-2">{lang === 'ru' ? '// 4. Формируем промпт с контекстом' : '// 4. Build prompt with context'}</div>
              <div>context = &quot;\n---\n&quot;.join(chunk.text for chunk in chunks)</div>
              <div>prompt = f&quot;{lang === 'ru' ? 'Контекст' : 'Context'}: &#123;context&#125;\n\n{lang === 'ru' ? 'Вопрос' : 'Question'}: &#123;query&#125;&quot;</div>
              <div className="mt-3 text-neutral-500 mb-2">{lang === 'ru' ? '// 5. LLM генерирует ответ' : '// 5. LLM generates answer'}</div>
              <div>answer = llm.generate(prompt)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 7: Pitfalls and Best Practices */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <AlertTriangle className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 7: Ошибки и лучшие практики' : 'Chapter 7: Pitfalls and Best Practices'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Эмбеддинги кажутся простыми — вызвал API, получил вектор, сохранил. Но дьявол в деталях. Вот что чаще всего идёт не так в продакшене.'
              : 'Embeddings seem simple — call an API, get a vector, store it. But the devil is in the details. Here\'s what most commonly goes wrong in production.'}
          </p>

          <div className="space-y-3">
            <div className="bg-card p-5 rounded-xl border border-border-card">
              <h4 className="text-emerald-400 font-bold mb-2">{lang === 'ru' ? 'Выбор модели важнее выбора базы данных' : 'Model Choice Matters More Than DB Choice'}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {lang === 'ru'
                  ? 'Команды часто тратят недели на выбор между Pinecone и Qdrant, но используют первый попавшийся embedding model. Это ошибка. Разница между хорошей и плохой моделью эмбеддингов — это 20-30% качества поиска. Разница между векторными БД — обычно 1-2% при прочих равных. Сначала выбирайте модель, потом БД.'
                  : 'Teams often spend weeks choosing between Pinecone and Qdrant, but grab the first embedding model they find. This is a mistake. The difference between a good and bad embedding model is 20-30% in retrieval quality. The difference between vector DBs is usually 1-2% all else equal. Choose the model first, then the DB.'}
              </p>
            </div>

            <div className="bg-card p-5 rounded-xl border border-border-card">
              <h4 className="text-emerald-400 font-bold mb-2">{lang === 'ru' ? 'Нормализуйте эмбеддинги' : 'Normalize Your Embeddings'}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {lang === 'ru'
                  ? 'Если используете cosine similarity — нормализуйте вектора до единичной длины перед сохранением. Тогда cosine similarity = dot product, а dot product считается быстрее. Большинство моделей уже возвращают нормализованные вектора, но проверяйте.'
                  : 'If using cosine similarity — normalize vectors to unit length before storing. Then cosine similarity = dot product, and dot product is faster to compute. Most models already return normalized vectors, but verify this.'}
              </p>
            </div>

            <div className="bg-card p-5 rounded-xl border border-border-card">
              <h4 className="text-emerald-400 font-bold mb-2">{lang === 'ru' ? 'Не смешивайте модели эмбеддингов' : 'Don\'t Mix Embedding Models'}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {lang === 'ru'
                  ? 'Запрос и документы ДОЛЖНЫ быть закодированы одной и той же моделью. Если вы проиндексировали документы через text-embedding-ada-002, а запрос кодируете через all-MiniLM — результаты будут бессмысленными. Вектора из разных моделей живут в разных пространствах.'
                  : 'Query and documents MUST be encoded with the same model. If you indexed documents with text-embedding-ada-002 but encode queries with all-MiniLM — results will be meaningless. Vectors from different models live in different spaces.'}
              </p>
            </div>

            <div className="bg-card p-5 rounded-xl border border-border-card">
              <h4 className="text-emerald-400 font-bold mb-2">{lang === 'ru' ? 'Фильтрация по метаданным' : 'Metadata Filtering'}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {lang === 'ru'
                  ? 'Не полагайтесь только на векторное сходство. Добавляйте метаданные (дата, категория, автор, язык) и фильтруйте до векторного поиска. Пример: если пользователь спрашивает про документацию v3, отфильтруйте чанки по version=3 перед поиском, иначе модель может найти релевантный, но устаревший ответ из v1.'
                  : 'Don\'t rely on vector similarity alone. Add metadata (date, category, author, language) and pre-filter before vector search. Example: if a user asks about v3 docs, filter chunks by version=3 before searching, otherwise the model might find a relevant but outdated answer from v1.'}
              </p>
            </div>

            <div className="bg-card p-5 rounded-xl border border-border-card">
              <h4 className="text-emerald-400 font-bold mb-2">{lang === 'ru' ? 'Мониторинг качества поиска' : 'Monitor Retrieval Quality'}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {lang === 'ru'
                  ? 'Без метрик вы летите вслепую. Ключевые метрики: Precision@K (какая доля из top-K результатов релевантна), Recall@K (какую долю всех релевантных документов мы нашли в top-K), MRR (Mean Reciprocal Rank — насколько высоко в выдаче первый релевантный результат). Собирайте эталонный набор вопрос-ответ и тестируйте регулярно.'
                  : 'Without metrics, you\'re flying blind. Key metrics: Precision@K (what fraction of top-K results are relevant), Recall@K (what fraction of all relevant docs appear in top-K), MRR (Mean Reciprocal Rank — how high the first relevant result ranks). Build a golden question-answer set and test regularly.'}
              </p>
            </div>

            <div className="bg-card p-5 rounded-xl border border-border-card">
              <h4 className="text-emerald-400 font-bold mb-2">{lang === 'ru' ? 'Стоимость на масштабе' : 'Cost at Scale'}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {lang === 'ru'
                  ? 'Вызовы embedding API складываются. OpenAI text-embedding-3-small стоит $0.02 за 1M токенов — звучит дёшево. Но если у вас 10M документов по 500 токенов, индексация стоит ~$100. А если данные обновляются и нужна переиндексация раз в неделю — $5000/год только на эмбеддинги. Для крупных корпусов рассмотрите self-hosted модели (sentence-transformers, fastembed) — начальные затраты на GPU, но нулевая стоимость за вызов.'
                  : 'Embedding API calls add up. OpenAI text-embedding-3-small costs $0.02 per 1M tokens — sounds cheap. But if you have 10M documents at 500 tokens each, indexing costs ~$100. If data updates require re-indexing weekly — that\'s $5,000/year on embeddings alone. For large corpora, consider self-hosted models (sentence-transformers, fastembed) — upfront GPU costs, but zero per-call cost.'}
              </p>
            </div>
          </div>

          <div className="bg-amber-500/5 border border-amber-500/15 rounded-lg p-5">
            <h4 className="text-amber-400 font-bold mb-2 text-sm">{lang === 'ru' ? 'Чек-лист перед запуском в прод' : 'Pre-Production Checklist'}</h4>
            <ul className="space-y-1 text-neutral-400 text-sm">
              <li>{'✓'} {lang === 'ru' ? 'Одна модель эмбеддингов для запросов и документов' : 'Same embedding model for queries and documents'}</li>
              <li>{'✓'} {lang === 'ru' ? 'Вектора нормализованы (если cosine similarity)' : 'Vectors normalized (if using cosine similarity)'}</li>
              <li>{'✓'} {lang === 'ru' ? 'Чанкинг протестирован на реальных вопросах пользователей' : 'Chunking tested on real user questions'}</li>
              <li>{'✓'} {lang === 'ru' ? 'Метаданные добавлены для фильтрации' : 'Metadata added for filtering'}</li>
              <li>{'✓'} {lang === 'ru' ? 'Есть эталонный набор для измерения Precision@K / Recall@K' : 'Golden set exists for measuring Precision@K / Recall@K'}</li>
              <li>{'✓'} {lang === 'ru' ? 'Бюджет на API/GPU просчитан на 6 месяцев вперёд' : 'API/GPU budget estimated 6 months ahead'}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
