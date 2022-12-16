/* eslint-disable no-plusplus */

// Set up grid container reference and hardcode number of grids to test
const gridContainer = document.querySelector('.grid-container');
const createButton = document.querySelector('.create-grid');
const randomButton = document.querySelector('.random-color');
let gridNumber;

// Function gets user input for grid size and ensures the input is
// a number and less than 100
function getGridNumber() {
  gridNumber = prompt('What size grid do you want? (can\'t exceed 100)');
  if (isNaN(gridNumber) || gridNumber > 100) {
    alert('Sorry, you must enter a number and cannot exceed 100');
    getGridNumber();
  }
}

// Function that will generate the chosen number of grids
function createGrid(num) {
  gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;

  const numSquared = num * num;
  for (let i = 0; i < numSquared; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = `${color}`;
    });
    gridContainer.appendChild(grid);
  }
}
// Function to remove each child of the gridContainer to clear grid
function clearGrid(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function randomColor() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);

  color = `rgb(${x},${y},${z})`;
}

randomButton.addEventListener('click', () => {
  randomColor();
  clearGrid(gridContainer);
  getGridNumber();
  createGrid(gridNumber);
});

createButton.addEventListener('click', () => {
  color = 'black';
  clearGrid(gridContainer);
  getGridNumber();
  createGrid(gridNumber);
});
