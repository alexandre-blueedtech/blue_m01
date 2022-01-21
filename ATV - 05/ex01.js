console.clear();
const prompt = require('prompt-sync')();

// 1) Faça um programa que leia um nome de usuário e a sua senha e 
// não aceite a senha igual ao nome do usuário, mostrando uma 
// mensagem de erro e voltando a pedir as informações.

console.log('Qual seu nome?');
let nome = prompt('');
console.log();
console.log('Crie uma senha!');
let senha = prompt('')

console.clear();

while(senha == nome){
    console.log('Sua senha não pode ser igual ao nome! Digite outra:');
    senha = prompt('');
    console.clear();
}
console.log('----------------------------');
console.log('Cadastro criado com sucesso!')
console.log('----------------------------');
console.log();