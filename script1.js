document.getElementById("enter-btn").addEventListener("click", function() {
    // Oculta la sección de introducción
    document.querySelector(".intro").style.display = "none";

    // Muestra la sección principal
    const mainContent = document.querySelector(".main-content");
    mainContent.style.display = "block";
    setTimeout(function() {
        mainContent.style.opacity = "1";
    }, 100);  // Pequeño retraso para que la transición funcione suavemente
});

document.getElementById("yes-btn").addEventListener("click", function() {
    // Redirigir a una nueva página de sorpresa
    window.location.href = "Yes1.html";  // Cambia esto por la página que vas a programar
});

document.getElementById("no-btn").addEventListener("click", function() {
    // Redirigir a una página alternativa
    window.location.href = "No.html";  // Cambia esto por la página que vas a programar
});