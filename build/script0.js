let currentPlayer = 1;



// Get a reference to the container element where the table will be appended
const container = document.getElementById('game-board');
const currentPlayerDisplay = document.getElementById('currentPlayerDisplay');
// Create a new table element
const table = document.createElement('table');

// Create 3 rows
for (let i = 0; i < 3; i++) {
  const row = document.createElement('tr');

  // Create 3 cells for each row
  for (let j = 0; j < 3; j++) {
    const cell = document.createElement('td');
    cell.textContent = ``;
    // cell.addEventListener('click', handleCellClick);
    // cell.addEventListener('click', () => handleCellClickv1(cell, currentPlayer));
    cell.addEventListener('click', () => handleCellClickv2(i, j, cell, currentPlayer));
    row.appendChild(cell);
  }

  // Append the row to the table
  table.appendChild(row);
}

// Append the table to the container
container.appendChild(table);

//while some cells still available

// CONST NUM_CELLS = 9;
// let numMarkedCells = 0;
// let numRemainingCells = NUM_CELLS - numMarkedCells;
// let markedCells = {};

// while (numRemainingCells > 0) {
//     //click on a cell
    
//     //select cell
//     // if cell already marked, do nothing
//     //if cell is unmarked, write X
//     cell.textContent = 'X';

// }


function handleCellClick(event) {
    const cell = event.target;
    cell.textContent = 'X';
  }

function handleCellClickv1(cell, player) {
    // const cell = event.target;
    
    if (player == 1) {
        cell.textContent = 'X';
    } else {
        cell.textContent = 'O';
    }

    //switch player
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    // if (currentPlayer==1) {
    //     currentPlayer = 2;
    // } else {
    //     currentPlayer = 1;
    // }

    currentPlayerDisplay.textContent = `Current Player: ${currentPlayer}`;
    
  }

function handleCellClickv2(rowIndex, columnIndex, cell, player) {
    
    if (markedCellsObject[`${rowIndex},${columnIndex}`] == 1) {
        console.log("SLECTED", rowIndex, columnIndex);
        return;
    }

    //if cell is available
    // markedCellsObject[rowIndex, columnIndex] = 1;
    if (player == 1) {
        cell.textContent = 'X';
    } else {
        cell.textContent = 'O';
    }

    //switch player
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    // if (currentPlayer==1) {
    //     currentPlayer = 2;
    // } else {
    //     currentPlayer = 1;
    // }

    currentPlayerDisplay.textContent = `Current Player: ${currentPlayer}`;
    markedCellsObject[`${rowIndex},${columnIndex}`]= 1;
    
  }


const markedCellsObject = {};

for (let i = 0; i <3; i++) {
  for (let j = 0; j < 3; j++) {
    markedCellsObject[`${i},${j}`] = 0; 
}
}