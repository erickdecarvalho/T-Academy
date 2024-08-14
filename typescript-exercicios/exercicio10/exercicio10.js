var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.calcularSalario = function () {
        throw new Error("Método calcularSalario() deve ser sobrescrito");
    };
    return Funcionario;
}());
var FuncionarioHorista = /** @class */ (function (_super) {
    __extends(FuncionarioHorista, _super);
    function FuncionarioHorista(nome, horasTrabalhadas, valorHora) {
        var _this = _super.call(this, nome, 0) || this;
        _this.horasTrabalhadas = horasTrabalhadas;
        _this.valorHora = valorHora;
        return _this;
    }
    FuncionarioHorista.prototype.calcularSalario = function () {
        return this.horasTrabalhadas * this.valorHora;
    };
    return FuncionarioHorista;
}(Funcionario));
var FuncionarioAssalariado = /** @class */ (function (_super) {
    __extends(FuncionarioAssalariado, _super);
    function FuncionarioAssalariado(nome, salario) {
        return _super.call(this, nome, salario) || this;
    }
    FuncionarioAssalariado.prototype.calcularSalario = function () {
        return this.salario;
    };
    return FuncionarioAssalariado;
}(Funcionario));
var horista = new FuncionarioHorista("Carlos", 160, 25);
var assalariado = new FuncionarioAssalariado("Ana", 3000);
var funcionarios = [horista, assalariado];
funcionarios.forEach(function (funcionario) {
    console.log("".concat(funcionario.nome, ": R$").concat(funcionario.calcularSalario()));
});
