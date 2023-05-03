export default class Products {
    constructor() {
        this.products = []
    }
    addProduct(newProduct) {
        this.products.push(newProduct)
    }
    getProductListForShowIt() {
        return [...this.products]
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