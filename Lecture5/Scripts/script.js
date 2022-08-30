function getRandomArray (lenght, min, max){
  return new Array(lenght).fill(0).map(e => Math.floor(Math.random() * (max - min + 1) + min));
}
console.log(getRandomArray(10, 1, 10));