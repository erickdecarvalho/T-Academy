interface Produto {
  nome: string;
  preco: number;
  quantidade: number;
  categoria: string;
}

function procurarProdutosPorCategoria(produtos: Produto[], categoria: string): Produto[] {
  return produtos.reduce((resultado, produto) => {
      if (produto.categoria === categoria) {
          resultado.push(produto);
      }
      return resultado;
  }, [] as Produto[]);
}

const produtos: Produto[] = [
  { nome: 'Produto A', preco: 10.00, quantidade: 2, categoria: 'Eletrônicos' },
  { nome: 'Produto B', preco: 5.50, quantidade: 3, categoria: 'Roupas' },
  { nome: 'Produto C', preco: 20.00, quantidade: 1, categoria: 'Eletrônicos' },
  { nome: 'Produto D', preco: 15.00, quantidade: 5, categoria: 'Brinquedos' },
  { nome: 'Produto E', preco: 8.00, quantidade: 4, categoria: 'Roupas' }
];

const categoriaProcurada = 'Roupas';
const produtosFiltrados = procurarProdutosPorCategoria(produtos, categoriaProcurada);
console.log('Produtos na categoria', categoriaProcurada, ':', produtosFiltrados);
