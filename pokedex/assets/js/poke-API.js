//? serve para executar algo quando a requisição for atendida
//? then encadeado: serve para executar algo a partir do resultado da execução do then anterior

//* criação de um objeto para receber a requisição
const pokeAPI = {};

//* prenchendo os atributos da classe com o resultado das requisições
function convertPokemonApiDetailsToPokemon (pokemonDetails) {
    const pokemon = new Pokemon()

    pokemon.number = pokemonDetails.order;
    pokemon.name = pokemonDetails.name;

    const types = pokemonDetails.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types;
    pokemon.type = type;

    pokemon.photo = pokemonDetails.sprites.other.dream_world.front_default

    return pokemon
}

//* criando um método para, por meio da URL retornada na requisição anterior, pegar os detalhes do pokemon
pokeAPI.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokemonApiDetailsToPokemon)
}

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
