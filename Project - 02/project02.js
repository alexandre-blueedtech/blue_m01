console.clear();
const prompt = require('prompt-sync')();

 // ---------------------------------------- //

do {

let escolhaBot
let escolhaUser
let contador = 1
let pontBot = 0
let pontUser = 0


console.log("Bem-vindo(a) ao Jokenpô!")
let nome = prompt('Para iniciarmos digite seu nome: ');
console.clear();

console.log(`Vamos jogar Jokenpô ${nome}! É simples, apenas digite
pedra, papel e tesoura!`)

console.log();

console.log(`Quantas rodadas você deseja jogar? `);


for (var rodadas = +prompt(''); rodadas >= contador; contador++ ) {

    console.log(`${contador}ª rodada! `);

    do{
    
    escolhaBot = Math.floor(Math.random() * 3);
    escolhaUser = prompt('') 

if(escolhaUser == 'pedra'){
    escolhaUser = 0

} else if(escolhaUser == 'papel'){
    escolhaUser = 1

} else if(escolhaUser == 'tesoura'){
    escolhaUser = 2

} else {
    escolhaUser = 3
    console.clear()
    console.log('Comando não reconhecido, tente novamente: ')
    }

    }while(escolhaUser == 3);

    console.clear();

if(escolhaUser == 0){

    if(escolhaBot == 0){
        console.log(`${contador}ª rodada: Empate!`);
        console.log('');

    } else if(escolhaBot == 1){
        console.log(`${contador}ª rodada: Derrota!`);
        pontBot++
        console.log('');
        
    } else {
        console.log(`${contador}ª rodada: Vitória!`);
        pontUser++
        console.log('');
    }

} else if(escolhaUser == 1){

    if(escolhaBot == 1){
        console.log(`${contador}ª rodada: Empate!`)
        console.log('');

    } else if(escolhaBot == 2){
        console.log(`${contador}ª rodada: Derrota!`);
        pontBot++
        console.log('');
        
    } else {
        console.log(`${contador}ª rodada: Vitória!`);
        pontUser++
        console.log('');
    }
} else {

    if(escolhaBot == 2){
        console.log(`${contador}ª rodada: Empate!`);
        console.log('');

    } else if(escolhaBot == 0){
        console.log(`${contador}ª rodada: Derrota!`);
        pontBot++
        console.log('');
        
    } else {
        console.log(`${contador}ª rodada: Vitória!`);
        pontUser++
        console.log('');
    }
}

}

console.clear()

console.log('------------------------------------------------------');
if(pontBot > pontUser){
    console.log('O grande vencedor é o COMPUTADOR!')
} else if(pontBot < pontUser){
    console.log(`O grande vencedor é você ${nome}!`)
} else {
    console.log('Houve um empate!')
}
console.log('------------------------------------------------------');

console.log('------------------------------------------------------');
console.log('');
console.log(`Pontuação ${nome}: ${pontUser}`);
console.log('');
console.log(`Pontuação computador: ${pontBot}`);
console.log('');
console.log('------------------------------------------------------');


var reiniciar = prompt('Deseja reiniciar o jogo? ')

console.clear()

} while(reiniciar == 'sim')

console.log('------------------------------------------------------');
console.log();
console.log(`Obrigado por jogar!`)
console.log();
console.log('------------------------------------------------------');