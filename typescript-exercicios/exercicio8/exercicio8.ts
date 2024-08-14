class Carro {
  marca: string;
  modelo: string;
  ano: number;

  static contadorDeCarros: number = 0;

  constructor(marca: string, modelo: string, ano: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;

      Carro.contadorDeCarros++;
  }

  descrever(): string {
      return `${this.marca} ${this.modelo}, ano ${this.ano}`;
  }

  static contarCarrosCriados(): number {
      return Carro.contadorDeCarros;
  }
}

const carro1 = new Carro("Toyota", "Corolla", 2020);
const carro2 = new Carro("Honda", "Civic", 2019);
const carro3 = new Carro("Ford", "Mustang", 2021);

console.log(carro1.descrever());
console.log(carro2.descrever());
console.log(carro3.descrever());

console.log(`Número de carros criados: ${Carro.contarCarrosCriados()}`);
