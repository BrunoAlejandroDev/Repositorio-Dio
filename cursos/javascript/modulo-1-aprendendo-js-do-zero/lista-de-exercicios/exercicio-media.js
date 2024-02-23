/*
    Faça um algoritmo qe dado 3 notas tiradas por um aluno imprima sua média e sua classificação conforme a tabela abaixo

    media = (nota1 + nota2 + nota3) / 3

    classificação:
        - menor que 5 -> reprovado
        - entre 5 e 6.9 -> recuperação
        - igual ou maior que 7 -> aprovado
*/

const nota1 = 5
const nota2 = 5
const nota3 = 5

let mediaAluno = (nota1 + nota2 + nota3) / 3;

if(mediaAluno < 5) {
    console.log(`Sua média foi: ${mediaAluno.toFixed(2)}\nSua situação: Reprovado`)
}
else if(mediaAluno >= 5 && mediaAluno < 7) {
    console.log(`Sua média foi: ${mediaAluno.toFixed(2)}\nSua situação: Recuperação`)
}
else {
    console.log(`Sua média foi: ${mediaAluno.toFixed(2)}\nSua situação: Aprovado`)
}