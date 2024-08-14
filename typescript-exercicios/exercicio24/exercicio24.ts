function obterValor<T, K extends keyof T>(objeto: T, chave: K): T[K] {
  return objeto[chave];
}


const pessoa = {
  nome: 'João',
  idade: 30,
  email: 'joao@example.com'
};

const nome = obterValor(pessoa, 'nome');
const idade = obterValor(pessoa, 'idade');
const email = obterValor(pessoa, 'email');


console.log(nome);
console.log(idade);
console.log(email);
