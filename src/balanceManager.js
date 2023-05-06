export default class BalanceManager {
    constructor() {
        this.userBalance = {
            availableMoney: 0,
            moneyToPay: 0,
            surplus: 0
        }
    }
    updateProductsBalance(productList) {
        let moneyToPay = 0
        productList.forEach(product => {
            console.log(product)
            console.log(moneyToPay)
            moneyToPay = product.price + moneyToPay
        })
        this.userBalance.moneyToPay = moneyToPay
        console.table(this.userBalance)
    }
}