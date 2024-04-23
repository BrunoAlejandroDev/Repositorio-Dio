const offset = 0;
const limit = 10;

const urlPokemon = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(urlPokemon)
    .then((response) => response.json()) // serve para executar algo quando a requisição for atendida

    .then((jsonBody) => console.log(jsonBody)) // then encadeado: serve para executar algo a partir do resultado da execução do then anterior

    .catch((error) => console.log(error)) // define uma execução no caso de erro

    .finally(() => console.log('Requisição finalizada')) // executa um comando independente do resultado da requisição