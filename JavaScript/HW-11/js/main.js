function getRandomChinese(length) {
    let i = 0;
    let chineseSymbol = [];
    let g = setInterval(() => {
        let d = Date.now();
        chineseSymbol.push(String.fromCharCode(d).slice(-5));
        if (i >= length) {
            clearInterval(g);
        }
        i++
    }, 50)

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(chineseSymbol.join(' '))
        }, length * 50)
    })
}
getRandomChinese(4).then((resolve) => {
    console.log(resolve)
});
