///impelementar JQuery de un cdn
//CDN es un Contain Delivery Network


const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

//Parametros para el Request
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`  //interpolacion
const opts = {crossDomain: true} //opciones

//const onPeopleResponse = function(persona){ console.log(`Hola yo soy ${persona.name}`) }
//Nos permite hacer un Request

function obtenerPersonaje(id, callback ){
    const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`  
    $.get(url, opts, function(persona){ console.log(`Hola yo soy ${persona.name}`)} )

    //Si nos envian un callback
    if(callback){
        callback()
    }


}

//esto es peticiones en Serie y no en ASCINCRONISMO

  //CALL BACK HELL

obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, null)
    })
})