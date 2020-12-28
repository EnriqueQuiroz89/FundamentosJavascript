//** prototipos  == clase en java */
class Persona {
   
   constructor(nombre, apellido, altura){  //se ejecuta simepre que creemos objetos de esta clase
      this.nombre = nombre
      this.apellido = apellido
      this.altura = altura
               }

   saludar(){console.log(`Hola me llamo ${this.nombre}  ${this.apellido}`)}

   soyAlto(){return this.altura > 1.80} 


}

class Desarrollador extends Persona {
   constructor(nombre, apellido, altura){

      super(nombre, apellido, altura) //*LLamando al contructor de la clase padre

   }

   //Pero los metods que se invocan los busca primero en la clase hijo y sigue 
   //hasta llegar a la clase padre
   saludar(){
      console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy develpment`)
            }

}













