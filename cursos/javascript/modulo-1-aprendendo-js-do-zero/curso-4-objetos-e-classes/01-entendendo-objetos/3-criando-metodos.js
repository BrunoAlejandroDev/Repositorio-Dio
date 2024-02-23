// método é uma função que está presente dentro do escopo de de um objeto

const pessoa = {
    nome: 'Bruno',
    time: 'Fortaleza',

    // nome da propriedade seguida de dois pontos
    descrever: function () {
        // ao usar funções como métodos de objetos, podemos usar a palavra this para acessar propriedades que estejam dentro do contexto do objeto. 
        console.log(`Meu nome é ${this.nome} e meu time é ${this.time}`);
    }
}
pessoa.descrever();

// da mesma forma que propriedades normais, a função também pode ser reescrita
pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}
pessoa.descrever();