const Game = () => {
  const gameContainerElement = document.createElement("main");
  gameContainerElement.classList.add("gameContainer");

  // 게임 보드판 구성 start
  const boardContainerElement = document.createElement("div");
  boardContainerElement.classList.add("boardContainer");

  const boardElement = document.createElement("div");
  boardElement.id = "board";
  boardElement.classList.add("board");

  for (let boardRowCount = 0; boardRowCount < 6; boardRowCount++) {
    const boardRowElement = document.createElement("div");
    boardRowElement.classList.add("boardRow");

    for (let boardTileCount = 0; boardTileCount < 5; boardTileCount++) {
      const boardTileElement = document.createElement("div");
      boardTileElement.classList.add("boardTile");
      boardRowElement.appendChild(boardTileElement);
    }

    boardElement.appendChild(boardRowElement);
  }

  boardContainerElement.appendChild(boardElement);
  gameContainerElement.appendChild(boardContainerElement);
  // 게임 보드판 구성 end

  // 키보드 구성 start
  const keyboardElement = document.createElement("div");
  keyboardElement.id = "keyboard";
  keyboardElement.classList.add("keyboard");

  for (let keyboardRowCount = 0; keyboardRowCount < 3; keyboardRowCount++) {
    const keyboardRowElement = document.createElement("div");
    keyboardRowElement.classList.add("keyboardRow");

    let keyArr = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    if (keyboardRowCount === 1) {
      keyArr = ["HALF", "A", "S", "D", "F", "G", "H", "J", "K", "L", "HALF"];
    } else if (keyboardRowCount === 2) {
      keyArr = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACK"];
    }

    for (
      let keyboardKeyCount = 0;
      keyboardKeyCount < keyArr.length;
      keyboardKeyCount++
    ) {
      let keyboardKeyElement;

      switch (keyArr[keyboardKeyCount]) {
        case "HALF": {
          keyboardKeyElement = document.createElement("div");
          keyboardKeyElement.classList.add("keyboardHalf");
          break;
        }

        case "ENTER": {
          keyboardKeyElement = document.createElement("button");
          keyboardKeyElement.id = "enterKey";
          keyboardKeyElement.className = "keyboardKey keyboardOneAndHalf";
          keyboardKeyElement.innerHTML = "ENTER";
          break;
        }

        case "BACK": {
          keyboardKeyElement = document.createElement("button");
          keyboardKeyElement.id = "backKey";
          keyboardKeyElement.className = "keyboardKey keyboardOneAndHalf";
          keyboardKeyElement.innerHTML = "BACK";
          break;
        }

        default: {
          keyboardKeyElement = document.createElement("button");
          keyboardKeyElement.className = "keyboardKey alphabetKey";
          keyboardKeyElement.innerHTML = keyArr[keyboardKeyCount];
        }
      }

      keyboardRowElement.appendChild(keyboardKeyElement);
    }

    keyboardElement.appendChild(keyboardRowElement);
  }

  gameContainerElement.appendChild(keyboardElement);
  // 키보드 구성 end

  return gameContainerElement;
};

export default Game;
