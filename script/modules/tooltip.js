//mouseover - Acontece quando o mouse entra em cima de um elemento (passa por cima).
//mouseleave - Acontece quando o mouse sai completamente do elemento.
//mousemove - Esse é acionado toda vez que o mouse se move dentro de um elemento.

//📍 Sobre pageX e pageY
//e.pageX → distância horizontal a partir da esquerda da página
//e.pageY → distância vertical a partir do topo da página

//target = É o elemento exato onde o clique (ou outro evento) aconteceu.
//currentTarget = É o elemento que realmente tem o event listener (onde você colocou o addEventListener).

//window.innerWidth = retorna a largura visível da janela do navegador

export default class tooltip {
  constructor(tooltips) {
    this.tooltip = document.querySelectorAll(tooltips);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleOver = this.handleOver.bind(this);
  }

  handleOver({ target }) {
    const tooltipElement = document.createElement("div");
    const ariaLabel = document.querySelector(".contato-mapa img");
    tooltipElement.innerText = ariaLabel.getAttribute("aria-label");
    tooltipElement.classList.add("tooltip");
    document.body.appendChild(tooltipElement);
    this.tooltipElement = tooltipElement;
    target.addEventListener("mousemove", this.handleMove);
    target.addEventListener("mouseleave", this.handleLeave);
  }

  handleLeave({ target }) {
    this.tooltipElement.remove();
    target.removeEventListener("mouseleave", this.handleLeave);
    target.removeEventListener("mousemove", this.handleMove);
  }

  handleMove(e) {
    console.log(innerWidth);

    if (e.pageX + 175 > innerWidth) {
      this.tooltipElement.style.left = e.pageX - 160 + "px";
    } else {
      this.tooltipElement.style.left = e.pageX + 15 + "px";
    }

    this.tooltipElement.style.top = e.pageY + 15 + "px";
  }

  handleEvent() {
    this.tooltip.forEach((i) => {
      i.addEventListener("mouseover", this.handleOver);
    });
  }

  init() {
    this.handleEvent();
  }
}
