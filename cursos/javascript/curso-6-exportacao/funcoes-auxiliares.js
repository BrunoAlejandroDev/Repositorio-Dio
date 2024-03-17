// local para colocar as funções que serão exportadas
const numeros = [5, 50, 10, 98, 23, 12, 67, 102];
let iterador = 0;

function gets() {
    const valor = numeros[iterador];
    iterador++;
    return valor
}

function print(texto) {
    console.log(texto);
}
 
module.exports = {gets, print}