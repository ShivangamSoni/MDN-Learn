const div = document.querySelector("div");
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

div.style.width = windowWidth + "px";
div.style.height = windowHeight + "px";

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  div.style.width = windowWidth + "px";
  div.style.height = windowHeight + "px";
});
