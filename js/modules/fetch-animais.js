import initAnimaNUmeros from './anima-numeros.js';

export default function initFetchNumeros() {



 async function fetchURL(url) {
    const resposta = await fetch(url);
    const respostaJSON = await (await resposta.json());

    respostaJSON.forEach(animal => {
      createAnimal(animal)
    })
    initAnimaNUmeros();

  }

  function createAnimal(animal){
    const div = document.createElement('div');
    const divGridAnimal = document.querySelector('.numeros-grid')
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3>
    <span data-numero>${animal.total}</span>`
    divGridAnimal.appendChild(div);

  }









  fetchURL('./animaisapi.json')
}