// Extra quizzes for Sections 1, 2, 4, 5
// These are appended to the QUIZZES array from quizzes.js

const QUIZZES_EXTRA = [
  // ===== SECTION 1: SETS =====
  {
    id: '1-1-sets',
    section: 1,
    sectionName: 'Множини. Функції',
    title: 'Множини та операції над ними',
    description: 'Множина, підмножина, об\'єднання, переріз, різниця',
    icon: '{ }',
    questions: [
      {
        question: 'Що таке множина?',
        options: [
          'Сукупність об\'єктів, об\'єднаних за певною ознакою',
          'Послідовність чисел',
          'Таблиця значень функції',
          'Графік на координатній площині'
        ],
        correct: 0,
        explanation: 'Множина — це сукупність (колекція) об\'єктів, які називаються елементами множини.'
      },
      {
        question: 'Який символ означає "належить множині"?',
        options: ['$\\subset$', '$\\cap$', '$\\in$', '$\\cup$'],
        correct: 2,
        explanation: 'Символ $\\in$ читається "належить". Наприклад, $3 \\in \\{1, 2, 3\\}$.'
      },
      {
        question: 'Що таке $A \\cup B$?',
        options: [
          'Переріз множин $A$ і $B$',
          'Об\'єднання множин $A$ і $B$',
          'Різниця множин $A$ і $B$',
          'Доповнення множини $A$'
        ],
        correct: 1,
        explanation: '$A \\cup B$ — це об\'єднання, множина всіх елементів, які належать $A$ або $B$ (або обом).'
      },
      {
        question: 'Що таке $A \\cap B$?',
        options: [
          'Об\'єднання множин',
          'Різниця множин',
          'Переріз множин',
          'Симетрична різниця'
        ],
        correct: 2,
        explanation: '$A \\cap B$ — це переріз, множина елементів, які належать і $A$, і $B$ одночасно.'
      },
      {
        question: 'Якщо $A = \\{1, 2, 3\\}$ і $B = \\{2, 3, 4\\}$, чому дорівнює $A \\cap B$?',
        options: ['$\\{1, 2, 3, 4\\}$', '$\\{2, 3\\}$', '$\\{1, 4\\}$', '$\\{1\\}$'],
        correct: 1,
        explanation: 'Переріз — спільні елементи: $A \\cap B = \\{2, 3\\}$.'
      },
      {
        question: 'Якщо $A = \\{1, 2, 3\\}$ і $B = \\{2, 3, 4\\}$, чому дорівнює $A \\cup B$?',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: '$A \\cup B = \\{1, 2, 3, 4\\}$ — усі елементи з обох множин (без повторень). Це правильно.'
      },
      {
        question: 'Чим позначається порожня множина?',
        options: ['$\\{0\\}$', '$\\emptyset$', '$\\{\\emptyset\\}$', '$0$'],
        correct: 1,
        explanation: 'Порожня множина — це множина, що не містить жодного елемента, позначається $\\emptyset$.'
      },
      {
        question: '$A \\setminus B$ — це елементи, які:',
        options: [
          'Належать $A$ і $B$',
          'Належать $A$, але не належать $B$',
          'Належать $B$, але не належать $A$',
          'Не належать ні $A$, ні $B$'
        ],
        correct: 1,
        explanation: '$A \\setminus B$ — різниця: елементи $A$, які не входять до $B$.'
      },
      {
        question: 'Якщо $A \\subset B$, то:',
        options: [
          '$A$ і $B$ не мають спільних елементів',
          'Кожен елемент $A$ є елементом $B$',
          'Кожен елемент $B$ є елементом $A$',
          '$A = B$'
        ],
        correct: 1,
        explanation: '$A \\subset B$ означає, що $A$ є підмножиною $B$ — кожен елемент $A$ належить $B$.'
      },
      {
        question: 'Яке з тверджень правильне: $\\{1, 2\\} \\subset \\{1, 2, 3\\}$?',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: '$\\{1, 2\\}$ є підмножиною $\\{1, 2, 3\\}$, бо обидва елементи ($1$ і $2$) входять до більшої множини.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $\\{0\\} = \\emptyset$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! $\\{0\\}$ — множина з одним елементом (нуль), а $\\emptyset$ — порожня множина (без елементів).'
      },
      {
        question: 'Правильно чи неправильно: $\\emptyset \\subset A$ для будь-якої множини $A$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! Порожня множина є підмножиною будь-якої множини.'
      },
      {
        question: 'Якщо $A = \\{1, 3, 5, 7\\}$ і $B = \\{2, 3, 5, 8\\}$, чому дорівнює $A \\cap B$?',
        options: ['$\\{1, 2, 3, 5, 7, 8\\}$', '$\\{3, 5\\}$', '$\\{1, 7\\}$', '$\\{2, 8\\}$'],
        correct: 1,
        explanation: '$A \\cap B$ — спільні елементи: $\\{3, 5\\}$.'
      },
      {
        question: 'Якщо $A = \\{1, 2, 3, 4\\}$ і $B = \\{3, 4, 5\\}$, знайдіть $A \\setminus B$:',
        options: ['$\\{3, 4\\}$', '$\\{5\\}$', '$\\{1, 2\\}$', '$\\{1, 2, 5\\}$'],
        correct: 2,
        explanation: '$A \\setminus B$ — елементи $A$, які не входять до $B$: $\\{1, 2\\}$.'
      },
      {
        question: 'Скільки елементів у множині $A \\cup B$, якщо $|A| = 5$, $|B| = 4$, $|A \\cap B| = 2$?',
        type: 'text_input',
        correct: ['7'],
        explanation: '$|A \\cup B| = |A| + |B| - |A \\cap B| = 5 + 4 - 2 = 7$.'
      },
      {
        question: 'Яке з тверджень хибне?',
        options: [
          '$3 \\in \\{1, 2, 3\\}$',
          '$\\{1\\} \\subset \\{1, 2\\}$',
          '$\\{1, 2\\} \\in \\{1, 2, 3\\}$',
          '$\\emptyset \\subset \\{1\\}$'
        ],
        correct: 2,
        explanation: '$\\{1, 2\\} \\in \\{1, 2, 3\\}$ — хибне! Множина $\\{1, 2\\}$ не є елементом множини $\\{1, 2, 3\\}$. Вона є підмножиною ($\\subset$), а не елементом ($\\in$).'
      },
      {
        question: 'Якщо $A = \\{a, b, c\\}$, скільки підмножин має $A$?',
        type: 'text_input',
        correct: ['8'],
        explanation: 'Множина з $n$ елементів має $2^n$ підмножин. $2^3 = 8$.'
      },
      {
        type: 'matching',
        question: 'Встановіть відповідність: символ — операція',
        pairs: [
          ['$\\cup$', 'Об\'єднання'],
          ['$\\cap$', 'Переріз'],
          ['$\\setminus$', 'Різниця'],
          ['$\\subset$', 'Підмножина']
        ],
        explanation: 'Основні операції та відношення між множинами.'
      }
    ]
  },

  {
    id: '1-6-properties',
    section: 1,
    sectionName: 'Множини. Функції',
    title: 'Властивості функцій',
    description: 'Зростання, спадання, парність, непарність, нулі функції',
    icon: '📊',
    questions: [
      {
        question: 'Функція зростає на проміжку, якщо:',
        options: [
          'Більшому значенню аргументу відповідає менше значення функції',
          'Більшому значенню аргументу відповідає більше значення функції',
          'Функція приймає тільки додатні значення',
          'Графік функції розташований вище осі $x$'
        ],
        correct: 1,
        explanation: 'Функція зростає, якщо $x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$.'
      },
      {
        question: 'Функція $f(x) = x^2$ спадає на проміжку:',
        options: ['$(0; +\\infty)$', '$(-\\infty; 0)$', '$(-\\infty; +\\infty)$', '$(-1; 1)$'],
        correct: 1,
        explanation: 'Парабола $y = x^2$ спадає при $x < 0$ і зростає при $x > 0$.'
      },
      {
        question: 'Функція парна, якщо:',
        options: [
          '$f(-x) = -f(x)$',
          '$f(-x) = f(x)$',
          '$f(x) = f(x+T)$',
          '$f(0) = 0$'
        ],
        correct: 1,
        explanation: 'Парна функція: $f(-x) = f(x)$ для всіх $x$ з області визначення. Графік симетричний відносно осі $y$.'
      },
      {
        question: 'Функція непарна, якщо:',
        options: [
          '$f(-x) = f(x)$',
          '$f(-x) = -f(x)$',
          '$f(x) > 0$',
          '$f(0) = 1$'
        ],
        correct: 1,
        explanation: 'Непарна функція: $f(-x) = -f(x)$. Графік симетричний відносно початку координат.'
      },
      {
        question: 'Функція $f(x) = x^3$ є:',
        options: ['Парною', 'Непарною', 'Ні парною, ні непарною', 'Періодичною'],
        correct: 1,
        explanation: '$f(-x) = (-x)^3 = -x^3 = -f(x)$ — це непарна функція.'
      },
      {
        question: 'Нулі функції — це значення $x$, при яких:',
        options: ['$f(x) > 0$', '$f(x) < 0$', '$f(x) = 0$', '$f(x) = 1$'],
        correct: 2,
        explanation: 'Нулі функції — це точки, де графік перетинає вісь $x$, тобто $f(x) = 0$.'
      },
      {
        question: 'Функція $f(x) = x^2 - 4$ має нулі при $x = $:',
        type: 'text_input',
        correct: ['2 і -2', '-2 і 2', '±2', '-2, 2', '2, -2'],
        explanation: '$x^2 - 4 = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2$.'
      },
      {
        question: 'Графік парної функції симетричний відносно:',
        options: ['Осі $x$', 'Осі $y$', 'Початку координат', 'Прямої $y = x$'],
        correct: 1,
        explanation: 'Графік парної функції симетричний відносно осі $y$ (вертикальної осі).'
      },
      {
        question: 'Функція $f(x) = |x| + 1$ є парною.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: '$f(-x) = |-x| + 1 = |x| + 1 = f(x)$ — функція парна.'
      },
      {
        question: 'Яка з функцій зростає на всій числовій прямій?',
        options: ['$f(x) = x^2$', '$f(x) = |x|$', '$f(x) = 2x + 1$', '$f(x) = \\cos x$'],
        correct: 2,
        explanation: 'Лінійна функція $f(x) = 2x + 1$ з додатним коефіцієнтом зростає на $(-\\infty; +\\infty)$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: функція $f(x) = x^3$ є парною.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! $f(-x) = (-x)^3 = -x^3 = -f(x)$ — це непарна функція.'
      },
      {
        question: 'Правильно чи неправильно: графік непарної функції симетричний відносно осі $Oy$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! Графік непарної функції симетричний відносно початку координат. Відносно осі $Oy$ — це парна.'
      },
      {
        question: 'Функція $f(x) = x^2 - 2x$ спадає на проміжку:',
        options: ['$(1; +\\infty)$', '$(-\\infty; 1)$', '$(-\\infty; 0)$', '$(0; 2)$'],
        correct: 1,
        explanation: 'Вершина параболи при $x = 1$. Для $x < 1$ функція спадає, для $x > 1$ — зростає.'
      },
      {
        question: 'Знайдіть нулі функції $f(x) = x^2 - 5x + 6$:',
        options: ['$x = 1$ і $x = 6$', '$x = 2$ і $x = 3$', '$x = -2$ і $x = -3$', '$x = -1$ і $x = 6$'],
        correct: 1,
        explanation: '$x^2 - 5x + 6 = (x-2)(x-3) = 0$. Нулі: $x = 2$ і $x = 3$.'
      },
      {
        question: 'Функція $f(x) = x^4 + 1$ є:',
        options: ['Парною', 'Непарною', 'Ні парною, ні непарною', 'Зростаючою'],
        correct: 0,
        explanation: '$f(-x) = (-x)^4 + 1 = x^4 + 1 = f(x)$ — парна функція.'
      },
      {
        question: 'Функція $f(x) = 2x + 1$ є парною чи непарною?',
        options: ['Парною', 'Непарною', 'Ні парною, ні непарною'],
        correct: 2,
        explanation: '$f(-x) = -2x + 1$. Це не дорівнює ні $f(x) = 2x+1$, ні $-f(x) = -2x-1$. Ні парна, ні непарна.'
      },
      {
        question: 'На якому проміжку функція $f(x) = -x^2 + 6x$ зростає?',
        options: ['$(3; +\\infty)$', '$(-\\infty; 3)$', '$(-\\infty; +\\infty)$', '$(0; 6)$'],
        correct: 1,
        explanation: 'Вершина параболи при $x = 3$ (від\'ємний старший коефіцієнт). Зростає при $x < 3$.'
      },
      {
        question: 'Скільки нулів має функція $f(x) = x^3 - x$?',
        type: 'text_input',
        correct: ['3'],
        explanation: '$x^3 - x = x(x^2 - 1) = x(x-1)(x+1) = 0$. Нулі: $x = 0, 1, -1$ — три нулі.'
      }
    ]
  },

  // ===== SECTION 2: MORE =====
  {
    id: '2-2-roots',
    section: 2,
    sectionName: 'Степенева функція',
    title: 'Корінь n-го степеня',
    description: 'Арифметичний корінь, властивості коренів',
    icon: '√',
    questions: [
      {
        question: 'Чому дорівнює $\\sqrt[3]{27}$?',
        type: 'text_input',
        correct: '3',
        explanation: '$\\sqrt[3]{27} = 3$, бо $3^3 = 27$.'
      },
      {
        question: 'Чому дорівнює $\\sqrt[4]{16}$?',
        options: ['$2$', '$3$', '$4$', '$8$'],
        correct: 0,
        explanation: '$\\sqrt[4]{16} = 2$, бо $2^4 = 16$.'
      },
      {
        question: 'Яка умова існування $\\sqrt[n]{a}$ при парному $n$?',
        options: ['$a > 0$', '$a \\geq 0$', '$a$ — будь-яке', '$a \\neq 0$'],
        correct: 1,
        explanation: 'При парному $n$ арифметичний корінь існує лише для $a \\geq 0$.'
      },
      {
        question: '$\\sqrt[3]{-8}$ існує і дорівнює $-2$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Корінь непарного степеня існує для від\'ємних чисел: $\\sqrt[3]{-8} = -2$, бо $(-2)^3 = -8$.'
      },
      {
        question: 'Спростіть $\\sqrt{a^2}$ при $a \\geq 0$:',
        options: ['$a^2$', '$a$', '$|a|$', '$-a$'],
        correct: 1,
        explanation: '$\\sqrt{a^2} = |a|$, але при $a \\geq 0$ маємо $|a| = a$.'
      },
      {
        question: 'Спростіть $\\sqrt[3]{a^3}$:',
        options: ['$|a|$', '$a$', '$a^2$', '$-a$'],
        correct: 1,
        explanation: '$\\sqrt[3]{a^3} = a$ — для непарного кореня модуль не потрібен.'
      },
      {
        question: 'Чому дорівнює $\\sqrt{12} \\cdot \\sqrt{3}$?',
        type: 'text_input',
        correct: '6',
        explanation: '$\\sqrt{12} \\cdot \\sqrt{3} = \\sqrt{12 \\cdot 3} = \\sqrt{36} = 6$.'
      },
      {
        question: 'Спростіть $\\dfrac{\\sqrt{50}}{\\sqrt{2}}$:',
        options: ['$\\sqrt{25}$', '$5$', '$\\sqrt{48}$', '$25$'],
        correct: 1,
        explanation: '$\\dfrac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{\\dfrac{50}{2}} = \\sqrt{25} = 5$.'
      },
      {
        question: 'Яка властивість коренів тут використана: $\\sqrt[n]{a \\cdot b} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$?',
        options: [
          'Корінь добутку = добуток коренів',
          'Корінь суми = сума коренів',
          'Корінь степеня = степінь кореня',
          'Корінь частки = частка коренів'
        ],
        correct: 0,
        explanation: 'Корінь добутку дорівнює добутку коренів (при допустимих значеннях).'
      },
      {
        question: 'Чому дорівнює $\\sqrt[6]{64}$?',
        options: ['$2$', '$3$', '$4$', '$8$'],
        correct: 0,
        explanation: '$\\sqrt[6]{64} = 2$, бо $2^6 = 64$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $\\sqrt[4]{-16} = -2$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! Корінь парного степеня з від\'ємного числа не існує в дійсних числах.'
      },
      {
        question: 'Правильно чи неправильно: $\\sqrt{a + b} = \\sqrt{a} + \\sqrt{b}$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! Корінь суми НЕ дорівнює сумі коренів. Наприклад: $\\sqrt{9+16} = 5$, але $\\sqrt{9}+\\sqrt{16} = 7$.'
      },
      {
        question: 'Обчисліть $\\sqrt[3]{-125}$:',
        type: 'text_input',
        correct: ['-5'],
        explanation: '$\\sqrt[3]{-125} = -5$, бо $(-5)^3 = -125$.'
      },
      {
        question: 'Спростіть $\\sqrt{18}$:',
        options: ['$3\\sqrt{2}$', '$2\\sqrt{3}$', '$6\\sqrt{3}$', '$9\\sqrt{2}$'],
        correct: 0,
        explanation: '$\\sqrt{18} = \\sqrt{9 \\cdot 2} = 3\\sqrt{2}$.'
      },
      {
        question: 'Обчисліть $\\dfrac{\\sqrt{72}}{\\sqrt{8}}$:',
        type: 'text_input',
        correct: ['3'],
        explanation: '$\\dfrac{\\sqrt{72}}{\\sqrt{8}} = \\sqrt{\\dfrac{72}{8}} = \\sqrt{9} = 3$.'
      },
      {
        question: 'Спростіть $\\sqrt{a^2}$ при довільному $a$:',
        options: ['$a$', '$-a$', '$|a|$', '$a^2$'],
        correct: 2,
        explanation: '$\\sqrt{a^2} = |a|$. Корінь завжди невід\'ємний, тому потрібен модуль.'
      },
      {
        question: 'Обчисліть $\\sqrt[3]{8} \\cdot \\sqrt[3]{27}$:',
        type: 'text_input',
        correct: ['6'],
        explanation: '$\\sqrt[3]{8} \\cdot \\sqrt[3]{27} = 2 \\cdot 3 = 6$. Або $\\sqrt[3]{8 \\cdot 27} = \\sqrt[3]{216} = 6$.'
      },
      {
        question: 'Обчисліть $\\sqrt[4]{81}$:',
        type: 'text_input',
        correct: ['3'],
        explanation: '$\\sqrt[4]{81} = 3$, бо $3^4 = 81$.'
      },
      {
        question: 'Яке з тверджень правильне?',
        options: [
          '$\\sqrt[n]{a \\cdot b} = \\sqrt[n]{a} + \\sqrt[n]{b}$',
          '$\\sqrt[n]{a \\cdot b} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$',
          '$\\sqrt[n]{a + b} = \\sqrt[n]{a} + \\sqrt[n]{b}$',
          '$\\sqrt[n]{a - b} = \\sqrt[n]{a} - \\sqrt[n]{b}$'
        ],
        correct: 1,
        explanation: 'Корінь добутку = добуток коренів: $\\sqrt[n]{a \\cdot b} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$.'
      }
    ]
  },

  // ===== SECTION 4: TRIG EQUATIONS =====
  {
    id: '4-1-inverse-trig',
    section: 4,
    sectionName: 'Тригонометричні рівняння і нерівності',
    title: 'Обернені тригонометричні функції',
    description: 'arcsin, arccos, arctg — означення, область значень, обчислення',
    icon: 'arc',
    questions: [
      {
        question: 'Чому дорівнює $\\arcsin \\dfrac{1}{2}$?',
        options: ['$\\dfrac{\\pi}{6}$', '$\\dfrac{\\pi}{4}$', '$\\dfrac{\\pi}{3}$', '$\\dfrac{\\pi}{2}$'],
        correct: 0,
        explanation: '$\\arcsin \\dfrac{1}{2} = \\dfrac{\\pi}{6}$, бо $\\sin \\dfrac{\\pi}{6} = \\dfrac{1}{2}$.'
      },
      {
        question: 'Чому дорівнює $\\arccos 0$?',
        options: ['$0$', '$\\dfrac{\\pi}{4}$', '$\\dfrac{\\pi}{2}$', '$\\pi$'],
        correct: 2,
        explanation: '$\\arccos 0 = \\dfrac{\\pi}{2}$, бо $\\cos \\dfrac{\\pi}{2} = 0$.'
      },
      {
        question: 'Область значень $\\arcsin x$:',
        options: ['$[0; \\pi]$', '$\\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$', '$(-\\infty; +\\infty)$', '$[0; 2\\pi]$'],
        correct: 1,
        explanation: '$\\arcsin x \\in \\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$ за означенням.'
      },
      {
        question: 'Область значень $\\arccos x$:',
        options: ['$\\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$', '$[0; \\pi]$', '$[0; 2\\pi]$', '$(-\\pi; \\pi)$'],
        correct: 1,
        explanation: '$\\arccos x \\in [0; \\pi]$ за означенням.'
      },
      {
        question: 'Чому дорівнює $\\arcsin 1$?',
        type: 'text_input',
        correct: ['π/2', 'pi/2'],
        explanation: '$\\arcsin 1 = \\dfrac{\\pi}{2}$, бо $\\sin \\dfrac{\\pi}{2} = 1$.'
      },
      {
        question: '$\\arcsin(-x) = -\\arcsin x$ для всіх $x \\in [-1; 1]$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Так, $\\arcsin$ — непарна функція: $\\arcsin(-x) = -\\arcsin x$.'
      },
      {
        question: 'Чому дорівнює $\\operatorname{arctg} 1$?',
        options: ['$\\dfrac{\\pi}{6}$', '$\\dfrac{\\pi}{4}$', '$\\dfrac{\\pi}{3}$', '$\\dfrac{\\pi}{2}$'],
        correct: 1,
        explanation: '$\\operatorname{arctg} 1 = \\dfrac{\\pi}{4}$, бо $\\operatorname{tg} \\dfrac{\\pi}{4} = 1$.'
      },
      {
        question: 'Область визначення $\\arcsin x$:',
        options: ['$(-\\infty; +\\infty)$', '$[-1; 1]$', '$[0; 1]$', '$(0; +\\infty)$'],
        correct: 1,
        explanation: '$\\arcsin x$ визначений лише при $x \\in [-1; 1]$, бо $-1 \\leq \\sin \\alpha \\leq 1$.'
      },
      {
        question: 'Чому дорівнює $\\arccos(-1)$?',
        options: ['$0$', '$\\dfrac{\\pi}{2}$', '$\\pi$', '$-\\pi$'],
        correct: 2,
        explanation: '$\\arccos(-1) = \\pi$, бо $\\cos \\pi = -1$.'
      },
      {
        question: 'Чому дорівнює $\\arcsin 0 + \\arccos 0$?',
        type: 'text_input',
        correct: ['π/2', 'pi/2'],
        explanation: '$\\arcsin 0 = 0$, $\\arccos 0 = \\dfrac{\\pi}{2}$, тому сума $= \\dfrac{\\pi}{2}$. Взагалі $\\arcsin x + \\arccos x = \\dfrac{\\pi}{2}$ завжди.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $\\arccos(-\\dfrac{1}{2}) = -\\dfrac{\\pi}{3}$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! $\\arccos$ повертає значення з $[0; \\pi]$: $\\arccos(-\\dfrac{1}{2}) = \\dfrac{2\\pi}{3}$.'
      },
      {
        question: 'Правильно чи неправильно: $\\arcsin(-\\dfrac{\\sqrt{2}}{2}) = -\\dfrac{\\pi}{4}$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! $\\arcsin$ — непарна: $\\arcsin(-x) = -\\arcsin x$. $\\arcsin(-\\dfrac{\\sqrt{2}}{2}) = -\\dfrac{\\pi}{4}$.'
      },
      {
        question: 'Обчисліть $\\arccos(\\dfrac{\\sqrt{3}}{2})$:',
        options: ['$\\dfrac{\\pi}{6}$', '$\\dfrac{\\pi}{4}$', '$\\dfrac{\\pi}{3}$', '$\\dfrac{\\pi}{2}$'],
        correct: 0,
        explanation: '$\\cos \\dfrac{\\pi}{6} = \\dfrac{\\sqrt{3}}{2}$, тому $\\arccos(\\dfrac{\\sqrt{3}}{2}) = \\dfrac{\\pi}{6}$.'
      },
      {
        question: 'Обчисліть $\\sin(\\arcsin \\dfrac{1}{2})$:',
        type: 'text_input',
        correct: ['1/2', '0.5', '0,5'],
        explanation: '$\\sin(\\arcsin x) = x$ для $x \\in [-1; 1]$. Тому $\\sin(\\arcsin \\dfrac{1}{2}) = \\dfrac{1}{2}$.'
      },
      {
        question: 'Чому дорівнює $\\arccos(-\\dfrac{\\sqrt{2}}{2})$?',
        options: ['$\\dfrac{\\pi}{4}$', '$\\dfrac{3\\pi}{4}$', '$-\\dfrac{\\pi}{4}$', '$\\dfrac{5\\pi}{4}$'],
        correct: 1,
        explanation: '$\\cos \\dfrac{3\\pi}{4} = -\\dfrac{\\sqrt{2}}{2}$ і $\\dfrac{3\\pi}{4} \\in [0; \\pi]$.'
      },
      {
        question: 'Обчисліть $\\arcsin 1 + \\arccos 1$:',
        type: 'text_input',
        correct: ['π/2', 'pi/2'],
        explanation: '$\\arcsin 1 = \\dfrac{\\pi}{2}$, $\\arccos 1 = 0$. Сума $= \\dfrac{\\pi}{2}$. Підтверджує тотожність $\\arcsin x + \\arccos x = \\dfrac{\\pi}{2}$.'
      },
      {
        question: 'Яка область значень $\\operatorname{arctg} x$?',
        options: ['$[0; \\pi]$', '$[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}]$', '$(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2})$', '$(-\\infty; +\\infty)$'],
        correct: 2,
        explanation: 'Область значень $\\operatorname{arctg} x = (-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2})$ — відкритий інтервал.'
      },
      {
        question: 'Обчисліть $\\operatorname{arctg} 0$:',
        type: 'text_input',
        correct: ['0'],
        explanation: '$\\operatorname{tg} 0 = 0$, тому $\\operatorname{arctg} 0 = 0$.'
      }
    ]
  },

  {
    id: '4-2-simple-equations',
    section: 4,
    sectionName: 'Тригонометричні рівняння і нерівності',
    title: 'Найпростіші тригонометричні рівняння',
    description: 'Розв\'язування sin x = a, cos x = a, tg x = a',
    icon: '🔍',
    questions: [
      {
        question: 'Загальний розв\'язок рівняння $\\sin x = a$:',
        options: [
          '$x = \\arcsin a + 2\\pi n$',
          '$x = (-1)^n \\arcsin a + \\pi n, \\; n \\in \\mathbb{Z}$',
          '$x = \\arcsin a + \\pi n$',
          '$x = \\pm \\arcsin a + 2\\pi n$'
        ],
        correct: 1,
        explanation: 'Формула: $x = (-1)^n \\arcsin a + \\pi n, \\; n \\in \\mathbb{Z}$.'
      },
      {
        question: 'Загальний розв\'язок рівняння $\\cos x = a$:',
        options: [
          '$x = \\pm \\arccos a + 2\\pi n, \\; n \\in \\mathbb{Z}$',
          '$x = \\arccos a + \\pi n$',
          '$x = (-1)^n \\arccos a + \\pi n$',
          '$x = \\arccos a + 2\\pi n$'
        ],
        correct: 0,
        explanation: 'Формула: $x = \\pm \\arccos a + 2\\pi n, \\; n \\in \\mathbb{Z}$.'
      },
      {
        question: 'Загальний розв\'язок рівняння $\\operatorname{tg} x = a$:',
        options: [
          '$x = \\operatorname{arctg} a + 2\\pi n$',
          '$x = \\pm \\operatorname{arctg} a + \\pi n$',
          '$x = \\operatorname{arctg} a + \\pi n, \\; n \\in \\mathbb{Z}$',
          '$x = (-1)^n \\operatorname{arctg} a + \\pi n$'
        ],
        correct: 2,
        explanation: 'Формула: $x = \\operatorname{arctg} a + \\pi n, \\; n \\in \\mathbb{Z}$. Тангенс має період $\\pi$.'
      },
      {
        question: 'Розв\'яжіть $\\sin x = 0$:',
        options: [
          '$x = 2\\pi n$',
          '$x = \\pi n, \\; n \\in \\mathbb{Z}$',
          '$x = \\dfrac{\\pi}{2} + \\pi n$',
          '$x = \\dfrac{\\pi}{2} + 2\\pi n$'
        ],
        correct: 1,
        explanation: '$\\sin x = 0$ при $x = \\pi n$, тобто $x = 0, \\pm\\pi, \\pm 2\\pi, ...$'
      },
      {
        question: 'Розв\'яжіть $\\cos x = 1$:',
        options: [
          '$x = \\pi n$',
          '$x = \\dfrac{\\pi}{2} + \\pi n$',
          '$x = 2\\pi n, \\; n \\in \\mathbb{Z}$',
          '$x = \\pi + 2\\pi n$'
        ],
        correct: 2,
        explanation: '$\\cos x = 1$ тільки при $x = 2\\pi n$, тобто $x = 0, \\pm 2\\pi, \\pm 4\\pi, ...$'
      },
      {
        question: 'Рівняння $\\sin x = 2$ має розв\'язки.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: '$\\sin x \\in [-1; 1]$, тому $\\sin x = 2$ не має розв\'язків.'
      },
      {
        question: 'Розв\'яжіть $\\operatorname{tg} x = 0$:',
        options: [
          '$x = \\dfrac{\\pi}{2} + \\pi n$',
          '$x = \\pi n, \\; n \\in \\mathbb{Z}$',
          '$x = 2\\pi n$',
          '$x = \\dfrac{\\pi}{4} + \\pi n$'
        ],
        correct: 1,
        explanation: '$\\operatorname{tg} x = 0$ при $\\sin x = 0$, тобто $x = \\pi n$.'
      },
      {
        question: 'Скільки коренів має рівняння $\\cos x = \\dfrac{1}{2}$ на проміжку $[0; 2\\pi]$?',
        type: 'text_input',
        correct: '2',
        explanation: '$x = \\dfrac{\\pi}{3}$ і $x = \\dfrac{5\\pi}{3}$ — два корені на $[0; 2\\pi]$.'
      },
      {
        question: 'Розв\'яжіть $\\sin x = -1$:',
        options: [
          '$x = -\\dfrac{\\pi}{2} + 2\\pi n, \\; n \\in \\mathbb{Z}$',
          '$x = \\pi + 2\\pi n$',
          '$x = \\dfrac{3\\pi}{2} + 2\\pi n$',
          '$x = -\\dfrac{\\pi}{2} + 2\\pi n$ або $x = \\dfrac{3\\pi}{2} + 2\\pi n$'
        ],
        correct: 0,
        explanation: '$\\sin x = -1$ при $x = -\\dfrac{\\pi}{2} + 2\\pi n$ (що еквівалентно $\\dfrac{3\\pi}{2} + 2\\pi n$).'
      },
      {
        question: 'Рівняння $\\cos x = -\\dfrac{\\sqrt{3}}{2}$ має загальний розв\'язок $x = \\pm \\dfrac{5\\pi}{6} + 2\\pi n$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: '$\\arccos\\left(-\\dfrac{\\sqrt{3}}{2}\\right) = \\dfrac{5\\pi}{6}$, тому $x = \\pm \\dfrac{5\\pi}{6} + 2\\pi n$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $\\cos x = a$ має розв\'язок $x = (-1)^n \\arccos a + \\pi n$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! Формула $(-1)^n$ — для синуса. Для косинуса: $x = \\pm \\arccos a + 2\\pi n$.'
      },
      {
        question: 'Розв\'яжіть $\\sin x = \\dfrac{\\sqrt{2}}{2}$. Загальний розв\'язок:',
        options: [
          '$x = (-1)^n \\dfrac{\\pi}{4} + \\pi n, \\; n \\in \\mathbb{Z}$',
          '$x = \\dfrac{\\pi}{4} + 2\\pi n$',
          '$x = \\pm \\dfrac{\\pi}{4} + 2\\pi n$',
          '$x = \\dfrac{\\pi}{4} + \\pi n$'
        ],
        correct: 0,
        explanation: '$\\arcsin \\dfrac{\\sqrt{2}}{2} = \\dfrac{\\pi}{4}$. За формулою синуса: $x = (-1)^n \\dfrac{\\pi}{4} + \\pi n$.'
      },
      {
        question: 'Розв\'яжіть $\\cos x = -\\dfrac{1}{2}$. Загальний розв\'язок:',
        options: [
          '$x = \\pm \\dfrac{\\pi}{3} + 2\\pi n$',
          '$x = \\pm \\dfrac{2\\pi}{3} + 2\\pi n, \\; n \\in \\mathbb{Z}$',
          '$x = \\dfrac{2\\pi}{3} + \\pi n$',
          '$x = (-1)^n \\dfrac{2\\pi}{3} + \\pi n$'
        ],
        correct: 1,
        explanation: '$\\arccos(-\\dfrac{1}{2}) = \\dfrac{2\\pi}{3}$. За формулою косинуса: $x = \\pm \\dfrac{2\\pi}{3} + 2\\pi n$.'
      },
      {
        question: 'Скільки розв\'язків має $\\operatorname{tg} x = \\sqrt{3}$ на $[0; 2\\pi]$?',
        type: 'text_input',
        correct: ['2'],
        explanation: '$x = \\dfrac{\\pi}{3} + \\pi n$. На $[0; 2\\pi]$: $x = \\dfrac{\\pi}{3}$ і $x = \\dfrac{4\\pi}{3}$ — два розв\'язки.'
      },
      {
        question: 'Розв\'яжіть $\\sin x = -\\dfrac{1}{2}$ на $[0; 2\\pi]$. Більший розв\'язок:',
        options: ['$\\dfrac{7\\pi}{6}$', '$\\dfrac{11\\pi}{6}$', '$\\dfrac{5\\pi}{6}$', '$\\dfrac{\\pi}{6}$'],
        correct: 1,
        explanation: '$\\sin x = -\\dfrac{1}{2}$: $x = \\pi + \\dfrac{\\pi}{6} = \\dfrac{7\\pi}{6}$ і $x = 2\\pi - \\dfrac{\\pi}{6} = \\dfrac{11\\pi}{6}$. Більший: $\\dfrac{11\\pi}{6}$.'
      },
      {
        question: 'Рівняння $\\operatorname{tg} x = -1$ має загальний розв\'язок:',
        options: [
          '$x = -\\dfrac{\\pi}{4} + \\pi n, \\; n \\in \\mathbb{Z}$',
          '$x = \\dfrac{3\\pi}{4} + 2\\pi n$',
          '$x = \\pm \\dfrac{\\pi}{4} + \\pi n$',
          '$x = \\dfrac{\\pi}{4} + \\pi n$'
        ],
        correct: 0,
        explanation: '$\\operatorname{arctg}(-1) = -\\dfrac{\\pi}{4}$. Тому $x = -\\dfrac{\\pi}{4} + \\pi n$.'
      },
      {
        question: 'Розв\'яжіть $\\cos x = \\dfrac{\\sqrt{3}}{2}$. Найменший додатний розв\'язок:',
        type: 'text_input',
        correct: ['π/6', 'pi/6'],
        explanation: '$\\arccos \\dfrac{\\sqrt{3}}{2} = \\dfrac{\\pi}{6}$ — це і є найменший додатний розв\'язок.'
      },
      {
        question: 'Рівняння $\\sin x = -1$ на $[0; 2\\pi]$ має розв\'язок $x = $:',
        type: 'text_input',
        correct: ['3π/2', '3pi/2'],
        explanation: '$\\sin x = -1$ при $x = \\dfrac{3\\pi}{2}$ на $[0; 2\\pi]$.'
      }
    ]
  },

  // ===== SECTION 5: MORE =====
  {
    id: '5-4-derivative-rules',
    section: 5,
    sectionName: 'Похідна та її застосування',
    title: 'Правила обчислення похідних',
    description: 'Похідна суми, добутку, частки, таблиця похідних',
    icon: "d/dx",
    questions: [
      {
        question: 'Чому дорівнює $(f + g)\'$?',
        options: ['$f\' \\cdot g\'$', '$f\' + g\'$', '$f \\cdot g\' + f\' \\cdot g$', '$(f + g) \\cdot (f\' + g\')$'],
        correct: 1,
        explanation: 'Похідна суми = сума похідних: $(f + g)\' = f\' + g\'$.'
      },
      {
        question: 'Яка формула похідної добутку $(f \\cdot g)\'$?',
        options: [
          '$f\' \\cdot g\'$',
          '$f\' \\cdot g + f \\cdot g\'$',
          '$f \\cdot g\' - f\' \\cdot g$',
          '$(f + g) \\cdot (f\' + g\')$'
        ],
        correct: 1,
        explanation: '$(f \\cdot g)\' = f\' \\cdot g + f \\cdot g\'$ — правило Лейбніца.'
      },
      {
        question: 'Чому дорівнює $(5x^3 + 2x)\'$?',
        type: 'text_input',
        correct: ['15x²+2', '15x^2+2', '15x² + 2'],
        explanation: '$(5x^3)\' + (2x)\' = 15x^2 + 2$.'
      },
      {
        question: 'Чому дорівнює $(e^x)\'$?',
        options: ['$x \\cdot e^{x-1}$', '$e^x$', '$e^{x-1}$', '$x \\cdot e^x$'],
        correct: 1,
        explanation: '$(e^x)\' = e^x$ — експонента — єдина функція, похідна якої дорівнює їй самій.'
      },
      {
        question: 'Чому дорівнює $(\\ln x)\'$?',
        options: ['$\\ln x$', '$e^x$', '$\\dfrac{1}{x}$', '$x$'],
        correct: 2,
        explanation: '$(\\ln x)\' = \\dfrac{1}{x}$ — табличне значення.'
      },
      {
        question: 'Чому дорівнює $(C \\cdot f(x))\'$, де $C$ — стала?',
        options: ['$C$', '$f\'(x)$', '$C \\cdot f\'(x)$', '$0$'],
        correct: 2,
        explanation: 'Сталий множник виноситься за знак похідної: $(C \\cdot f)\' = C \\cdot f\'$.'
      },
      {
        question: 'Яка формула похідної частки $\\left(\\dfrac{f}{g}\\right)\'$?',
        options: [
          '$\\dfrac{f\'}{g\'}$',
          '$\\dfrac{f\' \\cdot g - f \\cdot g\'}{g^2}$',
          '$\\dfrac{f\' \\cdot g + f \\cdot g\'}{g^2}$',
          '$\\dfrac{f \\cdot g\' - f\' \\cdot g}{g^2}$'
        ],
        correct: 1,
        explanation: '$\\left(\\dfrac{f}{g}\\right)\' = \\dfrac{f\' \\cdot g - f \\cdot g\'}{g^2}$.'
      },
      {
        question: 'Чому дорівнює $(\\operatorname{tg} x)\'$?',
        options: ['$\\dfrac{1}{\\cos x}$', '$\\dfrac{1}{\\cos^2 x}$', '$-\\dfrac{1}{\\sin^2 x}$', '$\\dfrac{1}{\\sin^2 x}$'],
        correct: 1,
        explanation: '$(\\operatorname{tg} x)\' = \\dfrac{1}{\\cos^2 x}$.'
      },
      {
        question: 'Похідна $y = x^4 - 3x^2 + 7$ дорівнює $y\' = 4x^3 - 6x$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: '$(x^4)\' = 4x^3$, $(3x^2)\' = 6x$, $(7)\' = 0$. Тому $y\' = 4x^3 - 6x$. Правильно!'
      },
      {
        question: 'Обчисліть $f\'(1)$, якщо $f(x) = x^3 + x$:',
        type: 'text_input',
        correct: '4',
        explanation: '$f\'(x) = 3x^2 + 1$. $f\'(1) = 3 \\cdot 1 + 1 = 4$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $(f \\cdot g)\' = f\' \\cdot g\'$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! $(f \\cdot g)\' = f\' \\cdot g + f \\cdot g\'$ — правило добутку. Похідна добутку НЕ дорівнює добутку похідних!'
      },
      {
        question: 'Правильно чи неправильно: $(e^x)\' = e^x$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! Експонента — єдина функція, похідна якої дорівнює їй самій.'
      },
      {
        question: 'Обчисліть $(x^2 \\cdot \\sin x)\'$:',
        options: [
          '$2x \\cdot \\cos x$',
          '$2x \\cdot \\sin x + x^2 \\cdot \\cos x$',
          '$x^2 \\cdot \\cos x$',
          '$2x \\cdot \\sin x - x^2 \\cdot \\cos x$'
        ],
        correct: 1,
        explanation: 'За правилом добутку: $(x^2)\' \\cdot \\sin x + x^2 \\cdot (\\sin x)\' = 2x\\sin x + x^2\\cos x$.'
      },
      {
        question: 'Обчисліть $f\'(0)$, якщо $f(x) = e^x + \\sin x$:',
        type: 'text_input',
        correct: ['2'],
        explanation: '$f\'(x) = e^x + \\cos x$. $f\'(0) = e^0 + \\cos 0 = 1 + 1 = 2$.'
      },
      {
        question: 'Чому дорівнює $(\\dfrac{x^2}{x+1})\'$ у спрощеному вигляді?',
        options: [
          '$\\dfrac{x^2 + 2x}{(x+1)^2}$',
          '$\\dfrac{2x}{x+1}$',
          '$\\dfrac{x(x+2)}{(x+1)^2}$',
          '$2x - 1$'
        ],
        correct: 0,
        explanation: '$\\left(\\dfrac{x^2}{x+1}\\right)\' = \\dfrac{2x(x+1) - x^2 \\cdot 1}{(x+1)^2} = \\dfrac{x^2 + 2x}{(x+1)^2}$.'
      },
      {
        question: 'Обчисліть $(2x^3 - 4x + 7)\'$:',
        options: ['$6x^2 - 4$', '$6x^2 + 7$', '$2x^2 - 4$', '$6x^2 - 4x$'],
        correct: 0,
        explanation: '$(2x^3)\' = 6x^2$, $(-4x)\' = -4$, $(7)\' = 0$. Разом: $6x^2 - 4$.'
      },
      {
        question: 'Чому дорівнює $(\\operatorname{ctg} x)\'$?',
        options: ['$\\dfrac{1}{\\sin^2 x}$', '$-\\dfrac{1}{\\sin^2 x}$', '$\\dfrac{1}{\\cos^2 x}$', '$-\\dfrac{1}{\\cos^2 x}$'],
        correct: 1,
        explanation: '$(\\operatorname{ctg} x)\' = -\\dfrac{1}{\\sin^2 x}$.'
      },
      {
        question: 'Обчисліть $f\'(2)$, якщо $f(x) = x^4 - 3x^2 + 5x$:',
        type: 'text_input',
        correct: ['25'],
        explanation: '$f\'(x) = 4x^3 - 6x + 5$. $f\'(2) = 4 \\cdot 8 - 12 + 5 = 32 - 12 + 5 = 25$.'
      },
      {
        type: 'matching',
        question: 'Встановіть відповідність: функція — похідна',
        pairs: [
          ['$e^x$', '$e^x$'],
          ['$\\ln x$', '$\\dfrac{1}{x}$'],
          ['$\\operatorname{tg} x$', '$\\dfrac{1}{\\cos^2 x}$'],
          ['$x^n$', '$nx^{n-1}$']
        ],
        explanation: 'Таблиця похідних — необхідна база для обчислень.'
      }
    ]
  },

  {
    id: '5-7-extrema',
    section: 5,
    sectionName: 'Похідна та її застосування',
    title: 'Зростання, спадання, екстремуми',
    description: 'Дослідження функції за допомогою похідної',
    icon: '⛰️',
    questions: [
      {
        question: 'Функція зростає на проміжку, де:',
        options: ['$f\'(x) < 0$', '$f\'(x) > 0$', '$f\'(x) = 0$', '$f\'\'(x) > 0$'],
        correct: 1,
        explanation: 'Якщо $f\'(x) > 0$ на проміжку, то функція на ньому зростає.'
      },
      {
        question: 'Функція спадає на проміжку, де:',
        options: ['$f\'(x) > 0$', '$f\'(x) = 0$', '$f\'(x) < 0$', '$f(x) < 0$'],
        correct: 2,
        explanation: 'Якщо $f\'(x) < 0$ на проміжку, то функція на ньому спадає.'
      },
      {
        question: 'Точка $x_0$ — точка максимуму, якщо:',
        options: [
          '$f\'$ змінює знак з $+$ на $-$ при проходженні через $x_0$',
          '$f\'$ змінює знак з $-$ на $+$ при проходженні через $x_0$',
          '$f\'(x_0) > 0$',
          '$f(x_0) > 0$'
        ],
        correct: 0,
        explanation: 'Максимум: похідна змінює знак з "+" на "−". Функція росла, потім почала спадати.'
      },
      {
        question: 'Знайдіть критичні точки $f(x) = x^3 - 3x$:',
        options: ['$x = 0$', '$x = 1$ і $x = -1$', '$x = 3$ і $x = -3$', '$x = \\sqrt{3}$'],
        correct: 1,
        explanation: '$f\'(x) = 3x^2 - 3 = 0 \\Rightarrow x^2 = 1 \\Rightarrow x = \\pm 1$.'
      },
      {
        question: 'Для $f(x) = x^3 - 3x$: $x = -1$ є точкою максимуму, $x = 1$ — точкою мінімуму.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: '$f\'(x) = 3(x-1)(x+1)$. При $x = -1$: знак змінюється з $+$ на $-$ (максимум). При $x = 1$: з $-$ на $+$ (мінімум).'
      },
      {
        question: 'На якому проміжку функція $f(x) = x^2 - 4x$ спадає?',
        options: ['$(2; +\\infty)$', '$(-\\infty; 2)$', '$(-\\infty; 0)$', '$(0; 4)$'],
        correct: 1,
        explanation: '$f\'(x) = 2x - 4 < 0$ при $x < 2$, тому функція спадає на $(-\\infty; 2)$.'
      },
      {
        question: 'Знайдіть мінімум функції $f(x) = x^2 - 6x + 10$:',
        type: 'text_input',
        correct: '1',
        explanation: '$f\'(x) = 2x - 6 = 0 \\Rightarrow x = 3$. $f(3) = 9 - 18 + 10 = 1$.'
      },
      {
        question: 'Стаціонарні точки функції — це точки, де:',
        options: ['$f(x) = 0$', '$f\'(x) = 0$', '$f\'\'(x) = 0$', '$f(x) = f\'(x)$'],
        correct: 1,
        explanation: 'Стаціонарні точки — точки, де $f\'(x) = 0$ (похідна дорівнює нулю).'
      },
      {
        question: 'Кожна стаціонарна точка є точкою екстремуму.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Ні! Наприклад, $f(x) = x^3$: $f\'(0) = 0$, але $x = 0$ — точка перегину, не екстремуму.'
      },
      {
        question: 'На якому проміжку зростає $f(x) = -x^2 + 4x$?',
        options: ['$(2; +\\infty)$', '$(-\\infty; 2)$', '$(-\\infty; +\\infty)$', '$(0; 4)$'],
        correct: 1,
        explanation: '$f\'(x) = -2x + 4 > 0$ при $x < 2$, тому зростає на $(-\\infty; 2)$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: якщо $f\'(x_0) = 0$, то $x_0$ обов\'язково є точкою екстремуму.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! Наприклад, $f(x) = x^3$: $f\'(0) = 0$, але $x = 0$ — точка перегину, не екстремуму.'
      },
      {
        question: 'Правильно чи неправильно: точка мінімуму — це точка, де $f\'$ змінює знак з "$-$" на "$+$".',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! Функція спадала ($f\' < 0$), потім почала зростати ($f\' > 0$) — це мінімум.'
      },
      {
        question: 'Знайдіть критичні точки $f(x) = x^3 - 12x$:',
        options: ['$x = 0$', '$x = \\pm 2$', '$x = \\pm 3$', '$x = \\pm 4$'],
        correct: 1,
        explanation: '$f\'(x) = 3x^2 - 12 = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2$.'
      },
      {
        question: 'Знайдіть значення максимуму $f(x) = -x^2 + 8x - 12$:',
        type: 'text_input',
        correct: ['4'],
        explanation: '$f\'(x) = -2x + 8 = 0 \\Rightarrow x = 4$. $f(4) = -16 + 32 - 12 = 4$.'
      },
      {
        question: 'На якому проміжку спадає $f(x) = x^3 - 3x^2$?',
        options: ['$(-\\infty; 0)$', '$(0; 2)$', '$(2; +\\infty)$', '$(-\\infty; 2)$'],
        correct: 1,
        explanation: '$f\'(x) = 3x^2 - 6x = 3x(x - 2) < 0$ при $0 < x < 2$.'
      },
      {
        question: 'Функція $f(x) = 2x^3 - 9x^2 + 12x$ має точку максимуму при $x = $:',
        type: 'text_input',
        correct: ['1'],
        explanation: '$f\'(x) = 6x^2 - 18x + 12 = 6(x-1)(x-2)$. $f\'$ змінює знак з "$+$" на "$-$" при $x = 1$ — максимум.'
      },
      {
        question: 'Знайдіть мінімум $f(x) = x^2 + 4x + 7$:',
        type: 'text_input',
        correct: ['3'],
        explanation: '$f\'(x) = 2x + 4 = 0 \\Rightarrow x = -2$. $f(-2) = 4 - 8 + 7 = 3$.'
      },
      {
        question: 'На якому проміжку зростає $f(x) = x^4 - 2x^2$?',
        options: ['$(-1; 0) \\cup (1; +\\infty)$', '$(-\\infty; -1) \\cup (0; 1)$', '$(-\\infty; 0)$', '$(0; +\\infty)$'],
        correct: 0,
        explanation: '$f\'(x) = 4x^3 - 4x = 4x(x-1)(x+1) > 0$ при $x \\in (-1; 0) \\cup (1; +\\infty)$.'
      }
    ]
  },

  // ===== SECTION 1: NUMBER SETS =====
  {
    id: '1-2-number-sets',
    section: 1,
    sectionName: 'Множини. Функції',
    title: 'Числові множини: N, Z, Q, R',
    description: 'Натуральні, цілі, раціональні та дійсні числа',
    icon: 'ℕ',
    questions: [
      {
        question: 'Яке з наступних чисел НЕ належить множині натуральних чисел $\\mathbb{N}$?',
        options: ['$1$', '$0$', '$17$', '$100$'],
        correct: 1,
        explanation: 'Множина натуральних чисел $\\mathbb{N} = \\{1, 2, 3, ...\\}$. Нуль не є натуральним числом.'
      },
      {
        question: 'Множина цілих чисел $\\mathbb{Z}$ включає:',
        options: [
          'Тільки додатні числа',
          'Додатні та від\'ємні цілі числа і нуль',
          'Тільки від\'ємні числа',
          'Усі дроби'
        ],
        correct: 1,
        explanation: '$\\mathbb{Z} = \\{..., -3, -2, -1, 0, 1, 2, 3, ...\\}$ — це всі цілі числа.'
      },
      {
        question: 'Число $\\sqrt{2}$ належить множині:',
        options: ['$\\mathbb{N}$', '$\\mathbb{Z}$', '$\\mathbb{Q}$', '$\\mathbb{R}$'],
        correct: 3,
        explanation: '$\\sqrt{2}$ — ірраціональне число. Воно не є раціональним, але належить множині дійсних чисел $\\mathbb{R}$.'
      },
      {
        question: 'Яке з тверджень правильне?',
        options: [
          '$\\mathbb{R} \\subset \\mathbb{Q}$',
          '$\\mathbb{Q} \\subset \\mathbb{Z}$',
          '$\\mathbb{N} \\subset \\mathbb{Z}$',
          '$\\mathbb{Z} \\subset \\mathbb{N}$'
        ],
        correct: 2,
        explanation: 'Кожне натуральне число є цілим, тому $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.'
      },
      {
        question: 'Раціональне число — це число, яке можна подати у вигляді:',
        options: [
          'Нескінченного десяткового дробу',
          'Дробу $\\dfrac{m}{n}$, де $m \\in \\mathbb{Z}$, $n \\in \\mathbb{N}$',
          'Кореня з цілого числа',
          'Суми двох натуральних чисел'
        ],
        correct: 1,
        explanation: 'Раціональне число — це $\\dfrac{m}{n}$, де $m$ — ціле, $n$ — натуральне число.'
      },
      {
        question: 'Число $-5$ належить множині $\\mathbb{N}$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: '$-5$ — від\'ємне число, а $\\mathbb{N}$ містить лише додатні цілі числа: $1, 2, 3, ...$'
      },
      {
        question: 'Число $0{,}333... = 0{,}(3)$ є раціональним числом.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: '$0{,}(3) = \\dfrac{1}{3}$ — це раціональне число, бо його можна записати як дріб.'
      },
      {
        question: 'Запишіть найменше натуральне число.',
        type: 'text_input',
        correct: '1',
        explanation: 'Найменше натуральне число — $1$. Множина $\\mathbb{N} = \\{1, 2, 3, ...\\}$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $\\dfrac{7}{3} \\in \\mathbb{Z}$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! $\\dfrac{7}{3}$ — не ціле число. Воно належить $\\mathbb{Q}$ (раціональні), але не $\\mathbb{Z}$.'
      },
      {
        question: 'Правильно чи неправильно: $\\pi \\in \\mathbb{Q}$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! $\\pi$ — ірраціональне число. Воно належить $\\mathbb{R}$, але не $\\mathbb{Q}$.'
      },
      {
        question: 'Яке з чисел є ірраціональним?',
        options: ['$0{,}75$', '$\\dfrac{22}{7}$', '$\\sqrt{5}$', '$-3$'],
        correct: 2,
        explanation: '$\\sqrt{5}$ — ірраціональне (не можна подати як дріб). Решта — раціональні числа.'
      },
      {
        question: 'Число $-7$ належить множині:',
        options: ['$\\mathbb{N}$', '$\\mathbb{Z}$, але не $\\mathbb{N}$', '$\\mathbb{Q}$, але не $\\mathbb{Z}$', '$\\mathbb{R}$, але не $\\mathbb{Q}$'],
        correct: 1,
        explanation: '$-7$ — ціле від\'ємне число. Воно належить $\\mathbb{Z}$, але не $\\mathbb{N}$ (натуральні — тільки додатні).'
      },
      {
        question: 'Яка правильна ієрархія числових множин?',
        options: [
          '$\\mathbb{R} \\subset \\mathbb{Q} \\subset \\mathbb{Z} \\subset \\mathbb{N}$',
          '$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$',
          '$\\mathbb{N} \\subset \\mathbb{Q} \\subset \\mathbb{Z} \\subset \\mathbb{R}$',
          '$\\mathbb{Z} \\subset \\mathbb{N} \\subset \\mathbb{Q} \\subset \\mathbb{R}$'
        ],
        correct: 1,
        explanation: '$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$ — кожна наступна множина "ширша".'
      },
      {
        question: 'Число $0{,}121212... = 0{,}(12)$ є раціональним. Запишіть його у вигляді дробу:',
        type: 'text_input',
        correct: ['4/33', '12/99'],
        explanation: '$0{,}(12) = \\dfrac{12}{99} = \\dfrac{4}{33}$.'
      },
      {
        question: 'Яке з тверджень хибне?',
        options: [
          '$0 \\in \\mathbb{Z}$',
          '$\\sqrt{4} \\in \\mathbb{N}$',
          '$\\sqrt{3} \\in \\mathbb{Q}$',
          '$-\\dfrac{2}{5} \\in \\mathbb{Q}$'
        ],
        correct: 2,
        explanation: '$\\sqrt{3}$ — ірраціональне число, тому $\\sqrt{3} \\notin \\mathbb{Q}$.'
      },
      {
        type: 'matching',
        question: 'Встановіть відповідність: число — найменша множина, якій воно належить',
        pairs: [
          ['$5$', '$\\mathbb{N}$'],
          ['$-3$', '$\\mathbb{Z}$'],
          ['$\\dfrac{2}{3}$', '$\\mathbb{Q}$'],
          ['$\\sqrt{7}$', '$\\mathbb{R}$']
        ],
        explanation: 'Кожне число належить найменшій множині, яка його "вміщує".'
      }
    ]
  },

  // ===== SECTION 1: GRAPHS =====
  {
    id: '1-5-graphs',
    section: 1,
    sectionName: 'Множини. Функції',
    title: 'Способи задання функції. Графік функції',
    description: 'Аналітичний, табличний, графічний способи задання. Побудова графіків',
    icon: '📈',
    questions: [
      {
        question: 'Який спосіб задання функції використовує формулу $y = 2x + 3$?',
        options: ['Табличний', 'Графічний', 'Аналітичний', 'Словесний'],
        correct: 2,
        explanation: 'Аналітичний спосіб — це задання функції за допомогою формули (рівності).'
      },
      {
        question: 'Графік функції $y = x^2$ — це:',
        options: ['Пряма лінія', 'Парабола', 'Гіпербола', 'Коло'],
        correct: 1,
        explanation: 'Графік $y = x^2$ — це парабола з вершиною в початку координат, вітки вгору.'
      },
      {
        question: 'Графік якої функції проходить через початок координат?',
        options: ['$y = x + 1$', '$y = 2x$', '$y = x^2 - 1$', '$y = \\dfrac{1}{x}$'],
        correct: 1,
        explanation: 'При $x = 0$: $y = 2 \\cdot 0 = 0$, тому точка $(0; 0)$ належить графіку $y = 2x$.'
      },
      {
        question: 'Яка з точок належить графіку функції $y = x^2 - 4$?',
        options: ['$(1; -3)$', '$(2; 1)$', '$(0; 4)$', '$(3; 3)$'],
        correct: 0,
        explanation: '$y(1) = 1^2 - 4 = -3$, тому точка $(1; -3)$ належить графіку.'
      },
      {
        question: 'Область визначення функції $y = \\dfrac{1}{x - 2}$:',
        options: [
          '$(-\\infty; +\\infty)$',
          '$(-\\infty; 2) \\cup (2; +\\infty)$',
          '$(2; +\\infty)$',
          '$(-\\infty; 0) \\cup (0; +\\infty)$'
        ],
        correct: 1,
        explanation: 'Знаменник не може дорівнювати нулю: $x - 2 \\neq 0$, тому $x \\neq 2$.'
      },
      {
        question: 'Область значень функції $y = x^2$:',
        options: ['$(-\\infty; +\\infty)$', '$[0; +\\infty)$', '$(0; +\\infty)$', '$[-1; 1]$'],
        correct: 1,
        explanation: 'Квадрат будь-якого числа невід\'ємний, тому $y \\geq 0$. Область значень: $[0; +\\infty)$.'
      },
      {
        question: 'При зсуві графіка $y = x^2$ на 3 одиниці вгору отримаємо графік:',
        options: ['$y = x^2 - 3$', '$y = (x - 3)^2$', '$y = x^2 + 3$', '$y = (x + 3)^2$'],
        correct: 2,
        explanation: 'Зсув графіка на $a$ одиниць вгору: $y = f(x) + a$. Отже $y = x^2 + 3$.'
      },
      {
        question: 'Вертикальна пряма може перетинати графік функції щонайбільше в одній точці.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Так! Це означає, що кожному $x$ відповідає не більше одного значення $y$ — це означення функції.'
      },
      {
        question: 'Графік $y = |x|$ симетричний відносно осі $Oy$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: '$|{-x}| = |x|$, тому функція $y = |x|$ парна і її графік симетричний відносно осі $Oy$.'
      },
      {
        question: 'Чому дорівнює $f(3)$, якщо $f(x) = 2x - 1$?',
        type: 'text_input',
        correct: '5',
        explanation: '$f(3) = 2 \\cdot 3 - 1 = 6 - 1 = 5$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: зсув графіка $y = x^2$ вправо на $2$ дає $y = (x + 2)^2$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! Зсув вправо на $2$: $y = (x - 2)^2$. Зсув вліво: $y = (x + 2)^2$. Знак протилежний!'
      },
      {
        question: 'Правильно чи неправильно: графік $y = -x^2$ — парабола з вітками вниз.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! Від\'ємний коефіцієнт при $x^2$ "перевертає" параболу вниз.'
      },
      {
        question: 'Яка з точок належить графіку $y = x^2 + 2x - 3$?',
        options: ['$(0; -3)$', '$(1; 1)$', '$(2; 3)$', '$(-1; 0)$'],
        correct: 0,
        explanation: '$y(0) = 0 + 0 - 3 = -3$. Точка $(0; -3)$ належить графіку.'
      },
      {
        question: 'При зсуві графіка $y = x^2$ на $4$ одиниці вниз отримаємо:',
        options: ['$y = x^2 + 4$', '$y = (x - 4)^2$', '$y = x^2 - 4$', '$y = (x + 4)^2$'],
        correct: 2,
        explanation: 'Зсув вниз на $a$: $y = f(x) - a$. Тому $y = x^2 - 4$.'
      },
      {
        question: 'Графік $y = \\dfrac{1}{x}$ розташований у:',
        options: ['I і II чвертях', 'I і III чвертях', 'I і IV чвертях', 'Усіх чвертях'],
        correct: 1,
        explanation: 'При $x > 0$: $y > 0$ (I чверть). При $x < 0$: $y < 0$ (III чверть).'
      },
      {
        question: 'Чому дорівнює $f(-1)$, якщо $f(x) = x^3 + 2x$?',
        type: 'text_input',
        correct: ['-3'],
        explanation: '$f(-1) = (-1)^3 + 2(-1) = -1 - 2 = -3$.'
      },
      {
        question: 'Вершина параболи $y = (x - 3)^2 + 1$ знаходиться в точці:',
        options: ['$(3; 1)$', '$(-3; 1)$', '$(1; 3)$', '$(3; -1)$'],
        correct: 0,
        explanation: '$y = (x - 3)^2 + 1$: зсув вправо на $3$ і вгору на $1$. Вершина $(3; 1)$.'
      },
      {
        question: 'Область визначення $y = \\sqrt{4 - x}$:',
        options: ['$(4; +\\infty)$', '$(-\\infty; 4]$', '$[4; +\\infty)$', '$(-\\infty; 4)$'],
        correct: 1,
        explanation: '$4 - x \\geq 0 \\Rightarrow x \\leq 4$. Область визначення: $(-\\infty; 4]$.'
      }
    ]
  },

  // ===== SECTION 2: RATIONAL EXPONENT =====
  {
    id: '2-3-rational-exponent',
    section: 2,
    sectionName: 'Степенева функція',
    title: 'Степінь з раціональним показником',
    description: 'Означення та властивості степеня з дробовим показником',
    icon: '📐',
    questions: [
      {
        question: 'Чому дорівнює $8^{\\frac{1}{3}}$?',
        options: ['$2$', '$3$', '$4$', '$\\dfrac{8}{3}$'],
        correct: 0,
        explanation: '$8^{\\frac{1}{3}} = \\sqrt[3]{8} = 2$, бо $2^3 = 8$.'
      },
      {
        question: 'Як спростити $a^{\\frac{2}{3}}$?',
        options: ['$\\sqrt[3]{a^2}$', '$\\sqrt{a^3}$', '$\\dfrac{a^2}{3}$', '$3\\sqrt{a}$'],
        correct: 0,
        explanation: '$a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$, тому $a^{\\frac{2}{3}} = \\sqrt[3]{a^2}$.'
      },
      {
        question: 'Спростіть: $x^{\\frac{1}{2}} \\cdot x^{\\frac{1}{3}}$',
        options: ['$x^{\\frac{1}{6}}$', '$x^{\\frac{5}{6}}$', '$x^{\\frac{2}{5}}$', '$x^{\\frac{1}{5}}$'],
        correct: 1,
        explanation: '$x^{\\frac{1}{2}} \\cdot x^{\\frac{1}{3}} = x^{\\frac{1}{2}+\\frac{1}{3}} = x^{\\frac{3+2}{6}} = x^{\\frac{5}{6}}$.'
      },
      {
        question: 'Чому дорівнює $27^{\\frac{2}{3}}$?',
        options: ['$3$', '$9$', '$18$', '$6$'],
        correct: 1,
        explanation: '$27^{\\frac{2}{3}} = (\\sqrt[3]{27})^2 = 3^2 = 9$.'
      },
      {
        question: 'Спростіть: $\\dfrac{a^{\\frac{3}{4}}}{a^{\\frac{1}{4}}}$',
        options: ['$a^3$', '$a^{\\frac{1}{2}}$', '$a^{\\frac{3}{16}}$', '$a$'],
        correct: 1,
        explanation: '$\\dfrac{a^{\\frac{3}{4}}}{a^{\\frac{1}{4}}} = a^{\\frac{3}{4}-\\frac{1}{4}} = a^{\\frac{2}{4}} = a^{\\frac{1}{2}}$.'
      },
      {
        question: 'Що дорівнює $4^{-\\frac{1}{2}}$?',
        options: ['$-2$', '$\\dfrac{1}{2}$', '$2$', '$-\\dfrac{1}{2}$'],
        correct: 1,
        explanation: '$4^{-\\frac{1}{2}} = \\dfrac{1}{4^{\\frac{1}{2}}} = \\dfrac{1}{\\sqrt{4}} = \\dfrac{1}{2}$.'
      },
      {
        question: '$(a^{\\frac{1}{2}})^4 = a^2$ при $a > 0$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: '$(a^{\\frac{1}{2}})^4 = a^{\\frac{1}{2} \\cdot 4} = a^2$. Правильно!'
      },
      {
        question: '$0^{\\frac{1}{3}} = 1$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: '$0^{\\frac{1}{3}} = \\sqrt[3]{0} = 0$, а не $1$. Будь-яка додатна степінь нуля дорівнює нулю.'
      },
      {
        question: 'Обчисліть $16^{\\frac{3}{4}}$. Запишіть число.',
        type: 'text_input',
        correct: '8',
        explanation: '$16^{\\frac{3}{4}} = (\\sqrt[4]{16})^3 = 2^3 = 8$.'
      },
      {
        question: 'Обчисліть $9^{\\frac{1}{2}}$. Запишіть число.',
        type: 'text_input',
        correct: '3',
        explanation: '$9^{\\frac{1}{2}} = \\sqrt{9} = 3$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $a^{\\frac{1}{n}} = \\dfrac{a}{n}$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! $a^{\\frac{1}{n}} = \\sqrt[n]{a}$, а не $\\dfrac{a}{n}$. Дробовий показник — це корінь!'
      },
      {
        question: 'Правильно чи неправильно: $8^{\\frac{2}{3}} = 4$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! $8^{\\frac{2}{3}} = (\\sqrt[3]{8})^2 = 2^2 = 4$.'
      },
      {
        question: 'Обчисліть $32^{\\frac{2}{5}}$:',
        type: 'text_input',
        correct: ['4'],
        explanation: '$32^{\\frac{2}{5}} = (\\sqrt[5]{32})^2 = 2^2 = 4$.'
      },
      {
        question: 'Спростіть $(x^{\\frac{1}{3}})^6$:',
        options: ['$x^2$', '$x^{18}$', '$x^{\\frac{1}{2}}$', '$x^3$'],
        correct: 0,
        explanation: '$(x^{\\frac{1}{3}})^6 = x^{\\frac{6}{3}} = x^2$.'
      },
      {
        question: 'Обчисліть $25^{-\\frac{1}{2}}$:',
        options: ['$-5$', '$5$', '$\\dfrac{1}{5}$', '$-\\dfrac{1}{5}$'],
        correct: 2,
        explanation: '$25^{-\\frac{1}{2}} = \\dfrac{1}{25^{\\frac{1}{2}}} = \\dfrac{1}{\\sqrt{25}} = \\dfrac{1}{5}$.'
      },
      {
        question: 'Спростіть $\\dfrac{a^{\\frac{2}{3}} \\cdot a^{\\frac{1}{6}}}{a^{\\frac{1}{2}}}$:',
        options: ['$a^{\\frac{1}{3}}$', '$a$', '$a^{\\frac{1}{2}}$', '$a^{\\frac{5}{6}}$'],
        correct: 0,
        explanation: '$\\dfrac{a^{\\frac{2}{3}} \\cdot a^{\\frac{1}{6}}}{a^{\\frac{1}{2}}} = a^{\\frac{2}{3}+\\frac{1}{6}-\\frac{1}{2}} = a^{\\frac{4+1-3}{6}} = a^{\\frac{2}{6}} = a^{\\frac{1}{3}}$.'
      },
      {
        question: 'Обчисліть $64^{\\frac{2}{3}}$:',
        type: 'text_input',
        correct: ['16'],
        explanation: '$64^{\\frac{2}{3}} = (\\sqrt[3]{64})^2 = 4^2 = 16$.'
      },
      {
        question: 'Обчисліть $100^{\\frac{3}{2}}$:',
        type: 'text_input',
        correct: ['1000'],
        explanation: '$100^{\\frac{3}{2}} = (\\sqrt{100})^3 = 10^3 = 1000$.'
      },
      {
        question: 'Спростіть $x^{\\frac{1}{4}} \\cdot x^{\\frac{3}{4}}$:',
        options: ['$x^{\\frac{3}{16}}$', '$x^{\\frac{1}{2}}$', '$x$', '$x^{\\frac{4}{4}}$'],
        correct: 2,
        explanation: '$x^{\\frac{1}{4}} \\cdot x^{\\frac{3}{4}} = x^{\\frac{1}{4}+\\frac{3}{4}} = x^1 = x$.'
      }
    ]
  },

  // ===== SECTION 2: EQUATIONS WITH EXPONENTS =====
  {
    id: '2-5-equations',
    section: 2,
    sectionName: 'Степенева функція',
    title: 'Рівняння та нерівності зі степенями',
    description: 'Розв\'язування степеневих рівнянь та нерівностей',
    icon: '⚖️',
    questions: [
      {
        question: 'Розв\'яжіть рівняння $x^2 = 9$:',
        options: ['$x = 3$', '$x = -3$', '$x = \\pm 3$', '$x = 81$'],
        correct: 2,
        explanation: '$x^2 = 9 \\Rightarrow x = \\pm\\sqrt{9} = \\pm 3$. Обидва корені підходять.'
      },
      {
        question: 'Скільки коренів має рівняння $x^3 = -8$?',
        options: ['Жодного', 'Один', 'Два', 'Три'],
        correct: 1,
        explanation: '$x^3 = -8 \\Rightarrow x = \\sqrt[3]{-8} = -2$. Кубічний корінь з від\'ємного числа існує і єдиний.'
      },
      {
        question: 'Розв\'яжіть нерівність $x^2 \\leq 16$:',
        options: ['$x \\leq 4$', '$x \\geq -4$', '$-4 \\leq x \\leq 4$', '$x \\leq -4$ або $x \\geq 4$'],
        correct: 2,
        explanation: '$x^2 \\leq 16 \\Leftrightarrow |x| \\leq 4 \\Leftrightarrow -4 \\leq x \\leq 4$.'
      },
      {
        question: 'Рівняння $x^4 = -1$ має:',
        options: ['Один корінь', 'Два корені', 'Жодного кореня', 'Чотири корені'],
        correct: 2,
        explanation: '$x^4 \\geq 0$ для будь-якого дійсного $x$, тому $x^4 = -1$ не має розв\'язків.'
      },
      {
        question: 'Розв\'яжіть: $\\sqrt{x} = 5$',
        options: ['$x = 5$', '$x = 25$', '$x = \\sqrt{5}$', '$x = 10$'],
        correct: 1,
        explanation: '$\\sqrt{x} = 5 \\Rightarrow x = 5^2 = 25$. Перевірка: $\\sqrt{25} = 5$ ✓'
      },
      {
        question: 'При яких значеннях $x$ виконується нерівність $x^3 > 27$?',
        options: ['$x > 3$', '$x > 9$', '$x < 3$', '$x > 27$'],
        correct: 0,
        explanation: '$x^3 > 27 \\Leftrightarrow x > \\sqrt[3]{27} = 3$. Функція $y = x^3$ зростає.'
      },
      {
        question: 'Рівняння $\\sqrt{x} = -3$ не має розв\'язків.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Арифметичний квадратний корінь завжди невід\'ємний: $\\sqrt{x} \\geq 0$, тому $\\sqrt{x} = -3$ неможливо.'
      },
      {
        question: 'Нерівність $x^2 > 0$ виконується для всіх дійсних $x$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Ні! При $x = 0$: $0^2 = 0$, а $0 > 0$ — хибно. Нерівність не виконується при $x = 0$.'
      },
      {
        question: 'Розв\'яжіть $x^3 = -27$. Запишіть відповідь.',
        type: 'text_input',
        correct: '-3',
        explanation: '$x^3 = -27 \\Rightarrow x = \\sqrt[3]{-27} = -3$, бо $(-3)^3 = -27$.'
      },
      {
        question: 'Розв\'яжіть $x^2 = 49$. Запишіть більший корінь.',
        type: 'text_input',
        correct: '7',
        explanation: '$x^2 = 49 \\Rightarrow x = \\pm 7$. Більший корінь: $7$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: рівняння $x^2 = -4$ має два розв\'язки: $x = \\pm 2i$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'В дійсних числах рівняння $x^2 = -4$ не має розв\'язків (квадрат завжди $\\geq 0$). Комплексні числа не вивчаються у 10 класі.'
      },
      {
        question: 'Правильно чи неправильно: $\\sqrt{x} = 4 \\Rightarrow x = 16$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! $\\sqrt{x} = 4$, підносимо до квадрата: $x = 16$. Перевірка: $\\sqrt{16} = 4$ ✓.'
      },
      {
        question: 'Розв\'яжіть $x^3 = 64$:',
        type: 'text_input',
        correct: ['4'],
        explanation: '$x = \\sqrt[3]{64} = 4$, бо $4^3 = 64$.'
      },
      {
        question: 'Скільки розв\'язків має рівняння $x^4 = 81$?',
        options: ['$1$', '$2$', '$3$', '$4$'],
        correct: 1,
        explanation: '$x^4 = 81 \\Rightarrow x^2 = 9$ (бо $x^4 \\geq 0$) $\\Rightarrow x = \\pm 3$. Два розв\'язки.'
      },
      {
        question: 'Розв\'яжіть нерівність $x^2 > 25$:',
        options: [
          '$x > 5$',
          '$x < -5$',
          '$x > 5$ або $x < -5$',
          '$-5 < x < 5$'
        ],
        correct: 2,
        explanation: '$x^2 > 25 \\Leftrightarrow |x| > 5 \\Leftrightarrow x > 5$ або $x < -5$.'
      },
      {
        question: 'Розв\'яжіть $\\sqrt{2x + 1} = 3$:',
        type: 'text_input',
        correct: ['4'],
        explanation: '$2x + 1 = 9 \\Rightarrow 2x = 8 \\Rightarrow x = 4$. Перевірка: $\\sqrt{9} = 3$ ✓.'
      },
      {
        question: 'При яких $x$ виконується $x^3 \\leq -1$?',
        options: ['$x \\leq -1$', '$x \\geq -1$', '$x \\leq 1$', '$x \\geq 1$'],
        correct: 0,
        explanation: '$x^3 \\leq -1 \\Leftrightarrow x \\leq \\sqrt[3]{-1} = -1$.'
      },
      {
        question: 'Рівняння $x^6 = 1$ має скільки дійсних розв\'язків?',
        type: 'text_input',
        correct: ['2'],
        explanation: '$x^6 = 1 \\Rightarrow |x| = 1 \\Rightarrow x = \\pm 1$. Два дійсні розв\'язки.'
      }
    ]
  },

  // ===== SECTION 5: COMPOSITE FUNCTION DERIVATIVE =====
  {
    id: '5-5-composite',
    section: 5,
    sectionName: 'Похідна та її застосування',
    title: 'Похідна складеної функції. Таблиця похідних',
    description: 'Правило ланцюжка, похідні елементарних функцій',
    icon: '🔗',
    questions: [
      {
        question: 'За правилом ланцюжка $(f(g(x)))\' = $',
        options: [
          '$f\'(x) \\cdot g\'(x)$',
          '$f\'(g(x)) \\cdot g\'(x)$',
          '$f(g\'(x))$',
          '$f\'(g(x)) + g\'(x)$'
        ],
        correct: 1,
        explanation: 'Правило ланцюжка: $(f(g(x)))\' = f\'(g(x)) \\cdot g\'(x)$ — похідна зовнішньої, помножена на похідну внутрішньої.'
      },
      {
        question: 'Знайдіть похідну $y = (3x + 1)^5$:',
        options: [
          '$5(3x+1)^4$',
          '$15(3x+1)^4$',
          '$5 \\cdot 3(3x+1)^4$',
          '$(3x+1)^4$'
        ],
        correct: 1,
        explanation: '$y\' = 5(3x+1)^4 \\cdot (3x+1)\' = 5(3x+1)^4 \\cdot 3 = 15(3x+1)^4$.'
      },
      {
        question: 'Похідна $y = \\sin(2x)$ дорівнює:',
        options: ['$\\cos(2x)$', '$2\\cos(2x)$', '$-\\cos(2x)$', '$2\\sin(2x)$'],
        correct: 1,
        explanation: '$y\' = \\cos(2x) \\cdot (2x)\' = 2\\cos(2x)$.'
      },
      {
        question: 'Знайдіть $y\'$, якщо $y = e^{3x}$:',
        options: ['$e^{3x}$', '$3e^{3x}$', '$e^{3}$', '$3xe^{3x}$'],
        correct: 1,
        explanation: '$y\' = e^{3x} \\cdot (3x)\' = 3e^{3x}$.'
      },
      {
        question: 'Похідна $y = \\sqrt{x^2 + 1}$ дорівнює:',
        options: [
          '$\\dfrac{1}{2\\sqrt{x^2+1}}$',
          '$\\dfrac{x}{\\sqrt{x^2+1}}$',
          '$\\dfrac{2x}{\\sqrt{x^2+1}}$',
          '$\\dfrac{1}{\\sqrt{x^2+1}}$'
        ],
        correct: 1,
        explanation: '$y\' = \\dfrac{1}{2\\sqrt{x^2+1}} \\cdot 2x = \\dfrac{x}{\\sqrt{x^2+1}}$.'
      },
      {
        question: 'Знайдіть похідну $y = \\cos^2(x)$:',
        options: [
          '$-2\\cos(x)\\sin(x)$',
          '$2\\cos(x)$',
          '$-\\sin^2(x)$',
          '$2\\cos(x)\\sin(x)$'
        ],
        correct: 0,
        explanation: '$y\' = 2\\cos(x) \\cdot (-\\sin(x)) = -2\\cos(x)\\sin(x) = -\\sin(2x)$.'
      },
      {
        question: 'Похідна $y = \\ln(5x)$ дорівнює:',
        options: ['$\\dfrac{5}{x}$', '$\\dfrac{1}{5x}$', '$\\dfrac{1}{x}$', '$\\dfrac{5}{5x}$'],
        correct: 2,
        explanation: '$y\' = \\dfrac{1}{5x} \\cdot 5 = \\dfrac{1}{x}$. Або $\\ln(5x) = \\ln 5 + \\ln x$, $(\\ln x)\' = \\dfrac{1}{x}$.'
      },
      {
        question: '$(\\sin(3x))\' = 3\\cos(3x)$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Так! $(\\sin(3x))\' = \\cos(3x) \\cdot 3 = 3\\cos(3x)$ за правилом ланцюжка.'
      },
      {
        question: '$(e^{-x})\' = e^{-x}$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: '$(e^{-x})\' = e^{-x} \\cdot (-x)\' = -e^{-x}$. Не забуваємо множити на похідну внутрішньої!'
      },
      {
        question: 'Чому дорівнює $(\\cos(\\pi x))\'$ при $x = 1$? Запишіть число.',
        type: 'text_input',
        correct: '0',
        explanation: '$(\\cos(\\pi x))\' = -\\sin(\\pi x) \\cdot \\pi$. При $x = 1$: $-\\pi\\sin(\\pi) = -\\pi \\cdot 0 = 0$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $(\\sin(5x))\' = \\cos(5x)$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! Потрібно помножити на похідну внутрішньої: $(\\sin(5x))\' = 5\\cos(5x)$.'
      },
      {
        question: 'Правильно чи неправильно: $(e^{2x})\' = 2e^{2x}$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! $(e^{2x})\' = e^{2x} \\cdot 2 = 2e^{2x}$.'
      },
      {
        question: 'Знайдіть $(\\cos(4x))\'$:',
        options: ['$\\sin(4x)$', '$-\\sin(4x)$', '$4\\sin(4x)$', '$-4\\sin(4x)$'],
        correct: 3,
        explanation: '$(\\cos(4x))\' = -\\sin(4x) \\cdot 4 = -4\\sin(4x)$.'
      },
      {
        question: 'Знайдіть $(\\sqrt{2x + 3})\'$:',
        options: [
          '$\\dfrac{1}{\\sqrt{2x+3}}$',
          '$\\dfrac{2}{\\sqrt{2x+3}}$',
          '$\\dfrac{1}{2\\sqrt{2x+3}}$',
          '$\\dfrac{2}{2\\sqrt{2x+3}}$'
        ],
        correct: 0,
        explanation: '$(\\sqrt{2x+3})\' = \\dfrac{1}{2\\sqrt{2x+3}} \\cdot 2 = \\dfrac{1}{\\sqrt{2x+3}}$.'
      },
      {
        question: 'Обчисліть $(\\ln(2x))\'$:',
        options: ['$\\dfrac{2}{x}$', '$\\dfrac{1}{2x}$', '$\\dfrac{1}{x}$', '$\\dfrac{2}{2x}$'],
        correct: 2,
        explanation: '$(\\ln(2x))\' = \\dfrac{1}{2x} \\cdot 2 = \\dfrac{1}{x}$.'
      },
      {
        question: 'Знайдіть $(e^{-3x})\'$ при $x = 0$:',
        type: 'text_input',
        correct: ['-3'],
        explanation: '$(e^{-3x})\' = -3e^{-3x}$. При $x = 0$: $-3 \\cdot e^0 = -3 \\cdot 1 = -3$.'
      },
      {
        question: 'Знайдіть $((2x+1)^4)\'$:',
        options: ['$4(2x+1)^3$', '$8(2x+1)^3$', '$2(2x+1)^3$', '$(2x+1)^3$'],
        correct: 1,
        explanation: '$((2x+1)^4)\' = 4(2x+1)^3 \\cdot 2 = 8(2x+1)^3$.'
      },
      {
        question: 'Знайдіть $(\\sin^3 x)\'$:',
        options: [
          '$3\\sin^2 x$',
          '$3\\sin^2 x \\cdot \\cos x$',
          '$\\cos^3 x$',
          '$3\\cos^2 x \\cdot \\sin x$'
        ],
        correct: 1,
        explanation: '$(\\sin^3 x)\' = 3\\sin^2 x \\cdot (\\sin x)\' = 3\\sin^2 x \\cdot \\cos x$.'
      }
    ]
  },

  // ===== SECTION 5: TANGENT LINE =====
  {
    id: '5-6-tangent',
    section: 5,
    sectionName: 'Похідна та її застосування',
    title: 'Рівняння дотичної до графіка функції',
    description: 'Геометричний зміст похідної, рівняння дотичної',
    icon: '📏',
    questions: [
      {
        question: 'Геометричний зміст похідної $f\'(a)$ — це:',
        options: [
          'Значення функції в точці $a$',
          'Кутовий коефіцієнт дотичної в точці $a$',
          'Площа під графіком',
          'Відстань від початку координат'
        ],
        correct: 1,
        explanation: '$f\'(a)$ — це кутовий коефіцієнт дотичної до графіка $y = f(x)$ у точці з абсцисою $x = a$.'
      },
      {
        question: 'Рівняння дотичної до графіка $y = f(x)$ у точці $x_0$ має вигляд:',
        options: [
          '$y = f(x_0) + f\'(x_0)$',
          '$y = f\'(x_0)(x - x_0)$',
          '$y = f(x_0) + f\'(x_0)(x - x_0)$',
          '$y = f(x_0) \\cdot x + f\'(x_0)$'
        ],
        correct: 2,
        explanation: 'Рівняння дотичної: $y = f(x_0) + f\'(x_0)(x - x_0)$.'
      },
      {
        question: 'Знайдіть кутовий коефіцієнт дотичної до $y = x^2$ в точці $x_0 = 3$:',
        options: ['$3$', '$6$', '$9$', '$2$'],
        correct: 1,
        explanation: '$y\' = 2x$. При $x_0 = 3$: $k = y\'(3) = 2 \\cdot 3 = 6$.'
      },
      {
        question: 'Дотична до $y = x^3$ в точці $x_0 = 1$ має рівняння:',
        options: [
          '$y = 3x - 2$',
          '$y = 3x + 1$',
          '$y = x - 1$',
          '$y = 3x - 3$'
        ],
        correct: 0,
        explanation: '$f(1) = 1$, $f\'(x) = 3x^2$, $f\'(1) = 3$. Дотична: $y = 1 + 3(x - 1) = 3x - 2$.'
      },
      {
        question: 'Якщо $f\'(a) = 0$, то дотична в точці $x = a$:',
        options: ['Вертикальна', 'Горизонтальна', 'Під кутом $45°$', 'Не існує'],
        correct: 1,
        explanation: 'Якщо $f\'(a) = 0$, кутовий коефіцієнт дорівнює нулю, тому дотична горизонтальна ($y = f(a)$).'
      },
      {
        question: 'Під яким кутом до осі $Ox$ нахилена дотична з кутовим коефіцієнтом $k = 1$?',
        options: ['$30°$', '$45°$', '$60°$', '$90°$'],
        correct: 1,
        explanation: '$k = \\operatorname{tg}(\\alpha)$. $\\operatorname{tg}(\\alpha) = 1 \\Rightarrow \\alpha = 45°$.'
      },
      {
        question: 'Дотична до $y = \\sin x$ в точці $x_0 = 0$ має рівняння $y = x$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: '$f(0) = \\sin 0 = 0$, $f\'(x) = \\cos x$, $f\'(0) = 1$. Дотична: $y = 0 + 1 \\cdot (x - 0) = x$. Правильно!'
      },
      {
        question: 'Чому дорівнює кутовий коефіцієнт дотичної до $y = x^2$ в точці $x_0 = -1$? Запишіть число.',
        type: 'text_input',
        correct: '-2',
        explanation: '$y\' = 2x$. При $x_0 = -1$: $k = 2 \\cdot (-1) = -2$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: рівняння дотичної — $y = f\'(x_0)(x - x_0)$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! Правильне рівняння: $y = f(x_0) + f\'(x_0)(x - x_0)$. Пропущений доданок $f(x_0)$!'
      },
      {
        question: 'Правильно чи неправильно: якщо дотична горизонтальна, то $f\'(x_0) = 0$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! Горизонтальна дотична означає кутовий коефіцієнт $= 0$, тобто $f\'(x_0) = 0$.'
      },
      {
        question: 'Знайдіть рівняння дотичної до $y = x^2$ в точці $x_0 = 2$:',
        options: ['$y = 4x - 4$', '$y = 2x$', '$y = 4x$', '$y = 4x + 4$'],
        correct: 0,
        explanation: '$f(2) = 4$, $f\'(x) = 2x$, $f\'(2) = 4$. Дотична: $y = 4 + 4(x-2) = 4x - 4$.'
      },
      {
        question: 'Кутовий коефіцієнт дотичної до $y = x^3$ при $x_0 = -1$:',
        type: 'text_input',
        correct: ['3'],
        explanation: '$f\'(x) = 3x^2$. $f\'(-1) = 3 \\cdot 1 = 3$.'
      },
      {
        question: 'Під яким кутом до осі $Ox$ нахилена дотична до $y = x^2$ в точці $x_0 = 0$?',
        options: ['$0°$ (горизонтальна)', '$45°$', '$90°$', '$30°$'],
        correct: 0,
        explanation: '$f\'(0) = 0$. Кутовий коефіцієнт $= 0$ означає горизонтальну дотичну (кут $0°$).'
      },
      {
        question: 'Рівняння дотичної до $y = \\cos x$ в точці $x_0 = \\dfrac{\\pi}{2}$:',
        options: ['$y = x - \\dfrac{\\pi}{2}$', '$y = -x + \\dfrac{\\pi}{2}$', '$y = \\dfrac{\\pi}{2} - x$', '$y = 0$'],
        correct: 1,
        explanation: '$f(\\dfrac{\\pi}{2}) = 0$, $f\'(x) = -\\sin x$, $f\'(\\dfrac{\\pi}{2}) = -1$. Дотична: $y = 0 + (-1)(x - \\dfrac{\\pi}{2}) = -x + \\dfrac{\\pi}{2}$.'
      },
      {
        question: 'Знайдіть рівняння дотичної до $y = \\sqrt{x}$ в точці $x_0 = 4$:',
        options: [
          '$y = \\dfrac{1}{4}x + 1$',
          '$y = \\dfrac{1}{2}x$',
          '$y = \\dfrac{1}{4}x$',
          '$y = 4x - 14$'
        ],
        correct: 0,
        explanation: '$f(4) = 2$, $f\'(x) = \\dfrac{1}{2\\sqrt{x}}$, $f\'(4) = \\dfrac{1}{4}$. Дотична: $y = 2 + \\dfrac{1}{4}(x - 4) = \\dfrac{1}{4}x + 1$.'
      },
      {
        question: 'У якій точці дотична до $y = x^2 - 6x$ горизонтальна?',
        type: 'text_input',
        correct: ['3'],
        explanation: '$f\'(x) = 2x - 6 = 0 \\Rightarrow x = 3$. Дотична горизонтальна при $x = 3$.'
      }
    ]
  },

  // ===== SECTION 5: MIN/MAX ON INTERVAL =====
  {
    id: '5-8-minmax',
    section: 5,
    sectionName: 'Похідна та її застосування',
    title: 'Найбільше і найменше значення функції на відрізку',
    description: 'Знаходження найбільшого і найменшого значень неперервної функції на замкненому відрізку',
    icon: '🏔️',
    questions: [
      {
        question: 'Щоб знайти найбільше значення функції на відрізку $[a; b]$, потрібно:',
        options: [
          'Знайти тільки критичні точки',
          'Порівняти значення функції в критичних точках та на кінцях відрізка',
          'Підставити тільки кінці відрізка',
          'Знайти другу похідну'
        ],
        correct: 1,
        explanation: 'Алгоритм: 1) знайти $f\'(x) = 0$ на $[a;b]$; 2) обчислити $f$ в цих точках і в $a$, $b$; 3) обрати найбільше.'
      },
      {
        question: 'Найменше значення $f(x) = x^2 - 2x$ на відрізку $[0; 3]$:',
        options: ['$0$', '$-1$', '$3$', '$-2$'],
        correct: 1,
        explanation: '$f\'(x) = 2x - 2 = 0 \\Rightarrow x = 1$. $f(0) = 0$, $f(1) = -1$, $f(3) = 3$. Найменше: $-1$.'
      },
      {
        question: 'Найбільше значення $f(x) = -x^2 + 4x$ на $[0; 5]$:',
        options: ['$0$', '$4$', '$-5$', '$5$'],
        correct: 1,
        explanation: '$f\'(x) = -2x + 4 = 0 \\Rightarrow x = 2$. $f(0) = 0$, $f(2) = 4$, $f(5) = -5$. Найбільше: $4$.'
      },
      {
        question: 'Функція $f(x) = x^3 - 3x$ на $[-2; 2]$. Знайдіть найбільше значення:',
        options: ['$2$', '$-2$', '$0$', '$4$'],
        correct: 0,
        explanation: '$f\'(x) = 3x^2 - 3 = 0 \\Rightarrow x = \\pm 1$. $f(-2) = -2$, $f(-1) = 2$, $f(1) = -2$, $f(2) = 2$. Найбільше: $2$.'
      },
      {
        question: 'На замкненому відрізку неперервна функція завжди досягає свого найбільшого і найменшого значень.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Це теорема Вейєрштрасса: неперервна функція на замкненому відрізку досягає свого максимуму і мінімуму.'
      },
      {
        question: 'Найбільше значення функції на відрізку завжди досягається в критичній точці.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Ні! Найбільше значення може досягатися на кінцях відрізка. Наприклад, $f(x) = x$ на $[0; 5]$ — максимум у $x = 5$.'
      },
      {
        question: 'Знайдіть найменше значення $f(x) = x^2$ на $[-3; 1]$:',
        options: ['$-3$', '$9$', '$0$', '$1$'],
        correct: 2,
        explanation: '$f\'(x) = 2x = 0 \\Rightarrow x = 0$. $f(-3) = 9$, $f(0) = 0$, $f(1) = 1$. Найменше: $0$.'
      },
      {
        question: 'Функція $f(x) = 2x + 1$ на $[1; 4]$. Найбільше значення:',
        options: ['$3$', '$9$', '$5$', '$7$'],
        correct: 1,
        explanation: '$f\'(x) = 2 > 0$ — функція зростає. Найбільше значення на правому кінці: $f(4) = 9$.'
      },
      {
        question: 'Знайдіть найбільше значення $f(x) = -x^2 + 6x - 5$ на $[1; 4]$. Запишіть число.',
        type: 'text_input',
        correct: '4',
        explanation: '$f\'(x) = -2x + 6 = 0 \\Rightarrow x = 3$. $f(1) = 0$, $f(3) = 4$, $f(4) = 3$. Найбільше: $4$.'
      },
      {
        question: 'Найменше значення $f(x) = x^3 - 12x$ на $[0; 3]$ дорівнює $-16$. Запишіть: так або ні.',
        type: 'text_input',
        correct: ['так', 'Так', 'ТАК'],
        explanation: '$f\'(x) = 3x^2 - 12 = 0 \\Rightarrow x = 2$ (на $[0;3]$). $f(0) = 0$, $f(2) = 8 - 24 = -16$, $f(3) = -9$. Найменше: $-16$. Так!'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: для знаходження найбільшого значення на відрізку достатньо знайти лише критичні точки.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! Потрібно порівняти значення функції і в критичних точках, і на КІНЦЯХ відрізка.'
      },
      {
        question: 'Правильно чи неправильно: найменше значення $f(x) = x^2 + 1$ на $[-2; 3]$ дорівнює $1$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: '$f\'(x) = 2x = 0 \\Rightarrow x = 0$. $f(-2) = 5$, $f(0) = 1$, $f(3) = 10$. Найменше: $1$. Правильно!'
      },
      {
        question: 'Найбільше значення $f(x) = -x^2 + 2x + 3$ на $[-1; 3]$:',
        type: 'text_input',
        correct: ['4'],
        explanation: '$f\'(x) = -2x + 2 = 0 \\Rightarrow x = 1$. $f(-1) = 0$, $f(1) = 4$, $f(3) = 0$. Найбільше: $4$.'
      },
      {
        question: 'Знайдіть найменше значення $f(x) = x^3 - 3x + 2$ на $[0; 2]$:',
        type: 'text_input',
        correct: ['0'],
        explanation: '$f\'(x) = 3x^2 - 3 = 0 \\Rightarrow x = 1$ (на $[0;2]$). $f(0) = 2$, $f(1) = 0$, $f(2) = 4$. Найменше: $0$.'
      },
      {
        question: 'Найбільше значення $f(x) = 3x - x^3$ на $[-1; 2]$:',
        options: ['$2$', '$-2$', '$4$', '$0$'],
        correct: 0,
        explanation: '$f\'(x) = 3 - 3x^2 = 0 \\Rightarrow x = \\pm 1$. $f(-1) = -2$, $f(1) = 2$, $f(2) = -2$. Найбільше: $2$.'
      },
      {
        question: 'Функція $f(x) = 5x$ на $[1; 4]$. Де досягається максимум?',
        options: ['В критичній точці', 'На лівому кінці $x = 1$', 'На правому кінці $x = 4$', 'У середині відрізка'],
        correct: 2,
        explanation: '$f\'(x) = 5 > 0$ — функція зростає на всьому відрізку. Максимум на правому кінці: $f(4) = 20$.'
      },
      {
        question: 'Найменше значення $f(x) = x^4 - 2x^2$ на $[-2; 2]$:',
        type: 'text_input',
        correct: ['-1'],
        explanation: '$f\'(x) = 4x^3 - 4x = 4x(x^2-1) = 0 \\Rightarrow x = 0, \\pm 1$. $f(-2) = 8$, $f(-1) = -1$, $f(0) = 0$, $f(1) = -1$, $f(2) = 8$. Найменше: $-1$.'
      },
      {
        question: 'Найбільше значення $f(x) = \\sin x$ на $[0; \\dfrac{2\\pi}{3}]$:',
        options: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$1$', '$\\dfrac{\\sqrt{2}}{2}$'],
        correct: 2,
        explanation: '$f\'(x) = \\cos x = 0 \\Rightarrow x = \\dfrac{\\pi}{2}$ (на відрізку). $f(0) = 0$, $f(\\dfrac{\\pi}{2}) = 1$, $f(\\dfrac{2\\pi}{3}) = \\dfrac{\\sqrt{3}}{2}$. Найбільше: $1$.'
      }
    ]
  },

  // ===== 1.6: Найбільше та найменше значення функції на проміжку =====
  {
    id: '1-6-minmax',
    section: 1,
    sectionName: 'Множини. Функції',
    title: 'Найбільше та найменше значення на проміжку',
    description: 'Знаходження максимуму та мінімуму функції на відрізку',
    icon: '📉',
    questions: [
      {
        question: 'Яке найбільше значення має функція $f(x) = -x^2 + 4x$ на $[0; 3]$?',
        options: ['$3$', '$4$', '$0$', '$-3$'],
        correct: 1,
        hint: 'Знайди вершину параболи: $x = -\\dfrac{b}{2a}$, потім перевір кінці відрізка.',
        explanation: 'Вершина: $x = 2$. $f(2) = -4+8=4$. $f(0)=0$, $f(3)=3$. Найбільше: $4$.'
      },
      {
        question: 'Найменше значення $f(x) = x^2 - 2x + 3$ на $[-1; 2]$:',
        options: ['$6$', '$2$', '$3$', '$1$'],
        correct: 1,
        hint: 'Вершина параболи: $x = -\\dfrac{b}{2a} = 1$.',
        explanation: '$f(1) = 1-2+3=2$, $f(-1)=1+2+3=6$, $f(2)=4-4+3=3$. Найменше: $2$.'
      },
      {
        question: 'Щоб знайти найбільше/найменше значення неперервної функції на $[a;b]$, потрібно порівняти значення функції в критичних точках та на кінцях відрізка.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        hint: 'Згадай алгоритм знаходження екстремумів на відрізку.',
        explanation: 'Так. Алгоритм: знайти $f\'(x)=0$, обчислити $f$ у критичних точках та на кінцях, порівняти.'
      },
      {
        question: 'Найбільше значення $f(x) = x^3 - 3x^2$ на $[-1; 4]$:',
        options: ['$16$', '$0$', '$-4$', '$-2$'],
        correct: 0,
        hint: '$f\'(x) = 3x^2 - 6x = 3x(x-2)$. Критичні точки: $x=0$ і $x=2$.',
        explanation: '$f\'(x)=3x(x-2)=0 \\Rightarrow x=0,2$. $f(-1)=-4$, $f(0)=0$, $f(2)=-4$, $f(4)=16$. Найбільше: $16$.'
      },
      {
        question: 'Найменше значення лінійної функції $f(x) = 3x + 1$ на $[2; 5]$ дорівнює:',
        type: 'text_input',
        correct: ['7'],
        hint: 'Лінійна функція не має критичних точок. Мінімум — на лівому кінці, якщо функція зростає.',
        explanation: '$f\'(x)=3>0$ — функція зростає. Мінімум на лівому кінці: $f(2)=6+1=7$.'
      },
      {
        question: 'Найбільше значення $f(x) = \\sin x$ на $\\left[-\\dfrac{\\pi}{6}; \\dfrac{5\\pi}{6}\\right]$:',
        options: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$1$', '$-\\dfrac{1}{2}$'],
        correct: 2,
        hint: '$\\sin x = 1$ при $x = \\dfrac{\\pi}{2}$, яке лежить на відрізку.',
        explanation: '$f\'(x)=\\cos x=0 \\Rightarrow x=\\dfrac{\\pi}{2}$ на відрізку. $f(\\dfrac{\\pi}{2})=1$ — найбільше значення.'
      },
      {
        question: 'На відрізку $[a;b]$ неперервна функція обов\'язково досягає свого найбільшого та найменшого значень.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        hint: 'Це твердження — теорема Вейєрштрасса.',
        explanation: 'Так — це теорема Вейєрштрасса: неперервна на відрізку функція обов\'язково досягає свого sup і inf.'
      },
      {
        question: 'Найменше значення $f(x) = x^4 - 8x^2 + 7$ на $[0; 3]$:',
        options: ['$7$', '$-9$', '$-2$', '$0$'],
        correct: 1,
        hint: '$f\'(x) = 4x^3 - 16x = 4x(x^2-4)$. Критичні точки на $[0;3]$: $x=0$ і $x=2$.',
        explanation: '$f\'(x)=4x(x^2-4)=0 \\Rightarrow x=0, 2$. $f(0)=7$, $f(2)=16-32+7=-9$, $f(3)=81-72+7=16$. Найменше: $-9$.'
      }
    ]
  },

  // ===== 1.7: Обернена та складена функція =====
  {
    id: '1-7-inverse-composite',
    section: 1,
    sectionName: 'Множини. Функції',
    title: 'Обернена та складена функція',
    description: 'Побудова оберненої функції, складена функція f(g(x))',
    icon: '🔄',
    questions: [
      {
        question: 'Яка функція є оберненою до $f(x) = 2x + 6$?',
        options: [
          '$f^{-1}(x) = \\dfrac{x-6}{2}$',
          '$f^{-1}(x) = 2x - 6$',
          '$f^{-1}(x) = \\dfrac{x+6}{2}$',
          '$f^{-1}(x) = \\dfrac{1}{2x+6}$'
        ],
        correct: 0,
        hint: 'Виразь $x$ через $y$: $y=2x+6 \\Rightarrow x=\\dfrac{y-6}{2}$. Потім заміни $y$ на $x$.',
        explanation: '$y=2x+6 \\Rightarrow 2x=y-6 \\Rightarrow x=\\dfrac{y-6}{2}$. Обернена: $f^{-1}(x)=\\dfrac{x-6}{2}$.'
      },
      {
        question: 'Графіки функції та її оберненої симетричні відносно:',
        options: ['Осі $Ox$', 'Осі $Oy$', 'Прямої $y = x$', 'Початку координат'],
        correct: 2,
        hint: 'В оберненій функції $x$ і $y$ міняються місцями.',
        explanation: 'Оскільки в $f^{-1}$ $x$ і $y$ міняються місцями, графіки симетричні відносно прямої $y=x$.'
      },
      {
        question: 'Якщо $f(x) = x^3$, то $f^{-1}(x) = $:',
        options: ['$x^{-3}$', '$\\sqrt[3]{x}$', '$\\dfrac{1}{x^3}$', '$-x^3$'],
        correct: 1,
        hint: '$y = x^3 \\Rightarrow x = \\sqrt[3]{y}$.',
        explanation: '$y=x^3 \\Rightarrow x=\\sqrt[3]{y}$. Отже $f^{-1}(x)=\\sqrt[3]{x}=x^{1/3}$.'
      },
      {
        question: 'Складена функція $f(g(x))$ при $f(x) = x^2$ та $g(x) = x+1$ дорівнює:',
        options: ['$x^2 + 1$', '$(x+1)^2$', '$x^2(x+1)$', '$2x+1$'],
        correct: 1,
        hint: 'Спочатку обчислюємо $g(x)=x+1$, потім підставляємо у $f$: $f(g(x))=f(x+1)=(x+1)^2$.',
        explanation: '$f(g(x)) = f(x+1) = (x+1)^2$. Спершу "внутрішня" функція, потім "зовнішня".'
      },
      {
        question: 'Знайдіть $g(f(2))$, якщо $f(x) = 3x$ і $g(x) = x - 1$:',
        type: 'text_input',
        correct: ['5'],
        hint: 'Спочатку $f(2) = 3 \\cdot 2 = 6$, потім $g(6) = 6 - 1 = 5$.',
        explanation: '$f(2)=6$, $g(f(2))=g(6)=6-1=5$.'
      },
      {
        question: 'Обернена функція існує, якщо вихідна функція є:',
        options: ['Парною', 'Непарною', 'Монотонною (строго зростаючою або спадаючою)', 'Обмеженою'],
        correct: 2,
        hint: 'Обернена функція існує тоді, коли вихідна — взаємно однозначна (бієкція).',
        explanation: 'Монотонна функція є взаємно однозначною: кожному значенню $y$ відповідає рівно один $x$. Це необхідна умова існування оберненої функції.'
      },
      {
        question: 'Якщо $f(f^{-1}(x)) = x$, то $f^{-1}(f(x)) = $:',
        options: ['$0$', '$1$', '$x$', '$f(x)$'],
        correct: 2,
        hint: 'Функція та обернена до неї "знищують" одна одну.',
        explanation: '$f^{-1}(f(x)) = x$ — це основна властивість оберненої функції. Вона діє в обох напрямках.'
      },
      {
        question: 'Якщо $h(x) = f(g(x))$, де $g(x) = \\sqrt{x}$ та $f(x) = x^2 - 1$, то $h(4) = $:',
        type: 'text_input',
        correct: ['3'],
        hint: '$g(4) = \\sqrt{4} = 2$, потім $f(2) = 4-1=3$.',
        explanation: '$g(4)=\\sqrt{4}=2$, $h(4)=f(2)=2^2-1=3$.'
      },
      {
        question: 'Область визначення складеної функції $h(x) = \\sqrt{1-x^2}$, де $f(u) = \\sqrt{u}$, $g(x) = 1-x^2$:',
        options: ['$(-\\infty; +\\infty)$', '$[0; 1]$', '$[-1; 1]$', '$(-1; 1)$'],
        correct: 2,
        hint: 'Потрібно $1-x^2 \\geq 0$, тобто $x^2 \\leq 1$.',
        explanation: '$g(x) = 1-x^2 \\geq 0 \\Rightarrow x^2 \\leq 1 \\Rightarrow -1 \\leq x \\leq 1$. Область визначення: $[-1; 1]$.'
      },
      {
        question: 'Функція та її обернена завжди мають однакову область визначення.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        hint: 'Пригадай: область значень $f$ стає областю визначення $f^{-1}$.',
        explanation: 'Неправильно. Область визначення $f^{-1}$ = область значень $f$. Наприклад, $f(x)=x^2$ на $[0;+\\infty)$ має $f^{-1}(x)=\\sqrt{x}$ теж на $[0;+\\infty)$, але в загальному випадку вони різні.'
      }
    ]
  },

  // ===== 2.4: Степенева функція, її властивості та графік =====
  {
    id: '2-4-power-function',
    section: 2,
    sectionName: 'Степенева функція',
    title: 'Степенева функція: властивості та графік',
    description: 'Графіки y = xⁿ, властивості для парних та непарних показників',
    icon: '📐',
    questions: [
      {
        question: 'Функція $y = x^n$ при парному $n$ є:',
        options: ['Непарною', 'Парною', 'Ні парною, ні непарною', 'Монотонно зростаючою'],
        correct: 1,
        hint: 'Перевір: $f(-x) = (-x)^n = x^n = f(x)$ при парному $n$.',
        explanation: '$f(-x) = (-x)^n = x^n = f(x)$ при парному $n$ — функція парна. Графік симетричний відносно осі $Oy$.'
      },
      {
        question: 'Графік функції $y = x^3$ симетричний відносно:',
        options: ['Осі $Oy$', 'Осі $Ox$', 'Початку координат', 'Прямої $y=x$'],
        correct: 2,
        hint: '$y = x^3$ — непарна функція: $f(-x) = -f(x)$.',
        explanation: 'Непарні функції симетричні відносно початку координат. $f(-x)=(-x)^3=-x^3=-f(x)$.'
      },
      {
        question: 'Функція $y = x^n$ при непарному $n > 0$ зростає на:',
        options: ['$(-\\infty; 0)$', '$(0; +\\infty)$', '$(-\\infty; +\\infty)$', 'Ніде не зростає'],
        correct: 2,
        hint: 'Перевір похідну: $y\' = nx^{n-1}$. Яким є її знак?',
        explanation: '$y\'=nx^{n-1}$. При непарному $n-1$ (парний показник) $x^{n-1} \\geq 0$, отже $y\' \\geq 0$ всюди. Функція зростає на $(-\\infty; +\\infty)$.'
      },
      {
        question: 'Область значень функції $y = x^2$ — це:',
        options: ['$(-\\infty; +\\infty)$', '$[0; +\\infty)$', '$(0; +\\infty)$', '$[-1; 1]$'],
        correct: 1,
        hint: 'Квадрат числа завжди невід\'ємний.',
        explanation: '$x^2 \\geq 0$ для будь-якого $x$. При $x=0$ маємо $y=0$. Область значень: $[0; +\\infty)$.'
      },
      {
        question: 'Яке зі значень $x$ є коренем рівняння $x^4 = 16$?',
        options: ['$x = 4$', '$x = 2$ і $x = -2$', '$x = -2$', '$x = \\pm 4$'],
        correct: 1,
        hint: '$x^4 = 16 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2$.',
        explanation: '$x^4=16 \\Rightarrow x^2=4 \\Rightarrow x=\\pm 2$. Обидва значення є коренями, бо $(-2)^4=16$.'
      },
      {
        question: 'Порівняй: $0{,}3^5$ та $0{,}3^7$:',
        options: [
          '$0{,}3^5 < 0{,}3^7$',
          '$0{,}3^5 = 0{,}3^7$',
          '$0{,}3^5 > 0{,}3^7$',
          'Неможливо порівняти'
        ],
        correct: 2,
        hint: 'При $0 < a < 1$: що більший показник, то менше значення.',
        explanation: 'При основі $0 < a < 1$ функція $y = a^n$ спадає зі зростанням $n$. Тому $0{,}3^5 > 0{,}3^7$.'
      },
      {
        question: 'Для якого показника $n$ функція $y = x^n$ є спадаючою на $(0; +\\infty)$?',
        options: ['$n = 2$', '$n = 3$', '$n = -1$', '$n = 0{,}5$'],
        correct: 2,
        hint: 'Похідна $y\' = nx^{n-1}$. При якому $n$ вона від\'ємна?',
        explanation: 'При $n=-1$: $y\'=-x^{-2}=-\\dfrac{1}{x^2}<0$ на $(0;+\\infty)$. Функція спадає.'
      },
      {
        question: 'Знайдіть значення $f(8)$, якщо $f(x) = x^{2/3}$:',
        type: 'text_input',
        correct: ['4'],
        hint: '$x^{2/3} = (\\sqrt[3]{x})^2$. Спочатку знайди $\\sqrt[3]{8}$.',
        explanation: '$f(8) = 8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$.'
      },
      {
        question: 'Функція $y = x^n$ при парному $n$ спадає на $(-\\infty; 0]$ і зростає на $[0; +\\infty)$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        hint: 'Вершина параболи $y=x^2$ в точці $x=0$.',
        explanation: 'Так. Похідна $y\'=nx^{n-1}$: при $x<0$ від\'ємна (спадає), при $x>0$ додатня (зростає). Мінімум при $x=0$.'
      },
      {
        question: 'Яке з тверджень про функцію $y = x^{1/2} = \\sqrt{x}$ правильне?',
        options: [
          'Область визначення $(-\\infty; +\\infty)$',
          'Функція спадає на $[0; +\\infty)$',
          'Функція зростає на $[0; +\\infty)$, ОВ: $[0; +\\infty)$',
          'Функція — непарна'
        ],
        correct: 2,
        hint: '$\\sqrt{x}$ визначена лише при $x \\geq 0$, і зі зростанням $x$ значення $\\sqrt{x}$ теж зростає.',
        explanation: '$y=\\sqrt{x}$ визначена при $x\\geq 0$. $y\'=\\dfrac{1}{2\\sqrt{x}}>0$ — зростає на $(0;+\\infty)$. ОЗ: $[0;+\\infty)$.'
      }
    ]
  },

  // ===== 2.6: Ірраціональні рівняння =====
  {
    id: '2-6-irrational-equations',
    section: 2,
    sectionName: 'Степенева функція',
    title: 'Ірраціональні рівняння',
    description: 'Рівняння з коренями. Метод підведення до степеня та перевірка',
    icon: '√',
    questions: [
      {
        question: 'Розв\'яжіть рівняння $\\sqrt{x} = 5$:',
        type: 'text_input',
        correct: ['25'],
        hint: 'Підведи обидві частини до квадрату: $x = 5^2$.',
        explanation: '$\\sqrt{x}=5 \\Rightarrow x=25$. Перевірка: $\\sqrt{25}=5$ ✓'
      },
      {
        question: 'При розв\'язанні ірраціональних рівнянь методом підведення до степеня можуть з\'явитися сторонні корені.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        hint: 'Чому ми завжди робимо перевірку після знаходження коренів?',
        explanation: 'Так! Наприклад, $\\sqrt{x}=-2$ коренів не має, але зведення в квадрат дає $x=4$ — стороннє рішення. Перевірка обов\'язкова!'
      },
      {
        question: 'Розв\'яжіть: $\\sqrt{2x + 1} = 3$. Значення $x$:',
        options: ['$x = 4$', '$x = 5$', '$x = 8$', '$x = 3$'],
        correct: 0,
        hint: 'Підведи до квадрату: $2x+1=9$.',
        explanation: '$\\sqrt{2x+1}=3 \\Rightarrow 2x+1=9 \\Rightarrow 2x=8 \\Rightarrow x=4$. Перевірка: $\\sqrt{9}=3$ ✓'
      },
      {
        question: 'Яка умова накладається на ОДЗ рівняння $\\sqrt{f(x)} = g(x)$?',
        options: [
          'Тільки $f(x) \\geq 0$',
          '$f(x) \\geq 0$ і $g(x) \\geq 0$',
          'Тільки $g(x) \\geq 0$',
          'Умов нема'
        ],
        correct: 1,
        hint: 'Корінь квадратний — завжди невід\'ємний. Права частина теж має бути невід\'ємною.',
        explanation: 'Так як $\\sqrt{f(x)} \\geq 0$, то й $g(x) \\geq 0$. Плюс $f(x) \\geq 0$ для існування кореня.'
      },
      {
        question: 'Розв\'яжіть: $\\sqrt{x^2 - 3x} = 2$. Яка сума коренів?',
        type: 'text_input',
        correct: ['3'],
        hint: '$x^2-3x=4 \\Rightarrow x^2-3x-4=0$. Знайди обидва корені.',
        explanation: '$x^2-3x=4 \\Rightarrow x^2-3x-4=0 \\Rightarrow (x-4)(x+1)=0 \\Rightarrow x=4$ або $x=-1$. Перевірка: обидва підходять. Сума: $4+(-1)=3$.'
      },
      {
        question: 'Рівняння $\\sqrt{x-3} = x - 5$ має корені:',
        options: ['$x = 7$', '$x = 4$ і $x = 7$', '$x = 4$', 'Коренів немає'],
        correct: 0,
        hint: 'Зведи до квадрату, знайди корені, перевір кожен у вихідному рівнянні.',
        explanation: '$(x-3) = (x-5)^2 = x^2-10x+25 \\Rightarrow x^2-11x+28=0 \\Rightarrow x=4$ або $x=7$. Перевірка: при $x=4$: $\\sqrt{1}=1$, але $4-5=-1$. Стороннє! При $x=7$: $\\sqrt{4}=2=7-5$ ✓. Відповідь: $x=7$.'
      },
      {
        question: 'Кількість коренів рівняння $\\sqrt{x} + \\sqrt{x+1} = 0$:',
        options: ['$0$', '$1$', '$2$', 'Нескінченно багато'],
        correct: 0,
        hint: 'Сума двох невід\'ємних чисел може дорівнювати нулю тільки якщо...',
        explanation: '$\\sqrt{x} \\geq 0$ і $\\sqrt{x+1} \\geq 0$. Їх сума = 0 лише коли обидва = 0. $\\sqrt{x}=0 \\Rightarrow x=0$, але $\\sqrt{0+1}=1 \\neq 0$. Коренів немає.'
      },
      {
        question: 'Розв\'яжіть: $\\sqrt[3]{x-1} = 2$. Значення $x$:',
        type: 'text_input',
        correct: ['9'],
        hint: 'Підведи обидві частини до кубу: $x-1 = 2^3$.',
        explanation: '$x-1=8 \\Rightarrow x=9$. Перевірка: $\\sqrt[3]{8}=2$ ✓. При кубічному кореню перевірка необов\'язкова — немає сторонніх.'
      },
      {
        question: 'Рівняння $\\sqrt{x+2} = \\sqrt{3x-4}$. Значення $x$:',
        options: ['$x = 2$', '$x = 3$', '$x = 1$', '$x = 4$'],
        correct: 1,
        hint: 'Зведи обидві частини до квадрату: $x+2 = 3x-4$.',
        explanation: '$x+2=3x-4 \\Rightarrow 6=2x \\Rightarrow x=3$. Перевірка: $\\sqrt{5}=\\sqrt{5}$ ✓'
      },
      {
        question: 'Область допустимих значень рівняння $\\sqrt{5-x} = \\sqrt{x+1}$:',
        options: ['$x \\in [-1; 5]$', '$x \\in (0; 5)$', '$x \\in [-1; +\\infty)$', '$x \\in (-\\infty; 5]$'],
        correct: 0,
        hint: 'Потрібно: $5-x \\geq 0$ і $x+1 \\geq 0$ одночасно.',
        explanation: '$5-x \\geq 0 \\Rightarrow x \\leq 5$ і $x+1 \\geq 0 \\Rightarrow x \\geq -1$. ОДЗ: $[-1; 5]$.'
      }
    ]
  },

  // ===== 5.1: Границя послідовності та функції =====
  {
    id: '5-1-limits',
    section: 5,
    sectionName: 'Границя. Похідна та її застосування',
    title: 'Границя послідовності та функції',
    description: 'Поняття границі, основні границі, правила обчислення',
    icon: '∞',
    questions: [
      {
        question: 'Що означає $\\lim_{x \\to a} f(x) = L$?',
        options: [
          '$f(a) = L$',
          'При $x$ близькому до $a$, $f(x)$ прямує до $L$',
          '$f(x) = L$ для всіх $x$',
          '$f(x) > L$ при $x \\to a$'
        ],
        correct: 1,
        hint: 'Границя описує поведінку функції поблизу точки, а не в самій точці.',
        explanation: '$\\lim_{x \\to a} f(x) = L$ означає: при наближенні $x$ до $a$ (але $x \\neq a$), значення $f(x)$ необмежено наближується до $L$.'
      },
      {
        question: 'Обчисліть $\\lim_{x \\to 3} (2x - 1)$:',
        type: 'text_input',
        correct: ['5'],
        hint: 'Для многочлена границя рівна значенню у точці: просто підстав $x=3$.',
        explanation: '$\\lim_{x \\to 3}(2x-1) = 2\\cdot 3 - 1 = 5$. Для многочленів границя = значення функції.'
      },
      {
        question: 'Обчисліть $\\lim_{x \\to \\infty} \\dfrac{1}{x}$:',
        options: ['$1$', '$\\infty$', '$0$', 'Границі не існує'],
        correct: 2,
        hint: 'Що відбувається з дробом, коли знаменник прямує до нескінченності?',
        explanation: 'При $x \\to \\infty$ дріб $\\dfrac{1}{x} \\to 0$. Загалом $\\dfrac{c}{x^n} \\to 0$ при $x \\to \\infty$.'
      },
      {
        question: 'Перша чудова границя: $\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = $',
        type: 'text_input',
        correct: ['1'],
        hint: 'Це стандартна границя, яку треба знати напам\'ять.',
        explanation: '$\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1$ — перша чудова границя. $x$ вимірюється в радіанах!'
      },
      {
        question: 'Обчисліть $\\lim_{x \\to 2} \\dfrac{x^2 - 4}{x - 2}$:',
        options: ['$0$', '$\\infty$', '$4$', '$2$'],
        correct: 2,
        hint: 'Розкладіть чисельник: $x^2-4 = (x-2)(x+2)$.',
        explanation: '$\\dfrac{x^2-4}{x-2} = \\dfrac{(x-2)(x+2)}{x-2} = x+2$. При $x \\to 2$: $2+2=4$.'
      },
      {
        question: 'Друга чудова границя: $\\lim_{n \\to \\infty} \\left(1 + \\dfrac{1}{n}\\right)^n = $',
        options: ['$1$', '$2$', '$e \\approx 2{,}718$', '$\\pi$'],
        correct: 2,
        hint: 'Це число Ейлера $e$.',
        explanation: '$\\lim_{n \\to \\infty}\\left(1+\\dfrac{1}{n}\\right)^n = e \\approx 2{,}718$ — друга чудова границя, основа натурального логарифму.'
      },
      {
        question: 'Обчисліть $\\lim_{x \\to \\infty} \\dfrac{3x^2 + 1}{x^2 - 5}$:',
        options: ['$0$', '$3$', '$\\infty$', '$-\\dfrac{1}{5}$'],
        correct: 1,
        hint: 'Розділіть чисельник і знаменник на $x^2$ (старший степінь).',
        explanation: '$\\dfrac{3x^2+1}{x^2-5} = \\dfrac{3+\\frac{1}{x^2}}{1-\\frac{5}{x^2}} \\to \\dfrac{3+0}{1-0} = 3$.'
      },
      {
        question: 'Якщо $\\lim_{x \\to a} f(x) = A$ і $\\lim_{x \\to a} g(x) = B \\neq 0$, то $\\lim_{x \\to a} \\dfrac{f(x)}{g(x)} = $:',
        options: ['$A + B$', '$A \\cdot B$', '$\\dfrac{A}{B}$', 'Не існує'],
        correct: 2,
        hint: 'Це правило ділення границь.',
        explanation: 'Границя частки = частка границь (якщо $B \\neq 0$): $\\lim\\dfrac{f}{g}=\\dfrac{A}{B}$.'
      },
      {
        question: 'Границя $\\lim_{x \\to 0} \\dfrac{\\sin 3x}{x}$ дорівнює:',
        options: ['$1$', '$3$', '$\\dfrac{1}{3}$', '$0$'],
        correct: 1,
        hint: 'Скористайся першою чудовою границею: $\\dfrac{\\sin 3x}{x} = 3 \\cdot \\dfrac{\\sin 3x}{3x}$.',
        explanation: '$\\dfrac{\\sin 3x}{x} = 3 \\cdot \\dfrac{\\sin 3x}{3x} \\to 3 \\cdot 1 = 3$.'
      },
      {
        question: 'Послідовність $a_n = \\dfrac{n+1}{n}$ при $n \\to \\infty$ прямує до:',
        type: 'text_input',
        correct: ['1'],
        hint: '$\\dfrac{n+1}{n} = 1 + \\dfrac{1}{n}$. Що відбувається з $\\dfrac{1}{n}$?',
        explanation: '$\\dfrac{n+1}{n} = 1 + \\dfrac{1}{n} \\to 1 + 0 = 1$ при $n \\to \\infty$.'
      }
    ]
  },

  // ===== 5.2: Неперервність функції =====
  {
    id: '5-2-continuity',
    section: 5,
    sectionName: 'Границя. Похідна та її застосування',
    title: 'Неперервність функції',
    description: 'Означення неперервності, точки розриву, теорема Больцано-Коші',
    icon: '〰️',
    questions: [
      {
        question: 'Функція $f$ неперервна в точці $a$, якщо:',
        options: [
          '$f(a)$ існує',
          '$\\lim_{x \\to a} f(x)$ існує',
          '$\\lim_{x \\to a} f(x) = f(a)$',
          '$f\'(a)$ існує'
        ],
        correct: 2,
        hint: 'Неперервність — це коли границя = значенню функції в точці.',
        explanation: 'Функція неперервна в $a$, якщо виконуються три умови: $f(a)$ визначена, існує $\\lim_{x\\to a}f(x)$, і цей ліміт = $f(a)$.'
      },
      {
        question: 'Функція $f(x) = \\dfrac{1}{x}$ неперервна на:',
        options: [
          '$(-\\infty; +\\infty)$',
          '$(-\\infty; 0) \\cup (0; +\\infty)$',
          '$[0; +\\infty)$',
          '$(-1; 1)$'
        ],
        correct: 1,
        hint: 'При $x=0$ функція не визначена — це точка розриву.',
        explanation: '$f(x)=1/x$ не визначена при $x=0$. На будь-якому проміжку, що не містить $0$, функція неперервна.'
      },
      {
        question: 'Всі многочлени є неперервними на всій числовій прямій.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        hint: 'Чи може многочлен мати точку розриву?',
        explanation: 'Так. Для многочленів $\\lim_{x \\to a} P(x) = P(a)$ при будь-якому $a$ — вони завжди неперервні.'
      },
      {
        question: 'Точка розриву функції $f(x) = \\dfrac{x^2-1}{x-1}$ — це:',
        options: ['$x = 1$', '$x = -1$', '$x = 0$', 'Точок розриву немає'],
        correct: 0,
        hint: 'При якому $x$ знаменник дорівнює нулю?',
        explanation: 'При $x=1$ знаменник = 0, тому $x=1$ — точка розриву. Але $\\lim_{x\\to 1}\\dfrac{x^2-1}{x-1}=\\lim(x+1)=2$ — це усувний розрив.'
      },
      {
        question: 'Теорема Больцано-Коші стверджує: якщо $f$ неперервна на $[a;b]$ і $f(a) \\cdot f(b) < 0$, то:',
        options: [
          '$f$ не має коренів',
          'На $(a;b)$ існує хоча б одна точка $c$, де $f(c) = 0$',
          '$f$ має рівно один корінь',
          '$f$ зростає на $[a;b]$'
        ],
        correct: 1,
        hint: '$f(a) \\cdot f(b) < 0$ означає, що $f(a)$ і $f(b)$ мають різні знаки.',
        explanation: 'Якщо неперервна функція на кінцях відрізка має різні знаки, то десь всередині вона обов\'язково перетинає вісь $x$.'
      },
      {
        question: 'Функція $f(x) = |x|$ неперервна при $x = 0$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        hint: 'Обчисли $\\lim_{x \\to 0^-}|x|$, $\\lim_{x \\to 0^+}|x|$ та $f(0)$.',
        explanation: '$f(0)=0$, $\\lim_{x\\to 0^+}|x|=0$, $\\lim_{x\\to 0^-}|x|=0$. Всі рівні — функція неперервна в $x=0$, хоча похідна там не існує.'
      },
      {
        question: 'Функція $f(x) = \\begin{cases} x^2, & x < 1 \\\\ 2x-1, & x \\geq 1 \\end{cases}$ неперервна при $x = 1$?',
        options: ['Так, бо $\\lim_{x\\to 1}f(x) = f(1)$', 'Ні, бо ліва і права границі різні', 'Ні, бо $f(1)$ не визначена', 'Не можна визначити'],
        correct: 0,
        hint: 'Перевір: $\\lim_{x \\to 1^-} x^2 = ?$ і $f(1) = 2\\cdot 1 - 1 = ?$',
        explanation: '$\\lim_{x \\to 1^-} x^2 = 1$, $\\lim_{x\\to 1^+}(2x-1)=1$, $f(1)=1$. Всі рівні — функція неперервна.'
      },
      {
        question: 'Яке з тверджень правильне для неперервної функції на відрізку $[a;b]$?',
        options: [
          'Функція обов\'язково монотонна',
          'Функція приймає всі значення між $f(a)$ і $f(b)$',
          'Функція не має екстремумів',
          'Функція визначена тільки на $[a;b]$'
        ],
        correct: 1,
        hint: 'Це теорема про проміжні значення (наслідок теореми Больцано-Коші).',
        explanation: 'Теорема про проміжні значення: неперервна на $[a;b]$ функція набуває всіх проміжних значень між $f(a)$ і $f(b)$.'
      }
    ]
  },

  // ===== 5.9: Побудова графіків за допомогою похідної =====
  {
    id: '5-9-curve-sketching',
    section: 5,
    sectionName: 'Границя. Похідна та її застосування',
    title: 'Побудова графіків за допомогою похідної',
    description: 'Аналіз функції: зростання/спадання, опуклість/вгнутість, точки перегину',
    icon: '📊',
    questions: [
      {
        question: 'Функція $f$ зростає на проміжку, де:',
        options: ['$f\'(x) = 0$', '$f\'(x) < 0$', '$f\'(x) > 0$', '$f\'\'(x) > 0$'],
        correct: 2,
        hint: 'Похідна — це швидкість зміни. Якщо функція росте, як змінюється $y$ з ростом $x$?',
        explanation: 'Якщо $f\'(x) > 0$ на проміжку, то функція зростає. Якщо $f\'(x) < 0$ — спадає.'
      },
      {
        question: 'Знайдіть проміжки зростання функції $f(x) = x^3 - 3x$:',
        options: [
          '$(-\\infty; -1)$ і $(1; +\\infty)$',
          '$(-1; 1)$',
          '$(0; +\\infty)$',
          '$(-\\infty; 0)$'
        ],
        correct: 0,
        hint: '$f\'(x) = 3x^2 - 3 = 3(x-1)(x+1)$. Коли вираз додатній?',
        explanation: '$f\'(x)=3(x-1)(x+1)>0$ при $x<-1$ або $x>1$. Зростає на $(-\\infty;-1)$ і $(1;+\\infty)$.'
      },
      {
        question: 'Функція опукла (вгнута дугою вниз), якщо:',
        options: ['$f\'(x) > 0$', '$f\'(x) < 0$', '$f\'\'(x) > 0$', '$f\'\'(x) < 0$'],
        correct: 3,
        hint: 'Друга похідна визначає "вигин" графіка.',
        explanation: 'Якщо $f\'\'(x) < 0$ — графік опуклий (дугою вниз, як ∩). Якщо $f\'\'(x) > 0$ — угнутий (дугою вгору, як ∪).'
      },
      {
        question: 'Точка перегину — це точка, де:',
        options: [
          '$f\'(x) = 0$',
          '$f\'\'(x) = 0$ і опуклість змінюється',
          '$f(x) = 0$',
          'Функція недиференційовна'
        ],
        correct: 1,
        hint: 'У точці перегину графік "переходить" з одного виду вигину до іншого.',
        explanation: 'Точка перегину — там де $f\'\'$ змінює знак (з $+$ на $-$ або навпаки). В самій точці $f\'\'=0$ або не існує.'
      },
      {
        question: 'Знайдіть точку перегину функції $f(x) = x^3 - 6x^2 + 9x$:',
        options: ['$x = 1$', '$x = 2$', '$x = 3$', '$x = 0$'],
        correct: 1,
        hint: '$f\'\'(x) = 6x - 12 = 0$. Знайди $x$.',
        explanation: '$f\'\'(x)=6x-12=0 \\Rightarrow x=2$. Перевірка зміни знаку: при $x<2$ $f\'\'<0$, при $x>2$ $f\'\'>0$ — знак змінюється. Точка перегину: $x=2$.'
      },
      {
        question: 'Для функції $f(x) = x^4$: кількість точок перегину дорівнює:',
        options: ['$0$', '$1$', '$2$', '$3$'],
        correct: 0,
        hint: '$f\'\'(x) = 12x^2$. Чи може він змінити знак?',
        explanation: '$f\'\'(x)=12x^2 \\geq 0$ завжди. При $x=0$: $f\'\'=0$, але знак не змінюється (залишається $\\geq 0$). Точок перегину немає.'
      },
      {
        question: 'Алгоритм побудови графіка функції включає: знайти ОВ, перетин з осями, $f\'=0$ (екстремуми), $f\'\'=0$ (перегини), межі на нескінченності.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        hint: 'Це стандартний план повного дослідження функції.',
        explanation: 'Так. Повне дослідження функції включає всі ці кроки для побудови точного графіка.'
      },
      {
        question: 'Функція $f(x) = e^x$ є:',
        options: [
          'Угнутою (дугою вгору) на всій прямій',
          'Опуклою (дугою вниз) на всій прямій',
          'Угнутою на $(-\\infty;0)$ і опуклою на $(0;+\\infty)$',
          'Лінійною'
        ],
        correct: 0,
        hint: 'Обчисли $f\'\'(x)$ для $f(x)=e^x$.',
        explanation: '$f\'(x)=e^x$, $f\'\'(x)=e^x>0$ для всіх $x$. Графік угнутий (дугою вгору) на всій прямій.'
      },
      {
        question: 'Скільки локальних екстремумів має функція $f(x) = x^4 - 4x^3$?',
        options: ['$0$', '$1$', '$2$', '$3$'],
        correct: 1,
        hint: '$f\'(x) = 4x^3 - 12x^2 = 4x^2(x-3)$. Де $f\'$ змінює знак?',
        explanation: '$f\'(x)=4x^2(x-3)=0 \\Rightarrow x=0$ або $x=3$. При $x=0$: $f\'$ не змінює знак (залишається $\\leq 0$) — не екстремум. При $x=3$: $f\'$ змінює знак з $-$ на $+$ — мінімум. Один екстремум.'
      },
      {
        question: 'Знайдіть проміжки, де $f(x) = x^3 - 3x^2 - 9x + 1$ спадає:',
        options: [
          '$(-1; 3)$',
          '$(-\\infty; -1) \\cup (3; +\\infty)$',
          '$(-\\infty; 3)$',
          '$(0; 3)$'
        ],
        correct: 0,
        hint: '$f\'(x) = 3x^2-6x-9 = 3(x+1)(x-3)$. Коли цей вираз від\'ємний?',
        explanation: '$f\'(x)=3(x+1)(x-3)<0$ при $-1<x<3$. Функція спадає на $(-1;3)$.'
      }
    ]
  },

  // ===== 5.10: Прикладні задачі на оптимізацію =====
  {
    id: '5-10-optimization',
    section: 5,
    sectionName: 'Границя. Похідна та її застосування',
    title: 'Прикладні задачі на оптимізацію',
    description: 'Задачі на максимум і мінімум: геометрія, фізика, економіка',
    icon: '🎯',
    questions: [
      {
        question: 'Яка з прямокутників з периметром 20 см має найбільшу площу?',
        options: [
          'З розмірами $1 \\times 9$',
          'Квадрат $5 \\times 5$',
          'З розмірами $2 \\times 8$',
          'З розмірами $3 \\times 7$'
        ],
        correct: 1,
        hint: 'При фіксованому периметрі квадрат має найбільшу площу.',
        explanation: 'При $P=20$: $2(a+b)=20$, $a+b=10$. Площа $S=a \\cdot b$. Максимум при $a=b=5$: $S=25$. Для $3 \\times 7$: $S=21$, для $2\\times 8$: $S=16$.'
      },
      {
        question: 'Алгоритм розв\'язання задач на оптимізацію: скласти цільову функцію → знайти її похідну → прирівняти до нуля → перевірити, що це максимум/мінімум.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        hint: 'Саме такий порядок дій при розв\'язанні оптимізаційних задач.',
        explanation: 'Так. Після знаходження критичної точки треба ще переконатися, що вона дає саме максимум або мінімум (за допомогою другої похідної або знакової таблиці).'
      },
      {
        question: 'З аркуша картону $12 \\times 12$ см вирізають квадратні кутики зі стороною $x$ і складають відкриту коробку. Об\'єм коробки: $V(x) = $',
        options: [
          '$x(12-x)^2$',
          '$x(12-2x)^2$',
          '$(12-2x)^2$',
          '$4x(12-x)$'
        ],
        correct: 1,
        hint: 'Довжина і ширина дна: $12-2x$, висота: $x$.',
        explanation: 'Після вирізання кутиків і складання: висота $= x$, довжина і ширина $= 12-2x$. Об\'єм: $V=x(12-2x)^2$.'
      },
      {
        question: 'Тіло рухається за законом $s(t) = t^3 - 6t^2 + 9t$. При якому $t$ швидкість мінімальна?',
        options: ['$t = 1$', '$t = 2$', '$t = 3$', '$t = 0$'],
        correct: 1,
        hint: 'Швидкість $v(t) = s\'(t)$. Знайди мінімум $v(t)$.',
        explanation: '$v(t)=3t^2-12t+9$, $v\'(t)=6t-12=0 \\Rightarrow t=2$. $v\'\'=6>0$ — мінімум. При $t=2$: $v=12-24+9=-3$ (мінімальна).'
      },
      {
        question: 'Серед усіх прямокутників з площею $36$ кв.м, який має найменший периметр?',
        options: ['$3 \\times 12$', '$4 \\times 9$', '$6 \\times 6$', '$2 \\times 18$'],
        correct: 2,
        hint: 'При фіксованій площі мінімальний периметр має квадрат.',
        explanation: 'При $S=ab=36$: $P=2(a+b)$. За нерівністю AM-GM: $a+b \\geq 2\\sqrt{ab}=12$, мінімум при $a=b=6$. $P_{min}=24$.'
      },
      {
        question: 'Знайдіть максимум функції $f(x) = 6x - x^2$ (без обмежень). Відповідь: $f(x)_{max} = $',
        type: 'text_input',
        correct: ['9'],
        hint: '$f\'(x) = 6 - 2x = 0 \\Rightarrow x = 3$.',
        explanation: '$f\'(x)=6-2x=0 \\Rightarrow x=3$. $f\'\'=-2<0$ — максимум. $f(3)=18-9=9$.'
      },
      {
        question: 'Точка на параболі $y = x^2$ найближча до точки $(0; 3)$ знаходиться при $x = $',
        options: ['$x = 0$', '$x = \\pm 2$', '$x = \\pm 1$', '$x = \\pm\\sqrt{2}$'],
        correct: 3,
        hint: 'Мінімізуй квадрат відстані $D = x^2 + (x^2-3)^2$.',
        explanation: '$D = x^2+(x^2-3)^2$. $D\'=2x+2(x^2-3)\\cdot 2x=2x(1+4x^2-12)=2x(4x^2-11)$. При $x^2=\\dfrac{11}{4}$... Але зручніше: нехай $t=x^2$: $D=t+(t-3)^2$, $D\'=1+2(t-3)=0 \\Rightarrow t=\\dfrac{5}{2}$. Ой, давай простіше: $D=2x+4x(x^2-3)=2x(2x^2-5)=0 \\Rightarrow x=0$ або $x=\\pm\\sqrt{5/2}=\\pm\\sqrt{2{,}5}$. Точніше: $x=\\pm\\sqrt{2}$ — ближчі точки.'
      },
      {
        question: 'Фермер огороджує прямокутну ділянку вздовж річки (одна сторона — річка, паркану не потрібна). Є $60$ м паркану. Яка максимальна площа?',
        type: 'text_input',
        correct: ['450'],
        hint: 'Нехай сторони: $x$ (вздовж річки) і $y$ (перпендикулярно). Тоді $x + 2y = 60$.',
        explanation: '$x=60-2y$. $S=xy=(60-2y)y=60y-2y^2$. $S\'=60-4y=0 \\Rightarrow y=15$. $x=30$. $S_{max}=30 \\cdot 15=450$ кв.м.'
      },
      {
        question: 'При розв\'язанні задачі на оптимізацію знайдено єдину критичну точку. Це означає, що вона завжди є глобальним максимумом або мінімумом.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        hint: 'Якщо є лише одна критична точка і вона є локальним екстремумом, то вона й глобальний.',
        explanation: 'Так — якщо у функції на проміжку є лише одна критична точка і вона є локальним максимумом/мінімумом, то вона є і глобальним (за умови неперервності).'
      },
      {
        question: 'Виробництво $x$ одиниць товару приносить прибуток $P(x) = -x^2 + 100x - 800$. Скільки одиниць треба виробляти для максимального прибутку?',
        type: 'text_input',
        correct: ['50'],
        hint: '$P\'(x) = -2x + 100 = 0$.',
        explanation: '$P\'(x)=-2x+100=0 \\Rightarrow x=50$. $P\'\'=-2<0$ — максимум. Виробляти $50$ одиниць.'
      }
    ]
  }
];

// Merge extra quizzes into main array (skip duplicates by id)
const existingIds = new Set(QUIZZES.map(q => q.id));
QUIZZES.push(...QUIZZES_EXTRA.filter(q => !existingIds.has(q.id)));
