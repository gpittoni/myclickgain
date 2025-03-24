let puntos = 0;

document.getElementById("clickButton").addEventListener("click", function() {
    puntos++;
    document.getElementById("puntos").textContent = puntos;
});

document.getElementById("multiplicador").addEventListener("click", function() {
    puntos *= 1.5;
    document.getElementById("puntos").textContent = Math.floor(puntos);
});
