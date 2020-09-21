export default function initAccordion() {
  const accordionTitle = document.querySelectorAll('[data-anime="accordion"] dt');
  const accordionDesc = document.querySelectorAll('[data-anime="accordion"] dd');
  accordionDesc[0].classList.add("ativo");

  function addActive(index) {
    accordionDesc[index].classList.toggle("ativo");
  }

  accordionTitle.forEach((title, index) => {
    title.addEventListener("click", function () {
      addActive(index);
    });
  });
}
