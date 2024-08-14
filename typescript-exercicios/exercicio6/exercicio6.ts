interface Produto {
  nome: string;
  preco: number;
  categoria: string;
}

function filtrarPorCategoria(produtos: Produto[], categoria: string): Produto[] {
  return produtos.filter(produto => produto.categoria === categoria);
}

const produtos: Produto[] = [
  { nome: "Smartphone", preco: 2000, categoria: "Eletrônicos" },
  { nome: "Notebook", preco: 4500, categoria: "Eletrônicos" },
  { nome: "Geladeira", preco: 3000, categoria: "Eletrodomésticos" },
  { nome: "Fogão", preco: 1200, categoria: "Eletrodomésticos" },
  { nome: "TV", preco: 1800, categoria: "Eletrônicos" },
];

const eletronicos = filtrarPorCategoria(produtos, "Eletrônicos");
console.log(eletronicos);
