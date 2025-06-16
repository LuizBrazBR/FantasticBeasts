export default function scrollSuave() {
  const scrollInterno = document.querySelectorAll(
    '[data-anime="scroll"]  a[href^="#"]'
  );

  if (scrollInterno.length) {
    scrollInterno.forEach((link) => {
      const href = link.getAttribute("href");
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const section = document.querySelector(href);
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }
}
