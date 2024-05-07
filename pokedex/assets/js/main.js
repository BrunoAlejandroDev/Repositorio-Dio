//* Elementos HTML
const pokemonsList = document.getElementById('pokemons-list');
const btnLoadMore = document.getElementById('btn-load-more');
const limit = 5;
let offset = 0;

function loadPokemons(offset, limit) {
    pokeAPI.getPokemons(offset, limit).then((pokemonList = []) => {
        pokemonsList.innerHTML += pokemonList.map((pokemon) =>
            `<li class="list-pokemons__pokemon ${pokemon.type}">
                <span class="pokemon-number">#${pokemon.number}</span>
                <span class="pokemon-name">${pokemon.name}</span>
                
                <div class="pokemon-details">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                    </ol>
                    
                    <img 
                        src="${pokemon.photo}"
                        alt="${pokemon.name}"
                    />
                </div>
            </li>`
        ).join("");
    }) 
}
loadPokemons(offset, limit)

//* criando interatividade do botão
btnLoadMore.addEventListener('click', () => {
    offset += limit;
    loadPokemons(offset, limit)
});