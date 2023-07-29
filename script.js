document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetSection = document.querySelector(e.target.getAttribute("href"));
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const flipperElements = document.querySelectorAll('.flip-card .flip-card-inner');
  
    function flipCardOnClick(event) {
      const flipContainer = event.currentTarget.closest('.flip-card');
      const isFlipped = flipContainer.classList.contains('hover');
  
      if (isFlipped) {
        flipContainer.classList.remove('hover');
        event.currentTarget.style.transform = 'rotateY(0)';
      } else {
        flipContainer.classList.add('hover');
        event.currentTarget.style.transform = 'rotateY(180deg)';
      }
    }
  
    flipperElements.forEach((flipper) => {
      flipper.addEventListener('click', flipCardOnClick);
    });
  });
  