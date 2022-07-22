//  const mostrarLista1 = ["uno", "dos", "tres", "cuatro"]

// function enlistar(){ --> Segun el profe no recomienda map para no generar otro arreglo nuevo.
//         mostrarLista1.length === 0 
//         ? console.log("Lista Vacia") 
//         : ( mostrarLista1.map(function(item){
//                     return console.log(item)
//                 })
//         )   
// }
// enlistar()

// const mostrarLista = (datos) =>{
//     if(datos.length === 0) console.log("Lista Vacia")
//     datos.forEach(dato => console.log(dato))
// }
// mostrarLista(mostrarLista1)


// (function (){  --> Segun el profe no recomienda map para no generar otro arreglo nuevo.
//     const mostrarLista2 = [1, 2, 3]   
//     if(mostrarLista2.length === 0) {
//         console.log("Lista Vacia")
//     } else { 
//         mostrarLista2.map((item)=>{
//             return console.log(item)
//         })
//     }   
// }())

// (function(datos){
//     if(datos.length === 0) console.log("Lista Vacia")
//     datos.forEach(dato => console.log(dato))
// })([1,2,3,4])


// const crearMultiplicador = ( a , b ) => {
//     return (function(){
//         const multiplicar = a * b
//         console.log("multiplicar " + multiplicar)
//         const duplicar = multiplicar * 2
//         console.log("duplicar " + duplicar)
//         const triplicar = multiplicar * 3
//         console.log("triplicar " + triplicar)
//     }())
// }

// crearMultiplicador(5,3)



////trabajo del profe


class Client {
    constructor(nombre, mail, telefono){
        this.nombre = nombre
        this.mail = mail
        this.telefono = telefono
        this.pets = []
    }
    // Métodos
    fullData = () => {
        console.log(`hola soy ${this.nombre}, mi mail es ${this.mail}  y mi telefono ${this.telefono}`)
    }
    addPets = (mascota) => {
        this.pets.push(mascota)

    }
    mostrarPets = () => {
        console.log(this.pets)

    }
}

let client1 = new Client("Francisco","hola@franrobledo.com","2804011235")
let client2 = new Client("Norma","amor@franrobledo.com","2805198152")

client1.addPets("felipe")
client1.mostrarPets()


/// desafio profe
// los metodos siempre van fuera del constructor


class Contador {
    constructor(responsable) {
        this.responsable = responsable
        this.conteo = 0
    }
    static conteoGlobal = 0

    obtenerResponsable = () =>{
        return this.responsable 
    }
    obtenerCuentaIndividual = () => {
        return this.conteo
    }
    obtenerCuentaGlobal = () => {
        return Contador.conteoGlobal
    }
    contar = () => {
        this.conteo++
        Contador.conteoGlobal++
    }

}

let contador1 = new Contador("francisco")
let contador2 = new Contador("Norma")
let contador3 = new Contador("Hugo")


console.log(contador2.obtenerResponsable())
contador1.contar();
contador2.contar();
console.log(contador2.obtenerCuentaGlobal())

console.log(contador3.obtenerCuentaGlobal())







