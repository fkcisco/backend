// ECMAScript 6
// Funcionalidades que existe:
// 1-Hay una definición de constantas (se usaba var ahora se usa const y let)
// var= scope global - const y let tienen un scope local
// 2- Hoisting (no es de ES6 pero es importante en entrevistas) 
// mover las declaraciones y funciones al comienzo de la app
// 3 - arrow functions -> no hace falta parentesis si recibe un solo parametro
// no hace falta agregar el return, no hace falta usar la palabra function
// El this es clave en las arrow function para poder acceder a una variable de otro scope    
const test = {
        props: 50,
        func: function(){
            return this.props
        },
    }
    console.log(test.func())
// 4 - Closhure (sirve para crear contexto privados, a las cuales e accede mediante la funcion interna)
// 
