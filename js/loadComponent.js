// Функція для завантаження компонентів HTML і вставки їх у відповідний елемент
function loadComponent(file, elementId) {
    fetch(file)  // Виконуємо запит на завантаження вказаного файлу
        .then(response => response.text())  // Перетворюємо відповідь в текст (HTML)
        .then(data => {
            // Вставляємо завантажений HTML у елемент з відповідним id
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));  // Обробка помилок
}

// Після того, як весь документ буде завантажений
document.addEventListener("DOMContentLoaded", () => {
    // Завантажуємо і вставляємо заголовок, футер та анімацію
    loadComponent("header.html", "header-placeholder");  
    loadComponent("footer.html", "footer-placeholder");  
    loadComponent("animation.html", "cake-animation");  
});
