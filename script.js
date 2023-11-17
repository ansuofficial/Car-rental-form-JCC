"use strict";

const theme = document.querySelector("#theme");
const body = document.querySelector("body");
let isDarkTheme = false;

theme.addEventListener("click", () => {
  if (isDarkTheme) {
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#0f0f0f";
    theme.textContent = "Dark theme";
  } else {
    body.style.backgroundColor = "#0f0f0f";
    body.style.color = "#ffffff";
    theme.textContent = "Light theme"
  }

  isDarkTheme = !isDarkTheme;
});

