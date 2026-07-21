"use client";

import React from 'react';
import Term from '@/components/Term';

export default function TaxonomyMatchingTheory({ lang }: { lang: string }) {
  return (
    <>
      {/* Chapter 1: The Problem */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-heading">
          {lang === 'ru' ? 'Глава 1: Грязный текст против чистой таксономии' : 'Chapter 1: Messy Text vs. a Clean Taxonomy'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed text-lg">
            {lang === 'ru'
              ? <>{'Представьте 27 тысяч вакансий, собранных с рынка труда: примерно 18 тысяч уникальных названий должностей, написанных людьми как попало — «Senior Accountant», «Accountant (Urgent Hiring!)», «Chief Accountant — Dubai». С другой стороны — кураторский справочник из 154 профессий с чистыми названиями, синонимами, списками навыков и описаниями. Задача сопоставления (matching) — приклеить к каждой вакансии идентификатор профессии из справочника либо честно отметить «совпадения нет». Это классическая задача '}<Term id="entity-resolution" lang={lang}>разрешения сущностей (entity resolution)</Term>{': много вариантов сырого текста нужно свести к одной канонической записи.'}</>
              : <>{'Picture 27,000 job vacancies scraped from a labor market: about 18,000 unique job titles, written by humans in every possible way — "Senior Accountant", "Accountant (Urgent Hiring!)", "Chief Accountant — Dubai". On the other side sits a curated catalog of 154 professions with clean names, synonyms, skill lists, and descriptions. The matching task is to attach a profession ID from the catalog to each vacancy, or to honestly mark "no match". This is a classic '}<Term id="entity-resolution" lang={lang}>entity-resolution</Term>{' problem: many raw text variants must collapse onto one canonical record.'}</>}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Точное строковое сравнение здесь бесполезно по трём причинам. Во-первых, связь «многие к одному»: десятки написаний «accountant …» должны сойтись в одну профессию «Бухгалтер». Во-вторых, кросс-язычность: вакансии на английском, а справочник на русском, поэтому побуквенное сравнение никогда не совпадёт. В-третьих, справочник узкий и приоритетный (IT, инженерия, медицина, наука), а массовые вакансии — водители, официанты, продавцы — не должны сопоставляться ни с чем. Поэтому высокая доля «нет совпадения» — это нормальный и правильный исход, а не ошибка алгоритма. Реалистичное покрытие такого узкого справочника — грубо 20–40%, и его надо измерять, а не обещать заранее.'
              : 'Exact string comparison is useless here for three reasons. First, the many-to-one relationship: dozens of spellings of "accountant …" must converge on one profession, "Accountant". Second, cross-language: the vacancies are in English while the catalog is in Russian, so character-level comparison will never match. Third, the catalog is narrow and curated (IT, engineering, medicine, science), so mass-market vacancies — drivers, waiters, sales clerks — should match nothing at all. A high "no-match" rate is therefore a normal, correct outcome, not an algorithm failure. Realistic coverage for such a narrow catalog is roughly 20–40%, and it must be measured, not promised in advance.'}
          </p>
          <div className="bg-emerald-500/5 border-l-4 border-emerald-500 p-6 my-6">
            <h4 className="font-bold text-heading mb-2">{lang === 'ru' ? 'Аналогия' : 'Analogy'}</h4>
            <p className="text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'Сопоставление похоже на сортировку почты в стране, где адреса написаны от руки на разных языках. Индекс (profession_id) один и тот же для тысяч разных конвертов, часть писем адресована в места, которых нет на вашей карте, и их правильно отложить в стопку «не доставить», а не впихивать в первый попавшийся ящик.'
                : 'Matching is like sorting mail in a country where addresses are handwritten in different languages. The postal code (profession_id) is the same for thousands of different envelopes, some letters are addressed to places not on your map, and the right move is to set those aside as "undeliverable" rather than force them into the nearest box.'}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 2: Normalize First */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-heading">
          {lang === 'ru' ? 'Глава 2: Сначала нормализация' : 'Chapter 2: Normalize First'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed text-lg">
            {lang === 'ru'
              ? 'Первый шаг — уменьшить масштаб задачи. Из 27 тысяч строк вакансий сворачиваем список до уникальных нормализованных названий: приводим к нижнему регистру, убираем грейд («senior», «junior»), локацию («Dubai»), шум вроде «urgent hiring» и пунктуацию. После этого остаётся несколько тысяч уникальных названий вместо 27 тысяч строк. Матчим именно уникальные названия, а затем размножаем результат обратно на все вакансии. Это снижает стоимость эмбеддингов и вызовов модели в разы, потому что дорогие операции выполняются один раз на название, а не на каждую строку.'
              : 'The first step is to shrink the problem. From 27,000 vacancy rows we collapse the list to unique normalized titles: lowercase, strip the grade ("senior", "junior"), the location ("Dubai"), noise like "urgent hiring", and punctuation. What remains is a few thousand unique titles instead of 27,000 rows. We match the unique titles, then fan the result back out onto all vacancies. This cuts the cost of embeddings and model calls by a large factor, because the expensive operations run once per title rather than once per row.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Параллельно готовим вторую сторону — «профиль» каждой из 154 профессий: имя плюс альтернативные названия, плюс топовые навыки, знания и короткое описание. Этот профиль служит и якорем для эмбеддинга, и источником алиасов для лексики. Ещё одна важная деталь: теги навыков из вакансий смешаны по смыслу — часть это реальные навыки («financial reporting»), часть — синонимы должности («accountant»), часть — инструменты («AutoCAD»). Перед построением онтологии теги полезно классифицировать на три класса: навык, роль и инструмент. Иначе профессии и навыки перемешаются, и граф «профессия → навык» получится грязным.'
              : 'In parallel we prepare the other side — a "profile" for each of the 154 professions: name plus alternative names, plus top skills, knowledge, and a short description. This profile serves both as the anchor for the embedding and as the source of aliases for lexical matching. One more important detail: the skill tags from vacancies are mixed in meaning — some are real skills ("financial reporting"), some are job synonyms ("accountant"), some are tools ("AutoCAD"). Before building an ontology it helps to classify tags into three classes: skill, role, and tool. Otherwise professions and skills blur together and the "profession → skill" graph comes out dirty.'}
          </p>
          <div className="bg-card border border-border-emphasis rounded-xl p-5">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-neutral-400">
                <thead>
                  <tr className="border-b border-border-emphasis">
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Класс тега' : 'Tag class'}</th>
                    <th className="text-left py-2 text-neutral-500 font-medium">{lang === 'ru' ? 'Пример' : 'Example'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">{lang === 'ru' ? 'Навык (skill)' : 'Skill'}</td>
                    <td className="py-2">financial reporting, food safety</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4 text-neutral-300 font-medium">{lang === 'ru' ? 'Роль (role)' : 'Role'}</td>
                    <td className="py-2">accountant, sales representative</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-neutral-300 font-medium">{lang === 'ru' ? 'Инструмент (tool)' : 'Tool'}</td>
                    <td className="py-2">AutoCAD, Excel</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 3: Lexical Matching */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-heading">
          {lang === 'ru' ? 'Глава 3: Лексический матч — дёшево и точно' : 'Chapter 3: Lexical Matching — Cheap and Precise'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed text-lg">
            {lang === 'ru'
              ? <>{'Лексический слой сравнивает строки как строки, без всякого понимания смысла. Сюда входят три приёма: точное совпадение (exact match) нормализованного названия с именем профессии, '}<Term id="fuzzy-matching" lang={lang}>нечёткое совпадение</Term>{' (fuzzy match, например через библиотеку rapidfuzz), которое прощает опечатки и мелкие различия, и совпадение по алиасам (alias match) — сверка со списком альтернативных названий профессии. Все три работают на уровне символов и слов. С высоким порогом близости лексика даёт быстрый пласт уверенных авто-присвоений и первую цифру покрытия — без единого вызова тяжёлой модели.'}</>
              : <>{'The lexical layer compares strings as strings, with no understanding of meaning. It uses three techniques: exact match of the normalized title against the profession name, '}<Term id="fuzzy-matching" lang={lang}>fuzzy match</Term>{' (for example via the rapidfuzz library), which forgives typos and small differences, and alias match — checking against the profession\'s list of alternative names. All three operate at the level of characters and words. With a high similarity threshold, lexical matching yields a fast layer of confident auto-assignments and a first coverage number — without a single call to a heavy model.'}</>}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Сила лексики в дешевизне и высокой точности на очевидных случаях: «senior accountant» уверенно ложится на «Бухгалтер». Слабость в том, что она слепа к смыслу. Синонимы, которые пишутся по-разному («talent acquisition» и «recruiter»), перефразировки и особенно кросс-язычность («accountant» против «Бухгалтер») лексика пропускает, потому что на уровне символов эти строки не похожи. Поэтому лексический слой ставят первым как быстрый и точный фильтр, но заведомо неполный: то, что он не поймал, передаётся дальше — семантическому слою.'
              : 'The strength of lexical matching is that it is cheap and highly precise on obvious cases: "senior accountant" lands confidently on "Accountant". Its weakness is that it is blind to meaning. Synonyms spelled differently ("talent acquisition" vs. "recruiter"), paraphrases, and especially cross-language cases ("accountant" vs. the Russian "Бухгалтер") slip past it, because at the character level those strings are not similar. So the lexical layer goes first as a fast, precise filter, but a deliberately incomplete one: whatever it misses is handed onward to the semantic layer.'}
          </p>
        </div>
      </div>

      {/* Chapter 4: Semantic Retrieval */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-heading">
          {lang === 'ru' ? 'Глава 4: Семантический поиск на эмбеддингах' : 'Chapter 4: Semantic Retrieval with Embeddings'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed text-lg">
            {lang === 'ru'
              ? <>{'Семантический слой сравнивает не строки, а смысл. Каждое название вакансии и каждый профиль профессии превращаются в '}<Term id="embeddings" lang={lang}>эмбеддинг</Term>{' — вектор чисел, где близкие по смыслу тексты оказываются рядом в пространстве. Ключевой трюк для нашей задачи — мультиязычная модель эмбеддингов (например, LaBSE или multilingual-e5), которая кладёт русский и английский в одно общее пространство. Тогда русская профессия и английская вакансия сравниваются напрямую, и машинный перевод не нужен вовсе. Близость измеряют '}<Term id="cosine-similarity" lang={lang}>косинусным сходством (cosine similarity)</Term>{': чем ближе векторы, тем выше оценка.'}</>
              : <>{'The semantic layer compares meaning, not strings. Each vacancy title and each profession profile is turned into an '}<Term id="embeddings" lang={lang}>embedding</Term>{' — a vector of numbers where texts close in meaning end up near each other in space. The key trick for our task is a multilingual embedding model (for example LaBSE or multilingual-e5) that places Russian and English in one shared space. A Russian profession and an English vacancy can then be compared directly, and machine translation is not needed at all. Closeness is measured by '}<Term id="cosine-similarity" lang={lang}>cosine similarity</Term>{': the nearer the vectors, the higher the score.'}</>}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Для каждого нормализованного названия семантический слой достаёт top-K ближайших профессий-кандидатов (retrieval). Так ловятся синонимия и кросс-язык, которые лексика пропустила: «recruiter» окажется рядом с «специалист по подбору персонала», хотя буквенно они не совпадают. Но у семантики своя цена — она даёт близость, а не гарантию. Стратегия «точность прежде всего» (precision-first) означает: присваиваем автоматически только выше высокого порога косинуса, а всё, что ниже, не додумываем. Кандидаты со средней близостью не выбрасываются — они уходят на следующий, самый качественный слой разбора.'
              : 'For each normalized title, the semantic layer retrieves the top-K nearest candidate professions. This catches the synonymy and cross-language cases lexical matching missed: "recruiter" lands next to the Russian "специалист по подбору персонала" even though the characters do not match. But semantics has its own cost — it gives closeness, not a guarantee. A precision-first strategy means: auto-assign only above a high cosine threshold, and do not guess anything below it. Mid-similarity candidates are not thrown away — they move on to the next, highest-quality resolution layer.'}
          </p>
          <div className="bg-card border border-border-emphasis rounded-xl p-5">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-neutral-400">
                <thead>
                  <tr className="border-b border-border-emphasis">
                    <th className="text-left py-2 pr-4 text-neutral-500 font-medium">{lang === 'ru' ? 'Лексический слой' : 'Lexical layer'}</th>
                    <th className="text-left py-2 text-neutral-500 font-medium">{lang === 'ru' ? 'Семантический слой' : 'Semantic layer'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Сравнивает символы и слова' : 'Compares characters and words'}</td>
                    <td className="py-2">{lang === 'ru' ? 'Сравнивает смысл (векторы)' : 'Compares meaning (vectors)'}</td>
                  </tr>
                  <tr className="border-b border-border-card">
                    <td className="py-2 pr-4">exact match, fuzzy match, alias match</td>
                    <td className="py-2">{lang === 'ru' ? 'эмбеддинги, cosine similarity, top-K' : 'embeddings, cosine similarity, top-K'}</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">{lang === 'ru' ? 'Слеп к синонимам и языку' : 'Blind to synonyms and language'}</td>
                    <td className="py-2">{lang === 'ru' ? 'Ловит синонимы и кросс-язык' : 'Catches synonyms and cross-language'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 5: Cascade, Adjudication & Evaluation */}
      <div className="bg-card-dark border border-border-card rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-heading">
          {lang === 'ru' ? 'Глава 5: Каскад, адъюдикация и оценка' : 'Chapter 5: The Cascade, Adjudication & Evaluation'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed text-lg">
            {lang === 'ru'
              ? 'Слои собираются в каскад по принципу «дёшево → точно». Сначала нормализация, затем лексика (быстрая и точная), затем семантика (широкий охват), и только для спорного среднего диапазона — адъюдикация языковой моделью (LLM). LLM получает название вакансии и top-K кандидатов и выбирает лучший вариант или говорит «совпадения нет». Это самый качественный, но и самый дорогой слой, поэтому его применяют только к неоднозначному хвосту — там, где близость попала между порогами. Так стоимость остаётся под контролем: дорогой инструмент трогает лишь малую долю случаев.'
              : 'The layers assemble into a cascade on a "cheap → precise" principle. First normalization, then lexical (fast and precise), then semantic (broad recall), and only for the disputed middle band — adjudication by a language model (LLM). The LLM receives the vacancy title and the top-K candidates and picks the best option or says "no match". This is the highest-quality but also the most expensive layer, so it is applied only to the ambiguous tail — where the similarity fell between the thresholds. Cost stays under control that way: the expensive tool touches only a small share of cases.'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? <>{'Последний обязательный шаг — оценка. Заводим явный бакет «нет совпадения» для вакансий вне таксономии и размечаем руками '}<Term id="gold-set" lang={lang}>золотой набор (gold set)</Term>{' из 150–200 пар, чтобы измерить '}<Term id="precision" lang={lang}>точность (precision)</Term>{' и '}<Term id="recall" lang={lang}>полноту (recall)</Term>{' и откалибровать пороги. Точность отвечает на вопрос «сколько из авто-присвоений верны», полнота — «сколько правильных пар мы вообще нашли». Стратегия precision-first означает: крутим порог так, чтобы точность среди авто-присвоений была высокой (порядка 90%), сознательно жертвуя охватом. Каждой вакансии на выходе приписываем profession_id, оценку близости, метод (lexical / semantic / llm) и запасного кандидата (runner-up) для ручного ревью.'}</>
              : <>{'The last mandatory step is evaluation. We create an explicit "no-match" bucket for vacancies outside the taxonomy and hand-label a '}<Term id="gold-set" lang={lang}>gold set</Term>{' of 150–200 pairs to measure '}<Term id="precision" lang={lang}>precision</Term>{' and '}<Term id="recall" lang={lang}>recall</Term>{' and calibrate the thresholds. Precision answers "how many of the auto-assignments are correct"; recall answers "how many of the correct pairs did we find at all". A precision-first strategy means: tune the threshold so precision among auto-assignments is high (around 90%), deliberately sacrificing coverage. For each vacancy the output carries a profession_id, a similarity score, the method (lexical / semantic / llm), and a runner-up candidate for manual review.'}</>}
          </p>
          <div className="bg-emerald-500/5 border-l-4 border-emerald-500 p-6 my-6">
            <h4 className="font-bold text-heading mb-2">{lang === 'ru' ? 'Главный вывод' : 'Key takeaway'}</h4>
            <p className="text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'Матчинг — не одна модель, а конвейер из слоёв, где каждый следующий дороже и умнее предыдущего и трогает всё меньше случаев. Покрытие меряют на золотом наборе, а не обещают заранее, и высокая доля «нет совпадения» для узкого справочника — это правильно.'
                : 'Matching is not one model but a pipeline of layers, where each next layer is more expensive and smarter than the last and touches fewer cases. Coverage is measured on the gold set, not promised in advance, and a high "no-match" rate for a narrow catalog is correct.'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
