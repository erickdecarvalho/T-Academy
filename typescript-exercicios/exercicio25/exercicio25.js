function processarParametro(parametro) {
    if (typeof parametro === 'string') {
        return "O par\u00E2metro \u00E9 uma string com o valor \"".concat(parametro, "\".");
    }
    else if (typeof parametro === 'number') {
        return "O par\u00E2metro \u00E9 um n\u00FAmero com o valor ".concat(parametro, ".");
    }
    else {
        return 'Tipo de parâmetro desconhecido.';
    }
}
console.log(processarParametro('Olá, mundo!'));
console.log(processarParametro(42));
