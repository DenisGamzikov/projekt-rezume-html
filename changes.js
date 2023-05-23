const body = document.getElementById("body");
const menuEl = document.getElementById("navigation-low-width-screen");
const removeClass = (linkEl) => {
  linkEl.classList.remove("active");
};
const ActiveButton = (id) => {
  const linksEl = document.querySelectorAll(".low-width-menu-active a");
  linksEl.forEach(removeClass);
  body.classList.remove("unactive-body");
  menuEl.classList.remove("low-width-menu-active");
  menuEl.classList.add("navigation-low-width-screen");
  const aEL = document.getElementById(id);
  aEL.classList.add("active");
};

function openMenu() {
  menuEl.classList.remove("navigation-low-width-screen");
  menuEl.classList.add("low-width-menu-active");
  body.classList.add("unactive-body");
}
