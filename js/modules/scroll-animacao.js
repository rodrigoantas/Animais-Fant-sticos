export default function initScrollSite() {
  const scroll = document.querySelectorAll('[data-anime="scroll"]');
  const window60 = window.innerHeight * 0.6;

  function animaScroll() {
    scroll.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - window60;
      if (sectionTop < 0) {
        section.classList.add("ativo");
      }
    });
  }

  animaScroll();

  window.addEventListener("scroll", animaScroll);
}

