const body = document.getElementById("body");
const menuEl = document.getElementById("navigation-low-width-screen");
const screenEl = document.getElementById("all-screen");

const ActiveButton = (id) => {
  body.classList.remove("unactive-body");
  menuEl.classList.remove("low-width-menu-active");
  menuEl.classList.add("navigation-low-width-screen");
  screenEl.classList.remove("opacity-el");
};

function openMenu() {
  menuEl.classList.remove("navigation-low-width-screen");
  menuEl.classList.add("low-width-menu-active");
  body.classList.add("unactive-body");
  screenEl.classList.add("opacity-el");
}
const bigPicture = document.getElementById("container-big-picture");

function willBig() {
  bigPicture.classList.remove("full-picture-off");
  bigPicture.classList.add("full-picture-on");
  screenEl.classList.add("display-none");
}
const closeButtonEl = document.getElementById("close-gray-square");
function willSmall() {
  bigPicture.classList.add("full-picture-off");
  bigPicture.classList.remove("full-picture-on");
  screenEl.classList.remove("display-none");
}
const imgEl = document.getElementById("big-whatsapp-logo");
const btnEl = document.getElementById("pop-up-button");
imgEl.onmouseout = function () {
  btnEl.classList.add("unactive-button");
  btnEl.classList.remove("active-button");
};
imgEl.onmouseover = function () {
  btnEl.classList.remove("unactive-button");
  btnEl.classList.add("active-button");
};
