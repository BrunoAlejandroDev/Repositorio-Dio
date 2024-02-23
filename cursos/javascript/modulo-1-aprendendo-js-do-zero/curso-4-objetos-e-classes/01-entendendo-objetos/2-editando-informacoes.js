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