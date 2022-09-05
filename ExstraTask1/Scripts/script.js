function getUnique(arr) {
  const obj = {};
  arr.forEach((e) => {
    obj[e] = (obj[e] || 0) + 1;
  });
  return Object.entries(obj)
    .sort((a, b) => (a[1] < b[1] ? 1 : -1))
    .map((e) => e[0]);
}

console.log(
  getUnique([
    "Sam",
    "John",
    "John",
    "Jack",
    "Jack",
    "Jack",
    "Pette",
    "Pette",
    "Pette",
    "Pette",
  ])
);
