var random = Math.floor(Math.random() * 5) + 1;
var timer1 = 0;
var timer2 = 0;

function hide() {
    $("#slider").fadeOut(500);
}

function setSlider(i) {
    clearTimeout("timer1");
    clearTimeout("timer2");
    random = i - 1;

    hide();
    setTimeout("slider()", 500);
}

function slider() {
    random++;
    if (random > 5) {
        random = 1;
    }
    //usunac koment ponizej i ustawic pliki grafiki w odpowiednim folderze
    // var plik = "<img src=\"slajdy/plik" + random + ".jpg\" />";

    document.getElementById("slider").innerHTML = random;
    $("#slider").fadeIn(500);
    timer1 = setTimeout("slider()", 5000);
    timer2 = setTimeout("hide()", 4500);
}