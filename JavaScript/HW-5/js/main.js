function getAverage(...numbers) {
    const evenNumbers = [];
    const total = numbers.reduce((total, number) => {
        if(number % 2 === 0) {
            evenNumbers.push(number);
            return total + number;
        }
        else 
            return total + 0
    }, 0)
    const average = total / evenNumbers.length;
    return +average.toFixed(2)
}
const averageNumber = getAverage(7, 6, 9, 2);
console.log(averageNumber);

function filterEvenNumbers(...numbers) {
    const oddNumbers = [];
    numbers.map((number) => {
        if(number % 2 !== 0) 
        oddNumbers.push(number);  
    })
    return oddNumbers;  
}
const oddNum = filterEvenNumbers(1, 8, 5, 2, 3, 5, 8, 1, 4);
console.log(oddNum);

function getDividedByFive(...numbers) {
    const dividedByFive = [];
    numbers.map((number) => {
        if(number % 5 === 0) 
            dividedByFive.push(number)
    })
    return dividedByFive
}
const dividedByFive = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(dividedByFive)

function countPositiveNumbers(...numbers) {
    return (numbers.filter((number) =>number > 0)).length
}
const positiveNumbers = countPositiveNumbers(1, -2, 3, -4, -5, 6,);
console.log(positiveNumbers);

function replaceBadWords(string, badWord) {
    const sentArray = string.split(' ');
    const result = sentArray.map((word) => {
        if(word.includes(badWord)) {
            word = word.replace(badWord, '****')
        }
        return word;
    })
    return result.join(' ');
}
const badWords = replaceBadWords("It's bullshit!", "shit");
console.log(badWords);

function getRandomArray(length, min, max) {
    const numbers = [];
    for(let i = 0; i < length; i++) {
        let num = (Math.random() * max) + min;
        numbers.push(parseInt(num));
    }
    return numbers
}
const randomArray = getRandomArray(10, 1, 100);
console.log(randomArray);