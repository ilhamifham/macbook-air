const header = document.querySelector("header");
const navButton = document.querySelector("header button");
const nav = document.querySelector("header nav");
const curtain = document.querySelector(".curtain");

function handleNav() {
  header.removeAttribute("style");
  nav.removeAttribute("class");
  curtain.classList.remove("curtain-open");
}

navButton.addEventListener("click", () => {
  if (nav.classList.contains("nav-open")) {
    handleNav();
  } else {
    header.style.backgroundColor = "#ffffff";
    nav.classList.add("nav-open");
    curtain.classList.add("curtain-open");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 834) {
    handleNav();
  }
});

const inputs = document.querySelectorAll(".color-picker input");
const pictureGroups = [document.querySelectorAll(".gallery .picture-3"), document.querySelectorAll(".gallery .picture-4"), document.querySelectorAll(".gallery .picture-5")];

inputs.forEach((input, index) => {
  input.addEventListener("change", () => {
    inputs.forEach((input) => input.removeAttribute("checked"));

    pictureGroups.forEach((group) => {
      group.forEach((picture) => {
        picture.style.display = "none";
      });
    });

    inputs[index].setAttribute("checked", "");

    pictureGroups.forEach((group) => {
      if (group[index]) {
        group[index].removeAttribute("style");
      }
    });
  });
});
