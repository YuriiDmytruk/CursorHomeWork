getFilms();

createNextPrev();

deleteNextPrev();

async function getFilms() {
  document.body.classList.add("waiting");

  const request = await fetch("https://swapi.dev/api/films/");
  const response = await request.json();

  document.body.classList.remove("waiting");

  localStorage.setItem("films", JSON.stringify(response.results));
  addOptionsToSelect();
}

function addOptionsToSelect() {
  const films = JSON.parse(localStorage.getItem("films"));

  films.sort((a, b) => (a.episode_id > b.episode_id ? 1 : -1));

  films.forEach((element) => {
    let option = document.createElement("li");
    let optionText = document.createElement("a");
    optionText.innerHTML = element.episode_id + ". " + element.title;
    option.id = element.episode_id;

    option.onclick = function () {
      deleteNextPrev();
      getCharacters(this.id);
    };

    option.appendChild(optionText);
    document.getElementById("filmCkeck").appendChild(option);
  });
}

async function getCharacters(id) {
  const film = JSON.parse(localStorage.getItem("films")).find((obj) => {
    return obj.episode_id == id;
  });
  let characters = [];

  document.body.classList.add("waiting");

  for (let i = 0; i < film.characters.length; i++) {
    const request = await fetch(film.characters[i]);
    const character = await request.json();
    characters.push(
      new Character(character.name, character.birth_year, character.gender)
    );
  }

  document.body.classList.remove("waiting");
  showCharacters(characters);
}

async function getPlanets(url = "https://swapi.dev/api/planets") {
  if (!url) {
    url = "https://swapi.dev/api/planets";
  }
  createNextPrev();

  document.body.classList.add("waiting");

  const request = await fetch(url);
  const response = await request.json();

  document.body.classList.remove("waiting");

  localStorage.setItem("currentPlanetsList", JSON.stringify(response));

  createPlanetsList(response);
}

function nextPlanets() {
  getPlanets(JSON.parse(localStorage.getItem("currentPlanetsList")).next);
}

function prevPlanets() {
  getPlanets(JSON.parse(localStorage.getItem("currentPlanetsList")).previous);
}

function createPlanetsList(response) {
  let planets = [];
  for (let i = 0; i < response.results.length; i++) {
    planets.push(
      new Planet(
        response.results[i].name,
        response.results[i].climate,
        response.results[i].terrain,
        response.results[i].population
      )
    );
  }
  showPlanets(planets);
}

function showPlanets(planets) {
  const wrapper = document.getElementById("wrapper");
  wrapper.textContent = '';

  planets.forEach((element) => {
    let box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `Name: ${element.name} \n 
      Climate: ${element.climate} \n
      Terrain: ${element.terrain} \n
      Population: ${element.population} \n`;
    wrapper.appendChild(box);
  });
}

function showCharacters(characters) {
  const wrapper = document.getElementById("wrapper");
  wrapper.textContent = '';

  characters.forEach((element) => {
    let box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `Name: ${element.name} \n 
      Birth day: ${element.birth_year} \n
      Gender: ${element.gender} \n`;
    wrapper.appendChild(box);
  });
}

function createNextPrev() {
  if (!document.getElementById("buttonNext")) {
    const footer = document.getElementById("footer");

    let button = document.createElement("a");
    button.classList.add("button");
    button.id = "buttonPrev";
    button.innerHTML = "Prev";
    button.onclick = prevPlanets;
    footer.appendChild(button);

    button = document.createElement("a");
    button.classList.add("button");
    button.id = "buttonNext";
    button.innerHTML = "Next";
    button.onclick = nextPlanets;
    footer.appendChild(button);
  }
}

function deleteNextPrev() {
  if (document.getElementById("buttonNext")) {
    document.getElementById("buttonNext").outerHTML = "";
    document.getElementById("buttonPrev").outerHTML = "";
  }
}

class Character {
  constructor(name, birth_year, gender) {
    this.name = name;
    this.birth_year = birth_year;
    this.gender = gender;
  }
}

class Planet {
  constructor(name, climate, terrain, population) {
    this.name = name;
    this.climate = climate;
    this.terrain = terrain;
    this.population = population;
  }
}
