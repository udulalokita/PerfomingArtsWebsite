// Getting references to the elements with specific class names
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

// Adding a click event listener to the hamburger icon
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})