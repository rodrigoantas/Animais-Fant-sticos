export default class AnimaNumeros {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers =  document.querySelectorAll(numbers)
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget)
    //bind dos callbacks
    this.handleMutation = this.handleMutation.bind(this)
  }
  //recebe do dom um número e incrementa até ficar maior que o número
  static incrementNumber(number) {
    const total = +number.innerText;
      const increment = Math.floor(total / 100);
      let i = 0;
      const timer = setInterval(() => {
        i += increment;
        number.innerText = i
        if (i > total) {
          number.innerText = total
          clearInterval(timer)
        }
      }, 15)
  }
  animeNumbers() {
    this.numbers.forEach(number => {
      this.constructor.incrementNumber(number)
  })}


 handleMutation(mutation) {
    if(mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animeNumbers();
    }

  }
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, {attributes:true});
  }

  init(){
    this.addMutationObserver();
    return this
  }
  


}