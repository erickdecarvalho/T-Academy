var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        Carro.contadorDeCarros++;
    }
    Carro.prototype.descrever = function () {
        return "".concat(this.marca, " ").concat(this.modelo, ", ano ").concat(this.ano);
    };
    Carro.contarCarrosCriados = function () {
        return Carro.contadorDeCarros;
    };
    Carro.contadorDeCarros = 0;
    return Carro;
}());
var carro1 = new Carro("Toyota", "Corolla", 2020);
var carro2 = new Carro("Honda", "Civic", 2019);
var carro3 = new Carro("Ford", "Mustang", 2021);
console.log(carro1.descrever());
console.log(carro2.descrever());
console.log(carro3.descrever());
console.log("N\u00FAmero de carros criados: ".concat(Carro.contarCarrosCriados()));
