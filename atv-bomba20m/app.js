
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

output.innerHTML = (slider.value + "m");

var bombaAtivada = document.getElementById("bombOn");
var bombaDesativada = document.getElementById("bombOff");
var bombStatus = [indicator = document.getElementById("bombAlert"), bombLabel = document.getElementById("statusBomb")];

//SEU CÓDIGO AQUI

var activate = true;
indicator.style.backgroundColor = "#FF0000";
bombLabel.innerHTML = "ARMADO";

//SEU CÓDIGO AQUI

slider.oninput = function () {
    output.innerHTML = (this.value + "m");

    if (activate === true) {
        if (this.value > 20) {
            document.getElementById("bombImg").style.display = "block";
            document.getElementById("headerBomb").style.display = "block";
            document.getElementById("restart").style.display = "block";
        }
    }
};