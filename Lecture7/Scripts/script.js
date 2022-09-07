const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


function getMyTaxes(salary){
  return salary * this.tax
}

function getMiddleTaxes(){
  return this.tax * this.middleSalary;
}


function getTotalTaxes(){
  return this.tax * this.middleSalary * this.vacancies;
}

function getMySalary(){
  const max = 2000, min = 1500;
  const salary = Math.round(Math.random() * (max - min) + min)  ;
  console.log({
    salary: salary,
    taxes: this.tax,
    profit: salary - this.tax,
  })
}

console.log(getMyTaxes.call(ukraine, 1000));
console.log(getMiddleTaxes.call(latvia));
console.log(getTotalTaxes.call(litva));


const time = 10000;

console.log(`Wait ${time / 1000} seconds for the 4th function to work`)

let bindedFunc = getMySalary.bind(ukraine);
const intervalID = window.setInterval(bindedFunc, time);






