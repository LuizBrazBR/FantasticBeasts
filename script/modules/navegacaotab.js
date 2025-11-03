export default class navegacaoTab {
  constructor(tab, content) {
    this.jsTab = document.querySelectorAll(tab);
    this.jsContent = document.querySelectorAll(content);
  }

  ativarContent(index) {
    this.jsContent.forEach((item) => item.classList.remove("mostrar"));
    this.jsContent[index].classList.add(
      "mostrar",
      this.jsContent[index].dataset.anime
    );
  }

  ativarNavegacao() {
    this.jsTab.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.ativarContent(index);
      });
    });
  }

  init() {
    if (this.jsTab.length && this.jsContent.length) {
      this.ativarContent(0);
      this.ativarNavegacao();
    }
  }
}
