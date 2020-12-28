//** prototipos  == clase en java */
class Persona {
   
   constructor(nombre, apellido, altura){  //se ejecuta simepre que creemos objetos de esta clase
      this.nombre = nombre
      this.apellido = apellido
      this.altura = altura
               }
            //pasar la funcion es opcional   
   saludar(fn){
//      var nombre = this.nombre
//      var apellido = this.apellido
   var {nombre, apellido}= this   /**Desestructuro el nombre ya pellido*/

      console.log(`Hola me llamo ${nombre}  ${apellido}`)

         if(fn){  // En caso de si recibir una funcion como parametro y que sea definida
                  fn(nombre, apellido, false)            
               }
            }

   soyAlto(){return this.altura > 1.80} 
}

/**hereda de persona */
class Desarrollador extends Persona {
   constructor(nombre, apellido, altura){
      super(nombre, apellido, altura) //*LLamando al contructor de la clase padre
     }

    saludar(fn){

        var {nombre, apellido}= this

        console.log(`Hola, me llamo ${nombre} ${apellido} y soy develpment`)

      if(fn){ 
         fn(nombre, apellido, true)            
      }
              }
}

                                         //ademas un boolean que determine si es dev o no
function responderSaludo(nombre, apellido, esDev){
   console.log(`Buen dia ${nombre} ${apellido}`)

   if(esDev){
      console.log(`Ah mira, no sabia que eras desarrollador`)
   }
}

/**Crear objetos */
var sordon= new Persona('eri','quiroz',159)
var peru = new Persona('sorir', 'epaae', 182)
var mark = new Desarrollador('Mark', 'Suckenber', 189)

//pasndo funciones como parametro =)

sordon.saludar()
peru.saludar(responderSaludo)
mark.saludar(responderSaludo)








