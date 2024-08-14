function descreverPessoa(pessoa) {
    return "".concat(pessoa.nome, " tem ").concat(pessoa.idade, " anos e trabalha como ").concat(pessoa.profissao, ".");
}
var pessoa1 = {
    nome: "Maria",
    idade: 28,
    profissao: "Engenheira"
};
var descricao = descreverPessoa(pessoa1);
console.log(descricao);
