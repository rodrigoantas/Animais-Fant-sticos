export default function initFuncionamento() {
  
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  function isOpen() {
    if (diasSemana.includes(diaAgora) && horarioAgora >= horarioSemana[0] && horarioAgora <= horarioSemana[1]) {
      funcionamento.classList.add('funcionamento-aberto')
    } else {
      funcionamento.classList.add('funcionamento-fechado')
    }
    
  }
  isOpen();

}