import handleClickOutside from "./clickOutside.js";

export default class menu {
  constructor(menu, userevent) {
    this.menu = document.querySelector(menu);
    this.trigger = this.menu.querySelector("a");
    this.userEvent = userevent ?? ["click"];
    this.handleUserEvent = (e) => {
      this._handleUserEvent(e);
    };
  }

  _handleUserEvent(e) {
    e.preventDefault();
    this.menu.classList.toggle("menuClick");
    handleClickOutside(this.userEvent, this.menu);
  }

  handleEvent() {
    this.userEvent.forEach((events) => {
      this.trigger.addEventListener(events, this.handleUserEvent);
    });
  }

  init() {
    this.handleEvent();
  }
}
