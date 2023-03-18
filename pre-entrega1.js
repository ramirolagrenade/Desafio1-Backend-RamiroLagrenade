class ProductManager {

    constructor() {
        this.products = []
    }


    getProducts() {
        return this.products
    }

    validarDatos(productos) {
        let verificacion = Object.values(productos)
        if (!verificacion.includes(undefined)) {
            return true
        }
        else {
            return false
        }
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        let idProducto = (this.getProducts()).length

        const valCode = []

        let productos = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: ++idProducto
        }

        if (this.validarDatos(productos)) {

            let producto_code = productos.code

            let producto = this.products.find(producto => producto.code === producto_code)

            if (!producto) {

                valCode.push(productos.code)
                this.products.push(productos)
                return this.products

            } else {
                return console.log('Este code ya se a registrado.')
            }

        }
        else {
            return console.log('Error, Unos de los campos esta vacio.')
        }
    }


    getProductById(IdProducto) {
        let producto = this.products.find(producto => producto.id === IdProducto)

        if (producto) {
            return producto
        } else {
            return console.log('Not found')
        }
    }

}

const productManager = new ProductManager()

productManager.addProduct('Play 5', 'Vamo a jugar', 2000, '-----', 123, 10)
productManager.addProduct('Play 5', 'Vamo a jugar', 2000, '-----', 123, 10)
productManager.addProduct('Play 5', 'Vamo a jugar', 2000, '-----', 323, 10)

console.log(productManager.getProducts())
console.log(productManager.getProductById(3))
console.log(productManager.getProductById(1))
