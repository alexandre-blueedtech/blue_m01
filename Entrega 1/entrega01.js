console.clear();
const prompt = require('prompt-sync')();

//------------------------//

var nome = prompt("Digite seu nome! ");


do {
 
    console.clear();
    
console.log();
console.log('----------------');
console.log('Simulador de Sobrevivência');
console.log('----------------');
console.log();

console.log(`Bem-Vindo(a) ao simulador de sobrevivência ${nome}!`);
console.log();
console.log(`O ano é 2202 e uma super bactéria transformou todos em zumbis, para isso teremos
que conhecer um pouco do que você sabe fazer! Será que você sobreviveria?`)
console.log();
console.log('Nesse jogo testaremos todas os suas habilidades! Digite "sim" para começar: ')

 do{

    console.log();
    var inicio = prompt('');
    console.log();

    if (inicio.toUpperCase != "SIM"){

        console.clear();
        console.log();
        console.log("-------------------------------------------------------")
        console.log(`Está com medo ${nome}? Digite sim para começar! Seu covarde!`)
        console.log("-------------------------------------------------------")
        console.log();
    
}

 } while(inicio.toUpperCase() != "SIM");
        console.clear();
        console.log('------------------------------------------------------------');
        console.log('As regras são básicas! Responda sim ou não para as perguntas');
        console.log('------------------------------------------------------------');

    let contador = 0;

        console.log();
        console.log('Primeira pergunta!');
        console.log()

        let perg1 = prompt(`Você sabe nadar? `);
        if(perg1.toUpperCase() == "SIM"){
            contador++
        }
        console.log();
        let perg2 = prompt(`Você consegue correr longas distâncias? `);
        if(perg2.toUpperCase() == "SIM"){
            contador++
        }
        console.log();
        let perg3 = prompt(`Você sabe como fazer fogo sem fósforo? `);
        if(perg3.toUpperCase() == "SIM"){
            contador++
        }
        console.log();
        let perg4 = prompt(`Você sabe pescar? `);
        if(perg4.toUpperCase() == "SIM"){
            contador++
        }
        console.log();
        let perg5 = prompt(`Você sabe como construir um abrigo? `);
        if(perg5.toUpperCase() == "SIM"){
            contador++
        }
        console.log();

        console.clear();

        console.log("-------------------------------------------------------------------");
    if(contador == 0){
        console.log(`Você não sobreviveria num apocalispse! Seu resultado: ${contador}`);
    } else if(contador == 1 || contador == 2 ) {
        console.log(`Você precisa de mais para sobreviver num apocalispse! Seu resultado: ${contador}`);
    } else if(contador == 3) {
        console.log(`Você conseguiria sobreviver num apocalipse! Mas por pouco... Seu resultado: ${contador}`);
    } else if(contador == 4) {
        console.log(`Você sobreviveria muito bem num apocalipse! Seu resultado: ${contador}`);
    } else {
        console.log(`Você arrasaria num apocalipse! Seu resultado: ${contador}`);
    }
        console.log("-------------------------------------------------------------------");

    console.log();
    console.log();
    var reiniciar = prompt(`Quer reiniciar o jogo? `)
    console.log();
    
    

} while(reiniciar.toUpperCase() == "SIM")

console.clear();
console.log("------------------------------------");
console.log(`Muito obrigado por jogar, ${nome}!`)
console.log("------------------------------------");
console.log('')
console.log('')
console.log('')