export default function navegacaoTab() {
  const jsTab = document.querySelectorAll("[data-anime='tab'] li");
  const jsContent = document.querySelectorAll("[data-anime='content'] div");

  if (jsTab.length && jsContent.length) {
    jsContent[0].classList.add("mostrar");
    jsTab.forEach((item, index) => {
      item.addEventListener("click", () => {
        jsContent.forEach((item) => item.classList.remove("mostrar"));
        jsContent[index].classList.add(
          "mostrar",
          jsContent[index].dataset.anime
        );
      });
    });
  }
}
