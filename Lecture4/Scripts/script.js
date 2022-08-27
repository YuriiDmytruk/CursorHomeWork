const students = ["Oleksandr", "Igor", "Olena", "Ira", "Oleksiy", "Svitlana"];
const themes = [
  "Differential equation",
  "Theory of automata",
  "Algorithms and data structures",
];
const marks = [4, 5, 5, 3, 4, 5];

const pairs = getPairs(students);
const themesPairs = getThemes(pairs, themes)

console.log(pairs);

function getPairs(students) {
  const girls = students.filter((e) => e.charAt(e.length - 1) === "a");
  const boys = students.filter((e) => e.charAt(e.length - 1) != "a");
  const pairs = girls.map(e => [e, boys[girls.indexOf(e)]]);
  return pairs;
}

function getThemes(pairs, themes){
  
}
