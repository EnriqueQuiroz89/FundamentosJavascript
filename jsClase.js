
/**COLLECIONES EN js */

var vicky = {
   nombre: 'Vicky',
   apellido: 'Lpez',
   altura: 1.65
            }

var vic = {
   nombre: 'Vic',
   apellido: 'Lpez',
   altura: 1.99
            }

            
var Tor = {
   nombre: 'Tor',
   apellido: 'Lpez',
   altura: 1.89
            }

var personas = [vicky, vic, Tor]

for(var i=0 ; i<personas.length; i++){

   var persona = personas[i]

//console.log(`${persona.nombre}  mide ${persona.altura}`)

}
      //condicion por separado
/**Filtrar de un array*/  /**Si es mayor devuelve la persona */
var esAlta = ({altura}) => altura > 1.8
var personasAltas = personas.filter(esAlta)
//  //console.log(personasAltas)

         //condicion dentro con arow function
//es una persona bajita
var personasBajitas = personas.filter(({altura}) => altura< 1.8 )
//console.log(personasBajitas)


/*** TRANSFORMAR UN ARRAY*/
var pasarAlturaAcmOld= persona => {
   return{                       //cuando no quiero modificar el objeto que me pasen
         ...persona,             //Creo otro objeto que se almacenara en otro array
         altura : persona.altura* 100
         }
}
                                //desgloso el OBJ  //Creo uno nuevo a partir y le camvio la altur
var pasarAlturaAcm= persona => ({  ...persona,     altura : persona.altura* 100 })  //con los () lo retorno WOOOW


/**map devuelve un nuevo array*/
var personasCm = personas.map(pasarAlturaAcm)























