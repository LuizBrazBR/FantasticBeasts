export default function tooltip() {
  const tooltip = document.querySelectorAll("[data-tooltip]");
  const tooltipElement = document.createElement("div");
  const ariaLabel = document.querySelector(".contato-mapa img");

  function handleOver(e) {
    tooltipElement.innerText = ariaLabel.getAttribute("aria-label");
    document.body.appendChild(tooltipElement);
    tooltipElement.classList.add("tooltip");
    e.target.addEventListener("mousemove", handleMove);
  }

  function handleLeave() {
    tooltipElement.remove();
  }

  function handleMove(e) {
    tooltipElement.style.top = e.pageY + 15 + "px";
    tooltipElement.style.left = e.pageX + 15 + "px";
  }

  tooltip.forEach((i) => {
    i.addEventListener("mouseover", handleOver);
    i.addEventListener("mouseleave", handleLeave);
  });
}
