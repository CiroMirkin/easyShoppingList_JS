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
}