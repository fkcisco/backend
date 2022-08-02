const fs = require('fs');

class Contenedor {
    constructor(fileName){
        this.fileName = fileName;
    }

    async createIfNotExist(){
        try{
            await fs.promises.access(this.fileName)
        }catch(err){
            await fs.promises.writeFile(this.fileName, '[]', 'utf8');
        }
    }

    async getAll(){
        try {
            return JSON.parse(await fs.promises.readFile(this.fileName, 'utf8'));
        } catch (error) {
            throw new Error(error);
        }
    }

    async save(content){
        try {
            const data = await this.getAll();
            content.id = (data[data.length - 1]?.id || 0) + 1;
            data.push(content);
            await fs.promises.writeFile(this.fileName, JSON.stringify(data, null, 2), 'utf8');
        } catch (error) {
            if(error.message.includes('ENOENT')){
                await this.createIfNotExist();
                return this.save(content);
            } else {
                throw new Error(error);
            }
        }
    }

    async getById(id){
        try {
            const data = await this.getAll();
            return data.find(item => item.id == id);
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteById(id){
        try {
            const data = await this.getAll();
            const newData = data.filter(item => item.id != id);
            await fs.promises.writeFile(this.fileName, JSON.stringify(newData, null, 2), 'utf8');
        } catch(error){
            throw new Error(error);
        }
    }

    async deleteAll(){
        try {
            await fs.promises.writeFile(this.fileName, '[]', 'utf8');
        } catch(error){
            throw new Error(error);
        }
    }
}

const test = new Contenedor('productos.txt');

const main = async () => {

    //Guardamos algunos productos
    await test.save({ title: 'Producto 1', price: 100, thumbnail: 'https://picsum.photos/200/300' });
    await test.save({ title: 'Producto 2', price: 100, thumbnail: 'https://picsum.photos/200/300' });
    await test.save({ title: 'Producto 3', price: 100, thumbnail: 'https://picsum.photos/200/300' });

    //Obtenemos todos los productos
    let products = await test.getAll();
    console.log(products);

    //Obtenemos un producto por id
    const product = await test.getById(1);
    console.log('GET BY ID: ', product);

    //Eliminamos un producto por id
    await test.deleteById(1);
    products = await test.getAll();
    console.log('Sin el Producto con ID 3: ', products);

    //Eliminamos todos los productos
    await test.deleteAll();
    products = await test.getAll();
    console.log('Sin Productos: ', products);
}

main();