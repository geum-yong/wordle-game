import onRenderHeader from "./components/Header/index.js";

const app = document.getElementById("app");

const onCreateComponent = ({ parentElement, childElement, event }) => {
  parentElement.appendChild(childElement);
  event && event();

  return childElement;
};

window.addEventListener("DOMContentLoaded", () => {
  const { element: Header } = onRenderHeader("Wordle");
  onCreateComponent({ parentElement: app, childElement: Header });
});
