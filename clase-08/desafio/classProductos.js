class ClassProducto {
  constructor(productos) {
      this.productos = productos
      this.id = 4
  }

  enlistarProductos() {
    return [...this.productos]
}

  enlistarSingle(id) {
      const producto = this.productos.find(productSingle => productSingle.id == id)
      // con un ternario hago el return del true o false
      return producto || { error: 'El producto no se encontro, probar otro ID' }
  }
  
  eliminarProducto(id) {
    const producto = this.productos.findIndex(productSingle => productSingle.id == id)
    // con un if compruebo que el resultado de producto es positivo o negativo
    if (producto === -1) {        
        return { error: 'El producto no se encontro, probar otro ID' }
    } else {
        return this.productos.splice(producto, 1)
    }
  }

  agregarProducto(producto) {
      const nuevoId = ++this.id
      const addProducto = { ...producto, id: nuevoId }
      this.productos.push(addProducto )
      return `se agrego el nuevo producto con el id: ${nuevoId}`
  }

  actualizarProducto(producto, id) {
      const newProd = { id: Number(id), ...producto }
      const index = this.productos.findIndex(p => p.id == id)
      if (index === -1) {          
          return { error: 'El producto no se encontro, probar otro ID' }
      } else {
          this.productos[index] = newProd
          return newProd
         
      }
  }

 
}



module.exports = ClassProducto