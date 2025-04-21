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
