export default function clickOutside(element, callback) {
  const html = document.documentElement;
  html.addEventListener('click', handleClickOutside);
  html.addEventListener('touchstart', handleClickOutside);
  function handleClickOutside(event) {
    if (!element.contains(event.target)){
      html.removeEventListener('click', handleClickOutside);
      html.removeEventListener('touchstart', handleClickOutside);
    callback();
    }

  }

}