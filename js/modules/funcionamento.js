export default class Operation {
  constructor(operation) {
    this.operation = document.querySelector(operation);
  }

  operationData() {
    this.weekdays = this.operation.dataset.semana.split(',').map(Number);
    this.hours = this.operation.dataset.horario.split(',').map(Number);
  }

  currentDate() {
    this.nowDate = new Date();
    this.nowDay = this.nowDate.getDay();
    this.nowHour = this.nowDate.getUTCHours() - 3;
  }

  isOpen() {
    const openWeekday = this.weekdays.includes(this.nowDay) 
    const openHours = this.nowHour >= this.hours[0] && this.nowHour <= this.hours[1]
    return openWeekday && openHours 
  }
  activeOpen() {
    if (this.isOpen())  {
      this.operation.classList.add('funcionamento-aberto')
    } else {
      this.operation.classList.add('funcionamento-fechado')
    }
  }
  init() {
    this.operationData();
    this.currentDate();
    this.activeOpen()
    return this
  }

}