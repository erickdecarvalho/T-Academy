enum DiaDaSemana {
  Domingo = "Domingo",
  Segunda = "Segunda-feira",
  Terça = "Terça-feira",
  Quarta = "Quarta-feira",
  Quinta = "Quinta-feira",
  Sexta = "Sexta-feira",
  Sábado = "Sábado"
}

function classificarDia(dia: DiaDaSemana): string {
  switch (dia) {
      case DiaDaSemana.Sábado:
      case DiaDaSemana.Domingo:
          return "Fim de semana";
      default:
          return "Dia útil";
  }
}

const dia1 = DiaDaSemana.Segunda;
const dia2 = DiaDaSemana.Sábado;

console.log(`${dia1}: ${classificarDia(dia1)}`);
console.log(`${dia2}: ${classificarDia(dia2)}`);
