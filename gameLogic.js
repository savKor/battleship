const boardOfPreparetionPage = document.getElementById("preparationBoard")
const selectButtons = document.querySelectorAll('.typeOfShip')
let cellsPreparationBoard = document.querySelectorAll('.cell')
let turnButton = document.getElementById("turnButton")
let player1ShipsLocation = [];
let player2ShipsLocation = [];
let verticalDirection=true;


function addListenersToSelectShip() {
  for (let selectButton of selectButtons) {
    selectButton.onclick = handleSelectShipButtonClick;
  }
}

function handleSelectShipButtonClick(e) {
  const shipButton = e.target.closest('.typeOfShip');
  let shipLength = parseInt(shipButton.dataset.shipLength);
  addListenersToShowTheShip(shipLength)
}

function addListenersToShowTheShip(shipLength) {
  boardOfPreparetionPage.onmouseover = (e) => {handleOnmouseoverOnBoard(e, shipLength)}
  boardOfPreparetionPage.onmouseout = (e) => {handleOnmouseoutOnBoard(e, shipLength)};
}

function handleOnmouseoverOnBoard(e, shipLength) {
  let shipLocation = e.target;
  let trackedCellOfShip = shipLocation;
  trackedCellOfShip = shipLocation.id.split('_');
  let row=trackedCellOfShip[0]
  let column=trackedCellOfShip[1]
  let ship = getShipElementsIds(shipLength,row,column);
  showCoordintesOfElementsOfTheShipOnTheBoard(ship, shipLength)
}

function handleOnmouseoutOnBoard(e, shipLength) {
  let shipLocation = e.target;
  let trackedCellOfShip = shipLocation;
  trackedCellOfShip = shipLocation.id.split('_');
  let row=trackedCellOfShip[0]
  let column=trackedCellOfShip[1]
  let ship = getShipElementsIds(shipLength,row,column);
  hideCoordinatesOfElementsOfTheShipOnBoard(ship)
}

function showCoordintesOfElementsOfTheShipOnTheBoard(ship, shipLength) {
  for (let elementOfShip of ship) {
    if (ship.length==shipLength) {
      document.getElementById(elementOfShip).style.background = 'blue';
    } else {
      document.getElementById(elementOfShip).style.background = 'red';
    }
  }
}

function hideCoordinatesOfElementsOfTheShipOnBoard(ship) {
  for (let elementOfShip of ship) {
    document.getElementById(elementOfShip).style.background = '';
  }
};

function getShipElementsIds(shipLength,row,column) {
  let arrayOfShipId = []
  const rowParsed = parseInt(row)
  const columnParsed = parseInt(column)
  for (let i = 0; i < shipLength; i++) {
    if (rowParsed+i>=matrix.length) {
      break6
    } else {
      arrayOfShipId.push(rowParsed+i+"_"+columnParsed)
    }
  }
  return arrayOfShipId
}

function changeDirection() {
  verticalDirection = false;
}

addListenersToSelectShip()










/**
 * 
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