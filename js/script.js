// Creating array of objects
let pokemonList = [
  {name: 'Beedrill', height: 1, types: ['Bug', 'Poison'], weight: 29.5},
  {name: 'Jigglypuff', height: 0.5, types: ['Fairy', 'Normal'], weight: 5.5},
  {name: 'Pidgeotto', height: 1.1, types: ['Flying', 'Normal'], weight: 30},
  {name: 'Dewgong', height: 1.7, types: ['Ice', 'Water'], weight: 120}
 ];
 
 pokemonList.forEach(function(item) {
  if (item.height > 1.5) {
   document.write(`<p> ${item.name} (height: ${item.height}) - Wow, that's big! </p>`);
  }
  else {
    document.write(`<p> ${item.name} (height: ${item.height}) </p>`);
  }
 })