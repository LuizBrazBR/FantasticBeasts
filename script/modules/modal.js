export default function modal() {
  const botaoModal = document.querySelector('[data-modal="abrir"]');
  const modal = document.querySelector('[data-modal="modal"]');
  const fecharModal = document.querySelector('[data-modal="fechar"]');

  function toggleModal(e) {
    e.preventDefault();
    modal.classList.toggle("ativo");
  }
  function fechar(e) {
    if (this === e.target) toggleModal(e);
  }

  if (botaoModal && modal && fecharModal) {
    botaoModal.addEventListener("click", toggleModal);
    fecharModal.addEventListener("click", toggleModal);
    modal.addEventListener("click", fechar);
  }
}
