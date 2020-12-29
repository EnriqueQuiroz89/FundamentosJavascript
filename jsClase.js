//promesa con asinc-Awayt
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

function promiseObtenerPersonaje(id){

    const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`  
    const opts = {crossDomain: true} //opciones

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
    console.log(`Sucedio un error al obtener el personaje ${id}`) }

 //ASYNC-AWAIT
 // await exige Async
async function obtenerPersonajesAsincronamente(){
    var ids= [1,2,3,4,5,10,12]
    var promesas = ids.map(  (id)=> promiseObtenerPersonaje(id) ) //son promesas no resuletas
     
    try{  var personajes= await Promise.all(promesas)
          console.table(personajes)    //que hacemos una vez que los tenemos
        }
   catch(id){ onError(id) }
}

obtenerPersonajesAsincronamente()

//PROMESAS
function obtenerPersonajesConPromises(){

    var ids= [8,9,10,11,12,13,14]
    var promises = ids.map(  (id)=> promiseObtenerPersonaje(id) ) //son promesas no resuletas
    
    Promise.all(promises)
           .then(personajes => console.table(personajes))
           .catch(onError)
}

obtenerPersonajesConPromises()
