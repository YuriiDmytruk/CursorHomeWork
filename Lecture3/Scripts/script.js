function maxDigit(inData) {
  inData = String(inData);
  if (!+inData) {
    return 0;
  }
  const numbers = inData.split("");
  return Math.max.apply(null, numbers);
}

function Pow(number, pow) {
  number = +number;
  pow = +pow;

  if (!number || !pow) {
    return 0;
  }
  if (pow == 0) {
    return 1;
  }
  debugger;
  let result = number;
  for (let i = 1; i < pow; i++) {
    result *= number;
  }
  return result;
}

function formateName(name) {
  name = String(name);
  if (!name) {
    return "";
  }

  let letters = name.split("");

  letters[0] = letters[0].toUpperCase();
  for (let i = 1; i < letters.length; i++) {
    letters[i] = letters[i].toLowerCase();
  }
  return letters.join("");
}

function calculateSalaryWithoutTax(salary, tax) {
  salary = +salary;
  tax = +tax;
  if (!salary || !tax) {
    return 0;
  }
  let taxSum = (salary / 100) * tax;
  return salary - taxSum;
}

function getRandomNumber(from, to) {
  from = +from;
  to = +from;
  if (!from || !to) {
    return 0;
  }
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function countRepeatInWord(letter, word) {
  word = String(word);
  letter = String(letter);
  if (!letter || !word) {
    return 0;
  }
  let letters = word.split("");
  let count = 0;
  for (let i = 0; i < letters.length; i++) {
    if (letters[i].toUpperCase() == letter.toUpperCase()) {
      count++;
    }
  }
  return count;
}

function convertMoney(inData) {
  inData = String(inData).toUpperCase();
  if (!inData) {
    return 0;
  }
  if (inData.includes("$")) {
    number = +inData.replace("$", "");
    return number * 25;
  } else if (inData.includes("UAH")) {
    number = +inData.replace("UAH", "");
    return number / 25;
  } else {
    return 0;
  }
}

function createPassword(charNumber = 8) {
  if (!+charNumber) {
    return 0;
  }
  let password = "";
  for (let i = 0; i < charNumber; i++) {
    password += Math.floor(Math.random() * 10).toString();
  }
  return password;
}

function deleteLetterInWord(letter, word) {
  word = String(word);
  letter = String(letter);
  if (!letter || !word) {
    return 0;
  }
  for (let i = 0; i < word.length; i++) {
    word = word.replace(letter, "");
  }
  return word;
}

// Ctreate 12 and 13 unctions


