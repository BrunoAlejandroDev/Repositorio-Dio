/*
Faça um programa para calcular o valor de uma viagem

você terá 3 variáveis, sendo elas:
    - 1: preço do combustível
    - 2: gasto médio de ocmbustível do carro por KM
    - 3: distância da viagem

Imprima no console o valor que será gasto para realizar a viagem.
*/ 

const precoCombustivel = 6;
const quilometragem = 12;
const distanciaViagemEmKm = 100;

// cálculo da quantidade de litros necessário para a viagem
let quantidadeLitrosConsumidos = (distanciaViagemEmKm / quilometragem);
console.log(`Quantidade de litros necessários: ${quantidadeLitrosConsumidos.toFixed(2)} Litros`);

let gastoTotal = quantidadeLitrosConsumidos * precoCombustivel;
console.log(`Gasto total com a viagem: ${gastoTotal}R$`)