var botao = document.getElementById("botao")
botao.addEventListener("click", calcularJuros)

function calcularJuros() {
    
    // parseFloat e int é convertido em um número decimal e armazenado na variável capital
    // os dois para obter o valor numérico dos campos de entrada
    var capital = parseFloat(document.getElementById("capital").value) 
    var taxa = parseFloat(document.getElementById("taxa").value)
    var periodo = parseInt(document.getElementById("periodo").value)

    var taxaDecimal = taxa / 100
    var jurosSimples = capital * taxaDecimal * periodo
    var montanteSimples = capital + jurosSimples

    var jurosComposto = capital * (1 + taxaDecimal) ** periodo

    var resultado = document.getElementById("resultado")
    resultado.innerHTML = '<div class="juros">' +
    'Juros Simples: R$ ' + jurosSimples.toFixed(2) + '<br>' +
    'Montante juros simples: R$ ' + montanteSimples.toFixed(2) + '<br>' +
    'Juros Composto: R$ ' + jurosComposto.toFixed(2) +
    '</div>'
}