console.clear();
console.log();
const prompt = require('prompt-sync')();

 // ------------------------------- // 

/* EXERCICIO 1

console.log();
console.log("O primeiro programa a gente nunca esquece!");
console.log();

*/
/* EXERCICIO 2

console.log();
console.log(`Lucas
Av Rio Branco
21313-131
(21 99999-9999)
`);

*/
/* EXERCICO 3

console.log("Letra da Música: Ghost - Justin Bieber");
console.log();
console.log(`Youngblood thinks there's always tomorrow
I miss your touch on nights when I'm hollow
I know you crossed a bridge that I can't follow
Since the love that you left is all that I get
I want you to know that if I can't be close to you
I settle for the ghost of you
I miss you more than life (more than life)
And if you can't be next to me
Your memory is ecstasy
I miss you more than life
I miss you more than life
Youngblood thinks there's always tomorrow (woo)
I need more time but time can't be borrowed
I'd leave it all behind if I could follow
Since the love that you left is all that I get
I want you to know that if I can't be close to you
I'll settle for the ghost of you
I miss you more than life, yeah
And if you can't be next to me
Your memory is ecstasy (oh)
I miss you more than life
I miss you more than life
Whoa
Na, na-na
More than life
Oh
So if I can't get close to you
I'll settle for the ghost of you
But I miss you more than life
And if you can't be next to me
Your memory is ecstasy
I miss you more than life
I miss you more than life
`);

*/

/* EXERCICO 4

let alunos = [["Aline", "9"],["Mário", "Dez"],["Sérgio", "4.5"],["Shirley", "7"]]
console.table(alunos);

*/

/* EXERCICO 5

console.log();
let cliente = prompt(`Qual seu nome? `);
console.log();

console.log();
var escolha = prompt(`Qual desses produtos você quer? `);
console.log();

console.log(`Ótimo ${cliente}! ${escolha} é uma ótima escolha!`);

*/


var monstro = +prompt(`Escolha a vida do monstro de 10 a 50: `);

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