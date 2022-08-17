let penPrice = 15.678;
let diaryPrice = 90.2345;
let bookPrice = 123.965;

console.log(Math.max(penPrice, diaryPrice, bookPrice))
console.log(Math.min(penPrice, diaryPrice, bookPrice))

let sumOfPrice = penPrice + diaryPrice + bookPrice;
console.log(sumOfPrice);

let sumOfFloorPrices = Math.floor(penPrice) + Math.floor(diaryPrice) + Math.floor(bookPrice);
console.log(sumOfFloorPrices);

console.log(Math.round(sumOfFloorPrices / 100) * 100);

console.log(sumOfFloorPrices % 2 == 0);