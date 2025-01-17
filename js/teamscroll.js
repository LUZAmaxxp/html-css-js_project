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
  const teamCards = document.querySelectorAll(".team-card");
  teamCards.forEach((card) => {
    if (isElementInViewport(card)) {
      card.classList.add("loaded");
    } else if (!isElementInViewport(card)) {
      card.classList.remove("loaded");
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll();

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.9,
  };

  const elements = document.querySelectorAll("#features .fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, observerOptions);

  elements.forEach((element) => {
    observer.observe(element);
  });
});
