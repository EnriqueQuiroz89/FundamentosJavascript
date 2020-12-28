///impelementar JQuery de un cdn
//CDN es un Contain Delivery Network
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

//Parametros para el Request
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`  //interpolacion
const opts = {crossDomain: true} //opciones

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
       .then(personaje =>{
           console.log(`El personaje 1 es ${personaje.name}`)
           return promiseObtenerPersonaje(2)
        })
        .then(personaje =>{
           console.log(`El personaje 2 es ${personaje.name}`)
           return promiseObtenerPersonaje(3)
        })
        .then(personaje =>{
            console.log(`El personaje 3 es ${personaje.name}`)
            return promiseObtenerPersonaje(4)
        })
        .then(personaje =>{
            console.log(`El personaje 4 es ${personaje.name}`)
            return promiseObtenerPersonaje(5)
        })
        .then(personaje =>{
            console.log(`El personaje 5 es ${personaje.name}`)
        })
       .catch(onError)   //el catch es el mismo para todos
                        