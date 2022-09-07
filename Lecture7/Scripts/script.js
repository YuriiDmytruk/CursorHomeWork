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

console.log(getMyTaxes.call(ukraine, 1000));
console.log(getMiddleTaxes.call(latvia));
console.log(getTotalTaxes.call(litva));




