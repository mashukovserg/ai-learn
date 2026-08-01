"use client";

import React from 'react';
import Term from '@/components/Term';
import Terminal from '@/components/Terminal';

export default function GitSafetyNetTheory({ lang }: { lang: string }) {
  return (
    <div className="space-y-8">
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 1: Почему при работе с агентом git — это страховка'
            : 'Chapter 1: Why Git Is a Safety Net When You Work With an Agent'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Когда код пишешь сам, ты помнишь, что менял: файл, строку, причину. Когда код пишет{' '}
                <Term id="agent" lang={lang}>агент</Term>, за одну минуту в проекте появляется дюжина изменённых
                файлов, и половину из них ты видишь впервые. Память тут больше не работает как система контроля.
                Нужен внешний механизм, который отвечает на два вопроса: что именно изменилось с последней точки, в
                которой всё было хорошо, и как в эту точку вернуться. Это и есть git — не бюрократия ради истории
                коммитов, а страховка, из-за которой ошибка агента стоит одну команду, а не вечер разбирательств.
              </>
            ) : (
              <>
                When you write the code yourself, you remember what you changed: the file, the line, the reason. When
                an <Term id="agent" lang={lang}>agent</Term> writes it, a dozen modified files appear in a minute and
                you are seeing half of them for the first time. Memory has stopped being a control system. You need an
                external mechanism that answers two questions: what exactly changed since the last point where things
                were fine, and how to get back to that point. That is git — not bookkeeping for the sake of a commit
                history, but a safety net that makes an agent’s mistake cost one command instead of an evening.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                По сути git даёт три вещи, и все три нужны в агентной работе. Первая — снимок состояния проекта в
                выбранный момент; такой снимок называется <Term id="commit" lang={lang}>коммитом</Term>. Вторая —
                сравнение двух состояний построчно, то есть <Term id="diff" lang={lang}>diff</Term>: он показывает,
                что удалено и что добавлено, без пересказа со стороны того, кто менял. Третья — возврат к любому
                сохранённому снимку. Ни одна из этих операций не требует, чтобы ты понимал весь чужой код: они
                работают с состояниями, а не со смыслом.
              </>
            ) : (
              <>
                Git gives you three things, and agent work needs all three. First, a snapshot of the project at a
                chosen moment; that snapshot is called a <Term id="commit" lang={lang}>commit</Term>. Second, a
                line-by-line comparison of two states — a <Term id="diff" lang={lang}>diff</Term> — showing what was
                removed and what was added, with no retelling from whoever made the change. Third, a return to any
                saved snapshot. None of these operations requires you to understand somebody else’s code in full:
                they work on states, not on meaning.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Отсюда следует свойство, о которое чаще всего спотыкаются: пока изменения не попали в коммит, их для
                git как бы нет. Рабочая папка — это черновик, а не хранилище. Агент может час писать код, ты можешь
                час его проверять, а одна неудачная команда синхронизации или переключения ветки — и черновик
                исчезнет без следа. Это не редкий сценарий, а обычная цена работы в среде, где ветки переключаются
                часто. Поэтому первое правило звучит скучно и спасает больше всего: работа, которую не закоммитили,
                не считается сделанной.
              </>
            ) : (
              <>
                From this follows the property people trip over most: until changes land in a commit, they do not
                exist as far as git is concerned. The working folder is a draft, not storage. The agent can write
                code for an hour, you can review it for an hour, and one unlucky sync or branch switch erases the
                draft without a trace. This is not an exotic scenario but the ordinary cost of working where branches
                change often. So the first rule sounds boring and saves the most: work that was not committed does
                not count as done.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Собранный из этих деталей рабочий цикл выглядит так. До постановки задачи убедиться, что текущее
                состояние сохранено — это точка возврата. Отдать задачу агенту. Прочитать diff и понять, что он
                сделал на самом деле. Разложить результат на коммиты так, чтобы каждый можно было отменить
                по отдельности. Если что-то пошло не туда — вернуться к точке возврата, а не чинить поверх поломки.
                Четыре шага, и ни один из них не требует доверия к агенту: доверие заменяется проверяемым состоянием.
              </>
            ) : (
              <>
                Assembled from these pieces, the working cycle looks like this. Before you hand over a task, make
                sure the current state is saved — that is your return point. Hand the task to the agent. Read the
                diff and understand what it actually did. Split the result into commits so each one can be undone on
                its own. If something went sideways, return to the saved point instead of patching on top of the
                breakage. Four steps, and none of them requires trusting the agent: trust is replaced by verifiable
                state.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                У этой дисциплины есть неожиданный эффект: она увеличивает свободу агента, а не ограничивает её. Там,
                где откат стоит одну команду, можно позволить смелую правку — переписать модуль, попробовать другую
                архитектуру, снести и сделать заново. Там, где отката нет, люди инстинктивно сужают задачи до
                безопасных мелочей и теряют ровно тот выигрыш, ради которого агента брали. Поэтому дальше в этой
                комнате идут не «команды git», а четыре навыка: читать diff, резать работу на откатываемые куски,
                уверенно отменять и разводить параллельные задачи так, чтобы они не мешали друг другу.
              </>
            ) : (
              <>
                This discipline has an unexpected effect: it widens the agent’s freedom rather than narrowing it.
                Where undo costs one command, you can allow a bold change — rewrite the module, try a different
                structure, tear it down and redo it. Where there is no undo, people instinctively shrink tasks to
                safe trivia and lose exactly the gain they brought the agent in for. So the rest of this room is not
                “git commands” but four skills: reading a diff, cutting work into undoable pieces, reversing changes
                with confidence, and separating parallel tasks so they stay out of each other’s way.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 2: Читать diff — единица ревью агентского изменения'
            : 'Chapter 2: Reading the Diff — the Unit of Review'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Агент в конце работы пишет отчёт: «добавил валидацию, поправил тест». Отчёт — это его пересказ
                собственных действий, и он честный ровно настолько, насколько агент сам понял, что сделал. Проверять
                нужно не пересказ, а <Term id="diff" lang={lang}>diff</Term>. Читается он просто: строки со знаком
                «минус» из проекта убраны, со знаком «плюс» добавлены, остальные показаны вокруг как контекст, чтобы
                было видно место. Никакой интерпретации в diff нет — это механическое сравнение двух состояний, и
                именно поэтому ему можно верить.
              </>
            ) : (
              <>
                At the end of a run the agent writes a summary: “added validation, fixed the test.” A summary is its
                retelling of its own actions, and it is honest exactly to the degree the agent understood what it
                did. What you review is not the retelling but the <Term id="diff" lang={lang}>diff</Term>. Reading it
                is simple: lines marked “minus” were removed from the project, lines marked “plus” were added, and
                the rest is shown around them as context so you can see the place. A diff carries no interpretation —
                it is a mechanical comparison of two states, which is exactly why it can be trusted.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Порядок чтения важнее скорости. Сначала смотрят не содержимое, а список затронутых файлов со сводкой
                добавленных и удалённых строк — это карта изменения. На карте задают первый вопрос: все ли файлы
                здесь ожидаемы? Задача была про форму регистрации, а в списке лежит файл настроек сборки — значит,
                агент по дороге решил ещё одну проблему, о которой его не просили. Ниже — как такая карта выглядит
                в терминале.
              </>
            ) : (
              <>
                The order of reading matters more than speed. You start not with content but with the list of
                touched files and their added/removed line counts — the map of the change. On the map you ask the
                first question: is every file here expected? The task was about the signup form, yet the list
                contains a build-configuration file — meaning the agent solved one more problem along the way that
                nobody asked about. Below is what such a map looks like in a terminal.
              </>
            )}
          </p>
          <Terminal
            title="git · diff --stat"
            lines={[
              { cmd: 'git diff --stat main' },
              { out: ' src/forms/signup.ts          | 34 +++++++++++++++---' },
              { out: ' src/forms/signup.test.ts     | 12 ++++++' },
              { out: ' src/lib/validation.ts        |  8 ++++' },
              { out: ' .github/workflows/ci.yml     |  6 +----', tone: 'warn' },
              { out: ' 4 files changed, 48 insertions(+), 12 deletions(-)' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Три первых файла ожидаемы: форма, её тест, общая валидация. Четвёртый — нет. Конфигурация CI не
                относилась к задаче, и цифры рядом с ней подозрительны: шесть строк изменено, из них большинство
                удалено. Самый частый сюжет за такой строкой — агент упёрся в непроходящую проверку и «починил» её,
                отключив. Отсюда три файла-сигнала, на которых стоит останавливаться всегда: конфигурация проверок,
                тесты и файлы зависимостей. Правки в них меняют не поведение продукта, а правила игры, по которым
                это поведение оценивают.
              </>
            ) : (
              <>
                The first three files are expected: the form, its test, shared validation. The fourth is not. CI
                configuration had nothing to do with the task, and the numbers next to it are suspicious: six lines
                changed, most of them removed. The most common story behind that line is an agent that hit a failing
                check and “fixed” it by switching the check off. Hence three signal files worth stopping at every
                time: check configuration, tests, and dependency files. Edits there do not change product behavior;
                they change the rules by which that behavior is judged.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Внутри файла diff разбит на куски вокруг изменённых мест. Здесь работает второе правило: удалённые
                строки читают внимательнее добавленных. Добавленный код виден и обсуждаем, его разберёт ревью и
                поймают тесты. Удалённый исчезает молча — вместе с проверкой на пустое значение, обработкой ошибки
                или условием, которое кто-то когда-то добавил после инцидента. Агент, который переписывает функцию
                целиком, удаляет такие детали не по злому умыслу: он просто не знает истории, которой нет в коде.
              </>
            ) : (
              <>
                Inside a file, a diff is split into chunks around the changed places. Here the second rule applies:
                read removed lines more carefully than added ones. Added code is visible and discussable; review will
                cover it and tests will catch it. Removed code disappears quietly — along with the empty-value check,
                the error handling, or the condition somebody added after an incident years ago. An agent that
                rewrites a function wholesale drops such details with no ill intent: it simply does not know history
                that is not written in the code.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Последнее, что мешает читать diff, — шум. Автоформатирование всего файла, переименование переменных
                «заодно», обновлённый файл зависимостей на тысячу строк: полезное изменение тонет, и ревью
                превращается в пролистывание. Лечится это на входе, а не на выходе — задачей: попросить агента не
                смешивать форматирование с логикой и выносить механические правки в отдельный коммит. Тогда diff
                снова становится тем, чем должен быть: коротким документом, по которому за минуту видно, что
                изменение делает и чего не делает.
              </>
            ) : (
              <>
                The last thing that ruins diff reading is noise. Auto-formatting a whole file, renaming variables
                “while we are here,” a thousand-line dependency lockfile update: the useful change drowns and review
                degrades into scrolling. The cure is at the input, not the output — in the task itself: ask the agent
                not to mix formatting with logic and to put mechanical edits in a separate commit. Then the diff goes
                back to being what it should be: a short document that shows in a minute what the change does and
                what it does not.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 3: Коммит как единица отката'
            : 'Chapter 3: The Commit as a Unit of Undo'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Коммит принято объяснять как «сохранение», но полезнее думать о нём как о единице отката. Отменить
                можно ровно то, что лежит в одном коммите: не половину, не «всё кроме одного файла». Значит, границы
                коммитов ты выбираешь не для красоты истории, а заранее решая, какими кусками сможешь отступать.
                Когда работает агент, это решение становится главным: он приносит результат пачкой, и разложить эту
                пачку на осмысленные части — задача человека.
              </>
            ) : (
              <>
                A commit is usually explained as “saving,” but it is more useful to think of it as a unit of undo.
                You can reverse exactly what sits inside one commit: not half of it, not “all of it except one
                file.” So you choose commit boundaries not for a pretty history but by deciding in advance in which
                chunks you will be able to retreat. When an agent does the work, that decision becomes the main one:
                it delivers results in a batch, and splitting that batch into meaningful parts is a human job.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Разница видна на простом примере. Агент за один заход переименовал модуль по всему проекту и добавил
                новую функцию. Всё это в одном коммите. Через день выясняется, что функция ведёт себя неправильно, а
                переименование всех устраивает. Отменить одно, не потеряв другое, уже нельзя: придётся руками
                выковыривать изменения из общей кучи. Если бы это были два коммита — переименование и функция, — вся
                операция заняла бы одну команду. Правило простое: один коммит — одно осмысленное изменение, а не
                один рабочий сеанс.
              </>
            ) : (
              <>
                The difference shows on a simple example. In one pass the agent renamed a module across the project
                and added a new function. All of it in a single commit. A day later the function turns out to behave
                wrongly, while everyone is happy with the rename. Undoing one without losing the other is no longer
                possible: you will be picking changes out of a pile by hand. Had it been two commits — the rename and
                the function — the whole operation would take one command. The rule is simple: one commit is one
                meaningful change, not one working session.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Технически пачку режут через <Term id="staging-area" lang={lang}>индекс</Term> — промежуточную зону,
                куда кладут именно те правки, которые войдут в следующий коммит. Можно добавлять целыми файлами, а
                можно кусками внутри файла, подтверждая каждый по отдельности. Ниже — как из одного прогона агента
                получаются два независимых коммита.
              </>
            ) : (
              <>
                Technically you slice the batch through the <Term id="staging-area" lang={lang}>staging area</Term> —
                the intermediate zone that holds exactly the edits going into the next commit. You can add whole
                files, or chunks inside a file, confirming each one separately. Below is how a single agent run turns
                into two independent commits.
              </>
            )}
          </p>
          <Terminal
            title="git · split the batch"
            lines={[
              { cmd: 'git add src/lib/validation.ts src/forms/signup.ts' },
              {
                cmd: lang === 'ru'
                  ? 'git commit -m "валидация email в форме регистрации"'
                  : 'git commit -m "validate email in the signup form"',
              },
              { out: '[feature/signup 8f2a1c4] 2 files changed, 41 insertions(+)', tone: 'ok' },
              { cmd: 'git add -p src/forms/signup.test.ts' },
              { out: 'Stage this hunk [y,n,q,a,d,s]? y', tone: 'dim' },
              {
                cmd: lang === 'ru'
                  ? 'git commit -m "тест на пустой email"'
                  : 'git commit -m "test for an empty email"',
              },
              { out: '[feature/signup 3d90b71] 1 file changed, 12 insertions(+)', tone: 'ok' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Теперь у изменения два независимых входа в историю: логику можно отменить, оставив тест, и наоборот.
                Заодно решается вопрос сообщений. В сообщении бессмысленно пересказывать содержимое — оно и так
                видно в diff. Ценность в том, чего в коде нет: зачем это сделано, какую проблему закрывает, что
                пробовали до этого. Через полгода именно эта строка объяснит, почему условие выглядит странно, и
                убережёт следующего агента от «упрощения», которое вернёт старую ошибку.
              </>
            ) : (
              <>
                Now the change has two independent entries in history: the logic can be reverted while the test
                stays, and the other way round. This also settles the question of messages. Retelling the content in
                a message is pointless — the diff already shows it. The value is in what the code does not contain:
                why it was done, which problem it closes, what was tried before. Six months later that line explains
                why a condition looks odd and saves the next agent from a “simplification” that brings the old bug
                back.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Остаётся ритм. Хороший момент для коммита — каждый раз, когда проверки снова зелёные: собралось,
                тесты прошли, поведение то, которое ожидали. Такой коммит не обязан быть красивым, он обязан быть
                точкой, куда не страшно вернуться. Между зелёными состояниями агент может ломать сколько угодно.
                И обратное правило, которым эта глава смыкается с первой: незакоммиченный результат живёт ровно до
                следующего переключения ветки — до конца рабочего дня он не доживает.
              </>
            ) : (
              <>
                What remains is rhythm. A good moment to commit is every time the checks go green again: it builds,
                tests pass, behavior is what you expected. Such a commit does not have to be beautiful; it has to be
                a point you are not afraid to return to. Between green states the agent may break as much as it
                likes. And the inverse rule, where this chapter meets the first one: an uncommitted result lives
                exactly until the next branch switch — it does not survive to the end of the day.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 4: Уверенная отмена — restore, stash, reset, revert, reflog'
            : 'Chapter 4: Confident Undo — restore, stash, reset, revert, reflog'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Способов отменить изменения в git несколько, и выбирают их не по вкусу, а по одному вопросу: где
                сейчас находится то, что нужно убрать. Вариантов три. Правки лежат только в рабочих файлах и никуда
                не сохранены. Правки уже в коммите, но коммит не покидал твою машину. Коммит попал в общую ветку, и
                его успели забрать другие. Каждому состоянию соответствует своя команда, и почти все известные
                катастрофы происходят от применения команды не к тому состоянию.
              </>
            ) : (
              <>
                Git offers several ways to undo, and you pick between them not by taste but by one question: where
                does the thing you want to remove currently live? There are three cases. The edits sit only in
                working files and were never saved. The edits are already in a commit, but that commit never left
                your machine. The commit reached a shared branch and other people have pulled it. Each state has its
                own command, and nearly every famous disaster comes from applying a command to the wrong state.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Первый случай самый простой: агент нагородил в файлах, ничего не сохранено, всё это не нужно.
                Команда restore возвращает файлы к последнему коммиту, и правки исчезают безвозвратно — тут нечего
                восстанавливать, они нигде не записаны. Если результат выбрасывать жалко, а прямо сейчас он мешает,
                его откладывают командой stash: изменения снимаются с рабочей копии в отдельную полку и позже
                возвращаются. Stash удобен ровно для этого — переключиться на срочную задачу, не превращая
                недоделанное в коммит.
              </>
            ) : (
              <>
                The first case is the simplest: the agent made a mess in the files, nothing is saved, and none of it
                is wanted. restore returns files to the last commit, and the edits vanish irreversibly — there is
                nothing to recover, they were never written anywhere. If the result is too valuable to throw away but
                is in the way right now, park it with stash: the changes come off the working copy onto a shelf and
                return later. That is exactly what stash is for — switching to an urgent task without turning
                unfinished work into a commit.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Второй случай — коммит есть, но он только у тебя. Здесь работает reset: он двигает ветку назад, на
                выбранный коммит. В мягком режиме правки остаются в файлах, и коммит можно пересобрать иначе; в
                жёстком (hard) стираются и файлы тоже. Именно жёсткий reset даёт классическое ощущение «я потерял
                час работы». Ощущение почти всегда ошибочное: коммит никуда не делся, на него просто больше никто не
                ссылается. Найти его помогает <Term id="reflog" lang={lang}>reflog</Term> — локальный журнал того,
                куда указывала ветка в последние дни.
              </>
            ) : (
              <>
                The second case: the commit exists, but only on your machine. Here reset applies — it moves the
                branch back to a chosen commit. In soft mode the edits stay in your files and the commit can be
                reassembled differently; in hard mode the files are wiped too. Hard reset is what produces the
                classic “I just lost an hour of work” feeling. The feeling is almost always wrong: the commit is
                still there, nothing simply points at it anymore. The{' '}
                <Term id="reflog" lang={lang}>reflog</Term> — a local journal of where the branch pointed over recent
                days — is how you find it.
              </>
            )}
          </p>
          <Terminal
            title="git · rescue after a hard reset"
            lines={[
              { cmd: 'git reset --hard HEAD~2' },
              { out: 'HEAD is now at 5c1e88a chore: update deps', tone: 'bad' },
              { cmd: 'git reflog' },
              { out: '5c1e88a HEAD@{0}: reset: moving to HEAD~2' },
              { out: '3d90b71 HEAD@{1}: commit: test for an empty email', tone: 'link' },
              { out: '8f2a1c4 HEAD@{2}: commit: validate email in the signup form' },
              { cmd: 'git reset --hard 3d90b71' },
              { out: 'HEAD is now at 3d90b71 test for an empty email', tone: 'ok' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                В журнале видно всю траекторию: два коммита, а потом сброс, который на них перестал ссылаться.
                Достаточно взять хеш нужного состояния — и ветка возвращается на место. Записи живут около
                девяноста дней, так что паниковать почти никогда не нужно; правило простое — прежде чем «чинить»
                потерю, посмотреть reflog. Оговорка одна, и она важная: этот журнал локальный. Он знает только то,
                что происходило в твоей копии репозитория, и не спасёт от того, что было потеряно у кого-то ещё.
              </>
            ) : (
              <>
                The journal shows the whole trajectory: two commits, then a reset that stopped pointing at them.
                Take the hash of the state you want and the branch is back. Entries live for about ninety days, so
                panic is almost never warranted; the rule is simply to look at the reflog before “fixing” a loss.
                One caveat, and it matters: this journal is local. It knows only what happened in your copy of the
                repository and will not rescue anything lost on someone else’s machine.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Третий случай — коммит уже в общей ветке. Здесь reset запрещён по-человечески, а не технически:
                сдвинув общую историю, ты рассинхронизируешь копии у всех остальных. Правильный инструмент —{' '}
                <Term id="revert" lang={lang}>revert</Term>: он создаёт новый коммит, отменяющий содержимое старого.
                История при этом растёт, а не переписывается, и в ней остаётся видно и ошибку, и её отмену. Для
                продакшена это то, что нужно: откат становится обычной
                операцией, которую делают спокойно и быстро, а не редким событием, которого боятся.
              </>
            ) : (
              <>
                The third case: the commit is already on a shared branch. Here reset is forbidden socially rather
                than technically — moving shared history desynchronizes everyone else’s copies. The right tool is{' '}
                <Term id="revert" lang={lang}>revert</Term>: it creates a new commit that undoes the content of the
                old one. History grows instead of being rewritten, and both the mistake and its undo stay visible.
                For production that is exactly right: rollback becomes an
                ordinary operation done calmly and quickly, not a rare event people are afraid of.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {lang === 'ru'
            ? 'Глава 5: Ветка и worktree на задачу, когда агентов несколько'
            : 'Chapter 5: A Branch and a Worktree per Task When Agents Multiply'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Пока агент один и задача одна, хватает основной ветки и аккуратных коммитов. Проблемы начинаются,
                когда задач становится две. Агент правит форму регистрации, ты просишь его параллельно посмотреть
                баг в отчётах — и обе работы оказываются в одном наборе файлов. Разделить их потом почти
                невозможно: diff смешан, коммит не разрезать по смыслу, а откат одной задачи утащит вторую. Поэтому
                базовое правило звучит так: одна задача — одна ветка, всегда, даже если задача на десять минут.
              </>
            ) : (
              <>
                While there is one agent and one task, the main branch plus careful commits is enough. Trouble starts
                at two tasks. The agent is editing the signup form, you ask it to look at a bug in reports at the
                same time — and both jobs end up in one set of files. Separating them afterwards is close to
                impossible: the diff is mixed, the commit cannot be cut along meaning, and undoing one task drags the
                other with it. So the base rule is: one task, one branch, always, even for a ten-minute task.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Ветка решает вопрос истории, но не вопрос файлов. Ветка в репозитории одна активная: чтобы
                переключиться на другую задачу, надо либо закоммитить, либо отложить незавершённое. Когда агентов
                несколько и они работают одновременно, это становится узким местом — они физически делят одну
                рабочую папку и перетирают правки друг друга. Здесь помогает{' '}
                <Term id="worktree" lang={lang}>worktree</Term>: та же история репозитория получает вторую рабочую
                копию в отдельной директории со своей веткой.
              </>
            ) : (
              <>
                A branch solves the history question but not the file question. Only one branch is checked out at a
                time: to switch to another task you must either commit or park what is unfinished. With several
                agents working simultaneously this becomes the bottleneck — they physically share one working folder
                and overwrite each other’s edits. A <Term id="worktree" lang={lang}>worktree</Term> fixes that: the
                same repository history gets a second working copy in its own directory, on its own branch.
              </>
            )}
          </p>
          <Terminal
            title="git · one repo, two working copies"
            lines={[
              { cmd: 'git worktree add ../app-reports fix/reports-empty-state' },
              { out: "Preparing worktree (new branch 'fix/reports-empty-state')", tone: 'dir' },
              { out: 'HEAD is now at 3d90b71 test for an empty email', tone: 'ok' },
              { cmd: 'git worktree list' },
              { out: '/home/dev/app           3d90b71 [feature/signup]' },
              { out: '/home/dev/app-reports   3d90b71 [fix/reports-empty-state]' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Две папки, две ветки, одна история коммитов: агенты работают рядом и не мешают друг другу, а ты
                смотришь их результаты по отдельности. Дальше вступает вторая половина правила — ветка должна быть
                короткой. Чем дольше она живёт отдельно от основной, тем сильнее расходятся состояния и тем дороже
                потом сведение. Практика простая: подтягивать основную ветку к себе часто, а свою отдавать на
                слияние маленькими порциями. Конфликт на десять строк решается за минуту, конфликт на пятьсот
                перерастает в отдельную задачу, которую агенту лучше не поручать.
              </>
            ) : (
              <>
                Two folders, two branches, one commit history: the agents work side by side without colliding, and
                you review their results separately. Then the second half of the rule kicks in — a branch should be
                short-lived. The longer it lives apart from the main one, the further the states drift and the more
                expensive merging becomes. The practice is plain: pull the main branch into yours often, and send
                yours for merge in small portions. A ten-line conflict is resolved in a minute; a five-hundred-line
                conflict turns into a separate task that is better not delegated to an agent.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Собранный чек-лист перед тем, как отпустить агента в работу, получается короткий. Текущее состояние
                закоммичено — точка возврата есть. Создана отдельная ветка под задачу, при параллельной работе —
                отдельный worktree. Известно, какие файлы считаются ожидаемой областью изменений, чтобы потом было с
                чем сравнить карту diff. И заранее решено, что делать с результатом: разложить на коммиты по
                смыслу, а не сохранять пачкой в конце дня.
              </>
            ) : (
              <>
                The checklist before letting an agent loose turns out short. The current state is committed — the
                return point exists. A separate branch is created for the task, plus a separate worktree when work
                runs in parallel. You know which files count as the expected area of change, so the diff map has
                something to be compared against. And you have decided in advance what happens to the result: split
                into commits by meaning, not saved as one batch at the end of the day.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {lang === 'ru' ? (
              <>
                Всё вместе это даёт то, ради чего комната и написана: цена ошибки перестаёт зависеть от того,
                насколько хорош агент. Diff показывает, что произошло на самом деле. Коммиты задают, какими кусками
                можно отступить. Revert и reflog возвращают систему в рабочее состояние. Ветки и worktree
                удерживают параллельные задачи по разным углам. С такой страховкой разумно отдавать агенту больше —
                и именно на неё опираются следующие комнаты пути, где речь пойдёт про автоматические проверки и
                правила выпуска.
              </>
            ) : (
              <>
                Together this delivers what the room was written for: the cost of a mistake stops depending on how
                good the agent is. The diff shows what actually happened. Commits set the chunks you can retreat in.
                Revert and the reflog bring the system back to a working state. Branches and worktrees keep parallel
                tasks in separate corners. With that safety net it is reasonable to delegate more — and it is
                exactly what the next rooms of this path build on, where the subject becomes automated checks and
                release rules.
              </>
            )}
          </p>
        </div>
      </section>
    </div>
  );
}
