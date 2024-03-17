/*
    Utilizando o conceito de importação e exportação, resolva o seguinte problema: uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 a 100. Faça um programa que receba os números sorteados e mostre o maior entre eles.

    números: 5, 50, 10, 98, 23
*/
const { gets, print } = require("./funcoes-auxiliares");

const numerosSorteados = [];

// loop para percorrer o array numeros de acordo com a quantidade de valores no array
for (let i = 0; i < 5; i++) {
  const numeroSorteado = gets(); // salvei cada número na variável
  numerosSorteados.push(numeroSorteado);
}
print(numerosSorteados);

// loop para percorrer o array numerosSorteados e verificar qual o maior número
let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
  const numeroSorteado = numerosSorteados[i];
  if (numeroSorteado > maiorValor) {
    maiorValor = numeroSorteado;
  }
}
print(maiorValor);
