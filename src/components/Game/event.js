const onResizeBoard = (board) => {
  board.style.width = window.innerWidth > 304 ? "304px" : "100%";
  board.style.height = window.innerHeight > 304 ? "304px" : "100%";
};

const onAddEventGame = () => {
  const board = document.querySelector("#board");
  onResizeBoard(board);
  window.addEventListener("resize", () => onResizeBoard(board));
};

export default onAddEventGame;
