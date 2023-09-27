btn.addEventListener('click', function () {

    var a = parseInt(valora.value)
    var b = parseInt(valorb.value)
    var op = operacao.value

    if (op == 1) {
        resultado.innerHTML = "resultado " + (a + b)
    }

    if (op == 2) {
        resultado.innerHTML = "resultado " + (a - b)
    }
    if (op == 3) {
        resultado.innerHTML = "resultado " + (a * b)
    }
    if (op == 4) {
        resultado.innerHTML = "resultado " + (a / b)
    }



});