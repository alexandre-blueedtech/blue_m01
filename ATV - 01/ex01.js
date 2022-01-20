console.clear();
console.log();
const prompt = require('prompt-sync')();

// 1) Leia 2 valores A e B, que correspondem a 2 notas de um aluno. 
// A seguir calcule e informe a média ponderada do aluno, sabendo 
// que a nota A tem peso 4 e a nota B tem peso 6. Ex: nota a * 4 e 
// nota b * 6.

console.log("---------------------------------------");
console.log();
console.log("Calculadora de Média");
console.log();
console.log("---------------------------------------");
console.log();

let nota1 = +prompt(`Qual foi sua nota na prova A? `);
console.log();
let nota2 = +prompt(`Qual foi sua nota na prova B? `);
console.log();
let peso1 = +prompt(`Qual é o peso da prova A? `);
console.log();
let peso2 = +prompt(`Qual é o peso da prova B? `);
let media = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2); 

console.log();
console.log();
console.log(`Sua média é ${media}!`);
console.log();
console.log();