const pokemonsList = document.getElementById('pokemons-list');

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`);
}

function convertListPokemonToListItem (pokemon) {
    return `
        <li class="list-pokemons__pokemon">
            <span class="pokemon-number">#${pokemon.order}</span>
            <span class="pokemon-name">${pokemon.name}</span>

            <div class="pokemon-details">
                <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types).join("")}
                </ol>

                <img 
                src="${pokemon.sprites.other.dream_world.front_default}"
                alt="${pokemon.name}"
                />
            </div>
        </li>
    `
}

pokeAPI.getPokemons().then((pokemonList = []) => {
    pokemonsList.innerHTML += pokemonList.map(convertListPokemonToListItem).join("");
}) 

//* O map acima faz a mesma coisa que o bloco de código abaixo
// for (let i = 0; i < pokemonList.length; i++) {
//     const pokemon = pokemonList[i];
//     pokemonsList.innerHTML += convertListPokemonToListItem(pokemon);
// }