/**CONDICIONALES */

var sacha = {

    nombre : 'Sacha',
    apellido : 'Lift',
    edad:30,
    ingeniero: true,
    cantante: false, 
    drone: true
}


var pillo = {

    nombre : 'Pillo',
    apellido : 'Lopez',
    edad:5
}

//Indicar que una variable es una constante
//Por regla asi van
const MAYORIA_DE_EDAD= 18;


//funcion reto determinar la mayoria de edad o no de Sasha
function imprimiEsMayorDeEdad(persona){

console.log(`Segun la edad de ${persona.nombre}`)
if (persona.edad>=18){
    console.log(`Es mayoor de edad`)
                     }else {
    console.log(`No es mayor de edad`)
                     }
}

//dividir la funcion en  mas pequeñas
function esMayorDeEdad(persona){
    return persona.edad>= MAYORIA_DE_EDAD
                               }

function imprimeMayoriaEdad(persona){
        //si la condicion es true
        if(esMayorDeEdad(persona)){
            console.log(`${persona.nombre} es mayor de edad`)
        }else{
            console.log(`${persona.nombre} es menor de edad`)
                                    }

}


