const toggleButton = document.querySelector(".md\\:hidden");
const navLinks = document.querySelector(".hidden.md\\:hidden ul");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});
