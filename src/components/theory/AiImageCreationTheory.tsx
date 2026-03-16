import React from 'react';
import Term from '@/components/Term';
import { Info, Shield, Image as ImageIcon, Sparkles, Sliders, Hash } from 'lucide-react';

export default function AiImageCreationTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
            <ImageIcon className="text-emerald-500" />
            {lang === 'ru' ? 'Искусство пикселей: от хаоса к шедевру' : 'The Art of Pixels: From Chaos to Masterpiece'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Генерация изображений с помощью ИИ (Midjourney, Stable Diffusion, DALL-E) часто кажется настоящей магией. Вы пишете текст, и через секунду получаете картину, побеждающую на художественных конкурсах. Однако за этим стоит не творческий порыв алгоритма, а строгая и элегантная математика процесса, называемого "Диффузией" (Diffusion).'
                : 'AI image generation (Midjourney, Stable Diffusion, DALL-E) often feels like pure magic. You type text, and a second later, you get a painting that wins art competitions. However, behind this is not a creative algorithmic impulse, but the strict and elegant mathematics of a process called "Diffusion."'}
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Работа с графическими нейросетями кардинально отличается от текстовых LLM. Если текстовая модель предсказывает следующее слово, то графическая модель "вылепливает" изображение из цифрового шума. Чтобы получать предсказуемые и профессиональные результаты, инженер должен понимать, как именно модель интерпретирует слова и превращает их в цвета и формы.'
                : 'Working with graphic neural networks is fundamentally different from text LLMs. While a text model predicts the next word, a graphic model "sculpts" an image from digital noise. To get predictable and professional results, an engineer must understand exactly how the model interprets words and turns them into colors and shapes.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 1: How Diffusion Works */}
      <section>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-blue-400">
            <Sparkles className="text-blue-500" />
            {lang === 'ru' ? 'Глава 1: Как работает Диффузия (Denoising)' : 'Chapter 1: How Diffusion Works (Denoising)'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'В отличие от художников, нейросеть не рисует с чистого белого холста. Процесс генерации всегда начинается с квадрата, заполненного абсолютным визуальным хаосом — случайным шумом (похожим на помехи на старом телевизоре).'
                : 'Unlike human artists, a neural network does not draw on a blank white canvas. The generation process always starts with a square filled with absolute visual chaos—random noise (like static on an old TV).'}
            </p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">
              <h4 className="text-blue-400 font-bold mb-3">{lang === 'ru' ? 'Два этапа обучения модели:' : 'The Two Stages of Training:'}</h4>
              <ol className="list-decimal list-inside text-neutral-300 space-y-3">
                <li>
                  <strong className="text-blue-300">{lang === 'ru' ? 'Прямая диффузия (Уничтожение):' : 'Forward Diffusion (Destruction):'}</strong>{' '}
                  {lang === 'ru'
                    ? 'Берется реальная фотография (например, кошка), и к ней шаг за шагом добавляется шум, пока она не превратится в неразборчивую серую рябь.'
                    : 'A real photo (e.g., a cat) is taken, and noise is added to it step by step until it turns into an unrecognizable gray static.'}
                </li>
                <li>
                  <strong className="text-blue-300">{lang === 'ru' ? 'Обратная диффузия (Созидание):' : 'Reverse Diffusion (Creation):'}</strong>{' '}
                  {lang === 'ru'
                    ? 'Нейросеть учится убирать этот шум (denoising). Ей показывают зашумленную картинку и текст "кошка", и она пытается "вычесть" лишние пиксели так, чтобы проявилась кошка.'
                    : 'The neural network learns to remove this noise (denoising). It is shown the noisy image and the text "cat," and it tries to "subtract" the extra pixels so that a cat emerges.'}
                </li>
              </ol>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              {lang === 'ru'
                ? 'Когда вы пишете промпт, модель берет случайный шум и шаг за шагом (обычно 20-50 шагов) убирает из него то, что не похоже на ваш текст. Она буквально "вырезает" скульптуру из куска мрамора.'
                : 'When you write a prompt, the model takes random noise and, step by step (usually 20-50 steps), removes whatever doesn\'t look like your text. It literally "carves" a sculpture out of a block of marble.'}
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Structure of a Visual Prompt */}
      <section>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
            <Sliders className="text-emerald-500" />
            {lang === 'ru' ? 'Глава 2: Структура визуального промпта' : 'Chapter 2: The Structure of a Visual Prompt'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-6">
              {lang === 'ru'
                ? 'В отличие от текстовых моделей, графические ИИ (особенно Stable Diffusion) плохо понимают длинные сложные предложения и грамматику. Они мыслят тегами и ключевыми словами. Порядок слов имеет критическое значение: слова в начале промпта имеют больший "вес", чем слова в конце.'
                : 'Unlike text models, graphic AIs (especially Stable Diffusion) are bad at understanding long, complex sentences and grammar. They think in tags and keywords. Word order is critical: words at the beginning of the prompt have a higher "weight" than words at the end.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-5">
                <h4 className="font-bold text-emerald-400 mb-2 uppercase tracking-widest text-xs">1. {lang === 'ru' ? 'Субъект' : 'Subject'}</h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'ru' ? 'Кто или что в кадре. (a cyberpunk samurai, close-up portrait)' : 'Who or what is in the frame. (a cyberpunk samurai, close-up portrait)'}
                </p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-5">
                <h4 className="font-bold text-emerald-400 mb-2 uppercase tracking-widest text-xs">2. {lang === 'ru' ? 'Медиум и Стиль' : 'Medium & Style'}</h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'ru' ? 'Как это сделано. (oil painting, 3D render, anime, pencil sketch, photography)' : 'How it is made. (oil painting, 3D render, anime, pencil sketch, photography)'}
                </p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-5">
                <h4 className="font-bold text-emerald-400 mb-2 uppercase tracking-widest text-xs">3. {lang === 'ru' ? 'Освещение' : 'Lighting'}</h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'ru' ? 'Критично для реализма. (cinematic lighting, neon glow, golden hour, studio light)' : 'Critical for realism. (cinematic lighting, neon glow, golden hour, studio light)'}
                </p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-5">
                <h4 className="font-bold text-emerald-400 mb-2 uppercase tracking-widest text-xs">4. {lang === 'ru' ? 'Камера и Качество' : 'Camera & Quality'}</h4>
                <p className="text-sm text-neutral-400">
                  {lang === 'ru' ? 'Технические детали. (shot on 35mm, 8k resolution, highly detailed, masterpiece)' : 'Technical details. (shot on 35mm, 8k resolution, highly detailed, masterpiece)'}
                </p>
              </div>
            </div>
            <div className="bg-[#0a0a0a] border border-[#282828] rounded-lg p-4 font-mono text-sm text-emerald-400/80">
              {lang === 'ru' ? 'Пример: A cyberpunk samurai drinking tea, neon glow, rainy street, cinematic lighting, 8k, highly detailed' : 'Example: A cyberpunk samurai drinking tea, neon glow, rainy street, cinematic lighting, 8k, highly detailed'}
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Control Parameters */}
      <section>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-amber-400">
            <Hash className="text-amber-500" />
            {lang === 'ru' ? 'Глава 3: Управление хаосом (Negative, CFG, Seed)' : 'Chapter 3: Managing Chaos (Negative, CFG, Seed)'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <ul className="space-y-6 text-neutral-300">
              <li>
                <strong className="text-amber-400 block mb-1">{lang === 'ru' ? 'Negative Prompt (Отрицательный промпт)' : 'Negative Prompt'}</strong>
                {lang === 'ru'
                  ? 'Это то, чего вы НЕ хотите видеть. Модель вычитает эти концепции из шума. Хотите фотореализм? Добавьте в негативный промпт слова "illustration, painting, cartoon, 3d". Хотите нормальные руки? Напишите "extra fingers, deformed hands".'
                  : 'This is what you do NOT want to see. The model subtracts these concepts from the noise. Want photorealism? Add "illustration, painting, cartoon, 3d" to the negative prompt. Want normal hands? Write "extra fingers, deformed hands".'}
              </li>
              <li>
                <strong className="text-amber-400 block mb-1">{lang === 'ru' ? 'CFG Scale (Guidance Scale)' : 'CFG Scale (Guidance Scale)'}</strong>
                {lang === 'ru'
                  ? 'Определяет, насколько жестко ИИ должен следовать вашему тексту. При низком CFG (3-5) модель креативит и фантазирует. При высоком (10-15) — строго следует каждому слову, но может пережечь цвета и выдать артефакты.'
                  : 'Determines how strictly the AI must follow your text. At low CFG (3-5), the model is creative and fantasizes. At high CFG (10-15), it strictly follows every word but might over-saturate colors and produce artifacts.'}
              </li>
              <li>
                <strong className="text-amber-400 block mb-1">{lang === 'ru' ? 'Seed (Зерно генерации)' : 'Seed'}</strong>
                {lang === 'ru'
                  ? 'Номер начального узора шума. Если вы используете одинаковый промпт, одинаковые настройки и одинаковый Seed, вы получите абсолютно идентичную картинку. Это критически важно для создания комиксов или согласованных персонажей.'
                  : 'The number of the initial noise pattern. If you use the exact same prompt, settings, and Seed, you will get an absolutely identical image. This is critical for creating comics or consistent characters.'}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Chapter 4: Copyright and Ethics */}
      <section>
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-red-400">
            <Shield className="text-red-500" />
            {lang === 'ru' ? 'Глава 4: Авторское право и Коммерция' : 'Chapter 4: Copyright and Commerce'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed mb-4">
              {lang === 'ru'
                ? 'Генерация изображений создала "серую зону" в юриспруденции. Модели обучаются на миллиардах картинок из интернета, часто без согласия авторов (скрейпинг). Это вызывает массовые протесты художников и судебные иски.'
                : 'Image generation has created a legal "gray area." Models are trained on billions of images from the internet, often without the authors\' consent (scraping). This causes massive protests from artists and lawsuits.'}
            </p>
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-5 mb-6">
              <h4 className="text-red-400 font-bold mb-2">{lang === 'ru' ? 'Кому принадлежит картинка?' : 'Who Owns the Image?'}</h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {lang === 'ru'
                  ? 'Бюро авторского права США (USCO) постановило, что изображения, созданные исключительно алгоритмом на основе текстового промпта, НЕ могут быть защищены авторским правом, так как в них "отсутствует человеческое авторство". Любой может взять картинку, которую вы сгенерировали в Midjourney, и использовать её бесплатно.'
                  : 'The US Copyright Office (USCO) ruled that images created entirely by an algorithm from a text prompt CANNOT be copyrighted, as they "lack human authorship." Anyone can take an image you generated in Midjourney and use it for free.'}
              </p>
            </div>
            <p className="text-neutral-300 leading-relaxed font-bold">
              {lang === 'ru' ? 'Как защитить свой продукт?' : 'How to Protect Your Product?'}
            </p>
            <ul className="text-neutral-400 space-y-2 list-disc list-inside">
              <li>{lang === 'ru' ? 'Используйте ИИ только для набросков и референсов.' : 'Use AI only for sketches and references.'}</li>
              <li>{lang === 'ru' ? 'Значительно модифицируйте результат в Photoshop (тогда вы становитесь соавтором).' : 'Significantly modify the result in Photoshop (then you become a co-author).'}</li>
              <li>{lang === 'ru' ? 'Используйте модели, обученные на лицензионных данных (например, Adobe Firefly).' : 'Use models trained on licensed data (like Adobe Firefly).'}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-2 text-white">
          {lang === 'ru' ? 'Итог: ИИ как кисть, а не как художник' : 'Summary: AI as a Brush, Not an Artist'}
        </h3>
        <p className="text-neutral-300 text-sm leading-relaxed">
          {lang === 'ru'
            ? 'Генеративные сети не отменяют необходимость художественного вкуса. Они лишь снижают технический барьер. Лучшие AI-художники — это фотографы и дизайнеры, которые знают, как поставить свет, выбрать композицию и правильно описать это математическому "денойзеру".'
            : 'Generative networks do not eliminate the need for artistic taste. They merely lower the technical barrier. The best AI artists are photographers and designers who know how to set the light, choose a composition, and properly describe it to a mathematical "denoiser."'}
        </p>
      </section>
    </div>
  );
}
