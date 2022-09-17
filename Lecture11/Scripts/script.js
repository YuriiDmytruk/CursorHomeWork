addEventListener("keypress", onKeyPressed);
let createdKeys = [];

function onKeyPressed(e) {
  disableKeys(createdKeys);
  //create activated key

  console.log({ e });
  createdKeys.push(e);
  console.log(e.target.classList);
}

function disableKeys(createdKeys) {
  createdKeys.forEach((element) => {
    element.target.classList.splice(element.target.classList.indexOf("enabled"), 1);
    element.target.classList.push("disabled")
  });
}

function createKey() {

}
