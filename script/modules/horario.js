export default function horario() {
  const semana = document.querySelector("[data-semana]");
  const horario = document.querySelector("[data-horario]");

  const agora = new Date();

  const semanaAberto =
    semana.dataset.semana.split(",").map(Number).indexOf(agora.getDay()) == !-1;

  const horaAberto =
    agora.getHours() >= horario.dataset.horario.split(",").map(Number)[0] &&
    agora.getHours() + agora.getMinutes() / 60 <=
      horario.dataset.horario.split(",").map(Number)[1];

  if (semanaAberto && horaAberto) {
    semana.classList.add("aberto");
  }
}
