function getPow(a, b) {
  let num = 1;
  for (let i = 0; i < b; i++) {
    num *= a;
  }
  return num;
}
const variableForPowFunction = getPow(2, 3);
console.log(variableForPowFunction);

function countLetter(a, world) {
  let counter = 0;
  for (let i = 0; i < world.length; i++) {
    const char = world[i].toLocaleLowerCase();
    if (char === a.toLocaleLowerCase()) {
      counter++;
    }
  }
  return counter; 
}
const myCounter = countLetter('a', 'Abba');
console.log(myCounter);

function convertCurrency(currency) {
  if (currency.includes('$')) {
    return `${currency} = ${parseInt(currency) * 28} грн`
  } else if (currency.toLocaleLowerCase().includes('uah')) {
    return `${currency.toLocaleUpperCase()} = ${(parseInt(currency) / 28).toFixed(2)}$`
  } else {
    return 'Error';
  }
}
const exchanger = convertCurrency('100uah');
console.log(exchanger);

function maxNumber(number) {
  const numbersToString = number.toString();
  const arrayOfNumbers = numbersToString.split('').map(n => +n);
  return arrayOfNumbers.reduce(function (a, b) {
    return Math.max(a, b);
  });
}
const variableForMaxNumberFunction = maxNumber(9351);
console.log(variableForMaxNumberFunction);

function getSalary(salary) {
  const tax = 19.5;
  let result = +salary - (+salary / 100 * tax);
  return result;
}
const salary = getSalary(1000);
console.log(salary);

function formatName(name) {
  const correctName = name.toLocaleLowerCase();
  return correctName[0].toLocaleUpperCase() + correctName.slice(1);
}
const name = formatName('mAX');
console.log(name);