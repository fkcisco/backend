const fs = require("fs")

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
    titulo: "Medias Adidas",
    precio: 1500,
    thumbnail: "https://madryn-ads.com.ar/react/img/adidas.jpg"
    }
]

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
            await fs.promises.writeFile(this.nombreArchivo, '[]', 'utf8');    
            await this.cargarInfo();    
            console.log('El Archivo se creo Correctamente');    
          } catch (error) {    
            console.log(error);    
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
            const resultado = JSON.parse(await fs.promises.readFile(this.nombreArchivo, 'utf8'));
            return console.log(resultado)
        } catch(error) {
            throw new Error(error)
        }
    }

    async getById(id){
        try {
            const data = await this.getAll();
            const resultado = data.find(item => item.id == id);
            console.log(resultado)
        } catch (error) {
            throw new Error(error);
        }
    }

    async save(contenido) {
        try {
            const data = await this.getAll()
                
                if(data.length < 1) {
                    const idNuevo = 1
                    const cargar = {id:idNuevo,...contenido} 
                    data.push(cargar)
                    await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(data)) 
                    .then(()=>{ console.log(`Se agrego el producto correctamente con el id: ${idNuevo}`)})
                    .catch(err => console.log(err))
                
                } else {
                    const cantidad = data[data.length - 1]
                    console.log(cantidad)
                    const idNuevo = cantidad.id + 1
                    const cargar = {id:idNuevo,...contenido} 
                    data.push(cargar)     
                    await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(data)) 
                    .then(()=>{ console.log(`Se agrego el producto correctamente con el id: ${idNuevo}`)})
                    .catch(err => console.log(err))
                }      
             
        } catch (error) {             
            throw new Error(error);
             
        } 
    }


    async deleteAll() {         
        const data = await this.getAll()
        try { 
            if(data.length < 1) {
                console.log("el carrito ya se encuentra vacio")
            } else {
            const borrar = []         
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(borrar))
            .then(()=> console.log("Carrito vacio"))
            }
        } catch (error) {
            throw new Error("error al borrar");
       }
    }
    
    async deleteById(id) {
       try {
            const data = await this.getAll();
            const newData = data.filter(item => item.id != id)
            data.push(newData)
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(data))
            .then(()=>{ console.log(`Se Elimino correcatamente el id: ${id}`)})
        } catch (error) {
            throw new Error("error al borrar")
       }

    }
}



const todoAsincro = async () => {
const catalogoProductos = new Contenedor('./productos.txt')
await catalogoProductos.consultarCrearArchivo()
await catalogoProductos.cargarInfo()
// await catalogoProductos.save({titulo:"Zapatilla Agregada 10","precio":15000,thumbnail:"#"})
// await catalogoProductos.getById(2)
// await catalogoProductos.deleteById(1)
await catalogoProductos.getAll()


}
todoAsincro()     