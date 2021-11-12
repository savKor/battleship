const board = document.getElementsByClassName('board')
let matrixSize=10;

function createMatrix() {
  let matrix = [];
  let n = matrixSize, m = matrixSize;
  for(let i=0; i<n; i++) {
      matrix[i] = getMatrixRowWithEmptyElement(m);
  }
  return matrix
}

function getMatrixRowWithEmptyElement(size) {
  let row = []
  for (let j=0; j<size; j++) {
    row[j]=undefined;
  }
  return row;
}

let matrix = createMatrix();

function renderMatrix() {
  for (i=0; i<board.length; i++) {
    var numberOfBoard = i;
    for (let i = 0; i < matrix.length; i++) {
      const row = matrix[i];
      renderRow(row, i, numberOfBoard)
    }
  }
}

function renderRow (row, rowIndex, boardNumber) {
  let newDiv = document.createElement("div");
  newDiv.className = 'row';
  newDiv.id = 'row'+rowIndex;
  board[boardNumber].appendChild(newDiv);
  const rowElement = document.getElementById('row'+rowIndex)
  rowElement.style.display = "flex";
  for (let j = 0; j < row.length; j++) {
    renderCell(rowIndex,j,rowElement)
  }
}

function renderCell (rowIndex,columnIndex,rowElement) {
  let newDiv = document.createElement("div");
  newDiv.className = 'cell';
  newDiv.id = rowIndex+"_"+columnIndex;
  rowElement.appendChild(newDiv);
}

renderMatrix()
