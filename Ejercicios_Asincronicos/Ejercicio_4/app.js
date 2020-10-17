
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon("charmander").then(pokemonData => {
    console.log("Nombre: " + pokemonData.forms[0].name);
    console.log("Habilidades: ");
    pokemonData.abilities.forEach(ability => console.log(ability.ability.name));
});
