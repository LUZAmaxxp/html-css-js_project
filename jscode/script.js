document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const popup = document.getElementById("popup");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    showPopup();
  });

  function showPopup() {
    popup.style.display = "block";
    popup.style.accentColor = "white";
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  }

  const scrollToTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
