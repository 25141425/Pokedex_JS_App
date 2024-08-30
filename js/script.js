let pokemonRepository = (function () {
  let pokemonList = [
  {name: 'Beedrill', height: 1, types: ['Bug', 'Poison'], weight: 29.5},
  {name: 'Jigglypuff', height: 0.5, types: ['Fairy', 'Normal'], weight: 5.5},
  {name: 'Pidgeotto', height: 1.1, types: ['Flying', 'Normal'], weight: 30},
  {name: 'Dewgong', height: 1.7, types: ['Ice', 'Water'], weight: 120}
 ];

  return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    },
    addListItem: function(pokemon) {
      let pokedex = document.querySelector(".pokedex");
      let listItem = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button_class");
      listItem.appendChild(button);
      pokedex.appendChild(listItem);
      button.addEventListener('click', function() { // Using the function "showDetails" to console.log the details of the passed pokemon
        pokemonRepository.showDetails(pokemon);
      });
    },
    showDetails: function (pokemon) {
      console.log(pokemon);
    }
    
  };
})();

pokemonRepository.add({ name: 'Gloom', height: 0.8, types: ['Grass', 'Poison'], weight: 8.6});

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});