export default function tooltip() {
  const tooltip = document.querySelectorAll("[data-tooltip]");

  function handleOver(e) {
    const tooltipElement = document.createElement("div");
    const ariaLabel = document.querySelector(".contato-mapa img");
    tooltipElement.innerText = ariaLabel.getAttribute("aria-label");
    tooltipElement.classList.add("tooltip");
    document.body.appendChild(tooltipElement);
    handleLeave.tooltipElement = tooltipElement;
    handleMove.tooltipElement = tooltipElement;
    e.target.addEventListener("mousemove", handleMove);
    e.target.addEventListener("mouseleave", handleLeave);
  }

  const handleLeave = {
    handleEvent(e) {
      this.tooltipElement.remove();
      e.target.removeEventListener("mouseleave", handleLeave);
      e.target.removeEventListener("mousemove", handleMove);
    },
  };

  const handleMove = {
    handleEvent(e) {
      this.tooltipElement.style.top = e.pageY + 15 + "px";
      this.tooltipElement.style.left = e.pageX + 15 + "px";
    },
  };

  tooltip.forEach((i) => {
    i.addEventListener("mouseover", handleOver);
  });
}
