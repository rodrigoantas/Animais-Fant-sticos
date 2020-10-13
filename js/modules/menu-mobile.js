import clickOutside from './click-outside.js'

export default class MenuMobile {
  constructor(menuButton, menuList) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    //bind dos callbacks
    this.openMenu = this.openMenu.bind(this)
  }
  
  

   openMenu(event) {
     //previnir o click para o touchstart funcionar
     event.preventDefault()
    this.menuButton.classList.add('active');
    this.menuList.classList.add('active');
    clickOutside(this.menuList,['touchstart', 'click'], () => {
      this.menuButton.classList.remove('active');
      this.menuList.classList.remove('active');
    })

  }
  addEventMobileEvent(){
    this.menuButton.addEventListener('click', this.openMenu);
    this.menuButton.addEventListener('touchstart', this.openMenu);
  }

  
  init() {
    this.addEventMobileEvent();
    return this
  }




}