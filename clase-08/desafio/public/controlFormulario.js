const formulario = document.getElementById('cargar-producto')

formulario.addEventListener('submit', async(e) => {
    e.preventDefault();

    const titulo = document.getElementById('tituloProducto').value
    const precio = document.getElementById('precioProducto').value
    const imagen = document.getElementById('thumbnailProducto').value

    if(!titulo) {
        alert("el campo titulo no puede estar vacio")
    } else if(!precio) {
        alert ("el campo precio no puede estar vacio")
    } else if(!imagen) {
        alert("el campo Foto URL no puede estar vacio")
    }

    const nuevoProducto = {titulo, precio, imagen}
    
    try {
       const request = await fetch('/api/productos', {
            method: "POST",
            body: JSON.stringify(nuevoProducto),
            headers: { 'Content-Type': 'application/json'}, 
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    catch (error) {
        return new Error(error)
    }
     
})