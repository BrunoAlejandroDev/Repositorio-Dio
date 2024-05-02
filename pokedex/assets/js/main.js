const pokemonsList = document.getElementById('pokemons-list');

function convertListPokemonToListItem (pokemon) {
    return `
        <li class="list-pokemons__pokemon ${pokemon.type}">
            <span class="pokemon-number">#${pokemon.number}</span>
            <span class="pokemon-name">${pokemon.name}</span>

            <div class="pokemon-details">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join("")}
                </ol>

                <img 
                src="${pokemon.photo}"
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