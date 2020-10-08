export default class Accordion {
  constructor(title, desc){
  this.accordionTitle = document.querySelectorAll(title)
  this.accordionDescription = document.querySelectorAll(desc)
  }

  addActive(index) {
    this.accordionDescription[index].classList.toggle("ativo");
  }
  addEvent() {
    this.accordionTitle.forEach((title, index) => {
    title.addEventListener("click", () => {
      this.addActive(index)
    } 
      )
  });
  }
  init(){
    this.accordionDescription.classList.add('ativo')
    this.addEvent();
    return this
  }
}
  

