export default class ShowBalance {
    showMoneyMetrics(moneyMetrics) {
        const moneyMetricsElement = document.getElementById('moneyMetrics')
        moneyMetricsElement.innerHTML = `
            <li class="list-group-item list-group-item-success d-flex justify-content-between align-items-center">
            Saldo disponible <span>${moneyMetrics.availableMoney}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Dinero a pagar <span>${moneyMetrics.moneyToPay}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Dinero sobrante <span>${moneyMetrics.surplus}</span>
            </li>
        `
    }
}