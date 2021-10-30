const board = document.getElementById('board')
let matrixSize=10;
let winningCombination=10;


function createMatrix (){
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
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    renderRow(row, i)
  }
}


function renderRow (row, rowIndex) {
  let newDiv = document.createElement("div");
  newDiv.className = 'row';
  newDiv.id = 'row'+rowIndex;
  board.appendChild(newDiv);
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

let locationOfTheShips = new Array(10);

function changePagePrepStage() {
  for (var i = 0; i < locationOfTheShips.length; i++) {
    if (arrayForCheck[i] = undefined) {
      document.getElementById("nextButton").disabled = true;
      break;
    } else {
      document.getElementById("nextButton").disabled = false;
      document.getElementById("nextButton").onclick = function () {
        location.href = "playingField.html";
      };
    }
  }
}

changePagePrepStage()

function name() {
  for (var i = 0; i < locationOfTheShips.length; i++) {

  }
}