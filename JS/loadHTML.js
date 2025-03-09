function getRelativePath(file) {
    let depth = window.location.pathname.split('/').length - 2; // Количество вложенных папок
    let prefix = '../'.repeat(depth); // Формируем путь к корню
    return prefix + file; // Возвращаем корректный путь
}

function loadHTML(elementId, file) {
    let path = getRelativePath(file);
    fetch(path)
        .then(response => {
            if (!response.ok) throw new Error(`Ошибка загрузки ${file}: ${response.statusText}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Загружаем хедер и футер с учетом вложенности страницы
window.onload = function() {
    loadHTML('header', 'header.html');
    loadHTML('footer', 'footer.html');
};
