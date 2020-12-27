/**CONDICIONALES */

var sacha = {

    nombre : 'Sacha',
    apellido : 'Lift',
    edad:30,
    ingeniero: true,
    cantante: false, 
    drone: true
}


function imprimirProfesiones(persona)
{
                    //TMPLATE STRING
    console.log(`${persona.nombre} es :  `)
        //=== por que me interesa validar el tipo de dato tambien
    if (persona.ingeniero===true){
       console.log('Ingeniero')
                    } else{
        console.log('No es ingeniero')                
                    }

                    if (persona.cantante===true){
                        console.log('cantante')
                                     } else {
                        console.log('No es cantante')                    
                                     }
                                     
                                     if (persona.drone===true){
                                        console.log('piloto de drone')
                                                     } else {
                                        console.log('No es droner')                 
                                                     }
}

//funcion reto determinar la mayoria de edad o no de Sasha

function esMayorDeEdad(persona){

console.log(`Segun la edad de ${persona.nombre}`)
if (persona.edad>=18){
    console.log(`Es mayoor de edad`)
                     }else {
    console.log(`No es mayor de edad`)
                     }

}