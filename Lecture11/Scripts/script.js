const MUSIC_LIST = ["1", "2", "3", "4"];
const AUDIO_LIST = addAudio(MUSIC_LIST);

let createdKeys = [];
let audioBindList = [];

addEventListener("keypress", onKeyPressed);
addEventListener("click", onClickSetActive);

function onKeyPressed(e) {
  disableKeys(createdKeys);
  if (checkIfUnique(e, createdKeys)) {
    createKey(e);
  } else {
    setActive(e, createdKeys);
  }
}

function onClickSetActive(e) {
  if (e.target.className.includes("passive")) {
    disableKeys(createdKeys);
    e.target.classList.add("active");
  }
  playMusic(e.target.id);
}

function setActive(e) {
  document.getElementById(e.charCode).classList.remove("passive");
  document.getElementById(e.charCode).classList.add("active");

  playMusic(e.charCode);
}

function playMusic(charCode) {
   AUDIO_LIST[
    audioBindList.find(
      (el) => el.elementKey == charCode
    ).audioListIndex
  ].play();
}

function checkIfUnique(e, createdKeys) {
  for (let i = 0; i < createdKeys.length; i++) {
    if (e.charCode == createdKeys[i].charCode) {
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

  key.textContent = String.fromCharCode(e.charCode);
  key.className = "active bar box";
  key.id = e.charCode;
  wrapper.appendChild(key);

  audioBindList.push(new AudioBind(e.charCode, getSymbolType(e.charCode)));
  playMusic(e.charCode);
  createdKeys.push(e);
}

function disableKeys() {
  const elementsWithActiveClass = document
    .getElementById("wrapper")
    .getElementsByClassName("active");

  for (let i = 0; i < elementsWithActiveClass.length; i++) {
    elementsWithActiveClass[i].classList.add("passive");
    elementsWithActiveClass[i].classList.remove("active");
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
  const VOWEL_LETTERS = "eyuioaуеїіаоєяю".toUpperCase().split("");

  symbol = String.fromCharCode(symbol).toUpperCase();

  if (symbol.toUpperCase() !== symbol.toLowerCase()){
    if(VOWEL_LETTERS.indexOf(symbol) !== -1){
      return "1";
    }
    return "0";
  }
  else{
    if(/^[0-9]$/.test(symbol)){
      return "3";
    }
    return "2";
  }
}

class AudioBind {
  constructor(elementKey, audioListIndex) {
    this.elementKey = elementKey;
    this.audioListIndex = audioListIndex;
  }
}
