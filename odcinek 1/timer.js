function odliczanie() {
    var dziasiaj = new Date();
    var day = dziasiaj.getDate();
    if (day < 10) day = "0" + day;
    var miesiac = dziasiaj.getMonth() + 1;
    if (miesiac < 10) miesiac = "0" + miesiac;
    var rok = dziasiaj.getFullYear();

    var godzina = dziasiaj.getHours();
    if (godzina < 10) godzina = "0" + godzina;
    var minuta = dziasiaj.getMinutes();
    if (minuta < 10) minuta = "0" + minuta;
    var sekunda = dziasiaj.getSeconds();
    if (sekunda < 10) sekunda = "0" + sekunda;

    document.getElementById("zegar").innerHTML = day + "/" + miesiac + "/" + rok + " | " + godzina + ":" + minuta + ":" + sekunda;

    setTimeout("odliczanie()", 1000);
}
