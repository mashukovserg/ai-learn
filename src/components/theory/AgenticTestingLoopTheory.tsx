"use client";

import React from 'react';
import Terminal from '@/components/Terminal';

export default function AgenticTestingLoopTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-8 reading-prose">
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru' ? 'Глава 1: Тесты как единственный источник истины' : 'Chapter 1: Tests as the Single Source of Truth'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                В классической разработке тесты — это страховка. В агентной разработке тесты — это <strong>интерфейс управления</strong>. Когда вы просите агента написать код, у модели нет интуитивного понимания «правильности». Модель просто предсказывает следующие токены. Без тестов агент может написать код, который выглядит рабочим, но ломается при первом запуске.
              </>
            ) : (
              <>
                In classical development, tests are insurance. In agentic development, tests are a <strong>management interface</strong>. When you ask an agent to write code, the model has no intuitive sense of &quot;correctness.&quot; It simply predicts the next tokens. Without tests, an agent might produce code that looks functional but crashes on the first run.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Единственный способ сделать агента автономным — дать ему объективный критерий успеха. Этот критерий — «зеленый» статус тестов. Если тесты проходят, задача выполнена. Если падают — цикл продолжается. Таким образом, тесты превращаются в <strong>acceptance criteria</strong>, которые модель может проверить самостоятельно без участия человека.
              </>
            ) : (
              <>
                The only way to make an agent autonomous is to provide an objective success criterion: a &quot;green&quot; test status. If tests pass, the task is done. If they fail, the loop continues. Thus, tests become <strong>acceptance criteria</strong> that the model can verify independently without human intervention.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Из этой роли следуют инженерные требования к самим тестам. Хороший приёмочный тест для агента детерминирован, быстр и изолирован: агент запускает набор десятки раз за сессию, и десятиминутный прогон превращает цикл в очередь. Медленные интеграционные проверки поднимаются на верхние уровни пирамиды тестирования, а рабочей валютой петли становятся быстрые unit-прогоны.
              </>
            ) : (
              <>
                This role imposes engineering requirements on the tests themselves. A good acceptance test for an agent is deterministic, fast, and isolated: the agent runs the suite dozens of times per session, and a ten-minute run turns the loop into a queue. Slow integration checks move up the testing pyramid, while fast unit runs become the loop&apos;s working currency.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Есть и обратная сторона. Если критерий успеха размыт — «сделай красиво», «улучши читаемость» — агент начинает оценивать себя сам, а его самопроверка наследует те же слепые зоны, что и генерация. Тесты выступают внешней реальностью, с которой модель не может договориться. Поэтому вложение в чёткие тесты окупается быстрее, чем вложение во всё более подробные текстовые инструкции.
              </>
            ) : (
              <>
                There is a flip side. When the success criterion is vague — &quot;make it nice,&quot; &quot;improve readability&quot; — the agent starts grading itself, and its self-check inherits the same blind spots as its generation. Tests act as an external reality the model cannot negotiate with. That is why investing in sharp tests pays off faster than investing in ever-longer textual instructions.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru' ? 'Глава 2: Агентный TDD цикл (Plan-Observe-Act)' : 'Chapter 2: The Agentic TDD Loop (Plan-Observe-Act)'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Эффективная работа с агентом строится по модели <strong>Test-Driven Development (TDD)</strong>. Сначала агент (или человек) пишет тест, описывающий желаемое поведение. Затем агент запускает этот тест и видит, что он падает (Red). Это фаза <strong>Observe</strong> — фиксация начального состояния и ошибки.
              </>
            ) : (
              <>
                Effective agentic workflow is built on <strong>Test-Driven Development (TDD)</strong>. First, the agent (or human) writes a test describing the desired behavior. Then, the agent runs the test and sees it fail (Red). This is the <strong>Observe</strong> phase — capturing the initial state and the error.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Затем наступает фаза <strong>Act</strong>: агент пишет минимальный код, чтобы тест прошел. Получив «зеленый» статус, агент переходит к <strong>Refine</strong> — рефакторингу и финальной верификации. Главное отличие от человеческого TDD здесь в скорости: агент может проверять десятки гипотез в минуту, если у него есть быстрые Unit-тесты.
              </>
            ) : (
              <>
                Next is the <strong>Act</strong> phase: the agent writes minimal code to make the test pass. Once green, the agent moves to <strong>Refine</strong> — refactoring and final verification. The key difference from human TDD is speed: an agent can test dozens of hypotheses per minute if it has fast unit tests.
              </>
            )}
          </p>
          <Terminal
            title="test · zsh"
            lines={[
              { cmd: 'npm test', comment: lang === 'ru' ? '# Red — прогон до правки' : '# Red — run before the fix' },
              { out: '✕ formatPrice › adds currency symbol', tone: 'bad' },
              { out: '  expected "$9.99" · received "9.99"' },
              { cmd: 'edit src/format.ts  +1 -1', comment: lang === 'ru' ? '# Act — минимальный код' : '# Act — minimal code' },
              { cmd: 'npm test', comment: lang === 'ru' ? '# Green — снова прогон' : '# Green — run again' },
              { out: '✓ formatPrice · 1 passed', tone: 'ok' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Порядок Red → Act принципиален именно для агента. Тест, написанный до кода, фиксирует намерение, пока его не исказила реализация. Если же агент пишет тест после кода, он почти неизбежно проверяет то, что получилось, а не то, что просили: тест превращается из спецификации в зеркало.
              </>
            ) : (
              <>
                The Red → Act order matters specifically for agents. A test written before the code pins down the intent before the implementation can distort it. When an agent writes the test after the code, it almost inevitably checks what came out rather than what was asked: the test turns from a specification into a mirror.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                На практике цикл держат на коротком шаге: один падающий тест за раз, минимальная правка, прогон, коммит после каждого зелёного. Такой ритм дёшево откатывается и оставляет читаемую историю. Если красное не уходит несколько итераций подряд — это не повод удвоить усилия, а сигнал остановиться и переформулировать задачу; как устроен этот стоп-кран, разбирает глава 5.
              </>
            ) : (
              <>
                In practice the loop runs on a short stride: one failing test at a time, a minimal edit, a run, a commit after every green. That rhythm is cheap to roll back and leaves a readable history. If the red refuses to clear for several iterations in a row, that is not a cue to push harder but a signal to stop and reframe the task; chapter 5 covers that brake.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru' ? 'Глава 3: Триаж ошибок и самоисцеление' : 'Chapter 3: Error Triage and Self-Healing'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Когда тест падает, агенту нужен не просто флаг «ошибка», а детальный контекст. <strong>Self-Healing Loop</strong> (петля самоисцеления) — это процесс, где агент получает Stack Trace, сравнивает ожидаемый результат с фактическим и делает вывод о причине сбоя.
              </>
            ) : (
              <>
                When a test fails, the agent needs more than just an &quot;error&quot; flag; it needs detailed context. A <strong>Self-Healing Loop</strong> is a process where the agent receives a stack trace, compares expected vs. actual results, and deduces the cause of failure.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Важно научить агента <strong>триажу</strong> (triage): умению отличать ошибку в логике кода от ошибки в самом тесте или проблем в инфраструктуре (например, нехватка памяти или конфликт зависимостей). Если агент просто бесконечно переписывает код, не понимая, что проблема в среде выполнения, цикл превращается в «сжигание» бюджета.
              </>
            ) : (
              <>
                It is crucial to teach the agent <strong>triage</strong>: the ability to distinguish a logic error from a test error or infrastructure issue (like memory limits or dependency conflicts). If an agent endlessly rewrites code without realizing the problem is in the execution environment, the loop becomes a &quot;budget burn.&quot;
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Качество триажа определяется тем, что именно попадает агенту в контекст. Полезный сигнал — стектрейс с точной строкой, дифф «ожидалось/получено» и версия окружения; бесполезный — голое «тест упал». Формат ошибки важнее самого факта ошибки: по флагу агент чинит вслепую, по структурированному отчёту — прицельно.
              </>
            ) : (
              <>
                Triage quality is set by what actually reaches the agent&apos;s context. A useful signal is a stack trace with the exact line, an expected-vs-received diff, and the environment version; a useless one is a bare &quot;the test failed.&quot; The format of the error matters more than the fact of it: given a flag the agent fixes blindly, given a structured report — precisely.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Результат триажа — одна из четырёх категорий, и у каждой своё действие. Ошибка в коде — чинить логику. Ошибка в тесте — чинить тест, не подгоняя код под неверное ожидание. Проблема окружения — например, ImportError из-за невставшей зависимости — решается настройкой, и переписывать логику здесь вреднее, чем бездействовать. Подозрение на нестабильность передаёт дело сценарию из следующей главы.
              </>
            ) : (
              <>
                Triage ends in one of four categories, each with its own action. A code bug — fix the logic. A test bug — fix the test rather than bending the code toward a wrong expectation. An environment issue — say, an ImportError from a missing dependency — is solved by setup, and rewriting logic there is worse than doing nothing. Suspected instability hands the case to the next chapter&apos;s scenario.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru' ? 'Глава 4: Проблема Flaky-тестов и регрессии' : 'Chapter 4: The Flaky Test Problem and Regression'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Самый опасный враг агента — <strong>Flaky-тесты</strong> (нестабильные тесты). Если тест то проходит, то падает без изменений в коде, агент теряет ориентир. Модель может «чинить» работающий код, внося в него реальные баги, просто потому что случайно упал нестабильный тест.
              </>
            ) : (
              <>
                An agent&apos;s most dangerous enemy is <strong>Flaky tests</strong> (unstable tests). If a test passes and fails randomly without code changes, the agent loses its compass. The model might &quot;fix&quot; working code, introducing real bugs, just because an unstable test failed by chance.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Поэтому для агентной разработки критически важна <strong>Regression Testing</strong> (регрессия). Каждый раз, когда агент меняет одну функцию, система должна запускать все связанные тесты проекта. Агент может легко решить локальную задачу, случайно сломав глобальную архитектуру. Только полное покрытие дает уверенность в безопасности автономных правок.
              </>
            ) : (
              <>
                That is why <strong>Regression Testing</strong> is critical for agentic development. Every time an agent modifies a function, the system must run all related project tests. An agent can easily solve a local task while accidentally breaking the global architecture. Only full coverage provides confidence in the safety of autonomous edits.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Нестабильность приходит из привычных мест: реальное время и таймауты, сеть, порядок выполнения тестов, разделяемое между ними состояние. Для человека flaky-тест — раздражение; для агента — ложный компас, потому что скепсиса по умолчанию у модели нет: она принимает красное за чистую монету и начинает «чинить» исправный код.
              </>
            ) : (
              <>
                Instability comes from the usual places: wall-clock time and timeouts, the network, test execution order, state shared between tests. To a human a flaky test is an annoyance; to an agent it is a false compass, because the model has no default skepticism: it takes the red at face value and starts &quot;fixing&quot; healthy code.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Рабочие тактики знакомы, но в агентном цикле они обязательны: карантин нестабильных тестов, повторный прогон упавшего теста до вынесения вердикта, детерминизация — фиксация seed, мок времени и сети. Регрессия дополняет картину: прогон связанных тестов после каждой правки страхует от «локального успеха», купленного ценой глобальной поломки.
              </>
            ) : (
              <>
                The tactics are familiar, but in an agentic loop they are mandatory: quarantine unstable tests, re-run a failure before passing a verdict, determinize — pin seeds, mock time and the network. Regression completes the picture: running related tests after every edit insures against a &quot;local success&quot; bought at the price of a global break.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru' ? 'Глава 5: Лимиты и эскалация' : 'Chapter 5: Limits and Escalation'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Ни одна петля тестирования не должна быть бесконечной. Для production-систем всегда задаются <strong>лимиты на количество итераций</strong> (Max Retries). Если после 5-10 попыток агент не смог сделать тесты «зелеными», система должна остановить цикл и запросить эскалацию на человека.
              </>
            ) : (
              <>
                No testing loop should be infinite. Production systems always define <strong>iteration limits</strong> (Max Retries). If after 5–10 attempts the agent fails to make tests &quot;green,&quot; the system must stop the loop and escalate to a human.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Это предотвращает «галлюцинаторные штормы», когда модель в попытке исправить одну ошибку порождает десять новых. Правильно настроенная эскалация позволяет инженеру вмешаться именно в тот момент, когда агент зашел в тупик, экономя время и вычислительные ресурсы.
              </>
            ) : (
              <>
                This prevents &quot;hallucination storms&quot; where a model, trying to fix one error, generates ten new ones. Properly configured escalation allows an engineer to step in exactly when the agent reaches a dead end, saving time and compute resources.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Эскалация полезна ровно настолько, насколько полон переданный контекст. Человек, получивший «агент не справился», начинает с нуля; человек, получивший последний дифф, историю попыток и гипотезы триажа, начинает с середины. Хорошая петля готовит пакет эскалации заранее — как отчёт, а не как крик о помощи.
              </>
            ) : (
              <>
                Escalation is only as useful as the context handed over. A human who receives &quot;the agent failed&quot; starts from zero; one who receives the last diff, the attempt history, and the triage hypotheses starts from the middle. A good loop prepares the escalation package in advance — as a report, not as a cry for help.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                У лимитов есть и экономическая сторона: каждая итерация стоит токенов и времени, и лимит — это бюджет эксперимента, а не признание слабости. Порог настраивают по типу задачи: тривиальному фиксу хватает трёх попыток, исследовательской задаче дают больше — с обязательной сменой стратегии после середины бюджета. Вовремя остановиться — тоже навык цикла.
              </>
            ) : (
              <>
                Limits also have an economic side: every iteration costs tokens and time, and a limit is an experiment budget, not an admission of weakness. The threshold is tuned per task type: a trivial fix earns three attempts, an exploratory task gets more — with a mandatory change of strategy past mid-budget. Stopping on time is a loop skill too.
              </>
            )}
          </p>
        </div>
      </section>
    </div>
  );
}
