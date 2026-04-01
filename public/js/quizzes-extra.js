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
    ]
  }
];

// Merge extra quizzes into main array
QUIZZES.push(...QUIZZES_EXTRA);
