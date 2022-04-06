// STARTING GLOBAL VARIABLES
let gridSize = 16;
let sketchbox = document.getElementById('sketchbox');

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

let eraseBtn = document.getElementById('erase-button');
eraseBtn.addEventListener('click', erase);

let gridBtn16 = document.getElementById('grid-16');
gridBtn16.addEventListener('click', () => {
  gridSize = 16;
  erase();
});

let gridBtn24 = document.getElementById('grid-24');
gridBtn24.addEventListener('click', () => {
  gridSize = 24;
  erase();
});

let gridBtn32 = document.getElementById('grid-32');
gridBtn32.addEventListener('click', () => {
  gridSize = 32;
  erase();
});


// GAME FUNCTIONS
function populateSketchbox() {
  for (let i = 0; i < (gridSize ** 2); i++) {
    let tile =  document.createElement('div');
    tile.classList.add('sketchbox-tile');
    if (gridSize == 16) {
      tile.classList.add('tile-16');
    } else if (gridSize == 24) {
      tile.classList.add('tile-24');
    } else if (gridSize == 32) {
      tile.classList.add('tile-32');
    }

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

  let num = Math.floor(Math.random() * 100);
  if (num == 42 && gridSize == 16) {
    const tiles = document.querySelectorAll('.sketchbox-tile');
    tiles.forEach(tile => {
      tile.remove();
     });
    drawAmongi();
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
  const tiles = document.querySelectorAll('.sketchbox-tile');
  tiles.forEach(tile => {
    tile.remove();
  });
  populateSketchbox();
};



// PAGE PROCESSES
populateSketchbox();







function drawAmongi() {

  let targets = [
    184, 185, 186, 199, 200, 215, 216, 217, 218, 232, 233, 234, 248, 250
  ];

  for (let i = 0; i < 256; i++) {
    let tile =  document.createElement('div');
    tile.classList.add('sketchbox-tile');
    tile.classList.add('tile-16');
    
    if (targets.includes(i)) {
      tile.classList.add('amongi-tile');
    }

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