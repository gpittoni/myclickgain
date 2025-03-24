let clickCount = 0;

function handleClick() {
    clickCount++;
    document.getElementById("puntos").innerText = clickCount;  // Cambié "click-count" por "puntos"
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("click-button").addEventListener("click", handleClick);
});
