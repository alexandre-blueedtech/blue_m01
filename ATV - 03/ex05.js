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
 var A
 var B
 var C

 if(num1 > num2 && num1 > num3){
     var A = num1
     var B = num2
     var C = num3
 } else if(num2 > num1 && num2 > num3) {
     var A = num2
     var B = num1
     var C = num3
 } else {
     var A = num3
     var B = num1
     var C = num2
 }

 if(A >= (B + C)){
    console.log("Não forma um triângulo!");
 } else if(A == (B + C)) {
    console.log("Forma um triângulo retângulo!");
 } else if(A > (B + C)) {
    console.log("Forma um triângulo obtusângulo!");
 } else if(A < (B + C)) {
    console.log("Forma um triângulo acutângulo!");
 } else if(A == B && A == C) {
    console.log("Forma um triângulo equilátero!");
 } else if(A == B || A == C || C == B ){
    console.log("Forma um triângulo isosceles!")
 }