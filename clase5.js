var x = 4, y = "4"

//Toma los valores e iguala el tipo de datos y luego los compara
x=y   // es asignacion
x==y  // Iguala los tipos y compara el valor
x===y // VAlida si tienen el mismo tipo de y si lo tiene los compara

//SIempre conviene utilizar el ===
//en pdn siemre se ocupa ===

/***COMPARANDO OBJETOS */
//Siempre que no apunten al la misma referencia dara false
var sacha= {
    nombre : 'sacha'
}

//tambien dara false ya que es otro objeto
// es otro lugar en memoria RAM
//var otraPersona = { //objeto literal
 //   ...sacha
//}

/**Si se modifican sus propiedad afecta a los dos
 * 
 */
var otraPersona = sacha