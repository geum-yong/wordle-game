import Header from "./component.js";

const onRenderHeader = (title) => {
  return { element: Header(title) };
};

export default onRenderHeader;
