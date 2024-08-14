function repetirString(texto: string, vezes: number = 2): string {
  let resultado = '';
  for (let i = 0; i < vezes; i++) {
      resultado += texto;
  }
  return resultado;
}

const resultadoComNumero = repetirString("Olá", 4);
console.log(resultadoComNumero);

const resultadoPadrao = repetirString("Oi");
console.log(resultadoPadrao);
