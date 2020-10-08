export default class initModal {
  constructor(abrir, fechar, content) {
     this.botaoAbrir = document.querySelector(abrir)
     this.botaoFechar = document.querySelector(fechar)
     this.containerModal = document.querySelector(content)

     // dar o bind para o event listener
     this.toggleModal = this.toggleModal.bind(this);
     this.foraDoModal = this.foraDoModal.bind(this);

  }
  

  toggleModal(event) {
    event.preventDefault();
    this.containerModal.classList.toggle('ativo');
  
  }
  foraDoModal(event) {
    if (event.target === this.containerModal)
      this.toggleModal(event);
  
  }
  addEvent() {
    this.botaoAbrir.addEventListener('click', this.toggleModal);
    this.botaoFechar.addEventListener('click', this.toggleModal);
    this.containerModal.addEventListener('click', this.foraDoModal);
  }

  init(){
    this.addEvent();
    return this

  }
  
  
  }


