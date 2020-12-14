function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}
let square = document.querySelector('.squares');

function generateBlocks() {
  for(let i = 0; i < 25; i++){
    let newDiv = document.createElement("div");
    newDiv.style.backgroundColor = generateColor();
    newDiv.style.width = '50px';
    newDiv.style.height = '50px';
    square.append(newDiv);
  }
}

function generateBlocksInterval() {
  setInterval(() => {
    square.innerHTML = "";
    generateBlocks();
  }, 1000)
}

generateBlocksInterval();


