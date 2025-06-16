export default function navegacaoAccordion() {
  const dtFaq = document.querySelectorAll(".faq dt");
  const ddFaq = document.querySelectorAll(".faq dd");

  if (dtFaq.length && ddFaq.length) {
    ddFaq[0].classList.add("mostrar");
    dtFaq[0].classList.add("mostrar");

    dtFaq.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("mostrar");

        e.currentTarget.nextElementSibling.classList.toggle("mostrar");
      });
    });
  }
}
