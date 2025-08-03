export default function numero() {
  function initNumero() {
    const numeros = document.querySelectorAll("[data-numero]");
    numeros.forEach((numero) => {
      const total = +numero.textContent;
      let inicio = Math.random();
      setInterval(() => {
        inicio = Math.round(inicio + total / 100);
        numero.textContent = inicio;

        if (inicio > total) {
          numero.textContent = total;
        }
      }, 10);
    });
  }

  function mutacao(mutation) {
    if (mutation[0].target.className.includes("ativo")) {
      initNumero();
      observer.disconnect();
    }
  }

  const section = document.querySelector(".numero");
  const observer = new MutationObserver(mutacao);

  observer.observe(section, { attributes: true });
}
