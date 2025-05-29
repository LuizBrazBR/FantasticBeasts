const jsTab = document.querySelectorAll(".js-tab li");
const jsContent = document.querySelectorAll(".js-content div");

if (jsTab.length && jsContent.length) {
  jsContent[0].classList.add("mostrar");
  jsTab.forEach((item, index) => {
    item.addEventListener("click", () => {
      jsContent.forEach((item) => item.classList.remove("mostrar"));
      jsContent[index].classList.add("mostrar");
    });
  });
}
