const themeToggle = document.querySelector(".theme-toggle");
const lightButton = document.querySelector(".theme-btn--light");
const darkButton = document.querySelector(".theme-btn--dark");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  darkButton.classList.add("active");
} else {
  lightButton.classList.add("active");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const isDark = document.body.classList.contains("dark-theme");

  lightButton.classList.toggle("active", !isDark);
  darkButton.classList.toggle("active", isDark);

  localStorage.setItem("theme", isDark ? "dark" : "light");
});
