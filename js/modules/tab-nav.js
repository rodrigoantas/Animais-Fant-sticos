export default function initTab() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  ;

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo", "show-right")
    function addActive(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direcao = tabContent[index].dataset.anime
      tabContent[index].classList.add("ativo", direcao);
    }

    tabMenu.forEach((img, index) => {
      img.addEventListener("click", function () {
        addActive(index);
      });
    });
  }
}
