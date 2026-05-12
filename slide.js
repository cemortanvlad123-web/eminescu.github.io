document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (!slides.length) return;

  let index = 0;

  function showSlide(newIndex) {
    slides[index].classList.remove("active");
    index = (newIndex + slides.length) % slides.length;
    slides[index].classList.add("active");
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => showSlide(index + 1));
    prevBtn.addEventListener("click", () => showSlide(index - 1));
  }

  setInterval(() => {
    showSlide(index + 1);
  }, 5000);

});