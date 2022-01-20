console.clear();
console.log();
const prompt = require('prompt-sync')();

// 4) Faça um programa que leia 2 valores inteiros (A e B).
//  Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou 
//  "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

 let num1 = +prompt('Digite um número: ');
 let num2 = +prompt('Digite outro número: ')
 let div1 = num1 % num2;
 let div2 = num2 % num1;

 if(div1 != 0 && div2 != 0){
     console.log(`Os números ${num1} e ${num2} não são múltiplos!`)
 } else {
     console.log(`Os números ${num1} e ${num2} são múltiplos!`)
 }
