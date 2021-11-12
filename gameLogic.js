const boardOfPreparetionPage = document.getElementById("preparationBoard")
const selectButtons = document.querySelectorAll('.typeOfShip')
let cellsPreparationBoard = document.querySelectorAll('.cell')
console.log()
let player1ShipsLocation = [];
let player2ShipsLocation = [];

function turnShip() {
  
}

function changeColorOfCellWhenCoursorOnIt(shipLength) {
    boardOfPreparetionPage.onmouseover = function(e) {
      let shipLocation = e.target;
      let centerCellOfShip = shipLocation;
      centerCellOfShip = shipLocation.id.split('_');
      let row=centerCellOfShip[0]
      let column=centerCellOfShip[1]
      let ship = showShipOnBoard(shipLength,row,column);
      console.log(ship)
      for (let j = 0; j < ship.length; j++) {
        let cellOfShip = ship[j];
        document.getElementById(cellOfShip).style.background = 'blue';
        
      }

    };
    boardOfPreparetionPage.onmouseout = function(e) {
      let shipLocation = e.target;
      let centerCellOfShip = shipLocation;
      centerCellOfShip = shipLocation.id.split('_');
      let row=centerCellOfShip[0]
      let column=centerCellOfShip[1]
      let ship = showShipOnBoard(shipLength,row,column);
      for (let j = 0; j < ship.length; j++) {
        let cellOfShip = ship[j];
        document.getElementById(cellOfShip).style.background = '';
      }
    }
}

function showShipOnBoard(shipLength,row,column) {
  let shipArray = []
  for (let i = 0; i < shipLength; i++) {
    const rowParsed = parseInt(row)
    const columnParsed = parseInt(column)
    shipArray.push(rowParsed+i+"_"+columnParsed)
  }
  return shipArray
}

function chooseShip(e) {
  const shipButton = e.target.closest('.typeOfShip')
  let shipLength = parseInt(shipButton.dataset.shipLength);
  changeColorOfCellWhenCoursorOnIt(shipLength)
}

function pushButtonToSelectShip() {
  for (let i = 0; i < selectButtons.length; i++) {
    selectButtons[i].onclick = function(e) {
        chooseShip(e);
    };
  }
}

function setOneCellShip(handleCell, array) {
  let coordinate = []
  coordinate.push(handleCell.id);
  handleCell.style.backgroundColor = "blue";
  array.push(coordinate);
}


pushButtonToSelectShip()










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