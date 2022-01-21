console.clear();
const prompt = require('prompt-sync')();

 // ---------------------------------------- //

//  4) Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um 
//  número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número 
//  escolhido pelo computador. O programa deve ser repetir até o usuário acertar o número, 
//  e a cada palpite deve dizer se o número é maior ou menor que o palpite. No final dele 
//  deve escrever na tela que o usuário encontrou o número, e mostrar a quantidade de palpites 
//  que foi necessária.

console.log();
let contador = 1
let random = Math.random(1, 10);
random = random * 10;
let num = Math.round(random);

console.log(`Tente advinhar um número de 1 a 10: `);
var num2 = +prompt("");

while(num != num2){

    contador++
    
    console.clear();

    if(num > num2){
        console.log(`O número é maior que ${num2}! Tente outro número:`);
    } else {
        console.log(`O número é menor que ${num2}! Tente outro número:`); 
    }

    var num2 = +prompt('')

    console.clear();

}
console.log('---------------------------------')
console.log(`Número de tentativas: ${contador}`)
console.log('---------------------------------')
console.log();
