function criarUsuarioComPermissoes(usuario) {
    console.log("Usu\u00E1rio: ".concat(usuario.nome));
    console.log("Email: ".concat(usuario.email));
    console.log("Tema: ".concat(usuario.tema));
    console.log("Notifica\u00E7\u00F5es: ".concat(usuario.notificacoesAtivadas ? 'Ativadas' : 'Desativadas'));
    console.log("Permiss\u00F5es:");
    console.log("  Ler: ".concat(usuario.podeLer ? 'Sim' : 'Não'));
    console.log("  Escrever: ".concat(usuario.podeEscrever ? 'Sim' : 'Não'));
    console.log("  Excluir: ".concat(usuario.podeExcluir ? 'Sim' : 'Não'));
}
var usuario1 = {
    id: 1,
    nome: 'Ana Silva',
    email: 'ana.silva@example.com',
    podeLer: true,
    podeEscrever: true,
    podeExcluir: false,
    tema: 'claro',
    notificacoesAtivadas: true
};
var usuario2 = {
    id: 2,
    nome: 'Carlos Souza',
    email: 'carlos.souza@example.com',
    podeLer: true,
    podeEscrever: false,
    podeExcluir: false,
    tema: 'escuro',
    notificacoesAtivadas: false
};
criarUsuarioComPermissoes(usuario1);
criarUsuarioComPermissoes(usuario2);
