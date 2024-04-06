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

function calcularPercentual (valor, percentual) {
    return valor * (percentual / 100);
}

function pegarAliquotaComBaseNoSalario (salario) {
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

function valorParaTransferir () {
    const aliquotaImposto = pegarAliquotaComBaseNoSalario (valorSalario);
    const valorImposto = calcularPercentual (valorSalario, aliquotaImposto);

    return (valorSalario - valorImposto) + valorBeneficios
}

print(valorParaTransferir())