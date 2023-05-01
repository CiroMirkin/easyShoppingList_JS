import Products from './products.js'
import ShowProducts from './showProducts.js'

const addProductForm = document.getElementById('addProductForm')
addProductForm.addEventListener('submit', e => {
    e.preventDefault()
    const newProductNameInput = document.getElementById('newProductName') 
    const newProductDescriptionInput = document.getElementById('newProductDescription')
    const newProduct = {
        name: newProductNameInput.value,
        description: newProductDescriptionInput.value
    }
    
    newProductNameInput.value = ''
    newProductDescriptionInput.value = ''
})