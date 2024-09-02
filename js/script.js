let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  

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
    showDetails: function(pokemon) {
      pokemonRepository.loadDetails(pokemon).then(function () {
        console.log(pokemon);
      });
    },

    loadList: function() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          pokemonRepository.add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    },

    loadDetails: function (item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }

    
  };
})();

// pokemonRepository.add({ name: 'Gloom', height: 0.8, types: ['Grass', 'Poison'], weight: 8.6});

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
})
