import React from 'react';
import Term from '@/components/Term';
import { Eye, AudioLines, Zap, Layers, Share2, Camera, Waves, Workflow, Cpu, MessageSquare, Image as ImageIcon, Music } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NativeMultimodalityTheory({ lang }: { lang: string }) {
  return (
    <>
      {/* Chapter 1: Beyond Text */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Share2 className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 1: От "текстоцентризма" к единому восприятию' : 'Chapter 1: From Text-Centrism to Unified Perception'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed text-lg">
            {lang === 'ru'
              ? 'Первые большие языковые модели (LLM) были по своей природе "слепыми" и "глухими". Они жили исключительно в мире текста. Если вы хотели, чтобы ИИ "увидел" картинку, вам нужно было использовать сложную связку: отдельная модель зрения описывала изображение словами, и этот текст передавался основной модели. Это было похоже на попытку объяснить слепому человеку, как выглядит закат, используя только слова. Огромное количество информации, такой как пространственные отношения, текстуры и эмоции, неизбежно терялось в процессе этого неуклюжего "перевода".'
              : 'The first large language models (LLMs) were by nature "blind" and "deaf." They lived exclusively in the world of text. If you wanted an AI to "see" a picture, you had to use a complex chain: a separate vision model described the image in words, and that text was passed to the main model. It was like trying to explain a sunset to a blind person using only words. A vast amount of information, such as spatial relationships, textures, and emotions, was inevitably lost in the process of this clumsy "translation."'}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? <><Term id="multimodality" lang={lang}>Нативная мультимодальность</Term> {' (Native Multimodality) — это архитектурная революция. Это означает, что модель изначально, с первого дня обучения, видит разные типы данных одновременно. В её нейронной сети нет отдельного "глаза" или "уха". Для такой системы пиксели изображения, звуковые волны и буквы текста — это равноправные сигналы, которые превращаются в единую математическую систему координат (Latent Space). Модель не переводит картинку в текст, она воспринимает её напрямую.'}</>
              : <><Term id="multimodality" lang={lang}>Native Multimodality</Term> {' is an architectural revolution. It means the model, from day one of training, sees different types of data simultaneously. There is no separate "eye" or "ear" in its neural network. For such a system, image pixels, sound waves, and text characters are equal signals that are transformed into a single mathematical coordinate system (Latent Space). The model does not translate an image into text; it perceives it directly.'}</>}
          </p>
          <div className="bg-[#1a1a1a] border border-emerald-500/20 rounded-2xl p-6 my-8">
            <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
              <Zap size={18} /> {lang === 'ru' ? 'В чем разница для пользователя?' : 'What is the difference for the user?'}
            </h4>
            <p className="text-neutral-400 leading-relaxed">
              {lang === 'ru'
                ? 'Модели нового поколения (GPT-4o, Gemini 1.5, Claude 3.5) "чувствуют" интонацию вашего голоса, слышат сарказм, понимают фоновый шум и могут мгновенно соотнести сказанное слово с объектом на видео. Это обеспечивает бесшовное общение, которое по скорости и глубине понимания приближается к человеческому взаимодействию. Мы переходим от чат-ботов к полноценным цифровым напарникам, которые живут в нашей реальности.'
                : 'Next-generation models (GPT-4o, Gemini 1.5, Claude 3.5) "feel" the intonation of your voice, hear sarcasm, understand background noise, and can instantly correlate a spoken word with an object in a video. This provides seamless communication that approaches human interaction in terms of speed and depth of understanding. We are moving from chatbots to full-fledged digital partners that live in our reality.'}
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 2: How Vision Works — Image Patches */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Camera className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 2: Анатомия зрения — ИИ видит мир патчами' : 'Chapter 2: Anatomy of Vision — AI Sees the World in Patches'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Как превратить хаос из миллионов пикселей в понятные для нейросети данные? Поскольку современные модели основаны на архитектуре трансформера, им нужны "токены". Для текста это куски слов, а для изображений ученые придумали концепцию "патчей" (Image Patches). Представьте, что вы берете фотографию и разрезаете её ножницами на аккуратную сетку из маленьких квадратов (например, 16x16 пикселей каждый).'
              : 'How do you turn a chaos of millions of pixels into data a neural network can understand? Since modern models are based on the transformer architecture, they need "tokens." For text, these are pieces of words, but for images, scientists came up with the concept of "patches" (Image Patches). Imagine taking a photograph and cutting it with scissors into a neat grid of small squares (e.g., 16x16 pixels each).'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-[#0a0a0a] p-6 rounded-xl border border-[#262626] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5"><Layers size={48} /></div>
               <h4 className="font-bold text-emerald-500 mb-3 uppercase tracking-tighter">{lang === 'ru' ? 'Визуальные токены' : 'Visual Tokens'}</h4>
               <p className=" text-neutral-400 text-sm leading-relaxed">
                 {lang === 'ru'
                   ? 'Каждый квадрат (патч) проходит через линейный слой, который "схлопывает" его в длинный список чисел — вектор. Эти векторы подаются в модель точно так же, как текстовые токены. Для трансформера нет разницы: пришло ли к нему слово "кошка" или патч, содержащий край кошачьего уха. Оба являются точками в пространстве смыслов.'
                   : 'Each square (patch) passes through a linear layer that "collapses" it into a long list of numbers—a vector. These vectors are fed into the model exactly like text tokens. For the transformer, there is no difference: did it receive the word "cat" or a patch containing the edge of a cat\'s ear. Both are points in the space of meanings.'}
               </p>
            </div>
            <div className="bg-[#0a0a0a] p-6 rounded-xl border border-[#262626] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5"><Cpu size={48} /></div>
               <h4 className="font-bold text-emerald-500 mb-3 uppercase tracking-tighter">{lang === 'ru' ? 'Пространственное внимание' : 'Spatial Attention'}</h4>
               <p className=" text-neutral-400 text-sm leading-relaxed">
                 {lang === 'ru'
                   ? 'Поскольку модель обрабатывает все патчи одновременно, она может вычислять зависимости между ними. Она понимает, что патч с глазом находится над патчем с носом. Это дает ИИ глубокое понимание геометрии и пространства. Вы можете спросить: "Что находится слева от красной чашки?", и модель, анализируя связи патчей, даст точный ответ.'
                   : 'Since the model processes all patches simultaneously, it can compute dependencies between them. It understands that a patch with an eye is located above a patch with a nose. This gives the AI a deep understanding of geometry and space. You can ask: "What is to the left of the red cup?", and the model, analyzing the connections of patches, will give an accurate answer.'}
               </p>
            </div>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Важный прорыв здесь — это отказ от перевода в текст. В старых системах модель могла сказать "на картинке собака", но не могла сказать, где именно она находится или какого цвета у неё ошейник, если "описатель" забыл это упомянуть. Нативная модель видит все детали сразу и может фокусироваться на любой из них по вашему запросу.'
              : 'A major breakthrough here is the abandonment of translation into text. In old systems, a model could say "there is a dog in the picture," but could not say exactly where it was or what color its collar was if the "describer" forgot to mention it. A native model sees all the details at once and can focus on any of them at your request.'}
          </p>
        </div>
      </div>

      {/* Chapter 3: Native Audio — The Spectrum of Sound */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Waves className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 3: Звук как смысл — Магия нативного аудио' : 'Chapter 3: Sound as Meaning — The Magic of Native Audio'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Традиционный подход к работе со звуком состоял из трех этапов: сначала система распознавания речи (ASR) превращала звук в текст, затем LLM думала над текстом, и в конце система синтеза речи (TTS) озвучивала ответ. Это убивало всю магию. Мы теряли интонацию, смех, вздохи и эмоциональный подтекст. Нативная аудио-мультимодальность работает иначе: звуковая волна напрямую превращается в токены.'
              : 'The traditional approach to working with sound consisted of three stages: first, a speech recognition system (ASR) turned sound into text, then the LLM thought about the text, and finally, a speech synthesis system (TTS) voiced the response. This killed all the magic. We lost intonation, laughter, sighs, and emotional subtext. Native audio multimodality works differently: the sound wave is directly converted into tokens.'}
          </p>
          <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#262626]">
            <h4 className="text-blue-400 font-bold mb-6 uppercase tracking-widest">{lang === 'ru' ? 'Почему это меняет всё?' : 'Why This Changes Everything?'}</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20"><Zap size={18} className="text-blue-500" /></div>
                <div>
                  <p className="text-white font-bold mb-1">{lang === 'ru' ? 'Минимальная задержка (Latency)' : 'Minimum Latency'}</p>
                  <p className="text-neutral-500 text-sm leading-relaxed">{lang === 'ru' ? 'Отсутствие этапов перевода снижает задержку ответа до 250-300 мс. Это скорость человеческой реакции в живом диалоге. Вы можете перебивать ИИ, и он мгновенно замолчит, "услышав" ваш голос.' : 'The absence of translation stages reduces response latency to 250-300 ms. This is the speed of human reaction in a live dialogue. You can interrupt the AI, and it will stop instantly upon "hearing" your voice.'}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20"><Music size={18} className="text-purple-500" /></div>
                <div>
                  <p className="text-white font-bold mb-1">{lang === 'ru' ? 'Эмоциональный интеллект' : 'Emotional Intelligence'}</p>
                  <p className="text-neutral-500 text-sm leading-relaxed">{lang === 'ru' ? 'Модель слышит не просто слова, а спектрограмму звука. Она понимает, когда вы расстроены, воодушевлены или шутите. Она может ответить шепотом, если вы говорите тихо, или спеть песню с нужной мелодией.' : 'The model hears not just words, but the spectrogram of sound. It understands when you are upset, excited, or joking. It can respond in a whisper if you speak softly, or sing a song with the right melody.'}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20"><AudioLines size={18} className="text-emerald-500" /></div>
                <div>
                  <p className="text-white font-bold mb-1">{lang === 'ru' ? 'Контекст окружения' : 'Environmental Context'}</p>
                  <p className="text-neutral-500 text-sm leading-relaxed">{lang === 'ru' ? 'ИИ слышит то же, что и вы: лай собаки, шум дождя за окном или музыку в кафе. Это позволяет ему быть по-настоящему контекстным: "О, я слышу, у тебя идет дождь, не забудь зонт!"' : 'The AI hears what you hear: a dog barking, the sound of rain outside, or music in a cafe. This allows it to be truly contextual: "Oh, I hear it\'s raining where you are, don\'t forget an umbrella!"'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 4: Interleaving — The Magic of Mixing */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Workflow className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 4: Interleaving — Искусство смешивания данных' : 'Chapter 4: Interleaving — The Art of Data Mixing'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Настоящая суперсила мультимодальных моделей — это возможность свободно чередовать (Interleaving) разные типы данных в одном запросе. Вы больше не ограничены форматом "текст + одна картинка". Вы можете построить сложный диалог, используя все органы чувств ИИ одновременно.'
              : 'The true superpower of multimodal models is the ability to freely alternate (Interleave) different data types within a single request. You are no longer limited to the "text + one image" format. You can build a complex dialogue using all the AI\'s senses simultaneously.'}
          </p>
          <div className="p-8 bg-[#0a0a0a] rounded-2xl border border-[#262626] space-y-4">
             <h4 className="text-sm font-bold text-neutral-500 uppercase mb-4">{lang === 'ru' ? 'Пример мультимодального промпта:' : 'Example of a multimodal prompt:'}</h4>
             <div className="flex flex-wrap gap-3 items-center">
                <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs flex items-center gap-2"><MessageSquare size={12} /> {lang === 'ru' ? 'Текст: Посмотри на этот график' : 'Text: Look at this chart'}</span>
                <span className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs flex items-center gap-2"><ImageIcon size={12} /> {lang === 'ru' ? 'Картинка: sales_2024.png' : 'Image: sales_2024.png'}</span>
                <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs flex items-center gap-2"><MessageSquare size={12} /> {lang === 'ru' ? 'Текст: И послушай мои комментарии' : 'Text: And listen to my comments'}</span>
                <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs flex items-center gap-2"><Music size={12} /> {lang === 'ru' ? 'Аудио: voice_note.mp3' : 'Audio: voice_note.mp3'}</span>
             </div>
             <p className="text-neutral-400 italic text-sm mt-4">
                {lang === 'ru' 
                  ? 'Модель объединяет всё это в одну последовательность токенов. Блок внимания (Attention) вычисляет связи между словами в аудио и цифрами на графике. Это позволяет ИИ понимать мир так же целостно, как человек.' 
                  : 'The model combines all of this into a single sequence of tokens. The Attention mechanism computes links between words in the audio and numbers on the chart. This allows the AI to understand the world as holistically as a human.'}
             </p>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Технически это достигается тем, что все типы данных проецируются в одно и то же векторное пространство. Это означает, что для модели вектор, представляющий картинку красного яблока, находится очень близко к вектору слова "красный" и вектору звука "хруст". Это и есть фундамент нативного понимания реальности.'
              : 'Technically, this is achieved by projecting all data types into the same vector space. This means that for the model, the vector representing a picture of a red apple is very close to the vector for the word "red" and the vector for the sound of a "crunch." This is the foundation of a native understanding of reality.'}
          </p>
        </div>
      </div>

      {/* Chapter 5: Challenges — The Cost of Senses */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
          <Layers className="text-emerald-500" />
          {lang === 'ru' ? 'Глава 5: Вызовы и будущее — Цена восприятия' : 'Chapter 5: Challenges and the Future — The Cost of Perception'}
        </h2>
        <div className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'Несмотря на невероятные возможности, мультимодальность не дается бесплатно. Обработка визуальных и аудио данных требует колоссальных вычислительных мощностей. Одна картинка может занимать в окне контекста столько же места, сколько 1000 слов текста. Это делает такие запросы более дорогими и медленными по сравнению с обычным чатом.'
              : 'Despite the incredible possibilities, multimodality does not come for free. Processing visual and audio data requires colossal computational power. A single image can take up as much space in the context window as 1,000 words of text. This makes such requests more expensive and slower compared to a standard chat.'}
          </p>
          <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-xl">
             <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
               <Zap size={18} />
               {lang === 'ru' ? 'Проблема "Визуальных галлюцинаций":' : 'The Problem of "Visual Hallucinations":'}
             </h4>
             <p className=" text-neutral-300 text-sm leading-relaxed">
               {lang === 'ru'
                 ? 'ИИ может уверенно описывать текст на картинке, которого там нет, или ошибаться в количестве мелких объектов. Это связано с тем, что при разбиении на патчи часть мелких деталей может быть потеряна. Очистка и калибровка визуального внимания — это главный вызов для инженеров сегодня.'
                 : 'AI can confidently describe text in an image that is not there, or miscount small objects. This is because during the splitting into patches, some fine details can be lost. Cleaning and calibrating visual attention is the main challenge for engineers today.'}
             </p>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? 'В будущем границы между текстом, зрением и звуком окончательно сотрутся. Модели станут "цифровыми существами", которые воспринимают мир целостно. Мы увидим роботов, которые обучаются, просто "наблюдая" за действиями людей через видеокамеры, и ассистентов, которые станут нашими глазами и ушами в цифровом и физическом мирах.'
              : 'In the future, the boundaries between text, vision, and sound will finally blur. Models will become "digital beings" that perceive the world holistically. We will see robots that learn simply by "observing" human actions through video cameras, and assistants that will become our eyes and ears in both the digital and physical worlds.'}
          </p>
          <div className="bg-emerald-500/10 p-8 rounded-2xl border border-emerald-500/20 text-center mt-8">
             <h3 className="text-2xl font-bold text-white mb-4">{lang === 'ru' ? 'Вы освоили мир мультимодальности' : 'You have Mastered the Multimodal World'}</h3>
             <p className="text-neutral-300 leading-relaxed italic">
               {lang === 'ru'
                 ? 'Поздравляем! Теперь вы понимаете, что за простым "пониманием картинки" стоит сложнейшая математика патчей, векторов и единого внимания. Вы готовы создавать интерфейсы будущего!'
                 : 'Congratulations! You now understand that behind a simple "understanding of an image" lies a complex mathematics of patches, vectors, and unified attention. You are ready to create the interfaces of the future!'}
             </p>
          </div>
        </div>
      </div>
    </>
  );
}