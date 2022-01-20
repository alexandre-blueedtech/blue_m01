console.clear();
console.log();
const prompt = require('prompt-sync')();

// 4) Faça o cálculo contrário: Leia um valor inteiro correspondente 
// à idade de uma pessoa em dias e informe-a em anos, meses e dias. 
// Também considere todo ano com 365 dias e todo mês com 30 dias.

let dias = +prompt(`Qual sua idade em dias? `);
let meses = (~~(dias / 30));
let anos = (~~(dias / 365))
console.log();

console.log(`Você tem ${dias} dias de vida`);
console.log();
console.log(`Você tem ${meses} meses de vida`);
console.log();
console.log(`Você tem ${anos} anos de vida`);
console.log();


