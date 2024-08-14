let button = document.querySelector("button");
let navbar = document.querySelector(".navbar");
let icon = document.querySelector("i");
let navItem = document.querySelectorAll(".navItem");
button.addEventListener("click", () => {
  navbar.classList.toggle("hidebar");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    navbar.classList.toggle("hidebar");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });
});
window.addEventListener("load", () => {
  if (window.innerWidth <= 600) {
    navbar.classList.add("hidebar");
  }
})
window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    navbar.classList.remove("hidebar");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  } else {
    navbar.classList.add("hidebar");
  }
});
