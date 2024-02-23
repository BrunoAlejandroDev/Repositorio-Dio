const precoProduto = 100;
const formaDePagamento = 3;

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)))
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)))
}

if(formaDePagamento === 1) {
    console.log(`Preço final com desconto de 10%: ${aplicarDesconto(precoProduto, 10)}`);
}
else if(formaDePagamento === 2) {
    console.log(`Preço final com desconto de 10%: ${aplicarDesconto(precoProduto, 15)}`);
}
else if(formaDePagamento === 3) {
    console.log(`Preço final parcelado sem juros: ${precoProduto}`);
}
else {
    console.log(`Preço final com acréscimo de 10%: ${aplicarJuros(precoProduto, 10)}`);
}