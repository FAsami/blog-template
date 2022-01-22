function toggleNavigationMenu() {
  const navMenu = document.getElementById("navigation-menu")
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none"
  } else {
    navMenu.style.display = "flex"
  }
}
