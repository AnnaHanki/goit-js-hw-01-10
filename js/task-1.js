// 1. Оголосити функцію makeTransaction і два параметри; quantity, pricePerDroid/
// 2. Оголосити змінну totalPrice, яка містить формулу кількості замовлених дронів помножити навартість одного дрона.
// 3. Функція повертає рядок: "You ordered <quantity> droids worth <totalPrice> credits!", де: • <quantity> — це кількість замовлених дроїдів • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів.
// 4. Отже, це return ш шаблонний рядок

function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"


