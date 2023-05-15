const changeThemeButton = document.getElementById("change_theme_button")
const changeThemeButtonImage = document.querySelector(".button_image")
const body = document.querySelector("body")

changeThemeButton.addEventListener("click", () => {
  const darkModeOn = body.classList.contains("dark_mode")

  body.classList.toggle("dark_mode")

  if (darkModeOn) {
    changeThemeButtonImage.setAttribute("src", "./src/images/moon.png")
  } else {
    changeThemeButtonImage.setAttribute("src", "./src/images/sun.png")
  }
})
