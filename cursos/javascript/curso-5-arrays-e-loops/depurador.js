const notas = [];

notas.push(7);
notas.push(8);
notas.push(6);

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota
}
const media = soma / notas.length;
console.log(soma)
console.log(media);