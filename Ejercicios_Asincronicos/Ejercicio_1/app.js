const obtenerChiste = require("./library");

// Codigo funcion callback
function callback(obj) {
    console.log(obj[0].setup);
    console.log(obj[0].punchline);
}

// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
obtenerChiste(callback);