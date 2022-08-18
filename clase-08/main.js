const express = require("express")
const { Router } = express

const app = express()
const mascotas= Router()
const personas= Router()

// midlewords
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const listaPersonas = [
    {
        "id": 1,
        "nombre": "francisco",
        "apellido": "Robledo",
        "edad": 35,
    },
    {
        "id": 2,
        "nombre": "Norma",
        "apellido": "Francos",
        "edad": 31, 
    }
]

const listaMascotas = [
    {
        "id": 1,
        "especie": "gato",
        "nombre": "Nene"
    },
    {
        "id": 2,
        "especie":"gato",
        "nombre": "Mia"
    },

]

mascotas.get("/mascotas", (req,res)=> {
    res.send(listaMascotas)
})

mascotas.post("/mascotas", (req,res)=> {   
    const { nombre, edad } = req.body
    if(!nombre || !edad) {
        res.status(400).send("falta data")
    }
    listaPersonas.push({nombre, edad})
    res.send("Cargado Correctamente")
})

personas.get("/listado", (req,res)=> {
    res.send(listaPersonas)
})






personas.post("/cargar", (req, res, next)=> {       
    const { nombre, edad } = req.body  
    console.log(req.body)  
    if(!nombre || !edad) {
        res.status(400).send("faltan los datos para cargar")
    }
    next()
}, (req,res)=>{
    listaPersonas.push({nombre, edad})
    res.send("Cargado Correctamente")
})










//path = es la ruta
app.use("/mascotas", mascotas)
app.use("/personas", personas)

const PORT = 8080
app.listen(PORT,()=>{
    console.log( `server on in http://localhost:${PORT}` )
})















/// codigo profe

const express = require('express')
const multer = require('multer')

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))


// multer config
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads')
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}-${file.originalname}` )
    }
})

const upload = multer({ storage: storage  })

app.post('/uploadfile', upload.single('file'),  (req, res, next) => {
    const file = req.file

    if(!file){
        // caso de error
        const error = new Error('Por favor carga un archivo valido')
        error.httpStatusCode = 400
        return next(error)
    }

    //caso de exito
    res.send(file)
})

const PORT  = 8080
app.listen(PORT, () => {
    console.log('server on')
})
