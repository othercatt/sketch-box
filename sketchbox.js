// TO-DO




// Set global variables for page.
// Refactor later to allow customization.
let gridSize = 16; // Coordinate this with --grid-size in css file.
let sketchbox = document.getElementById('sketchbox');

let eraseBtn = document.getElementById('erase-button');
eraseBtn.addEventListener('click', erase);

let blackBtn = document.getElementById('black-button');
blackBtn.addEventListener('click', selectBlackPaint);

let redBtn = document.getElementById('red-button');
redBtn.addEventListener('click', selectRedPaint);

let rainbowBtn = document.getElementById('rainbow-button');
rainbowBtn.addEventListener('click', selectRainbowPaint);

let blackPaint = true;
let redPaint = false;
let rainbowPaint = false;



// GAME FUNCTIONS

function populateSketchbox() {
  for (let i = 0; i < (gridSize ** 2); i++) {
    let tile =  document.createElement('div');
    tile.classList.add('sketchbox-tile');
    tile.addEventListener('mouseover', () => {
      if (blackPaint == true) {
        makeBlack();
      } else if (redPaint == true) {
        makeRed();
      } else if (rainbowPaint == true) {
        makeRainbow();
      }
    });
    sketchbox.appendChild(tile);
  };
};

function makeBlack() {
  event.target.style.backgroundColor = 'black';
};

function makeRed() {
  event.target.style.backgroundColor = 'darkred';
};

function makeRainbow() {
  // create a variable called rainbow
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let color = `rgb(${r}, ${g}, ${b})`;
  event.target.style.backgroundColor = color;
};

function selectBlackPaint() {
  blackPaint = true;
  redPaint = false;
  rainbowPaint = false;
};

function selectRedPaint() {
  blackPaint = false;
  redPaint = true;
  rainbowPaint = false;
};

function selectRainbowPaint() {
  blackPaint = false;
  redPaint = false;
  rainbowPaint = true;
};

function erase() {
  // Remove all old tiles
  const tiles = document.querySelectorAll('.sketchbox-tile');
  tiles.forEach(tile => {
    tile.remove();
  });
  // Generate new tiles
  populateSketchbox();
};




// PAGE PROCESSES

populateSketchbox();