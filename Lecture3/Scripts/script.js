// -----------  Utill Functions  -----------

function convertToString(str){
  str = String(str);
  return str ? str : '';
}

function convertToNumber(number){
  number = +number;
  return number ? number : 0;
}

// -----------  Functions  -----------

function getMaxDigit(inData) {
  inData = convertToString(inData);

  return Math.max.apply(null, inData.split(""));
}

function Pow(number, pow) {
  number = convertToNumber(number);
  pow = convertToNumber(pow);

  if (pow === 0){return 1;}

  let result = number;
  for (let i = 1; i < pow; i++) {result *= number;}
  
  return result;
}

function formateName(name) {
  name = convertToString(name).toLowerCase();

  return name.charAt(0).toUpperCase() + name.slice(1);
}

function calculateSalaryWithoutTax(salary, tax) {
  salary = convertToNumber(salary);
  tax = convertToNumber(tax);

  return salary - (salary / 100) * tax;
}

function getRandomNumber(from, to) {
  from = convertToNumber(from);
  to = convertToNumber(to);

  return Math.floor(Math.random() * (to - from + 1) + from);
}

function countLetter(letter, word) {
  word = convertToString(word);
  letter = convertToString(letter);

  return word.match(new RegExp(letter, 'gi')).length;
}

function convertCurrency(inData) {
  inData = convertToString(inData).toUpperCase();

  let number = +inData.replace(/\D/g, '');
  switch (inData.replace(/[0-9]/g, '')){
    case "UAH":
      return number / 25;
    case "$":
      return number * 25;
    default:
      return 0;
  }
}

function createPassword(charNumber = 8) {
  charNumber = convertToNumber(charNumber);

  let password = "";
  for (let i = 0; i < charNumber; i++) {
    password += Math.floor(Math.random() * 10).toString();
  }
  return password;
}

function deleteLetters(letter, word) {
  word = convertToString(word);
  letter = convertToString(letter);

  return word.replace(new RegExp(letter, 'gi'), '');
}

function isPalinndrom(word) {
  word = convertToString(word).toUpperCase().replace(/\s/g, "");

  for (let i = 0; i < word.length; i++){
    if(word.charAt(i) != word.charAt(word.length - 1 - i)){
      return false;
    }
  }
  return true;
}

function deleteDuplicateLetter(word) {
  word = convertToString(word);

  for (let i = 0; i < word.length; i++) {
    if (countLetter(word.charAt(i), word) > 1) {
      word = deleteLetters(word.charAt(i), word);
      i = 0;
    }
  }
  return word;
}

document.getElementById("info").innerHTML = `
<p> Function 1 = ${getMaxDigit(129314)}</p>
<p> Function 2 = ${Pow(5, 3)}</p>
<p> Function 3 = ${formateName("vLAd")}</p>
<p> Function 4 = ${calculateSalaryWithoutTax(1000, 19.5)}</p>
<p> Function 5 = ${getRandomNumber(1, 10)}</p>
<p> Function 6 = ${countLetter("a", "Astalavista")}</p>
<p> Function 7 = ${convertCurrency("100$")}</p>
<p> Function 8 = ${convertCurrency("1000uah")}</p>
<p> Function 9 = ${createPassword(5)}</p>
<p> Function 10 = ${createPassword()}</p>
<p> Function 11 = ${deleteLetters('a', "blablabla")}</p>
<p> Function 12 = ${isPalinndrom("y nesy gyseny")}</p>
<p> Function 13 = ${deleteDuplicateLetter("Biskvit buv duge nignym")}</p>
`;
