import BalanceManager from './balanceManager.js'
import Products from './products.js'
import ShowBalance from './showBalance.js'
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
        products.checkAProduct(productId, productPrice)
        updateBalance()
        updateMoneyMetrics()
    }
})
const isTheCheckButton = (element) => {
    const icon = '<i class="bi bi-check-lg"></i>'
    return (element.outerHTML).trim() == icon || (element.innerHTML).trim() == icon
}
const getProductId = (e) => e.target.offsetParent.offsetParent.parentElement.id
const getProductPrice = (productId) => {
    const productPriceInput = document.getElementById(`productPriceInput-${productId}`)
    if(!productPriceInput.value){
        return 0
    }
    return parseFloat(productPriceInput.value)
}
const balanceManager = new BalanceManager()
const updateBalance = () => {
    const productList = products.getProductForBalance()
    balanceManager.updateProductsBalance(productList)
}
const showBalance = new ShowBalance()
const updateMoneyMetrics = () => {
    const userBalance = balanceManager.getTheUserBalance()
    showBalance.showMoneyMetrics(userBalance)
}