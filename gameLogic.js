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





















//сделать так, чтобы этот код работал только на странице подготовки
const oneCell = document.getElementById('oneCell')
let cellsPrepBoard = document.querySelectorAll('.cell')
console.log()
let player1ShipsLocation = [];
let player2ShipsLocation = [];
let ship;


//функция запуск страницы подготовски
function startPrepPage() {
  cellsPrepBoard.forEach(cell => {
    cell.style.backgroundColor = "";
  })
}

oneCell.onclick = function() {
  cellsPrepBoard.forEach(cell => {
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })
};


startPrepPage()

function addCoordinatesOfTheShip(centerRow, centerColumn) {
  let matrixToCheck = [];
  for(let i=0; i<matrixRow; i++) {
    matrixToCheck[i] = getMatrixRowWithElementsFromMainMatrix();
  }
  matrixToCheck[winningCombination-1][winningCombination-1] = "cell "+currentSymbol
  return matrixToCheck
}


function setOneCellShip(handleCell, array) {
  let coordinate = []
  let twoCoordinate = handleCell.id.split('_');
  let row=twoCoordinate[0]
  let column=twoCoordinate[1]
  coordinate.push(handleCell.id);
  array.push(coordinate);
  if (array !=undefined) {
    for (let i = 0; i < array.length; i++) {
      if (array[i]=row+1+"_"+column||row-1+"_"+column||row+"_"+column+1||row+"_"+column-1) {
        break
      } else {
        handleCell.style.backgroundColor = "blue";
        array.push(coordinate);
      }
    }
  } else {
    handleCell.style.backgroundColor = "blue";
    array.push(coordinate);
  } 
}

function handleClick(e) {
  const cell = e.target
  let handleCell = cell;
  setOneCellShip(handleCell, player1ShipsLocation)
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