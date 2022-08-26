const express = require("express")

const app = express()
app.set("view engine", "ejs")

const listaEstudiantes = [
    {nombre: "francisco"},
    {nombre: "nombra"}
]

app.get("/", (req,res)=>{
    res.render("", {name: "francisco", edad: "30"})
})


const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log( `server on in http://localhost:${PORT}` )
})
