interface Produto {
  nome: string;
  preco: number;
}

function filtrarProdutosPorPreco(produtos: Produto[], valorMinimo: number): Produto[] {
  return produtos.filter(produto => produto.preco > valorMinimo);
}

const produtos: Produto[] = [
  { nome: "Produto A", preco: 50 },
  { nome: "Produto B", preco: 30 },
  { nome: "Produto C", preco: 70 },
  { nome: "Produto D", preco: 20 }
];

const valorMinimo = 40;
const produtosFiltrados = filtrarProdutosPorPreco(produtos, valorMinimo);

console.log(produtosFiltrados);
