export default function clickOutside(element, callback) {
  const html = document.documentElement;
  setTimeout(() => { html.addEventListener('click', handleClickOutside)});
  setTimeout(() => { html.addEventListener('touchstart', handleClickOutside)});
  function handleClickOutside(event) {
    if (!element.contains(event.target)){
      html.removeEventListener('click', handleClickOutside);
      html.removeEventListener('touchstart', handleClickOutside);
    callback();
    }

  }

}