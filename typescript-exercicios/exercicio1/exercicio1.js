var nome = "João";
var idade = 30;
var estaEstudando = true;
var notas = [8.5, 9.0, 7.5];
function descreverPessoa(nome, idade, estaEstudando, notas) {
    var statusEstudo = estaEstudando ? "está estudando" : "não está estudando";
    var notasStr = notas.join(", ");
    return "Nome: ".concat(nome, ", Idade: ").concat(idade, ", Status: ").concat(statusEstudo, ", Notas: [").concat(notasStr, "]");
}
var descricao = descreverPessoa(nome, idade, estaEstudando, notas);
console.log(descricao);
