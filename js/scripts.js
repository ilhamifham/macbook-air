const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const toggleTheme = document.getElementById("theme-switcher");
const theme = localStorage.getItem("theme");

if (theme) {
  document.body.classList.add(theme);
} else if (prefersDarkScheme.matches) {
  document.body.classList.add("dark");
} else {
  document.body.classList.add("light");
}

toggleTheme.addEventListener("click", function () {
  const themeLight = document.body.classList.contains("light");

  if (themeLight) {
    document.body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  }
});

const inputs = document.querySelectorAll(".color-picker input");
const pictures = document.querySelectorAll(".gallery .picture-3");
const pictures2 = document.querySelectorAll(".gallery .picture-4");

inputs.forEach(function (input, index) {
  input.addEventListener("change", function () {
    inputs.forEach(function (input) {
      input.removeAttribute("checked");
    });
    pictures.forEach(function (picture) {
      picture.style.display = "none";
    });
    pictures2.forEach(function (picture) {
      picture.style.display = "none";
    });

    inputs[index].setAttribute("checked", "");
    pictures[index].removeAttribute("style");
    pictures2[index].removeAttribute("style");
  });
});
