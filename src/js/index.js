// Toggle navbar

const hamburger = document.querySelector("#toggleBtn");
const navMenu = document.querySelector("#navMenu");

hamburger.addEventListener("click", (mobileMenu) => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("is_active");
});

// Remove menu for every click
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.remove("is_active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
