function primeiroElemento<T>(array: T[]): T | undefined {
  return array[0];
}

const numeros: number[] = [1, 2, 3, 4, 5];
const primeiroNumero = primeiroElemento(numeros);
console.log(primeiroNumero);

const palavras: string[] = ["maçã", "banana", "cereja"];
const primeiraPalavra = primeiroElemento(palavras);
console.log(primeiraPalavra);

interface Pessoa {
  nome: string;
  idade: number;
}

const pessoas: Pessoa[] = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 },
  { nome: "Pedro", idade: 22 }
];

const primeiraPessoa = primeiroElemento(pessoas);
console.log(primeiraPessoa);
