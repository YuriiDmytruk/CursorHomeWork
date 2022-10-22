import { getMaxDigit, Pow } from "./Scripts/hw3.js"
import {getRandomArray, getModa} from "./Scripts/hw5.js"
import {generateBlocks, generateBlocksInterval} from "./Scripts/hw10.js"

showHW3()
showHW5()
showHW10()

function showHW3() {
  const box = document.createElement("div");
  box.innerHTML = `
    <h3>------- HW 3 -------</h3>
    <p>max digit of 129314 = ${getMaxDigit(129314)}</p>
    <p> pow 5^-3 = ${Pow(5, -3)} </p>`
  document.getElementById("wraper").appendChild(box)
}

function showHW5() {
    const box = document.createElement("div");
    const randomArray = getRandomArray(15, 1, 5)
    box.innerHTML = `
      <h3>------- HW 5 -------</h3>
      <p> random array = ${randomArray}</p>
      <p> moda = ${getModa(randomArray)} </p>`
    document.getElementById("wraper").appendChild(box)
  }

  function showHW10() {
    const box = document.createElement("div");
    box.innerHTML = `<h3>------- HW 10 -------</h3>`
    box.appendChild(generateBlocks(5, 5, 50));
    generateBlocksInterval(500);
    document.getElementById("wraper").appendChild(box)
  }

