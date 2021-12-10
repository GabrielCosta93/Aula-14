function raizQ() {
    var Numero = parseInt(document.getElementById('numero').value);
    var outRaiz = document.getElementById("outRaiz")

    var resposta = 0

    if (Math.floor(Math.sqrt(Numero)) == Math.sqrt(Numero)) {
        resposta = Math.sqrt(Numero)
        outRaiz.innerHTML = `A raiz quadrada de ${Numero} é ${resposta}`
    }
    else {
        alert("Não há raiz exata para " + Numero)
        document.getElementById('numero').focus()
        return
    }
}

var botaoResultado = document.getElementById("botaoResultado")
botaoResultado.addEventListener('click', raizQ)