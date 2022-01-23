console.clear();
const prompt = require('prompt-sync')();

 // ---------------------------------------- //

// 2) Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Estado Civil: 's', 'c', 'v', 'd';


console.log('Qual seu nome?');
let nome = prompt('');

while(nome.length < 3){
    console.log('O nome deve ter mais de 3 caractéres! Tente novamente:');
    nome = prompt('');
}

console.log();

console.log('Qual sua idade?');
let idade = prompt('');

while(idade <= 0 || idade >= 150){
    console.log('Sua idade deve ser entre 0 e 150 anos! Tente novamente:')
    idade = prompt('');
} 

console.log();

console.log('Qual seu salário?');
let salario = prompt('')

while(salario < 0){
    console.log('Seu salário deve ser maior que 0! Tente novamente:');
    salario = prompt('');
}

console.log();

console.log('Qual seu estado cívil? (S/C/V/D)');
var estadoCivil = prompt('')

while(estadoCivil.toUpperCase != 'S' || estadoCivil.toUpperCase != 'C' || estadoCivil.toUpperCase != 'V' || estadoCivil.toUpperCase != 'D'){
    console.log('Opção não reconhecida! Tente novamente:');
    var estadoCivil = prompt('');
}


console.log();
console.log('--------------------------');
console.log(`Nome: ${nome}`);
console.log();
console.log(`Idade: ${idade}`);
console.log();
console.log(`Salário: ${salario}`);
console.log();
console.log(`Estado Cívil: ${estadoCivil}`);
console.log();
console.log('--------------------------');

