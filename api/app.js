const request = require("request-promise");

var options ={
    url:"https://swapi.dev/api/films/",
    json:true
}

function obtenerPelicula(){
    return request(options);
}

obtenerPelicula().then(objeto=>{
    console.log("Título: "+ objeto.title);
    console.log("Episodio: "+ objeto.episode_id);
    console.log("Introducción: "+ objeto.opening_crawl);
    console.log("Director: "+ objeto.director);
    console.log("Productor: "+ objeto.producer); 
    console.log("Fecha de estreno: "+ objeto.release_date);
});