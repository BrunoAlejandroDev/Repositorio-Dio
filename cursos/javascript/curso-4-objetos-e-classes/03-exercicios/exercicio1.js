/*
    Crie uma classe para representar carros. Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro. 
    Crie um método que, dado a quantidade de quilômetros rodados e o preço do combustível, retorne um valor em reais do gasto para realizar esse percurso.

    Passos:
        1. Criar a classe
        2. Criar o construtor e passar os atributos
        3. criar uma instância e fazer um teste inicial
        4. criar um método para calcular o gasto com a viagem
*/

class Carro {
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    gastoDoPercurso(distancia, precoGasolina) {
        return distancia * this.gastoMedioPorKm * precoGasolina
    }
}

const carro1 = new Carro('Fiat', 'Preto', 1/12);
console.log(carro1);
console.log(carro1.gastoDoPercurso(150, 6.12)); 