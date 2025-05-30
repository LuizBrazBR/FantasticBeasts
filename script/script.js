function navegacaoTab() {
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
}

navegacaoTab();

function navegacaoAccordion() {
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

navegacaoAccordion();

function scrollSuave() {
  const scrollInterno = document.querySelectorAll(
    '.js-scroll-interno a[href^="#"]'
  );

  if (scrollInterno.length) {
    scrollInterno.forEach((link) => {
      const href = link.getAttribute("href");
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const section = document.querySelector(href);
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });
  }
}

scrollSuave();


function efeitoScroll () {
    const jsScroll = document.querySelectorAll('h1.js-top');
       if (jsScroll.length) {
      function verificaTop () {
        jsScroll.forEach((e) => {
          const top = e.getBoundingClientRect().top;
          const topWindow = window.innerHeight * 0.6;
          if (top < topWindow) {
            e.classList.add('ativo')
            e.nextElementSibling.classList.add('ativo')
          }
        })
      }
      window.addEventListener('scroll', verificaTop)
      verificaTop();
    }
}


efeitoScroll();