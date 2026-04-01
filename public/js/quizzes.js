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
    ]
  }
];
