interface Usuario {
  id: number;
  nome: string;
  email: string;
}

interface Permissoes {
  podeLer: boolean;
  podeEscrever: boolean;
  podeExcluir: boolean;
}

interface Configuracoes {
  tema: 'claro' | 'escuro';
  notificacoesAtivadas: boolean;
}

type UsuarioComPermissoes = Usuario & Permissoes & Configuracoes;

function criarUsuarioComPermissoes(usuario: UsuarioComPermissoes): void {
  console.log(`Usuário: ${usuario.nome}`);
  console.log(`Email: ${usuario.email}`);
  console.log(`Tema: ${usuario.tema}`);
  console.log(`Notificações: ${usuario.notificacoesAtivadas ? 'Ativadas' : 'Desativadas'}`);
  console.log(`Permissões:`);
  console.log(`  Ler: ${usuario.podeLer ? 'Sim' : 'Não'}`);
  console.log(`  Escrever: ${usuario.podeEscrever ? 'Sim' : 'Não'}`);
  console.log(`  Excluir: ${usuario.podeExcluir ? 'Sim' : 'Não'}`);
}

const usuario1: UsuarioComPermissoes = {
  id: 1,
  nome: 'Ana Silva',
  email: 'ana.silva@example.com',
  podeLer: true,
  podeEscrever: true,
  podeExcluir: false,
  tema: 'claro',
  notificacoesAtivadas: true
};

const usuario2: UsuarioComPermissoes = {
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
