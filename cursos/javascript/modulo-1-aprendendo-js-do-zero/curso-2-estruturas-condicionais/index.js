const precoGasolina = 5.75;
const precoEtanol = 4.72;
const distancia = 200;
const quilometragem = 10;
const tipoCarro = 'etanol';

// passo 1: calcular a quantidade de combustível necessário para a viagem
let totalCombustivelLitros = (distancia / quilometragem)
console.log(`A quantidade de combuistível necessária será de: ${totalCombustivelLitros} Litros`) 

// passo 2: calcular o gasto total com base no combustível aceito pelo veículo
if(tipoCarro === 'gasolina') {
    let precoViagemGasolina = (precoGasolina * totalCombustivelLitros)
    console.log(`O gasto total foi de ${precoViagemGasolina.toFixed(2)}R$`);
}
else {
    let precoViagemEtanol = (precoEtanol * totalCombustivelLitros);
    console.log(`O gasto total foi de ${precoViagemEtanol.toFixed(2)}R$`);
}