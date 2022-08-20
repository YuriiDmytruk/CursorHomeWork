let number;
while (!number) {
  number = +prompt("Enter number");
  if (!number) {
    alert("This is not number");
  }
  if (number === 0) {
    break;
  }
}

console.log({ number });
