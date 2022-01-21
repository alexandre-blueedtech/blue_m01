console.clear();
const prompt = require('prompt-sync')();

 // 3) Faça um programa que peça um número par, e repita a execução 
 // caso o número digitado seja ímpar.

 console.log('Digite um número par:');
 var num = +prompt('');
 console.log()

 while((num % 2) != 0){
     
    console.clear();
    console.log(`O número ${num} não é par! Digite outro:`);
    var num = +prompt('');
    console.clear();
 } 

 console.log(`Boa! ${num} é um número par.`);
