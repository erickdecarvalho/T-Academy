function obterValor(objeto, chave) {
    return objeto[chave];
}
var pessoa = {
    nome: 'João',
    idade: 30,
    email: 'joao@example.com'
};
var nome = obterValor(pessoa, 'nome');
var idade = obterValor(pessoa, 'idade');
var email = obterValor(pessoa, 'email');
console.log(nome);
console.log(idade);
console.log(email);
