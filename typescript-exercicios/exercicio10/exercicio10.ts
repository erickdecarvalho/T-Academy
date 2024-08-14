class Funcionario {
  nome: string;
  salario: number;

  constructor(nome: string, salario: number) {
      this.nome = nome;
      this.salario = salario;
  }

  calcularSalario(): number {
      throw new Error("Método calcularSalario() deve ser sobrescrito");
  }
}

class FuncionarioHorista extends Funcionario {
  horasTrabalhadas: number;
  valorHora: number;

  constructor(nome: string, horasTrabalhadas: number, valorHora: number) {
      super(nome, 0);
      this.horasTrabalhadas = horasTrabalhadas;
      this.valorHora = valorHora;
  }

  calcularSalario(): number {
      return this.horasTrabalhadas * this.valorHora;
  }
}

class FuncionarioAssalariado extends Funcionario {
  constructor(nome: string, salario: number) {
      super(nome, salario);
  }

  calcularSalario(): number {
      return this.salario;
  }
}

const horista = new FuncionarioHorista("Carlos", 160, 25);
const assalariado = new FuncionarioAssalariado("Ana", 3000);

const funcionarios: Funcionario[] = [horista, assalariado];

funcionarios.forEach(funcionario => {
  console.log(`${funcionario.nome}: R$${funcionario.calcularSalario()}`);
});
