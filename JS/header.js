function setTitle(title) {
    document.getElementById('header-title').innerText = title;
    localStorage.setItem('headerTitle', title);
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
            document.getElementById('header-container').innerHTML = data;
        });
}
