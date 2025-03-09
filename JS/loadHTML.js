// loadHTML.js
function loadHTML(elementId, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Ошибка при загрузке:', error));
}

// Загрузка хедера и футера
window.onload = function() {
    loadHTML('header', 'header.html');
    loadHTML('footer', 'footer.html', '../footer.html');
};
