// TO-DO




// GLOBAL VARIABLES
// Refactor later to allow customization.
let gridSize = 16; // Coordinate this with --grid-size in css file.
let sketchbox = document.getElementById('sketchbox');

let eraseBtn = document.getElementById('erase-button');
eraseBtn.addEventListener('click', erase);

let blackBtn = document.getElementById('black-button');
blackBtn.addEventListener('click', selectBlackPaint);

let pinkBtn = document.getElementById('pink-button');
pinkBtn.addEventListener('click', selectPinkPaint);

let blueBtn = document.getElementById('blue-button');
blueBtn.addEventListener('click', selectBluePaint);

let purpleBtn = document.getElementById('purple-button');
purpleBtn.addEventListener('click', selectPurplePaint);

let rainbowBtn = document.getElementById('rainbow-button');
rainbowBtn.addEventListener('click', selectRainbowPaint);

let blackPaint = true;
let pinkPaint = false;
let bluePaint = false;
let purplePaint = false;
let rainbowPaint = false;



// GAME FUNCTIONS

function populateSketchbox() {
  for (let i = 0; i < (gridSize ** 2); i++) {
    let tile =  document.createElement('div');
    tile.classList.add('sketchbox-tile');
    tile.addEventListener('mouseover', () => {
      if (blackPaint == true) {
        makeBlack();
      } else if (pinkPaint == true) {
        makePink();
      } else if (bluePaint == true) {
        makeBlue();
      } else if (purplePaint == true) {
        makePurple();
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

function makePink() {
  event.target.style.backgroundColor = 'pink';
};

function makeBlue() {
  event.target.style.backgroundColor = 'cyan';
};

function makePurple() {
  event.target.style.backgroundColor = 'purple';
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
  pinkPaint = false;
  bluePaint = false;
  purplePaint = false;
  rainbowPaint = false;
};

function selectPinkPaint() {
  blackPaint = false;
  pinkPaint = true;
  bluePaint = false;
  purplePaint = false;
  rainbowPaint = false;
};

function selectBluePaint() {
  blackPaint = false;
  pinkPaint = false;
  bluePaint = true;
  purplePaint = false;
  rainbowPaint = false;
};

function selectPurplePaint() {
  blackPaint = false;
  pinkPaint = false;
  bluePaint = false;
  purplePaint = true;
  rainbowPaint = false;
};

function selectRainbowPaint() {
  blackPaint = false;
  pinkPaint = false;
  bluePaint = false;
  purplePaint = false;
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