console.clear();
console.log();
const prompt = require('prompt-sync')();

 // ---------------------------------------- //

 let num1 = +prompt('Digite um número: ');
 let num2 = +prompt('Digite outro número: ')
 let div1 = num1 % num2;
 let div2 = num2 % num1;

 if(div1 != 0 && div2 != 0){
     console.log(`Os números ${num1} e ${num2} não são múltiplos!`)
 } else {
     console.log(`Os números ${num1} e ${num2} são múltiplos!`)
 }
