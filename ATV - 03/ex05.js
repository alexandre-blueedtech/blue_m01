console.clear();
console.log();
const prompt = require('prompt-sync')();

// Faça um programa que leia 3 valores que representam os lados de 
// um triângulo A, B e C e ordene-os em ordem decrescente, de modo 
// que o lado A representa o maior dos 3 lados. A seguir, determine 
// o tipo de triângulo que estes três lados formam, com base nos seguintes 
// casos:

// Se A ≥ B + C, apresente a mensagem: NAO FORMA TRIANGULO;
// Se A = B + C, apresente a mensagem: TRIANGULO RETANGULO;
// Se A > B + C, apresente a mensagem: TRIANGULO OBTUSANGULO;
// Se A < B + C, apresente a mensagem: TRIANGULO ACUTANGULO;
// Se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO;
// Se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES;

 let num1 = +prompt('Digite um número: ')
 let num2 = +prompt('Digite outro número: ')
 let num3 = +prompt('Digite outro número: ')
 let A
 let B
 let C

 if(num1 > num2 && num1 > num3){
      A = num1
      B = num2
      C = num3
 } else if(num2 > num1 && num2 > num3) {
      A = num2
      B = num1
      C = num3
 } else {
      A = num3
      B = num1
      C = num2
 }

 console.log();
 console.log("----- LADOS -----");
 console.log(`A: ${A} / B: ${B} / C: ${C}`)
 console.log("-----------------");
 console.log();

 if (A >= (B + C))
 {
     console.log("NAO FORMA TRIANGULO");
 }
 else
 {
     if ( (A*A) == (B*B) + (C*C) )
     {
         console.log("TRIANGULO RETANGULO");
     }
     if ( (A*A) > (B*B) + (C*C) )
     {
         console.log("TRIANGULO OBTUSANGULO");
     }
     if ( (A*A) < (B*B) + (C*C) )
     {
         console.log("TRIANGULO ACUTANGULO");
     }
     if (A == B && B == C)
     {
         console.log("TRIANGULO EQUILATERO");
     }
     if ( (A == B && A != C) || (B == C && B != A))
     {
         console.log("TRIANGULO ISOSCELES");
     }
 }
