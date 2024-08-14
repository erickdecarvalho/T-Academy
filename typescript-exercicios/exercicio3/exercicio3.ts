function calcularAreaCirculo(raio: number = 1): number {
  const area = Math.PI * Math.pow(raio, 2);
  return area;
}

const areaComRaio = calcularAreaCirculo(5);
console.log(`Área com raio 5: ${areaComRaio}`);

const areaPadrao = calcularAreaCirculo();
console.log(`Área com raio padrão (1): ${areaPadrao}`);
