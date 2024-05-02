//? serve para executar algo quando a requisição for atendida
//? then encadeado: serve para executar algo a partir do resultado da execução do then anterior

//* criação de um objeto para receber a requisição
const pokeAPI = {};

//* criando um método (getPokemons) que retorna o resultado da requisição
pokeAPI.getPokemons = (offset = 0, limit = 5) => {
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(urlPokemon)
    .then((response) => response.json()) 
    .then((jsonBody) => jsonBody.results) //? limitando a resposta retornada a lista de pokemons (resultos)
    .then((pokemons) => pokemons.map(pokeAPI.getPokemonDetails)) //? mapeando a lista de pokemons em uma lista de requisições com os detalhes dos pokemons (URL)
    .then((detailsRequired) => Promise.all(detailsRequired)) //? quando todas as requisições terminarem é devolvida uma lista de detalhes dos pokemons
    .then((pokemonsDetails) => pokemonsDetails) 
    
    .catch((error) => console.log(error))
}

//* criando um método para, por meio da URL retornada na requisição anterior, pegar os detalhes do pokemon
pokeAPI.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json());
}