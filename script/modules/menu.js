import handleClickOutsideFactory from "./clickOutside.js";

export default function menu() {
  const menuDiv = document.querySelector("[data-menu]");
  const menus = document.querySelectorAll("[data-menu] a");
  const ul = document.querySelector("[data-menu] ul");
  const html = document.documentElement;

  menus.forEach((menu) => {
    ["click", "touchstart"].forEach((userEvent) => {
      menu.addEventListener(userEvent, (e) => {
        e.preventDefault();
        ul.classList.add("menuClick");
        html.addEventListener(
          "click",
          handleClickOutsideFactory(menuDiv, ul, html)
        );
      });
    });
  });
}
