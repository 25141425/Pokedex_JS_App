// Creating array of objects
let pokemonList = [
  {name: 'Beedrill', height: 1, types: ['Bug', 'Poison'], weight: 29.5},
  {name: 'Jigglypuff', height: 0.5, types: ['Fairy', 'Normal'], weight: 5.5},
  {name: 'Pidgeotto', height: 1.1, types: ['Flying', 'Normal'], weight: 30},
  {name: 'Dewgong', height: 1.7, types: ['Ice', 'Water'], weight: 120}
 ];
 
 /* First line is looping through pokemonList array as long as i is smaller than the number of objects in the array.
 Conditional checks if height > 1.5. If so, "Wow, that's big!" is being added in the print on the HTML.
 <p> tag is added in document.write so every Pokemon appears on new line.
*/
 for (let i = 0; i < pokemonList.length; i++)  
    if (pokemonList[i].height > 1.5) { 
  document.write(`<p> ${pokemonList[i].name} (height: ${pokemonList[i].height}) - Wow, that's big!</p>`); } 
  else { 
    document.write(`<p> ${pokemonList[i].name} (height: ${pokemonList[i].height}) </p>`); 
  }