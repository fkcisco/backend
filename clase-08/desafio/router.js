const express = require('express')
const { Router } = express

const ClassProducto = require('./classProductos')

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

// router de productos
const router = new Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

// Muestra todos los productos --> funciona oka
router.get('/', (req, res) => {
    res.json(listadoProductos.enlistarProductos())
})
// Muestra producto por id single --> funciona oka
router.get('/:id', (req, res) => {
    res.json(listadoProductos.enlistarSingle(req.params.id))
})
// Elimina un producto por el id --> funciona oka
router.delete('/:id', (req, res) => {
    res.json(listadoProductos.eliminarProducto(req.params.id))
})
// Agrega un producto --> funciona oka pero no redirecciona 
// desde el formulario y no llego a mostrar el mensaje con el id
// modificado.
router.post('/', (req, res) => {
    res.json(listadoProductos.agregarProducto(req.body))
})
// Actualiza desde Postman (put) --> funciona oka
router.put('/:id', (req, res) => {
    res.json(listadoProductos.actualizarProducto(req.body, req.params.id))
})


module.exports = router;