const removeClass = (aEl) => {
  aEl.classList.remove("active");
};
const ActiveButton = (id) => {
  location.hash = id;
  console.log({ id });
  const allaEl = document.querySelectorAll(".menu_button a");
  allaEl.forEach(removeClass);
  const aEL = document.getElementById(id);
  aEL.classList.add("active");
};
