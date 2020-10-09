export default class AnimeScroll {
  constructor(sections) {
    this.sectionsNode = document.querySelectorAll(sections)
    this.sections = Array.from(this.sectionsNode);
    this.window50 = window.innerHeight * 0.5;
    this.checkDistance = this.checkDistance.bind(this)
  }
  getDistance() {
    this.distance = this.sections.map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: offset - this.window50,
      };
    });
  }
  checkDistance() {
    this.distance.forEach((section) => {
      if (window.pageYOffset > section.offset) {
        section.element.classList.add('ativo');
      }
    });
  }
  init() {
    this.getDistance()
    this.sections[0].classList.add('ativo')
    window.addEventListener("scroll", this.checkDistance);
    return this
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }

  

}

