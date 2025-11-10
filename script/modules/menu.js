import handleClickOutside from "./clickOutside.js";

export default class menu {
  constructor(menu, userevent) {
    this.menu = document.querySelector(menu);
    this.userEvent = userevent ?? ["click", "touchstart"];
    this.handleUserEvent = (e) => {
      this._handleUserEvent(e);
    };
  }

  _handleUserEvent(e) {
    e.preventDefault();
    this.menu.classList.add("menuClick");
    handleClickOutside(this.userEvent, this.menu);
  }

  handleEvent() {
    this.userEvent.forEach((events) => {
      this.menu.addEventListener(events, this.handleUserEvent);
    });
  }

  init() {
    this.handleEvent();
  }
}
