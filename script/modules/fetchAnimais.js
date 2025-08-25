import numero from "./numero.js";

export default async function animais() {
  const animaisLista = [
    "Eurasian Wolf",
    "Tibetan Fox",
    "Eastern Gray Squirrel",
    "Asiatic Black Bear",
  ];
  const section = document.querySelector(".numero");

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

  await Promise.all(
    animaisLista.map(async (animal) => {
      const res = await fetch(
        `https://api.api-ninjas.com/v1/animals?name=${animal}`,
        {
          headers: { "x-api-key": "r9jhKyZcV6+e/We7XBmsHw==P3pXcbKak8sOkTBz" },
        }
      );

      const dadosJSON = await res.json();
      if (!dadosJSON[0]) return; // evita erro se não tiver resultado

      const div = document.createElement("div");
      div.classList.add("numero-grid");
      div.innerHTML = `
        <h3>${dadosJSON[0].name}</h3>
        <span data-numero>${parsePopulation(
          dadosJSON[0].characteristics.estimated_population_size
        )}</span>
      `;
      section.append(div);
    })
  );

  numero(); // chamado só uma vez
}
