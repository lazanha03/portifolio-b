//tratamento dde eventos
document.querySelector("#paginas").addEventListener("change", calcular)
document.querySelector("#tipo").addEventListener("change", calcular)

document.querySelector("#prazo").addEventListener("input", function(){
    const prazo = Document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerText = "prazo: " + prazo
    calcular()
})


function calcular(){
    // DOM - cocument Objct model
const qtdeDePaginas = document.querySelector("#paginas").value
//var = global 
//const = imutavel o valor
//let = valor dentro de uma função
let valor = qtdeDeCadeiras * 500

const tipo = document.querySelector("#tipo").value
if(tipo==2) valor+=2000

document.querySelector("#valor").innerText = "R$" + valor.toFixed(2)


console.log(qtdeDeCadeiras)
}