export function generateBlocks(rows, columns, size){
  const wrapper = document.createElement("div");

  for(let i = 0; i < rows; i++){
    wrapper.appendChild(createRow(columns, size));
  }

  return wrapper;
}

function createRow(columns, size) {
  const BORDER_SPACING = 1;
  const row = document.createElement("div");
  row.style = `
    display: table;
    width: ${(columns * size) + (columns * BORDER_SPACING)}px;
    height: ${size}px;
    table-layout: fixed;
    border-spacing: ${BORDER_SPACING}px;
  `;
  for (let i = 0; i < columns; i++) {
    row.appendChild(createBox(size));
  }
  return row;
}

function createBox(id, size) {
  const box = document.createElement("div");
  box.style = `
    display: table-cell;
    width : ${size}px;
    height : ${size}px;
    background-color : ${getRandomColor()};
    text-align: center;
    vertical-align: middle;
    border-radius: 5px;
  `;
  box.id = "box";
  return box;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function generateBlocksInterval(time){
  const intervalID = window.setInterval(changeBoxesColor, time);
}

function changeBoxesColor(){
  const elements = getElementsById("box"); 
  elements.forEach(element => {
    element.style.background = getRandomColor();
  });
}

function getElementsById(id){
  const elementsWithId = [];
  const allElements = document.getElementsByTagName('*');
  for(let key in allElements) {
      if(allElements.hasOwnProperty(key)) {
          const element = allElements[key];
          if(element.id === id) {
              elementsWithId.push(element);
          }        
      }
  }
  return elementsWithId
}


