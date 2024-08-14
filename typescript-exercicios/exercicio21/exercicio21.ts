function adicionarDivComTexto(texto: string): void {
  const novaDiv = document.createElement('div');
  novaDiv.textContent = texto;
  document.body.appendChild(novaDiv);
}

adicionarDivComTexto('Este é um texto dinâmico!');
