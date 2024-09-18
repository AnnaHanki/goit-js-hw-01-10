/*
1. Оголосити функцію getShippingMessage з параметрами country, price, deliveryFee
2. Оголосити змінну totalprice, яка включає суму вартості товару та його достваки
3. Функція повертає рядок: "Shipping to <country> will cost <totalPrice> credits"

*/

function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;

    return `Shipping to ${country} will cost ${totalPrice} credits`
}

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
