type Ponto2D = [number, number];

function calcularDistancia(ponto: Ponto2D): number {
    const [x, y] = ponto;
    return Math.sqrt(x * x + y * y);
}

const ponto: Ponto2D = [3, 4];
const distancia = calcularDistancia(ponto);
console.log(distancia);
