let nome: string = "João";
let idade: number = 30;
let estaEstudando: boolean = true;
let notas: number[] = [8.5, 9.0, 7.5];

function descreverPessoa(nome: string, idade: number, estaEstudando: boolean, notas: number[]): string {
    return `Nome: ${nome}, Idade: ${idade}, Status: ${estaEstudando}, Notas: [${notas}]`;
}

let descricao = descreverPessoa(nome, idade, estaEstudando, notas);
console.log(descricao);
