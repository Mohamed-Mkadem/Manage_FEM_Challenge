let mainNav = document.getElementById("main-nav");
let menuController = document.getElementById("menu-controller");
let showCase = document.querySelector(".showcase");
let carousel = document.querySelector(".caroussel");
let slides = Array.from(carousel.querySelectorAll(".testi"));
// let prevBtn = document.querySelector(".prev");
// let nextBtn = document.querySelector(".next");
let navDots = document.querySelector(".navDots");
let dots = Array.from(navDots.children);

menuController.onclick = function () {
  mainNav.classList.toggle("open");
  showCase.classList.toggle("open");
  menuController.classList.toggle("open");
  document.body.classList.toggle("open");
};

const slideWidth = slides[0].getBoundingClientRect().width;
console.log("slideWidth :", slideWidth);

let setSlidesPositions = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidesPositions);

function moveToSlide(carousel, currentSlide, targetSlide) {
  carousel.style.transform = "translatex(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
}

// nextBtn.addEventListener("click", () => {
//   let currentSlide = carousel.querySelector(".current-slide");
//   let nextSlide = currentSlide.nextElementSibling;
//   let amountToMove = nextSlide.style.left;
//   moveToSlide(carousel, currentSlide, nextSlide);
// });

// prevBtn.addEventListener("click", () => {
//   let currentSlide = carousel.querySelector(".current-slide");
//   let previousSlide = currentSlide.previousElementSibling;
//   let amountToMove = previousSlide.style.left;
//   moveToSlide(carousel, currentSlide, previousSlide);
// });

navDots.addEventListener("click", (e) => {
  let targetDot = e.target.closest("button");
  if (!targetDot) return;
  let currentSlide = carousel.querySelector(".current-slide");
  let currentDot = navDots.querySelector(".active");
  console.log('currentDot :', currentDot);
  let targetIndex = dots.findIndex((dot) => dot === targetDot);
  let targetSlide = slides[targetIndex];
  moveToSlide(carousel, currentSlide, targetSlide);
  currentDot.classList.remove("active");
  dots[targetIndex].classList.add("active");
});
