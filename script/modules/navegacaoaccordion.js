export default class navegacaoAccordion {
  constructor(lista) {
    this.dtFaq = document.querySelectorAll(lista);
    this.ativo = "mostrar";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.ativo);
    item.nextElementSibling.classList.toggle(this.ativo);
  }

  init() {
    this.toggleAccordion(this.dtFaq[0]);

    if (this.dtFaq.length) {
      this.dtFaq.forEach((item) => {
        item.addEventListener("click", () => {
          this.toggleAccordion(item);
        });
      });
    }
  }
}
