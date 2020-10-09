import clickOutside from './click-outside.js';

export default class DropdownMenu {
  constructor(dropdownMenus) {
    this.dropdownMenus = document.querySelector(dropdownMenus)

    //bind dos callbacks
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
  };

  // ativa o dropdown menu e também a funçao de outsideclick
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget
    element.classList.add('ativo');
    clickOutside(element, ['touchstart', 'click'], () => {
      element.classList.remove('ativo');
    })
    }
 // adiciona os eventos ao dropdown
  addDropdownMenuEvent() {
    this.dropdownMenus.addEventListener('click', this.activeDropdownMenu);
    this.dropdownMenus.addEventListener('touchstart', this.activeDropdownMenu);
    }

    init() {
      this.addDropdownMenuEvent()
      return this
    }
    









}

