document.getElementById("bombImg").style.display = "none";
document.getElementById("headerBomb").style.display = "none";
document.getElementById("restart").style.display = "none";

// app.js

// Seleciona o elemento do input slider e o span que exibirá o valor selecionado
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

// Exibe o valor inicial do input slider
output.innerHTML = slider.value;

// Atualiza o valor exibido na tela sempre que o valor do input slider mudar
slider.oninput = function () {
    output.innerHTML = this.value;

    if (this.value > 20) {
        document.getElementById("bombImg").style.display = "block";
        document.getElementById("headerBomb").style.display = "block";
        document.getElementById("restart").style.display = "block";
    }
};