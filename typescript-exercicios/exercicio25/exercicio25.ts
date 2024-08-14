function processarParametro(parametro: string | number): string {
  if (typeof parametro === 'string') {
      return `O parâmetro é uma string com o valor "${parametro}".`;
  } else if (typeof parametro === 'number') {
      return `O parâmetro é um número com o valor ${parametro}.`;
  } else {
      return 'Tipo de parâmetro desconhecido.';
  }
}

console.log(processarParametro('Olá, mundo!'));
console.log(processarParametro(42));
