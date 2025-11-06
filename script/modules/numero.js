export default class animaNumero {
  constructor(section, classe, numero) {
    this.section = document.querySelector(section);
    this.classe = classe;
    this.numero = document.querySelectorAll(numero);
    this.mutacao = this.mutacao.bind(this);
  }

  init() {
    this.observer = new MutationObserver(this.mutacao);
    this.observer.observe(this.section, { attributes: true });
  }

  mutacao(mutation) {
    if (mutation[0].target.className.includes(this.classe)) {
      this.setNumero();
      this.observer.disconnect();
    }
  }

  static parsePopulation(str) {
    if (!str) return 0;
    str = str.replace(/,/g, "").toLowerCase(); // remove vírgula e deixa minúscula
    if (str.includes("million")) {
      const n = parseFloat(str);
      return n * 1000000; // converte milhões para número
    }
    if (str.includes("+")) str = str.replace("+", "");
    return parseInt(str, 10);
  }

  static animaNumero(numeros) {
    numeros.forEach((n) => {
      let numero = this.parsePopulation(n.textContent);
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

  setNumero() {
    this.constructor.animaNumero(this.numero);
  }
}
