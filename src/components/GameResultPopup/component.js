const getCurrentDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

const GameResultPopup = () => {
  const gameResultPopup = document.createElement("div");
  gameResultPopup.id = "gameResultPopup";
  gameResultPopup.classList.add("gameResultPopup");

  const gameResultEmoji = document.createElement("div");

  // gameResultArr.forEach((gameResultRow) => {
  //   gameResultRow.forEach((boardTileResult) => {
  //     const result = boardTileResult.split("-")[1];
  //
  //     // ⬛🟨🟩
  //     if (result === "2") gameResultEmoji.innerHTML += "🟩";
  //     else if (result === "1") gameResultEmoji.innerHTML += "🟨";
  //     else gameResultEmoji.innerHTML += "⬛";
  //   });
  //
  //   gameResultEmoji.innerHTML += "<br />";
  // });

  gameResultPopup.innerHTML = `
    <div>
      <p class="gameResultText">Wordle ${getCurrentDate()} 5/6</p>
      <div class="gameResultEmoji">
        <p class="gameResultEmojiRow">
          🟩⬛🟩🟩⬛
        </p>
        <p class="gameResultEmojiRow">
          🟩⬛🟩🟩⬛
        </p>
        <p class="gameResultEmojiRow">
          🟩⬛🟩🟩⬛
        </p>
        <p class="gameResultEmojiRow">
          🟩⬛🟩🟩⬛
        </p>
      </div>
    </div>
    
    <div class="gameResultButtonBox">
      <button class="button shareButton">공유하기</button>
      <button class="button replayButton">다시하기</button>
    </div>
  `;

  return gameResultPopup;
};

export default GameResultPopup;
