// Aula 2 - Criando instâncias com construtor

/*
    O construtor é usado quando temos propriedades que devem sempre aparecer nas instâncias de uma classe. Ou seja, para instâncias que recebem as mesmas características, pode-se usar o método construtor.
*/

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    calcularDesconto() {
        return this.preco * 0.1;
    }
}

const produto1 = new Produto('Blusa', 50)
console.log(produto1);

console.log(`Valor do desconto: ${produto1.calcularDesconto()} R$`); 