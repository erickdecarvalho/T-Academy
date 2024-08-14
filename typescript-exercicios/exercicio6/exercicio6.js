function filtrarPorCategoria(produtos, categoria) {
    return produtos.filter(function (produto) { return produto.categoria === categoria; });
}
var produtos = [
    { nome: "Smartphone", preco: 2000, categoria: "Eletrônicos" },
    { nome: "Notebook", preco: 4500, categoria: "Eletrônicos" },
    { nome: "Geladeira", preco: 3000, categoria: "Eletrodomésticos" },
    { nome: "Fogão", preco: 1200, categoria: "Eletrodomésticos" },
    { nome: "TV", preco: 1800, categoria: "Eletrônicos" },
];
var eletronicos = filtrarPorCategoria(produtos, "Eletrônicos");
console.log(eletronicos);
