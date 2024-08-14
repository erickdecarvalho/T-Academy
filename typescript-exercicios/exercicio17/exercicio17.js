function inverterPalavras(frase) {
    var palavras = frase.split(' ');
    var palavrasInvertidas = palavras.reverse();
    return palavrasInvertidas.join(' ');
}
var frase = "Olá mundo este é um teste";
var fraseInvertida = inverterPalavras(frase);
console.log(fraseInvertida);
