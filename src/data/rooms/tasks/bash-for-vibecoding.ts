import { LocalizedTask } from '../types';

export const bashForVibecodingTasks: LocalizedTask[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: {
      ru: 'Почему принять не глядя shell-скрипт дороже, чем принять не глядя код на Python?',
      en: 'Why is accepting an unread shell script more expensive than accepting unread Python?'
    },
    options: [
      { ru: 'Между строкой скрипта и её последствием нет ни компилятора, ни проверки типов, ни тестов — ошибка не падает, а выполняется', en: 'Between a line of the script and its consequence there is no compiler, no type checker and no test suite — the mistake does not fail, it runs' },
      { ru: 'Shell работает медленнее, поэтому ошибки успевают накопиться', en: 'Shell runs more slowly, so mistakes have time to pile up' },
      { ru: 'В shell меньше библиотек, и агент чаще ошибается в синтаксисе', en: 'Shell has fewer libraries, so an agent makes more syntax errors' }
    ],
    answer: { ru: 'Между строкой скрипта и её последствием нет ни компилятора, ни проверки типов, ни тестов — ошибка не падает, а выполняется', en: 'Between a line of the script and its consequence there is no compiler, no type checker and no test suite — the mistake does not fail, it runs' },
    explanation: {
      ru: 'Ошибка в Python обычно даёт трассировку: программа падает, данные на месте. Ошибка в shell выполняется, и отмены нет. Поэтому цена измеряется не временем, а данными.',
      en: 'A mistake in Python usually gives a stack trace: the program stops and the data survives. A mistake in shell executes, and there is no undo. That is why the cost is measured in data rather than minutes.'
    }
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: {
      ru: 'Переменная FILE содержит «Отчёт за март.pdf». Что сделает команда ls $FILE без кавычек?',
      en: 'The variable FILE holds “Report for March.pdf”. What does ls $FILE do without quotes?'
    },
    options: [
      { ru: 'Разрежет значение по пробелам и передаст ls три отдельных аргумента', en: 'Splits the value at the spaces and passes ls three separate arguments' },
      { ru: 'Передаст ls одно имя файла — кавычки нужны только для переменных с кириллицей', en: 'Passes ls one filename — quotes are only needed for non-ASCII values' },
      { ru: 'Остановит скрипт с синтаксической ошибкой', en: 'Stops the script with a syntax error' }
    ],
    answer: { ru: 'Разрежет значение по пробелам и передаст ls три отдельных аргумента', en: 'Splits the value at the spaces and passes ls three separate arguments' },
    explanation: {
      ru: 'Это словоделение (word splitting): подстановка без кавычек режется по пробелам, и тем же проходом раскрываются * и ?. Отсюда правило — всякая подстановка переменной в двойных кавычках.',
      en: 'This is word splitting: an unquoted substitution is cut at the spaces, and the same pass expands * and ?. Hence the rule — every variable substitution goes in double quotes.'
    }
  },
  {
    id: 3,
    type: 'input',
    question: {
      ru: 'Какую строку ставят в начало скрипта, чтобы он останавливался на первой ошибке, ругался на незаданную переменную и не считал упавший конвейер успешным?',
      en: 'Which line goes at the top of a script so it stops at the first error, complains about an unset variable, and does not treat a failed pipeline as a success?'
    },
    answer: ['set -euo pipefail', 'set euo pipefail', 'set -e -u -o pipefail'],
    hint: {
      ru: 'Одна команда set и три флага подряд.',
      en: 'One set command and three flags in a row.'
    },
    explanation: {
      ru: 'set -euo pipefail. Флаг -e останавливает на первой ошибке, -u делает ошибкой обращение к незаданной переменной, -o pipefail считает конвейер упавшим, если упало любое его звено.',
      en: 'set -euo pipefail. The -e flag stops at the first error, -u turns a reference to an unset variable into an error, and -o pipefail makes a pipeline count as failed if any stage failed.'
    }
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: {
      ru: 'Команда curl упала, а следующий за ней в конвейере jq отработал нормально. Какой код возврата вернёт конвейер по умолчанию?',
      en: 'A curl command failed, but the jq that follows it in the pipeline ran fine. What exit code does the pipeline return by default?'
    },
    options: [
      { ru: 'Ноль — по умолчанию берётся код последней команды конвейера', en: 'Zero — by default the code of the pipeline’s last command is used' },
      { ru: 'Ненулевой — конвейер всегда возвращает код первой упавшей команды', en: 'Non-zero — a pipeline always returns the code of the first failed command' },
      { ru: 'Ошибку синтаксиса, потому что конвейер оборвался', en: 'A syntax error, because the pipeline broke' }
    ],
    answer: { ru: 'Ноль — по умолчанию берётся код последней команды конвейера', en: 'Zero — by default the code of the pipeline’s last command is used' },
    explanation: {
      ru: 'Именно поэтому нужен -o pipefail. Без него длинная цепочка проверяется только по хвосту, и упавшая загрузка проходит незамеченной — частая ошибка в скриптах, написанных агентом.',
      en: 'This is exactly why -o pipefail exists. Without it a long chain is judged by its tail alone, and a failed download passes unnoticed — a common fault in agent-written scripts.'
    }
  },
  {
    id: 5,
    type: 'multiple-select',
    question: {
      ru: 'Выберите приёмы, которые можно применить к чужому скрипту, не разбираясь в его логике.',
      en: 'Select the measures you can apply to a script you did not write without understanding its logic.'
    },
    options: [
      { ru: 'Проверить, что каждая подстановка переменной стоит в двойных кавычках', en: 'Check that every variable substitution sits in double quotes' },
      { ru: 'Найти строки, которые удаляют или перезаписывают, и прогнать их вхолостую', en: 'Find the lines that delete or overwrite and dry-run them first' },
      { ru: 'Прогнать файл через ShellCheck до запуска', en: 'Run the file through ShellCheck before executing it' },
      { ru: 'Запустить скрипт дважды и посмотреть, изменится ли результат', en: 'Run the script twice and see whether the result changes' },
      { ru: 'Запустить скрипт от администратора, чтобы не мешали права доступа', en: 'Run the script as administrator so permissions do not get in the way' },
      { ru: 'Удлинить скрипт, добавив обработку всех крайних случаев сразу', en: 'Make the script longer by handling every edge case up front' }
    ],
    answer: [
      { ru: 'Проверить, что каждая подстановка переменной стоит в двойных кавычках', en: 'Check that every variable substitution sits in double quotes' },
      { ru: 'Найти строки, которые удаляют или перезаписывают, и прогнать их вхолостую', en: 'Find the lines that delete or overwrite and dry-run them first' },
      { ru: 'Прогнать файл через ShellCheck до запуска', en: 'Run the file through ShellCheck before executing it' },
      { ru: 'Запустить скрипт дважды и посмотреть, изменится ли результат', en: 'Run the script twice and see whether the result changes' }
    ],
    explanation: {
      ru: 'Все четыре не требуют понимания замысла скрипта. Права администратора, наоборот, снимают последнюю защиту, а удлинение скрипта уводит его за границу применимости shell.',
      en: 'All four work without understanding the script’s intent. Administrator rights do the opposite — they remove the last protection — and making the script longer pushes it past the point where shell is the right tool.'
    }
  },
  {
    id: 6,
    type: 'sorting',
    question: {
      ru: 'Агент прислал скрипт очистки. Расположите ваши действия в порядке от первого к последнему.',
      en: 'An agent sent you a cleanup script. Put your actions in order, first to last.'
    },
    initialItems: [
      { ru: 'Запустить скрипт по-настоящему', en: 'Run the script for real' },
      { ru: 'Прочитать файл и отметить строки, которые удаляют, перезаписывают или требуют прав администратора', en: 'Read the file and mark the lines that delete, overwrite or require administrator rights' },
      { ru: 'Прогнать отмеченные строки вхолостую и сверить вывод с ожиданием', en: 'Dry-run the marked lines and compare the output with what you expected' },
      { ru: 'Проверить кавычки у переменных и наличие set -euo pipefail', en: 'Check the quoting of the variables and the presence of set -euo pipefail' }
    ],
    correctOrder: [
      { ru: 'Прочитать файл и отметить строки, которые удаляют, перезаписывают или требуют прав администратора', en: 'Read the file and mark the lines that delete, overwrite or require administrator rights' },
      { ru: 'Проверить кавычки у переменных и наличие set -euo pipefail', en: 'Check the quoting of the variables and the presence of set -euo pipefail' },
      { ru: 'Прогнать отмеченные строки вхолостую и сверить вывод с ожиданием', en: 'Dry-run the marked lines and compare the output with what you expected' },
      { ru: 'Запустить скрипт по-настоящему', en: 'Run the script for real' }
    ],
    answer: '',
    explanation: {
      ru: 'Сначала находим необратимые строки, потом проверяем защиту от пустых переменных, потом смотрим на холостом прогоне, что именно будет сделано, и только затем запускаем. Отмены в shell нет, поэтому весь порядок построен вокруг проверок до запуска.',
      en: 'First find the irreversible lines, then check the protection against empty variables, then see on a dry run what will actually happen, and only then run it. Shell has no undo, so the whole order is built around checks that happen before execution.'
    }
  },
  {
    id: 7,
    type: 'categorize',
    question: {
      ru: 'Разложите сбои по тому, какой флаг из set -euo pipefail их ловит.',
      en: 'Sort the failures by which flag of set -euo pipefail catches them.'
    },
    answer: '',
    explanation: {
      ru: 'Каждый флаг закрывает свою дыру: -e останавливает после упавшей команды, -u ловит незаданную переменную до того, как она раскроется во что-то опасное, -o pipefail не даёт удачному хвосту конвейера скрыть упавшее звено.',
      en: 'Each flag closes its own hole: -e stops after a failed command, -u catches an unset variable before it expands into something dangerous, and -o pipefail stops a successful tail from hiding a failed stage.'
    },
    categorize: {
      buckets: [
        { ru: 'set -e', en: 'set -e' },
        { ru: 'set -u', en: 'set -u' },
        { ru: 'set -o pipefail', en: 'set -o pipefail' }
      ],
      items: [
        { ru: 'Распаковка запустилась после того, как загрузка вернула ошибку', en: 'The unpacking ran after the download returned an error' },
        { ru: 'Опечатка в имени переменной подставила пустую строку в путь удаления', en: 'A typo in a variable name substituted an empty string into a deletion path' },
        { ru: 'Первое звено цепочки упало, но конвейер отчитался нулём', en: 'The first stage of the chain failed, but the pipeline reported zero' }
      ],
      correctMapping: {
        'The unpacking ran after the download returned an error': 'set -e',
        'A typo in a variable name substituted an empty string into a deletion path': 'set -u',
        'The first stage of the chain failed, but the pipeline reported zero': 'set -o pipefail'
      }
    }
  },
  {
    id: 8,
    type: 'input',
    question: {
      ru: 'После какого объёма в строках Google в Shell Style Guide рекомендует переписать скрипт на структурном языке? (число)',
      en: 'Beyond how many lines does Google’s Shell Style Guide recommend rewriting a script in a structured language? (a number)'
    },
    answer: ['100', '100 строк', '100 lines'],
    hint: {
      ru: 'Круглое число, названное в главе про границу применимости shell.',
      en: 'A round number, named in the chapter about the limit of shell.'
    },
    explanation: {
      ru: '100 строк. Скрипт длиннее этого или с нетривиальным потоком управления следует переписать сразу, а не когда-нибудь: shell хорош как тонкая обвязка вокруг других команд и плох как язык для логики.',
      en: '100 lines. A script longer than that, or one with non-straightforward control flow, should be rewritten now rather than eventually: shell is good as a thin wrapper around other commands and bad as a language for logic.'
    }
  },
  {
    id: 9,
    type: 'categorize',
    question: {
      ru: 'Разложите скрипты по тому, идемпотентны они или нет — даёт ли повторный запуск тот же результат.',
      en: 'Sort the scripts by whether they are idempotent — whether a second run gives the same result.'
    },
    answer: '',
    explanation: {
      ru: 'Идемпотентность проверяется одним движением: запустите скрипт дважды. Идемпотентный промолчит, неидемпотентный упадёт или тихо продублирует свою работу — и второе хуже первого.',
      en: 'Idempotency is tested in one move: run the script twice. An idempotent one stays quiet; a non-idempotent one either fails or quietly duplicates its work — and the second is worse than the first.'
    },
    categorize: {
      buckets: [
        { ru: 'Идемпотентный', en: 'Idempotent' },
        { ru: 'Неидемпотентный', en: 'Not idempotent' }
      ],
      items: [
        { ru: 'Создаёт каталог через mkdir -p и молчит, если он уже есть', en: 'Creates a directory with mkdir -p and stays quiet if it already exists' },
        { ru: 'Дописывает строку в конец файла настроек', en: 'Appends a line to the end of a settings file' },
        { ru: 'Копирует файлы в целевой каталог, перезаписывая одноимённые', en: 'Copies files into the target directory, overwriting those with the same names' },
        { ru: 'Увеличивает счётчик версии в файле на единицу', en: 'Increases the version counter in a file by one' }
      ],
      correctMapping: {
        'Creates a directory with mkdir -p and stays quiet if it already exists': 'Idempotent',
        'Appends a line to the end of a settings file': 'Not idempotent',
        'Copies files into the target directory, overwriting those with the same names': 'Idempotent',
        'Increases the version counter in a file by one': 'Not idempotent'
      }
    }
  },
  {
    id: 10,
    type: 'multiple-select',
    question: {
      ru: 'Что означает строка rm -rf "$DIR"/*, если переменная DIR оказалась пустой? Выберите все верные утверждения.',
      en: 'What does the line rm -rf "$DIR"/* mean if the variable DIR turns out to be empty? Select all correct statements.'
    },
    options: [
      { ru: 'Она превращается в rm -rf /* — удаление от корня', en: 'It becomes rm -rf /* — a deletion starting at the root' },
      { ru: 'Синтаксис остаётся верным, и ошибки не будет', en: 'The syntax stays valid and there is no error' },
      { ru: 'Флаг set -u остановил бы скрипт до этой строки', en: 'The set -u flag would have stopped the script before this line' },
      { ru: 'Кавычки вокруг $DIR защищают от этого случая', en: 'The quotes around $DIR protect against this case' },
      { ru: 'Команда откажется выполняться, потому что путь пустой', en: 'The command refuses to run because the path is empty' }
    ],
    answer: [
      { ru: 'Она превращается в rm -rf /* — удаление от корня', en: 'It becomes rm -rf /* — a deletion starting at the root' },
      { ru: 'Синтаксис остаётся верным, и ошибки не будет', en: 'The syntax stays valid and there is no error' },
      { ru: 'Флаг set -u остановил бы скрипт до этой строки', en: 'The set -u flag would have stopped the script before this line' }
    ],
    explanation: {
      ru: 'Кавычки спасают от пробелов, но не от пустого значения: пустая переменная подставляется как ничто, и остаётся /*. Команда делает ровно то, что написано, — просто написано теперь другое. От этого защищают set -u и явное требование ${DIR:?}.',
      en: 'Quotes save you from spaces but not from an empty value: an empty variable substitutes as nothing, leaving /*. The command does exactly what is written — it is just that what is written has changed. The protections are set -u and an explicit ${DIR:?}.'
    }
  },
  {
    id: 11,
    type: 'mentor',
    question: { ru: 'Скрипт от коллеги', en: 'A script from a colleague' },
    answer: '',
    explanation: {
      ru: 'Правильный ход не «доверять или не доверять коллеге», а прочитать три вещи: кавычки и защиту от пустых переменных, наличие set -euo pipefail и вывод холостого прогона. Всё это занимает пару минут и не требует понимания замысла скрипта.',
      en: 'The right move is not “trust or distrust the colleague” but reading three things: the quoting and the protection against empty variables, the presence of set -euo pipefail, and the output of a dry run. All of that takes a couple of minutes and needs no understanding of the script’s intent.'
    },
    dialogue: {
      mentorMessage: {
        ru: 'Коллега присылает скрипт: «Агент написал очистку кеша, у меня отработало, запусти у себя». Внутри строка rm -rf "$CACHE_DIR"/*, а CACHE_DIR вычисляется командой выше. Строки set -euo pipefail в файле нет. Что делаете?',
        en: 'A colleague sends you a script: “The agent wrote a cache cleanup, it worked on my machine, run it on yours.” Inside there is a line rm -rf "$CACHE_DIR"/*, and CACHE_DIR is computed by a command above it. There is no set -euo pipefail line in the file. What do you do?'
      },
      userOptions: [
        {
          text: { ru: 'Запустить: у коллеги отработало, значит скрипт рабочий.', en: 'Run it: it worked for my colleague, so the script is fine.' },
          reaction: { ru: 'Опасно. У коллеги CACHE_DIR вычислился, у вас может вернуть пустую строку — и строка превратится в удаление от корня. «Сработало у меня» ничего не говорит о вашей машине.', en: 'Dangerous. CACHE_DIR resolved on their machine; on yours it may return an empty string, and the line becomes a deletion from the root. “It worked for me” says nothing about your machine.' },
          isCorrect: false
        },
        {
          text: { ru: 'Добавить set -euo pipefail, заменить $CACHE_DIR на ${CACHE_DIR:?}, прогнать вхолостую с echo и посмотреть, какие пути он собирается удалять.', en: 'Add set -euo pipefail, replace $CACHE_DIR with ${CACHE_DIR:?}, dry-run it with echo and look at which paths it intends to delete.' },
          reaction: { ru: 'Верно. Две строки правки закрывают случай пустой переменной, а холостой прогон показывает реальные пути до того, как что-то исчезнет.', en: 'Correct. Two edited lines close the empty-variable case, and the dry run shows the real paths before anything disappears.' },
          isCorrect: true
        },
        {
          text: { ru: 'Отказаться запускать чужие скрипты вообще.', en: 'Refuse to run other people’s scripts at all.' },
          reaction: { ru: 'Это не масштабируется: скрипты — обычный способ передавать работу. Дешевле выработать привычку читать три вещи, чем отказываться от инструмента.', en: 'That does not scale: scripts are an ordinary way to hand over work. Building the habit of reading three things is cheaper than giving up the tool.' },
          isCorrect: false
        }
      ]
    }
  },
  {
    id: 12,
    type: 'scenario',
    question: { ru: 'Миссия: скрипт на сервере с резервными копиями', en: 'Mission: a script on the backup server' },
    answer: '',
    explanation: {
      ru: 'Необратимая операция на машине с резервными копиями требует шлюза целиком: холостой прогон, проверка того, что именно попало под удаление, и только потом запуск. Ограниченный по объёму прогон даёт факты, а не обещания, и стоит несколько минут против безвозвратно удалённых копий.',
      en: 'An irreversible operation on a machine holding backups needs the whole gate: a dry run, a check of what exactly falls under the deletion, and only then execution. A limited run gives you facts rather than promises, and costs minutes against irrecoverably deleted copies.'
    },
    scenario: {
      brief: {
        ru: 'Агент написал скрипт, который удаляет резервные копии старше 30 дней. Запускать нужно на сервере, где лежат единственные копии за год. Скрипт короткий, переменные в кавычках, set -euo pipefail на месте. Что делаете первым?',
        en: 'An agent wrote a script that deletes backups older than 30 days. It has to run on the server holding the only copies for the year. The script is short, the variables are quoted, set -euo pipefail is in place. What do you do first?'
      },
      constraints: [
        { ru: 'Удалённые копии восстановить нельзя', en: 'Deleted copies cannot be restored' },
        { ru: 'Место на диске кончается сегодня', en: 'Disk space runs out today' }
      ],
      choices: [
        {
          text: { ru: 'Запустить как есть: кавычки на месте, строгий режим включён, проверок достаточно.', en: 'Run it as is: the quotes are there, strict mode is on, that is enough checking.' },
          outcome: { ru: 'Опасно. Кавычки и set -euo pipefail защищают от пустой переменной, но ничего не говорят о том, верно ли посчитаны «старше 30 дней». Ошибка в условии отбора удалит нужное молча и законно.', en: 'Dangerous. Quotes and set -euo pipefail protect against an empty variable but say nothing about whether “older than 30 days” is computed correctly. A mistake in the selection condition deletes what you needed, silently and legitimately.' },
          score: 20
        },
        {
          text: { ru: 'Заменить удаление на echo, прогнать вхолостую и глазами сверить список файлов с ожидаемым, затем запустить по-настоящему.', en: 'Replace the deletion with echo, dry-run it, check the file list against what you expected, then run it for real.' },
          outcome: { ru: 'Верно. Холостой прогон показывает не намерение скрипта, а конкретные пути, и ошибка в условии отбора становится видна до того, как копии исчезнут.', en: 'Correct. A dry run shows not the script’s intent but the concrete paths, and a mistake in the selection condition becomes visible before the copies disappear.' },
          score: 100
        },
        {
          text: { ru: 'Не запускать вовсе и освободить место вручную.', en: 'Do not run it at all and free up space by hand.' },
          outcome: { ru: 'Безопасно, но не решает задачу: вручную вы сделаете ту же работу медленнее и с тем же риском ошибиться в отборе, только без записи о том, что удалили.', en: 'Safe but does not solve the problem: by hand you do the same work more slowly, with the same risk of choosing wrongly, and without a record of what you deleted.' },
          score: 45
        }
      ]
    }
  }
];
