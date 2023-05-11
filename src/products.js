export default class Products {
    constructor() {
        this.products = []
    }
    addProduct(newProduct) {
        this.products.push(newProduct)
    }
    deleteThisProduct(productId) {
        this.products = this.products.filter(product => product.id !== productId)
    }
    getProductListForShowIt() {
        return [...this.products]
    }
    getProductListForMetrics() {
        return [...this.products].map(product => ({ 
            price: product.price, 
            wasGetIt: product.wasGetIt
        }))
    }
    checkAProduct(productId, productPrice) {
        this.products = this.products.map(product => {
            if(product.id == productId) {
                product.wasGetIt = true;
                product.price = productPrice;
                return product
            }
            return product
        })
    }
}