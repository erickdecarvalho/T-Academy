var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana["Domingo"] = "Domingo";
    DiaDaSemana["Segunda"] = "Segunda-feira";
    DiaDaSemana["Ter\u00E7a"] = "Ter\u00E7a-feira";
    DiaDaSemana["Quarta"] = "Quarta-feira";
    DiaDaSemana["Quinta"] = "Quinta-feira";
    DiaDaSemana["Sexta"] = "Sexta-feira";
    DiaDaSemana["S\u00E1bado"] = "S\u00E1bado";
})(DiaDaSemana || (DiaDaSemana = {}));
function classificarDia(dia) {
    switch (dia) {
        case DiaDaSemana.Sábado:
        case DiaDaSemana.Domingo:
            return "Fim de semana";
        default:
            return "Dia útil";
    }
}
var dia1 = DiaDaSemana.Segunda;
var dia2 = DiaDaSemana.Sábado;
console.log("".concat(dia1, ": ").concat(classificarDia(dia1)));
console.log("".concat(dia2, ": ").concat(classificarDia(dia2)));
