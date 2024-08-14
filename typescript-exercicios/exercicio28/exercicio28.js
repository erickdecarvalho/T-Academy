function procurarProdutosPorCategoria(produtos, categoria) {
    return produtos.reduce(function (resultado, produto) {
        if (produto.categoria === categoria) {
            resultado.push(produto);
        }
        return resultado;
    }, []);
}
var produtos = [
    { nome: 'Produto A', preco: 10.00, quantidade: 2, categoria: 'Eletrônicos' },
    { nome: 'Produto B', preco: 5.50, quantidade: 3, categoria: 'Roupas' },
    { nome: 'Produto C', preco: 20.00, quantidade: 1, categoria: 'Eletrônicos' },
    { nome: 'Produto D', preco: 15.00, quantidade: 5, categoria: 'Brinquedos' },
    { nome: 'Produto E', preco: 8.00, quantidade: 4, categoria: 'Roupas' }
];
var categoriaProcurada = 'Roupas';
var produtosFiltrados = procurarProdutosPorCategoria(produtos, categoriaProcurada);
console.log('Produtos na categoria', categoriaProcurada, ':', produtosFiltrados);
