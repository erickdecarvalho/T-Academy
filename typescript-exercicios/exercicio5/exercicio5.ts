interface Pessoa {
  nome: string;
  idade: number;
  profissao: string;
}

function descreverPessoa(pessoa: Pessoa): string {
  return `${pessoa.nome} tem ${pessoa.idade} anos e trabalha como ${pessoa.profissao}.`;
}

const pessoa1: Pessoa = {
  nome: "Maria",
  idade: 28,
  profissao: "Engenheira"
};

const descricao = descreverPessoa(pessoa1);
console.log(descricao);
