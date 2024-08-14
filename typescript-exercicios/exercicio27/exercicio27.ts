interface Produto {
  nome: string;
  preco: number;
  quantidade: number;
  categoria: string;
}

function calcularValorTotal(carrinho: Produto[]): number {
  const produtosValidos = carrinho.filter(produto => produto.quantidade > 0);

  const valorTotal = produtosValidos.reduce((total, produto) => {
      return total + (produto.preco * produto.quantidade);
  }, 0);

  return valorTotal;
}

const carrinho: Produto[] = [
  { nome: 'Produto A', preco: 10.00, quantidade: 2, categoria: 'Eletrônicos' },
  { nome: 'Produto B', preco: 5.50, quantidade: 3, categoria: 'Roupas' },
  { nome: 'Produto C', preco: 20.00, quantidade: 1, categoria: 'Eletrônicos' },
  { nome: 'Produto D', preco: 15.00, quantidade: 0, categoria: 'Brinquedos' }
];

const total = calcularValorTotal(carrinho);
console.log(`Valor total do carrinho: R$ ${total.toFixed(2)}`);
