function inverterPalavras(frase: string): string {
  const palavras = frase.split(' ');
  const palavrasInvertidas = palavras.reverse();
  return palavrasInvertidas.join(' ');
}

const frase = "Olá mundo este é um teste";
const fraseInvertida = inverterPalavras(frase);

console.log(fraseInvertida);
