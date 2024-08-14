function calcularDistancia(ponto) {
    var x = ponto[0], y = ponto[1];
    return Math.sqrt(x * x + y * y);
}
var ponto = [3, 4];
var distancia = calcularDistancia(ponto);
console.log(distancia);
