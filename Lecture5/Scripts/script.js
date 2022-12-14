function getRandomArray(lenght, min, max) {
  return new Array(lenght)
    .fill(0)
    .map((e) => Math.floor(Math.random() * (max - min + 1) + min));
}

function getModa(...arr) {
  const result = {};
  arr.forEach((e) =>
    Number.isInteger(e) ? (e in result ? (result[e] += 1) : (result[e] = 1)) : 1
  );
  return Object.entries(result)
    .filter((e) => e[1] === Math.max.apply(null, Object.values(result)))
    .map((e) => e[0]);
}

function getAverage(...arr) {
  return (
    arr
      .filter((e) => Number.isInteger(e))
      .reduce((prev, cur) => prev + cur, 0) / arr.length
  );
}

function getMedian(...arr) {
  arr = arr.filter((e) => Number.isInteger(e)).sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);
  return arr.length % 2 === 0 ? (arr[mid] + arr[mid - 1]) / 2 : arr[mid];
}

function filterEvenNumbers(...arr) {
  return arr.filter((e) => Number.isInteger(e)).filter((e) => e % 2 != 0);
}

function countPositiveNumbers(...arr) {
  return arr.filter((e) => Number.isInteger(e)).filter((e) => e > 0).length;
}

function getDividedByFive(...arr) {
  return arr.filter((e) => e % 5 === 0);
}

function replaceBadWords(sentece, ...arr) {
  const badWords = ["fuck", "shit"].concat(arr.flat(Infinity));
  badWords.forEach(
    (e) => (sentece = sentece.replaceAll(e, "*".repeat(e.length)))
  );
  return sentece;
}

function divideByThree(word) {
  return word.length < 3
    ? word
    : word
        .toLowerCase()
        .replaceAll(" ", "")
        .match(/.{1,3}/g);
}

function generateCombinations(str, index = 0, arr = []) {
  if(!str){
    return [...new Set(arr)];
  }
  if (index >= str.length - 1) {
    return [...new Set(arr)];
  }
  let result = [];
  let word = str.slice(index);
  for (let j = 0; j < str.length - index; j++) {
    word = move(word);
    result.push(str.slice(0, index - str.length) + word);
  }
  const length = result.length;
  for (let i = 0; i < length; i++) {
    result = generateCombinations(result[i], index + 1, result);
  }
  return [...new Set(arr.concat(result))];
}

function move(str) {
  str = str.split("");
  str.unshift(str.pop());
  return str.join("");
}

document.getElementById("info").innerHTML = `
<p> 1. Get random array = ${getRandomArray(15, 1, 100)}</p>
<p> 2. Get moda= ${getModa(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  55,
  55,
  23,
  2,
  56,
  3,
  2
)}</p>
<p> 3. Get average = ${getAverage(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
)}</p>
<p> 4. Get median = ${getMedian(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
)}</p>
<p> 5. Filter even numbers = ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}</p>
<p> 6. Count positive numbers = ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}</p>
<p> 7. Get divided by five = ${getDividedByFive(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
)}</p>
<p> 8. Replace bad words = ${replaceBadWords("Are you fucking kidding?")}</p>
<p> 9. Divide by three = ${divideByThree("Commander")}</p>
<p> 10. Generate combinations = ${generateCombinations("man").join(" , ")}</p>
`;
