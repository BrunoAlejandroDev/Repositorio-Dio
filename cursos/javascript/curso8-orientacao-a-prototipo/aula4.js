function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

/* 
Equivalente a função de construtor acima
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
*/

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é ${this.nome}`);   
}

const bruno = {
    genero: 'masculino',
    falar: function(){
        console.log(`Meu nome é ${this.nome}`);   
    }
}

Pessoa.call(bruno, 'bruno', 23)
console.log(bruno);
bruno.falar();