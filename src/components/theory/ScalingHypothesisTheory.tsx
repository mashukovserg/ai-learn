import React from 'react';
import Term from '@/components/Term';
import { Info, Zap, BarChart3, TrendingUp } from 'lucide-react';

export default function ScalingHypothesisTheory({ lang }: { lang: string }) {
  return (
    <>
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
          <Info className="text-emerald-500" />
          {lang === 'ru' ? "Суть гипотезы" : "The Core Idea"}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-4">
          {lang === 'ru'
            ? "Гипотеза масштабирования (Scaling Hypothesis) — это эмпирическое наблюдение: производительность нейросетей предсказуемо растет при увеличении трех факторов: вычислительной мощности (Compute), объема данных (Data) и количества параметров модели (Parameters)."
            : "The Scaling Hypothesis is an empirical observation: neural network performance grows predictably as three factors increase: computing power (Compute), data volume (Data), and the number of model parameters (Parameters)."}
        </p>
        <p className="text-neutral-300 leading-relaxed">
          {lang === 'ru'
            ? "Это звучит просто, но последствия колоссальны. Вместо того чтобы изобретать сложные алгоритмы \"вручную\", мы можем просто \"кормить\" модель большим количеством ресурсов, и она станет умнее."
            : "It sounds simple, but the implications are massive. Instead of manually inventing complex algorithms, we can simply \"feed\" the model more resources, and it will become smarter."}
        </p>
      </div>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
          <Zap className="text-emerald-500" />
          {lang === 'ru' ? "Три столпа масштабирования" : "The Three Pillars"}
        </h2>
        <div className="grid grid-cols-1 gap-4 mb-6">
          <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626] text-center">
            <div className="text-2xl mb-2">💻</div>
            <h4 className="text-emerald-400 font-bold mb-1  uppercase">{lang === 'ru' ? "Вычисления" : "Compute"}</h4>
            <p className=" text-neutral-400">{lang === 'ru' ? "Количество операций (FLOPs) при обучении" : "Total operations (FLOPs) during training"}</p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626] text-center">
            <div className="text-2xl mb-2">📚</div>
            <h4 className="text-emerald-400 font-bold mb-1  uppercase">{lang === 'ru' ? "Данные" : "Data"}</h4>
            <p className=" text-neutral-400">{lang === 'ru' ? "Количество токенов в обучающей выборке" : "Number of tokens in the training set"}</p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#262626] text-center">
            <div className="text-2xl mb-2">🧠</div>
            <h4 className="text-emerald-400 font-bold mb-1  uppercase">{lang === 'ru' ? "Параметры" : "Parameters"}</h4>
            <p className=" text-neutral-400">{lang === 'ru' ? "\"Веса\" или размер самой нейросети" : "\"Weights\" or the size of the neural network"}</p>
          </div>
        </div>
      </div>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
          <BarChart3 className="text-emerald-500" />
          {lang === 'ru' ? "Эмерджентные способности" : "Emergent Abilities"}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-6">
          {lang === 'ru'
            ? "Самое удивительное в масштабировании — это появление \"эмерджентных\" способностей. Это навыки (например, решение сложных математических задач или написание кода), которые не проявляются у маленьких моделей, но внезапно возникают, когда модель достигает определенного размера."
            : "The most surprising part of scaling is the appearance of \"emergent\" abilities. These are skills (like solving complex math problems or writing code) that don&apos;t appear in small models but suddenly emerge when the model reaches a certain size."}
        </p>
        <div className="bg-[#1a1a1a] border border-[#303030] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block shrink-0" />
            <span className=" font-bold text-emerald-400 uppercase tracking-widest">
              {lang === 'ru' ? 'Аналогия' : 'Analogy'}
            </span>
          </div>
          <p className=" text-neutral-300 leading-relaxed">
            {lang === 'ru'
              ? "Масштабирование похоже на превращение гусеницы в бабочку. Мы наблюдаем не количественное увеличение «гусеницы», а переход на качественно новый уровень способностей."
              : "Scaling is like a caterpillar turning into a butterfly. It is a transition to a qualitatively new level of capabilities rather than a mere increase in scale."}
          </p>
        </div>
      </div>

      <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-emerald-400">
          <TrendingUp className="text-emerald-500" />
          {lang === 'ru' ? "Законы Chinchilla" : "Chinchilla Scaling Laws"}
        </h2>
        <p className="text-neutral-300 leading-relaxed mb-6">
          {lang === 'ru'
            ? "В 2022 году исследователи из DeepMind (проект Chinchilla) обнаружили, что многие модели были \"недооценены\" по данным. Они доказали, что для оптимального обучения на каждые два новых параметра модели нужно добавлять пропорциональное количество данных."
            : "In 2022, researchers from DeepMind (the Chinchilla project) discovered that many models were \"data-starved.\" They proved that for optimal training, you need to add a proportional amount of data for every two new parameters."}
        </p>
        <div className="bg-[#1a1a1a] border border-[#262626] rounded-lg p-6">
          <h4 className="font-bold text-neutral-200 mb-3">{lang === 'ru' ? "Ключевой вывод" : "Key takeaway"}</h4>
          <p className=" text-neutral-400 leading-relaxed">
            {lang === 'ru'
              ? "Недостаточно просто делать модель больше. Чтобы она была эффективной, её нужно обучать на гораздо больших объемах качественных данных, чем считалось ранее."
              : "It&apos;s not enough to just make the model bigger. To be effective, it must be trained on much larger volumes of high-quality data than previously thought."}
          </p>
        </div>
      </div>
    </>
  );
}
