console.clear();
console.log();
const prompt = require('prompt-sync')();

// 5) Faça um programa de cadastro de clientes que mostre um menu de 
// opções e permita com que a pessoa escolha umas das opções, exibindo 
// qual foi a opção escolhida.

console.log();
let cliente = prompt(`Qual seu nome? `);
console.log();

console.log();
var escolha = prompt(`Qual desses produtos você quer? `);
console.log();

console.log(`Ótimo ${cliente}! ${escolha} é uma ótima escolha!`);
