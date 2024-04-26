const offset = 0;
const limit = 10;
const urlPokemon = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
const pokemonsList = document.getElementById('pokemons-list');

function convertListPokemonToListItem (pokemon) {
    return `
        <li class="list-pokemons__pokemon">
            <span class="pokemon-number">#001</span>
            <span class="pokemon-name">${pokemon.name}</span>

            <div class="pokemon-details">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
                alt="${pokemon.name}"
                />
            </div>
        </li>
    `
}

fetch(urlPokemon)
    .then((response) => response.json()) // serve para executar algo quando a requisição for atendida

    .then((jsonBody) => jsonBody.results) // then encadeado: serve para executar algo a partir do resultado da execução do then anterior

    .then((pokemonList) => {
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            pokemonsList.innerHTML += convertListPokemonToListItem(pokemon);
        }
    }) 

    .catch((error) => console.log(error)) // define uma execução no caso de erro

    /* .finally(() => console.log('Requisição finalizada')) executa um comando independente do resultado da requisição */