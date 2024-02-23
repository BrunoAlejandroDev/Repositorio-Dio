/* Fórmula do IMC 
    IMC = peso / (altura * altura)

    elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo

    IMC:
        - abaixo de 18.5 -> abaixo do peso
        - entre 18.5 e 25 -> peso normal
        - entre 25 e 30 -> acima do peso
        - entre 30 e 40 -> obeso
        - acima de 40 -> obesidade grave
*/

const peso = ''
const altura = ''
let imc = peso / Math.pow(altura, 2)

if(imc < 18.5) {
    console.log(`Seu IMC é: ${imc} e você está abaixo do peso`);
}
else if (imc >= 18.5 && imc < 25) {
    console.log(`Seu IMC é: ${imc} e você está com peso normal`);
}
else if (imc >= 25 && imc < 30) {
    console.log(`Seu IMC é: ${imc} e você está acima do peso`);
}
else if (imc >= 30 && imc < 40) {
    console.log(`Seu IMC é: ${imc} e você está obeso`);
}
else {
    console.log(`Seu IMC é: ${imc} e você está com obesidade grave`);
}