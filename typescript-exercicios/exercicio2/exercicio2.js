var livro = {
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    numeroDePaginas: 863,
    disponivel: true
};
function descreverLivro(livro) {
    var disponibilidade = livro.disponivel ? "disponível" : "indisponível";
    return "O livro \"".concat(livro.titulo, "\" de ").concat(livro.autor, ", com ").concat(livro.numeroDePaginas, " p\u00E1ginas, est\u00E1 atualmente ").concat(disponibilidade, ".");
}
var descricaoLivro = descreverLivro(livro);
console.log(descricaoLivro);
