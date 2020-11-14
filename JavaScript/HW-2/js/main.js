const warning = alert('Увага! Програма все конвертує в цілі числа.');

let isEven;
document.getElementById('btn').onclick = () => {
    const firstNumber = parseInt(document.getElementById('first-number').value);
    const secondNumber = parseInt(document.getElementById('second-number').value);
    let sum = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        if (isEven) {
            if (i % 2 === 0) {
                continue;
            }
            sum += i;
        } else {
            sum += i;
        }
    }
    document.getElementById('result').style.display = 'block';
    document.getElementById('result').innerHTML = `Результат: ${sum}`
}

