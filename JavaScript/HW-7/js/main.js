const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476,

};
const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 
};
const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 
};

function getMyTaxes(salary) {
    return salary / 100 * (this.tax * 100) 
}
function getMiddleTaxes() {
    return parseInt(this.tax * this.middleSalary)
}
function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies
}
function getMySalary() {
    const minNumber = 1500;
    const maxNumber = 2000;
    let salary = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    let profit = parseInt(salary - (salary * (this.tax * 100) / 100));
    console.log({salary: salary, taxes: this.tax, profit: profit});
}

console.log(getMyTaxes.call(ukraine, 1000));
console.log(getMiddleTaxes.call(ukraine));
console.log(getTotalTaxes.call(ukraine));
setInterval(() => getMySalary.call(litva), 10000);