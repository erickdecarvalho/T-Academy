var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.descrever = function () {
        return "Pessoa: ".concat(this.nome, ", Idade: ").concat(this.idade);
    };
    return Pessoa;
}());
var Empresa = /** @class */ (function () {
    function Empresa(nome, cnpj) {
        this.nome = nome;
        this.cnpj = cnpj;
    }
    Empresa.prototype.descrever = function () {
        return "Empresa: ".concat(this.nome, ", CNPJ: ").concat(this.cnpj);
    };
    return Empresa;
}());
function processarObjeto(objeto) {
    if (objeto instanceof Pessoa) {
        return "Descri\u00E7\u00E3o da Pessoa: ".concat(objeto.descrever());
    }
    else if (objeto instanceof Empresa) {
        return "Descri\u00E7\u00E3o da Empresa: ".concat(objeto.descrever());
    }
    else {
        return 'Tipo de objeto desconhecido.';
    }
}
var pessoa = new Pessoa('João Silva', 30);
var empresa = new Empresa('Tech Solutions', '12345678000195');
console.log(processarObjeto(pessoa));
console.log(processarObjeto(empresa));
