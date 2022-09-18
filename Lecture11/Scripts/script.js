let createdKeys = [];
let audioBindList = [];
let audioListIndex = -1;

const musicList = ["1", "2", "3"];
const audioList = addAudio(musicList);

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
    audioList[
      audioBindList.find((el) => el.elementKey.toUpperCase() == e.target.id)
        .audioListIndex
    ].play();
  }
}

function setActive(e) {
  document.getElementById(e.key.toUpperCase()).className = "active";
  audioList[
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
  const index = getAudioListndex();
  audioBindList.push(new AudioBind(e.key.toUpperCase(), index));
  audioList[index].play();
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

function getAudioListndex() {
  audioListIndex += 1;
  if (audioListIndex === audioList.length) {
    audioListIndex = 0;
  }
  return audioListIndex;
}

class AudioBind {
  constructor(elementKey, audioListIndex) {
    this.elementKey = elementKey;
    this.audioListIndex = audioListIndex;
  }
}
