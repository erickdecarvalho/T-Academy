function filtrarProdutosPorPreco(produtos, valorMinimo) {
    return produtos.filter(function (produto) { return produto.preco > valorMinimo; });
}
var produtos = [
    { nome: "Produto A", preco: 50 },
    { nome: "Produto B", preco: 30 },
    { nome: "Produto C", preco: 70 },
    { nome: "Produto D", preco: 20 }
];
var valorMinimo = 40;
var produtosFiltrados = filtrarProdutosPorPreco(produtos, valorMinimo);
console.log(produtosFiltrados);
