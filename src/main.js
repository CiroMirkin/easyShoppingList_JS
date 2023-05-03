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

const productListElement = document.getElementById('productList')
productListElement.addEventListener('click', e => {
    if(isTheCheckButton(e.target)) {
        const productId = getProductId(e)
        const productPrice = getProductPrice(productId)
        
    }
})
const isTheCheckButton = (element) => {
    const icon = '<i class="bi bi-check-lg"></i>'
    return (element.outerHTML).trim() == icon || (element.innerHTML).trim() == icon
}
const getProductId = (e) => e.target.offsetParent.offsetParent.parentElement.id
const getProductPrice = (productId) => {
    const productPriceInput = document.getElementById(`productPriceInput-${productId}`)
    return Number(productPriceInput.value) || 0
}