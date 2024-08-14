function calcularValorTotal(carrinho) {
    var produtosValidos = carrinho.filter(function (produto) { return produto.quantidade > 0; });
    var valorTotal = produtosValidos.reduce(function (total, produto) {
        return total + (produto.preco * produto.quantidade);
    }, 0);
    return valorTotal;
}
var carrinho = [
    { nome: 'Produto A', preco: 10.00, quantidade: 2, categoria: 'Eletrônicos' },
    { nome: 'Produto B', preco: 5.50, quantidade: 3, categoria: 'Roupas' },
    { nome: 'Produto C', preco: 20.00, quantidade: 1, categoria: 'Eletrônicos' },
    { nome: 'Produto D', preco: 15.00, quantidade: 0, categoria: 'Brinquedos' }
];
var total = calcularValorTotal(carrinho);
console.log("Valor total do carrinho: R$ ".concat(total.toFixed(2)));
