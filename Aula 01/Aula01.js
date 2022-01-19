console.clear(); // Limpar terminal
console.log();
var prompt = require('prompt-sync')();

/*
console.log();
let nome = 'Lucas';
let idade = 21;

console.log(nome);
console.log(); 
console.log(idade);
console.log();
console.log(typeof(idade));
console.log(typeof(nome));

console.log();

console.log(`Olá ${nome}, tudo bom? Você tem ${idade} anos!`);

const string = 'Blue EdTech';
const numberInt = 10;
const numberFloat = 10.5;
const boolean = true;

*/

// Typeof é para saber o tipo de variável (String, number etc)
// O uso do console.log vazio é para dar espaços entre as frases!
// Usar ' para String

let nome = prompt(`Qual é o seu nome? `);
console.log('Olá',nome);
let numero = prompt('Digite um número que eu vou somar 10: ');
console.log(Number(numero) + 10);


