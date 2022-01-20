console.clear();
console.log();
const prompt = require('prompt-sync')();

// 2) Faça um programa para a leitura de quatro notas parciais de um aluno.
// O programa deve calcular a média alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Em recuperação", se a média for entre cinco e sete;
// A mensagem "Reprovado", se a média for menor que cinco.

 let nota1 = +prompt(`Qual foi sua primeira nota? `);
 let nota2 = +prompt(`Qual foi sua segunda nota? `);
 let nota3 = +prompt(`Qual foi sua terceira nota? `);
 let nota4 = +prompt(`Qual foi sua quarta nota? `);
 let media = (nota1 + nota2 + nota3 + nota4) / 4;

 if(media >= 7){
     console.log('Aprovado');
 } else if(media >= 5 ){
     console.log('Recuperação');
 } else {
     console.log('Reprovado')
 }