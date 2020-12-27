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

//Asignar a una variable una funcion 

// es una funcion anonima por que no tiene nombre

//eSTO ES UN ARROW FUNCTION =) =) =) 
//const esMayordeEdad = persona =>{ return persona.edad >= MAYORIA_DE_EDAD}

//arrow funtion simplificada =es hermosa
//const esMayordeEdadSimple = persona => persona.edad >= MAYORIA_DE_EDAD
                                  
//arrow funcion aun mas simple //solo la prpiedad en juego
const esMayordeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

function imprimirMayoriaEdad(persona){
    if(esMayordeEdadMasSimple(persona)){
            console.log("MAYOR")
        } else {
            console.log("Menor")
        }
                                    }


function permitirAcceso(){

    if(!esMayordeEdadMasSimple){
                console.log("Acceso denegado")
                               }
                else
            {
            console.log("Acceso permitido")    
            }

}
        //ARROW FUNCTION ES MENOR DE EDAD
const esMenordeEdad = ({edad})  => edad <= MAYORIA_DE_EDAD

function printIfMenorAge(persona){

    if(esMenordeEdad(persona)){
            console.log("Es menor de edad")
        } else {
            console.log("Es mayor de edad")
        }
                                    }

