export default function efeitoScroll() {
  const jsScroll = document.querySelectorAll("h1[data-anime='top']");

  function verificaTop() {
    jsScroll.forEach((e) => {
      const top = e.getBoundingClientRect().top;
      const topWindow = window.innerHeight * 0.6;
      if (top < topWindow) {
        e.classList.add("ativo");
        e.nextElementSibling.classList.add("ativo");
      }
    });
  }
  if (jsScroll.length) {
    window.addEventListener("scroll", verificaTop);
    verificaTop();
  }
}
