
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifsick',
    edad: 28
            }

/**LOS obsjetos que pasamos por parametro se pasna por referncia */
/**Si pasamos un objeto a una funcion por default este objeto
 * sufria cambios en sus atributos
  */
function cumpleaños(persona){
 persona.edad += 1
}

/**Si pasamos un variable y no objeto
 * sufria cambios en sus atributos
  */
 function bird(edad){
    edad += 1
   }
   
 /**Evitar efecto colateral*/
 //crear otro objeto de tipo persona
 function cumple(persona)
 {
     return{ //creo otro objeto al cual si le quiero modificar su propiedades
     ...persona,
     edad : persona.edad + 1 
    }
 }  