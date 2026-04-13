document.addEventListener("DOMContentLoaded", () => {
  const anchors = document.querySelectorAll('a[href^="#"]');

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  const cards = document.querySelectorAll(".subject-card, .grade, .step-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-4px)";
      card.style.transition = "transform 0.2s ease";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });
});
