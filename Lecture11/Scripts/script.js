const CONSONANT_LETTERS = "qwrtpsdfghjklzxcvbnmйцкнгшщзхфвпрлджчсмтьб"
  .toUpperCase()
  .split("");
const VOWEL_LETTERS = "eyuioaуеїіаоєяю".toUpperCase().split("");
const NUMBERS = "0123456789".toUpperCase().split("");
const PUNCTUATION = `!@#$%^&*()_+-=[{]}:;'"<,>.?/`.toUpperCase().split("");

const MUSIC_LIST = ["1", "2", "3", "4"];
const AUDIO_LIST = addAudio(MUSIC_LIST);

let createdKeys = [];
let audioBindList = [];

addEventListener("keypress", onKeyPressed);
addEventListener("click", onClickSetActive);

function onKeyPressed(e) {
  if (checkIfUnique(e, createdKeys)) {
    disableKeys(createdKeys);
    createKey(e);
  } else {
    disableKeys(createdKeys);
    setActive(e, createdKeys);
  }
}

function onClickSetActive(e) {
  if (e.target.className.includes("passive")) {
    disableKeys(createdKeys);
    e.target.className = "active";
    AUDIO_LIST[
      audioBindList.find((el) => el.elementKey.toUpperCase() == e.target.id)
        .audioListIndex
    ].play();
  }
}

function setActive(e) {
  document.getElementById(e.key.toUpperCase()).className = "active";
  AUDIO_LIST[
    audioBindList.find(
      (el) => el.elementKey.toUpperCase() == e.key.toUpperCase()
    ).audioListIndex
  ].play();
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
  if (e.key == "Enter") {
    return;
  }
  const wrapper = document.getElementById("wrapper");
  const key = document.createElement("div");
  key.textContent = e.key.toUpperCase();
  key.className = "active bar box";
  key.id = e.key.toUpperCase();
  wrapper.appendChild(key);
  const index = getSymbolType(e.key.toUpperCase());
  audioBindList.push(new AudioBind(e.key.toUpperCase(), index));
  AUDIO_LIST[index].play();
  createdKeys.push(e);
}

function disableKeys() {
  const elementsWithActiveClass = document
    .getElementById("wrapper")
    .getElementsByClassName("active");

  for (let i = 0; i < elementsWithActiveClass.length; i++) {
    elementsWithActiveClass[i].className = "passive bar box";
  }
}

function addAudio(musicList) {
  let result = [];
  musicList.forEach((element) => {
    result.push(new Audio(`./Music/${element}.mp3`));
  });
  return result;
}

function getSymbolType(symbol) {
  for (let i = 0; i < CONSONANT_LETTERS.length; i++) {
    if (symbol == CONSONANT_LETTERS[i]) {
      return "0";
    }
  }
  for (let i = 0; i < VOWEL_LETTERS.length; i++) {
    if (symbol == VOWEL_LETTERS[i]) {
      return "1";
    }
  }
  for (let i = 0; i < NUMBERS.length; i++) {
    if (symbol == NUMBERS[i]) {
      return "3";
    }
  }
  for (let i = 0; i < PUNCTUATION.length; i++) {
    if (symbol == PUNCTUATION[i]) {
      return "2";
    }
  }
}

class AudioBind {
  constructor(elementKey, audioListIndex) {
    this.elementKey = elementKey;
    this.audioListIndex = audioListIndex;
  }
}
