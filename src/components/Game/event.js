import words from "./wordsData.js";
import openToastPopup from "../TastPopup/event.js";
import openGameResultPopup from "../GameResultPopup/event.js";

const findIndexAll = (arr, condition) => {
  const result = [];

  arr.forEach((element, index) => {
    if (condition(element, index, arr)) {
      result.push(index);
    }
  });

  return result;
};

const onResizeBoard = (board) => {
  board.style.width = window.innerWidth > 400 ? "400px" : "100%";
  board.style.height = window.innerHeight > 400 ? "400px" : "100%";
};

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].toUpperCase();
};

const checkGreenWord = ({
  selectedWordArr,
  selectedWordKeyIndex,
  boardRowTitles,
  selectedAlphabetKey,
}) => {
  selectedWordArr[selectedWordKeyIndex] += "-2";
  boardRowTitles[selectedWordKeyIndex].classList.add("green");

  const isChangeKeyColorGreen =
    !selectedAlphabetKey.classList.contains("green");
  if (isChangeKeyColorGreen) {
    selectedAlphabetKey.classList.add("green");
  }
};

const checkYellowWord = ({
  selectedWordArr,
  selectedWordKeyIndex,
  boardRowTitles,
  selectedAlphabetKey,
}) => {
  selectedWordArr[selectedWordKeyIndex] += "-1";
  boardRowTitles[selectedWordKeyIndex].classList.add("yellow");

  const isChangeKeyColorYellow =
    !selectedAlphabetKey.classList.contains("green") &&
    !selectedAlphabetKey.classList.contains("yellow");
  if (isChangeKeyColorYellow) {
    selectedAlphabetKey.classList.add("yellow");
  }
};

const checkGrayWord = ({
  selectedWordArr,
  selectedWordKeyIndex,
  boardRowTitles,
  selectedAlphabetKey,
}) => {
  selectedWordArr[selectedWordKeyIndex] += "-0";
  boardRowTitles[selectedWordKeyIndex].classList.add("gray");

  const isChangeKeyColorGray =
    !selectedAlphabetKey.classList.contains("green") &&
    !selectedAlphabetKey.classList.contains("yellow") &&
    !selectedAlphabetKey.classList.contains("gray");
  if (isChangeKeyColorGray) {
    selectedAlphabetKey.classList.add("gray");
  }
};

const onAddEventGame = () => {
  let selectedRandomWord = getRandomWord(); // 랜덤으로 선택된 단어
  let gameLifeCount = 0; // 제출 횟수 (최대 6번)
  let selectedWordCount = 0; // 한 단어당 키보드 입력 횟수 (최대 5번)

  /*
   키보드 입력값 및 일치여부
   일치여부 : 0 -> 불일치, 1 -> 단어 존재함, 2 -> 단어 존재 및 위치 일치
   ex) Q-1
  */
  let selectedWordKeys = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];

  const keyboard = document.querySelector("#keyboard");
  const alphabetKeys = document.querySelectorAll(".alphabetKey");
  const boardRows = document.querySelectorAll(".boardRow");
  const board = document.querySelector("#board");

  const boardTiles = [[], [], [], [], [], []];
  boardRows.forEach((boardRow, boardRowIndex) => {
    boardTiles[boardRowIndex] = boardRow.children;
  });

  // window 넓이, 높이에 따른 게임 보드판 크기 세팅
  onResizeBoard(board);
  window.addEventListener("resize", () => onResizeBoard(board));

  const resetGame = () => {
    selectedRandomWord = getRandomWord();
    gameLifeCount = 0;
    selectedWordCount = 0;
    selectedWordKeys = [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ];

    boardTiles.forEach((boardRow) => {
      [...boardRow].forEach((boardTile) => {
        boardTile.innerHTML = "";
        boardTile.className = "boardTile";
      });
    });

    alphabetKeys.forEach((alphabetKey) => {
      alphabetKey.className = "keyboardKey alphabetKey";
    });
  };

  // ENTER 클릭
  const onClickEnterKey = () => {
    // 정답 단어 배열
    const selectedRandomWordsArr = selectedRandomWord.split("");
    // 유저가 입력한 단어 배열
    const selectedWordArr = selectedWordKeys[gameLifeCount];
    // 유저가 입력한 단어
    const selectedWords = selectedWordArr.join("");
    const boardRowTitles = boardTiles[gameLifeCount];

    if (selectedWordCount < 5) {
      openToastPopup("5자를 채워주세요");
      return;
    }

    if (!words.includes(selectedWords.toLowerCase())) {
      openToastPopup("리스트에 없는 단어입니다.");
      return;
    }

    selectedWordArr.forEach((selectedWordKey, selectedWordKeyIndex) => {
      // 입력한 알파벳 키
      const selectedAlphabetKey = [...alphabetKeys].find((alphabetKey) => {
        return alphabetKey.innerHTML === selectedWordKey;
      });

      // 단어가 같고 위치가 같을 경우
      if (selectedWordKey === selectedRandomWordsArr[selectedWordKeyIndex]) {
        checkGreenWord({
          selectedWordArr,
          selectedWordKeyIndex,
          boardRowTitles,
          selectedAlphabetKey,
        });
        selectedRandomWordsArr[selectedWordKeyIndex] = "";
        return;
      }

      // 정답 단어에 포함되는 경우
      const sameSelectedRandomWordIndexArr = findIndexAll(
        selectedRandomWordsArr,
        (selectedRandomWord) => selectedRandomWord === selectedWordKey,
      );
      if (sameSelectedRandomWordIndexArr.length > 0) {
        for (
          let sameSelectedRandomWordIndexCount = 0;
          sameSelectedRandomWordIndexCount <
          sameSelectedRandomWordIndexArr.length;
          sameSelectedRandomWordIndexCount++
        ) {
          const sameSelectedRandomWordIndex =
            sameSelectedRandomWordIndexArr[sameSelectedRandomWordIndexCount];

          if (sameSelectedRandomWordIndex > selectedWordKeyIndex) {
            if (
              selectedRandomWordsArr[sameSelectedRandomWordIndex] ===
              selectedWordArr[sameSelectedRandomWordIndex]
            ) {
              if (
                sameSelectedRandomWordIndexCount ===
                sameSelectedRandomWordIndexArr.length - 1
              ) {
                checkGrayWord({
                  selectedWordArr,
                  selectedWordKeyIndex,
                  boardRowTitles,
                  selectedAlphabetKey,
                });
              }
            } else {
              checkYellowWord({
                selectedWordArr,
                selectedWordKeyIndex,
                boardRowTitles,
                selectedAlphabetKey,
              });
              selectedRandomWordsArr[sameSelectedRandomWordIndex] = "";
              break;
            }
          } else {
            checkYellowWord({
              selectedWordArr,
              selectedWordKeyIndex,
              boardRowTitles,
              selectedAlphabetKey,
            });
            selectedRandomWordsArr[sameSelectedRandomWordIndex] = "";
            break;
          }
        }

        return;
      }

      // 포함되지 않는 경우
      checkGrayWord({
        selectedWordArr,
        selectedWordKeyIndex,
        boardRowTitles,
        selectedAlphabetKey,
      });
    });

    gameLifeCount += 1;
    selectedWordCount = 0;

    const isEndGame =
      selectedWords === selectedRandomWord || gameLifeCount === 6;
    if (isEndGame) {
      openGameResultPopup({
        gameLifeCount,
        resultWord: selectedRandomWord,
        gameResultArr: selectedWordKeys,
        replayEvent: resetGame,
      });
    }
  };

  // BACK 클릭
  const onClickBackKey = () => {
    if (selectedWordCount === 0) return;
    selectedWordKeys[gameLifeCount][selectedWordCount - 1] = "";
    boardTiles[gameLifeCount][selectedWordCount - 1].innerHTML = "";
    selectedWordCount -= 1;
  };

  // 알파벳 클릭
  const onClickWordKey = (seletedKeyText) => {
    if (selectedWordCount === 5) return;
    selectedWordKeys[gameLifeCount][selectedWordCount] = seletedKeyText;
    boardTiles[gameLifeCount][selectedWordCount].innerHTML = seletedKeyText;
    selectedWordCount += 1;
  };

  const onClickKeyboardKey = (e) => {
    const isKey =
      e.target.classList.contains("keyboardKey") &&
      !e.target.classList.contains("keyboardOneAndHalf");
    const isEnterKey = e.target.id === "enterKey";
    const isBackKey = e.target.id === "backKey";

    if (isKey) {
      onClickWordKey(e.target.innerHTML);
    } else if (isEnterKey) {
      onClickEnterKey();
    } else if (isBackKey) {
      onClickBackKey();
    }
  };
  const onkeyupKeyboardKey = (e) => {
    const selectedKey = e.key.toUpperCase();
    const isAlphabeticKey = /^[a-zA-Z]$/.test(selectedKey);
    const isEnterKey = selectedKey === "ENTER";
    const isBackKey = selectedKey === "BACKSPACE";

    if (isAlphabeticKey) {
      onClickWordKey(selectedKey);
    } else if (isEnterKey) {
      onClickEnterKey();
    } else if (isBackKey) {
      onClickBackKey();
    }
  };

  keyboard.addEventListener("click", onClickKeyboardKey);
  window.addEventListener("keyup", onkeyupKeyboardKey);
};

export default onAddEventGame;
