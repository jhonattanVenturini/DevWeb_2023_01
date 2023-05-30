function calcularTabuada() {
    var valor = document.getElementById('valor').value;
    var resultado = '';

    for (var i = 1; i <= 10; i++) {
        resultado += valor + ' x ' + i + ' = ' + (valor * i) + '<br>';
    }

    document.getElementById('resultado').innerHTML = resultado;
}
 