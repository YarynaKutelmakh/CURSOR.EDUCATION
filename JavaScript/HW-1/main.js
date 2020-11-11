const chocolatePrice = 15.678;
const bookPrice = 123.965;
const teaPrice = 90.2345;
const totalPrice = chocolatePrice + bookPrice + teaPrice;
const sumFloat = Math.floor(chocolatePrice) + Math.floor(bookPrice) + Math.floor(teaPrice);
const cashCustomer = 500;
const sale = (Math.random() * 101).toFixed(0);
const sumToPay = totalPrice - (totalPrice / 100 * sale);
const cost = totalPrice / 2;
const profit = cost - (totalPrice - sumToPay.toFixed(2));
const isEven = sumFloat % 2 === 0;



console.log(Math.max(chocolatePrice, bookPrice, teaPrice));
console.log(Math.min(chocolatePrice, bookPrice, teaPrice));
console.log(totalPrice);
console.log(sumFloat);
console.log(Math.ceil(sumFloat / 100) * 100);
console.log(cashCustomer - totalPrice);
console.log((totalPrice / 3).toFixed(2));
console.log(`Знижка: ${sale}%`);
console.log(`Сума до оплати: ${+sumToPay.toFixed(2)}`);
console.log(`Чистий прибуток: ${+profit.toFixed(2)}`);

document.writeln(`<i>Максимальне число: ${Math.max(chocolatePrice, bookPrice, teaPrice)} <br>
                Мінімальне число: ${Math.min(chocolatePrice, bookPrice, teaPrice)} <br> Вартість всіх товарів: ${totalPrice} <br> 
                Заокруглена вартівсть: ${sumFloat} <br> Сума всіх товарів (округлена в меншу сторону) є парним числом: ${isEven} <br> 
                Сума решти: ${cashCustomer - totalPrice} <br> Cереднє значення цін : ${(totalPrice / 3).toFixed(2)} <br>
                <b>Знижка: ${sale}% <br> Сума до оплати: ${+sumToPay.toFixed(2)} <br> Чистий прибуток: ${+profit.toFixed(2)}</b></i>`);

