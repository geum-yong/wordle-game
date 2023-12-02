const Header = (title) => {
  const headerElement = document.createElement("header");
  headerElement.classList.add("header");
  headerElement.innerHTML = `
    <h1>
      ${title}
    </h1>
  `;

  return headerElement;
};

export default Header;
