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

console.log(500 - sumOfPrice);

console.log((+penPrice.toFixed(2) + +diaryPrice.toFixed(2) + +bookPrice.toFixed(2)) / 3)

let randomPersentDiscount = Math.round(Math.random() * 100);
console.log(randomPersentDiscount);

console.log((sumOfPrice - (sumOfPrice / 100) * randomPersentDiscount).toFixed(2));