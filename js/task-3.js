/*
Функція отримує три параметри (ширина контенту, падінг, бордер).
Видаляє "px" і перетворює їх на числа.
Додає ширину контенту до двох разів ширини падінгу і бордера (бо вони є з обох боків).
Повертає загальну ширину елемента.

1. оголосити функцію getElementWidth з параметрами content, padding, border
2. Присвоїти окремі змінні для виключно числових данних. Для цього слід використати метод Number.parseFloat, щоб отримати дані без px
3. Вирахувати загальну ширину контенту за принципом: content + padding + padding (бо це падінги і бордери з обох сторін) + border + border

Розрахунок загальної ширини: За умовами завдання, використовується модель border-box, що означає, що контент, падінги та бордери вже входять до загальної ширини елемента.

Формула:

загальна ширина = ширина контенту + (2 * ширина падінгу) + (2 * ширина бордера)
Чому двічі? Бо падінг і бордер є з обох сторін елемента: зліва і справа, тому потрібно помножити на 2.


*/

function getElementWidth(content, padding, border) {
   
    // Перетворити значення на числа, відкидаючи "px" з кінця кожного значення
    const contentWidth = Number.parseFloat(content);
    const paddingWidth = Number.parseFloat(padding);
    const borderWidth = Number.parseFloat(border);

    // Обчислити загальну ширину елемента
    const totalWidth = contentWidth + (paddingWidth * 2) + (borderWidth * 2);

    // Обчислити загальну ширину елемента
    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200


// Або скорочена версія

/*function getElementWidth(content, padding, border) {
    return Number.parseFloat(content) + (Number.parseFloat(padding) *2) + (Number.parseFloat(border) *2)
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200 */