// Crie uma lista de números e percorra a lista e, para cada número par encontrado, imprima o valor

const lista = [12, 50, 41, 22, 8, 5, 33, 76, 89];

for(let i = 0; i < lista.length; i++) {
    const numero = lista[i]
    if(numero % 2 === 0) {
        console.log(numero);
    }
}