var Caixa = /** @class */ (function () {
    function Caixa() {
    }
    Caixa.prototype.armazenar = function (valor) {
        this.valor = valor;
    };
    Caixa.prototype.recuperar = function () {
        return this.valor;
    };
    return Caixa;
}());
var caixaNumero = new Caixa();
caixaNumero.armazenar(42);
console.log(caixaNumero.recuperar());
var caixaString = new Caixa();
caixaString.armazenar("Olá, mundo!");
console.log(caixaString.recuperar());
var caixaPessoa = new Caixa();
caixaPessoa.armazenar({ nome: "Ana", idade: 28 });
console.log(caixaPessoa.recuperar());
