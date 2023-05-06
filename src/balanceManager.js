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
}