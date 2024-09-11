# Pokémon Repository App

This is a simple web application that displays a list of Pokémon and shows detailed information about each one in a modal when clicked. The app fetches data from the Pokémon API and displays the Pokémon's name, height, and image.
Features

    Fetches a list of 150 Pokémon from the PokéAPI.
    Displays a list of Pokémon with their names.
    Clicking on a Pokémon's name opens a modal with additional details (name, height, and an image).
    Responsive design using Bootstrap for styling.

# Dependencies

    HTML5
    CSS3
    JavaScript (ES6+)
    Bootstrap 4.5 (for styling and modals)
    Pokémon API: https://pokeapi.co/api/v2/pokemon/?limit=150

# Code Overview

    pokemonRepository: This IIFE (Immediately Invoked Function Expression) holds all the Pokémon-related functionality.
        add(pokemon): Adds a Pokémon to the local repository.
        getAll(): Returns the list of all Pokémon.
        addListItem(pokemon): Creates a button for each Pokémon and appends it to the list.
        showDetails(pokemon): Fetches details of the selected Pokémon and shows them in a modal.
        loadList(): Fetches the list of Pokémon from the API.
        loadDetails(pokemon): Fetches detailed information for a specific Pokémon.
        showModal(name, height, imageUrl): Displays the modal with the Pokémon's details.

# How It Works

    The app fetches the Pokémon list from the API on page load.
    Each Pokémon's name is displayed as a button in the list.
    When a button is clicked, additional details (height and image) are loaded from the API and shown in a modal.