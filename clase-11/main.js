const express = require("express")
const { Server: HttpServer  } = require("http")
const { Server: IOServer } = require("socket.io")

const { join } = require('path')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static(join(__dirname, 'public')))

// app.use(express.static("public"))

io.on('connection', socket => {
  console.log('Nuevo cliente conectado')

  socket.on("mensajeEnviado", mensajes =>{
    io.sockets.emit("mensajesRecibidos", mensajes)
    })

})


const connectedServer = httpServer.listen(8080, ()=>{
    console.log("Servidor http con web sockets listo")
})
connectedServer.on("error", error => console.log)


// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, '/index.html'))
// })


// const PORT = process.env.PORT || 8080
// app.listen(PORT,()=>{
//     console.log( `server on in http://localhost:${PORT}` )
// })






