let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');
  
  // These are all functions within the pokemonRepository
  return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    },
    addListItem: function(pokemon) {
      let pokedex = document.querySelector(".list-group");
      let listItem = document.createElement("li");
      listItem.classList.add("list-group-item", "border-0");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("btn", "btn-outline-danger", "btn-block");
      button.setAttribute("data-toggle", "modal");
      button.setAttribute("data-target", "#modal-container");
      
      listItem.appendChild(button);
      pokedex.appendChild(listItem);
      button.addEventListener('click', function() {
        pokemonRepository.showDetails(pokemon);
      });
    },
    showDetails: function(pokemon) {
      pokemonRepository.loadDetails(pokemon).then(function () {
        pokemonRepository.showModal(pokemon.name, pokemon.height, pokemon.imageUrl);
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
    },

    showModal: function (name, height, imageUrl) {
      let modalTitle = document.querySelector(".modal-title");
      let modalBody = document.querySelector(".modal-body");
      let modalHeader = document.querySelector(".modal-header");
      
      // Delete initial content from model 
      modalTitle.innerHTML = '';
      modalBody.innerHTML = '';
    
      let nameElement = document.createElement("h1");
      nameElement.innerText = name;
      
      let heightElement = document.createElement("p");
      heightElement.innerText = 'Height: ' + height + 'm';
      
      let imageElement = document.createElement("img");
      imageElement.src = imageUrl;
      
      // Appending content to modal
      modalTitle.appendChild(nameElement);
      modalBody.appendChild(heightElement);
      modalBody.appendChild(imageElement);
    }
  };
})();

// pokemonRepository.add({ name: 'Gloom', height: 0.8, types: ['Grass', 'Poison'], weight: 8.6});

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
})
