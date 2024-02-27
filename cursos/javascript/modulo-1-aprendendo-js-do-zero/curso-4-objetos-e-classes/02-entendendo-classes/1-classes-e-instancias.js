// Aula 1 - Como criar classes e instâncias

// Uma classe é como se fosse um esqueleto ou uma estrutura geral de algo. Por exemplo, um carro possui características comuns a todos os carros independente da marca, essas características são propriedades desses carros. 

// Uma instância é uma ocorrência de uma classe. Ou seja, é um elemento "feito" a partir das propriedades de uma classe. O carro, por exemplo, tem marca, cor, ano... todas essas características poderiam compor uma classe e todas as suas ocorrências herdam essas propriedades.

class Pessoa {
    nome;
    idade;

    // as funções (métodos) presentes nas classes não precisam receber o termo function
    descrever(){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    }
}

// instância da classe pessoa
const bruno = new Pessoa
bruno.nome = 'Bruno';
bruno.idade = 22;
console.log(bruno);
bruno.descrever()