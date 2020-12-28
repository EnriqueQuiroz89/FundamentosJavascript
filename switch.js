var signo = prompt('¿Cual es tu signo?')

console.log(signo)

switch(signo){
    case 'acuario': 
       console.log('Intente acuario') 
        break

    
    case 'pisis': 
    case 'picis':
    case 'PICIS':
       console.log('Intente acuario') 
        break

    
    case 'geminis': 
    case 'géminis': 
    case 'Geminis': 
       console.log('Intente acuario') 
        break

 
     default:
        console.log('nO SE ENCOTRO TU SIGNO')
        break
}