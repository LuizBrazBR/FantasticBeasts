export default async function btc() {
  const btcPreco = document.querySelector(".btc-preco");
  async function btc() {
    const btcDados = await fetch("https://blockchain.info/ticker");
    const btcJSON = await btcDados.json();

    const btcBuy = (1 / +btcJSON.BRL.buy).toFixed(7);

    btcPreco.innerText = btcBuy;
  }

  btc();
}
