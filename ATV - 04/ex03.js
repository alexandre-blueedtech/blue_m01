console.clear();
const prompt = require('prompt-sync')();

// 3) Faça um Programa para um caixa eletrônico. O programa deverá perguntar 
// ao usuário a valor do saque e depois informar quantas notas de cada valor 
// serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. 
// O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se 
// preocupar com a quantidade de notas existentes na máquina.

var saque
console.log('Quanto você quer sacar?')
do{

    var saque = +prompt(``);
    console.log();

    if(saque < 10 || saque > 600 ){
        console.log('O valor deve ser entre R$10 e R$600. Por favor, tente novamente!');
        console.log();
    }

} while(saque < 10 || saque > 600 );



var cont100 = (saque/100);
var cont50 = (saque%100)/50;
var cont20 = ((saque%100)%50)/20;
var cont10 = (((saque%100)%50)%20)/10;
var cont5 = ((((saque%100)%50)%20)%10)/5;
var cont1 = (((((saque%100)%50)%20)%10)%5)/1;


console.log("Notas de R$100: " + Math.floor(cont100))
console.log("Notas de R$50: " + Math.floor(cont50))
console.log("Notas de R$20: " + Math.floor(cont20))
console.log("Notas de R$10: " + Math.floor(cont10))
console.log("Notas de R$5: " + Math.floor(cont5))
console.log("Notas de R$1: " + Math.floor(cont1))
console.log();
console.log(`Saque de R$${saque}`);
console.log();