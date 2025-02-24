function setTitle(newTitle) {
    document.getElementById('header-title').innerText = newTitle;
    document.getElementById('page-title').innerText = newTitle; // Изменяем заголовок страницы
    localStorage.setItem('headerTitle', newTitle); // Сохраняем заголовок в localStorage
}

window.onload = function() {
    const savedTitle = localStorage.getItem('headerTitle');
    if (savedTitle) {
        document.getElementById('header-title').innerText = savedTitle;
        document.getElementById('page-title').innerText = savedTitle; // Устанавливаем заголовок страницы
    }
    loadHeader();
};

function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data; // Загружаем содержимое хедера
        });
}

// Предотвращаем переход по ссылкам и обновляем заголовок
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        const newTitle = this.innerText; // Получаем текст ссылки
        setTitle(newTitle); // Устанавливаем новый заголовок
        loadHeader(); // Загружаем содержимое
    });
});
