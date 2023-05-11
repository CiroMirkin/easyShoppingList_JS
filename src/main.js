import MetricsManager from './balanceManager.js'
import Products from './products.js'
import ShowBalance from './showBalance.js'
import ShowProducts from './showProducts.js'

const products = new Products()
const showProducts = new ShowProducts()

const metricsManager = new MetricsManager()
const showBalance = new ShowBalance()
const updateProductMetrics = () => {
    const productList = products.getProductListForMetrics()
    metricsManager.updateProductMetrics(productList)
    const productMetrics = metricsManager.getProductMetrics()
    showBalance.showProductMetrics(productMetrics)
}
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
    updateProductMetrics()
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
        const productId = getProductIdForMarkAProduct(e)
        const productPrice = getProductPrice(productId)
        products.checkAProduct(productId, productPrice)
        updateMoneyMetricsOfTheUser()
        updateMoneyMetrics()
        updateProductMetrics()
    }
    else if (isTheDeleteButton(e.target)) {
        const productId = getProductIdForDeleteOrEditAProduct(e)
        products.deleteThisProduct(productId)
        showProducts.showProductList(products.getProductListForShowIt())
        updateMoneyMetricsOfTheUser()
        updateMoneyMetrics()
        updateProductMetrics()
    }
})
const isTheCheckButton = (element) => {
    const icon = '<i class="bi bi-check-lg"></i>'
    return (element.outerHTML).trim() == icon || (element.innerHTML).trim() == icon
}
const getProductPrice = (productId) => {
    const productPriceInput = document.getElementById(`productPriceInput-${productId}`)
    if(!productPriceInput.value){
        return 0
    }
    return parseFloat(productPriceInput.value)
}
const isTheDeleteButton = (element) => {
    const whenTheUserClickedOnTheButtonIcon = element.parentElement
    const buttonType = whenTheUserClickedOnTheButtonIcon.attributes.buttonType.nodeValue
    return buttonType == 'delete'
}
const getProductIdForMarkAProduct = (e) => e.target.offsetParent.offsetParent.parentElement.id
const getProductIdForDeleteOrEditAProduct = (e) => e.target.offsetParent.offsetParent.parentElement.id
const updateMoneyMetricsOfTheUser = () => {
    const productList = products.getProductListForMetrics()
    metricsManager.updateAmountOfMoneyToPay(productList)
    metricsManager.changeSurplus()
}
const balanceForm = document.getElementById('balanceForm')
balanceForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const balanceInput = document.getElementById('balanceInput')
    if(!balanceInput.value) {
        metricsManager.changeUserAvaibleMoney(0)
    }
    else {
        const balance = parseFloat(balanceInput.value)
        metricsManager.changeUserAvaibleMoney(balance)
    }
    updateMoneyMetrics()
})
const updateMoneyMetrics = () => {
    const userBalance = metricsManager.getTheUserBalance()
    showBalance.showMoneyMetrics(userBalance)
}
