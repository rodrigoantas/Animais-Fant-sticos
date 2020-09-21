import clickOutside from './click-outside.js';

export default function initDropdownMenu() {
  const dropdown = document.querySelector('[data-dropdown]');
  const dropdownMenu = document.querySelector('dropdown-menu');


  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    clickOutside(this, () => {
      this.classList.remove('ativo');
    })
    }







  dropdown.addEventListener('click', handleClick);
  dropdown.addEventListener('touchstart', handleClick);

}

