console.clear();
const prompt = require('prompt-sync')();

//  2) Jogo da adivinhação - Escreva um programa que faça o computador “pensar” 
//  em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual 
//  foi o número escolhido pelo computador. O programa deverá escrever na tela se 
//  o usuário venceu ou perdeu.

console.log();
let random = Math.random(1, 10);
random = random * 10;
let num = Math.ceil(random);

let num2 = +prompt("Tente advinhar um número de 1 a 10: ");

console.log('--------------------------------------------------');

if(num == num2){
    console.log(`Parábens, você acertou! O número era ${num}`);
} else {
    console.log(`Infelizmente você errou, o número era ${num}`);
}
console.log('--------------------------------------------------');
console.log();

