let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

  modalContainer.addEventListener('click', function (event) {
    let target = event.target;  // Where the user clicked
    if (target === modalContainer) {
      pokemonRepository.hideModal();
    }
  });

  window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      pokemonRepository.hideModal();  
    }
  });
  
  // These are all functions within the pokemonRepository
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
      modalContainer.innerHTML = ''; // Deleting everything that was in the modal before
  
      let modal = document.createElement('div');
      modal.classList.add('modal');
  
      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', function() {
        modalContainer.classList.remove('is-visible');
      });
  
      let titleElement = document.createElement('h1');
      titleElement.innerText = name;
  
      let contentElement = document.createElement('p');
      contentElement.innerText = 'Height:' + ' ' + height ;

      let imageElement = document.createElement('img');
      imageElement.src = imageUrl;
  
      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement);
      modal.appendChild(imageElement);
      modalContainer.appendChild(modal);
      
      modalContainer.classList.add('is-visible');
    },

    hideModal: function () {
      modalContainer.classList.remove('is-visible');
    }
  };
})();

// pokemonRepository.add({ name: 'Gloom', height: 0.8, types: ['Grass', 'Poison'], weight: 8.6});

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
})
