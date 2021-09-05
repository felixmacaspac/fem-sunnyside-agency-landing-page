// Toggle navbar
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById("toggleBtn")
  const nav = document.getElementById("navMenu");

  console.log(toggle)
  console.log(nav)

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("is_active");

      console.log("hello")
    });
  }
};

showMenu("nav-toggle", "nav-menu");

// Remove menu for every click
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.remove("is_active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));