const media = [7];
let i = 0;

function gets() {
    const valor = media[i]
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print};