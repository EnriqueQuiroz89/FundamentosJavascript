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
function imprimirNombreENMayusculas({nombre}){
    console.log(  nombre.toUpperCase())
      }

    //Accediendo al objeto
//Ahora paso el objeto y el metodo se encarga de extarer su nombre

    imprimirNombreENMayusculas(sacha)
    imprimirNombreENMayusculas(dario)

    //Creando un objeto en caliente
    imprimirNombreENMayusculas({nombre: "Pepito"})
    //No podemos desglosar un objeto que noe xiste
 //   imprimirNombreENMayusculas()

    imprimirNombreENMayusculas({apellido: "Gomez"})
