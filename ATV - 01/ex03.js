console.clear();
console.log();
const prompt = require('prompt-sync')();

// 3) Leia 3 valores de entrada, referentes à idade de uma 
// pessoa em: anos, meses e dias. Exemplo: eu tenho 30 anos,
// 2 meses 3 7 dias. Calcule e exiba o total de dias que 
// essa pessoa já viveu. Obs.: apenas para facilitar o cálculo, 
// considere todo ano com 365 dias e todo mês com 30 dias.

let idade = +prompt(`Qual sua idade? `);
let meses = (idade * 12);
let dias = (idade * 365);

console.log(`Você tem ${idade} anos de vida`);
console.log();
console.log(`Você tem ${meses} meses de vida`);
console.log();
console.log(`Você tem ${dias} dias de vida`);
console.log();
