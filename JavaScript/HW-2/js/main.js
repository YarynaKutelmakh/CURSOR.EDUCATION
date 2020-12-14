const WARNING = alert('Увага! Програма все конвертує в цілі числа.');

let isEven;
document.getElementById('btn').onclick = () => {
    const FIRST_NUMBER = parseInt(document.getElementById('first-number').value);
    const SECOND_NUMBER = parseInt(document.getElementById('second-number').value);
    let sum = 0;
    for (let i = FIRST_NUMBER; i <= SECOND_NUMBER; i++) {
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

