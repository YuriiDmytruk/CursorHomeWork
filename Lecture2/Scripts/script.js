function getNumberFromUser(numberName) {
  let number;
  while (!number) {
    number = +prompt(`Enter number ${numberName}`);
    if (number === 0) {
      break;
    }
    if (!number) {
      alert("This is not number");
    }
    if (!Number.isInteger(number)) {
      alert("Number not integer");
      number = null;
    }
  }
  return number;
}

const number_N = getNumberFromUser("N");
const number_M = getNumberFromUser("M");

const skipEven = confirm("Skip even numbers?");

let sum = 0;

for (let i = number_N; i <= number_M; i++) {  
    sum += skipEven ? ( !(i % 2) ? 0 : i) : i;
}

console.log(sum);

const html = `
<p> Number N = ${number_N}</p>
<p> Number M = ${number_M}</p>
<p> skip even numbers = ${skipEven}</p>
<p> sum = ${sum}</p>
`;
    
document.getElementById("info").innerHTML = html;