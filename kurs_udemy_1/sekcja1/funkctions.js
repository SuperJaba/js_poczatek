var button = document.querySelector("#showText");
var text = document.querySelector("#hiddenText");

button.onclick = function() {
    text.classList.remove("hiden");
}