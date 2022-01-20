console.clear();
console.log();
const prompt = require('prompt-sync')();

// 3) Faça um programa que leia um número, e informe se ele é par ou impar

let num = +prompt(`Digite um número: `);
let cont = num % 2;

if(cont == 1){
    console.log(`O número ${num} é ímpar!`);
} else {
    console.log(`O número ${num} é par!`);
}
