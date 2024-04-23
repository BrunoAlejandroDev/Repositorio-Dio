const offset = 0;
const limit = 10;

const urlPokemon = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(urlPokemon)
    .then(function (response){ // serve para executar algo quando a requisição for atendida
        console.log(response);
    })
    .catch(function (error){ // serve para executar algo quando a requisição der erro
        console.log(error);
    })
    .finally(function (){ // serve para executar um comando independente da requisição ter funcionado ou não
        console.log('Requisição finalizada');
    })