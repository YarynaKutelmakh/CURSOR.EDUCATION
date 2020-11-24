let num = 1;
function getPow (a, b) {
    for(let i = 0; i < b; i++) {
        num *= a;
    }
    return num;
}
console.log(getPow(5, 2));

function countLetter(a, world) {
    let counter = 0;
    for(let i = 0; i < world.length; i++) {
            const char = world[i].toLocaleLowerCase();
            if (char === a.toLocaleLowerCase()) {
                counter++;
            }
        }
    console.log(counter);
}
countLetter('o', 'woOOorld');

function convertCurrency(currency) {
  if (currency.includes('$')) {
      console.log(`${currency} = ${parseInt(currency) * 28} грн`)
  } else if (currency.toLocaleLowerCase().includes('uah')) {
      console.log(`${currency.toLocaleUpperCase()} = ${(parseInt(currency) / 28).toFixed(2)}$`)
  } else {
      console.log(`Error`);
  }
}
convertCurrency('100uah');

function maxNumber(currency) {
  const numbersToString = currency.toString();
  const arrayOfNumbers = numbersToString.split('').map(n => +n);
  console.log(arrayOfNumbers.reduce(function(a, b) {
    return Math.max(a, b);
  }));
}
maxNumber(9351);

function getSalary(salary) {
  const tax = 19.5;
  let result = +salary - (+salary / 100 * tax);
  console.log(result);
}
getSalary(1000);

function formatName(name) {
  const correctName = name.toLocaleLowerCase();
  console.log(correctName[0].toLocaleUpperCase() + correctName.slice(1));
}
formatName('mAX');