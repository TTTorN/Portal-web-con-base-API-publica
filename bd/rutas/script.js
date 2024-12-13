document.addEventListener("DOMContentLoaded", function() {
    // Cargar el Header
    fetch("/componentes/header.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error! status: " + response.status);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("header").innerHTML = data;
    })
    .catch(error => {
        console.error("Error al cargar el header:", error);
    });

    // Cargar el Footer
    fetch("/componentes/footer.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error! status: " + response.status);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(error => {
        console.error("Error al cargar el footer:", error);
    });
});
