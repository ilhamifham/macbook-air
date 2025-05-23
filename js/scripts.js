const header = document.querySelector("header");
const navButton = document.querySelector("header button");
const main = document.querySelector("main");

function handleNav() {
  header.removeAttribute("class");
  main.removeAttribute("inert");
}

navButton.addEventListener("click", function () {
  if (header.classList.contains("nav-open")) {
    handleNav();
  } else {
    header.classList.add("nav-open");
    main.setAttribute("inert", "");
  }
});

document.addEventListener("click", function (event) {
  if (!header.contains(event.target)) {
    handleNav();
  }
})

window.addEventListener("resize", function () {
  if (window.innerWidth >= 834) {
    handleNav();
  }
});

window.addEventListener("scroll", function () {
  if (header.classList.contains("nav-open")) {
    handleNav();
  }
});

const inputs = document.querySelectorAll(".color-picker input");
const pictureGroups = [document.querySelectorAll(".gallery .picture-3"), document.querySelectorAll(".gallery .picture-4"), document.querySelectorAll(".gallery .picture-5")];

inputs.forEach(function (input, index) {
  input.addEventListener("change", function () {
    inputs.forEach(function (input) { input.removeAttribute("checked") });

    inputs[index].setAttribute("checked", "");

    pictureGroups.forEach(function (group) {
      group.forEach(function (picture) {
        picture.style.display = "none";
      });
    });

    pictureGroups.forEach(function (group) {
      if (group[index]) {
        group[index].removeAttribute("style");
      }
    });
  });
});

const nextSlideButton = document.querySelector("#next");
const prevSlideButton = document.querySelector("#prev");
const slider = document.querySelector(".design .slider");
const paragraphs = document.querySelectorAll(".design .slide-images-text p");

function handleParagraphs() {
  paragraphs.forEach(function (paragraph) {
    paragraph.style.opacity = "0";
  });
  paragraphs[counter].style.opacity = "100%";
}

let counter = 0;
let isClicked = false;

nextSlideButton.addEventListener("click", function () {
  if (isClicked) return;

  counter += 1;
  slider.style.transform = `translateX(-${100 * counter}%)`;
  prevSlideButton.removeAttribute("disabled");
  handleParagraphs();

  if (counter === 2) {
    this.setAttribute("disabled", "");
  }

  isClicked = true;
  setTimeout(function () {
    isClicked = false;
  }, 1000);
});

prevSlideButton.addEventListener("click", function () {
  if (isClicked) return;

  counter -= 1;
  slider.style.transform = `translateX(-${100 * counter}%)`;
  nextSlideButton.removeAttribute("disabled");
  handleParagraphs();

  if (counter === 0) {
    this.setAttribute("disabled", "");
  }

  isClicked = true;
  setTimeout(function () {
    isClicked = false;
  }, 1000);
});
