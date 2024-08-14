function calcularAreaCirculo(raio) {
    if (raio === void 0) { raio = 1; }
    var area = Math.PI * Math.pow(raio, 2);
    return area;
}
var areaComRaio = calcularAreaCirculo(5);
console.log("\u00C1rea com raio 5: ".concat(areaComRaio));
var areaPadrao = calcularAreaCirculo();
console.log("\u00C1rea com raio padr\u00E3o (1): ".concat(areaPadrao));
