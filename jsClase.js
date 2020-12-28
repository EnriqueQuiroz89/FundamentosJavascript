///impelementar JQuery de un cdn
//CDN es un Contain Delivery Network


const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

//Parametros para el Request
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`  //interpolacion
const opts = {crossDomain: true} //opciones

const onPeopleResponse = function(persona){ console.log(`Hola yo soy ${persona.name}`) }
//Nos permite hacer un Request

                    //es una funcion que se pasa Por parametro
                    // y que se va ejecutar si se termina el request
$.get(lukeUrl, opts, onPeopleResponse )

/**Callback es una funcion que se va a ejecutar en el futuro y no sabemops cuando */
//$.get sera el encargado de llamar al callback si se termina el request
var maria = "Maria"
