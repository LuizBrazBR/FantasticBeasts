export default class scrollSuave {
  constructor(links, options) {
    this.scrollInterno = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }
  }

  init() {
    if (this.scrollInterno.length) {
      this.scrollInterno.forEach((link) => {
        const href = link.getAttribute("href");
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const section = document.querySelector(href);
          section.scrollIntoView(this.options);
        });
      });
    }
    return this;
  }
}
