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
});
