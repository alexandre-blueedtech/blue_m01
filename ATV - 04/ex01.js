console.clear();
const prompt = require('prompt-sync')();

// 1) Reajuste salarial - As empresas @.com resolveram dar um aumento de 
// salário aos seus colaboradores e lhe contrataram para desenvolver o programa 
// que calculará os reajustes. Faça um programa que recebe o salário de um 
// colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
 
// Salários até R$ 280,00 (incluindo): aumento de 20%. 
// Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
// Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
// Salários de R$ 1500,00 em diante: aumento de 5%.

// Após o aumento ser realizado, informe na tela:
// O salário antes do reajuste.
// O percentual de aumento aplicado.
// O valor do aumento.
// O novo salário, após o aumento.

console.log();

var salario = +prompt(`Qual seu salário? `);

console.log();

let porcentagem
var aumento
var total

if(salario <= 280){
    porcentagem = 0.2;
} else if(salario <= 700) {
    porcentagem = 0.15;
} else if(salario <= 1500){
    porcentagem = 0.1;
} else {
    porcentagem = 0.05;
}

    var aumento = (salario * porcentagem);
    var total = (salario + aumento);

    porcentagem = porcentagem * 100

console.log('--------------------------------');
console.log(`Salário atual: ${salario}`);
console.log();
console.log(`% de aumento: ${porcentagem}%`);
console.log();
console.log(`Valor do aumento: ${aumento}`);
console.log();
console.log(`Novo salário: ${total}`);
console.log('--------------------------------');