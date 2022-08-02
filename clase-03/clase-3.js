//
// Las funciones se pueden pasar valores como parametros(void)

//
// const operacion = (a,b) => {
//     const valor = a * b   
//     return valor
// }
// console.log(operacion(10,20))
    

//  a las funciones tambien se le pueden pasar funciones como parametros (void)
// Callbacks es una funcion que se pasas con otra funcion como parametro
// primero se pasa la variable y luego la funcion

// const ejecutar = ( params , mensaje ,  func ) => func( params , mensaje )
// const saludar = ( nombre , mensaje ) => console.log(`hola ${ nombre } ${ mensaje }`)
// ejecutar("Normis", "te amo mi amor", saludar)

// const sumar = (a,b) => a + b
// const restar = (a,b) => a - b
// const dividir = (a,b) => a / b
// const multiplicar = (a,b) => a * b

// const variasOperaciones = (a,b,funcion) => {
//     const resultado = funcion(a,b)
//     return resultado    
// }

// console.log(variasOperaciones(150,50,sumar))
// console.log(variasOperaciones(300,200,restar))
// console.log(variasOperaciones(100,2,dividir))
// console.log(variasOperaciones(5,5,multiplicar))

// const varias = multiplicar((variasOperaciones(150,50,sumar)),(variasOperaciones(150,50,restar)))

// console.log(varias)


//
//  ASINCORNISMO 
//  CALLBACKS => ya casi no se usan por que se animadan y se arma quilombillo
//  CALLBACKS => ANIDADOS NO VAN MAS
//  los callbacks validan con condicionales el resultado (resolve, reject)

//  (PROMESAS => para que no pasen mas las callbacks anidades aparecen las promesas)
//  LAS PROMESAS SON OBJETOS (funcion que es enviada como parametro a otra funcion)
//  MANEJADORES QUE TRABAJAN SOBRE EL RESULTADO => EXITO O FRACASO
// .then()
// .catch()
//  la promesa siempre esta en pendiente
//  si la operacion se cumple (cumplida-resolve) => fulfield .then()
//  si la operacion no se cumple (rechazada, reject) => .catch()
// el orden de las promesas es siempre primer el RESOLVE y luego el REJECT

function dividir( dividiendo , divisor ) {
    return new Promise ( ( resolve , reject ) => {
        if(dividiendo === 0 || divisor === 0) {
            reject("no se puede dividir por cero")
        } else {
            resolve( dividiendo / divisor )
        }
    })
}

// al escribir el codigo mas legible es mejor acomodarlo asi:
// las funciones que tienen una sola linea se puede evitar usar {} y simplificar la funcion

dividir(100,2)
//.then(resolve => console.log(`resuelto  ${resolve}`))
.then(resolve => resolve * 2)
.then(resolve => resolve + 5)
.then(resolve => resolve / 4)
.then(resolve => resolve * 8)
.then(resolve => console.log(resolve))

.catch(error => console.log(`error: ${error}`))

//
//  ASYNC / AWAIT => desde ES6 se utiliza con try catch
//



// try {
//     await console.log("todo salio correcto")
// } catch (error) {
//     await console.log("error: " + error)
// }