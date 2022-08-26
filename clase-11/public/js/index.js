const socket = io.connect()

// esto envia el mensaje al servidor
const input = document.querySelector('input')
input.addEventListener('input', () => {
    socket.emit('mensaje', input.value);
});
// esto captura los datos del evento
socket.on('mensajes', data => {
    document.querySelector('p').innerText = data
});
