///impelementar JQuery de un cdn
//CDN es un Contain Delivery Network


const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

//Parametros para el Request
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`  //interpolacion
const opts = {crossDomain: true} //opciones

//const onPeopleResponse = function(persona){ console.log(`Hola yo soy ${persona.name}`) }
//Nos permite hacer un Request

                                /**TENEMOS 2 CALLBACK EN LA MISMA FUNCION */
function obtenerPersonaje(id, callback ){
    const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`  
   
     //   ¿donde?  ¿como?  ¿si exito ...? ¿Si fallo?
    $.get(url,     opts,     callback)
     .fail( ()=> console.log(`Error, No se pudo obtener el personaje ${id}`) )  
}  

//obtenerPersonaje(1, function(persona){ console.log(`Soy ${persona.name}`) })

//-------------------------------------------------------------------------------

/**  Estructura de una promesa
 * 
new Promise(function(resolve, reject){
    ...
}).then(valor => {
    ...
}).catch(err=>{
    ....
})
 */

function promiseObtenerPersonaje(id){

    const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`  
  
return new Promise(function(resolve, reject){
    //llamado asincrono con jquery
   $.get(url, opts, function (data){
        resolve(data)  //Solo si Get exitoso
    })
    .fail( ()=> reject(id) )   //SI falla            
})  /**Aqui va el .then*/
    /**Aqui va el  */
}


function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

promiseObtenerPersonaje(1)
       .then(function(personaje){
             console.log(`El personaje 1 es ${personaje.name}`)
        })
       .catch(onError)
                        