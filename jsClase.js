///impelementar JQuery de un cdn
//CDN es un Contain Delivery Network


const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

//Parametros para el Request
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`  //interpolacion
const opts = {crossDomain: true} //opciones

const onPeopleResponse = function(persona){ console.log(`Hola yo soy ${persona.name}`) }
//Nos permite hacer un Request

function obtenerPersonaje(id){
    const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`  
    $.get(url, opts, onPeopleResponse )
}

//demostracion del asincronismo 
//No sabemos en que orden nos va a llegar cada una
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonaje(4)
obtenerPersonaje(5)
