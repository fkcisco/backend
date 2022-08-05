// Usando http
// const http = require("http")
// const getMensaje = () =>{
//     const hora = new Date().getHours()
//     if(hora >= 6 && hora <= 12) {
//         return "Buenos Días"
//      } else if(hora > 13 && hora <= 19){
//         return "Buenas Tardes"
//      } else {
//         return "Buenas Noches"
//      }    
// }
// const server = http.createServer((peticion,respuesta) =>{
//     respuesta.end(getMensaje())
// })
// const connectedServer = server.listen(8000,()=>{
//     console.log("server up in local http://localhost:8000/")
// })

// usando Express
const express = require("express")
const app = express()

// importante agregar el proccess.env a la hora de subir a produccion
const puerto = process.env.PORT || 8080
const server = app.listen(puerto,()=>{
    console.log(`server up in local http://localhost:${puerto}`)
})

app.get('/', (req,res) => {
    res.send (`<h1 style="color:blue;">Bienvenido a mi servidor Express</h1>`)
})

let visitas = 0
app.get('/visitas',(req,res)=> {
    res.send (`Cantidad de Visitas ${visitas++}`)
})

app.get('/fyh', (req,res) => {
    const hora = new Date()
    res.send(hora)
})






