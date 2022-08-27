const students = ["Oleksandr", "Igor", "Olena", "Ira", "Oleksiy", "Svitlana"];
const themes = [
  "Differential equation",
  "Theory of automata",
  "Algorithms and data structures",
];
const marks = [4, 5, 5, 3, 4, 5];

const pairs = getPairs(students);
const themesPairs = getThemes(pairs, themes)
const studentsMarks = getMarks(students, marks);
const randomMark = getRanndomMark(themesPairs, 1, 5);

console.log(pairs);
console.log(themesPairs);
console.log(studentsMarks);
console.log(randomMark);

function getPairs(students) {
  const girls = students.filter((e) => e.charAt(e.length - 1) === "a");
  const boys = students.filter((e) => e.charAt(e.length - 1) != "a");
  return girls.map(e => [e, boys[girls.indexOf(e)]]);
}

function getThemes(pairs, themes){
  return pairs.map(e => [e.join(" i "), themes[pairs.indexOf(e)]]);
}

function getMarks(students, marks){
  return students.map(e => [e, marks[students.indexOf(e)]])
}

function getRandomMark(themesPairs, min, max){
return themesPairs.map(e => e.concat(Math.floor(Math.random() * (max - min + 1) + min)));
}