const express = require('express')
const router = require('./router')

// servidor
const app = express()
app.use('/cargar', express.static('public'))
app.use('/api/productos', router)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto http://localhost:${PORT}}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
