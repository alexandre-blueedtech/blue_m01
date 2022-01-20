console.clear();
console.log();
const prompt = require('prompt-sync')();


// 6) Calculadora de Dano - Escreva um programa que receba dois valores 
// digitados pelo usuário: quantidade de vida de um monstro (entre 10 e 50) e 
// valor do ataque do jogador por turno (entre 5 e 10). Baseado nos valores 
// digitados, exiba a quantidade de turnos que o jogador irá demorar para 
// conseguir derrotar o monstro (o jogador irá derrotar o monstro em 8 turnos). 


var monstro = +prompt(`Escolha a vida do monstro de 10 a 50: `);
console.log();

while(monstro < 10 || monstro > 50) {
    console.log();
    console.log(`O número ${monstro} não é válido! Por favor escolha um número entre 10 e 50!`)
    console.log();
    var monstro = +prompt(`Escolha a vida do monstro de 10 a 50: `);
}

var heroi = +prompt(`Escolha a força de ataque do seu héroi de 5 a 10: `);

while(heroi < 5 || heroi > 10) {
    console.log();
    console.log(`O número ${heroi} não é válido! Por favor escolha um número entre 5 e 10!`)
    console.log();
    var heroi = +prompt(`Escolha a força de ataque do seu héroi de 5 a 10: `);
}

let turnos = (monstro / heroi);
let rturnos = Math.ceil(turnos);

console.clear();

console.log();
console.log('---------------------------------------------------')
console.log();
// -----------------------------------
console.log(`Vida do Monstro: ${monstro}` );
console.log();
console.log(`Poder de ataque do Héroi: ${heroi} `);
console.log();
console.log();
console.log(`Você derrotará o monstro em ${rturnos} turnos`);
// -----------------------------------
console.log();
console.log('---------------------------------------------------')
console.log();