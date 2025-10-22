export function formatMoney(money) {
    return money.toString().replace(/\B(?=(\d{4})+$)/g, ",");
}
