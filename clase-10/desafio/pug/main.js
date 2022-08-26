// motores de plantillas
const express = require("express")


const { Router } = express

const router = new Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

const ClassProducto = require('./classProductos')


const app = express()
app.set("views","./views")
app.set("view engine", "pug")


const productos = [
    {
        "id":1,
        "titulo":"Zapatilla Nike",
        "precio":15000,
        "thumbnail":"https://madryn-ads.com.ar/react/img/Jordan-Low-rojas.jpg"
    },
    {
        "id":2,
        "titulo":"Zapatilla Puma",
        "precio":12000,
        "thumbnail":"https://madryn-ads.com.ar/react/img/Puma-RSX.jpg"
    },
    {
        "id":3,
        "titulo":"Zapatillas Adidas",
        "precio":1500,
        "thumbnail":"https://madryn-ads.com.ar/react/img/adidas.jpg"
    },
    {
        "id":4,
        "titulo":"Medias Adidas",
        "precio":1300,
        "thumbnail":"https://madryn-ads.com.ar/react/img/adidas.jpg"
    }
]

const listadoProductos = new ClassProducto(productos)

app.use('/', router)

router.get("/productos",(req,res)=>{
    res.render("productos.pug", { lista: listadoProductos.enlistarProductos()})
})

router.get("/",(req,res)=>{
    res.render("formulario.pug")
})

 app.use(express.json())
 app.use(express.urlencoded({ extended: true }))

router.post('/', (req, res) => {
    res.json(listadoProductos.agregarProducto(req.body))
})


const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log( `server on in http://localhost:${PORT}` )
})
