# Algebra Quiz — Інструкції для Claude

## Про проєкт
Інтерактивна платформа квізів з алгебри для 10 класу. Учні проходять тести, вчитель бачить результати.

## Власниця проєкту
Олена Павлюк — вчителька математики. Спілкуйся українською, пояснюй простими словами.

## Обов'язкові правила

### Після кожного завершеного завдання:
1. **Оновити PROJECT.md** — позначити виконане (✅), оновити статуси, додати нові пункти
2. **Зробити git commit** з описовим повідомленням українською
3. **Запушити на GitHub** (`git push origin main`)
4. **Оновити gh-pages** — переключитись на гілку, скопіювати файли з `public/`, запушити
5. Повідомити Олені що зроблено та дати посилання

### Деплой — порядок оновлення сайту:
```bash
# 1. Commit і push в main
git add -A && git commit -m "опис" && git push origin main

# 2. Оновити gh-pages
git checkout gh-pages
git checkout main -- public/
cp -f public/index.html . && cp -f public/quiz.html . && cp -f public/results.html .
cp -f public/js/* js/
git add index.html quiz.html results.html js/
git commit -m "Update site" && git push origin gh-pages
git checkout main
```

### Git:
- Remote: `https://github.com/brobots-school-ua/algebra-quiz`
- Гілка `main` — вихідний код
- Гілка `gh-pages` — статичний сайт (файли в корені, НЕ в public/)
- Гілка `data` — результати квізів (results.json)
- Push через акаунт `deimoc` (Дмитро)

## Архітектура

### Сайт (статичний, GitHub Pages):
- `public/index.html` — каталог квізів
- `public/quiz.html` — сторінка квізу (підтримує choice, true_false, text_input)
- `public/results.html` — результати для вчителя (пароль: `math2024`)
- `public/js/quizzes.js` — основні квізи (Розділи 2, 3, 4)
- `public/js/quizzes-extra.js` — додаткові квізи (Розділи 1, 2, 5) + merge з дедублікацією
- `public/js/api.js` — збереження результатів через GitHub Contents API

### Збереження результатів:
- GitHub Contents API → файл `results.json` у гілці `data`
- Токен зберігається у api.js розбитий на масив (обхід GitHub push protection)
- Fallback на localStorage при помилках мережі

### Посилання:
- Сайт: `https://brobots-school-ua.github.io/algebra-quiz/`
- Результати: `https://brobots-school-ua.github.io/algebra-quiz/results.html`
- GitHub: `https://github.com/brobots-school-ua/algebra-quiz`

## Формат квізів

```javascript
{
  id: 'section-number-slug',     // напр. '3-7-addition'
  section: 3,
  sectionName: 'Назва розділу',
  title: 'Назва квізу',
  description: 'Короткий опис',
  icon: '📐',
  questions: [
    // Вибір відповіді (без type):
    { question: 'Текст $LaTeX$', options: ['A','B','C','D'], correct: 0, explanation: '...' },
    // Правильно/Неправильно:
    { question: '...', type: 'true_false', options: ['Правильно','Неправильно'], correct: 0, explanation: '...' },
    // Введення відповіді:
    { question: '...', type: 'text_input', correct: 'відповідь', explanation: '...' }
    // correct може бути масивом: correct: ['π/2', 'pi/2']
  ]
}
```

## Технічний стек
- Frontend: Vanilla HTML/CSS/JS + KaTeX (CDN)
- Сховище: GitHub Contents API (гілка `data`)
- Хостинг: GitHub Pages (гілка `gh-pages`)
- Формули: KaTeX з `$...$` delimiters
- Котячі меми: cataas.com (fallback: placekitten.com)

## Стиль роботи з Оленою
- Олена не технічна — пояснюй що зробив простими словами, без жаргону
- Олена не має доступу до шкільного GitHub — все робиш сам через акаунт `deimoc`
- Олена хоче бачити прогрес — тому PROJECT.md завжди має бути актуальним
- Коли щось готове — давай посилання щоб вона могла перевірити
- Якщо потрібна її допомога (пароль, текст питання, тема) — питай прямо
- Дмитро (deimoc) — технічний наставник, до нього звертатись з інфраструктурними питаннями

## Перевірка якості
Перед деплоєм нового квізу переконайся:
- Всі правильні відповіді дійсно правильні (перевір формули!)
- LaTeX формули коректні (не зламаний синтаксис)
- Для text_input передбачені різні варіанти написання відповіді (масив correct)
- Є пояснення до кожного питання
- Мікс типів питань у квізі (не тільки вибір відповіді)

## Що НЕ робити
- Не пушити токени у відкритому вигляді (GitHub push protection заблокує)
- Не видаляти гілку `data` — там результати учнів
- Не змінювати пароль вчителя без узгодження з Оленою
- Не видаляти котів з квізу (учням подобається)
- Не забувати оновлювати PROJECT.md (це вже сталося один раз — Олена помітила!)
- Не додавати фічі без пояснення навіщо вони потрібні
