const openToastPopup = (text) => {
  const toastPopup = document.querySelector("#toastPopup");
  toastPopup.innerHTML = text;
  toastPopup.style.display = "block";
  toastPopup.classList.add("view");

  setTimeout(() => {
    toastPopup.classList.remove("view");
  }, 2000);

  setTimeout(() => {
    toastPopup.style.display = "none";
  }, 3000);
};

export default openToastPopup;
