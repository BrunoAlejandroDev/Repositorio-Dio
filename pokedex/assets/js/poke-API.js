//* criação de um objeto para receber a requisição
const pokeAPI = {};

//* criando um método (getPokemons) que retorna o resultado da requisição
pokeAPI.getPokemons = (offset = 0, limit = 10) => {
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(urlPokemon)
        .then((response) => response.json()) //? serve para executar algo quando a requisição for atendida

        .then((jsonBody) => jsonBody.results) //? then encadeado: serve para executar algo a partir do resultado da execução do then anterior

        .catch((error) => console.log(error)) //? define uma execução no caso de erro
}