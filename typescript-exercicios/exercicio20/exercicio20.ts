async function obterDadosUsuario(userId: number): Promise<{ id: number; nome: string }> {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve({ id: userId, nome: `Usuário ${userId}` });
      }, 1500);
  });
}

async function obterDadosPedidos(userId: number): Promise<{ userId: number; pedidos: number[] }> {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve({ userId, pedidos: [101, 102, 103] });
      }, 1000);
  });
}

async function combinarResultados(userId: number) {
  try {
      const [dadosUsuario, dadosPedidos] = await Promise.all([
          obterDadosUsuario(userId),
          obterDadosPedidos(userId)
      ]);

      const resultadoCombinado = {
          usuario: dadosUsuario,
          pedidos: dadosPedidos.pedidos
      };

      console.log(resultadoCombinado);
  } catch (erro) {
      console.error("Erro ao obter dados:", erro.message);
  }
}

combinarResultados(1);
