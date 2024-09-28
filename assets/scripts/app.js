const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navLinks.classList.toggle("active");
  navLinks.classList.toggle("hide");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  menu.classList.remove("active");
  navLinks.classList.remove("active");
  navLinks.classList.remove("hide");

}))