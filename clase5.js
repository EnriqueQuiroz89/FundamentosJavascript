//represantcion del objeto
// un objeto no es mas que clave o valor
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifsick',
    edad: 28
            }


            var dario = {
                nombre: 'DArio',
                apellido: 'Susninsky',
                edad: 28
                        }

//Le digo que solo obetnga el atributo nombre del objeto
function imprimirNombreENMayusculas(persona){
    // var nombre = persona.nombre
    var {nombre} = persona  
    console.log(  nombre.toUpperCase())
      }

    //Accediendo al objeto
//Ahora paso el objeto y el metodo se encarga de extarer su nombre

  //  imprimirNombreENMayusculas(sacha)
   // imprimirNombreENMayusculas(dario)


    function imprimirNombreYedad(persona){
        var {nombre}= persona
        var {edad} = persona
        //USar interpolacion
        console.log(`Hola me llamo ${nombre} y tengo ${edad}`)
    }

    imprimirNombreYedad(sacha)
    imprimirNombreYedad(dario)
