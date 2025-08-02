import handleClickOutside from "./clickOutside.js";

export default function menu() {
  let menuSalvo; // variável fora

  const menuDiv = document.querySelectorAll("[data-menu]");
  const subMenuA = document.querySelector("ul.nav li[data-menu] a");
  const nav = document.querySelector("ul.nav");
  // const menus = document.querySelectorAll("[data-menu] a");
  // const ul = document.querySelector("[data-menu] ul");
  menuDiv.forEach((menu) => {
    ["click", "touchstart"].forEach((userEvent) => {
      menu.addEventListener(userEvent, (e) => {
        e.preventDefault();
        menu.classList.add("menuClick");
        subMenuA.classList.add("menuClick");
        nav.classList.add("menuClick");
        handleClickOutside("click", menu, [subMenuA, nav]);
      });
    });
  });
}
