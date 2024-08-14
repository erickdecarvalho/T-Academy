class Caixa<T> {
  private valor: T;

  armazenar(valor: T): void {
      this.valor = valor;
  }

  recuperar(): T {
      return this.valor;
  }
}

const caixaNumero = new Caixa<number>();
caixaNumero.armazenar(42);
console.log(caixaNumero.recuperar());

const caixaString = new Caixa<string>();
caixaString.armazenar("Olá, mundo!");
console.log(caixaString.recuperar());

interface Pessoa {
  nome: string;
  idade: number;
}

const caixaPessoa = new Caixa<Pessoa>();
caixaPessoa.armazenar({ nome: "Ana", idade: 28 });
console.log(caixaPessoa.recuperar());
