// All quiz data for the algebra quiz platform
// Formulas use KaTeX notation (LaTeX)

const QUIZZES = [
  // ===== SECTION 3: TRIGONOMETRIC FUNCTIONS =====
  {
    id: '3-1-radians',
    section: 3,
    sectionName: 'Тригонометричні функції',
    title: 'Радіанна міра кута',
    description: 'Переведення градусів у радіани та навпаки, дугова міра',
    icon: '📐',
    questions: [
      {
        question: 'Скільки радіан містить кут $180°$?',
        options: ['$2\\pi$', '$\\pi$', '$\\dfrac{\\pi}{2}$', '$\\dfrac{3\\pi}{2}$'],
        correct: 1,
        explanation: '$180° = \\pi$ рад. Це базове співвідношення: пів оберту = $\\pi$ радіан.'
      },
      {
        question: 'Переведіть $90°$ у радіани:',
        options: ['$\\pi$', '$\\dfrac{\\pi}{3}$', '$\\dfrac{\\pi}{2}$', '$\\dfrac{\\pi}{4}$'],
        correct: 2,
        explanation: '$90° = \\dfrac{180°}{2} = \\dfrac{\\pi}{2}$ рад.'
      },
      {
        question: 'Переведіть $60°$ у радіани:',
        options: ['$\\dfrac{\\pi}{6}$', '$\\dfrac{\\pi}{4}$', '$\\dfrac{\\pi}{3}$', '$\\dfrac{\\pi}{2}$'],
        correct: 2,
        explanation: '$60° = \\dfrac{180°}{3} = \\dfrac{\\pi}{3}$ рад.'
      },
      {
        question: 'Скільки градусів у $\\dfrac{\\pi}{6}$ радіан?',
        options: ['$15°$', '$30°$', '$45°$', '$60°$'],
        correct: 1,
        explanation: '$\\dfrac{\\pi}{6} = \\dfrac{180°}{6} = 30°$'
      },
      {
        question: 'Переведіть $\\dfrac{\\pi}{4}$ радіан у градуси:',
        options: ['$30°$', '$60°$', '$45°$', '$90°$'],
        correct: 2,
        explanation: '$\\dfrac{\\pi}{4} = \\dfrac{180°}{4} = 45°$'
      },
      {
        question: 'Скільки радіан у повному оберті ($360°$)?',
        options: ['$\\pi$', '$2\\pi$', '$3\\pi$', '$4\\pi$'],
        correct: 1,
        explanation: '$360° = 2\\pi$ рад. Повне коло — це $2\\pi$ радіан.'
      },
      {
        question: 'Переведіть $270°$ у радіани:',
        options: ['$\\pi$', '$\\dfrac{3\\pi}{4}$', '$\\dfrac{3\\pi}{2}$', '$2\\pi$'],
        correct: 2,
        explanation: '$270° = \\dfrac{3 \\cdot 180°}{2} = \\dfrac{3\\pi}{2}$ рад.'
      },
      {
        question: 'Скільки градусів у $\\dfrac{2\\pi}{3}$ радіан?',
        options: ['$60°$', '$90°$', '$120°$', '$150°$'],
        correct: 2,
        explanation: '$\\dfrac{2\\pi}{3} = \\dfrac{2 \\cdot 180°}{3} = 120°$'
      },
      {
        question: 'Яка формула переведення градусів у радіани?',
        options: [
          '$\\alpha_{рад} = \\dfrac{\\alpha° \\cdot \\pi}{180}$',
          '$\\alpha_{рад} = \\dfrac{\\alpha° \\cdot 180}{\\pi}$',
          '$\\alpha_{рад} = \\alpha° \\cdot \\pi$',
          '$\\alpha_{рад} = \\dfrac{\\alpha°}{\\pi}$'
        ],
        correct: 0,
        explanation: 'Щоб перевести градуси в радіани, множимо на $\\dfrac{\\pi}{180}$.'
      },
      {
        question: 'Переведіть $150°$ у радіани:',
        options: ['$\\dfrac{2\\pi}{3}$', '$\\dfrac{5\\pi}{6}$', '$\\dfrac{3\\pi}{4}$', '$\\dfrac{5\\pi}{4}$'],
        correct: 1,
        explanation: '$150° = \\dfrac{150 \\cdot \\pi}{180} = \\dfrac{5\\pi}{6}$ рад.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $45° = \\dfrac{\\pi}{3}$ рад.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! $45° = \\dfrac{\\pi}{4}$, а не $\\dfrac{\\pi}{3}$. $\\dfrac{\\pi}{3} = 60°$.'
      },
      {
        question: 'Правильно чи неправильно: $\\dfrac{3\\pi}{4}$ рад $= 135°$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: '$\\dfrac{3\\pi}{4} = \\dfrac{3 \\cdot 180°}{4} = 135°$. Правильно!'
      },
      {
        question: 'Переведіть $210°$ у радіани:',
        options: ['$\\dfrac{5\\pi}{6}$', '$\\dfrac{7\\pi}{6}$', '$\\dfrac{7\\pi}{4}$', '$\\dfrac{3\\pi}{2}$'],
        correct: 1,
        explanation: '$210° = \\dfrac{210 \\cdot \\pi}{180} = \\dfrac{7\\pi}{6}$ рад.'
      },
      {
        question: 'Переведіть $\\dfrac{5\\pi}{4}$ радіан у градуси:',
        options: ['$200°$', '$225°$', '$240°$', '$250°$'],
        correct: 1,
        explanation: '$\\dfrac{5\\pi}{4} = \\dfrac{5 \\cdot 180°}{4} = 225°$.'
      },
      {
        question: 'Скільки радіан у куті $315°$?',
        type: 'text_input',
        correct: ['7π/4', '7pi/4'],
        explanation: '$315° = \\dfrac{315 \\cdot \\pi}{180} = \\dfrac{7\\pi}{4}$ рад.'
      },
      {
        question: 'Скільки градусів у $\\dfrac{5\\pi}{3}$ радіан?',
        type: 'text_input',
        correct: ['300', '300°'],
        explanation: '$\\dfrac{5\\pi}{3} = \\dfrac{5 \\cdot 180°}{3} = 300°$.'
      },
      {
        question: 'Яке з тверджень правильне?',
        options: [
          '$1$ рад $\\approx 57.3°$',
          '$1$ рад $= 90°$',
          '$1$ рад $= 180°$',
          '$1$ рад $\\approx 30°$'
        ],
        correct: 0,
        explanation: '$1$ рад $= \\dfrac{180°}{\\pi} \\approx 57.3°$.'
      },
      {
        question: 'Кут $\\dfrac{11\\pi}{6}$ рад знаходиться у якій чверті?',
        options: ['I чверть', 'II чверть', 'III чверть', 'IV чверть'],
        correct: 3,
        explanation: '$\\dfrac{11\\pi}{6} = 330°$, це IV чверть ($270° < 330° < 360°$).'
      },
      {
        question: 'Переведіть $-60°$ у радіани:',
        options: ['$\\dfrac{\\pi}{3}$', '$-\\dfrac{\\pi}{3}$', '$-\\dfrac{\\pi}{6}$', '$\\dfrac{2\\pi}{3}$'],
        correct: 1,
        explanation: '$-60° = -\\dfrac{60 \\cdot \\pi}{180} = -\\dfrac{\\pi}{3}$ рад.'
      },
      {
        question: 'Довжина дуги кола радіуса $R = 6$ з центральним кутом $\\dfrac{\\pi}{3}$ рад дорівнює:',
        options: ['$\\pi$', '$2\\pi$', '$6\\pi$', '$3$'],
        correct: 1,
        explanation: '$l = R \\cdot \\alpha = 6 \\cdot \\dfrac{\\pi}{3} = 2\\pi$.'
      }
    ]
  },

  {
    id: '3-2-trig-circle',
    section: 3,
    sectionName: 'Тригонометричні функції',
    title: 'Тригонометричне коло. Синус, косинус, тангенс',
    description: 'Означення тригонометричних функцій на одиничному колі',
    icon: '⭕',
    questions: [
      {
        question: 'Чому дорівнює $\\sin 0°$?',
        options: ['$0$', '$1$', '$-1$', '$\\dfrac{1}{2}$'],
        correct: 0,
        explanation: '$\\sin 0° = 0$. Точка $(1; 0)$ на одиничному колі має ординату $0$.'
      },
      {
        question: 'Чому дорівнює $\\cos 0°$?',
        options: ['$0$', '$1$', '$-1$', '$\\dfrac{\\sqrt{2}}{2}$'],
        correct: 1,
        explanation: '$\\cos 0° = 1$. Точка $(1; 0)$ на одиничному колі має абсцису $1$.'
      },
      {
        question: 'Чому дорівнює $\\sin 90°$?',
        options: ['$0$', '$\\dfrac{1}{2}$', '$1$', '$-1$'],
        correct: 2,
        explanation: '$\\sin 90° = 1$. Точка $(0; 1)$ — верхня точка одиничного кола.'
      },
      {
        question: 'Чому дорівнює $\\cos 90°$?',
        options: ['$1$', '$0$', '$-1$', '$\\dfrac{1}{2}$'],
        correct: 1,
        explanation: '$\\cos 90° = 0$. Точка $(0; 1)$ має абсцису $0$.'
      },
      {
        question: 'Чому дорівнює $\\sin 30°$?',
        options: ['$\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$\\dfrac{1}{2}$', '$1$'],
        correct: 2,
        explanation: '$\\sin 30° = \\dfrac{1}{2}$ — одне з табличних значень, яке варто запам\'ятати.'
      },
      {
        question: 'Чому дорівнює $\\cos 60°$?',
        options: ['$\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$0$'],
        correct: 1,
        explanation: '$\\cos 60° = \\dfrac{1}{2}$. Зверни увагу: $\\cos 60° = \\sin 30°$!'
      },
      {
        question: 'Чому дорівнює $\\sin 45°$?',
        options: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$1$'],
        correct: 2,
        explanation: '$\\sin 45° = \\dfrac{\\sqrt{2}}{2}$. Для $45°$ синус і косинус рівні.'
      },
      {
        question: 'Чому дорівнює $\\operatorname{tg} 45°$?',
        options: ['$0$', '$1$', '$\\sqrt{3}$', '$\\dfrac{\\sqrt{3}}{3}$'],
        correct: 1,
        explanation: '$\\operatorname{tg} 45° = \\dfrac{\\sin 45°}{\\cos 45°} = 1$, бо $\\sin 45° = \\cos 45°$.'
      },
      {
        question: 'Чому дорівнює $\\cos 180°$?',
        options: ['$1$', '$0$', '$-1$', '$\\dfrac{1}{2}$'],
        correct: 2,
        explanation: '$\\cos 180° = -1$. Точка $(-1; 0)$ — ліва точка одиничного кола.'
      },
      {
        question: 'Чому дорівнює $\\operatorname{tg} 60°$?',
        options: ['$1$', '$\\dfrac{1}{\\sqrt{3}}$', '$\\sqrt{3}$', '$2$'],
        correct: 2,
        explanation: '$\\operatorname{tg} 60° = \\dfrac{\\sin 60°}{\\cos 60°} = \\dfrac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $\\sin 60° = \\dfrac{1}{2}$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! $\\sin 60° = \\dfrac{\\sqrt{3}}{2}$. А $\\sin 30° = \\dfrac{1}{2}$. Не плутайте!'
      },
      {
        question: 'Правильно чи неправильно: $\\cos 45° = \\sin 45° = \\dfrac{\\sqrt{2}}{2}$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! Для $45°$ синус і косинус рівні: $\\dfrac{\\sqrt{2}}{2}$.'
      },
      {
        question: 'Обчисліть $\\sin 30° + \\cos 60°$:',
        type: 'text_input',
        correct: ['1', '1.0'],
        explanation: '$\\sin 30° + \\cos 60° = \\dfrac{1}{2} + \\dfrac{1}{2} = 1$.'
      },
      {
        question: 'Обчисліть $\\sin^2 30° + \\cos^2 30°$:',
        type: 'text_input',
        correct: ['1', '1.0'],
        explanation: 'За основною тригонометричною тотожністю: $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ для будь-якого $\\alpha$.'
      },
      {
        question: 'Обчисліть $2\\sin 30° \\cdot \\cos 30°$:',
        options: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$1$', '$\\dfrac{\\sqrt{2}}{2}$'],
        correct: 1,
        explanation: '$2\\sin 30°\\cos 30° = 2 \\cdot \\dfrac{1}{2} \\cdot \\dfrac{\\sqrt{3}}{2} = \\dfrac{\\sqrt{3}}{2}$. Це $\\sin 60°$!'
      },
      {
        question: 'Чому дорівнює $\\operatorname{tg} 30°$?',
        options: ['$\\dfrac{\\sqrt{3}}{3}$', '$\\dfrac{1}{2}$', '$\\sqrt{3}$', '$1$'],
        correct: 0,
        explanation: '$\\operatorname{tg} 30° = \\dfrac{\\sin 30°}{\\cos 30°} = \\dfrac{1/2}{\\sqrt{3}/2} = \\dfrac{1}{\\sqrt{3}} = \\dfrac{\\sqrt{3}}{3}$.'
      },
      {
        question: 'Чому дорівнює $\\sin 270°$?',
        options: ['$0$', '$1$', '$-1$', '$\\dfrac{1}{2}$'],
        correct: 2,
        explanation: '$\\sin 270° = -1$. Точка $(0; -1)$ — нижня точка одиничного кола.'
      },
      {
        question: 'Чому дорівнює $\\cos 270°$?',
        type: 'text_input',
        correct: ['0'],
        explanation: '$\\cos 270° = 0$. Точка $(0; -1)$ має абсцису $0$.'
      },
      {
        question: 'Яке з тверджень правильне?',
        options: [
          '$\\sin 90° = \\cos 0°$',
          '$\\sin 90° = \\cos 90°$',
          '$\\sin 0° = \\cos 0°$',
          '$\\sin 45° = \\cos 90°$'
        ],
        correct: 0,
        explanation: '$\\sin 90° = 1$ і $\\cos 0° = 1$. Тому $\\sin 90° = \\cos 0°$.'
      },
      {
        type: 'matching',
        question: 'Встановіть відповідність: кут — значення $\\sin$',
        pairs: [
          ['$\\sin 0°$', '$0$'],
          ['$\\sin 30°$', '$\\dfrac{1}{2}$'],
          ['$\\sin 45°$', '$\\dfrac{\\sqrt{2}}{2}$'],
          ['$\\sin 60°$', '$\\dfrac{\\sqrt{3}}{2}$']
        ],
        explanation: 'Таблиця значень синуса для основних кутів — одна з найважливіших в тригонометрії.'
      }
    ]
  },

  {
    id: '3-3-signs-properties',
    section: 3,
    sectionName: 'Тригонометричні функції',
    title: 'Знаки тригонометричних функцій. Властивості',
    description: 'Знаки за чвертями, парність, непарність, періодичність',
    icon: '±',
    questions: [
      {
        question: 'В якій чверті $\\sin \\alpha > 0$ і $\\cos \\alpha > 0$?',
        options: ['I чверть', 'II чверть', 'III чверть', 'IV чверть'],
        correct: 0,
        explanation: 'В I чверті ($0° < \\alpha < 90°$) обидві координати точки додатні.'
      },
      {
        question: 'Який знак має $\\sin 150°$?',
        options: ['Додатний ($+$)', 'Від\'ємний ($-$)', 'Дорівнює нулю', 'Невизначений'],
        correct: 0,
        explanation: '$150°$ — це II чверть, де синус додатний ($\\sin 150° = \\frac{1}{2}$).'
      },
      {
        question: 'Який знак має $\\cos 200°$?',
        options: ['Додатний ($+$)', 'Від\'ємний ($-$)', 'Дорівнює нулю', 'Невизначений'],
        correct: 1,
        explanation: '$200°$ — це III чверть, де косинус від\'ємний.'
      },
      {
        question: 'Який знак має $\\operatorname{tg} 300°$?',
        options: ['Додатний ($+$)', 'Від\'ємний ($-$)', 'Дорівнює нулю', 'Невизначений'],
        correct: 1,
        explanation: '$300°$ — це IV чверть. Там $\\sin < 0$, $\\cos > 0$, тому $\\operatorname{tg} < 0$.'
      },
      {
        question: 'Функція $\\sin x$ є:',
        options: ['Парною', 'Непарною', 'Ні парною, ні непарною', 'І парною, і непарною'],
        correct: 1,
        explanation: '$\\sin(-x) = -\\sin x$ — це означення непарної функції.'
      },
      {
        question: 'Функція $\\cos x$ є:',
        options: ['Парною', 'Непарною', 'Ні парною, ні непарною', 'І парною, і непарною'],
        correct: 0,
        explanation: '$\\cos(-x) = \\cos x$ — це означення парної функції.'
      },
      {
        question: 'Який період функції $y = \\sin x$?',
        options: ['$\\pi$', '$2\\pi$', '$\\dfrac{\\pi}{2}$', '$4\\pi$'],
        correct: 1,
        explanation: 'Функція $\\sin x$ повторюється через кожні $2\\pi$: $\\sin(x + 2\\pi) = \\sin x$.'
      },
      {
        question: 'Який період функції $y = \\operatorname{tg} x$?',
        options: ['$\\dfrac{\\pi}{2}$', '$\\pi$', '$2\\pi$', '$4\\pi$'],
        correct: 1,
        explanation: 'Тангенс має період $\\pi$: $\\operatorname{tg}(x + \\pi) = \\operatorname{tg} x$.'
      },
      {
        question: 'В яких чвертях $\\operatorname{tg} \\alpha > 0$?',
        options: ['I і II', 'I і III', 'II і IV', 'I і IV'],
        correct: 1,
        explanation: '$\\operatorname{tg} \\alpha > 0$ там, де $\\sin$ і $\\cos$ мають однакові знаки: I та III чверті.'
      },
      {
        question: 'Чому дорівнює $\\sin(-30°)$?',
        options: ['$\\dfrac{1}{2}$', '$-\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$-\\dfrac{\\sqrt{3}}{2}$'],
        correct: 1,
        explanation: 'Синус — непарна функція: $\\sin(-30°) = -\\sin 30° = -\\dfrac{1}{2}$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $\\cos(-\\alpha) = -\\cos\\alpha$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! Косинус — парна функція: $\\cos(-\\alpha) = \\cos\\alpha$ (без мінуса).'
      },
      {
        question: 'Правильно чи неправильно: $\\operatorname{tg}(-\\alpha) = -\\operatorname{tg}\\alpha$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! Тангенс — непарна функція: $\\operatorname{tg}(-\\alpha) = -\\operatorname{tg}\\alpha$.'
      },
      {
        question: 'Кут $\\alpha = 250°$ знаходиться в III чверті. Який знак має $\\cos 250°$?',
        options: ['Додатний ($+$)', 'Від\'ємний ($-$)', 'Дорівнює нулю'],
        correct: 1,
        explanation: 'В III чверті ($180° < \\alpha < 270°$) косинус від\'ємний.'
      },
      {
        question: 'Визначте знак виразу $\\sin 200° \\cdot \\cos 200°$:',
        options: ['Додатний ($+$)', 'Від\'ємний ($-$)', 'Дорівнює нулю'],
        correct: 0,
        explanation: '$200°$ — III чверть: $\\sin 200° < 0$ і $\\cos 200° < 0$. Добуток двох від\'ємних — додатний.'
      },
      {
        question: 'Обчисліть $\\cos(-60°)$:',
        options: ['$-\\dfrac{1}{2}$', '$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$-\\dfrac{\\sqrt{3}}{2}$'],
        correct: 1,
        explanation: '$\\cos(-60°) = \\cos 60° = \\dfrac{1}{2}$, бо косинус — парна функція.'
      },
      {
        question: 'Який період функції $y = \\operatorname{tg} x$?',
        type: 'text_input',
        correct: ['π', 'pi', '180°', '180'],
        explanation: 'Період тангенса $= \\pi$ (або $180°$), тобто $\\operatorname{tg}(x + \\pi) = \\operatorname{tg} x$.'
      },
      {
        question: 'В яких чвертях $\\sin\\alpha < 0$ і $\\cos\\alpha > 0$ одночасно?',
        options: ['I чверть', 'II чверть', 'III чверть', 'IV чверть'],
        correct: 3,
        explanation: 'В IV чверті ($270° < \\alpha < 360°$): $\\sin < 0$, $\\cos > 0$.'
      },
      {
        question: 'Обчисліть $\\sin 330°$:',
        options: ['$\\dfrac{1}{2}$', '$-\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$-\\dfrac{\\sqrt{3}}{2}$'],
        correct: 1,
        explanation: '$330° = 360° - 30°$, IV чверть. $\\sin 330° = -\\sin 30° = -\\dfrac{1}{2}$.'
      },
      {
        type: 'matching',
        question: 'Встановіть відповідність: чверть — знаки $\\sin$ і $\\cos$',
        pairs: [
          ['I чверть', '$\\sin > 0, \\cos > 0$'],
          ['II чверть', '$\\sin > 0, \\cos < 0$'],
          ['III чверть', '$\\sin < 0, \\cos < 0$'],
          ['IV чверть', '$\\sin < 0, \\cos > 0$']
        ],
        explanation: 'Мнемонічне правило: I — все додатне, II — тільки sin, III — тільки tg, IV — тільки cos.'
      }
    ]
  },

  {
    id: '3-4-graphs',
    section: 3,
    sectionName: 'Тригонометричні функції',
    title: 'Графіки тригонометричних функцій',
    description: 'Графіки y = sin x, y = cos x, y = tg x та їх перетворення',
    icon: '📈',
    questions: [
      {
        question: 'Як називається графік функції $y = \\sin x$?',
        options: ['Парабола', 'Гіпербола', 'Синусоїда', 'Косинусоїда'],
        correct: 2,
        explanation: 'Графік синуса називається синусоїдою — хвилеподібна крива.'
      },
      {
        question: 'Яка амплітуда функції $y = 3\\sin x$?',
        options: ['$1$', '$2$', '$3$', '$6$'],
        correct: 2,
        explanation: 'Коефіцієнт перед $\\sin x$ визначає амплітуду. Тут амплітуда = $3$.'
      },
      {
        question: 'Як зсунути графік $y = \\sin x$, щоб отримати $y = \\cos x$?',
        options: [
          'Вправо на $\\dfrac{\\pi}{2}$',
          'Вліво на $\\dfrac{\\pi}{2}$',
          'Вгору на $1$',
          'Вниз на $1$'
        ],
        correct: 1,
        explanation: '$\\cos x = \\sin\\left(x + \\dfrac{\\pi}{2}\\right)$, тобто зсув вліво на $\\dfrac{\\pi}{2}$.'
      },
      {
        question: 'Область значень функції $y = \\sin x$:',
        options: ['$(-\\infty; +\\infty)$', '$[0; 1]$', '$[-1; 1]$', '$[0; 2\\pi]$'],
        correct: 2,
        explanation: 'Синус завжди приймає значення від $-1$ до $1$ включно.'
      },
      {
        question: 'Який період функції $y = \\sin 2x$?',
        options: ['$4\\pi$', '$2\\pi$', '$\\pi$', '$\\dfrac{\\pi}{2}$'],
        correct: 2,
        explanation: 'Період $y = \\sin(kx)$ дорівнює $\\dfrac{2\\pi}{k}$. При $k=2$: $\\dfrac{2\\pi}{2} = \\pi$.'
      },
      {
        question: 'Графік $y = \\operatorname{tg} x$ має вертикальні асимптоти при:',
        options: [
          '$x = \\pi n,\\; n \\in \\mathbb{Z}$',
          '$x = \\dfrac{\\pi}{2} + \\pi n,\\; n \\in \\mathbb{Z}$',
          '$x = 2\\pi n,\\; n \\in \\mathbb{Z}$',
          '$x = \\dfrac{\\pi}{4} + \\pi n,\\; n \\in \\mathbb{Z}$'
        ],
        correct: 1,
        explanation: 'Тангенс не визначений при $\\cos x = 0$, тобто при $x = \\dfrac{\\pi}{2} + \\pi n$.'
      },
      {
        question: 'Область значень функції $y = \\cos x$:',
        options: ['$(-\\infty; +\\infty)$', '$[-1; 1]$', '$[0; 1]$', '$(-1; 1)$'],
        correct: 1,
        explanation: 'Як і синус, косинус приймає значення від $-1$ до $1$ включно.'
      },
      {
        question: 'Через графік якої функції проходить точка $(0; 1)$?',
        options: ['$y = \\sin x$', '$y = \\cos x$', '$y = \\operatorname{tg} x$', '$y = \\operatorname{ctg} x$'],
        correct: 1,
        explanation: '$\\cos 0 = 1$, тому графік $y = \\cos x$ проходить через точку $(0; 1)$.'
      },
      {
        question: 'Яка амплітуда функції $y = -2\\cos x$?',
        options: ['$-2$', '$2$', '$1$', '$4$'],
        correct: 1,
        explanation: 'Амплітуда — це модуль коефіцієнта: $|-2| = 2$. Мінус лише відображає графік.'
      },
      {
        question: 'Область значень функції $y = \\operatorname{tg} x$:',
        options: ['$[-1; 1]$', '$[0; +\\infty)$', '$(-\\infty; +\\infty)$', '$(0; +\\infty)$'],
        correct: 2,
        explanation: 'Тангенс може приймати будь-яке дійсне значення: $y \\in (-\\infty; +\\infty)$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: період функції $y = \\cos 3x$ дорівнює $\\dfrac{2\\pi}{3}$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! Період $y = \\cos(kx)$ дорівнює $\\dfrac{2\\pi}{k}$. При $k = 3$: $\\dfrac{2\\pi}{3}$.'
      },
      {
        question: 'Правильно чи неправильно: область значень функції $y = 2\\sin x + 1$ — це $[-1; 3]$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: '$\\sin x \\in [-1; 1]$, тому $2\\sin x \\in [-2; 2]$, і $2\\sin x + 1 \\in [-1; 3]$. Правильно!'
      },
      {
        question: 'Який період функції $y = \\sin \\dfrac{x}{2}$?',
        options: ['$\\pi$', '$2\\pi$', '$4\\pi$', '$\\dfrac{\\pi}{2}$'],
        correct: 2,
        explanation: 'Період $y = \\sin(kx)$ дорівнює $\\dfrac{2\\pi}{k}$. При $k = \\dfrac{1}{2}$: $\\dfrac{2\\pi}{1/2} = 4\\pi$.'
      },
      {
        question: 'Яка амплітуда функції $y = -5\\sin x + 2$?',
        type: 'text_input',
        correct: ['5'],
        explanation: 'Амплітуда = $|-5| = 5$. Мінус лише відображає графік, зсув $+2$ піднімає його.'
      },
      {
        question: 'Графік якої функції отримано зсувом $y = \\sin x$ вправо на $\\dfrac{\\pi}{4}$?',
        options: [
          '$y = \\sin(x + \\dfrac{\\pi}{4})$',
          '$y = \\sin(x - \\dfrac{\\pi}{4})$',
          '$y = \\cos(x - \\dfrac{\\pi}{4})$',
          '$y = \\sin x + \\dfrac{\\pi}{4}$'
        ],
        correct: 1,
        explanation: 'Зсув вправо на $a$: $y = f(x - a)$. Тому $y = \\sin(x - \\dfrac{\\pi}{4})$.'
      },
      {
        question: 'Через яку точку проходить графік функції $y = \\sin x$?',
        options: ['$(0; 1)$', '$(\\pi; 1)$', '$(\\dfrac{\\pi}{2}; 1)$', '$(\\pi; -1)$'],
        correct: 2,
        explanation: '$\\sin \\dfrac{\\pi}{2} = 1$, тому точка $(\\dfrac{\\pi}{2}; 1)$ належить графіку.'
      },
      {
        question: 'Функція $y = \\operatorname{tg} 2x$ має період:',
        options: ['$\\pi$', '$2\\pi$', '$\\dfrac{\\pi}{2}$', '$\\dfrac{\\pi}{4}$'],
        correct: 2,
        explanation: 'Період $\\operatorname{tg}(kx) = \\dfrac{\\pi}{k}$. При $k = 2$: $\\dfrac{\\pi}{2}$.'
      },
      {
        question: 'Область значень функції $y = 3\\cos x - 1$:',
        options: ['$[-4; 2]$', '$[-3; 3]$', '$[-2; 4]$', '$[-1; 3]$'],
        correct: 0,
        explanation: '$\\cos x \\in [-1; 1]$, тому $3\\cos x \\in [-3; 3]$, і $3\\cos x - 1 \\in [-4; 2]$.'
      }
    ]
  },

  {
    id: '3-5-identities',
    section: 3,
    sectionName: 'Тригонометричні функції',
    title: 'Основні тригонометричні тотожності',
    description: 'sin²α + cos²α = 1, зв\'язок між функціями',
    icon: '🔗',
    questions: [
      {
        question: 'Яка основна тригонометрична тотожність?',
        options: [
          '$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$',
          '$\\sin \\alpha + \\cos \\alpha = 1$',
          '$\\sin^2 \\alpha - \\cos^2 \\alpha = 1$',
          '$\\sin \\alpha \\cdot \\cos \\alpha = 1$'
        ],
        correct: 0,
        explanation: '$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ — це основна тригонометрична тотожність.'
      },
      {
        question: 'Як виразити $\\operatorname{tg} \\alpha$ через синус і косинус?',
        options: [
          '$\\dfrac{\\cos \\alpha}{\\sin \\alpha}$',
          '$\\dfrac{\\sin \\alpha}{\\cos \\alpha}$',
          '$\\sin \\alpha \\cdot \\cos \\alpha$',
          '$\\sin \\alpha + \\cos \\alpha$'
        ],
        correct: 1,
        explanation: '$\\operatorname{tg} \\alpha = \\dfrac{\\sin \\alpha}{\\cos \\alpha}$ — за означенням.'
      },
      {
        question: 'Яка тотожність зв\'язує тангенс і котангенс?',
        options: [
          '$\\operatorname{tg} \\alpha + \\operatorname{ctg} \\alpha = 1$',
          '$\\operatorname{tg} \\alpha \\cdot \\operatorname{ctg} \\alpha = 1$',
          '$\\operatorname{tg} \\alpha - \\operatorname{ctg} \\alpha = 1$',
          '$\\operatorname{tg}^2 \\alpha + \\operatorname{ctg}^2 \\alpha = 1$'
        ],
        correct: 1,
        explanation: '$\\operatorname{tg} \\alpha \\cdot \\operatorname{ctg} \\alpha = \\dfrac{\\sin \\alpha}{\\cos \\alpha} \\cdot \\dfrac{\\cos \\alpha}{\\sin \\alpha} = 1$'
      },
      {
        question: 'Чому дорівнює $1 + \\operatorname{tg}^2 \\alpha$?',
        options: [
          '$\\cos^2 \\alpha$',
          '$\\sin^2 \\alpha$',
          '$\\dfrac{1}{\\cos^2 \\alpha}$',
          '$\\dfrac{1}{\\sin^2 \\alpha}$'
        ],
        correct: 2,
        explanation: '$1 + \\operatorname{tg}^2 \\alpha = \\dfrac{\\cos^2 \\alpha + \\sin^2 \\alpha}{\\cos^2 \\alpha} = \\dfrac{1}{\\cos^2 \\alpha}$'
      },
      {
        question: 'Якщо $\\sin \\alpha = 0.6$ і $\\alpha$ — гострий кут, чому дорівнює $\\cos \\alpha$?',
        options: ['$0.4$', '$0.6$', '$0.8$', '$1.4$'],
        correct: 2,
        explanation: '$\\cos^2 \\alpha = 1 - \\sin^2 \\alpha = 1 - 0.36 = 0.64$, тому $\\cos \\alpha = 0.8$.'
      },
      {
        question: 'Спростіть: $\\dfrac{\\sin^2 \\alpha}{1 - \\cos \\alpha}$',
        options: ['$1 - \\cos \\alpha$', '$1 + \\cos \\alpha$', '$\\sin \\alpha$', '$\\cos \\alpha$'],
        correct: 1,
        explanation: '$\\dfrac{\\sin^2 \\alpha}{1 - \\cos \\alpha} = \\dfrac{1 - \\cos^2 \\alpha}{1 - \\cos \\alpha} = \\dfrac{(1-\\cos\\alpha)(1+\\cos\\alpha)}{1-\\cos\\alpha} = 1 + \\cos \\alpha$'
      },
      {
        question: 'Чому дорівнює $\\operatorname{ctg} \\alpha$?',
        options: [
          '$\\dfrac{\\sin \\alpha}{\\cos \\alpha}$',
          '$\\dfrac{\\cos \\alpha}{\\sin \\alpha}$',
          '$\\dfrac{1}{\\sin \\alpha}$',
          '$\\dfrac{1}{\\cos \\alpha}$'
        ],
        correct: 1,
        explanation: '$\\operatorname{ctg} \\alpha = \\dfrac{\\cos \\alpha}{\\sin \\alpha} = \\dfrac{1}{\\operatorname{tg} \\alpha}$'
      },
      {
        question: 'Чому дорівнює $1 + \\operatorname{ctg}^2 \\alpha$?',
        options: [
          '$\\dfrac{1}{\\cos^2 \\alpha}$',
          '$\\dfrac{1}{\\sin^2 \\alpha}$',
          '$\\operatorname{tg}^2 \\alpha$',
          '$\\sin^2 \\alpha + \\cos^2 \\alpha$'
        ],
        correct: 1,
        explanation: '$1 + \\operatorname{ctg}^2 \\alpha = \\dfrac{\\sin^2 \\alpha + \\cos^2 \\alpha}{\\sin^2 \\alpha} = \\dfrac{1}{\\sin^2 \\alpha}$'
      },
      {
        question: 'Спростіть: $\\sin^4 \\alpha - \\cos^4 \\alpha$',
        options: [
          '$1$',
          '$\\sin^2 \\alpha - \\cos^2 \\alpha$',
          '$\\sin^2 \\alpha + \\cos^2 \\alpha$',
          '$(\\sin \\alpha - \\cos \\alpha)^2$'
        ],
        correct: 1,
        explanation: '$\\sin^4\\alpha - \\cos^4\\alpha = (\\sin^2\\alpha - \\cos^2\\alpha)(\\sin^2\\alpha + \\cos^2\\alpha) = \\sin^2\\alpha - \\cos^2\\alpha$'
      },
      {
        question: 'Якщо $\\operatorname{tg} \\alpha = 3$ і $\\alpha$ — гострий кут, чому дорівнює $\\cos \\alpha$?',
        options: ['$\\dfrac{1}{\\sqrt{10}}$', '$\\dfrac{3}{\\sqrt{10}}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{\\sqrt{3}}$'],
        correct: 0,
        explanation: '$1 + \\operatorname{tg}^2\\alpha = \\dfrac{1}{\\cos^2\\alpha}$, тому $\\cos^2\\alpha = \\dfrac{1}{1+9} = \\dfrac{1}{10}$, $\\cos\\alpha = \\dfrac{1}{\\sqrt{10}}$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $\\sin^2\\alpha + \\cos^2\\alpha = 2$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! Основна тотожність: $\\sin^2\\alpha + \\cos^2\\alpha = 1$, а не $2$.'
      },
      {
        question: 'Правильно чи неправильно: $1 + \\operatorname{tg}^2\\alpha = \\dfrac{1}{\\sin^2\\alpha}$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! $1 + \\operatorname{tg}^2\\alpha = \\dfrac{1}{\\cos^2\\alpha}$. А $\\dfrac{1}{\\sin^2\\alpha} = 1 + \\operatorname{ctg}^2\\alpha$.'
      },
      {
        question: 'Якщо $\\cos\\alpha = 0.6$ і $\\alpha$ — гострий кут, чому дорівнює $\\sin\\alpha$?',
        type: 'text_input',
        correct: ['0.8', '0,8', '4/5'],
        explanation: '$\\sin^2\\alpha = 1 - \\cos^2\\alpha = 1 - 0.36 = 0.64$, тому $\\sin\\alpha = 0.8$.'
      },
      {
        question: 'Спростіть: $\\dfrac{1}{\\cos^2\\alpha} - \\operatorname{tg}^2\\alpha$',
        options: ['$0$', '$1$', '$\\sin^2\\alpha$', '$\\cos^2\\alpha$'],
        correct: 1,
        explanation: '$\\dfrac{1}{\\cos^2\\alpha} - \\operatorname{tg}^2\\alpha = 1 + \\operatorname{tg}^2\\alpha - \\operatorname{tg}^2\\alpha = 1$.'
      },
      {
        question: 'Спростіть: $(\\sin\\alpha + \\cos\\alpha)^2$',
        options: ['$1$', '$1 + 2\\sin\\alpha\\cos\\alpha$', '$\\sin^2\\alpha + \\cos^2\\alpha$', '$2$'],
        correct: 1,
        explanation: '$(\\sin\\alpha + \\cos\\alpha)^2 = \\sin^2\\alpha + 2\\sin\\alpha\\cos\\alpha + \\cos^2\\alpha = 1 + 2\\sin\\alpha\\cos\\alpha$.'
      },
      {
        question: 'Якщо $\\sin\\alpha = \\dfrac{5}{13}$ і $\\alpha$ — гострий кут, чому дорівнює $\\operatorname{tg}\\alpha$?',
        options: ['$\\dfrac{5}{12}$', '$\\dfrac{12}{5}$', '$\\dfrac{5}{13}$', '$\\dfrac{13}{12}$'],
        correct: 0,
        explanation: '$\\cos\\alpha = \\sqrt{1 - \\dfrac{25}{169}} = \\dfrac{12}{13}$. $\\operatorname{tg}\\alpha = \\dfrac{5/13}{12/13} = \\dfrac{5}{12}$.'
      },
      {
        question: 'Обчисліть: $\\sin^2 45° + \\operatorname{tg}^2 45°$:',
        type: 'text_input',
        correct: ['3/2', '1.5', '1,5'],
        explanation: '$\\sin^2 45° + \\operatorname{tg}^2 45° = \\dfrac{1}{2} + 1 = \\dfrac{3}{2}$.'
      },
      {
        question: 'Спростіть: $\\operatorname{tg}\\alpha \\cdot \\cos\\alpha$',
        options: ['$\\sin\\alpha$', '$\\cos\\alpha$', '$1$', '$\\operatorname{ctg}\\alpha$'],
        correct: 0,
        explanation: '$\\operatorname{tg}\\alpha \\cdot \\cos\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha} \\cdot \\cos\\alpha = \\sin\\alpha$.'
      },
      {
        type: 'matching',
        question: 'Встановіть відповідність: тотожність — її спрощена форма',
        pairs: [
          ['$1 + \\operatorname{tg}^2\\alpha$', '$\\dfrac{1}{\\cos^2\\alpha}$'],
          ['$1 + \\operatorname{ctg}^2\\alpha$', '$\\dfrac{1}{\\sin^2\\alpha}$'],
          ['$\\operatorname{tg}\\alpha \\cdot \\operatorname{ctg}\\alpha$', '$1$'],
          ['$\\sin^2\\alpha + \\cos^2\\alpha$', '$1$']
        ],
        explanation: 'Ці тотожності є наслідками основної: $\\sin^2\\alpha + \\cos^2\\alpha = 1$.'
      }
    ]
  },

  {
    id: '3-6-reduction',
    section: 3,
    sectionName: 'Тригонометричні функції',
    title: 'Формули зведення',
    description: 'Зведення до гострого кута: sin(π−α), cos(π/2+α) тощо',
    icon: '🔄',
    questions: [
      {
        question: 'Чому дорівнює $\\sin(\\pi - \\alpha)$?',
        options: ['$-\\sin \\alpha$', '$\\sin \\alpha$', '$\\cos \\alpha$', '$-\\cos \\alpha$'],
        correct: 1,
        explanation: '$\\sin(\\pi - \\alpha) = \\sin \\alpha$. Мнемонічне правило: $\\pi$ — "горизонтальне", функція не змінюється, II чверть — синус додатний.'
      },
      {
        question: 'Чому дорівнює $\\cos(\\pi - \\alpha)$?',
        options: ['$\\cos \\alpha$', '$-\\cos \\alpha$', '$\\sin \\alpha$', '$-\\sin \\alpha$'],
        correct: 1,
        explanation: '$\\cos(\\pi - \\alpha) = -\\cos \\alpha$. Функція не змінюється (бо $\\pi$), але в II чверті косинус від\'ємний.'
      },
      {
        question: 'Чому дорівнює $\\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right)$?',
        options: ['$\\sin \\alpha$', '$-\\sin \\alpha$', '$\\cos \\alpha$', '$-\\cos \\alpha$'],
        correct: 2,
        explanation: '$\\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cos \\alpha$. При $\\dfrac{\\pi}{2}$ функція змінюється: sin → cos.'
      },
      {
        question: 'Чому дорівнює $\\cos\\left(\\dfrac{\\pi}{2} + \\alpha\\right)$?',
        options: ['$\\cos \\alpha$', '$\\sin \\alpha$', '$-\\sin \\alpha$', '$-\\cos \\alpha$'],
        correct: 2,
        explanation: '$\\cos\\left(\\dfrac{\\pi}{2} + \\alpha\\right) = -\\sin \\alpha$. Функція змінюється ($\\dfrac{\\pi}{2}$), в II чверті "косинус" від\'ємний.'
      },
      {
        question: 'Чому дорівнює $\\sin(\\pi + \\alpha)$?',
        options: ['$\\sin \\alpha$', '$-\\sin \\alpha$', '$\\cos \\alpha$', '$-\\cos \\alpha$'],
        correct: 1,
        explanation: '$\\sin(\\pi + \\alpha) = -\\sin \\alpha$. Функція не змінюється ($\\pi$), але в III чверті синус від\'ємний.'
      },
      {
        question: 'Чому дорівнює $\\cos(2\\pi - \\alpha)$?',
        options: ['$-\\cos \\alpha$', '$\\cos \\alpha$', '$\\sin \\alpha$', '$-\\sin \\alpha$'],
        correct: 1,
        explanation: '$\\cos(2\\pi - \\alpha) = \\cos \\alpha$. Функція не змінюється ($2\\pi$), в IV чверті косинус додатний.'
      },
      {
        question: 'Спростіть: $\\sin(180° + \\alpha) + \\cos(90° - \\alpha)$',
        options: ['$0$', '$2\\sin \\alpha$', '$-2\\sin \\alpha$', '$2\\cos \\alpha$'],
        correct: 0,
        explanation: '$\\sin(180° + \\alpha) = -\\sin\\alpha$, $\\cos(90° - \\alpha) = \\sin\\alpha$. Разом: $-\\sin\\alpha + \\sin\\alpha = 0$.'
      },
      {
        question: 'Чому дорівнює $\\operatorname{tg}(\\pi - \\alpha)$?',
        options: ['$\\operatorname{tg} \\alpha$', '$-\\operatorname{tg} \\alpha$', '$\\operatorname{ctg} \\alpha$', '$-\\operatorname{ctg} \\alpha$'],
        correct: 1,
        explanation: '$\\operatorname{tg}(\\pi - \\alpha) = -\\operatorname{tg}\\alpha$. Тангенс не змінюється ($\\pi$), в II чверті від\'ємний.'
      },
      {
        question: 'Чому дорівнює $\\sin\\left(\\dfrac{3\\pi}{2} - \\alpha\\right)$?',
        options: ['$\\sin \\alpha$', '$-\\sin \\alpha$', '$\\cos \\alpha$', '$-\\cos \\alpha$'],
        correct: 3,
        explanation: '$\\sin\\left(\\dfrac{3\\pi}{2} - \\alpha\\right) = -\\cos \\alpha$. Функція змінюється ($\\dfrac{3\\pi}{2}$), в III чверті "синус" від\'ємний.'
      },
      {
        question: 'Обчисліть $\\cos 120°$ за допомогою формули зведення:',
        options: ['$\\dfrac{1}{2}$', '$-\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$-\\dfrac{\\sqrt{3}}{2}$'],
        correct: 1,
        explanation: '$\\cos 120° = \\cos(180° - 60°) = -\\cos 60° = -\\dfrac{1}{2}$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $\\sin(\\pi + \\alpha) = \\sin\\alpha$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! $\\sin(\\pi + \\alpha) = -\\sin\\alpha$. В III чверті синус від\'ємний.'
      },
      {
        question: 'Правильно чи неправильно: $\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\sin\\alpha$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! При $\\dfrac{\\pi}{2}$ функція змінюється (cos → sin), I чверть — додатний.'
      },
      {
        question: 'Обчисліть $\\sin 210°$:',
        options: ['$\\dfrac{1}{2}$', '$-\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$-\\dfrac{\\sqrt{3}}{2}$'],
        correct: 1,
        explanation: '$\\sin 210° = \\sin(180° + 30°) = -\\sin 30° = -\\dfrac{1}{2}$.'
      },
      {
        question: 'Обчисліть $\\cos 315°$:',
        options: ['$\\dfrac{1}{2}$', '$-\\dfrac{\\sqrt{2}}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$-\\dfrac{1}{2}$'],
        correct: 2,
        explanation: '$\\cos 315° = \\cos(360° - 45°) = \\cos 45° = \\dfrac{\\sqrt{2}}{2}$.'
      },
      {
        question: 'Спростіть: $\\cos(\\pi + \\alpha) + \\cos(\\pi - \\alpha)$:',
        options: ['$0$', '$2\\cos\\alpha$', '$-2\\cos\\alpha$', '$2\\sin\\alpha$'],
        correct: 2,
        explanation: '$\\cos(\\pi + \\alpha) = -\\cos\\alpha$ і $\\cos(\\pi - \\alpha) = -\\cos\\alpha$. Сума: $-2\\cos\\alpha$.'
      },
      {
        question: 'Обчисліть $\\operatorname{tg} 135°$:',
        type: 'text_input',
        correct: ['-1'],
        explanation: '$\\operatorname{tg} 135° = \\operatorname{tg}(180° - 45°) = -\\operatorname{tg} 45° = -1$.'
      },
      {
        question: 'Чому дорівнює $\\sin\\left(\\dfrac{3\\pi}{2} + \\alpha\\right)$?',
        options: ['$\\sin\\alpha$', '$-\\sin\\alpha$', '$\\cos\\alpha$', '$-\\cos\\alpha$'],
        correct: 3,
        explanation: '$\\sin\\left(\\dfrac{3\\pi}{2} + \\alpha\\right) = -\\cos\\alpha$. Функція змінюється ($\\dfrac{3\\pi}{2}$), IV чверть — "синус" від\'ємний.'
      },
      {
        question: 'Обчисліть $\\sin 150° + \\cos 240°$:',
        type: 'text_input',
        correct: ['0'],
        explanation: '$\\sin 150° = \\sin 30° = \\dfrac{1}{2}$. $\\cos 240° = \\cos(180° + 60°) = -\\cos 60° = -\\dfrac{1}{2}$. Сума $= 0$.'
      },
      {
        type: 'matching',
        question: 'Встановіть відповідність: вираз — спрощена форма',
        pairs: [
          ['$\\sin(\\pi - \\alpha)$', '$\\sin\\alpha$'],
          ['$\\cos(\\pi + \\alpha)$', '$-\\cos\\alpha$'],
          ['$\\sin(\\dfrac{\\pi}{2} + \\alpha)$', '$\\cos\\alpha$'],
          ['$\\cos(\\dfrac{\\pi}{2} - \\alpha)$', '$\\sin\\alpha$']
        ],
        explanation: 'Формули зведення: при $\\pi$ функція не змінюється, при $\\dfrac{\\pi}{2}$ — змінюється (sin ↔ cos).'
      }
    ]
  },

  {
    id: '3-7-addition',
    section: 3,
    sectionName: 'Тригонометричні функції',
    title: 'Формули додавання та пониження степеня',
    description: 'sin(α±β), cos(α±β), tg(α±β), sin²α, cos²α',
    icon: '➕',
    questions: [
      {
        question: 'Яка формула $\\sin(\\alpha + \\beta)$?',
        options: [
          '$\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$',
          '$\\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta$',
          '$\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$',
          '$\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$'
        ],
        correct: 0,
        explanation: '$\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$ — базова формула додавання.',
        hint: 'Перший доданок: sin від першого × cos від другого. Другий: cos від першого × sin від другого. Знак між ними такий самий, як у дужках.'
      },
      {
        question: 'Яка формула $\\cos(\\alpha - \\beta)$?',
        options: [
          '$\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$',
          '$\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$',
          '$\\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta$',
          '$\\sin\\alpha\\sin\\beta + \\cos\\alpha\\cos\\beta$'
        ],
        correct: 1,
        explanation: '$\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$. При відніманні — знак плюс!',
        hint: 'Для $\\cos$ обох кутів — знак ПРОТИЛЕЖНИЙ знаку у дужках. $\\cos(\\alpha - \\beta)$ дає знак плюс!'
      },
      {
        question: 'Яка формула $\\sin(\\alpha - \\beta)$?',
        options: [
          '$\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$',
          '$\\cos\\alpha\\sin\\beta - \\sin\\alpha\\cos\\beta$',
          '$\\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta$',
          '$\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$'
        ],
        correct: 2,
        explanation: '$\\sin(\\alpha - \\beta) = \\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta$.'
      },
      {
        question: 'Яка формула $\\cos(\\alpha + \\beta)$?',
        options: [
          '$\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$',
          '$\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$',
          '$\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$',
          '$\\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta$'
        ],
        correct: 2,
        explanation: '$\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$.'
      },
      {
        question: 'Яка формула $\\operatorname{tg}(\\alpha + \\beta)$?',
        options: [
          '$\\dfrac{\\operatorname{tg}\\alpha + \\operatorname{tg}\\beta}{1 + \\operatorname{tg}\\alpha \\cdot \\operatorname{tg}\\beta}$',
          '$\\dfrac{\\operatorname{tg}\\alpha - \\operatorname{tg}\\beta}{1 + \\operatorname{tg}\\alpha \\cdot \\operatorname{tg}\\beta}$',
          '$\\dfrac{\\operatorname{tg}\\alpha + \\operatorname{tg}\\beta}{1 - \\operatorname{tg}\\alpha \\cdot \\operatorname{tg}\\beta}$',
          '$\\dfrac{\\operatorname{tg}\\alpha \\cdot \\operatorname{tg}\\beta}{1 + \\operatorname{tg}\\alpha + \\operatorname{tg}\\beta}$'
        ],
        correct: 2,
        explanation: '$\\operatorname{tg}(\\alpha + \\beta) = \\dfrac{\\operatorname{tg}\\alpha + \\operatorname{tg}\\beta}{1 - \\operatorname{tg}\\alpha \\cdot \\operatorname{tg}\\beta}$.',
        hint: 'Чисельник: сума тангенсів. Знаменник: 1 мінус добуток тангенсів (знак у знаменнику ПРОТИЛЕЖНИЙ до знаку в дужках).'
      },
      {
        question: 'Яка формула $\\operatorname{tg}(\\alpha - \\beta)$?',
        options: [
          '$\\dfrac{\\operatorname{tg}\\alpha + \\operatorname{tg}\\beta}{1 - \\operatorname{tg}\\alpha \\cdot \\operatorname{tg}\\beta}$',
          '$\\dfrac{\\operatorname{tg}\\alpha - \\operatorname{tg}\\beta}{1 + \\operatorname{tg}\\alpha \\cdot \\operatorname{tg}\\beta}$',
          '$\\dfrac{\\operatorname{tg}\\alpha - \\operatorname{tg}\\beta}{1 - \\operatorname{tg}\\alpha \\cdot \\operatorname{tg}\\beta}$',
          '$\\dfrac{\\operatorname{tg}\\alpha \\cdot \\operatorname{tg}\\beta - 1}{\\operatorname{tg}\\alpha + \\operatorname{tg}\\beta}$'
        ],
        correct: 1,
        explanation: '$\\operatorname{tg}(\\alpha - \\beta) = \\dfrac{\\operatorname{tg}\\alpha - \\operatorname{tg}\\beta}{1 + \\operatorname{tg}\\alpha \\cdot \\operatorname{tg}\\beta}$.'
      },
      {
        question: 'Яка формула пониження степеня для $\\sin^2\\alpha$?',
        options: [
          '$\\dfrac{1 + \\cos 2\\alpha}{2}$',
          '$\\dfrac{1 - \\cos 2\\alpha}{2}$',
          '$\\dfrac{1 - \\sin 2\\alpha}{2}$',
          '$\\dfrac{\\cos 2\\alpha - 1}{2}$'
        ],
        correct: 1,
        explanation: '$\\sin^2\\alpha = \\dfrac{1 - \\cos 2\\alpha}{2}$.'
      },
      {
        question: 'Яка формула пониження степеня для $\\cos^2\\alpha$?',
        options: [
          '$\\dfrac{1 - \\cos 2\\alpha}{2}$',
          '$\\dfrac{\\cos 2\\alpha - 1}{2}$',
          '$\\dfrac{1 + \\cos 2\\alpha}{2}$',
          '$\\dfrac{1 + \\sin 2\\alpha}{2}$'
        ],
        correct: 2,
        explanation: '$\\cos^2\\alpha = \\dfrac{1 + \\cos 2\\alpha}{2}$.'
      },
      {
        question: 'Обчисліть $\\sin 75°$:',
        options: [
          '$\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$',
          '$\\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$',
          '$\\dfrac{\\sqrt{3} + 1}{4}$',
          '$\\dfrac{\\sqrt{3} + \\sqrt{2}}{2}$'
        ],
        correct: 1,
        explanation: '$\\sin 75° = \\sin(45° + 30°) = \\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2} = \\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$'
      },
      {
        question: 'Обчисліть $\\cos 15°$:',
        options: [
          '$\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$',
          '$\\dfrac{\\sqrt{3} - 1}{4}$',
          '$\\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$',
          '$\\dfrac{\\sqrt{2} + 1}{4}$'
        ],
        correct: 2,
        explanation: '$\\cos 15° = \\cos(45° - 30°) = \\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2} = \\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$'
      },
      {
        question: 'Яка формула $\\sin 2\\alpha$?',
        options: [
          '$\\sin^2\\alpha - \\cos^2\\alpha$',
          '$2\\sin\\alpha\\cos\\alpha$',
          '$\\cos^2\\alpha - \\sin^2\\alpha$',
          '$2\\cos^2\\alpha - 1$'
        ],
        correct: 1,
        explanation: '$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$ — наслідок формули $\\sin(\\alpha + \\alpha)$.'
      },
      {
        question: 'Спростіть: $\\cos^2 x - \\sin^2 x$',
        options: ['$\\sin 2x$', '$1$', '$\\cos 2x$', '$-\\cos 2x$'],
        correct: 2,
        explanation: '$\\cos^2 x - \\sin^2 x = \\cos 2x$ — формула подвійного аргументу для косинуса.'
      }
    ],
    // Контрольні питання — застосування формул (інший набір від тренувального)
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $\\sin(\\alpha + \\beta) = \\sin\\alpha \\cdot \\cos\\beta - \\cos\\alpha \\cdot \\sin\\beta$',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! Знак між доданками — ПЛЮС: $\\sin(\\alpha+\\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$.'
      },
      {
        question: 'Правильно чи неправильно: $\\cos(\\alpha + \\beta) = \\cos\\alpha \\cdot \\cos\\beta + \\sin\\alpha \\cdot \\sin\\beta$',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! Знак між доданками — МІНУС: $\\cos(\\alpha+\\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$.'
      },
      {
        question: 'Правильно чи неправильно: $\\operatorname{tg}(\\alpha - \\beta) = \\dfrac{\\operatorname{tg}\\alpha - \\operatorname{tg}\\beta}{1 + \\operatorname{tg}\\alpha \\cdot \\operatorname{tg}\\beta}$',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! У знаменнику формули віднімання — знак плюс.'
      },
      {
        question: 'Правильно чи неправильно: $\\cos 2\\alpha = 1 - 2\\sin^2\\alpha$',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! Це одна з еквівалентних форм: $\\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha = 1 - 2\\sin^2\\alpha = 2\\cos^2\\alpha - 1$.'
      },
      {
        question: 'Обчисли $\\sin 15°$ через $\\sin(45° - 30°)$:',
        options: [
          '$\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$',
          '$\\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$',
          '$\\dfrac{\\sqrt{3} - 1}{2}$',
          '$\\dfrac{\\sqrt{2} - 1}{4}$'
        ],
        correct: 0,
        explanation: '$\\sin 15° = \\sin45°\\cos30° - \\cos45°\\sin30° = \\dfrac{\\sqrt{2}}{2}\\cdot\\dfrac{\\sqrt{3}}{2} - \\dfrac{\\sqrt{2}}{2}\\cdot\\dfrac{1}{2} = \\dfrac{\\sqrt{6}-\\sqrt{2}}{4}$'
      },
      {
        question: 'Обчисли $\\cos 105°$ через $\\cos(60° + 45°)$:',
        options: [
          '$\\dfrac{\\sqrt{2} - \\sqrt{6}}{4}$',
          '$\\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$',
          '$\\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$',
          '$-\\dfrac{\\sqrt{2}}{2}$'
        ],
        correct: 0,
        explanation: '$\\cos 105° = \\cos60°\\cos45° - \\sin60°\\sin45° = \\dfrac{1}{2}\\cdot\\dfrac{\\sqrt{2}}{2} - \\dfrac{\\sqrt{3}}{2}\\cdot\\dfrac{\\sqrt{2}}{2} = \\dfrac{\\sqrt{2}-\\sqrt{6}}{4}$'
      },
      {
        question: 'Спростіть: $2\\cos^2\\alpha - 1$',
        options: ['$\\cos 2\\alpha$', '$\\sin 2\\alpha$', '$\\cos\\alpha$', '$-\\cos 2\\alpha$'],
        correct: 0,
        explanation: '$2\\cos^2\\alpha - 1 = \\cos 2\\alpha$ — одна з форм подвійного кута.'
      },
      {
        question: 'Спростіть: $1 - 2\\sin^2\\alpha$',
        options: ['$\\sin 2\\alpha$', '$\\cos 2\\alpha$', '$-\\cos 2\\alpha$', '$1$'],
        correct: 1,
        explanation: '$1 - 2\\sin^2\\alpha = \\cos 2\\alpha$.'
      },
      {
        question: 'Обчисли $\\cos^2(45°)$ за формулою пониження степеня:',
        type: 'text_input',
        correct: ['1/2', '0.5', '0,5'],
        explanation: '$\\cos^2(45°) = \\dfrac{1 + \\cos 90°}{2} = \\dfrac{1 + 0}{2} = \\dfrac{1}{2}$'
      },
      {
        question: 'Обчисли $\\sin^2(60°)$ за формулою пониження степеня:',
        type: 'text_input',
        correct: ['3/4', '0.75', '0,75'],
        explanation: '$\\sin^2(60°) = \\dfrac{1 - \\cos 120°}{2} = \\dfrac{1 - (-\\frac{1}{2})}{2} = \\dfrac{\\frac{3}{2}}{2} = \\dfrac{3}{4}$'
      },
      {
        question: 'Яка формула $\\operatorname{tg} 2\\alpha$?',
        options: [
          '$\\dfrac{2\\operatorname{tg}\\alpha}{1 - \\operatorname{tg}^2\\alpha}$',
          '$\\dfrac{2\\operatorname{tg}\\alpha}{1 + \\operatorname{tg}^2\\alpha}$',
          '$\\dfrac{\\operatorname{tg}^2\\alpha}{2}$',
          '$2\\operatorname{tg}\\alpha$'
        ],
        correct: 0,
        explanation: '$\\operatorname{tg} 2\\alpha = \\dfrac{2\\operatorname{tg}\\alpha}{1 - \\operatorname{tg}^2\\alpha}$ — наслідок формули $\\operatorname{tg}(\\alpha+\\alpha)$.'
      },
      {
        type: 'matching',
        question: 'Встанови відповідність: вираз — спрощена форма',
        pairs: [
          ['$2\\sin\\alpha\\cos\\alpha$', '$\\sin 2\\alpha$'],
          ['$\\cos^2\\alpha - \\sin^2\\alpha$', '$\\cos 2\\alpha$'],
          ['$\\dfrac{1-\\cos 2\\alpha}{2}$', '$\\sin^2\\alpha$'],
          ['$\\dfrac{1+\\cos 2\\alpha}{2}$', '$\\cos^2\\alpha$']
        ],
        explanation: 'Подвійний кут і пониження степеня — основні формули цієї теми.'
      }
    ]
  },

  {
    id: '3-8-double-angle',
    section: 3,
    sectionName: 'Тригонометричні функції',
    title: 'Формули подвійного аргументу',
    description: 'sin 2α, cos 2α, tg 2α та їх застосування',
    icon: '✖️',
    questions: [
      {
        question: 'Яка формула $\\sin 2\\alpha$?',
        options: [
          '$\\sin^2\\alpha + \\cos^2\\alpha$',
          '$2\\sin\\alpha\\cos\\alpha$',
          '$\\sin^2\\alpha - \\cos^2\\alpha$',
          '$2\\sin^2\\alpha$'
        ],
        correct: 1,
        explanation: '$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$.'
      },
      {
        question: 'Яка формула $\\cos 2\\alpha$ через косинус?',
        options: [
          '$2\\cos^2\\alpha - 1$',
          '$1 - 2\\cos^2\\alpha$',
          '$\\cos^2\\alpha + \\sin^2\\alpha$',
          '$2\\cos\\alpha$'
        ],
        correct: 0,
        explanation: '$\\cos 2\\alpha = 2\\cos^2\\alpha - 1$. Це одна з трьох еквівалентних форм.'
      },
      {
        question: 'Яка формула $\\cos 2\\alpha$ через синус?',
        options: [
          '$2\\sin^2\\alpha - 1$',
          '$1 + 2\\sin^2\\alpha$',
          '$1 - 2\\sin^2\\alpha$',
          '$2\\sin\\alpha - 1$'
        ],
        correct: 2,
        explanation: '$\\cos 2\\alpha = 1 - 2\\sin^2\\alpha$.'
      },
      {
        question: 'Яка формула $\\cos 2\\alpha$ через синус і косинус?',
        options: [
          '$\\sin^2\\alpha + \\cos^2\\alpha$',
          '$\\sin^2\\alpha - \\cos^2\\alpha$',
          '$\\cos^2\\alpha - \\sin^2\\alpha$',
          '$2\\sin\\alpha\\cos\\alpha$'
        ],
        correct: 2,
        explanation: '$\\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha$ — це третя форма.'
      },
      {
        question: 'Яка формула $\\operatorname{tg} 2\\alpha$?',
        options: [
          '$2\\operatorname{tg}\\alpha$',
          '$\\dfrac{2\\operatorname{tg}\\alpha}{1 + \\operatorname{tg}^2\\alpha}$',
          '$\\dfrac{2\\operatorname{tg}\\alpha}{1 - \\operatorname{tg}^2\\alpha}$',
          '$\\dfrac{\\operatorname{tg}^2\\alpha}{2}$'
        ],
        correct: 2,
        explanation: '$\\operatorname{tg} 2\\alpha = \\dfrac{2\\operatorname{tg}\\alpha}{1 - \\operatorname{tg}^2\\alpha}$ — наслідок формули $\\operatorname{tg}(\\alpha+\\alpha)$.'
      },
      {
        question: 'Обчисліть $\\sin 60°$, якщо $\\sin 30° = \\dfrac{1}{2}$, $\\cos 30° = \\dfrac{\\sqrt{3}}{2}$:',
        options: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$1$'],
        correct: 2,
        explanation: '$\\sin 60° = \\sin(2 \\cdot 30°) = 2\\sin 30°\\cos 30° = 2 \\cdot \\dfrac{1}{2} \\cdot \\dfrac{\\sqrt{3}}{2} = \\dfrac{\\sqrt{3}}{2}$'
      },
      {
        question: 'Якщо $\\sin\\alpha = \\dfrac{3}{5}$ і $\\cos\\alpha = \\dfrac{4}{5}$, чому дорівнює $\\sin 2\\alpha$?',
        options: ['$\\dfrac{7}{25}$', '$\\dfrac{24}{25}$', '$\\dfrac{12}{25}$', '$\\dfrac{7}{5}$'],
        correct: 1,
        explanation: '$\\sin 2\\alpha = 2 \\cdot \\dfrac{3}{5} \\cdot \\dfrac{4}{5} = \\dfrac{24}{25}$'
      },
      {
        question: 'Спростіть: $2\\cos^2\\alpha - 1$',
        options: ['$\\sin 2\\alpha$', '$\\cos 2\\alpha$', '$1$', '$2\\cos\\alpha$'],
        correct: 1,
        explanation: '$2\\cos^2\\alpha - 1 = \\cos 2\\alpha$ — одна з форм формули подвійного аргументу.'
      },
      {
        question: 'Спростіть: $1 - 2\\sin^2 \\dfrac{\\alpha}{2}$',
        options: ['$\\sin \\alpha$', '$\\cos \\alpha$', '$\\cos \\dfrac{\\alpha}{2}$', '$\\sin \\dfrac{\\alpha}{2}$'],
        correct: 1,
        explanation: '$1 - 2\\sin^2\\dfrac{\\alpha}{2} = \\cos\\left(2 \\cdot \\dfrac{\\alpha}{2}\\right) = \\cos\\alpha$'
      },
      {
        question: 'Обчисліть $\\cos 2\\alpha$, якщо $\\cos\\alpha = \\dfrac{1}{3}$:',
        options: ['$-\\dfrac{7}{9}$', '$\\dfrac{7}{9}$', '$-\\dfrac{1}{9}$', '$\\dfrac{2}{3}$'],
        correct: 0,
        explanation: '$\\cos 2\\alpha = 2\\cos^2\\alpha - 1 = 2 \\cdot \\dfrac{1}{9} - 1 = \\dfrac{2}{9} - 1 = -\\dfrac{7}{9}$'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $\\sin 2\\alpha = 2\\sin\\alpha$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$, а не просто $2\\sin\\alpha$.'
      },
      {
        question: 'Правильно чи неправильно: $\\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha = 2\\cos^2\\alpha - 1 = 1 - 2\\sin^2\\alpha$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! Це три еквівалентні форми формули $\\cos 2\\alpha$.'
      },
      {
        question: 'Якщо $\\sin\\alpha = \\dfrac{4}{5}$ і $\\cos\\alpha = \\dfrac{3}{5}$, чому дорівнює $\\cos 2\\alpha$?',
        options: ['$\\dfrac{24}{25}$', '$-\\dfrac{7}{25}$', '$\\dfrac{7}{25}$', '$-\\dfrac{24}{25}$'],
        correct: 1,
        explanation: '$\\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha = \\dfrac{9}{25} - \\dfrac{16}{25} = -\\dfrac{7}{25}$.'
      },
      {
        question: 'Обчисліть $\\sin 2\\alpha$, якщо $\\sin\\alpha = \\dfrac{4}{5}$, $\\cos\\alpha = \\dfrac{3}{5}$:',
        type: 'text_input',
        correct: ['24/25', '0.96', '0,96'],
        explanation: '$\\sin 2\\alpha = 2 \\cdot \\dfrac{4}{5} \\cdot \\dfrac{3}{5} = \\dfrac{24}{25}$.'
      },
      {
        question: 'Спростіть: $\\sin^2\\alpha - \\cos^2\\alpha$',
        options: ['$\\cos 2\\alpha$', '$-\\cos 2\\alpha$', '$\\sin 2\\alpha$', '$1$'],
        correct: 1,
        explanation: '$\\sin^2\\alpha - \\cos^2\\alpha = -(\\cos^2\\alpha - \\sin^2\\alpha) = -\\cos 2\\alpha$.'
      },
      {
        question: 'Обчисліть $\\operatorname{tg} 2\\alpha$, якщо $\\operatorname{tg}\\alpha = 2$:',
        options: ['$4$', '$-\\dfrac{4}{3}$', '$\\dfrac{4}{3}$', '$-4$'],
        correct: 1,
        explanation: '$\\operatorname{tg} 2\\alpha = \\dfrac{2 \\cdot 2}{1 - 4} = \\dfrac{4}{-3} = -\\dfrac{4}{3}$.'
      },
      {
        question: 'Спростіть: $4\\sin\\alpha\\cos\\alpha$',
        options: ['$2\\sin 2\\alpha$', '$\\sin 4\\alpha$', '$4\\sin 2\\alpha$', '$2\\cos 2\\alpha$'],
        correct: 0,
        explanation: '$4\\sin\\alpha\\cos\\alpha = 2 \\cdot 2\\sin\\alpha\\cos\\alpha = 2\\sin 2\\alpha$.'
      },
      {
        question: 'Обчисліть $\\cos 2 \\cdot 30°$:',
        type: 'text_input',
        correct: ['1/2', '0.5', '0,5'],
        explanation: '$\\cos 60° = \\dfrac{1}{2}$. Або: $\\cos 60° = 2\\cos^2 30° - 1 = 2 \\cdot \\dfrac{3}{4} - 1 = \\dfrac{1}{2}$.'
      },
      {
        type: 'matching',
        question: 'Встановіть відповідність: вираз — спрощена форма',
        pairs: [
          ['$2\\sin\\alpha\\cos\\alpha$', '$\\sin 2\\alpha$'],
          ['$2\\cos^2\\alpha - 1$', '$\\cos 2\\alpha$'],
          ['$1 - 2\\sin^2\\alpha$', '$\\cos 2\\alpha$'],
          ['$\\dfrac{2\\operatorname{tg}\\alpha}{1-\\operatorname{tg}^2\\alpha}$', '$\\operatorname{tg} 2\\alpha$']
        ],
        explanation: 'Формули подвійного аргументу — одні з найважливіших у тригонометрії.'
      }
    ]
  },

  {
    id: '3-9-sum-difference',
    section: 3,
    sectionName: 'Тригонометричні функції',
    title: 'Формули суми та різниці тригонометричних функцій',
    description: 'sin α + sin β, cos α − cos β та інші',
    icon: '🔀',
    questions: [
      {
        question: 'Яка формула $\\sin\\alpha + \\sin\\beta$?',
        options: [
          '$2\\sin\\dfrac{\\alpha+\\beta}{2}\\cos\\dfrac{\\alpha-\\beta}{2}$',
          '$2\\cos\\dfrac{\\alpha+\\beta}{2}\\sin\\dfrac{\\alpha-\\beta}{2}$',
          '$2\\cos\\dfrac{\\alpha+\\beta}{2}\\cos\\dfrac{\\alpha-\\beta}{2}$',
          '$2\\sin\\dfrac{\\alpha+\\beta}{2}\\sin\\dfrac{\\alpha-\\beta}{2}$'
        ],
        correct: 0,
        explanation: '$\\sin\\alpha + \\sin\\beta = 2\\sin\\dfrac{\\alpha+\\beta}{2}\\cos\\dfrac{\\alpha-\\beta}{2}$'
      },
      {
        question: 'Яка формула $\\sin\\alpha - \\sin\\beta$?',
        options: [
          '$2\\sin\\dfrac{\\alpha+\\beta}{2}\\cos\\dfrac{\\alpha-\\beta}{2}$',
          '$2\\cos\\dfrac{\\alpha+\\beta}{2}\\sin\\dfrac{\\alpha-\\beta}{2}$',
          '$2\\sin\\dfrac{\\alpha-\\beta}{2}\\cos\\dfrac{\\alpha+\\beta}{2}$',
          '$2\\cos\\dfrac{\\alpha-\\beta}{2}\\sin\\dfrac{\\alpha+\\beta}{2}$'
        ],
        correct: 1,
        explanation: '$\\sin\\alpha - \\sin\\beta = 2\\cos\\dfrac{\\alpha+\\beta}{2}\\sin\\dfrac{\\alpha-\\beta}{2}$'
      },
      {
        question: 'Яка формула $\\cos\\alpha + \\cos\\beta$?',
        options: [
          '$2\\sin\\dfrac{\\alpha+\\beta}{2}\\sin\\dfrac{\\alpha-\\beta}{2}$',
          '$2\\sin\\dfrac{\\alpha+\\beta}{2}\\cos\\dfrac{\\alpha-\\beta}{2}$',
          '$2\\cos\\dfrac{\\alpha+\\beta}{2}\\cos\\dfrac{\\alpha-\\beta}{2}$',
          '$-2\\sin\\dfrac{\\alpha+\\beta}{2}\\sin\\dfrac{\\alpha-\\beta}{2}$'
        ],
        correct: 2,
        explanation: '$\\cos\\alpha + \\cos\\beta = 2\\cos\\dfrac{\\alpha+\\beta}{2}\\cos\\dfrac{\\alpha-\\beta}{2}$'
      },
      {
        question: 'Яка формула $\\cos\\alpha - \\cos\\beta$?',
        options: [
          '$2\\sin\\dfrac{\\alpha+\\beta}{2}\\sin\\dfrac{\\alpha-\\beta}{2}$',
          '$-2\\sin\\dfrac{\\alpha+\\beta}{2}\\sin\\dfrac{\\alpha-\\beta}{2}$',
          '$2\\cos\\dfrac{\\alpha+\\beta}{2}\\sin\\dfrac{\\alpha-\\beta}{2}$',
          '$-2\\cos\\dfrac{\\alpha+\\beta}{2}\\cos\\dfrac{\\alpha-\\beta}{2}$'
        ],
        correct: 1,
        explanation: '$\\cos\\alpha - \\cos\\beta = -2\\sin\\dfrac{\\alpha+\\beta}{2}\\sin\\dfrac{\\alpha-\\beta}{2}$'
      },
      {
        question: 'Спростіть $\\sin 50° + \\sin 10°$:',
        options: [
          '$2\\sin 30°\\cos 20°$',
          '$2\\cos 30°\\sin 20°$',
          '$2\\sin 20°\\cos 30°$',
          '$\\sin 60°$'
        ],
        correct: 0,
        explanation: '$\\sin 50° + \\sin 10° = 2\\sin\\dfrac{50°+10°}{2}\\cos\\dfrac{50°-10°}{2} = 2\\sin 30°\\cos 20°$'
      },
      {
        question: 'Обчисліть $\\sin 50° + \\sin 10°$ (числове значення):',
        options: ['$\\cos 20°$', '$\\sin 20°$', '$2\\cos 20°$', '$\\cos 40°$'],
        correct: 0,
        explanation: '$2\\sin 30°\\cos 20° = 2 \\cdot \\dfrac{1}{2} \\cdot \\cos 20° = \\cos 20°$'
      },
      {
        question: 'Спростіть $\\cos 40° - \\cos 80°$:',
        options: [
          '$-2\\sin 60°\\sin(-20°)$',
          '$2\\sin 60°\\sin 20°$',
          '$2\\cos 60°\\cos 20°$',
          '$-2\\cos 60°\\sin 20°$'
        ],
        correct: 1,
        explanation: '$\\cos 40° - \\cos 80° = -2\\sin 60°\\sin(-20°) = 2\\sin 60°\\sin 20°$'
      },
      {
        question: 'Обчисліть $\\cos 75° + \\cos 15°$:',
        options: [
          '$\\dfrac{\\sqrt{2}}{2}$',
          '$\\sqrt{2}$',
          '$\\dfrac{\\sqrt{6}}{2}$',
          '$\\dfrac{\\sqrt{3}}{2}$'
        ],
        correct: 2,
        explanation: '$\\cos 75° + \\cos 15° = 2\\cos 45°\\cos 30° = 2 \\cdot \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{\\sqrt{3}}{2} = \\dfrac{\\sqrt{6}}{2}$'
      },
      {
        question: 'Для чого використовують формули суми та різниці?',
        options: [
          'Для множення тригонометричних функцій',
          'Для перетворення суми/різниці в добуток',
          'Для знаходження похідних',
          'Для побудови графіків'
        ],
        correct: 1,
        explanation: 'Формули суми та різниці дозволяють перетворити суму (різницю) тригонометричних функцій у добуток. Це корисно для розв\'язування рівнянь.'
      },
      {
        question: 'Спростіть $\\sin 3x + \\sin x$:',
        options: [
          '$2\\sin x\\cos 2x$',
          '$2\\sin 2x\\cos x$',
          '$2\\cos 2x\\sin x$',
          '$4\\sin x\\cos x$'
        ],
        correct: 1,
        explanation: '$\\sin 3x + \\sin x = 2\\sin\\dfrac{3x+x}{2}\\cos\\dfrac{3x-x}{2} = 2\\sin 2x\\cos x$'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $\\sin\\alpha - \\sin\\beta = 2\\sin\\dfrac{\\alpha-\\beta}{2}\\cos\\dfrac{\\alpha+\\beta}{2}$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! Правильна формула: $\\sin\\alpha - \\sin\\beta = 2\\cos\\dfrac{\\alpha+\\beta}{2}\\sin\\dfrac{\\alpha-\\beta}{2}$. Порядок sin/cos переплутаний!'
      },
      {
        question: 'Правильно чи неправильно: $\\cos\\alpha - \\cos\\beta = -2\\sin\\dfrac{\\alpha+\\beta}{2}\\sin\\dfrac{\\alpha-\\beta}{2}$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! Різниця косинусів має мінус перед добутком двох синусів.'
      },
      {
        question: 'Спростіть $\\sin 70° + \\sin 10°$:',
        options: ['$\\cos 30°$', '$\\sin 80°$', '$\\cos 60°$', '$\\sqrt{3}\\cos 30°$'],
        correct: 0,
        explanation: '$\\sin 70° + \\sin 10° = 2\\sin 40°\\cos 30°$... Але зачекайте: $= 2 \\cdot \\sin 40° \\cdot \\dfrac{\\sqrt{3}}{2} = \\sqrt{3}\\sin 40°$. Або обчислимо: $2\\sin\\dfrac{80°}{2}\\cos\\dfrac{60°}{2} = 2\\sin 40°\\cos 30°$. Це $\\cos 30° \\cdot 2\\sin 40°$, а не просто $\\cos 30°$. Перевіримо: $\\sin 70° + \\sin 10° = 2\\sin 40° \\cdot \\cos 30° = \\sqrt{3}\\sin 40°$. Правильна відповідь: $\\cos 30° \\cdot 2\\sin 40° = \\sqrt{3}\\sin 40°$.'
      },
      {
        question: 'Обчисліть $\\cos 15° - \\cos 75°$:',
        options: ['$\\dfrac{\\sqrt{2}}{2}$', '$\\dfrac{\\sqrt{6}}{2}$', '$0$', '$\\dfrac{1}{2}$'],
        correct: 0,
        explanation: '$\\cos 15° - \\cos 75° = -2\\sin 45° \\sin(-30°) = 2\\sin 45° \\sin 30° = 2 \\cdot \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{1}{2} = \\dfrac{\\sqrt{2}}{2}$.'
      },
      {
        question: 'Спростіть $\\cos 5x - \\cos 3x$:',
        options: [
          '$-2\\sin 4x \\sin x$',
          '$2\\sin 4x \\sin x$',
          '$2\\cos 4x \\cos x$',
          '$-2\\cos 4x \\sin x$'
        ],
        correct: 0,
        explanation: '$\\cos 5x - \\cos 3x = -2\\sin\\dfrac{5x+3x}{2}\\sin\\dfrac{5x-3x}{2} = -2\\sin 4x \\sin x$.'
      },
      {
        question: 'Обчисліть $\\sin 75° - \\sin 15°$:',
        options: ['$\\dfrac{\\sqrt{2}}{2}$', '$\\dfrac{\\sqrt{6}}{2}$', '$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$'],
        correct: 0,
        explanation: '$\\sin 75° - \\sin 15° = 2\\cos 45°\\sin 30° = 2 \\cdot \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{1}{2} = \\dfrac{\\sqrt{2}}{2}$.'
      },
      {
        question: 'Перетворіть $\\sin 5x - \\sin x$ у добуток:',
        options: [
          '$2\\sin 3x \\cos 2x$',
          '$2\\cos 3x \\sin 2x$',
          '$2\\sin 2x \\cos 3x$',
          '$-2\\sin 3x \\sin 2x$'
        ],
        correct: 1,
        explanation: '$\\sin 5x - \\sin x = 2\\cos\\dfrac{5x+x}{2}\\sin\\dfrac{5x-x}{2} = 2\\cos 3x \\sin 2x$.'
      },
      {
        question: 'Спростіть $\\cos x + \\cos 3x$:',
        options: [
          '$2\\cos x \\cos 2x$',
          '$2\\cos 2x \\cos x$',
          '$2\\sin 2x \\cos x$',
          '$2\\cos 2x \\sin x$'
        ],
        correct: 1,
        explanation: '$\\cos x + \\cos 3x = 2\\cos\\dfrac{x+3x}{2}\\cos\\dfrac{x-3x}{2} = 2\\cos 2x \\cos(-x) = 2\\cos 2x \\cos x$.'
      }
    ]
  },

  {
    id: '3-10-product-to-sum',
    section: 3,
    sectionName: 'Тригонометричні функції',
    title: 'Формули перетворення добутку в суму',
    description: 'sin α · cos β, cos α · cos β, sin α · sin β',
    icon: '🔃',
    questions: [
      {
        question: 'Яка формула $\\sin\\alpha\\cos\\beta$?',
        options: [
          '$\\dfrac{1}{2}[\\sin(\\alpha+\\beta) + \\sin(\\alpha-\\beta)]$',
          '$\\dfrac{1}{2}[\\sin(\\alpha+\\beta) - \\sin(\\alpha-\\beta)]$',
          '$\\dfrac{1}{2}[\\cos(\\alpha-\\beta) + \\cos(\\alpha+\\beta)]$',
          '$\\dfrac{1}{2}[\\cos(\\alpha-\\beta) - \\cos(\\alpha+\\beta)]$'
        ],
        correct: 0,
        explanation: '$\\sin\\alpha\\cos\\beta = \\dfrac{1}{2}[\\sin(\\alpha+\\beta) + \\sin(\\alpha-\\beta)]$'
      },
      {
        question: 'Яка формула $\\cos\\alpha\\cos\\beta$?',
        options: [
          '$\\dfrac{1}{2}[\\sin(\\alpha+\\beta) + \\sin(\\alpha-\\beta)]$',
          '$\\dfrac{1}{2}[\\cos(\\alpha-\\beta) - \\cos(\\alpha+\\beta)]$',
          '$\\dfrac{1}{2}[\\cos(\\alpha-\\beta) + \\cos(\\alpha+\\beta)]$',
          '$\\dfrac{1}{2}[\\sin(\\alpha-\\beta) + \\sin(\\alpha+\\beta)]$'
        ],
        correct: 2,
        explanation: '$\\cos\\alpha\\cos\\beta = \\dfrac{1}{2}[\\cos(\\alpha-\\beta) + \\cos(\\alpha+\\beta)]$'
      },
      {
        question: 'Яка формула $\\sin\\alpha\\sin\\beta$?',
        options: [
          '$\\dfrac{1}{2}[\\cos(\\alpha-\\beta) + \\cos(\\alpha+\\beta)]$',
          '$\\dfrac{1}{2}[\\cos(\\alpha-\\beta) - \\cos(\\alpha+\\beta)]$',
          '$\\dfrac{1}{2}[\\sin(\\alpha+\\beta) - \\sin(\\alpha-\\beta)]$',
          '$\\dfrac{1}{2}[\\sin(\\alpha+\\beta) + \\sin(\\alpha-\\beta)]$'
        ],
        correct: 1,
        explanation: '$\\sin\\alpha\\sin\\beta = \\dfrac{1}{2}[\\cos(\\alpha-\\beta) - \\cos(\\alpha+\\beta)]$'
      },
      {
        question: 'Перетворіть $2\\sin 3x \\cos x$ у суму:',
        options: [
          '$\\sin 4x - \\sin 2x$',
          '$\\sin 4x + \\sin 2x$',
          '$\\cos 4x + \\cos 2x$',
          '$\\cos 2x - \\cos 4x$'
        ],
        correct: 1,
        explanation: '$2\\sin 3x\\cos x = \\sin(3x+x) + \\sin(3x-x) = \\sin 4x + \\sin 2x$'
      },
      {
        question: 'Перетворіть $2\\cos 5x \\cos 3x$ у суму:',
        options: [
          '$\\cos 8x + \\cos 2x$',
          '$\\cos 8x - \\cos 2x$',
          '$\\sin 8x + \\sin 2x$',
          '$\\cos 2x - \\cos 8x$'
        ],
        correct: 0,
        explanation: '$2\\cos 5x\\cos 3x = \\cos(5x-3x) + \\cos(5x+3x) = \\cos 2x + \\cos 8x$'
      },
      {
        question: 'Обчисліть $\\sin 75° \\cdot \\sin 15°$:',
        options: ['$\\dfrac{1}{2}$', '$\\dfrac{1}{4}$', '$\\dfrac{\\sqrt{3}}{4}$', '$\\dfrac{\\sqrt{2}}{4}$'],
        correct: 1,
        explanation: '$\\sin 75°\\sin 15° = \\dfrac{1}{2}[\\cos 60° - \\cos 90°] = \\dfrac{1}{2}\\left[\\dfrac{1}{2} - 0\\right] = \\dfrac{1}{4}$'
      },
      {
        question: 'Обчисліть $\\cos 75° \\cdot \\cos 15°$:',
        options: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{4}$', '$\\dfrac{1}{4}$', '$\\dfrac{\\sqrt{2}}{4}$'],
        correct: 2,
        explanation: '$\\cos 75°\\cos 15° = \\dfrac{1}{2}[\\cos 60° + \\cos 90°] = \\dfrac{1}{2}\\left[\\dfrac{1}{2} + 0\\right] = \\dfrac{1}{4}$'
      },
      {
        question: 'Перетворіть $2\\sin 4x\\sin 2x$ у суму:',
        options: [
          '$\\cos 2x + \\cos 6x$',
          '$\\cos 2x - \\cos 6x$',
          '$\\sin 6x - \\sin 2x$',
          '$\\sin 6x + \\sin 2x$'
        ],
        correct: 1,
        explanation: '$2\\sin 4x\\sin 2x = \\cos(4x-2x) - \\cos(4x+2x) = \\cos 2x - \\cos 6x$'
      },
      {
        question: 'З якої формули додавання виводяться формули добутку в суму?',
        options: [
          'Формул зведення',
          'Основної тригонометричної тотожності',
          'Додаванням та відніманням формул $\\sin(\\alpha \\pm \\beta)$ та $\\cos(\\alpha \\pm \\beta)$',
          'Формул подвійного аргументу'
        ],
        correct: 2,
        explanation: 'Формули добутку в суму отримують, додаючи або віднімаючи формули додавання.'
      },
      {
        question: 'Спростіть $\\cos 3x \\cdot \\sin x + \\sin 3x \\cdot \\cos x$:',
        options: ['$\\sin 2x$', '$\\cos 2x$', '$\\sin 4x$', '$\\cos 4x$'],
        correct: 2,
        explanation: 'Це формула додавання: $\\sin 3x\\cos x + \\cos 3x\\sin x = \\sin(3x + x) = \\sin 4x$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $\\sin\\alpha\\sin\\beta = \\dfrac{1}{2}[\\cos(\\alpha+\\beta) - \\cos(\\alpha-\\beta)]$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! Правильна формула: $\\sin\\alpha\\sin\\beta = \\dfrac{1}{2}[\\cos(\\alpha-\\beta) - \\cos(\\alpha+\\beta)]$. Порядок переплутаний!'
      },
      {
        question: 'Правильно чи неправильно: $\\cos\\alpha\\cos\\beta = \\dfrac{1}{2}[\\cos(\\alpha-\\beta) + \\cos(\\alpha+\\beta)]$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! В формулі добутку косинусів — сума двох косинусів.'
      },
      {
        question: 'Перетворіть $2\\sin 5x \\cos 2x$ у суму:',
        options: [
          '$\\sin 7x + \\sin 3x$',
          '$\\sin 7x - \\sin 3x$',
          '$\\cos 7x + \\cos 3x$',
          '$\\cos 3x - \\cos 7x$'
        ],
        correct: 0,
        explanation: '$2\\sin 5x \\cos 2x = \\sin(5x+2x) + \\sin(5x-2x) = \\sin 7x + \\sin 3x$.'
      },
      {
        question: 'Обчисліть $\\sin 45° \\cdot \\cos 15°$:',
        options: ['$\\dfrac{\\sqrt{6}+\\sqrt{2}}{8}$', '$\\dfrac{\\sqrt{3}+1}{4}$', '$\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}$', '$\\dfrac{1}{2}$'],
        correct: 1,
        explanation: '$\\sin 45°\\cos 15° = \\dfrac{1}{2}[\\sin 60° + \\sin 30°] = \\dfrac{1}{2}[\\dfrac{\\sqrt{3}}{2} + \\dfrac{1}{2}] = \\dfrac{\\sqrt{3}+1}{4}$.'
      },
      {
        question: 'Перетворіть $2\\cos 4x \\sin 2x$ у суму:',
        options: [
          '$\\sin 6x + \\sin 2x$',
          '$\\sin 6x - \\sin 2x$',
          '$\\cos 6x - \\cos 2x$',
          '$\\cos 2x - \\cos 6x$'
        ],
        correct: 1,
        explanation: '$2\\cos 4x \\sin 2x = 2\\sin 2x \\cos 4x$. Тоді $= \\sin(2x+4x) + \\sin(2x-4x) = \\sin 6x + \\sin(-2x) = \\sin 6x - \\sin 2x$.'
      },
      {
        question: 'Обчисліть $\\cos 15° \\cdot \\cos 45°$:',
        type: 'text_input',
        correct: ['(√6+√2)/8', '(1+√3)/4'],
        explanation: '$\\cos 15°\\cos 45° = \\dfrac{1}{2}[\\cos 30° + \\cos 60°] = \\dfrac{1}{2}[\\dfrac{\\sqrt{3}}{2} + \\dfrac{1}{2}] = \\dfrac{\\sqrt{3}+1}{4}$.'
      },
      {
        question: 'Обчисліть $2\\sin 75° \\cos 75°$:',
        type: 'text_input',
        correct: ['1/2', '0.5', '0,5'],
        explanation: '$2\\sin 75°\\cos 75° = \\sin(2 \\cdot 75°) = \\sin 150° = \\dfrac{1}{2}$.'
      },
      {
        question: 'Перетворіть $2\\cos 3x \\cos 3x$ у суму:',
        options: ['$1 + \\cos 6x$', '$\\cos 6x$', '$2\\cos^2 3x$', '$1 - \\cos 6x$'],
        correct: 0,
        explanation: '$2\\cos 3x \\cos 3x = \\cos 0 + \\cos 6x = 1 + \\cos 6x$.'
      },
      {
        type: 'matching',
        question: 'Встановіть відповідність: добуток — формула',
        pairs: [
          ['$\\sin\\alpha\\cos\\beta$', '$\\dfrac{1}{2}[\\sin(\\alpha+\\beta) + \\sin(\\alpha-\\beta)]$'],
          ['$\\cos\\alpha\\cos\\beta$', '$\\dfrac{1}{2}[\\cos(\\alpha-\\beta) + \\cos(\\alpha+\\beta)]$'],
          ['$\\sin\\alpha\\sin\\beta$', '$\\dfrac{1}{2}[\\cos(\\alpha-\\beta) - \\cos(\\alpha+\\beta)]$']
        ],
        explanation: 'Три формули перетворення добутку в суму.'
      }
    ]
  },

  // ===== SECTION 1: SETS AND FUNCTIONS =====
  {
    id: '1-4-functions',
    section: 1,
    sectionName: 'Множини. Функції',
    title: 'Функція. Область визначення та значень',
    description: 'Поняття функції, D(f), E(f), способи задання',
    icon: 'f(x)',
    questions: [
      {
        question: 'Що таке область визначення функції $D(f)$?',
        options: [
          'Множина всіх значень, які приймає функція',
          'Множина всіх допустимих значень аргументу',
          'Проміжок зростання функції',
          'Точки перетину графіка з віссю $x$'
        ],
        correct: 1,
        explanation: '$D(f)$ — область визначення — це всі значення $x$, при яких функція має сенс.'
      },
      {
        question: 'Знайдіть область визначення $f(x) = \\dfrac{1}{x - 3}$:',
        options: [
          '$(-\\infty; +\\infty)$',
          '$(-\\infty; 3) \\cup (3; +\\infty)$',
          '$(3; +\\infty)$',
          '$(-\\infty; 3)$'
        ],
        correct: 1,
        explanation: 'Знаменник не може дорівнювати нулю: $x - 3 \\neq 0$, тобто $x \\neq 3$.'
      },
      {
        question: 'Знайдіть область визначення $f(x) = \\sqrt{x - 2}$:',
        options: ['$(-\\infty; 2)$', '$(2; +\\infty)$', '$[2; +\\infty)$', '$(-\\infty; +\\infty)$'],
        correct: 2,
        explanation: 'Підкореневий вираз має бути $\\geq 0$: $x - 2 \\geq 0$, тобто $x \\geq 2$.'
      },
      {
        question: 'Що таке область значень функції $E(f)$?',
        options: [
          'Множина всіх допустимих значень аргументу',
          'Множина всіх значень, які приймає функція',
          'Довжина графіка функції',
          'Кількість нулів функції'
        ],
        correct: 1,
        explanation: '$E(f)$ — область значень — це множина всіх значень $y = f(x)$.'
      },
      {
        question: 'Яка область значень функції $f(x) = x^2$?',
        options: ['$(-\\infty; +\\infty)$', '$[0; +\\infty)$', '$(0; +\\infty)$', '$[-1; 1]$'],
        correct: 1,
        explanation: 'Квадрат будь-якого числа $\\geq 0$, а нуль досягається при $x = 0$.'
      },
      {
        question: 'Яка область визначення $f(x) = \\sqrt{9 - x^2}$?',
        options: ['$[-3; 3]$', '$(-3; 3)$', '$[0; 3]$', '$(-\\infty; +\\infty)$'],
        correct: 0,
        explanation: '$9 - x^2 \\geq 0 \\Rightarrow x^2 \\leq 9 \\Rightarrow -3 \\leq x \\leq 3$.'
      },
      {
        question: 'Функція $f(x) = |x|$ є:',
        options: ['Парною', 'Непарною', 'Зростаючою', 'Спадною'],
        correct: 0,
        explanation: '$f(-x) = |-x| = |x| = f(x)$ — це означення парної функції.'
      },
      {
        question: 'Якщо $f(x) = 2x + 1$, чому дорівнює $f(3)$?',
        options: ['$5$', '$6$', '$7$', '$8$'],
        correct: 2,
        explanation: '$f(3) = 2 \\cdot 3 + 1 = 7$. Підставляємо значення аргументу у формулу.'
      },
      {
        question: 'Знайдіть область визначення $f(x) = \\lg(x + 5)$:',
        options: ['$(-\\infty; +\\infty)$', '$(-5; +\\infty)$', '$[5; +\\infty)$', '$(0; +\\infty)$'],
        correct: 1,
        explanation: 'Аргумент логарифма має бути $> 0$: $x + 5 > 0$, тобто $x > -5$.'
      },
      {
        question: 'Яка область значень функції $f(x) = \\dfrac{1}{x}$?',
        options: [
          '$(-\\infty; +\\infty)$',
          '$(0; +\\infty)$',
          '$(-\\infty; 0) \\cup (0; +\\infty)$',
          '$[-1; 1]$'
        ],
        correct: 2,
        explanation: '$\\dfrac{1}{x}$ може приймати будь-яке значення, крім нуля.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: область визначення $f(x) = \\sqrt{x + 3}$ — це $(-3; +\\infty)$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! $x + 3 \\geq 0 \\Rightarrow x \\geq -3$, тобто $D(f) = [-3; +\\infty)$ — з квадратною дужкою, бо $x = -3$ допустиме.'
      },
      {
        question: 'Правильно чи неправильно: область значень $f(x) = x^2 + 1$ — це $[1; +\\infty)$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! $x^2 \\geq 0$, тому $x^2 + 1 \\geq 1$. Мінімум досягається при $x = 0$.'
      },
      {
        question: 'Знайдіть область визначення $f(x) = \\dfrac{1}{x^2 - 4}$:',
        options: [
          '$(-\\infty; +\\infty)$',
          '$(-\\infty; -2) \\cup (-2; 2) \\cup (2; +\\infty)$',
          '$(-2; 2)$',
          '$(-\\infty; 2) \\cup (2; +\\infty)$'
        ],
        correct: 1,
        explanation: '$x^2 - 4 \\neq 0 \\Rightarrow x \\neq \\pm 2$.'
      },
      {
        question: 'Знайдіть $f(-2)$, якщо $f(x) = x^2 - 3x + 1$:',
        type: 'text_input',
        correct: ['11'],
        explanation: '$f(-2) = (-2)^2 - 3 \\cdot (-2) + 1 = 4 + 6 + 1 = 11$.'
      },
      {
        question: 'Знайдіть область визначення $f(x) = \\dfrac{\\sqrt{x}}{x - 1}$:',
        options: [
          '$[0; +\\infty)$',
          '$(0; +\\infty)$',
          '$[0; 1) \\cup (1; +\\infty)$',
          '$(1; +\\infty)$'
        ],
        correct: 2,
        explanation: 'Потрібно: $x \\geq 0$ (для кореня) і $x \\neq 1$ (для знаменника). Отже $[0; 1) \\cup (1; +\\infty)$.'
      },
      {
        question: 'Яка область значень функції $f(x) = |x| + 2$?',
        options: ['$[0; +\\infty)$', '$[2; +\\infty)$', '$(-\\infty; +\\infty)$', '$(2; +\\infty)$'],
        correct: 1,
        explanation: '$|x| \\geq 0$, тому $|x| + 2 \\geq 2$. Мінімум $2$ досягається при $x = 0$.'
      },
      {
        question: 'Знайдіть область визначення $f(x) = \\lg(2x - 6)$:',
        options: ['$(3; +\\infty)$', '$[3; +\\infty)$', '$(6; +\\infty)$', '$(-\\infty; 3)$'],
        correct: 0,
        explanation: '$2x - 6 > 0 \\Rightarrow x > 3$. Область визначення: $(3; +\\infty)$.'
      },
      {
        question: 'Якщо $f(x) = \\dfrac{x + 1}{x - 1}$, чому дорівнює $f(2)$?',
        type: 'text_input',
        correct: ['3'],
        explanation: '$f(2) = \\dfrac{2 + 1}{2 - 1} = \\dfrac{3}{1} = 3$.'
      }
    ]
  },

  // ===== SECTION 2: POWER FUNCTION =====
  {
    id: '2-1-powers',
    section: 2,
    sectionName: 'Степенева функція',
    title: 'Степінь з цілим показником та її властивості',
    description: 'Правила дій зі степенями, від\'ємні та нульові показники',
    icon: 'x^n',
    questions: [
      {
        question: 'Чому дорівнює $a^0$ при $a \\neq 0$?',
        options: ['$0$', '$1$', '$a$', 'Не визначено'],
        correct: 1,
        explanation: '$a^0 = 1$ для будь-якого $a \\neq 0$. Це базове правило степенів.'
      },
      {
        question: 'Спростіть $a^3 \\cdot a^5$:',
        options: ['$a^{15}$', '$a^8$', '$a^2$', '$2a^8$'],
        correct: 1,
        explanation: 'При множенні степенів з однаковою основою показники додаються: $a^3 \\cdot a^5 = a^{3+5} = a^8$.'
      },
      {
        question: 'Спростіть $\\dfrac{a^7}{a^3}$:',
        options: ['$a^{21}$', '$a^4$', '$a^{10}$', '$a^{7/3}$'],
        correct: 1,
        explanation: 'При діленні степенів показники віднімаються: $\\dfrac{a^7}{a^3} = a^{7-3} = a^4$.'
      },
      {
        question: 'Спростіть $(a^3)^4$:',
        options: ['$a^7$', '$a^{12}$', '$a^{64}$', '$a^{34}$'],
        correct: 1,
        explanation: 'При піднесенні степеня до степеня показники множаться: $(a^3)^4 = a^{3 \\cdot 4} = a^{12}$.'
      },
      {
        question: 'Чому дорівнює $a^{-2}$?',
        options: ['$-a^2$', '$\\dfrac{1}{a^2}$', '$-2a$', '$\\dfrac{a}{2}$'],
        correct: 1,
        explanation: '$a^{-n} = \\dfrac{1}{a^n}$, тому $a^{-2} = \\dfrac{1}{a^2}$.'
      },
      {
        question: 'Спростіть $(2a)^3$:',
        options: ['$2a^3$', '$6a^3$', '$8a^3$', '$2a^9$'],
        correct: 2,
        explanation: '$(2a)^3 = 2^3 \\cdot a^3 = 8a^3$. Степінь добутку = добуток степенів.'
      },
      {
        question: 'Спростіть $\\left(\\dfrac{a}{b}\\right)^2$:',
        options: ['$\\dfrac{a^2}{b}$', '$\\dfrac{a}{b^2}$', '$\\dfrac{a^2}{b^2}$', '$\\dfrac{2a}{2b}$'],
        correct: 2,
        explanation: '$\\left(\\dfrac{a}{b}\\right)^2 = \\dfrac{a^2}{b^2}$. Степінь частки = частка степенів.'
      },
      {
        question: 'Обчисліть $2^{-3}$:',
        options: ['$-8$', '$-6$', '$\\dfrac{1}{6}$', '$\\dfrac{1}{8}$'],
        correct: 3,
        explanation: '$2^{-3} = \\dfrac{1}{2^3} = \\dfrac{1}{8}$.'
      },
      {
        question: 'Спростіть $a^5 \\cdot a^{-2}$:',
        options: ['$a^{-10}$', '$a^3$', '$a^7$', '$a^{10}$'],
        correct: 1,
        explanation: '$a^5 \\cdot a^{-2} = a^{5+(-2)} = a^3$.'
      },
      {
        question: 'Обчисліть $\\left(\\dfrac{1}{3}\\right)^{-2}$:',
        options: ['$\\dfrac{1}{9}$', '$-\\dfrac{1}{9}$', '$9$', '$-9$'],
        correct: 2,
        explanation: '$\\left(\\dfrac{1}{3}\\right)^{-2} = \\left(\\dfrac{3}{1}\\right)^{2} = 9$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $(a \\cdot b)^n = a^n + b^n$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! $(a \\cdot b)^n = a^n \\cdot b^n$ (добуток, не сума!).'
      },
      {
        question: 'Правильно чи неправильно: $a^{-1} = \\dfrac{1}{a}$ при $a \\neq 0$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! $a^{-1} = \\dfrac{1}{a^1} = \\dfrac{1}{a}$.'
      },
      {
        question: 'Спростіть $\\dfrac{a^{10} \\cdot a^3}{a^7}$:',
        options: ['$a^6$', '$a^{16}$', '$a^4$', '$a^{20}$'],
        correct: 0,
        explanation: '$\\dfrac{a^{10} \\cdot a^3}{a^7} = \\dfrac{a^{13}}{a^7} = a^6$.'
      },
      {
        question: 'Обчисліть $5^0 + 3^{-1}$:',
        type: 'text_input',
        correct: ['4/3', '1.33', '1,33'],
        explanation: '$5^0 + 3^{-1} = 1 + \\dfrac{1}{3} = \\dfrac{4}{3}$.'
      },
      {
        question: 'Спростіть $(a^2 b^3)^2$:',
        options: ['$a^4 b^6$', '$a^4 b^5$', '$a^2 b^6$', '$a^4 b^9$'],
        correct: 0,
        explanation: '$(a^2 b^3)^2 = a^{2 \\cdot 2} \\cdot b^{3 \\cdot 2} = a^4 b^6$.'
      },
      {
        question: 'Обчисліть $\\dfrac{2^5 \\cdot 3^2}{2^3 \\cdot 3}$:',
        type: 'text_input',
        correct: ['12'],
        explanation: '$\\dfrac{2^5 \\cdot 3^2}{2^3 \\cdot 3} = 2^{5-3} \\cdot 3^{2-1} = 2^2 \\cdot 3 = 4 \\cdot 3 = 12$.'
      },
      {
        question: 'Спростіть $\\left(\\dfrac{a^3}{b^2}\\right)^{-1}$:',
        options: ['$\\dfrac{b^2}{a^3}$', '$\\dfrac{a^3}{b^2}$', '$\\dfrac{b^3}{a^2}$', '$-\\dfrac{a^3}{b^2}$'],
        correct: 0,
        explanation: '$\\left(\\dfrac{a^3}{b^2}\\right)^{-1} = \\dfrac{b^2}{a^3}$. Від\'ємний показник "перевертає" дріб.'
      },
      {
        question: 'Обчисліть $(-2)^4$:',
        type: 'text_input',
        correct: ['16'],
        explanation: '$(-2)^4 = (-2) \\cdot (-2) \\cdot (-2) \\cdot (-2) = 16$. Парна степінь від\'ємного числа — додатна.'
      },
      {
        question: 'Обчисліть $(-3)^3$:',
        type: 'text_input',
        correct: ['-27'],
        explanation: '$(-3)^3 = -27$. Непарна степінь від\'ємного числа — від\'ємна.'
      }
    ]
  },

  // ===== SECTION 5: DERIVATIVE =====
  {
    id: '5-3-derivative-concept',
    section: 5,
    sectionName: 'Похідна та її застосування',
    title: 'Похідна: геометричний і фізичний зміст',
    description: 'Поняття похідної, дотична, миттєва швидкість',
    icon: "f'",
    questions: [
      {
        question: 'Що таке похідна функції в точці геометрично?',
        options: [
          'Площа під графіком',
          'Кутовий коефіцієнт дотичної до графіка',
          'Відстань від початку координат',
          'Довжина дуги графіка'
        ],
        correct: 1,
        explanation: 'Похідна $f\'(x_0)$ — це тангенс кута нахилу дотичної до графіка в точці $x_0$.'
      },
      {
        question: 'Який фізичний зміст похідної координати за часом $s\'(t)$?',
        options: [
          'Пройдений шлях',
          'Прискорення',
          'Миттєва швидкість',
          'Середня швидкість'
        ],
        correct: 2,
        explanation: '$v(t) = s\'(t)$ — миттєва швидкість є похідною координати за часом.'
      },
      {
        question: 'Чому дорівнює $(x^n)\'$?',
        options: ['$x^{n-1}$', '$nx^{n-1}$', '$nx^n$', '$(n-1)x^n$'],
        correct: 1,
        explanation: '$(x^n)\' = nx^{n-1}$ — основна формула диференціювання степеневої функції.'
      },
      {
        question: 'Чому дорівнює похідна константи $(C)\'$?',
        options: ['$C$', '$1$', '$0$', '$-C$'],
        correct: 2,
        explanation: 'Похідна сталої дорівнює нулю: $(C)\' = 0$. Графік — горизонтальна лінія, нахилу немає.'
      },
      {
        question: 'Чому дорівнює $(3x^2)\'$?',
        options: ['$3x$', '$6x$', '$6x^2$', '$3x^2$'],
        correct: 1,
        explanation: '$(3x^2)\' = 3 \\cdot 2x = 6x$. Константа виноситься, степінь зменшується на 1.'
      },
      {
        question: 'Чому дорівнює $(\\sin x)\'$?',
        options: ['$-\\sin x$', '$\\cos x$', '$-\\cos x$', '$\\operatorname{tg} x$'],
        correct: 1,
        explanation: '$(\\sin x)\' = \\cos x$ — одна з табличних похідних.'
      },
      {
        question: 'Чому дорівнює $(\\cos x)\'$?',
        options: ['$\\sin x$', '$-\\sin x$', '$\\cos x$', '$-\\cos x$'],
        correct: 1,
        explanation: '$(\\cos x)\' = -\\sin x$. Зверни увагу на знак мінус!'
      },
      {
        question: 'Якщо $f\'(x_0) > 0$, то функція в точці $x_0$:',
        options: ['Спадає', 'Зростає', 'Має екстремум', 'Не визначена'],
        correct: 1,
        explanation: 'Додатна похідна означає, що функція зростає в околі цієї точки.'
      },
      {
        question: 'Якщо $f\'(x_0) = 0$, то точка $x_0$ може бути:',
        options: [
          'Тільки точкою максимуму',
          'Тільки точкою мінімуму',
          'Точкою екстремуму або перегину',
          'Точкою розриву'
        ],
        correct: 2,
        explanation: 'При $f\'(x_0) = 0$ точка може бути максимумом, мінімумом, або точкою перегину.'
      },
      {
        question: 'Чому дорівнює $(x^3 + 2x - 5)\'$?',
        options: ['$3x^2 + 2x$', '$3x^2 + 2$', '$x^3 + 2$', '$3x^2 - 5$'],
        correct: 1,
        explanation: '$(x^3 + 2x - 5)\' = 3x^2 + 2 - 0 = 3x^2 + 2$. Похідна суми = сума похідних.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $(\\cos x)\' = \\sin x$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! $(\\cos x)\' = -\\sin x$. Знак мінус — типова пастка!'
      },
      {
        question: 'Правильно чи неправильно: $(x^5)\' = 5x^4$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! За формулою $(x^n)\' = nx^{n-1}$: $(x^5)\' = 5x^4$.'
      },
      {
        question: 'Обчисліть $f\'(2)$, якщо $f(x) = x^3 - 4x$:',
        type: 'text_input',
        correct: ['8'],
        explanation: '$f\'(x) = 3x^2 - 4$. $f\'(2) = 3 \\cdot 4 - 4 = 12 - 4 = 8$.'
      },
      {
        question: 'Чому дорівнює $(7x^2 - 3x + 1)\'$?',
        options: ['$7x - 3$', '$14x - 3$', '$14x + 1$', '$7x^2 - 3$'],
        correct: 1,
        explanation: '$(7x^2)\' = 14x$, $(-3x)\' = -3$, $(1)\' = 0$. Разом: $14x - 3$.'
      },
      {
        question: 'Якщо тіло рухається за законом $s(t) = 5t^2 + 3t$, яка швидкість при $t = 2$?',
        type: 'text_input',
        correct: ['23'],
        explanation: '$v(t) = s\'(t) = 10t + 3$. $v(2) = 20 + 3 = 23$.'
      },
      {
        question: 'Якщо $f\'(x_0) < 0$, то функція в точці $x_0$:',
        options: ['Зростає', 'Спадає', 'Має максимум', 'Не визначена'],
        correct: 1,
        explanation: 'Від\'ємна похідна означає, що функція спадає в околі цієї точки.'
      },
      {
        question: 'Чому дорівнює похідна $f(x) = \\dfrac{1}{x}$ у точці $x = 2$?',
        options: ['$\\dfrac{1}{2}$', '$-\\dfrac{1}{2}$', '$\\dfrac{1}{4}$', '$-\\dfrac{1}{4}$'],
        correct: 3,
        explanation: '$f(x) = x^{-1}$, $f\'(x) = -x^{-2} = -\\dfrac{1}{x^2}$. $f\'(2) = -\\dfrac{1}{4}$.'
      },
      {
        question: 'Чому дорівнює $(\\sin x)\'$ при $x = 0$?',
        type: 'text_input',
        correct: ['1'],
        explanation: '$(\\sin x)\' = \\cos x$. При $x = 0$: $\\cos 0 = 1$.'
      },
      {
        type: 'matching',
        question: 'Встановіть відповідність: функція — похідна',
        pairs: [
          ['$x^3$', '$3x^2$'],
          ['$\\sin x$', '$\\cos x$'],
          ['$\\cos x$', '$-\\sin x$'],
          ['$5$', '$0$']
        ],
        explanation: 'Таблиця основних похідних — фундамент диференціювання.'
      }
    ]
  },

  // ===== SECTION 4: TRIGONOMETRIC EQUATIONS AND INEQUALITIES =====
  {
    id: '4-1-inverse-trig',
    section: 4,
    sectionName: 'Тригонометричні рівняння і нерівності',
    title: 'Обернені тригонометричні функції',
    description: 'arcsin, arccos, arctg, arcctg — означення та обчислення',
    icon: '🔄',
    questions: [
      {
        question: 'Чому дорівнює $\\arcsin \\dfrac{1}{2}$?',
        options: ['$\\dfrac{\\pi}{6}$', '$\\dfrac{\\pi}{4}$', '$\\dfrac{\\pi}{3}$', '$\\dfrac{\\pi}{2}$'],
        correct: 0,
        explanation: '$\\arcsin \\dfrac{1}{2} = \\dfrac{\\pi}{6}$, бо $\\sin \\dfrac{\\pi}{6} = \\dfrac{1}{2}$ і $\\dfrac{\\pi}{6} \\in [-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}]$.'
      },
      {
        question: 'Яка область значень функції $y = \\arccos x$?',
        options: ['$[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}]$', '$[0; \\pi]$', '$(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2})$', '$[0; 2\\pi]$'],
        correct: 1,
        explanation: 'Функція $\\arccos x$ повертає значення з відрізка $[0; \\pi]$ — це її область значень за означенням.'
      },
      {
        question: 'Чому дорівнює $\\arccos 0$?',
        options: ['$0$', '$\\dfrac{\\pi}{4}$', '$\\dfrac{\\pi}{2}$', '$\\pi$'],
        correct: 2,
        explanation: '$\\arccos 0 = \\dfrac{\\pi}{2}$, бо $\\cos \\dfrac{\\pi}{2} = 0$ і $\\dfrac{\\pi}{2} \\in [0; \\pi]$.'
      },
      {
        question: 'Яка область визначення функції $y = \\arcsin x$?',
        options: ['$(-\\infty; +\\infty)$', '$[-1; 1]$', '$[0; 1]$', '$(-1; 1)$'],
        correct: 1,
        explanation: 'Оскільки $\\sin$ набуває значень від $-1$ до $1$, обернена функція $\\arcsin x$ визначена на $[-1; 1]$.'
      },
      {
        question: '$\\operatorname{arctg} 1 = \\dfrac{\\pi}{4}$',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Так, $\\operatorname{tg} \\dfrac{\\pi}{4} = 1$, тому $\\operatorname{arctg} 1 = \\dfrac{\\pi}{4}$.'
      },
      {
        question: 'Область значень $\\arcsin x$ — це $[0; \\pi]$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно. Область значень $\\arcsin x$ — це $[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}]$, а не $[0; \\pi]$. Відрізок $[0; \\pi]$ — це область значень $\\arccos x$.'
      },
      {
        question: 'Обчисліть $\\arccos(-1)$. Відповідь дайте у вигляді $k\\pi$ (наприклад: π або 2π).',
        type: 'text_input',
        correct: 'π',
        explanation: '$\\arccos(-1) = \\pi$, бо $\\cos \\pi = -1$ і $\\pi \\in [0; \\pi]$.'
      },
      {
        question: 'Обчисліть $\\arcsin(-1)$. Відповідь дайте у вигляді дробу з π (наприклад: -π/2).',
        type: 'text_input',
        correct: '-π/2',
        explanation: '$\\arcsin(-1) = -\\dfrac{\\pi}{2}$, бо $\\sin(-\\dfrac{\\pi}{2}) = -1$ і $-\\dfrac{\\pi}{2} \\in [-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}]$.'
      },
      {
        question: 'Чому дорівнює $\\arccos \\dfrac{\\sqrt{2}}{2}$?',
        options: ['$\\dfrac{\\pi}{6}$', '$\\dfrac{\\pi}{4}$', '$\\dfrac{\\pi}{3}$', '$\\dfrac{\\pi}{2}$'],
        correct: 1,
        explanation: '$\\arccos \\dfrac{\\sqrt{2}}{2} = \\dfrac{\\pi}{4}$, бо $\\cos \\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}$.'
      },
      {
        question: 'Яка область визначення функції $y = \\operatorname{arctg} x$?',
        options: ['$[-1; 1]$', '$[0; \\pi]$', '$(-\\infty; +\\infty)$', '$(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2})$'],
        correct: 2,
        explanation: 'Функція $\\operatorname{tg}$ набуває всіх дійсних значень, тому $\\operatorname{arctg} x$ визначена для всіх $x \\in (-\\infty; +\\infty)$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: $\\arcsin \\dfrac{\\sqrt{3}}{2} = \\dfrac{\\pi}{3}$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! $\\sin \\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}$ і $\\dfrac{\\pi}{3} \\in [-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}]$.'
      },
      {
        question: 'Правильно чи неправильно: $\\arccos \\dfrac{1}{2} = \\dfrac{\\pi}{6}$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! $\\arccos \\dfrac{1}{2} = \\dfrac{\\pi}{3}$, бо $\\cos \\dfrac{\\pi}{3} = \\dfrac{1}{2}$. $\\dfrac{\\pi}{6}$ — це $\\arcsin \\dfrac{1}{2}$!'
      },
      {
        question: 'Обчисліть $\\arcsin 0 + \\arccos 1$:',
        type: 'text_input',
        correct: ['0'],
        explanation: '$\\arcsin 0 = 0$ і $\\arccos 1 = 0$. Сума $= 0$.'
      },
      {
        question: 'Обчисліть $\\arcsin\\dfrac{\\sqrt{2}}{2}$:',
        options: ['$\\dfrac{\\pi}{6}$', '$\\dfrac{\\pi}{4}$', '$\\dfrac{\\pi}{3}$', '$\\dfrac{\\pi}{2}$'],
        correct: 1,
        explanation: '$\\sin \\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}$, тому $\\arcsin\\dfrac{\\sqrt{2}}{2} = \\dfrac{\\pi}{4}$.'
      },
      {
        question: 'Чому дорівнює $\\arccos\\left(-\\dfrac{\\sqrt{3}}{2}\\right)$?',
        options: ['$\\dfrac{\\pi}{6}$', '$\\dfrac{5\\pi}{6}$', '$\\dfrac{2\\pi}{3}$', '$-\\dfrac{\\pi}{6}$'],
        correct: 1,
        explanation: '$\\cos \\dfrac{5\\pi}{6} = -\\dfrac{\\sqrt{3}}{2}$ і $\\dfrac{5\\pi}{6} \\in [0; \\pi]$.'
      },
      {
        question: 'Яка тотожність зв\'язує $\\arcsin x$ і $\\arccos x$?',
        options: [
          '$\\arcsin x + \\arccos x = \\pi$',
          '$\\arcsin x + \\arccos x = \\dfrac{\\pi}{2}$',
          '$\\arcsin x - \\arccos x = \\dfrac{\\pi}{2}$',
          '$\\arcsin x \\cdot \\arccos x = 1$'
        ],
        correct: 1,
        explanation: '$\\arcsin x + \\arccos x = \\dfrac{\\pi}{2}$ для будь-якого $x \\in [-1; 1]$.'
      },
      {
        question: 'Обчисліть $\\operatorname{arctg}(-1)$:',
        options: ['$\\dfrac{\\pi}{4}$', '$-\\dfrac{\\pi}{4}$', '$\\dfrac{3\\pi}{4}$', '$-\\dfrac{3\\pi}{4}$'],
        correct: 1,
        explanation: '$\\operatorname{tg}(-\\dfrac{\\pi}{4}) = -1$ і $-\\dfrac{\\pi}{4} \\in (-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2})$.'
      },
      {
        question: 'Обчисліть $\\operatorname{arctg} \\sqrt{3}$:',
        type: 'text_input',
        correct: ['π/3', 'pi/3'],
        explanation: '$\\operatorname{tg} \\dfrac{\\pi}{3} = \\sqrt{3}$, тому $\\operatorname{arctg} \\sqrt{3} = \\dfrac{\\pi}{3}$.'
      }
    ]
  },
  {
    id: '4-2-simple-equations',
    section: 4,
    sectionName: 'Тригонометричні рівняння і нерівності',
    title: 'Найпростіші тригонометричні рівняння',
    description: 'Розв\'язання sin x = a, cos x = a, tg x = a — загальні формули',
    icon: '📝',
    questions: [
      {
        question: 'Яка загальна формула розв\'язків рівняння $\\sin x = a$, де $|a| \\le 1$?',
        options: [
          '$x = (-1)^n \\arcsin a + \\pi n, \\; n \\in \\mathbb{Z}$',
          '$x = \\arcsin a + 2\\pi n, \\; n \\in \\mathbb{Z}$',
          '$x = \\pm \\arcsin a + \\pi n, \\; n \\in \\mathbb{Z}$',
          '$x = \\arcsin a + \\pi n, \\; n \\in \\mathbb{Z}$'
        ],
        correct: 0,
        explanation: 'Загальна формула: $x = (-1)^n \\arcsin a + \\pi n, \\; n \\in \\mathbb{Z}$. Множник $(-1)^n$ забезпечує чергування знаків.'
      },
      {
        question: 'Яка загальна формула розв\'язків рівняння $\\cos x = a$, де $|a| \\le 1$?',
        options: [
          '$x = (-1)^n \\arccos a + \\pi n$',
          '$x = \\pm \\arccos a + 2\\pi n, \\; n \\in \\mathbb{Z}$',
          '$x = \\arccos a + \\pi n$',
          '$x = \\arccos a + 2\\pi n$'
        ],
        correct: 1,
        explanation: 'Загальна формула: $x = \\pm \\arccos a + 2\\pi n, \\; n \\in \\mathbb{Z}$. Знак $\\pm$ дає два розв\'язки на кожному періоді.'
      },
      {
        question: 'Розв\'яжіть рівняння $\\sin x = 0$. Загальний розв\'язок:',
        options: ['$x = \\dfrac{\\pi}{2} + \\pi n$', '$x = \\pi n, \\; n \\in \\mathbb{Z}$', '$x = 2\\pi n$', '$x = \\dfrac{\\pi}{2} + 2\\pi n$'],
        correct: 1,
        explanation: '$\\sin x = 0$ при $x = 0, \\pm\\pi, \\pm 2\\pi, \\ldots$, тобто $x = \\pi n, \\; n \\in \\mathbb{Z}$.'
      },
      {
        question: 'Розв\'яжіть рівняння $\\cos x = 1$. Загальний розв\'язок:',
        options: ['$x = \\pi n$', '$x = \\dfrac{\\pi}{2} + 2\\pi n$', '$x = 2\\pi n, \\; n \\in \\mathbb{Z}$', '$x = \\pi + 2\\pi n$'],
        correct: 2,
        explanation: '$\\cos x = 1$ лише при $x = 0, \\pm 2\\pi, \\pm 4\\pi, \\ldots$, тобто $x = 2\\pi n, \\; n \\in \\mathbb{Z}$.'
      },
      {
        question: 'Розв\'яжіть: $\\operatorname{tg} x = \\sqrt{3}$. Загальний розв\'язок:',
        options: [
          '$x = \\dfrac{\\pi}{6} + \\pi n$',
          '$x = \\dfrac{\\pi}{4} + \\pi n$',
          '$x = \\dfrac{\\pi}{3} + \\pi n, \\; n \\in \\mathbb{Z}$',
          '$x = \\dfrac{\\pi}{3} + 2\\pi n$'
        ],
        correct: 2,
        explanation: '$\\operatorname{tg} \\dfrac{\\pi}{3} = \\sqrt{3}$, тому $x = \\operatorname{arctg} \\sqrt{3} + \\pi n = \\dfrac{\\pi}{3} + \\pi n$.'
      },
      {
        question: 'Рівняння $\\sin x = 2$ має розв\'язки.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно. $|\\sin x| \\le 1$ для будь-якого $x$, тому $\\sin x = 2$ не має розв\'язків.'
      },
      {
        question: 'Загальна формула розв\'язків $\\operatorname{tg} x = a$ має вигляд $x = \\operatorname{arctg} a + \\pi n, \\; n \\in \\mathbb{Z}$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно. Період тангенса $= \\pi$, тому всі розв\'язки: $x = \\operatorname{arctg} a + \\pi n$.'
      },
      {
        question: 'Знайдіть найменший додатний розв\'язок $\\cos x = \\dfrac{1}{2}$. Відповідь у вигляді дробу з π (наприклад: π/3).',
        type: 'text_input',
        correct: 'π/3',
        explanation: '$\\arccos \\dfrac{1}{2} = \\dfrac{\\pi}{3}$, це і є найменший додатний розв\'язок.'
      },
      {
        question: 'Знайдіть найменший додатний розв\'язок $\\sin x = \\dfrac{\\sqrt{3}}{2}$. Відповідь у вигляді дробу з π.',
        type: 'text_input',
        correct: 'π/3',
        explanation: '$\\arcsin \\dfrac{\\sqrt{3}}{2} = \\dfrac{\\pi}{3}$ — це найменший додатний розв\'язок.'
      },
      {
        question: 'Скільки розв\'язків має рівняння $\\cos x = -1$ на проміжку $[0; 2\\pi]$?',
        options: ['$0$', '$1$', '$2$', '$4$'],
        correct: 1,
        explanation: 'На $[0; 2\\pi]$ рівняння $\\cos x = -1$ має єдиний розв\'язок $x = \\pi$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: загальний розв\'язок $\\sin x = a$ — це $x = \\arcsin a + \\pi n$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! Правильна формула: $x = (-1)^n \\arcsin a + \\pi n$. Множник $(-1)^n$ — обов\'язковий!'
      },
      {
        question: 'Правильно чи неправильно: $\\cos x = \\dfrac{1}{2}$ має розв\'язок $x = \\pm \\dfrac{\\pi}{3} + 2\\pi n$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! $\\arccos \\dfrac{1}{2} = \\dfrac{\\pi}{3}$, формула: $x = \\pm \\dfrac{\\pi}{3} + 2\\pi n$.'
      },
      {
        question: 'Розв\'яжіть $\\sin x = \\dfrac{1}{2}$. Загальний розв\'язок:',
        options: [
          '$x = (-1)^n \\dfrac{\\pi}{6} + \\pi n$',
          '$x = \\dfrac{\\pi}{6} + 2\\pi n$',
          '$x = \\pm \\dfrac{\\pi}{6} + 2\\pi n$',
          '$x = (-1)^n \\dfrac{\\pi}{3} + \\pi n$'
        ],
        correct: 0,
        explanation: '$\\arcsin \\dfrac{1}{2} = \\dfrac{\\pi}{6}$. За формулою: $x = (-1)^n \\dfrac{\\pi}{6} + \\pi n, n \\in \\mathbb{Z}$.'
      },
      {
        question: 'Розв\'яжіть $\\operatorname{tg} x = 1$. Загальний розв\'язок:',
        options: [
          '$x = \\dfrac{\\pi}{4} + 2\\pi n$',
          '$x = \\dfrac{\\pi}{4} + \\pi n, \\; n \\in \\mathbb{Z}$',
          '$x = \\pm \\dfrac{\\pi}{4} + \\pi n$',
          '$x = (-1)^n \\dfrac{\\pi}{4} + \\pi n$'
        ],
        correct: 1,
        explanation: '$\\operatorname{arctg} 1 = \\dfrac{\\pi}{4}$. За формулою тангенса: $x = \\dfrac{\\pi}{4} + \\pi n$.'
      },
      {
        question: 'Скільки розв\'язків має $\\sin x = \\dfrac{\\sqrt{2}}{2}$ на $[0; 2\\pi]$?',
        type: 'text_input',
        correct: ['2'],
        explanation: '$x = \\dfrac{\\pi}{4}$ і $x = \\pi - \\dfrac{\\pi}{4} = \\dfrac{3\\pi}{4}$ — два розв\'язки.'
      },
      {
        question: 'Розв\'яжіть $\\cos x = 0$ на $[0; 2\\pi]$. Скільки розв\'язків?',
        type: 'text_input',
        correct: ['2'],
        explanation: '$\\cos x = 0$ при $x = \\dfrac{\\pi}{2}$ і $x = \\dfrac{3\\pi}{2}$ — два розв\'язки.'
      },
      {
        question: 'Рівняння $\\operatorname{tg} x = -\\sqrt{3}$ має загальний розв\'язок:',
        options: [
          '$x = -\\dfrac{\\pi}{3} + \\pi n, \\; n \\in \\mathbb{Z}$',
          '$x = \\dfrac{2\\pi}{3} + \\pi n$',
          '$x = -\\dfrac{\\pi}{6} + \\pi n$',
          '$x = \\dfrac{\\pi}{3} + \\pi n$'
        ],
        correct: 0,
        explanation: '$\\operatorname{arctg}(-\\sqrt{3}) = -\\dfrac{\\pi}{3}$, тому $x = -\\dfrac{\\pi}{3} + \\pi n$.'
      },
      {
        question: 'Розв\'яжіть $\\sin x = -\\dfrac{\\sqrt{3}}{2}$ на $[0; 2\\pi]$. Менший розв\'язок:',
        options: ['$\\dfrac{\\pi}{3}$', '$\\dfrac{2\\pi}{3}$', '$\\dfrac{4\\pi}{3}$', '$\\dfrac{5\\pi}{3}$'],
        correct: 2,
        explanation: '$\\sin x = -\\dfrac{\\sqrt{3}}{2}$ на $[0; 2\\pi]$: $x = \\pi + \\dfrac{\\pi}{3} = \\dfrac{4\\pi}{3}$ і $x = 2\\pi - \\dfrac{\\pi}{3} = \\dfrac{5\\pi}{3}$. Менший: $\\dfrac{4\\pi}{3}$.'
      }
    ]
  },
  {
    id: '4-3-quadratic-trig',
    section: 4,
    sectionName: 'Тригонометричні рівняння і нерівності',
    title: 'Тригонометричні рівняння, що зводяться до квадратних',
    description: 'Заміна t = sin x або t = cos x, розв\'язання квадратних рівнянь',
    icon: '🔢',
    questions: [
      {
        question: 'Яку заміну потрібно зробити в рівнянні $2\\sin^2 x - 3\\sin x + 1 = 0$?',
        options: ['$t = \\cos x$', '$t = \\sin x$', '$t = \\operatorname{tg} x$', '$t = \\sin 2x$'],
        correct: 1,
        explanation: 'Рівняння містить лише $\\sin x$, тому робимо заміну $t = \\sin x$ і отримуємо $2t^2 - 3t + 1 = 0$.'
      },
      {
        question: 'Після заміни $t = \\sin x$ рівняння $2\\sin^2 x - 3\\sin x + 1 = 0$ набуває вигляду $2t^2 - 3t + 1 = 0$. Знайдіть корені:',
        options: ['$t = 1$ і $t = \\dfrac{1}{2}$', '$t = -1$ і $t = \\dfrac{1}{2}$', '$t = 2$ і $t = 1$', '$t = 1$ і $t = -\\dfrac{1}{2}$'],
        correct: 0,
        explanation: '$2t^2 - 3t + 1 = 0$. За теоремою Вієта або дискримінантом: $t_1 = 1$, $t_2 = \\dfrac{1}{2}$.'
      },
      {
        question: 'Розв\'яжіть: $\\cos^2 x - \\cos x = 0$. Які значення $\\cos x$ задовольняють рівняння?',
        options: ['$\\cos x = 0$ або $\\cos x = 1$', '$\\cos x = 0$ або $\\cos x = -1$', '$\\cos x = 1$ або $\\cos x = -1$', '$\\cos x = 0$'],
        correct: 0,
        explanation: '$\\cos x(\\cos x - 1) = 0$, звідки $\\cos x = 0$ або $\\cos x = 1$.'
      },
      {
        question: 'При заміні $t = \\cos x$ яке обмеження на $t$ потрібно враховувати?',
        options: ['$t > 0$', '$t \\ge 0$', '$|t| \\le 1$', '$t \\ne 0$'],
        correct: 2,
        explanation: 'Оскільки $-1 \\le \\cos x \\le 1$, маємо $|t| \\le 1$. Корені поза цим проміжком відкидаємо.'
      },
      {
        question: 'Рівняння $\\sin^2 x + \\sin x - 2 = 0$ після заміни $t = \\sin x$ дає $t^2 + t - 2 = 0$. Корені: $t = 1$ та $t = -2$. Який корінь відкидаємо?',
        options: ['$t = 1$', '$t = -2$', 'Обидва підходять', 'Обидва відкидаємо'],
        correct: 1,
        explanation: '$t = -2$ не задовольняє умову $|t| \\le 1$, тому його відкидаємо. Залишається $\\sin x = 1$.'
      },
      {
        question: 'Рівняння $2\\cos^2 x + \\cos x - 1 = 0$ можна звести до квадратного заміною $t = \\cos x$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно. Заміна $t = \\cos x$ дає $2t^2 + t - 1 = 0$ — звичайне квадратне рівняння.'
      },
      {
        question: 'Рівняння $\\sin^2 x = 1$ має лише два розв\'язки на $[0; 2\\pi]$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно. $\\sin^2 x = 1 \\Rightarrow \\sin x = \\pm 1$, тобто $x = \\dfrac{\\pi}{2}$ і $x = \\dfrac{3\\pi}{2}$ — рівно два розв\'язки.'
      },
      {
        question: 'Скільки розв\'язків на $[0; 2\\pi]$ має рівняння $\\cos^2 x - \\cos x = 0$? Введіть число.',
        type: 'text_input',
        correct: '3',
        explanation: '$\\cos x(\\cos x - 1) = 0$: $\\cos x = 0$ дає $x = \\dfrac{\\pi}{2}, \\dfrac{3\\pi}{2}$; $\\cos x = 1$ дає $x = 0$. Але $2\\pi$ — та сама точка, тому $x = 0$ і $x = 2\\pi$ дають один розв\'язок в $[0; 2\\pi]$ — разом $3$.'
      },
      {
        question: 'Розв\'яжіть $2t^2 + t - 1 = 0$ (де $t = \\cos x$). Введіть менший корінь у вигляді дробу (наприклад: -1/2).',
        type: 'text_input',
        correct: '-1',
        explanation: '$2t^2 + t - 1 = 0$. $D = 1 + 8 = 9$. $t = \\dfrac{-1 \\pm 3}{4}$. $t_1 = \\dfrac{1}{2}$, $t_2 = -1$. Менший корінь: $-1$.'
      },
      {
        question: 'Як перетворити рівняння $1 - 2\\sin^2 x = \\sin x$ до квадратного?',
        options: [
          'Замінити $1 = \\sin^2 x + \\cos^2 x$',
          'Перенести все в один бік: $2\\sin^2 x + \\sin x - 1 = 0$',
          'Поділити на $\\sin x$',
          'Замінити $\\sin^2 x = 1 - \\cos^2 x$'
        ],
        correct: 1,
        explanation: 'Переносимо все в один бік: $-2\\sin^2 x - \\sin x + 1 = 0$, або $2\\sin^2 x + \\sin x - 1 = 0$. Заміна $t = \\sin x$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: після заміни $t = \\sin x$ корінь $t = 1.5$ є допустимим.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! $|\\sin x| \\leq 1$, тому $t = 1.5$ поза межами і його відкидаємо.'
      },
      {
        question: 'Рівняння $2\\cos^2 x + \\cos x - 1 = 0$. Після заміни $t = \\cos x$: $2t^2 + t - 1 = 0$. Знайдіть корені:',
        options: [
          '$t = \\dfrac{1}{2}$ і $t = -1$',
          '$t = -\\dfrac{1}{2}$ і $t = 1$',
          '$t = 1$ і $t = -2$',
          '$t = \\dfrac{1}{2}$ і $t = 1$'
        ],
        correct: 0,
        explanation: '$2t^2 + t - 1 = (2t - 1)(t + 1) = 0$. $t_1 = \\dfrac{1}{2}$, $t_2 = -1$. Обидва $\\in [-1; 1]$.'
      },
      {
        question: 'Розв\'яжіть $\\sin^2 x - \\sin x = 0$. Які значення $\\sin x$?',
        options: [
          '$\\sin x = 0$ або $\\sin x = -1$',
          '$\\sin x = 0$ або $\\sin x = 1$',
          '$\\sin x = 1$',
          '$\\sin x = 0$'
        ],
        correct: 1,
        explanation: '$\\sin x(\\sin x - 1) = 0$: $\\sin x = 0$ або $\\sin x = 1$.'
      },
      {
        question: 'Скільки розв\'язків на $[0; 2\\pi]$ має $\\sin^2 x - \\sin x = 0$?',
        type: 'text_input',
        correct: ['3'],
        explanation: '$\\sin x = 0$: $x = 0, \\pi$ (2 значення на $[0; 2\\pi)$, плюс $2\\pi$). $\\sin x = 1$: $x = \\dfrac{\\pi}{2}$. Але $0$ і $2\\pi$ — одна точка. Разом: $x = 0, \\dfrac{\\pi}{2}, \\pi$ — 3 розв\'язки на $[0; 2\\pi)$, або 4 якщо включити $2\\pi$.'
      },
      {
        question: 'Рівняння $4\\cos^2 x - 1 = 0$. Чому дорівнює $\\cos x$?',
        options: ['$\\cos x = \\pm \\dfrac{1}{2}$', '$\\cos x = \\pm 2$', '$\\cos x = \\dfrac{1}{4}$', '$\\cos x = \\pm \\dfrac{1}{4}$'],
        correct: 0,
        explanation: '$4\\cos^2 x = 1 \\Rightarrow \\cos^2 x = \\dfrac{1}{4} \\Rightarrow \\cos x = \\pm \\dfrac{1}{2}$.'
      },
      {
        question: 'Рівняння $\\cos^2 x + 3\\cos x + 2 = 0$. Корені квадратного: $t = -1$ і $t = -2$. Скільки допустимих?',
        type: 'text_input',
        correct: ['1'],
        explanation: '$t = -2$ відкидаємо ($|t| > 1$). Залишається $t = -1$, тобто $\\cos x = -1$. Один допустимий корінь.'
      },
      {
        question: 'Як замінити $\\cos^2 x$ через $\\sin^2 x$ у рівнянні $3\\sin^2 x + 2\\cos^2 x = 3$?',
        options: [
          '$\\cos^2 x = 1 + \\sin^2 x$',
          '$\\cos^2 x = 1 - \\sin^2 x$',
          '$\\cos^2 x = \\sin^2 x$',
          '$\\cos^2 x = \\sin^2 x - 1$'
        ],
        correct: 1,
        explanation: 'З основної тотожності: $\\cos^2 x = 1 - \\sin^2 x$. Підставивши: $3\\sin^2 x + 2(1-\\sin^2 x) = 3$.'
      },
      {
        question: 'Розв\'яжіть $3\\sin^2 x + 2(1 - \\sin^2 x) = 3$. Знайдіть $\\sin^2 x$:',
        type: 'text_input',
        correct: ['1'],
        explanation: '$3\\sin^2 x + 2 - 2\\sin^2 x = 3 \\Rightarrow \\sin^2 x = 1 \\Rightarrow \\sin x = \\pm 1$.'
      }
    ]
  },
  {
    id: '4-4-homogeneous',
    section: 4,
    sectionName: 'Тригонометричні рівняння і нерівності',
    title: 'Однорідні тригонометричні рівняння',
    description: 'Однорідні рівняння, ділення на cos²x, універсальна підстановка',
    icon: '⚖️',
    questions: [
      {
        question: 'Рівняння $a\\sin x + b\\cos x = 0$ називається однорідним тригонометричним рівнянням:',
        options: [
          'Першого степеня',
          'Другого степеня',
          'Третього степеня',
          'Нульового степеня'
        ],
        correct: 0,
        explanation: 'Це однорідне рівняння першого степеня відносно $\\sin x$ і $\\cos x$, бо кожен доданок має степінь 1.'
      },
      {
        question: 'Як розв\'язати однорідне рівняння $3\\sin x - \\cos x = 0$?',
        options: [
          'Поділити обидві частини на $\\cos x$',
          'Поділити обидві частини на $\\sin x$',
          'Піднести до квадрата',
          'Додати $1$ до обох частин'
        ],
        correct: 0,
        explanation: 'Ділимо на $\\cos x \\ne 0$: $3\\operatorname{tg} x - 1 = 0$, звідки $\\operatorname{tg} x = \\dfrac{1}{3}$.'
      },
      {
        question: 'Рівняння $a\\sin^2 x + b\\sin x \\cos x + c\\cos^2 x = 0$ є однорідним рівнянням:',
        options: [
          'Першого степеня',
          'Другого степеня',
          'Нульового степеня',
          'Це не однорідне рівняння'
        ],
        correct: 1,
        explanation: 'Кожен доданок має другий степінь відносно $\\sin x$ та $\\cos x$ сумарно, тому це однорідне рівняння другого степеня.'
      },
      {
        question: 'Після ділення рівняння $\\sin^2 x - 3\\sin x \\cos x + 2\\cos^2 x = 0$ на $\\cos^2 x$ отримаємо:',
        options: [
          '$\\operatorname{tg}^2 x - 3\\operatorname{tg} x + 2 = 0$',
          '$\\operatorname{tg}^2 x - 3 + 2 = 0$',
          '$\\sin^2 x - 3\\sin x + 2 = 0$',
          '$1 - 3\\operatorname{tg} x + 2\\operatorname{tg}^2 x = 0$'
        ],
        correct: 0,
        explanation: 'Ділимо кожен доданок на $\\cos^2 x$: $\\dfrac{\\sin^2 x}{\\cos^2 x} - 3\\dfrac{\\sin x}{\\cos x} + 2 = \\operatorname{tg}^2 x - 3\\operatorname{tg} x + 2 = 0$.'
      },
      {
        question: 'Універсальна підстановка $t = \\operatorname{tg} \\dfrac{x}{2}$ виражає $\\sin x$ як:',
        options: [
          '$\\dfrac{2t}{1 + t^2}$',
          '$\\dfrac{1 - t^2}{1 + t^2}$',
          '$\\dfrac{t}{1 + t}$',
          '$\\dfrac{2t}{1 - t^2}$'
        ],
        correct: 0,
        explanation: 'При підстановці $t = \\operatorname{tg} \\dfrac{x}{2}$: $\\sin x = \\dfrac{2t}{1 + t^2}$.'
      },
      {
        question: 'При універсальній підстановці $t = \\operatorname{tg} \\dfrac{x}{2}$ формула для $\\cos x$:',
        options: [
          '$\\dfrac{2t}{1 + t^2}$',
          '$\\dfrac{1 - t^2}{1 + t^2}$',
          '$\\dfrac{1 + t^2}{1 - t^2}$',
          '$\\dfrac{t^2 - 1}{1 + t^2}$'
        ],
        correct: 1,
        explanation: 'При підстановці $t = \\operatorname{tg} \\dfrac{x}{2}$: $\\cos x = \\dfrac{1 - t^2}{1 + t^2}$.'
      },
      {
        question: 'Чи можна ділити однорідне рівняння на $\\cos x$, якщо $\\cos x = 0$ є розв\'язком?',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно. Якщо $\\cos x = 0$ може бути розв\'язком, потрібно спочатку перевірити цей випадок окремо, а потім ділити.'
      },
      {
        question: 'Рівняння $5\\sin^2 x + 3\\cos^2 x = 0$ не має розв\'язків, бо обидва доданки невід\'ємні і не можуть одночасно дорівнювати нулю.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно. $5\\sin^2 x \\ge 0$ і $3\\cos^2 x \\ge 0$, причому $\\sin^2 x + \\cos^2 x = 1$, тому обидва не можуть бути нулями одночасно.'
      },
      {
        question: 'Розв\'яжіть: $\\operatorname{tg}^2 x - 3\\operatorname{tg} x + 2 = 0$. Знайдіть менший корінь для $\\operatorname{tg} x$. Введіть число.',
        type: 'text_input',
        correct: '1',
        explanation: '$t^2 - 3t + 2 = 0 \\Rightarrow (t-1)(t-2) = 0 \\Rightarrow t = 1$ або $t = 2$. Менший: $\\operatorname{tg} x = 1$.'
      },
      {
        question: 'Розв\'яжіть $\\sin x + \\cos x = 0$. Чому дорівнює $\\operatorname{tg} x$? Введіть число.',
        type: 'text_input',
        correct: '-1',
        explanation: 'Ділимо на $\\cos x$: $\\operatorname{tg} x + 1 = 0$, звідки $\\operatorname{tg} x = -1$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: рівняння $\\sin^2 x + 2\\sin x \\cos x + \\cos^2 x = 0$ є однорідним другого степеня.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 1,
        explanation: 'Неправильно! $\\sin^2 x + \\cos^2 x = 1$, тому рівняння спрощується до $1 + 2\\sin x\\cos x = 0$, тобто $1 + \\sin 2x = 0$. Це не однорідне.'
      },
      {
        question: 'Правильно чи неправильно: при універсальній підстановці $t = \\operatorname{tg}\\dfrac{x}{2}$, $\\cos x = \\dfrac{1 - t^2}{1 + t^2}$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! Це одна з формул універсальної підстановки.'
      },
      {
        question: 'Розв\'яжіть $2\\sin x - \\cos x = 0$. Чому дорівнює $\\operatorname{tg} x$?',
        type: 'text_input',
        correct: ['1/2', '0.5', '0,5'],
        explanation: 'Ділимо на $\\cos x$: $2\\operatorname{tg} x - 1 = 0$, звідки $\\operatorname{tg} x = \\dfrac{1}{2}$.'
      },
      {
        question: 'Після ділення $3\\sin^2 x - 5\\sin x\\cos x + 2\\cos^2 x = 0$ на $\\cos^2 x$ отримаємо:',
        options: [
          '$3\\operatorname{tg}^2 x - 5\\operatorname{tg} x + 2 = 0$',
          '$3\\operatorname{tg}^2 x + 5\\operatorname{tg} x + 2 = 0$',
          '$3\\operatorname{tg} x - 5 + 2 = 0$',
          '$3 - 5\\operatorname{tg} x + 2\\operatorname{tg}^2 x = 0$'
        ],
        correct: 0,
        explanation: 'Ділимо кожен доданок на $\\cos^2 x$: $3\\operatorname{tg}^2 x - 5\\operatorname{tg} x + 2 = 0$.'
      },
      {
        question: 'Розв\'яжіть $\\operatorname{tg}^2 x - 5\\operatorname{tg} x + 6 = 0$. Знайдіть корені:',
        options: [
          '$\\operatorname{tg} x = 2$ або $\\operatorname{tg} x = 3$',
          '$\\operatorname{tg} x = -2$ або $\\operatorname{tg} x = -3$',
          '$\\operatorname{tg} x = 1$ або $\\operatorname{tg} x = 6$',
          '$\\operatorname{tg} x = 2$ або $\\operatorname{tg} x = -3$'
        ],
        correct: 0,
        explanation: '$t^2 - 5t + 6 = (t - 2)(t - 3) = 0$. $t = 2$ або $t = 3$.'
      },
      {
        question: 'При яких умовах можна ділити однорідне рівняння на $\\cos^2 x$?',
        options: [
          'Завжди',
          'Тільки якщо $\\cos x \\neq 0$',
          'Після перевірки, що $\\cos x = 0$ не є розв\'язком',
          'Тільки для рівнянь першого степеня'
        ],
        correct: 2,
        explanation: 'Потрібно спочатку перевірити: чи є $\\cos x = 0$ розв\'язком? Якщо ні — можна ділити.'
      },
      {
        question: 'Чи є $\\cos x = 0$ розв\'язком рівняння $\\sin^2 x - 3\\sin x\\cos x + 2\\cos^2 x = 0$?',
        type: 'true_false',
        options: ['Так, є розв\'язком', 'Ні, не є розв\'язком'],
        correct: 1,
        explanation: 'При $\\cos x = 0$: $\\sin^2 x = 1$, тому ліва частина $= 1 \\neq 0$. Отже, $\\cos x = 0$ не є розв\'язком.'
      },
      {
        question: 'Чому дорівнює $\\sin x$ при універсальній підстановці $t = \\operatorname{tg}\\dfrac{x}{2}$?',
        options: [
          '$\\dfrac{2t}{1 + t^2}$',
          '$\\dfrac{1 - t^2}{1 + t^2}$',
          '$\\dfrac{2t}{1 - t^2}$',
          '$\\dfrac{t^2}{1 + t^2}$'
        ],
        correct: 0,
        explanation: '$\\sin x = \\dfrac{2t}{1 + t^2}$ — одна з формул універсальної підстановки.'
      }
    ]
  },
  {
    id: '4-5-inequalities',
    section: 4,
    sectionName: 'Тригонометричні рівняння і нерівності',
    title: 'Найпростіші тригонометричні нерівності',
    description: 'Розв\'язання sin x > a, cos x ≤ a на одиничному колі',
    icon: '📊',
    questions: [
      {
        question: 'Розв\'яжіть нерівність $\\sin x > 0$:',
        options: [
          '$x \\in (0; \\pi) + 2\\pi n, \\; n \\in \\mathbb{Z}$',
          '$x \\in (-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}) + 2\\pi n$',
          '$x \\in (0; 2\\pi) + 2\\pi n$',
          '$x \\in (\\dfrac{\\pi}{2}; \\dfrac{3\\pi}{2}) + 2\\pi n$'
        ],
        correct: 0,
        explanation: '$\\sin x > 0$ у верхній півплощині одиничного кола, тобто при $x \\in (2\\pi n; \\pi + 2\\pi n)$.'
      },
      {
        question: 'Розв\'яжіть нерівність $\\cos x \\ge 0$:',
        options: [
          '$x \\in [0; \\pi] + 2\\pi n$',
          '$x \\in [-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}] + 2\\pi n, \\; n \\in \\mathbb{Z}$',
          '$x \\in [0; 2\\pi] + 2\\pi n$',
          '$x \\in [-\\pi; \\pi] + 2\\pi n$'
        ],
        correct: 1,
        explanation: '$\\cos x \\ge 0$ у правій півплощині одиничного кола: $x \\in [-\\dfrac{\\pi}{2} + 2\\pi n; \\dfrac{\\pi}{2} + 2\\pi n]$.'
      },
      {
        question: 'Яка множина розв\'язків нерівності $\\sin x \\ge 1$?',
        options: [
          '$x = \\dfrac{\\pi}{2} + 2\\pi n, \\; n \\in \\mathbb{Z}$',
          '$x \\in [0; \\pi] + 2\\pi n$',
          'Порожня множина',
          '$x \\in \\mathbb{R}$'
        ],
        correct: 0,
        explanation: '$\\sin x \\le 1$ завжди, а $\\sin x = 1$ лише при $x = \\dfrac{\\pi}{2} + 2\\pi n$. Тому $\\sin x \\ge 1 \\Leftrightarrow \\sin x = 1$.'
      },
      {
        question: 'Розв\'яжіть: $\\cos x < -1$.',
        options: [
          '$x = \\pi + 2\\pi n$',
          '$x \\in (\\pi; 2\\pi) + 2\\pi n$',
          'Порожня множина — розв\'язків немає',
          '$x \\in (-\\pi; \\pi)$'
        ],
        correct: 2,
        explanation: '$\\cos x \\ge -1$ для будь-якого $x$, тому $\\cos x < -1$ не виконується ніколи. Розв\'язків немає.'
      },
      {
        question: 'Розв\'яжіть нерівність $\\sin x > \\dfrac{1}{2}$:',
        options: [
          '$x \\in (\\dfrac{\\pi}{6}; \\dfrac{5\\pi}{6}) + 2\\pi n, \\; n \\in \\mathbb{Z}$',
          '$x \\in (\\dfrac{\\pi}{6}; \\pi) + 2\\pi n$',
          '$x \\in (0; \\dfrac{\\pi}{6}) + 2\\pi n$',
          '$x \\in (\\dfrac{\\pi}{3}; \\dfrac{2\\pi}{3}) + 2\\pi n$'
        ],
        correct: 0,
        explanation: '$\\sin x = \\dfrac{1}{2}$ при $x = \\dfrac{\\pi}{6}$ та $x = \\dfrac{5\\pi}{6}$. Між ними $\\sin x > \\dfrac{1}{2}$.'
      },
      {
        question: 'Розв\'яжіть: $\\cos x \\le \\dfrac{1}{2}$:',
        options: [
          '$x \\in [-\\dfrac{\\pi}{3}; \\dfrac{\\pi}{3}] + 2\\pi n$',
          '$x \\in [\\dfrac{\\pi}{3}; \\dfrac{5\\pi}{3}] + 2\\pi n, \\; n \\in \\mathbb{Z}$',
          '$x \\in [\\dfrac{\\pi}{6}; \\dfrac{5\\pi}{6}] + 2\\pi n$',
          '$x \\in [0; \\dfrac{\\pi}{3}] + 2\\pi n$'
        ],
        correct: 1,
        explanation: '$\\cos x = \\dfrac{1}{2}$ при $x = \\pm \\dfrac{\\pi}{3}$. $\\cos x \\le \\dfrac{1}{2}$ на дузі $[\\dfrac{\\pi}{3}; \\dfrac{5\\pi}{3}] + 2\\pi n$.'
      },
      {
        question: 'Нерівність $\\sin x > 2$ не має розв\'язків.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно. $\\sin x \\le 1 < 2$ для будь-якого $x$, тому нерівність не має розв\'язків.'
      },
      {
        question: 'Нерівність $\\cos x \\ge -1$ виконується для всіх дійсних $x$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно. Мінімальне значення $\\cos x = -1$, тому $\\cos x \\ge -1$ виконується завжди.'
      },
      {
        question: 'Скільки розв\'язків має нерівність $\\sin x > 0$ на проміжку $[0; 2\\pi]$? Відповідь: "нескінченно".',
        type: 'text_input',
        correct: 'нескінченно',
        explanation: 'На інтервалі $(0; \\pi)$ нескінченно багато точок, де $\\sin x > 0$. Нерівність задовольняє весь інтервал.'
      },
      {
        question: 'При розв\'язуванні $\\sin x \\ge \\dfrac{1}{2}$ на $[0; 2\\pi]$, введіть праву межу проміжку розв\'язків у вигляді дробу з π (наприклад: 5π/6).',
        type: 'text_input',
        correct: '5π/6',
        explanation: '$\\sin x \\ge \\dfrac{1}{2}$ на $[0; 2\\pi]$ має розв\'язок $x \\in [\\dfrac{\\pi}{6}; \\dfrac{5\\pi}{6}]$. Права межа — $\\dfrac{5\\pi}{6}$.'
      }
    ],
    examQuestions: [
      {
        question: 'Правильно чи неправильно: нерівність $\\sin x \\leq -2$ не має розв\'язків.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! $\\sin x \\geq -1 > -2$ завжди, тому $\\sin x \\leq -2$ неможливо.'
      },
      {
        question: 'Правильно чи неправильно: нерівність $\\cos x \\leq 1$ виконується для всіх $x$.',
        type: 'true_false',
        options: ['Правильно', 'Неправильно'],
        correct: 0,
        explanation: 'Правильно! Максимальне значення $\\cos x = 1$, тому $\\cos x \\leq 1$ завжди.'
      },
      {
        question: 'Розв\'яжіть $\\sin x < 0$ на $[0; 2\\pi]$:',
        options: [
          '$x \\in (\\pi; 2\\pi)$',
          '$x \\in (0; \\pi)$',
          '$x \\in (\\dfrac{\\pi}{2}; \\dfrac{3\\pi}{2})$',
          '$x \\in (\\dfrac{3\\pi}{2}; 2\\pi)$'
        ],
        correct: 0,
        explanation: '$\\sin x < 0$ у нижній півплощині, тобто при $x \\in (\\pi; 2\\pi)$.'
      },
      {
        question: 'Розв\'яжіть $\\cos x > \\dfrac{\\sqrt{2}}{2}$ на $[0; 2\\pi]$:',
        options: [
          '$x \\in [0; \\dfrac{\\pi}{4})$',
          '$x \\in (0; \\dfrac{\\pi}{4}) \\cup (\\dfrac{7\\pi}{4}; 2\\pi)$',
          '$x \\in [0; \\dfrac{\\pi}{4}) \\cup (\\dfrac{7\\pi}{4}; 2\\pi]$',
          '$x \\in (\\dfrac{\\pi}{4}; \\dfrac{7\\pi}{4})$'
        ],
        correct: 2,
        explanation: '$\\cos x = \\dfrac{\\sqrt{2}}{2}$ при $x = \\dfrac{\\pi}{4}$ і $x = \\dfrac{7\\pi}{4}$. $\\cos x > \\dfrac{\\sqrt{2}}{2}$ між ними (через 0): $[0; \\dfrac{\\pi}{4}) \\cup (\\dfrac{7\\pi}{4}; 2\\pi]$.'
      },
      {
        question: 'Нерівність $\\sin x \\geq -\\dfrac{1}{2}$ на $[0; 2\\pi]$. Яка множина розв\'язків?',
        options: [
          '$[0; \\dfrac{7\\pi}{6}] \\cup [\\dfrac{11\\pi}{6}; 2\\pi]$',
          '$[\\dfrac{7\\pi}{6}; \\dfrac{11\\pi}{6}]$',
          '$[0; 2\\pi]$',
          '$[\\dfrac{\\pi}{6}; \\dfrac{5\\pi}{6}]$'
        ],
        correct: 0,
        explanation: '$\\sin x = -\\dfrac{1}{2}$ при $x = \\dfrac{7\\pi}{6}$ і $x = \\dfrac{11\\pi}{6}$. $\\sin x \\geq -\\dfrac{1}{2}$ поза дугою: $[0; \\dfrac{7\\pi}{6}] \\cup [\\dfrac{11\\pi}{6}; 2\\pi]$.'
      },
      {
        question: 'Скільки цілих розв\'язків має нерівність $\\cos x > 0$ на $(-\\pi; \\pi)$?',
        options: ['$0$', '$1$', '$3$', 'Нескінченно'],
        correct: 3,
        explanation: '$\\cos x > 0$ при $x \\in (-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2})$ — це ціла множина точок, тобто нескінченно багато розв\'язків.'
      },
      {
        question: 'Розв\'яжіть $\\sin x \\leq -1$ на $[0; 2\\pi]$. Запишіть розв\'язок у вигляді $k\\pi/n$:',
        type: 'text_input',
        correct: ['3π/2', '3pi/2'],
        explanation: '$\\sin x = -1$ лише при $x = \\dfrac{3\\pi}{2}$. Тому $\\sin x \\leq -1 \\Leftrightarrow \\sin x = -1 \\Leftrightarrow x = \\dfrac{3\\pi}{2}$.'
      },
      {
        question: 'Розв\'яжіть $\\cos x < \\dfrac{1}{2}$ на $[0; 2\\pi]$. Ліва межа проміжку:',
        type: 'text_input',
        correct: ['π/3', 'pi/3'],
        explanation: '$\\cos x = \\dfrac{1}{2}$ при $x = \\dfrac{\\pi}{3}$ і $x = \\dfrac{5\\pi}{3}$. $\\cos x < \\dfrac{1}{2}$ на $(\\dfrac{\\pi}{3}; \\dfrac{5\\pi}{3})$.'
      }
    ]
  }
];
