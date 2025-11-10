import debounce from "./debounce.js";

export default class efeitoScroll {
  constructor(sections, classAtivo) {
    this.jsScroll = document.querySelectorAll(sections);
    this.ativar = classAtivo;
    this.topWindow = window.innerHeight * 0.6;
    this.verificaTop = debounce(() => {
      this._verificaTop();
    }, 50);
  }

  getTopElement() {
    this.distance = [...this.jsScroll].map((e) => {
      return {
        element: e,
        offsetTop: e.offsetTop,
      };
    });
  }

  _verificaTop() {
    this.distance.forEach((e) => {
      if (scrollY > e.offsetTop - this.topWindow) {
        e.element.classList.add(this.ativar);
        e.element.nextElementSibling.classList.add(this.ativar);
      } else if (e.element.classList.contains(this.ativar)) {
        e.element.classList.remove(this.ativar);
        e.element.nextElementSibling.classList.remove(this.ativar);
      }
    });
  }

  init() {
    if (this.jsScroll.length) {
      this.getTopElement();
      this._verificaTop();
      window.addEventListener("scroll", this.verificaTop);
    }
  }
}
