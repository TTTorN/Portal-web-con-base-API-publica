// Cargar el header
fetch('/front/componentes/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data);

fetch('/front/componentes/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);