export default function initScrollSuave() {
  const menu = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function smoothScroll(event) {
    event.preventDefault();
    const linkTo = event.currentTarget.getAttribute("href");
    const section = document.querySelector(linkTo);
    section.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
  menu.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });
}
