export default class Modal {
  constructor(open, close, content) {
     this.openButton = document.querySelector(open)
     this.closeButton = document.querySelector(close)
     this.modalContainer = document.querySelector(content)

     // dar o bind para o event listener
     this.toggleModal = this.toggleModal.bind(this);
     this.foraDoModal = this.foraDoModal.bind(this);

  }
  

  toggleModal(event) {
    event.preventDefault();
    this.modalContainer.classList.toggle('ativo');
  
  }
  foraDoModal(event) {
    if (event.target === this.modalContainer)
      this.toggleModal(event);
  
  }
  addEvent() {
    this.openButton.addEventListener('click', this.toggleModal);
    this.closeButton.addEventListener('click', this.toggleModal);
    this.modalContainer.addEventListener('click', this.foraDoModal);
  }

  init(){
    this.addEvent();
    return this

  }
  
  
  }


