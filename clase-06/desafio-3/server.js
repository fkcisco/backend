const express = require("express")
const fs = require("fs")

const app = express()

const contenido = [
    {
    id: 1,
    titulo: "Zapatilla Nike",
    precio: 15000,
    thumbnail: "https://madryn-ads.com.ar/react/img/Jordan-Low-rojas.jpg"
    },
    {
    id: 2,
    titulo: "Zapatilla Puma",
    precio: 12000,
    thumbnail: "https://madryn-ads.com.ar/react/img/Puma-RSX.jpg"
    },
    {
    id: 3,
    titulo: "Zapatillas Adidas",
    precio: 1500,
    thumbnail: "https://madryn-ads.com.ar/react/img/adidas.jpg"
    },
    {
    id: 4,
    titulo: "Medias Adidas",
    precio: 1300,
    thumbnail: "#"
    },
    {
    id: 5,
    titulo: "Medias Puma",
    precio: 1400,
    thumbnail: "#"
    },
    {
    id: 6,
    titulo: "Medias Nike",
    precio: 1300,
    thumbnail: "#"
    },
    {
    id: 7,
    titulo: "Medias Converce",
    precio: 1200,
    thumbnail: "#"
    },
    {
    id: 8,
    titulo: "Medias Medias",
    precio: 1000,
    thumbnail: "#"
    }

    
]

let carrito = new Array

class Contenedor {
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo 
    }

    async consultarCrearArchivo() {
        try {    
          await fs.promises.access(this.nombreArchivo);    
          console.log('El Archivo ya Existe en la Carpeta');    
        } catch (error) {    
          try {    
            await fs.promises.writeFile(this.nombreArchivo, '[]', 'utf8')   
            await this.cargarInfo();    
            console.log('El Archivo se creo Correctamente')    
          } catch (error) {    
            console.log(error)   
          }    
        }    
      }

      async cargarInfo(){                 
        await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(contenido))
        .then(()=>{ console.log("Información cargada correctamente")})
        .catch(err => console.log(err))
        }

        async getAll(){
            try {
                carrito = JSON.parse(await fs.promises.readFile(this.nombreArchivo, 'utf8'))
                carrito               
            } catch(error) {
                throw new Error(error)
            }
        }   

}

const catalogoProductos = new Contenedor('./productos.txt')

const todoAsincro = async () => {    
    await catalogoProductos.consultarCrearArchivo()
    await catalogoProductos.cargarInfo()
    await catalogoProductos.getAll()
}
todoAsincro() 

const port = process.env.PORT || 8080
const server = app.listen(port,()=>{
    console.log(`server up in local http://localhost:${port}`)
})

app.get('/', (req,res) => {
    res.send(`<a href="/productos">Productos</a><br><a href="/productoRadom">Producto Random</a>`)
})

app.get('/productos', (req,res) => {
    let carritoLista = new Array
    // Nahuel aca lo paso a un array solamente con el titulo nomas, para que quede mas simple
    carrito.forEach((producto)=>{
        carritoLista.push(producto.titulo)
    })
    // si se cambia la variable "carritoLista" por carrito  
    res.send (`${carritoLista}<br><a href="/" style="margin-top: 15px">Volver</a>`)
})

let visitas = 0
app.get('/productoRadom',(req,res)=> {    
    const random = carrito[Math.floor(Math.random() * carrito.length)]  
    // Nahuel aca hago random solamente del valor titulo 
    res.send (`${random.titulo}<br><a href="/" style="margin-top: 15px">Volver</a>`)
})

