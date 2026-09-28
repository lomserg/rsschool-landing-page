const burgerBtn = document.querySelector(".toggle-btn");
const burgerMenu = document.querySelector(".burger__container");
const body = document.querySelector("body");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  body.classList.toggle("lock-scroll");
});

const links = document.querySelectorAll(".burger__btn");
links.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("link");
    burgerBtn.classList.remove("active");
    burgerMenu.classList.remove("active");
    body.classList.remove("lock-scroll");
  });
});
