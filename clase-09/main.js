// motores de plantillas
const express = require("express")
const {engine} = require("express-handlebars")


const app = express()
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views","./views")

// se ingresa mediante enpoint (acceso mediante http)

app.get("/",(req,res)=>{
    res.render("datos", {nombre:"Francisco", apellido:"Robledo"})
})

const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log( `server on in http://localhost:${PORT}` )
})


