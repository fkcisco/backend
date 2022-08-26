const express = require("express")

const app = express()
app.set("views", "./views")
app.set("view engine", "pug")

app.get("/", (req,res)=>{
    res.render("hello.pug", {mensaje: "Hola Endpoint"})
})

app.get("/datos", (req,res)=>{
    const {min,max,value} = req.query
    res.render("medidor.pug",
        {
            min: min,
            max: max,
            value: value
        })
})

const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log( `server on in http://localhost:${PORT}` )
})
