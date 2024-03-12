const express = require('express');
const app = express();
const path = require('path');

// Маршрут для отримання відгуків
app.get('/reviews', (req, res) => {
    // Симулюємо отримання відгуків
    const reviews = [
        { review: "Great product!" },
        { review: "Awesome experience!" },
        { review: "Highly recommended!" }
    ];
    res.json(reviews);
});

// Задаємо статичний каталог для відображення статичних файлів
app.use(express.static(path.join(__dirname, 'public')));

// Прослуховуємо порт 5500
const PORT = process.env.PORT || 5500; // Використовуємо змінну середовища PORT або 5500 за замовчуванням
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
