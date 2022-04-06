// TO-DO
// Populate the sketchbox div with squares
//    Give the squares a class so they can all react to
//    hovering in the same manner.

// Create a button to clear the sketchbox





// Set global variables for page.
// Refactor later to allow customization.
let gridSize = 16;
let sketchbox = document.getElementById('sketchbox');

let eraseBtn = document.getElementById('erase-button');
eraseBtn.addEventListener('click', erase);


function populateSketchbox() {
  for (let i = 0; i < (gridSize ** 2); i++){
    let tile =  document.createElement('div');
    tile.classList.add('sketchbox-tile');
    tile.addEventListener('mouseover', makeBlack);
    sketchbox.appendChild(tile);
  }
  
};


function makeBlack() {
  event.target.style.backgroundColor = 'black';
};


function erase() {
  // Remove all old tiles
  const tiles = document.querySelectorAll('.sketchbox-tile');
  tiles.forEach(tile => {
    tile.remove();
  });
  // Generate new tiles
  populateSketchbox();
}




// PAGE PROCESSES

populateSketchbox();