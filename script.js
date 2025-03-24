let clickCount = 0;

function handleClick() {
    clickCount++;
    document.getElementById("puntos").innerText = clickCount;  
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("click-button").addEventListener("click", handleClick);
});
