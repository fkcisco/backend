// motores de plantillas
const express = require("express")

const app = express()
const exphbs = require("express-handlebars")

app.engine("handlebars", exphbs())
app.set("view engine", "handlebars")
app.set("views","./views")

// se ingresa mediante enpoint (acceso mediante http)

app.get("/",(req,res)=>{
    res.render("vistas", {datos})
})

const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log( `server on in http://localhost:${PORT}` )
})


