import handleClickOutside from "./clickOutside.js";

export default class menuMobile {
  constructor(nav, button) {
    this.navMenu = document.querySelector(nav);
    this.menu = document.querySelector(button);
    this.handleClick = () => {
      this._handleClick();
    };
    this.init();
  }

  _handleClick() {
    this.navMenu.classList.add("menuClick");
    this.menu.classList.toggle("menuClick");
    handleClickOutside(["click"], this.navMenu, this.menu);
  }

  init() {
    this.menu.addEventListener("click", this.handleClick);
  }
}
