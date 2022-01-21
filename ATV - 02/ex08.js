console.clear();
const prompt = require('prompt-sync')();

// 8) Qual o valor do troco? - Crie um programa que calcule o troco 
// de uma compra no valor de R$100,89 e que foi paga com R$150,00. 
// O valor do troco deve ser exibido no console.

let valor = 100.89;
let pago = 150;
let troco = (pago - valor);

console.log(`O troco será de ${troco}`);