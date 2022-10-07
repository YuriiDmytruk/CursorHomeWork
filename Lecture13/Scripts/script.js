async function GetFilms() {
  document.body.classList.add('waiting');

  const request = await fetch("https://swapi.dev/api/films/");
  const response = await request.json();

  document.body.classList.remove('waiting');

  localStorage.setItem("films", JSON.stringify(response.results));
  AddOptionsToSelect();
}

function AddOptionsToSelect() {
  const films = JSON.parse(localStorage.getItem("films"));

  films.sort((a, b) => (a.episode_id > b.episode_id ? 1 : -1));

  const select = document.getElementById("filmCkeck");
  films.forEach((element) => {
    let opt = document.createElement("option");
    opt.value = element.episode_id;
    opt.innerHTML = element.episode_id + ". " + element.title;
    select.appendChild(opt);
  });
}

function SelectChanged() {
  GetCharacters(document.getElementById("filmCkeck").value);
}

async function GetCharacters(id) {
  const film = JSON.parse(localStorage.getItem("films")).find((obj) => {
    return obj.episode_id == id;
  });
  let characters = [];

  document.body.classList.add('waiting');

  for(let i = 0; i < film.characters.length; i++){
    const request = await fetch(film.characters[i]);
    const character = await request.json()
    characters.push(new Character(character.name, character.birth_year, character.gender));
  }

  document.body.classList.remove('waiting');
  ShowCharacters(characters);
  
}

async function GetPlanets(url = "https://swapi.dev/api/planets"){
  if(!url){
    url = "https://swapi.dev/api/planets";
  }

  document.body.classList.add('waiting');

  const request = await fetch(url);
  const response = await request.json();

  document.body.classList.remove('waiting');

  localStorage.setItem("currentPlanetsList", JSON.stringify(response));

  CreatePlanetsList(response)
}

function NextPlanets(){
  GetPlanets(JSON.parse(localStorage.getItem("currentPlanetsList")).next)
}

function PrevPlanets(){
  GetPlanets(JSON.parse(localStorage.getItem("currentPlanetsList")).previous)
}

function CreatePlanetsList(response){
  let planets = [];
  for(let i = 0; i < response.results.length; i++){
    planets.push(new Planet(
      response.results[i].name,
      response.results[i].climate,
      response.results[i].terrain,
      response.results[i].population));
  }
  ShowPlanets(planets)
}

function ShowPlanets(planets){
  console.log(planets);
}

function ShowCharacters(characters){
  console.log(characters)
}

class Character {
  constructor(name, birth_year, gender) {
    this.name = name;
    this.birth_year = birth_year;
    this.gender = gender;
  }
}

class Planet{
  constructor(name, climate, terrain, population) {
    this.name = name;
    this.climate = climate;
    this.terrain = terrain;
    this.population = population;
  }
}
