document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
        updateThemeButtonText(savedTheme === 'dark-theme');
    }

    // Обработчик клика по кнопке смены темы
    themeToggle.addEventListener('click', () => {
        const isDarkTheme = document.body.classList.contains('dark-theme');
        const newTheme = isDarkTheme ? 'light-theme' : 'dark-theme';
        
        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme);
        updateThemeButtonText(!isDarkTheme);
    });

    // Функция обновления текста кнопки
    function updateThemeButtonText(isDarkTheme) {
        themeToggle.textContent = isDarkTheme ? 'Светлая тема' : 'Темная тема';
    }
}); 