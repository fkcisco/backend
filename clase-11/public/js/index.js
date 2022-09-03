const socket = io.connect()

// esto envia el mensaje al servidor
const input = document.getElementById('input')
input.addEventListener('input', () => {
    socket.emit('mensajeEnviado', input.value)
})
// esto captura los datos del evento
socket.on('mensajesRecibidos', mensajes => {
    document.querySelector('p').innerText = mensajes
});
