interface Livro {
  titulo: string;
  autor: string;
  numeroDePaginas: number;
  disponivel: boolean;
}

const livro: Livro = {
  titulo: "Dom Quixote",
  autor: "Miguel de Cervantes",
  numeroDePaginas: 863,
  disponivel: true
};

function descreverLivro(livro: Livro): string {
  let disponibilidade = livro.disponivel ? "disponível" : "indisponível";
  return `O livro "${livro.titulo}" de ${livro.autor}, com ${livro.numeroDePaginas} páginas, está atualmente ${disponibilidade}.`;
}

const descricaoLivro = descreverLivro(livro);
console.log(descricaoLivro);
