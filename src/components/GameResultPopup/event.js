import openToastPopup from "../TastPopup/event.js";

const getCurrentDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");

  const hours = today.getHours().toString().padStart(2, "0");
  const minutes = today.getMinutes().toString().padStart(2, "0");
  const seconds = today.getSeconds().toString().padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const onClickShareButton = () => {
  const copyText = document.querySelector("#gameResultBox").innerText;

  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = copyText;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);

  openToastPopup("게임 결과가 클립보드에 복사되었습니다");
};

const openGameResultPopup = ({
  gameLifeCount,
  resultWord,
  gameResultArr,
  replayEvent,
}) => {
  const gameResultPopup = document.querySelector("#gameResultPopup");
  const gameResultEmoji = document.createElement("div");
  gameResultEmoji.classList.add("gameResultEmoji");

  gameResultArr.forEach((gameResultRow) => {
    const gameResultEmojiRow = document.createElement("p");
    gameResultEmojiRow.classList.add("gameResultEmojiRow");

    gameResultRow.forEach((boardTileResult) => {
      const result = boardTileResult.split("-")[1];

      if (result === "2") gameResultEmojiRow.innerHTML += "🟩";
      else if (result === "1") gameResultEmojiRow.innerHTML += "🟨";
      else if (result === "0") gameResultEmojiRow.innerHTML += "⬛";
      else gameResultEmojiRow.innerHTML += "⬜️";
    });

    gameResultEmoji.appendChild(gameResultEmojiRow);
  });

  gameResultPopup.innerHTML = `
    <button id="closeButton" class="closeButton">
      X
    </button>

    <div id="gameResultBox">
      <p class="gameResultText">Wordle</p>
      <p class="gameResultText">정답 : ${resultWord}</p>
      <p class="gameResultText">${getCurrentDate()}</p>
      <p class="gameResultText">${gameLifeCount}/6</p>
      ${gameResultEmoji.innerHTML}
    </div>
    
    <div class="gameResultButtonBox">
      <button id="shareButton" class="button shareButton">공유하기</button>
      <button id="replayButton" class="button replayButton">다시하기</button>
    </div>
  `;

  const closeButton = document.querySelector("#closeButton");
  const shareButton = document.querySelector("#shareButton");
  const replayButton = document.querySelector("#replayButton");

  closeButton.addEventListener("click", () => {
    gameResultPopup.classList.remove("view");
  });
  shareButton.addEventListener("click", onClickShareButton);
  replayButton.addEventListener("click", () => {
    replayEvent();
    gameResultPopup.classList.remove("view");
  });

  gameResultPopup.classList.add("view");
};

export default openGameResultPopup;
