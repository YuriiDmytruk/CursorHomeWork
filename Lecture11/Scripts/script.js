addEventListener("keypress", onKeyPressed);
let createdKeys = [];

function onKeyPressed(e) {
  if (checkIfUnique(e, createdKeys)) {
    disableKeys(createdKeys);
    createKey(e);
    createdKeys.push(e);
  } else {
    setActive(e, createdKeys);
  }
}

function setActive(e, createdKeys) {
  for (let i = 0; i < createdKeys.length; i++) {
    if (e.key.toUpperCase() == createdKeys[i].key.toUpperCase()) {
      console.log(createdKeys[i]);
    }
  }
}

function checkIfUnique(e, createdKeys) {
  for (let i = 0; i < createdKeys.length; i++) {
    if (e.key.toUpperCase() == createdKeys[i].key.toUpperCase()) {
      return false;
    }
  }
  return true;
}

function createKey(e) {
  const wrapper = document.getElementById("wrapper");
  const key = document.createElement("div");
  key.className = "active";
  key.id = e.key.toUpperCase();
  key.textContent = e.key.toUpperCase();
  wrapper.appendChild(key);
}

function disableKeys() {
  const elementsWithActiveClass = document
    .getElementById("wrapper")
    .getElementsByClassName("active");

  for (let i = 0; i < elementsWithActiveClass.length; i++) {
    elementsWithActiveClass[i].className = "passive";
  }
}
