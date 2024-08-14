function encontrarMaiorEMenor(nums) {
    if (nums.length === 0) {
        return undefined;
    }
    var maior = nums[0];
    var menor = nums[0];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (num > maior) {
            maior = num;
        }
        if (num < menor) {
            menor = num;
        }
    }
    return [menor, maior];
}
var numeros = [3, 5, 1, 8, -2, 7];
var resultado = encontrarMaiorEMenor(numeros);
if (resultado) {
    var menor = resultado[0], maior = resultado[1];
    console.log("Menor n\u00FAmero: ".concat(menor));
    console.log("Maior n\u00FAmero: ".concat(maior));
}
else {
    console.log("O array está vazio.");
}
