console.clear();
const prompt = require('prompt-sync')();

//  1) Faça um Programa que leia 20 números inteiros e armazene-os 
//  num array. Armazene os números pares no array PAR e os números 
//  IMPARES no array IMPAR. Imprima os três vetores.

 let todos = [];
 let contador = 1;
 let par = [];
 let impar = [];

while(contador < 21){
    console.log(`Digite ${contador}º número: `);
    let num = +prompt('');

    if((num % 2) != 0){
        impar.push(num)
        todos.push(num)
    } else {
        par.push(num)
        todos.push(num)
    }

    console.clear();
    contador++
}
 console.clear();
 console.log('Todos os números digitados: ')
 console.log(todos);
 console.log();
 console.log('Todos os números pares: ')
 console.log(par);
 console.log();
 console.log('Todos os números impares: ')
 console.log(impar);
 console.log();