/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço e a escolha do método do pagamento.

    Condiçõs de pagamento:
        - débito -> recebe 10% de desconto;
        - dinheiro ou pix -> 15% de desconto;
        - parcelado em duas vezes -> preço normal sem juros
        - parcelado em mais de duas vezes -> preço normal mais 10% de juros
*/

const precoProduto = 100;
const formaDePagamento = 4;
let precoFinal = '';

if(formaDePagamento === 1) {
    precoFinal = (precoProduto - (precoProduto * 0.1))
    console.log(`Preço final com desconto de 10%: ${precoFinal}`);
}
else if(formaDePagamento === 2) {
    precoFinal = (precoProduto - (precoProduto * 0.15))
    console.log(`Preço final com desconto de 15%: ${precoFinal}`);
}
else if(formaDePagamento === 3) {
    console.log(`Preço final parcelado sem juros: ${precoProduto}`);
}
else {
    precoFinal = (precoProduto + (precoProduto * 0.1))
    console.log(`Preço final parcelado com juros: ${precoFinal}`);
}