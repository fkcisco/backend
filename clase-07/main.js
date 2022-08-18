//const { request } = require("express");
const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const frase ="Hola Mundo como estan"

// creando endPoint (app.get)
// Peticiones tipo GET

app.get("/api/query", (req, res) => {
    console.log(req.query)
    const data = req.query
    !data.name && res.sendStatus(400).send('debes enviar un nombre')
    res.send(data);
});


app.get("/api/frase",(req, res) =>{
    res.send(`<h1>La frase es: ${frase} </h1>`)
})

app.get("/api/frase/:num",(req, res) =>{
    let posicion = req.params.num
    res.send(`<h1>La letra ubicada en esa posicion es: ${frase.charAt(posicion)}</h1>`)
})

app.get("/api/palabras/:num",(req, res) =>{
    let posicion = req.params.num
    !posicion && res.sendStatus(400).send("no se ingreso un numero" )
    res.send(frase.split(" ")[posicion])
})

// Peticiones tipo POST APPI REST QUE SE COMUNICA POR EL PUERTO HTTP (VERBOS BÁSICOS: POST,CREATE,DELETE,PUT)
// crear endpoint necesarios para realizar todas las operaciones de una lista de usuarios
//  Crear usuario

const listaUsuarios = []


app.post("/usuario", (req, res)=>{
    const data = req.body
    !data && res.sendStatus(400)
    listaUsuarios.push(data)
     res.send(listaUsuarios)
    }
)
//  Listar todos lo usuarios
app.get("/usuario", (req,res)=>{
    res.send(listaUsuarios)
    
})
//  Eliminar todos los usuarios
app.delete("/usuario", (req,res)=>{
    listaUsuarios = []
    res.send(listaUsuarios)
})

//  Modificar 1 usuario por id
app.put("/usuario/:id", ()=>{
    
})
//  Eliminar 1 usuario por id
app.delete("/usuario/:id", ()=>{
    
})
//  Mostrar 1 solo usuario
app.get("/usuario/:id", ()=>{
    
})

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`escuchando del puerto ${PORT}`)
})