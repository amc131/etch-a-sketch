/* eslint-disable no-plusplus */
const gridContainer = document.querySelector('.grid-container');
const gridNumber = 16;

function createGrid(num) {
  gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;

  const numSquared = num * num;
  for (let i = 0; i < numSquared; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = 'black';
    });
    gridContainer.appendChild(grid);
  }
}
createGrid(gridNumber);
