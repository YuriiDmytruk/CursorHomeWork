function getNumberFromUser(numberName) {
  let number;
  while (!number) {
    number = +prompt(`Enter number ${numberName}`);
    if (!number) {
      alert("This is not number");
    }
    if (number === 0) {
      break;
    }
    if (!Number.isInteger(number)) {
      alert("Number not integer");
      number = null;
    }
  }
  return number;
}

let number_N = getNumberFromUser("N");
let number_M = getNumberFromUser("M");

let skipEven = confirm("Skip even numbers?");

let sum = 0;

for (let i = number_N; i <= number_M; i++) {  
    sum += skipEven ? ( i % 2 === 0 ? 0 : i) : i;
}

console.log(sum);

let html = `
<p> Number N = ${number_N}</p>
<p> Number M = ${number_M}</p>
<p> skip even numbers = ${skipEven}</p>
<p> sum = ${sum}</p>
`;
    
document.getElementById("info").innerHTML = html;

documet.writeln("<p> Writeline </p>");
