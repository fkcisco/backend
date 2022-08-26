const socket = io.connect();

const button = document.getElementById("submit")

button?.addEventListener("click", ()=>{
    const message = {
        nombre: document.getElementById("nombre").value,
        mensaje: document.getElementById("mensaje").value
    }
    socket.emit("nuevo-mensaje", message)
    return false

})

// const addMessage = ()=>{
//     const message = {
//         nombre: document.getElementById("nombre").value,
//         mensaje: document.getElementById("mensaje").value
//     }
//     console.log(message)

//     socket.emit("nuevo-mensaje", message)
//     return false
// }

socket.on("nuevo-mensaje-chat", mensajes =>{   
    
    const html = mensajes.map(mensaje=>{
        return (`<div>nombre: ${mensaje.nombre}: <em>${mensaje.mensaje}</em></div>`)
    }).join(" ")
    document.getElementById("chat").innerHTML = html

    
    })


//     const socket = io.connect();

// const button = document.getElementById("submit")

// button?.addEventListener("click", ()=>{
//     const message ={
//         name: document.getElementById("name").value,
//         message: document.getElementById("message").value,
//     } 
//     console.log(message)
//     socket.emit('new-message', message)
// })

// socket.on("new-chat-message", messages =>{
//     const html = messages.map(message => {
//         return (`<div><strong>${message.name}</strong>:<em>${message.message}</em></div>`)
//     }).join(' ')

//     document.getElementById("chat").innerHTML = html
// })



    

