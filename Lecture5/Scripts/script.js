function getRandomArray(lenght, min, max) {
  return new Array(lenght)
    .fill(0)
    .map((e) => Math.floor(Math.random() * (max - min + 1) + min));
}

function getModa(...arr) {
  arr = arr.filter((e) => Number.isInteger(e));
  let moda = arr[0],
    maxCount = 0,
    count = 0;
  for (let i = 0; i < arr.length; i++) {
    count = arr.filter((e) => e === arr[i]).length;
    if (maxCount < count) {
      moda = arr[i];
      maxCount = count;
    }
  }
  return moda;
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
  return arr.filter((e) => e % 2 != 0);
}

function countPositiveNumbers(...arr) {
  return arr.filter((e) => e > 0).length;
}

function getDividedByFive(...arr) {
  return arr.filter((e) => e % 5 === 0);
}

function replaceBadWords(sentece) {
  const badWords = ["fuck", "shit"];
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

function generateCombinations(str, index, arr) {
  if (index >= str.length - 1) {
    return arr;
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
  return [... new Set (arr.concat(result))];
}

function move(str) {
  str = str.split("");
  str.unshift(str.pop());
  return str.join("");
}

console.log(generateCombinations("man", 0, []));

//'#'.repeat(10)
