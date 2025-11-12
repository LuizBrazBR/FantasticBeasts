export default class horario {
  constructor(semana, horario) {
    this.semana = document.querySelector(semana);
    this.horario = document.querySelector(horario);
  }

  verificaAbertura() {
    this.agora = new Date();
    this.utc = this.agora.getTime() + this.agora.getTimezoneOffset() * 60000;
    this.horaBrasil = new Date(this.utc - 3 * 60 * 60000); // UTC−3
    this.semanaAberto =
      this.semana.dataset.semana
        .split(",")
        .map(Number)
        .indexOf(this.horaBrasil.getDay()) !== -1;
    this.horaAberto =
      this.horaBrasil.getHours() >=
        this.horario.dataset.horario.split(",").map(Number)[0] &&
      this.horaBrasil.getHours() + this.horaBrasil.getMinutes() / 60 <=
        this.horario.dataset.horario.split(",").map(Number)[1];
  }

  init() {
    this.verificaAbertura();
    if (this.semanaAberto && this.horaAberto) {
      this.semana.classList.add("aberto");
    } else {
      this.semana.classList.remove("aberto");
    }
  }
}
