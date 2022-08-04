// funcion random Math. mirar desde documentacion, nativo de js

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }

// 1 numero ramdon
// const valor = getRandomArbitrary(1,20)
// console.log(Math.floor(valor))

// funcion para tirar 10 numeros random con su clave / valor
// const numbers = {}

// for (let i = 0; i < 10; i++) {
//     const valor = getRandomArbitrary(1,20)    
    
//     if(numbers[valor]){        
//         numbers[valor]++
//     } else {
//         numbers[valor] = 1
//     }    
    
// }

// console.log(numbers)
var moment = require('moment')

// function calcular() {
// const ahora = moment().format('DD/MM/YYYY')
// const nacimiento = moment([1987,7,18])
// const dias = ahora.diff(nacimiento, 'days')

// console.log(dias)
// }
// calcular()

const hoy = moment()
const fechaNacimiento =  moment([1987,7,18])
const years = hoy.diff(fechaNacimiento, 'years')
const days = hoy.diff(fechaNacimiento, 'days')
console.log(`Hoy es : ${hoy} y naci el ${fechaNacimiento}`)
console.log(`Tengo: ${years} años y Llevo vividos: ${days} dias`)