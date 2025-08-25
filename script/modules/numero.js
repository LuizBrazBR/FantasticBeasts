export default function numero() {
  function parsePopulation(str) {
    if (!str) return 0;
    str = str.replace(/,/g, "").toLowerCase(); // remove vírgula e deixa minúscula
    if (str.includes("million")) {
      const n = parseFloat(str);
      return n * 1000000; // converte milhões para número
    }
    if (str.includes("+")) str = str.replace("+", "");
    return parseInt(str, 10);
  }
  function initNumero() {
    const numeros = document.querySelectorAll("[data-numero]");
    numeros.forEach((n) => {
      let numero = parsePopulation(n.textContent);
      const total = numero;
      let inicio = 0;
      setInterval(() => {
        inicio = Math.round(inicio + total / 100);
        n.textContent = inicio;

        if (inicio > total) {
          n.textContent = total;
        }
      }, 20 * Math.random());
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
