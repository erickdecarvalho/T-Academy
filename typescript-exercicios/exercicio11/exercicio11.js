function primeiroElemento(array) {
    return array[0];
}
var numeros = [1, 2, 3, 4, 5];
var primeiroNumero = primeiroElemento(numeros);
console.log(primeiroNumero);
var palavras = ["maçã", "banana", "cereja"];
var primeiraPalavra = primeiroElemento(palavras);
console.log(primeiraPalavra);
var pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 22 }
];
var primeiraPessoa = primeiroElemento(pessoas);
console.log(primeiraPessoa);
