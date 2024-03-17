// local para colocar as funções que serão exportadas
const numeros = [5, 50, 10, 98, 23, 67];
let i = 0;

function gets() {
    const valor = numeros[i];
    i++;
    return valor
}

function print(texto) {
    console.log(texto);
}
 
module.exports = {gets, print}