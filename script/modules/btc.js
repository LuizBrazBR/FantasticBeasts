export default async function btc(url, target) {
  const btcPreco = document.querySelector(target);
  const btcDados = await fetch(url);
  const btcJSON = await btcDados.json();
  //Isso é chamado de “inverso multiplicativo” — o número que, quando multiplicado pelo original, dá 1.
  const btcBuy = (1 / +btcJSON.BRL.buy).toFixed(7);
  btcPreco.innerText = btcBuy;
}
