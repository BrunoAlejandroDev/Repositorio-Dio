function escrevaMeuNome(name) {
    return `Meu nome é ${name}`
}

function verificarIdade(idade) {
    if(idade>=18) {
        console.log(escrevaMeuNome('Bruno') + ' e eu sou maior de idade');
    }
    else {
        console.log(escrevaMeuNome('Bruno') + ' e eu sou menor de idade');
    }
}
verificarIdade(17)