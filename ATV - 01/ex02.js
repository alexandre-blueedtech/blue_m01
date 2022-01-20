console.clear();
console.log();
const prompt = require('prompt-sync')();

// 2) Neste problema, deve-se ler o nome de uma peça que chamaremos 
// de peça1, o número de peças1 que o usuário quer, o valor unitário 
// de cada peça1, o nome de uma peça2, o número de peças2 e o valor 
// unitário de cada peça2. Após, calcule e mostre o valor a ser pago.

let valor1 = 140
let valor2 = 30

let quant1 = +prompt(`Quantos "Produto 1"? `)
console.log();
let quant2 = +prompt(`Quantos "Produto 2?" `)
console.log();
console.log();

let preco = (quant1 * valor1 + quant2 * valor2)

console.log(`O total da compra de ${quant1} "Produto 1" e ${quant2} "Produto 2" é de R$${preco}`);
console.log();
console.log();
