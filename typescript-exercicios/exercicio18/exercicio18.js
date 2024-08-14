function contarVogais(texto) {
    var vogais = 'aeiouAEIOU';
    return texto.split('').reduce(function (contagem, caractere) {
        if (vogais.includes(caractere)) {
            return contagem + 1;
        }
        return contagem;
    }, 0);
}
var texto = "Olá, mundo! Quantas vogais há aqui?";
var quantidadeVogais = contarVogais(texto);
console.log(quantidadeVogais);
