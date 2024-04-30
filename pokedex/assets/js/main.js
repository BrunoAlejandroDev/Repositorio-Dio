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

pokeAPI.getPokemons().then((pokemonList = []) => {
    pokemonsList.innerHTML += pokemonList.map(convertListPokemonToListItem).join("");
}) 

//* O map acima faz a mesma coisa que o bloco de código abaixo
// for (let i = 0; i < pokemonList.length; i++) {
//     const pokemon = pokemonList[i];
//     pokemonsList.innerHTML += convertListPokemonToListItem(pokemon);
// }