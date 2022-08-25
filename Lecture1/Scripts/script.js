const penPrice = 15.678;
const diaryPrice = 90.2345;
const bookPrice = 123.965;

const maxNumber = Math.max(penPrice, diaryPrice, bookPrice);
const minNumber = Math.min(penPrice, diaryPrice, bookPrice);
console.log(maxNumber)
console.log(minNumber)

const sumOfPrice = penPrice + diaryPrice + bookPrice;
console.log(sumOfPrice);

const sumOfFloorPrices = Math.floor(penPrice) + Math.floor(diaryPrice) + Math.floor(bookPrice);
console.log(sumOfFloorPrices);

const sumRoundedTo100 = Math.round(sumOfFloorPrices / 100) * 100
console.log(sumRoundedTo100);

console.log(!sumOfFloorPrices % 2);

console.log(500 - sumOfPrice);

const averagePrice = (+penPrice.toFixed(2) + +diaryPrice.toFixed(2) + +bookPrice.toFixed(2)) / 3;
console.log(averagePrice)

const randomPersentDiscount = Math.round(Math.random() * 100);
console.log(randomPersentDiscount);

const sumWithDiscount = (sumOfPrice - (sumOfPrice / 100) * randomPersentDiscount).toFixed(2);
console.log(sumWithDiscount);

const netProfit = (sumOfPrice / 2) - ((sumOfPrice / 100) * randomPersentDiscount);
console.log(netProfit);

const html = `
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