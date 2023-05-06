export default class BalanceManager {
    constructor() {
        this.userBalance = {
            availableMoney: 0,
            moneyToPay: 0,
            surplus: 0
        }
    }
    getTheUserBalance(){
        return {...this.userBalance}
    }
    changeUserBalance(newUserBalance) {
        newUserBalance = parseFloat(newUserBalance)
        this.userBalance.availableMoney = this.changePriceFormat(newUserBalance)
    }
    updateProductsBalance(productList) {
        let moneyToPay = 0
        productList.forEach(product => {
            moneyToPay = product.price + moneyToPay
        })
        this.userBalance.moneyToPay = this.changePriceFormat(moneyToPay)
    }
    changePriceFormat(price) {
        return new Intl.NumberFormat('es', { style: 'currency', currency: 'ARG' }).format(price)
    }
    changeSurplus(){
        const availableMoney = this.parseNumber(this.userBalance.availableMoney)
        const moneyToPay = this.parseNumber(this.userBalance.moneyToPay)
        if(!!availableMoney && !!moneyToPay) {
            this.userBalance.surplus = this.changePriceFormat(availableMoney - moneyToPay)
        }
        
    }
    parseNumber(string) {
        return parseFloat((string).toString().split(' ')[0].split(',').join('.'))
    }
}