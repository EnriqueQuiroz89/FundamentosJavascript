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
     .fail( ()=>{
        console.log(`No se pudo obtener el personaje ${id}`)
                }
          )  
}


//esto es peticiones en Serie y no en ASCINCRONISMO

  //CALL BACK HELLL

obtenerPersonaje(1, function(persona){  //HACE DOS COSAS
/**1*/  console.log(`Soy ${persona.name}`)
/**2*/obtenerPersonaje(2, function(persona){ //hace 2 cosas
   /**1*/ console.log(`Soy ${persona.name}`)
   /**2*/ obtenerPersonaje(3, function(persona){ //hace 2 cosas
       /**1*/console.log(`Soy ${persona.name}`)
       /**2*/obtenerPersonaje(4,function(persona){ //hace 2 cosas
           /**1*/console.log(`Soy ${persona.name}`)
           /**2*/obtenerPersonaje(5, function(persona){ //hace 2 cosas
                /**1*/console.log(`Soy ${persona.name}`)
                /**2*/obtenerPersonaje(6, null)
                                              })
                                         })
                                      })
                                  })
                        })