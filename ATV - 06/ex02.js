console.clear();
const prompt = require('prompt-sync')();

// 2) Faça um Programa que peça a idade e a altura de 5 pessoas, 
// armazene cada informação no seu respectivo array. Imprima a 
// média de idade e de altura.

console.log();

let nIdade = [];
let nAltura = [];
let nNome = [];
let idade 
let altura
let nome
let contador = 1

while(contador != 6) {

    nome = prompt(`Digite o ${contador}º nome: `);
    console.log();
    nNome.push(nome);

    console.clear();

    idade = prompt(`Digite a ${contador}ª idade: `);
    console.log();
    nIdade.push(idade)

    console.clear();

    altura = prompt(`Digite a ${contador}ª altura em cm: `);
    console.log();
    nAltura.push(altura);

    console.clear();

    contador++

}

