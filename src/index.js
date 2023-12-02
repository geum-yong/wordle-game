import onRenderHeader from "./components/Header/index.js";
import onRenderAppContainer from "./components/AppContainer/index.js";
import onRenderGame from "./components/Game/index.js";

const app = document.getElementById("app");

const onCreateComponent = ({ parentElement, childElement, event }) => {
  parentElement.appendChild(childElement);
  event && event();
};

window.addEventListener("DOMContentLoaded", () => {
  const { element: Appcontainer } = onRenderAppContainer();
  onCreateComponent({ parentElement: app, childElement: Appcontainer });

  const { element: Header } = onRenderHeader("Wordle");
  onCreateComponent({ parentElement: Appcontainer, childElement: Header });

  const { element: Game } = onRenderGame();
  onCreateComponent({
    parentElement: Appcontainer,
    childElement: Game,
  });
});
