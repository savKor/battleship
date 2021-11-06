const board = document.getElementsByClassName('board')
let matrixSize=10;
let winningCombination=10;

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























const prepBoard = document.getElementById('preparationBoard')
let cellsPrepBoard = prepBoard.querySelectorAll('.cell')
console.log(prepBoard)
let player1ShipsLocation = [];
let player2ShipsLocation = [];
let ship;

function startPage() {
  cellsPrepBoard.forEach(cell => {
    cell.style.backgroundColor = "";
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })
}

startPage()


function setShip(centerRow, centerColumn) {
  let chosenCell= prepBoard.getElementById(centerRow+'_'+centerColumn);
  chosenCell.style.backgroundColor = "red";
}


function handleClick(e) {
  const cell = e.target
  console.log(cell)
  let handleCell = cell
  handleCell = handleCell.id.split('_');
  let centerRow=handleCell[0]
  let centerColumn=handleCell[1]
  setShip(centerRow, centerColumn)
}

/**
  Функция выбора корабля.
  Выбор кораблей из списка:
    1. После нажатия на картику корабля, корабль выбирается
    2. Если колличество кораблей закончилось на кнопку больше нельзя нажать.
*/

/**
  Функция для установкий кораблей.
  Нужно сделать установку корабле на игровое поле:
    1. После выбора корабля игрок может поставить его на поле.
      1. Корабль не может стоять впритык к другим кораблям, как с вертикали так и диоганали.
    2. После установки его на поле его координаты будут записываются.
    3. После этого пользователь должен снова выбрать корабль.
*/




/**
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

 */