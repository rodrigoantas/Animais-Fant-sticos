export default function initAnimaNumeros () {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach(numero => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let i = 0;
      const timer = setInterval(() => {
        i = i + incremento;
        numero.innerText = i
        if (i > total) {
          numero.innerText = total
          clearInterval(timer)
        }


      }, 15)

  })}


  function handleMutation(mutation) {
    if(mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }

  }

  const observerTarget = document.querySelector('.numeros');
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, {attributes:true});


}