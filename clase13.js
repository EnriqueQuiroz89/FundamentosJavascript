var pedro = {
        nombre: 'Pedro', 
        apellido: 'Picapiedra',
        edad: 28,    
        peso: 75
        }


        // simular el transcurriw l año

        console.log(`Al inicio del año ${pedro.nombre}  ${pedro.peso}`)

        const INCREMENTO_PESO = .3
        const DIAS_ANIO = 365

        //MI primer Arrow function
        const aumentarPeso  = persona=> persona.peso += INCREMENTO_PESO
        const disminuyePeso = persona=> persona.peso -= INCREMENTO_PESO
        //esta arrow fun se puede hacer pos que solo devuelven un false o true
        const comeMucho = () => Math.random() < 0.3
        const realizaDeporte = () => Math.random() < 0.4 

        const META = pedro.peso- 3

        var dias = 0 

        //Mientas la condicion se cumpla
        // esto quiere decir que si no baja de peso siga ejecutando
        while(pedro.peso> META){

                if(comeMucho()){
                    aumentarPeso(pedro)
                                } 

                if(realizaDeporte()){
                    disminuyePeso(pedro)
                                } 

                dias +=1

            }

        console.log(`Pasaron ${dias} y pedro tiene ${pedro.peso}`)



      