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
  