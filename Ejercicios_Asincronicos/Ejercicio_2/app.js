
const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido
obtenerChiste().then(objeto=>{
    console.log(objeto[0].setup);
    console.log(objeto[0].punchline);
});