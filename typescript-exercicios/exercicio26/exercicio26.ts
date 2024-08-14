class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
  }

  descrever(): string {
      return `Pessoa: ${this.nome}, Idade: ${this.idade}`;
  }
}

class Empresa {
  nome: string;
  cnpj: string;

  constructor(nome: string, cnpj: string) {
      this.nome = nome;
      this.cnpj = cnpj;
  }

  descrever(): string {
      return `Empresa: ${this.nome}, CNPJ: ${this.cnpj}`;
  }
}

function processarObjeto(objeto: Pessoa | Empresa): string {
  if (objeto instanceof Pessoa) {
      return `Descrição da Pessoa: ${objeto.descrever()}`;
  } else if (objeto instanceof Empresa) {
      return `Descrição da Empresa: ${objeto.descrever()}`;
  } else {
      return 'Tipo de objeto desconhecido.';
  }
}

const pessoa = new Pessoa('João Silva', 30);
const empresa = new Empresa('Tech Solutions', '12345678000195');

console.log(processarObjeto(pessoa));
console.log(processarObjeto(empresa));
