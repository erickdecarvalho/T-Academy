function contarVogais(texto: string): number {
  const vogais = 'aeiouAEIOU';
  return texto.split('').reduce((contagem, caractere) => {
      if (vogais.includes(caractere)) {
          return contagem + 1;
      }
      return contagem;
  }, 0);
}

const texto = "Olá, mundo! Quantas vogais há aqui?";
const quantidadeVogais = contarVogais(texto);

console.log(quantidadeVogais);
