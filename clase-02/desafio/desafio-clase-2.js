class Usuario {
    constructor(name,apellido,mascotas) {
        this.name= name
        this.apellido = apellido        
        this.mascotas = mascotas
        this.libros = []
    }
    getFullName(){
        return `Hola me llamo ${this.name} ${this.apellido}`
    } 
    addMascota(nombre){
        return this.mascotas.push(nombre)
    }
    countMascotas(){
       return this.mascotas.length
     }
    addBook(titulo,autor) {
        this.libros.push({titulo:titulo,autor:autor})        
    }
    getBookName(){
        return this.libros.map((libr) =>libr.titulo)   
    }
}

const francisco = new Usuario(
                        "Francisco",
                        "Robledo",
                        ['Nene', 'Mia'])

console.log(francisco.getFullName())
francisco.addMascota("felipe")
console.log(francisco.countMascotas())
francisco.addBook("Baila,Baila,Baila", "Haruki Murakami")
francisco.addBook("La Metamorfosis", "Franz Kafka")
francisco.addBook("Mi Planta Naranja Lima", "José Mauro de Vasconcelos")
console.log(francisco.getBookName())


