const chocolate = 15.678,
      book = 123.965,
      tea = 90.2345;

let  sum = chocolate + book + tea,
     sumFloat = Math.floor(chocolate) + Math.floor(book) + Math.floor(tea),
     cashCustomer = 500,
     sale = (Math.random() * 101).toFixed(0),
     sumToPay = (sum - (sum / 100 * sale)).toFixed(2),
     cost = sum / 2,
     profit = cost - sumToPay;

console.log(Math.max(chocolate, book, tea));
console.log(Math.min(chocolate, book, tea));
console.log(sum);
console.log(sumFloat);
console.log(Math.ceil(sumFloat / 100) * 100);

let evenOrOdd;
if (sumFloat % 2) {
    evenOrOdd = false;
} else {
    evenOrOdd = true;
}

console.log(cashCustomer - sum);
console.log((sum / 3).toFixed(2));
console.log(`Знижка: ${sale}%`);
console.log(`Сума до оплати: ${sumToPay}`);
console.log(`Чистий прибуток: ${profit.toFixed(2)}`);

document.writeln(`<i>Максимальне число: ${Math.max(chocolate, book, tea)} <br>
                Мінімальне число: ${Math.min(chocolate, book, tea)} <br> Вартість всіх товарів: ${sum} <br> Заокруглена вартівсть: ${sumFloat} <br> 
                Сума всіх товарів (округлена в меншу сторону) є парним числом: ${evenOrOdd} <br> Сума решти: ${cashCustomer - sum} <br> 
                Cереднє значення цін : ${(sum / 3).toFixed(2)} <br>
                <b>Знижка: ${sale}% <br> Сума до оплати: ${sumToPay} <br> Чистий прибуток: ${profit.toFixed(2)}
                </b></i> `);