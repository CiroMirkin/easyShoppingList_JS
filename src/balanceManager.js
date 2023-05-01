export default class BalanceManager {
    constructor() {
        this.userBalance = {
            availableMoney: 0,
            moneyToPay: 0,
            surplus: 0
        }
        this.productsBalance = {
            totalAmountOfProduct: 0,
            totalAmountOfProductItHas: 0,
            totalAmountOfProductItDontHave: 0,
        }
    }
}