console.clear();
console.log();
const prompt = require('prompt-sync')();

 // 1) Faça um Programa que peça dois números e imprima o maior 
 // deles, e informe caso eles sejam iguais.

 let num1 = +prompt(`Digite um número: `);
 let num2 = +prompt(`Digite outro número: `);

if(num1 > num2){
    console.log(`O número ${num1} é maior!`);
} else {
    console.log(`O número ${num2} é maior!`);
}