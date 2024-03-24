/* 
    Exercício 1: faça um prograa que receba a média de um aluno. Caso a média seja menor do que 5, imprima "Reprovado". Caso a média seja maior que 5 e menor que 7, imprima "Recuperação". Caso a média seja maior do que 7, imprima "Aprovado".
*/

const {gets, print} = require('./desafio-1-export');
const media = gets();

if(media >= 0 && media < 5) {
    print('Reprovado');
}
else if(media < 7) {
    print('Recuperação');
}
else {
    print('Aprovado');
}