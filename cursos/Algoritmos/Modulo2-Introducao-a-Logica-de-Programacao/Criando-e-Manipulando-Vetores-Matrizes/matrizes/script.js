//observação: caixinha roxa são ações que podem ser feitas no array, manipulações. Já as caixinhas azuis são propriedades do array. 

// criando uma matriz
let timePokemon = [
    ['Pikachu', "Masculino", 3],
    ['Bulbassaur', "Feminino", 6]
]
//console.log(timePokemon)

// pegando o nome do pikachu
console.log(timePokemon[0][0]);

// pegando o sexo do bulbassaur
console.log(timePokemon[1][1]);

// pegando o nível do pikachu
console.log(`Nível: ${timePokemon[0][2]}`);