export default function tooltip() {
  const tooltip = document.querySelectorAll("[data-tooltip]");

  function handleOver(e) {
    console.log(e);
  }

  tooltip.forEach((i) => {
    i.addEventListener("mouseover", handleOver);
  });
}
