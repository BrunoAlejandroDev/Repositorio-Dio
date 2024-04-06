/*
    Faça um programa que calcule e imprima o salário a ser transferido para um funcionario. Para realizar o calculo, receba o valor bruto e o adicional dos benefícios.

    O salário a ser transferido é calculado da seguinte forma: (valor bruto do salário - percentual de imposto mediante a faixa salarial) + adicional de beneficios

    Para calcular o percentual de impostos segue as aliquotas:
        - de R$ 0.00 a R$ 1100.00 = 5%
        - de R$ 1100.01 a R$ 2500.00 = 10%
        - maior que R$ 2500 = 15%
*/

const {gets, print} = require('./funcoes-auxiliares-3');

const valorSalario =  gets();
const valorBeneficios = gets();

// função para calcular o percentual de imposto e retornar o valor a ser subtraido do salario
function calcularPercentual (valor, percentual) {
    return valor * (percentual / 100);
}

// função para retornar o percentual de imposto com base no salario
function pegarAliquota (salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5;
    }
    else if (salario > 1100 && salario <= 2500) {
        return 10;
    }
    else {
        return 15;
    }
}

// função para retornar o valor do salário com base no calculo proposto no título da questão
function valorParaTransferir () {
    const aliquotaImposto = pegarAliquota (valorSalario);
    const valorImposto = calcularPercentual (valorSalario, aliquotaImposto);

    return (valorSalario - valorImposto) + valorBeneficios
}

print(valorParaTransferir())