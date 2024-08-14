async function buscarDados(id: number): Promise<string> {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (id > 0) {
              resolve(`Dados para o ID ${id}`);
          } else {
              reject(new Error("ID inválido"));
          }
      }, 2000);
  });
}

async function testarBusca() {
  try {
      const dados = await buscarDados(1);
      console.log(dados);
  } catch (erro) {
      console.error("Erro:", erro.message);
  }

  try {
      const dados = await buscarDados(-1);
      console.log(dados);
  } catch (erro) {
      console.error("Erro:", erro.message);
  }
}

testarBusca();
