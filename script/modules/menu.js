import handleClickOutside from "./clickOutside.js";

export default function menu() {
  let menuSalvo; // variável fora

  const menuDiv = document.querySelectorAll("[data-menu]");
  // const menus = document.querySelectorAll("[data-menu] a");
  // const ul = document.querySelector("[data-menu] ul");
  menuDiv.forEach((menu) => {
    ["click", "touchstart"].forEach((userEvent) => {
      menu.addEventListener(userEvent, (e) => {
        e.preventDefault();
        menu.classList.add("menuClick");
        handleClickOutside(userEvent, menu);
      });
    });
  });
}
