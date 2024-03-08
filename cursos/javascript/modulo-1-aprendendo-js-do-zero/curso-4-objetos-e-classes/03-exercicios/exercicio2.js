/*
    Crie uma classe para representar pessoas. Cada pessoa deverá ter os atributos de noem, peso e altura.
    As pessoas devem ter a capacidade de informar seu valor de IMC (peso / altura^2)
    Instâncie uma pessoa chamada josé, que possui 70kg e 1.75 de altura e informe a classificação do IMC do josé

    Passos
        1. criar a classe pessoa
        2. definir os atributos
        3. criar um método para calcular o IMC
        4. criar um método para classificar o resultado do IMC
*/

class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / (Math.pow(this.altura, 2))
    }

    classificarIMC() {
        const imc = this.calcularIMC();

        if(imc < 18.5) {
            return(`Seu IMC é: ${imc} e você está abaixo do peso`);
        }
        else if (imc >= 18.5 && imc < 25) {
            return(`Seu IMC é: ${imc} e você está com peso normal`);
        }
        else if (imc >= 25 && imc < 30) {
            return(`Seu IMC é: ${imc} e você está acima do peso`);
        }
        else if (imc >= 30 && imc < 40) {
            return(`Seu IMC é: ${imc} e você está obeso`);
        }
        else {
            return(`Seu IMC é: ${imc} e você está com obesidade grave`);
        }
    }
}

// instâncias
const jose = new Pessoa('Jose', 80, 1.75)
console.log(jose.calcularIMC())
console.log(jose.classificarIMC());