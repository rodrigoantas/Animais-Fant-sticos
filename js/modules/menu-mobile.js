import clickOutside from './click-outside.js'

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  

  function openMenu(event) {
    menuButton.classList.add('active');
    menuList.classList.add('active');
    clickOutside(menuList, () => {
      menuButton.classList.remove('active');
      menuList.classList.remove('active');
    })

  }


  menuButton.addEventListener('click', openMenu);
  menuButton.addEventListener('touchstart', openMenu);




}