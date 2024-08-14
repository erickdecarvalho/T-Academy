function adicionarItensALista(itens, idUl) {
    var ulElement = document.getElementById(idUl);
    if (ulElement) {
        ulElement.innerHTML = '';
        itens.forEach(function (item) {
            var liElement = document.createElement('li');
            liElement.textContent = item;
            ulElement.appendChild(liElement);
        });
    }
    else {
        console.error("Elemento <ul> com ID \"".concat(idUl, "\" n\u00E3o encontrado."));
    }
}
var itens = ['Item 1', 'Item 2', 'Item 3'];
adicionarItensALista(itens, 'minhaLista');
