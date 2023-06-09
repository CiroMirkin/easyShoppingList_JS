export default class MetricsManager {
    constructor() {
        this.userBalance = {
            availableMoney: 0,
            moneyToPay: 0,
            surplus: 0
        }
        this.productMetrics = {
            amountOfProducts: 0,
            amountOfProductsThatTheUserHas: 0,
            amountOfProductsThatTheUserDoesntHave: 0
        }
    }
    getTheUserBalance(){
        return {...this.userBalance}
    }
    changeUserAvaibleMoney(avaibleMoney) {
        avaibleMoney = parseFloat(avaibleMoney)
        this.userBalance.availableMoney = this.changePriceFormat(avaibleMoney)
    }
    updateAmountOfMoneyToPay(productList) {
        let moneyToPay = 0
        productList.forEach(product => {
            moneyToPay = product.price + moneyToPay
        })
        this.userBalance.moneyToPay = this.changePriceFormat(moneyToPay)
    }
    changeSurplus(){
        const availableMoney = this.parseNumber(this.userBalance.availableMoney)
        const moneyToPay = this.parseNumber(this.userBalance.moneyToPay)
        if(!!availableMoney && !!moneyToPay) {
            this.userBalance.surplus = this.changePriceFormat(availableMoney - moneyToPay)
        }
        
    }
    changePriceFormat(price) {
        return new Intl.NumberFormat('es', { style: 'currency', currency: 'ARG' }).format(price)
    }
    parseNumber(string) {
        return parseFloat((string).toString().split(' ')[0].split(',').join('.'))
    }
    updateProductMetrics(productList) {
        const amountOfProducts = productList.length
        let amountOfProductsThatTheUserHas = 0
        productList.forEach(product => {
            if(product.wasGetIt) {
                amountOfProductsThatTheUserHas += 1
            }
        })
        const amountOfProductsThatTheUserDoesntHave = (amountOfProducts - amountOfProductsThatTheUserHas)
        this.productMetrics = {
            amountOfProducts,
            amountOfProductsThatTheUserHas,
            amountOfProductsThatTheUserDoesntHave
        }
    }
    getProductMetrics() {
        return {...this.productMetrics}
    }
}