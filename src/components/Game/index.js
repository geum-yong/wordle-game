import Game from "./component.js";
import onAddEventGame from "./event.js";

const onRenderGame = () => {
  const event = () => onAddEventGame();

  return { element: Game(), event };
};

export default onRenderGame;
