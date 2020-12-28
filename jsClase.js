//** prototipos  == clase en java */
  
//Prototipo siempre son objetos
function heredaDe(prototipoHijo, prototipoPadre){
         var fn = function() {} // funcion vacia
         /** */
         fn.prototype= prototipoPadre.prototype
         
         prototipoHijo.prototype = new fn 
        
         prototipoHijo.prototype.constructor  = prototipoHijo

}

/**Puede recibir parametros */
function Persona(nombre, apellido, altura){
   this.nombre = nombre
   this.apellido = apellido
   this.altura = altura

   //atributos por default de un objeto
   this.edad = 25
  }

  /**En este tipo de metodos el this es la ventana del navegador*/
  //this===window sera true
/**Dara ERROR*/Persona.prototype.saludarBad = () =>   console.log(`Hola me llamo ${this.nombre}  ${this.apellido}`)
/**Dara ERROR*/Persona.prototype.esAltoBad = () => this.altura > 1.80

Persona.prototype.saludar = function() { console.log(`Hola me llamo ${this.nombre}  ${this.apellido}`)}
Persona.prototype.esAlto = function() {return this.altura > 1.80 }

//EN este tipo de funciones el this se refiere al objeto que la invoca
Persona.prototype.soyAlto = function(){ 
   //2) La evaluacion retorna un true o false
  var mayorDeUnoOchenta = ({altura})=> altura >1.80
                    //1) paso el objeto a la evaluacion    
   if (mayorDeUnoOchenta(this)){ 
      console.log(`Soy una persona alta por que mido ${this.altura}`) //3) si se cumple mando msg
   } else{
      console.log(`Soy una persona bajita por que mido ${this.altura}`) //3) si se cumple mando msg
   }

}

 /**Asi se crea un nuevo objeto */
//var pedro = new Persona('Pedro', 'MArmol', 1.90)
//var maria = new Persona('maria', 'Peña', 1.78)
//var artemio = new Persona('Arturo', 'Sandoval', 1.95)


/**Herencia PROTOTIPAL */
function Desarrollador(nombre, apellido) {

   this.nombre = nombre
   this.apellido = apellido
}

heredaDe(Desarrollador, Persona) /**Importante el orden */

//equivale a un override
Desarrollador.prototype.saludar= function(){
      console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y soy Desarrollador`)      
}



var hendyDev = new Desarrollador('Enrique','Quiroz')














