console.clear();
const prompt = require('prompt-sync')();

// 9) Conversor de moedas - Crie um programa que solicite um um 
// valor em real ao usuário e converta esse valor, para dólar.

var conversao

let real = +prompt(`Quantos reais você quer trocar? `)
let dolar = +prompt(`Qual valor do dolar? `)

var conversao = real / dolar;

console.log(conversao);

