export default class TabNav {
  constructor (menu, content) {
    this.menu = document.querySelectorAll(menu);
    this.content = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }
  addActive(index) {
      this.content.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direction = this.content[index].dataset.anime
      this.content[index].classList.add("ativo", direction);
    }
    

  addTabNavEvent() {
      this.menu.forEach((img, index) => {
      img.addEventListener("click", function () {
        this.addActive(index);
      });
    });
    }
    
  init() {
    this.addActive(0);
    this.addTabNavEvent();

    }

    
  }

