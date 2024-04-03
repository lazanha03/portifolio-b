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
let valor = qtdeDePaginas * 1000

const tipo = document.querySelector("#tipo").value
if(tipo==2) valor+=2000

const prototipo = document.querySelector("#prototipo_sim").checked
if (prototipo) valor *=1.1

document.querySelector("#valor").innerText = "R$" + valor.toFixed(2)


console.log(qtdeDePaginas)
}