import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // Cria a div contendo informações dos animais
  function createDivAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  // Puxa os animais através de um arquivo json e cria cada animal utilizando createDivAnimal
  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector(target);
      animaisJSON.forEach(animal => {
        const divAnimal = createDivAnimal(animal);
        numerosGrid.appendChild(divAnimal)
      });
      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}
