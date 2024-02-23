// Aula 1 - criando um objeto literal usando a estrutura par chave e valor

const pessoa = {
    nome: 'Bruno Alejandro',
    idade: 22
}

// acessando as propriedades do objeto
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa)

// aula 2 - editando informações de um objeto

// adicionando uma nova propriedade ao objeto dinamicamente
const carro = {
    marca: 'fiat',
    ano: 2024
}
// adicionando a propriedade cor 
carro.cor = 'azul escuro'
console.log(carro);

// deletando uma propriedade do objeto usando delete
delete carro.ano
console.log(carro);

// Aula 3 - método é uma função que está presente dentro do escopo de de um objeto

const bruno = {
    nome: 'Bruno',
    time: 'Fortaleza',

    // nome da propriedade seguida de dois pontos
    descrever: function () {
        // ao usar funções como métodos de objetos, podemos usar a palavra this para acessar propriedades que estejam dentro do contexto do objeto. 
        console.log(`Meu nome é ${this.nome} e meu time é ${this.time}`);
    }
}
bruno.descrever();

// da mesma forma que propriedades normais, a função também pode ser reescrita
bruno.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}
bruno.descrever();