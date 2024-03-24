/*
    Desafio 2: faça um programa que receba uma quantidade N de números e seus respectivos valores. Imprima o maior número par e o menor número impar.
*/

const {gets, print} = require('./funcoes-auxiliares-2');
const n = gets();
let maiorNumPar = 0;
let menorNumImpar = 0;

for(let i = 0; i < n; i++) {
    const numero = gets();
    if(numero % 2 === 0) {
        if(numero > maiorNumPar) {
            maiorNumPar = numero;
        }
    }
    else {
        if(menorNumImpar === 0) {
            menorNumImpar = numero;
        }
        else if (numero < menorNumImpar) {
            menorNumImpar = numero;
        }
    }
}
print(`Maior número par: ${maiorNumPar}`);
print(`Menor número impar: ${menorNumImpar}`);