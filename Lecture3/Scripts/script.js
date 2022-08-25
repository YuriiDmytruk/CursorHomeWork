function getMaxDigit(inData) {
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
  let result = number;
  for (let i = 1; i < pow; i++) {
    result *= number;
  }
  return result;
}

function formateName(name) {
  if (!name) {
    return "";
  }

  name = String(name);

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

function countLetter(letter, word) {
  if (!letter || !word) {
    return 0;
  }

  word = String(word);
  letter = String(letter);

  let letters = word.split("");
  let count = 0;
  for (let i = 0; i < letters.length; i++) {
    if (letters[i].toUpperCase() == letter.toUpperCase()) {
      count++;
    }
  }
  return count;
}

function convertCurrency(inData) {
  if (!inData) {
    return 0;
  }

  inData = String(inData).toUpperCase();

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
  charNumber = +charNumber;
  if (!+charNumber) {
    return 0;
  }
  let password = "";
  for (let i = 0; i < charNumber; i++) {
    password += Math.floor(Math.random() * 10).toString();
  }
  return password;
}

function deleteLetters(letter, word) {
  if (!letter || !word) {
    return "";
  }

  word = String(word);
  letter = String(letter);

  for (let i = 0; i < word.length; i++) {
    word = word.replace(letter.toLowerCase(), "");
    word = word.replace(letter.toUpperCase(), "");
  }
  return word;
}

function isPalinndrom(word) {
  if (!word) {
    return false;
  }
  word = String(word).toUpperCase().replace(/\s/g, "");

  let letters = word.split("");
  let rotatedWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    rotatedWord += letters[i];
  }
  if (rotatedWord === word) {
    return true;
  } else {
    return false;
  }
}

function deleteDuplicateLetter(word) {
  if (!word) {
    return "";
  }
  word = String(word);
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
