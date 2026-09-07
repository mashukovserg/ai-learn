"use client";

import React from 'react';
import Term from '@/components/Term';
import Terminal from '@/components/Terminal';

type LocalizedText = { ru: string; en: string };

const SourceLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noreferrer" className="text-accent-300 underline decoration-accent-500/40 underline-offset-4 hover:text-accent-200">
    {children}
  </a>
);

const SOURCES: { authors: string; title: string; venue?: string; note: LocalizedText; href: string; label: string }[] = [
  {
    authors: 'Google.',
    title: 'Shell Style Guide',
    note: {
      ru: 'граница применимости shell: скрипт длиннее 100 строк или с нетривиальным потоком управления переписывают на другом языке; переменные всегда в кавычках; ShellCheck рекомендован для скриптов любого размера',
      en: 'the limit of shell: a script over 100 lines or with non-straightforward control flow should be rewritten in a structured language; always quote variables; ShellCheck is recommended for scripts large and small',
    },
    href: 'https://google.github.io/styleguide/shellguide.html',
    label: 'google.github.io/styleguide',
  },
  {
    authors: 'Free Software Foundation.',
    title: 'Bash Reference Manual — The Set Builtin',
    note: {
      ru: 'первоисточник поведения `set -e`, `set -u` и `set -o pipefail`, включая оговорки о том, когда `-e` не срабатывает',
      en: 'the primary source for how `set -e`, `set -u` and `set -o pipefail` behave, including the caveats on when `-e` does not fire',
    },
    href: 'https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html',
    label: 'gnu.org/software/bash',
  },
  {
    authors: 'Maxwell, A.',
    title: 'Use the Unofficial Bash Strict Mode (Unless You Looove Debugging)',
    note: {
      ru: 'разбор связки `set -euo pipefail` и того, какие классы ошибок она ловит, а какие нет',
      en: 'the reasoning behind the `set -euo pipefail` combination and which classes of error it does and does not catch',
    },
    href: 'http://redsymbol.net/articles/unofficial-bash-strict-mode/',
    label: 'redsymbol.net',
  },
  {
    authors: 'Greg’s Wiki (Wooledge).',
    title: 'Bash Pitfalls',
    note: {
      ru: 'каталог типовых ошибок shell: словоделение неэкранированных переменных, глоббинг, чтение файлов через `for` вместо `while read`',
      en: 'a catalogue of the standard shell mistakes: word splitting of unquoted variables, globbing, reading files with `for` instead of `while read`',
    },
    href: 'https://mywiki.wooledge.org/BashPitfalls',
    label: 'mywiki.wooledge.org',
  },
  {
    authors: 'Holen, V. et al.',
    title: 'ShellCheck — a static analysis tool for shell scripts',
    note: {
      ru: 'линтер, который ловит неэкранированные переменные и другие ошибки до запуска; есть онлайн-версия и CLI',
      en: 'the linter that catches unquoted variables and other mistakes before the script runs; available online and as a CLI',
    },
    href: 'https://www.shellcheck.net/',
    label: 'shellcheck.net',
  },
  {
    authors: 'Valve Software.',
    title: 'steam-for-linux, issue #3671',
    venue: '2015-01-14',
    note: {
      ru: 'зарегистрированный случай: после неудачного разрешения пути скрипт рекурсивно удалил все файлы пользователя, включая внешний диск с резервной копией на 3 ТБ; точная строка в тикете не приведена',
      en: 'a recorded case: after a path failed to resolve, the script recursively deleted every file owned by the user, including a 3 TB external backup drive; the exact line is not quoted in the issue',
    },
    href: 'https://github.com/ValveSoftware/steam-for-linux/issues/3671',
    label: 'github.com/ValveSoftware',
  },
];

export default function BashForVibecodingTheory({ lang }: { lang: string }) {
  const ru = lang === 'ru';

  return (
    <div className="space-y-8">
      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 1: Почему shell — самое дорогое место для вайбкодинга'
            : 'Chapter 1: Why the Shell Is the Most Expensive Place to Vibe Code'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Вы подписываете договор, не читая. Обычно это заканчивается тем, что через месяц вы находите неприятный
                пункт и идёте разбираться. Неприятно, но поправимо. А теперь представьте договор, который исполняет сам
                себя в момент подписи, и отменить исполнение нельзя.
              </>
            ) : (
              <>
                You sign a contract without reading it. Usually that ends with you finding an unpleasant clause a month
                later and going to sort it out. Annoying, but fixable. Now imagine a contract that executes itself the
                moment you sign, and the execution cannot be undone.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Это и есть разница между тем, чтобы принять не глядя код на Python, и тем, чтобы принять не глядя
                shell-скрипт. Ошибка в Python обычно даёт трассировку стека: программа падает, данные на месте, вы
                читаете сообщение и правите. Ошибка в shell выполняется. Между строкой в скрипте и удалённым каталогом
                нет ни компилятора, ни проверки типов, ни тестов — только перевод строки.
              </>
            ) : (
              <>
                That is the difference between accepting Python you did not read and accepting a shell script you did
                not read. A mistake in Python usually produces a stack trace: the program stops, the data survives, you
                read the message and fix it. A mistake in shell runs. Between a line in the script and a deleted
                directory there is no compiler, no type checker and no test suite — just a newline.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Вайбкодингом называют работу, в которой вы описываете задачу словами и принимаете результат, не читая
                его внимательно. Для многих языков это разумный обмен: цена ошибки — потерянное время. Shell выпадает из
                этого правила, потому что в нём цена ошибки измеряется не временем, а данными. Причём отказ приходит не
                тогда, когда скрипт написан, а тогда, когда он запущен на вашей машине, где лежит всё.
              </>
            ) : (
              <>
                Vibe coding is the practice of describing a task in words and accepting the result without reading it
                closely. For many languages that is a reasonable trade: the cost of a mistake is lost time. Shell falls
                outside the rule, because there the cost of a mistake is measured in data rather than minutes. And the
                failure arrives not when the script is written but when it is run — on your machine, where everything
                lives.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Насколько это не теоретический риск, видно по зарегистрированным случаям. В январе 2015 года в трекере
                Steam для Linux появился{' '}
                <SourceLink href="https://github.com/ValveSoftware/steam-for-linux/issues/3671">тикет #3671</SourceLink>:
                после того как путь к каталогу перестал разрешаться, скрипт рекурсивно удалил все файлы, принадлежавшие
                пользователю, — включая подключённый внешний диск с резервной копией на три терабайта. Точной строки в
                тикете нет, но механизм такого класса аварий разбирается в главе 4, и он занимает ровно одну строку.
              </>
            ) : (
              <>
                That this is not a theoretical risk is visible in recorded cases. In January 2015 the Steam for Linux
                tracker received{' '}
                <SourceLink href="https://github.com/ValveSoftware/steam-for-linux/issues/3671">issue #3671</SourceLink>:
                after a directory path stopped resolving, the script recursively deleted every file owned by the user —
                including a mounted external drive holding a three-terabyte backup. The issue does not quote the exact
                line, but the mechanism behind this class of failure is the subject of Chapter 4, and it fits on one
                line.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Отсюда рабочая установка комнаты. Вам не нужно уметь писать shell с нуля — это за вас сделает{' '}
                <Term id="agent" lang={lang}>агент</Term>. Вам нужно уметь <strong>прочитать</strong> то, что он
                написал, и увидеть строки, после которых нажимать Enter нельзя. Это ровно то различие, которое в{' '}
                <Term id="cognitive-debt" lang={lang}>когнитивном долге</Term> отделяет отданную механику от отданного
                решения: печатать за вас — нормально, решать за вас, что удалить, — нет.
              </>
            ) : (
              <>
                Hence this room’s working stance. You do not need to write shell from scratch — an{' '}
                <Term id="agent" lang={lang}>agent</Term> will do that for you. You need to be able to{' '}
                <strong>read</strong> what it wrote and spot the lines you must not press Enter on. That is exactly the
                distinction <Term id="cognitive-debt" lang={lang}>cognitive debt</Term> draws between handing over the
                mechanics and handing over the decision: typing for you is fine, deciding for you what gets deleted is
                not.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 2: В каком shell вы находитесь и почему агент этого не знает'
            : 'Chapter 2: Which Shell You Are In, and Why the Agent Does Not Know'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Вам продиктовали рецепт по телефону, исходя из того, что у вас газовая плита. У вас индукционная.
                часть шагов совпадёт, но «убавьте огонь до минимума» окажется бессмысленной инструкцией, и вы поймёте
                это не сразу, а когда что-то подгорит.
              </>
            ) : (
              <>
                Someone dictates a recipe to you over the phone, assuming you have a gas hob. Yours is induction. Most
                of the steps will match, but “turn the flame right down” turns out to be a meaningless instruction, and
                you find that out not immediately but when something burns.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Ровно это происходит между вами и агентом. Он почти всегда пишет для <strong>bash</strong> — потому что
                bash стоит по умолчанию в большинстве дистрибутивов Linux, и на нём написана основная масса примеров, на
                которых модель училась. А у вас в терминале может быть zsh (по умолчанию в macOS с 2019 года) или fish.
                Пока вы запускаете готовый файл, разницы нет. Как только вы копируете строки из ответа агента прямо в
                свою командную строку — разница появляется.
              </>
            ) : (
              <>
                Exactly this happens between you and an agent. It almost always writes for <strong>bash</strong> —
                because bash is the default in most Linux distributions, and most of the examples the model learned from
                are written in it. Your terminal, meanwhile, may be running zsh (the macOS default since 2019) or fish.
                While you run a finished file, the difference does not matter. The moment you copy lines out of the
                agent’s answer straight into your own prompt, it does.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru
              ? 'Узнать, где вы находитесь, — две команды. Первая показывает ваш текущий shell, вторая — список установленных в системе.'
              : 'Finding out where you are takes two commands. The first shows your current shell, the second lists the ones installed on the system.'}
          </p>
          <Terminal
            lines={[
              { cmd: 'echo $SHELL', comment: ru ? '# какой shell у меня сейчас' : '# which shell am I in' },
              { out: '/bin/zsh' },
              { cmd: 'cat /etc/shells', comment: ru ? '# что вообще установлено' : '# what is installed at all' },
              { out: '/bin/sh' },
              { out: '/bin/bash' },
              { out: '/bin/zsh' },
              { out: '/usr/bin/fish' },
              { cmd: 'bash', comment: ru ? '# перейти в bash на одну сессию' : '# switch to bash for one session' },
              { out: 'bash-5.2$', tone: 'ok' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Файл <code className="text-accent-300">/etc/shells</code> перечисляет shell&apos;ы, разрешённые в системе
                как оболочки входа. Набрав имя любого из них, вы перейдёте в него на текущую сессию; команда{' '}
                <code className="text-accent-300">chsh -s /bin/zsh</code> меняет оболочку по умолчанию насовсем. Для
                разовой проверки чужого скрипта достаточно первого способа — и это, кстати, самый дешёвый способ
                воспроизвести окружение, для которого агент писал.
              </>
            ) : (
              <>
                The file <code className="text-accent-300">/etc/shells</code> lists the shells the system allows as login
                shells. Typing the name of any of them switches you into it for the current session;{' '}
                <code className="text-accent-300">chsh -s /bin/zsh</code> changes your default shell permanently. For a
                one-off check of someone else’s script the first is enough — and it is, incidentally, the cheapest way
                to reproduce the environment the agent was writing for.
              </>
            )}
          </p>
          <div className="bg-deep border border-border-subtle rounded-lg p-4 my-4 overflow-x-auto">
            <table className="w-full text-sm text-neutral-300">
              <thead>
                <tr className="text-neutral-500 text-xs uppercase tracking-wider">
                  <th className="text-left pb-2 pr-6 font-medium">{ru ? 'Свойство' : 'Property'}</th>
                  <th className="text-left pb-2 pr-6 font-medium">Bash</th>
                  <th className="text-left pb-2 pr-6 font-medium">Zsh</th>
                  <th className="text-left pb-2 font-medium">Fish</th>
                </tr>
              </thead>
              <tbody className="align-top">
                <tr>
                  <td className="pr-6 py-1">{ru ? 'Полное имя' : 'Full name'}</td>
                  <td className="pr-6 py-1">Bourne Again Shell</td>
                  <td className="pr-6 py-1">Z Shell</td>
                  <td className="py-1">Friendly Interactive Shell</td>
                </tr>
                <tr>
                  <td className="pr-6 py-1">{ru ? 'Совместимость со скриптами агента' : 'Compatibility with agent scripts'}</td>
                  <td className="pr-6 py-1">{ru ? 'полная — под неё и пишут' : 'full — this is what gets written'}</td>
                  <td className="pr-6 py-1">{ru ? 'высокая, отличия в мелочах' : 'high, differs in details'}</td>
                  <td className="py-1">{ru ? 'нет: другой синтаксис' : 'none: different syntax'}</td>
                </tr>
                <tr>
                  <td className="pr-6 py-1">{ru ? 'Подсветка синтаксиса' : 'Syntax highlighting'}</td>
                  <td className="pr-6 py-1">{ru ? 'нет' : 'no'}</td>
                  <td className="pr-6 py-1">{ru ? 'через плагины' : 'via plugins'}</td>
                  <td className="py-1">{ru ? 'встроена' : 'built in'}</td>
                </tr>
                <tr>
                  <td className="pr-6 py-1">{ru ? 'Исправление опечаток' : 'Spelling correction'}</td>
                  <td className="pr-6 py-1">{ru ? 'нет' : 'no'}</td>
                  <td className="pr-6 py-1">{ru ? 'есть' : 'yes'}</td>
                  <td className="py-1">{ru ? 'есть' : 'yes'}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Практический вывод один, и он важнее таблицы. Fish намеренно несовместим с bash: там иначе устроены
                переменные и подстановки, поэтому строка из ответа агента может выдать ошибку, а может — что хуже —
                выполниться иначе, чем задумано. Zsh совместим почти во всём, и расхождения всплывают на краях. Если вы
                работаете в fish или zsh, а запускаете чужой скрипт, надёжнее не вставлять его строки в свой промпт, а
                сохранить в файл — тогда решать, каким интерпретатором его выполнять, будет не ваш терминал, а первая
                строка самого файла. О ней — следующая глава.
              </>
            ) : (
              <>
                There is one practical conclusion, and it matters more than the table. Fish is deliberately incompatible
                with bash: variables and substitutions work differently there, so a line from the agent’s answer may
                produce an error — or, worse, run differently from what was intended. Zsh is compatible in almost
                everything, and the divergences surface at the edges. If you work in fish or zsh but are running someone
                else’s script, it is safer not to paste its lines into your prompt but to save it to a file — then what
                decides the interpreter is not your terminal but the file’s own first line. That line is the next
                chapter.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 3: Из чего состоит скрипт'
            : 'Chapter 3: What a Script Is Made Of'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Чтобы проверить чужой договор, не нужно быть юристом — достаточно знать, где в нём стороны, где предмет,
                где сумма и где условия расторжения. Четырёх ориентиров хватает, чтобы прочитать документ по существу и
                увидеть, если один из них подменён.
              </>
            ) : (
              <>
                To check someone else’s contract you do not need to be a lawyer — it is enough to know where the parties
                are, where the subject is, where the sum is, and where the termination clauses are. Four landmarks are
                enough to read the document for substance and to notice when one of them has been swapped.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Со скриптом так же. Он не «программа», а список команд, записанный в файл, и опорных конструкций в нём
                всего четыре: переменные, циклы, условия и комментарии. Плюс первая строка, которая говорит, чем этот
                файл исполнять. Знать их достаточно, чтобы читать то, что прислал агент, — писать с нуля для этого не
                требуется.
              </>
            ) : (
              <>
                A script is the same. It is not “a program” but a list of commands written into a file, and it has only
                four load-bearing constructs: variables, loops, conditionals and comments. Plus a first line saying what
                should execute the file. Knowing those is enough to read what an agent sent you — writing them from
                scratch is not required.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Первая строка называется <strong>shebang</strong> и начинается с символов{' '}
                <code className="text-accent-300">#!</code>, за которыми идёт путь к интерпретатору:{' '}
                <code className="text-accent-300">#!/bin/bash</code>. Она и снимает неоднозначность из главы 2 — какой
                бы shell ни был у вас, файл будет исполнен тем, что указан в shebang. Если её нет, интерпретатор
                выбирает система, и результат зависит от машины.
              </>
            ) : (
              <>
                The first line is called the <strong>shebang</strong> and begins with the characters{' '}
                <code className="text-accent-300">#!</code> followed by the path to an interpreter:{' '}
                <code className="text-accent-300">#!/bin/bash</code>. It is what removes the ambiguity from Chapter 2 —
                whatever shell you are in, the file is executed by the one the shebang names. Without it the system
                picks, and the result depends on the machine.
              </>
            )}
          </p>
          <Terminal
            title="greet.sh"
            lines={[
              { cmd: '#!/bin/bash', prompt: ' ' },
              { cmd: '# спросить имя и поздороваться', prompt: ' ' },
              { cmd: 'echo "Как вас зовут?"', prompt: ' ' },
              { cmd: 'read name', prompt: ' ' },
              { cmd: 'if [ "$name" = "" ]; then', prompt: ' ' },
              { cmd: '  echo "Имя не введено"; exit 1', prompt: ' ' },
              { cmd: 'fi', prompt: ' ' },
              { cmd: 'for i in {1..3}; do echo "$i. Здравствуйте, $name"; done', prompt: ' ' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                В восьми строках выше собраны все четыре конструкции. <strong>Переменная</strong>{' '}
                <code className="text-accent-300">name</code> хранит значение, которое{' '}
                <code className="text-accent-300">read</code> получил от пользователя; обращаются к ней через{' '}
                <code className="text-accent-300">&quot;$name&quot;</code>. <strong>Условие</strong> открывается словом{' '}
                <code className="text-accent-300">if</code> и закрывается зеркальным{' '}
                <code className="text-accent-300">fi</code>. <strong>Цикл</strong> идёт от{' '}
                <code className="text-accent-300">do</code> до <code className="text-accent-300">done</code> и повторяет
                тело для каждого значения. <strong>Комментарий</strong> начинается с{' '}
                <code className="text-accent-300">#</code> и на выполнение не влияет.
              </>
            ) : (
              <>
                Those eight lines contain all four constructs. The <strong>variable</strong>{' '}
                <code className="text-accent-300">name</code> holds the value{' '}
                <code className="text-accent-300">read</code> took from the user; you reach it as{' '}
                <code className="text-accent-300">&quot;$name&quot;</code>. The <strong>conditional</strong> opens with{' '}
                <code className="text-accent-300">if</code> and closes with a mirrored{' '}
                <code className="text-accent-300">fi</code>. The <strong>loop</strong> runs from{' '}
                <code className="text-accent-300">do</code> to <code className="text-accent-300">done</code>, repeating
                its body for each value. A <strong>comment</strong> starts with{' '}
                <code className="text-accent-300">#</code> and does not affect execution.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Чтобы файл запустился, ему нужно право на исполнение:{' '}
                <code className="text-accent-300">chmod +x greet.sh</code>. Запускают его как{' '}
                <code className="text-accent-300">./greet.sh</code> — с точкой и слэшем впереди. Точка означает «в
                текущем каталоге»: без неё shell ищет файл только в каталогах из переменной{' '}
                <code className="text-accent-300">PATH</code>, где вашего скрипта нет, и отвечает «command not found».
                Это первая ошибка, на которую натыкаются, получив скрипт от агента, и она не про скрипт, а про то, где
                его искали.
              </>
            ) : (
              <>
                For the file to run it needs the execute permission:{' '}
                <code className="text-accent-300">chmod +x greet.sh</code>. You then run it as{' '}
                <code className="text-accent-300">./greet.sh</code> — with the dot and slash in front. The dot means “in
                the current directory”: without it the shell looks for the file only in the directories listed in{' '}
                <code className="text-accent-300">PATH</code>, where your script is not, and answers “command not
                found”. This is the first error people hit after receiving a script from an agent, and it is not about
                the script but about where it was looked for.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Одно замечание именно про агентские скрипты. Комментарии модель пишет охотно и обильно — и это
                единственная часть файла, которую никто не проверяет, потому что на выполнение она не влияет. Поэтому
                комментарий может честно описывать <em>прошлую</em> версию строки, под которой стоит. Читая скрипт,
                сверяйте комментарий с кодом, а не доверяйте ему: расхождение между ними — не мелочь, а признак того,
                что файл правили, не перечитывая целиком.
              </>
            ) : (
              <>
                One note specific to agent-written scripts. Models write comments readily and abundantly — and comments
                are the one part of the file nobody verifies, because they do not affect execution. So a comment may
                faithfully describe the <em>previous</em> version of the line beneath it. When reading a script, check
                the comment against the code rather than trusting it: a mismatch between the two is not a triviality but
                a sign that the file was edited without being reread.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 4: Кавычки, пробелы и пустая переменная'
            : 'Chapter 4: Quotes, Spaces, and the Empty Variable'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Представьте почтальона, которому дали адрес без кавычек: «Улица Красных Зорь, дом 5». Он читает это не
                как один адрес, а как четыре отдельных поручения и разносит письмо по кускам: одно на «Улица», другое на
                «Красных». Абсурд — но ровно так shell поступает с вашими переменными.
              </>
            ) : (
              <>
                Imagine a courier handed an address with no quotation marks: “Red Dawn Street, house 5”. They read it not
                as one address but as four separate errands and deliver the letter in pieces — one to “Red”, another to
                “Dawn”. Absurd — and exactly what the shell does with your variables.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Механизм называется <strong>словоделением</strong> (word splitting). Подставляя значение переменной без
                кавычек, shell разрезает его по пробелам и передаёт команде как несколько отдельных аргументов. Файл
                «Отчёт за март.pdf» превращается в три аргумента, и команда сообщает, что не нашла файл «Отчёт». Тем же
                проходом раскрываются символы <code className="text-accent-300">*</code> и{' '}
                <code className="text-accent-300">?</code>, если они попали в значение. По той же причине перебор
                файлов через <code className="text-accent-300">for f in $(ls)</code> ломается на первом же имени с
                пробелом — правильный способ читать список имён построчно выглядит как{' '}
                <code className="text-accent-300">while IFS= read -r f</code>, и именно эту замену стоит искать в
                чужом скрипте.
              </>
            ) : (
              <>
                The mechanism is called <strong>word splitting</strong>. When a variable is substituted without quotes,
                the shell cuts its value at the spaces and passes it to the command as several separate arguments. A
                file called “Report for March.pdf” becomes three arguments, and the command reports that it cannot find
                “Report”. The same pass expands <code className="text-accent-300">*</code> and{' '}
                <code className="text-accent-300">?</code> if they ended up in the value.
              </>
            )}
          </p>
          <Terminal
            lines={[
              { cmd: 'FILE="Отчёт за март.pdf"' },
              { cmd: 'ls $FILE', comment: ru ? '# без кавычек' : '# unquoted' },
              { out: "ls: Отчёт: No such file or directory", tone: 'bad' },
              { out: "ls: за: No such file or directory", tone: 'bad' },
              { out: "ls: март.pdf: No such file or directory", tone: 'bad' },
              { cmd: 'ls "$FILE"', comment: ru ? '# в кавычках — один аргумент' : '# quoted — one argument' },
              { out: 'Отчёт за март.pdf', tone: 'ok' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Второй случай опаснее и тише. Если переменная <strong>пуста</strong> — не задана, или её вычисление
                вернуло пустую строку, — она подставляется как ничто. Строка{' '}
                <code className="text-accent-300">rm -rf &quot;$DIR&quot;/*</code> при пустом{' '}
                <code className="text-accent-300">DIR</code> превращается в{' '}
                <code className="text-accent-300">rm -rf /*</code>. Синтаксис верен, кавычки на месте, ошибки нет.
                Команда делает ровно то, что написано, — просто написано теперь другое.
              </>
            ) : (
              <>
                The second case is more dangerous and much quieter. If a variable is <strong>empty</strong> — never set,
                or its computation returned an empty string — it substitutes as nothing at all. The line{' '}
                <code className="text-accent-300">rm -rf &quot;$DIR&quot;/*</code> with an empty{' '}
                <code className="text-accent-300">DIR</code> becomes <code className="text-accent-300">rm -rf /*</code>.
                The syntax is valid, the quotes are in place, there is no error. The command does exactly what is
                written — it is just that what is written has changed.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Отсюда два правила, которые стоит применять к любому чужому скрипту, не разбираясь в его логике.
                Первое: <strong>всякая подстановка переменной — в двойных кавычках</strong>, включая{' '}
                <code className="text-accent-300">&quot;$@&quot;</code> при передаче аргументов. Google в своём{' '}
                <SourceLink href="https://google.github.io/styleguide/shellguide.html">Shell Style Guide</SourceLink>{' '}
                формулирует это без исключений. Второе: там, где пустое значение опасно, требуйте его явно —{' '}
                <code className="text-accent-300">${'{'}DIR:?путь не задан{'}'}</code> остановит скрипт с внятным
                сообщением вместо того, чтобы молча раскрыться в корень.
              </>
            ) : (
              <>
                Two rules follow, and you can apply them to any script you did not write without understanding its
                logic. First: <strong>every variable substitution goes in double quotes</strong>, including{' '}
                <code className="text-accent-300">&quot;$@&quot;</code> when passing arguments through. Google’s{' '}
                <SourceLink href="https://google.github.io/styleguide/shellguide.html">Shell Style Guide</SourceLink>{' '}
                states this without exceptions. Second: where an empty value would be dangerous, demand it explicitly —{' '}
                <code className="text-accent-300">${'{'}DIR:?path not set{'}'}</code> stops the script with a readable
                message instead of quietly expanding to the root.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Проверять это глазами не обязательно.{' '}
                <SourceLink href="https://www.shellcheck.net/">ShellCheck</SourceLink> — статический анализатор
                shell-скриптов — ловит неэкранированные переменные и десятки других типовых ошибок до запуска. Есть
                онлайн-версия, куда достаточно вставить текст. Каталог самих ошибок собран в{' '}
                <SourceLink href="https://mywiki.wooledge.org/BashPitfalls">Bash Pitfalls</SourceLink>, и большинство из
                них — вариации того же словоделения.
              </>
            ) : (
              <>
                You do not have to check this by eye.{' '}
                <SourceLink href="https://www.shellcheck.net/">ShellCheck</SourceLink> — a static analyser for shell
                scripts — catches unquoted variables and dozens of other standard mistakes before the script runs. There
                is an online version you can paste into. The catalogue of the mistakes themselves lives in{' '}
                <SourceLink href="https://mywiki.wooledge.org/BashPitfalls">Bash Pitfalls</SourceLink>, and most of them
                are variations on the same word splitting.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 5: Скрипт, который умеет останавливаться'
            : 'Chapter 5: A Script That Knows How to Stop'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                На конвейере деталь выпала из захвата на третьей операции. Конвейер этого не заметил и довёз пустую
                оснастку до упаковки. На выходе — коробка, на коробке штрихкод, внутри ничего. Все операции прошли
                «успешно», потому что никто не спрашивал, была ли деталь на месте.
              </>
            ) : (
              <>
                On an assembly line a part slips out of the clamp at the third station. The line does not notice and
                carries the empty fixture all the way to packaging. Out comes a box with a barcode on it and nothing
                inside. Every station reported success, because nobody asked whether the part was still there.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Скрипт по умолчанию работает точно так же. Каждая команда возвращает <strong>код возврата</strong>: ноль
                означает успех, любое другое число — ошибку. Но сам по себе ненулевой код ничего не останавливает: shell
                просто переходит к следующей строке. Скрипт, который не смог скачать архив, спокойно пойдёт его
                распаковывать, потом копировать результат, потом рапортовать об успехе.
              </>
            ) : (
              <>
                A script behaves the same way by default. Every command returns an <strong>exit code</strong>: zero
                means success, any other number means failure. But a non-zero code on its own stops nothing — the shell
                simply moves to the next line. A script that failed to download an archive will happily go on to unpack
                it, then copy the result, then report success.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Лечится это одной строкой в начале файла:{' '}
                <code className="text-accent-300">set -euo pipefail</code>. Три флага, каждый закрывает свою дыру.{' '}
                <code className="text-accent-300">-e</code> останавливает скрипт на первой команде, вернувшей ошибку.{' '}
                <code className="text-accent-300">-u</code> превращает обращение к незаданной переменной в ошибку — то
                есть ровно тот случай из главы 4, когда пустое значение раскрывается во что-то опасное.{' '}
                <code className="text-accent-300">-o pipefail</code> делает так, что конвейер считается упавшим, если
                упало любое его звено, а не только последнее.
              </>
            ) : (
              <>
                One line at the top of the file fixes this:{' '}
                <code className="text-accent-300">set -euo pipefail</code>. Three flags, each closing its own hole.{' '}
                <code className="text-accent-300">-e</code> stops the script at the first command that returns an error.{' '}
                <code className="text-accent-300">-u</code> turns a reference to an unset variable into an error — which
                is precisely the Chapter 4 case where an empty value expands into something dangerous.{' '}
                <code className="text-accent-300">-o pipefail</code> makes a pipeline count as failed if any stage
                failed, not only the last one.
              </>
            )}
          </p>
          <Terminal
            lines={[
              { cmd: 'curl -s https://example.invalid/data.json | jq .name', comment: ru ? '# без pipefail' : '# without pipefail' },
              { out: 'null' },
              { cmd: 'echo $?', comment: ru ? '# код возврата всего конвейера' : '# exit code of the whole pipeline' },
              { out: '0', tone: 'bad' },
              { out: ru ? '# ноль. Загрузка упала, а скрипт считает, что всё хорошо' : '# zero. The download failed, and the script thinks all is well', tone: 'dim' },
              { cmd: 'set -o pipefail' },
              { cmd: 'curl -s https://example.invalid/data.json | jq .name; echo $?' },
              { out: '6', tone: 'ok' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Почему конвейер — отдельная история, видно из примера. По умолчанию код возврата конвейера — это код
                <strong> последней</strong> команды. Загрузка провалилась, но <code className="text-accent-300">jq</code>{' '}
                отработал нормально, и весь конвейер отчитался нулём. В скриптах, которые пишет агент, это одна из самых
                частых незамеченных ошибок: цепочка длинная, а проверяется только её хвост.
              </>
            ) : (
              <>
                Why the pipeline is a separate story is visible in the example. By default a pipeline’s exit code is the
                code of its <strong>last</strong> command. The download failed, but <code className="text-accent-300">jq</code>{' '}
                ran fine, and the whole pipeline reported zero. In scripts written by an agent this is one of the most
                common unnoticed faults: the chain is long, and only its tail is checked.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Оговорка, без которой правило превращается в суеверие: <code className="text-accent-300">set -e</code>{' '}
                срабатывает не всегда. Команда внутри <code className="text-accent-300">if</code>, левая часть{' '}
                <code className="text-accent-300">&amp;&amp;</code> и любая команда, чей результат проверяется,
                намеренно исключены — иначе нельзя было бы написать ни одной проверки. Точный список исключений
                описан в{' '}
                <SourceLink href="https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html">
                  разделе The Set Builtin
                </SourceLink>{' '}
                руководства Bash, а разбор того, какие классы ошибок связка ловит, а какие нет, — в{' '}
                <SourceLink href="http://redsymbol.net/articles/unofficial-bash-strict-mode/">
                  Unofficial Bash Strict Mode
                </SourceLink>.
              </>
            ) : (
              <>
                One caveat, without which the rule turns into superstition: <code className="text-accent-300">set -e</code>{' '}
                does not always fire. A command inside <code className="text-accent-300">if</code>, the left side of{' '}
                <code className="text-accent-300">&amp;&amp;</code>, and any command whose result is being tested are
                deliberately exempt — otherwise you could not write a single check. The exact list of exemptions is in
                the{' '}
                <SourceLink href="https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html">
                  Set Builtin section
                </SourceLink>{' '}
                of the Bash manual, and an account of which classes of error the combination does and does not catch is
                in{' '}
                <SourceLink href="http://redsymbol.net/articles/unofficial-bash-strict-mode/">
                  Unofficial Bash Strict Mode
                </SourceLink>.
              </>
            )}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 6: Сначала показать, потом сделать'
            : 'Chapter 6: Show First, Do Second'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                В магазине вы примеряете куртку перед покупкой. Не потому, что не доверяете размеру на бирке, а потому
                что примерка стоит минуту, а возврат — поездку. Чем дороже отмена, тем дешевле должна быть проверка
                перед ней.
              </>
            ) : (
              <>
                In a shop you try the jacket on before buying it. Not because you distrust the size on the label, but
                because trying it on costs a minute and returning it costs a trip. The more expensive the undo, the
                cheaper the check before it has to be.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                В shell отмены нет вовсе, поэтому проверка перед запуском — не перестраховка, а единственный доступный
                механизм. Самый дешёвый её вид — <strong>холостой прогон</strong>: заставить скрипт показать, что он
                собирается сделать, ничего при этом не делая. У многих команд для этого есть готовый флаг{' '}
                <code className="text-accent-300">--dry-run</code>. Там, где его нет, работает приём в одну правку:
                поставить <code className="text-accent-300">echo</code> перед опасной командой и прочитать вывод.
              </>
            ) : (
              <>
                In shell there is no undo at all, so a check before running is not caution — it is the only mechanism
                available. Its cheapest form is a <strong>dry run</strong>: making the script show what it intends to do
                without doing any of it. Many commands ship a <code className="text-accent-300">--dry-run</code> flag for
                exactly this. Where there is none, a one-edit trick works: put{' '}
                <code className="text-accent-300">echo</code> in front of the dangerous command and read the output.
              </>
            )}
          </p>
          <Terminal
            lines={[
              { cmd: 'for f in build/*.tmp; do echo rm -f "$f"; done', comment: ru ? '# echo вместо действия' : '# echo instead of the action' },
              { out: 'rm -f build/cache.tmp' },
              { out: 'rm -f build/session.tmp' },
              { out: ru ? '# два файла, оба ожидаемые — можно убирать echo' : '# two files, both expected — the echo can go', tone: 'dim' },
              { cmd: 'rsync -av --dry-run src/ backup/', comment: ru ? '# у rsync флаг есть штатно' : '# rsync ships the flag' },
              { out: 'sending incremental file list', tone: 'dim' },
              { out: '12 files to transfer, 0 to delete', tone: 'ok' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Второе свойство, которое стоит требовать от скрипта, — <strong>идемпотентность</strong>: повторный
                запуск даёт тот же результат, что и первый, и ничего не ломает. Проверяется она одним движением —
                запустите скрипт дважды. Идемпотентный создаст каталог, если его нет, и промолчит, если есть
                (<code className="text-accent-300">mkdir -p</code>). Неидемпотентный на втором запуске упадёт с
                ошибкой «каталог существует» или, что хуже, допишет строку в конфиг второй раз.
              </>
            ) : (
              <>
                The second property worth demanding of a script is <strong>idempotency</strong>: running it again gives
                the same result as the first run and breaks nothing. You test it in one move — run the script twice. An
                idempotent script creates the directory if it is missing and stays quiet if it is there
                (<code className="text-accent-300">mkdir -p</code>). A non-idempotent one fails on the second run with
                “directory exists” or, worse, appends the same line to a config a second time.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Это ровно то место, где на скрипт распространяются те же{' '}
                <Term id="guardrails" lang={lang}>guardrails</Term>, что и на любую команду агента: деструктивная
                операция требует отдельного шлюза — холостой прогон, проверка воздействия, ручное подтверждение. Разница
                лишь в том, что скрипт запускают повторно и по расписанию, поэтому одна незамеченная строка успевает
                сработать много раз.
              </>
            ) : (
              <>
                This is precisely where a script falls under the same{' '}
                <Term id="guardrails" lang={lang}>guardrails</Term> as any other agent command: a destructive operation
                needs its own gate — dry run, impact check, manual confirmation. The only difference is that scripts get
                run repeatedly and on a schedule, so one unnoticed line has time to fire many times over.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru
              ? 'Полезная привычка при чтении чужого скрипта: пройти его глазами и отметить каждую строку, которая что-то удаляет, перезаписывает, отправляет наружу или требует прав администратора. Обычно таких строк одна-две на весь файл, и именно они заслуживают всего вашего внимания — остальное можно просмотреть по диагонали. Приём работает и как оценка объёма работы: если отмеченных строк оказалось не две, а двадцать, скрипт делает слишком много за один запуск, и его стоит разделить на части, которые можно проверять и запускать по отдельности.'
              : 'A useful habit when reading someone else’s script: go through it and mark every line that deletes, overwrites, sends something outward, or asks for administrator rights. Usually there are one or two such lines in the whole file, and they deserve all of your attention — the rest you can skim.'}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">
          {ru
            ? 'Глава 7: Один скрипт проверки вместо десяти команд'
            : 'Chapter 7: One Check Script Instead of Ten Commands'}
        </h2>
        <div className="space-y-4">
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                У пилота перед взлётом есть карта контрольных проверок. Она существует не потому, что пилот забывчив, а
                потому, что под давлением человек пропускает пункты и не замечает этого. Список снимает необходимость
                помнить и делает пропуск видимым.
              </>
            ) : (
              <>
                A pilot has a checklist before take-off. It exists not because pilots are forgetful but because under
                pressure people skip items and do not notice. The list removes the need to remember and makes a skipped
                item visible.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Ровно ту же роль играет собственный скрипт проверки. Пока команд три, вы держите их в голове. Когда их
                десять и часть нужна только по вторникам, вы начинаете запускать не все — обычно те, что быстрее.
                Скрипт превращает набор договорённостей в одну команду, у которой есть однозначный ответ: ноль или не
                ноль.
              </>
            ) : (
              <>
                Your own check script plays exactly that role. While there are three commands you keep them in your
                head. When there are ten and some are only needed on Tuesdays, you start running a subset — usually the
                fast ones. A script turns a set of agreements into one command with an unambiguous answer: zero or
                non-zero.
              </>
            )}
          </p>
          <Terminal
            title="check.sh"
            lines={[
              { cmd: '#!/usr/bin/env bash', prompt: ' ' },
              { cmd: 'set -euo pipefail', prompt: ' ' },
              { cmd: '', prompt: ' ' },
              { cmd: 'npm run lint', prompt: ' ' },
              { cmd: 'npx tsc --noEmit', prompt: ' ' },
              { cmd: 'npm test', prompt: ' ' },
              { out: ru ? '# порядок — от дешёвых к дорогим: ответ «нет» приходит раньше' : '# cheapest first: the answer “no” arrives sooner', tone: 'dim' },
            ]}
          />
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Порядок внутри скрипта имеет значение. Проверки ставят от дешёвых к дорогим: линт отрабатывает за
                секунды, типы — за десятки секунд, тесты — за минуты. Если падает линт, ждать тестов незачем, а{' '}
                <code className="text-accent-300">set -e</code> из главы 5 обеспечивает остановку на первом же провале.
                Так один и тот же скрипт становится и{' '}
                <Term id="quality-gate" lang={lang}>quality gate</Term> для человека, и командой, которую можно вызвать
                из CI: система непрерывной интеграции читает тот же код возврата.
              </>
            ) : (
              <>
                Order inside the script matters. Checks are arranged cheapest first: lint finishes in seconds, types in
                tens of seconds, tests in minutes. If lint fails there is no reason to wait for the tests, and{' '}
                <code className="text-accent-300">set -e</code> from Chapter 5 guarantees the stop at the first failure.
                The same script thus becomes both a{' '}
                <Term id="quality-gate" lang={lang}>quality gate</Term> for a human and a command CI can call: the
                continuous-integration system reads the very same exit code.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru ? (
              <>
                Знать, когда shell пора заканчивать, так же важно, как уметь его писать. Google в Shell Style Guide
                проводит границу по объёму: скрипт длиннее <strong>100 строк</strong> или с нетривиальным потоком
                управления следует переписать на структурном языке — и сделать это сразу, а не когда-нибудь. Shell
                хорош как тонкая обвязка вокруг других команд и плох как язык, на котором пишут логику.
              </>
            ) : (
              <>
                Knowing when to stop using shell matters as much as being able to write it. Google’s Shell Style Guide
                draws the line by size: a script longer than <strong>100 lines</strong>, or one with non-straightforward
                control flow, should be rewritten in a structured language — and rewritten now, not eventually. Shell is
                good as a thin wrapper around other commands and bad as a language you put logic in.
              </>
            )}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {ru
              ? 'Итог комнаты — четыре вопроса к любому скрипту, который написал за вас агент. Все переменные в кавычках? Есть ли строка set -euo pipefail? Какие строки необратимы и прогнали ли вы их вхолостую? Не пора ли переписать это на нормальном языке? Если на все четыре есть ответ, вы прочитали скрипт — а не просто нажали Enter.'
              : 'The room comes down to four questions to ask of any script an agent wrote for you. Are all variables quoted? Is there a set -euo pipefail line? Which lines are irreversible, and did you dry-run them? Is it time to rewrite this in a real language? If all four have answers, you have read the script — rather than merely pressed Enter.'}
          </p>
        </div>
      </section>

      <section className="bg-card-dark border border-border-card rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-5 text-heading">{ru ? 'Источники' : 'Sources'}</h2>
        <ul className="space-y-4">
          {SOURCES.map(s => (
            <li key={s.href} className="text-sm text-neutral-300 leading-relaxed">
              <span className="text-neutral-400">{s.authors}</span>{' '}
              <span className="text-neutral-200">{s.title}</span>
              {s.venue ? <span className="text-neutral-500">{` — ${s.venue}`}</span> : null}
              <span className="text-neutral-500">{` — ${ru ? s.note.ru : s.note.en}. `}</span>
              <SourceLink href={s.href}>{s.label}</SourceLink>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
