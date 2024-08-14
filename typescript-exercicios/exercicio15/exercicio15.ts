function encontrarMaiorEMenor(nums: number[]): [number, number] | undefined {
  if (nums.length === 0) {
      return undefined;
  }

  let maior = nums[0];
  let menor = nums[0];

  for (const num of nums) {
      if (num > maior) {
          maior = num;
      }
      if (num < menor) {
          menor = num;
      }
  }

  return [menor, maior];
}

const numeros = [3, 5, 1, 8, -2, 7];
const resultado = encontrarMaiorEMenor(numeros);

if (resultado) {
  const [menor, maior] = resultado;
  console.log(`Menor número: ${menor}`);
  console.log(`Maior número: ${maior}`);
} else {
  console.log("O array está vazio.");
}
