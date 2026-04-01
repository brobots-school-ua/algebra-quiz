// Interactive question types: matching, fill_blanks, ordering
// These are added to existing quizzes via QUIZZES array

const INTERACTIVE_QUESTIONS = {
  // Add to quiz 3-7-addition
  '3-7-addition': [
    {
      question: 'З\'єднай формулу з її назвою:',
      type: 'matching',
      pairs: [
        ['$\\sin(\\alpha+\\beta)$', '$\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$'],
        ['$\\cos(\\alpha+\\beta)$', '$\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$'],
        ['$\\sin^2\\alpha$', '$\\dfrac{1 - \\cos 2\\alpha}{2}$'],
        ['$\\cos^2\\alpha$', '$\\dfrac{1 + \\cos 2\\alpha}{2}$']
      ],
      explanation: 'Формули додавання для синуса та косинуса, а також формули пониження степеня.'
    },
    {
      question: 'Заповни пропуски у формулі:',
      type: 'fill_blanks',
      template: '$\\sin(\\alpha + \\beta) =$ ___ $\\cdot \\cos\\beta +$ ___ $\\cdot \\sin\\beta$',
      blanks: ['$\\sin\\alpha$', '$\\cos\\alpha$'],
      options_extra: ['$\\operatorname{tg}\\alpha$', '$-\\sin\\alpha$'],
      explanation: '$\\sin(\\alpha + \\beta) = \\sin\\alpha \\cdot \\cos\\beta + \\cos\\alpha \\cdot \\sin\\beta$'
    }
  ],

  // Add to quiz 3-5-identities
  '3-5-identities': [
    {
      question: 'З\'єднай тотожність з її значенням:',
      type: 'matching',
      pairs: [
        ['$\\sin^2\\alpha + \\cos^2\\alpha$', '$1$'],
        ['$\\operatorname{tg}\\alpha \\cdot \\operatorname{ctg}\\alpha$', '$1$'],
        ['$1 + \\operatorname{tg}^2\\alpha$', '$\\dfrac{1}{\\cos^2\\alpha}$'],
        ['$1 + \\operatorname{ctg}^2\\alpha$', '$\\dfrac{1}{\\sin^2\\alpha}$']
      ],
      explanation: 'Основні тригонометричні тотожності зв\'язують усі тригонометричні функції.'
    }
  ],

  // Add to quiz 3-2-trig-circle
  '3-2-trig-circle': [
    {
      question: 'Розстав значення $\\sin$ від найменшого до найбільшого:',
      type: 'ordering',
      items: ['$\\sin 0° = 0$', '$\\sin 30° = \\dfrac{1}{2}$', '$\\sin 45° = \\dfrac{\\sqrt{2}}{2}$', '$\\sin 60° = \\dfrac{\\sqrt{3}}{2}$', '$\\sin 90° = 1$'],
      explanation: 'Синус зростає від $0°$ до $90°$: $0 < \\dfrac{1}{2} < \\dfrac{\\sqrt{2}}{2} < \\dfrac{\\sqrt{3}}{2} < 1$.'
    },
    {
      question: 'З\'єднай кут з його синусом:',
      type: 'matching',
      pairs: [
        ['$30°$', '$\\dfrac{1}{2}$'],
        ['$45°$', '$\\dfrac{\\sqrt{2}}{2}$'],
        ['$60°$', '$\\dfrac{\\sqrt{3}}{2}$'],
        ['$90°$', '$1$']
      ],
      explanation: 'Табличні значення синуса для основних кутів.'
    }
  ],

  // Add to quiz 3-8-double-angle
  '3-8-double-angle': [
    {
      question: 'Заповни формулу подвійного аргументу:',
      type: 'fill_blanks',
      template: '$\\sin 2\\alpha =$ ___ $\\cdot \\sin\\alpha \\cdot$ ___',
      blanks: ['$2$', '$\\cos\\alpha$'],
      options_extra: ['$3$', '$\\sin\\alpha$'],
      explanation: '$\\sin 2\\alpha = 2 \\sin\\alpha \\cos\\alpha$'
    },
    {
      question: 'З\'єднай формулу $\\cos 2\\alpha$ з еквівалентним виразом:',
      type: 'matching',
      pairs: [
        ['через $\\cos$', '$2\\cos^2\\alpha - 1$'],
        ['через $\\sin$', '$1 - 2\\sin^2\\alpha$'],
        ['через обидва', '$\\cos^2\\alpha - \\sin^2\\alpha$']
      ],
      explanation: 'Три еквівалентні форми $\\cos 2\\alpha$.'
    }
  ],

  // Add to quiz 3-6-reduction
  '3-6-reduction': [
    {
      question: 'З\'єднай вираз з його спрощенням:',
      type: 'matching',
      pairs: [
        ['$\\sin(\\pi - \\alpha)$', '$\\sin\\alpha$'],
        ['$\\cos(\\pi - \\alpha)$', '$-\\cos\\alpha$'],
        ['$\\sin(\\pi + \\alpha)$', '$-\\sin\\alpha$'],
        ['$\\cos(\\pi + \\alpha)$', '$-\\cos\\alpha$']
      ],
      explanation: 'Формули зведення з аргументом $\\pi \\pm \\alpha$: функція не змінюється, знак — за чвертю.'
    }
  ],

  // Add to quiz 2-1-powers
  '2-1-powers': [
    {
      question: 'Розстав степені $2^n$ від найменшої до найбільшої:',
      type: 'ordering',
      items: ['$2^{-2} = \\dfrac{1}{4}$', '$2^{-1} = \\dfrac{1}{2}$', '$2^0 = 1$', '$2^1 = 2$', '$2^3 = 8$'],
      explanation: 'Степені зростають зі збільшенням показника: $\\dfrac{1}{4} < \\dfrac{1}{2} < 1 < 2 < 8$.'
    },
    {
      question: 'З\'єднай вираз зі спрощеним результатом:',
      type: 'matching',
      pairs: [
        ['$a^3 \\cdot a^2$', '$a^5$'],
        ['$(a^2)^3$', '$a^6$'],
        ['$\\dfrac{a^7}{a^4}$', '$a^3$'],
        ['$a^{-1}$', '$\\dfrac{1}{a}$']
      ],
      explanation: 'Властивості степенів: при множенні показники додаються, при діленні — віднімаються, при піднесенні до степеня — множаться.'
    }
  ],

  // Add to quiz 5-3-derivative-concept
  '5-3-derivative-concept': [
    {
      question: 'Розстав кроки знаходження похідної в правильному порядку:',
      type: 'ordering',
      items: [
        '1. Записати $f(x + \\Delta x)$',
        '2. Знайти приріст $\\Delta f = f(x+\\Delta x) - f(x)$',
        '3. Скласти відношення $\\dfrac{\\Delta f}{\\Delta x}$',
        '4. Знайти границю $\\lim_{\\Delta x \\to 0} \\dfrac{\\Delta f}{\\Delta x}$'
      ],
      explanation: 'Похідна — це границя відношення приросту функції до приросту аргументу.'
    }
  ],

  // Add to quiz 4-2-simple-equations
  '4-2-simple-equations': [
    {
      question: 'З\'єднай рівняння з формулою загального розв\'язку:',
      type: 'matching',
      pairs: [
        ['$\\sin x = a$', '$x = (-1)^n \\arcsin a + \\pi n$'],
        ['$\\cos x = a$', '$x = \\pm \\arccos a + 2\\pi n$'],
        ['$\\operatorname{tg} x = a$', '$x = \\operatorname{arctg} a + \\pi n$']
      ],
      explanation: 'Три основні формули для розв\'язання найпростіших тригонометричних рівнянь.'
    }
  ],

  // Add to quiz 3-1-radians
  '3-1-radians': [
    {
      question: 'Розстав кути від найменшого до найбільшого:',
      type: 'ordering',
      items: ['$\\dfrac{\\pi}{6}$ (30°)', '$\\dfrac{\\pi}{4}$ (45°)', '$\\dfrac{\\pi}{3}$ (60°)', '$\\dfrac{\\pi}{2}$ (90°)', '$\\pi$ (180°)'],
      explanation: '$\\dfrac{\\pi}{6} < \\dfrac{\\pi}{4} < \\dfrac{\\pi}{3} < \\dfrac{\\pi}{2} < \\pi$'
    }
  ]
};

// Inject interactive questions into existing quizzes
Object.entries(INTERACTIVE_QUESTIONS).forEach(([quizId, questions]) => {
  const quiz = QUIZZES.find(q => q.id === quizId);
  if (quiz) {
    // Add fill_blanks options (merge blanks + extra into one shuffled array)
    questions.forEach(q => {
      if (q.type === 'fill_blanks' && q.options_extra) {
        q.allOptions = shuffle([...q.blanks, ...q.options_extra]);
        delete q.options_extra;
      }
    });
    quiz.questions.push(...questions);
  }
});
