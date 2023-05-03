import Products from './products.js'
import ShowProducts from './showProducts.js'

const products = new Products()
const showProducts = new ShowProducts()

const getNewProductID = () => {
    return Date.now().toString(35) + Math.random().toString(36).slice(2)
}

const addProductForm = document.getElementById('addProductForm')
addProductForm.addEventListener('submit', e => {
    e.preventDefault()
    const newProductNameInput = document.getElementById('newProductName') 
    const newProductDescriptionInput = document.getElementById('newProductDescription')
    const newProduct = {
        id: getNewProductID(),
        name: newProductNameInput.value,
        description: newProductDescriptionInput.value,
        wasGetIt: false
    }
    products.addProduct(newProduct)
    showProducts.showProductList(products.getProductListForShowIt())
    clearTheFormValues()
})
const clearTheFormValues = () => {
    const newProductNameInput = document.getElementById('newProductName') 
    const newProductDescriptionInput = document.getElementById('newProductDescription')
    newProductNameInput.value = ''
    newProductDescriptionInput.value = ''
}