let penPrice = 15.678;
let diaryPrice = 90.2345;
let bookPrice = 123.965;

let maxNumber = Math.max(penPrice, diaryPrice, bookPrice);
let minNumber = Math.min(penPrice, diaryPrice, bookPrice);
console.log(maxNumber)
console.log(minNumber)

let sumOfPrice = penPrice + diaryPrice + bookPrice;
console.log(sumOfPrice);

let sumOfFloorPrices = Math.floor(penPrice) + Math.floor(diaryPrice) + Math.floor(bookPrice);
console.log(sumOfFloorPrices);

let sumRoundedTo100 = Math.round(sumOfFloorPrices / 100) * 100
console.log(sumRoundedTo100);

console.log(sumOfFloorPrices % 2 == 0);

console.log(500 - sumOfPrice);

let averagePrice = (+penPrice.toFixed(2) + +diaryPrice.toFixed(2) + +bookPrice.toFixed(2)) / 3;
console.log(averagePrice)

let randomPersentDiscount = Math.round(Math.random() * 100);
console.log(randomPersentDiscount);

let sumWithDiscount = (sumOfPrice - (sumOfPrice / 100) * randomPersentDiscount).toFixed(2);
console.log(sumWithDiscount);

let netProfit = (sumOfPrice / 2) - ((sumOfPrice / 100) * randomPersentDiscount);
console.log(netProfit);

let html = `
<p> pen price = ${penPrice}</p>
<p> diary price = ${diaryPrice}</p>
<p> book price = ${bookPrice}</p>
<p> max number = ${maxNumber}</p>
<p> min number = ${minNumber}</p>
<p> sum of prices = ${sumOfPrice}</p>
<p> sum of floor prices = ${sumOfFloorPrices}</p>
<p> sum rounded to 100 = ${sumRoundedTo100}</p>
<p> rounded sum is odd or even = ${sumOfFloorPrices % 2 == 0}</p>
<p> 500 - sum = ${500 - sumOfPrice}</p>
<p> average value of prices, rounded to two decimal places = ${averagePrice}</p>
<p> random discount in percents = ${randomPersentDiscount}%</p>
<p> sum with discount rounded to two decimal places = ${sumWithDiscount}</p>
<p> net profit = ${netProfit}</p>
`;
    
document.getElementById("info").innerHTML = html;