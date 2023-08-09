var Setadireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Bruna = window.document.getElementById("Bruna")
var Samanta = window.document.getElementById("Samanta")
var Setaesquerda = window.document.getElementById("seta-esquerda")
function RolarParaDireita() {
    Leonardo.style="display:none"
    Bruna.style="display:flex"
    Setaesquerda.style="display:flex;margin-top: 55px;"
    Setadireita.style="display:none"
}

function RolarParaEsquerda(){
    Leonardo.style="display:flex"
    Bruna.style="display:none"
    Setadireita.style="display:flex;margin-top: 55px;"
    Setaesquerda.style="display:none"
}