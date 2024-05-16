//* herança no javascript
const pessoa = {
    genero: 'Masculino'
}

const funcionario = {
    nome: 'bruno',
    idade: 23,
    falar: function() {
        console.log('falando 1');
    },
    __proto__: pessoa
}

console.log(funcionario.falar());

//* criando uma classe
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}
const bruno = new Pessoa('bruno', 23)
//console.log(bruno);