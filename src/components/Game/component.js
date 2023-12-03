const Game = () => {
  const gameContainerElement = document.createElement("main");
  gameContainerElement.classList.add("gameContainer");

  gameContainerElement.innerHTML = `
    <div class="boardContainer">
      <div id="board" class="board">
        <div class="boardRow">
          <div class="boardTile"></div>
          <div class="boardTile"></div>
          <div class="boardTile"></div>
          <div class="boardTile"></div>
          <div class="boardTile"></div>
        </div>
        
        <div class="boardRow">
          <div class="boardTile"></div>
          <div class="boardTile"></div>
          <div class="boardTile"></div>
          <div class="boardTile"></div>
          <div class="boardTile"></div>
        </div>
        
        <div class="boardRow">
          <div class="boardTile"></div>
          <div class="boardTile"></div>
          <div class="boardTile"></div>
          <div class="boardTile"></div>
          <div class="boardTile"></div>
        </div>
        
        <div class="boardRow">
          <div class="boardTile"></div>
          <div class="boardTile"></div>
          <div class="boardTile"></div>
          <div class="boardTile"></div>
          <div class="boardTile"></div>
        </div>
        
        <div class="boardRow">
          <div class="boardTile"></div>
          <div class="boardTile"></div>
          <div class="boardTile"></div>
          <div class="boardTile"></div>
          <div class="boardTile"></div>
        </div>
        
        <div class="boardRow">
          <div class="boardTile"></div>
          <div class="boardTile"></div>
          <div class="boardTile"></div>
          <div class="boardTile"></div>
          <div class="boardTile"></div>
        </div>
      </div>
    </div>
    
    <div id="keyboard" class="keyboard">
      <div class="keyboardRow">
        <button class="keyboardKey">Q</button>
        <button class="keyboardKey">W</button>
        <button class="keyboardKey">E</button>
        <button class="keyboardKey">R</button>
        <button class="keyboardKey">T</button>
        <button class="keyboardKey">Y</button>
        <button class="keyboardKey">U</button>
        <button class="keyboardKey">I</button>
        <button class="keyboardKey">O</button>
        <button class="keyboardKey">P</button>
      </div>
      
      <div class="keyboardRow">
        <div class="keyboardHalf"></div>
        <button class="keyboardKey">A</button>
        <button class="keyboardKey">S</button>
        <button class="keyboardKey">D</button>
        <button class="keyboardKey">F</button>
        <button class="keyboardKey">G</button>
        <button class="keyboardKey">H</button>
        <button class="keyboardKey">J</button>
        <button class="keyboardKey">K</button>
        <button class="keyboardKey">L</button>
        <div class="keyboardHalf"></div>
      </div>
      
      <div class="keyboardRow">
        <button id="enterKey" class="keyboardKey keyboardOneAndHalf">ENTER</button>
        <button class="keyboardKey">Z</button>
        <button class="keyboardKey">X</button>
        <button class="keyboardKey">C</button>
        <button class="keyboardKey">V</button>
        <button class="keyboardKey">B</button>
        <button class="keyboardKey">N</button>
        <button class="keyboardKey">M</button>
        <button id="backKey" class="keyboardKey keyboardOneAndHalf">BACK</button>
      </div>
    </div>
  `;

  return gameContainerElement;
};

export default Game;
