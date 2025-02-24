function setTitle(newTitle) {
    document.getElementById('header-title').innerText = newTitle;
    document.getElementById('page-title').innerText = newTitle; // Изменяем заголовок страницы
}

window.onload = function() {
    const savedTitle = localStorage.getItem('headerTitle');
    if (savedTitle) {
        document.getElementById('header-title').innerText = savedTitle;
    }
    loadHeader();
};

function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data; // Исправлено на 'header'
        });
}
