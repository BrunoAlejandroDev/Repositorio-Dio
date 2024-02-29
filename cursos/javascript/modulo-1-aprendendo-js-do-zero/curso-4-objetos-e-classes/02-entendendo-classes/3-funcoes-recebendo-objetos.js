class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    }
}

function compararIdades (pessoa1, pessoa2) {
    if(pessoa1.idade > pessoa2.idade) {
        console.log(`O ${pessoa1.nome} é mais velho que o ${pessoa2.nome}`);
    }
    else if(pessoa1.idade < pessoa2.idade) {
        console.log(`O ${pessoa2.nome} é mais velho que o ${pessoa1.nome}`);
    }
    else {
        console.log(`A idade de ambos é a mesma`);
    }
}

// instâncias da classe Pessoa
const bruno = new Pessoa('Bruno', 52)
const fernando = new Pessoa('Fernando', 32)

// passando as instâncias como argumentos da função
compararIdades(bruno, fernando)