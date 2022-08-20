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
}

let number_N = getNumberFromUser("N");
let number_M = getNumberFromUser("M");

let skipEven = confirm("Skip even numbers?");
