const removeClass = (linkEl) => {
  linkEl.classList.remove("active");
};
const ActiveButton = (id) => {
  location.hash = id;
  const linksEl = document.querySelectorAll(".navigation-low-width-screen a");
  linksEl.forEach(removeClass);
  const aEL = document.getElementById(id);
  aEL.classList.add("active");
};
