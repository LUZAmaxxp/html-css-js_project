document.addEventListener("DOMContentLoaded", function () {
  // Function to check if an element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    const contentElements = document.querySelectorAll(".scroll-fade-in");

    contentElements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("loaded");
      } else {
        element.classList.remove("loaded");
      }
    });
  }

  document.addEventListener("scroll", handleScroll);

  handleScroll();
});
