export default class modal {
  constructor(botaoModal, modal, fecharModal) {
    this.botaoModal = document.querySelector(botaoModal);
    this.modal = document.querySelector(modal);
    this.fecharModal = document.querySelector(fecharModal);
    this.toggleModal = this.toggleModal.bind(this);
    this.fechar = this.fechar.bind(this);
  }

  toggleModal(e) {
    e.preventDefault();
    this.modal.classList.toggle("ativo");
  }

  fechar(e) {
    if (this.modal === e.target) this.toggleModal(e);
  }

  modalEvent() {
    this.botaoModal.addEventListener("click", this.toggleModal);
    this.fecharModal.addEventListener("click", this.toggleModal);
    this.modal.addEventListener("click", this.fechar);
  }

  init() {
    if (this.botaoModal && this.modal && this.fecharModal) {
      this.modalEvent();
    }
  }
}
