function adicionarDivComTexto(texto) {
    var novaDiv = document.createElement('div');
    novaDiv.textContent = texto;
    document.body.appendChild(novaDiv);
}
adicionarDivComTexto('Este é um texto dinâmico!');
