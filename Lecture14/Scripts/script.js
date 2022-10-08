const idGenerator = createIdGenerator();
const fontGenerator = newFontGenerator(14);

function* createIdGenerator(key) {
  let i = 0;
  while (true) yield i++;
}

function* newFontGenerator(startFont) {
  while (true) {
    const value = yield;
    if (value === "up") {
      startFont += 2;
      yield startFont;
    } else if (value === "down") {
      startFont -= 2;
      yield startFont;
    } else {
      yield startFont;
    }
  }
}

function NextFont(){
  fontGenerator.next();
  document.getElementById("body").style.fontSize = `${fontGenerator.next("up").value}px`;
}

function PrevFont(){
  fontGenerator.next();
  document.getElementById("body").style.fontSize = `${fontGenerator.next("down").value}px`;

}

function NextId() {
  document.getElementById("genTextBox").innerText = `Infinite generator: ${
    idGenerator.next().value
  }`;
}
