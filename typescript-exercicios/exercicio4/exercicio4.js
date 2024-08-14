function repetirString(texto, vezes) {
    if (vezes === void 0) { vezes = 2; }
    var resultado = '';
    for (var i = 0; i < vezes; i++) {
        resultado += texto;
    }
    return resultado;
}
var resultadoComNumero = repetirString("Olá", 4);
console.log(resultadoComNumero);
var resultadoPadrao = repetirString("Oi");
console.log(resultadoPadrao);
