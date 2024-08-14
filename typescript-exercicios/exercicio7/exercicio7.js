var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Carro.prototype.descrever = function () {
        return "".concat(this.marca, " ").concat(this.modelo, ", ano ").concat(this.ano);
    };
    return Carro;
}());
var carro1 = new Carro("Toyota", "Corolla", 2020);
var carro2 = new Carro("Honda", "Civic", 2019);
var carro3 = new Carro("Ford", "Mustang", 2021);
console.log(carro1.descrever());
console.log(carro2.descrever());
console.log(carro3.descrever());
