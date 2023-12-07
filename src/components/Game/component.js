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
        <button class="keyboardKey alphabetKey">Q</button>
        <button class="keyboardKey alphabetKey">W</button>
        <button class="keyboardKey alphabetKey">E</button>
        <button class="keyboardKey alphabetKey">R</button>
        <button class="keyboardKey alphabetKey">T</button>
        <button class="keyboardKey alphabetKey">Y</button>
        <button class="keyboardKey alphabetKey">U</button>
        <button class="keyboardKey alphabetKey">I</button>
        <button class="keyboardKey alphabetKey">O</button>
        <button class="keyboardKey alphabetKey">P</button>
      </div>
      
      <div class="keyboardRow">
        <div class="keyboardHalf"></div>
        <button class="keyboardKey alphabetKey">A</button>
        <button class="keyboardKey alphabetKey">S</button>
        <button class="keyboardKey alphabetKey">D</button>
        <button class="keyboardKey alphabetKey">F</button>
        <button class="keyboardKey alphabetKey">G</button>
        <button class="keyboardKey alphabetKey">H</button>
        <button class="keyboardKey alphabetKey">J</button>
        <button class="keyboardKey alphabetKey">K</button>
        <button class="keyboardKey alphabetKey">L</button>
        <div class="keyboardHalf"></div>
      </div>
      
      <div class="keyboardRow">
        <button id="enterKey" class="keyboardKey keyboardOneAndHalf">ENTER</button>
        <button class="keyboardKey alphabetKey">Z</button>
        <button class="keyboardKey alphabetKey">X</button>
        <button class="keyboardKey alphabetKey">C</button>
        <button class="keyboardKey alphabetKey">V</button>
        <button class="keyboardKey alphabetKey">B</button>
        <button class="keyboardKey alphabetKey">N</button>
        <button class="keyboardKey alphabetKey">M</button>
        <button id="backKey" class="keyboardKey keyboardOneAndHalf">BACK</button>
      </div>
    </div>
  `;

  return gameContainerElement;
};

export default Game;
