export default class AnimeScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.window60 = window.innerHeight * 0.6;
    this.animeScroll = this.animeScroll.bind(this)
  }
  animeScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.window60 ) < 0
      if (isSectionVisible) {
        section.classList.add("ativo");
      }
    });
  }
  init() {
    this.sections[0].classList.add('ativo')
    window.addEventListener("scroll", this.animeScroll);
    return this
  }

  

}

