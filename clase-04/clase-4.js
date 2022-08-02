// clase 4
// mostrar letra por letra segun segundos 
// vamos a ver que sale

// const mostrarLetras = ( texto , timeout, funct) => {
//     let a = 0
//     if(a < texto.length){
//         const time = setInterval(() => {
//             console.log(texto[a])
//             a++
//             if(a == texto.length){
//                 funct()
//                 clearInterval(time)
//             }
//         },timeout);
//     }
// }

// const frase = "Hola me llamo Francisco"
// const separadas = [...frase]
// const fin = () => console.log("Terminé")

// // mostrarLetras( separadas ,0 , fin)
// // mostrarLetras( separadas ,250 , fin)
// mostrarLetras( separadas ,500, fin)



/// archivos sincronas

// const agregar = fs.appendFileSync("./clase-04/fyh.txt", fecha)
//const fs = require("fs")
const fecha = Date()
// try {
//     fs.writeFileSync("./clase-04/fyh.txt", fecha)
//     const fileData = fs.readFileSync("./clase-04/fyh.txt","utf-8")
//     console.log(fileData)
// } catch (error) {
//     console.log(`el archivo no existe ${error}`)
// }

// archivos asincronicas
// los calbacks siempre reciben primero el error (REJECT) y luego el resulado positivo
// en los colbacks las funciones siempre se colocan a lo último, al final

// fs.readFile("./clase-04/fyh.txt","utf-8", (error, contenido) => {
//     if(error) {
//         console.log("Hubo un error",error)
//     } else {
//         console.log(contenido)
//     }
// })


// fs.readFile("./clase-04/fyh.txt","utf-8", (error, contenido) => {
    //     if(error) {
        //         console.log("Hubo un error",error)
        //     } else {
            //         console.log(contenido)
            //     }
            // })
            
            
            
            // const example = fs.promises.readFile("./clase-04/fyh.txt","utf-8").then((fileData)=>{
            //     console.log(fileData)
            // }).catch(err => console.log(err))


            // function leerTC() {
            //     fs.promises.readFile("./clase-04/fyh.txt","utf-8")
            //     .then((fileData)=>{
            //         console.log(fileData)
            //     })
            //     .catch(err => console.log(err))
            // }
            // leerTC()
            const fs = require("fs")
            
            // async function leerTA() {
            //     try {
            //         await fs.writeFileSync("./clase-04/fyh.txt", fecha)
            //         const contenido = await fs.promises.readFile("./clase-04/fyh.txt","utf-8")
            //         //console.log(contenido)
            //         return contenido
            //     } catch (error) {
            //         console.log(error)
            //     }            
            // }
            // async function manipularArchivos() {
            //     const contenido = await leerTA()
            //     console.log("Horario:", contenido)
            // }

            

            //{curso: “coderhouse”}

            
             const variable = { author: `Linda` }
                fs.promises.writeFile("./info.txt", JSON.stringify(variable)).then(()=>{
                // console.log('escrito)
                }).catch(err => console.log(err))
                    
                fs.promises.readFile("./info.txt", "utf-8").then((fileData)=>{
                    console.log(fileData)
                    // modificarlo
                    // fs.promises.writeFile('info.txt', ----) escribirlo con las modificaciones
                    // fs.promises.writeFile('package.json.coder', ----)  escribir el nuevo archivo
                }).catch(err => console.log(err))




