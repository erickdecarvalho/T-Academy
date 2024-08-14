function adicionarItensALista(itens: string[], idUl: string): void {
  const ulElement = document.getElementById(idUl) as HTMLUListElement;

  if (ulElement) {
      ulElement.innerHTML = '';

      itens.forEach(item => {
          const liElement = document.createElement('li');
          liElement.textContent = item;
          ulElement.appendChild(liElement);
      });
  } else {
      console.error(`Elemento <ul> com ID "${idUl}" não encontrado.`);
  }
}

const itens = ['Item 1', 'Item 2', 'Item 3'];
adicionarItensALista(itens, 'minhaLista');
