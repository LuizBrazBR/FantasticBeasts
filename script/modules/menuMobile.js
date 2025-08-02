import handleClickOutside from "./clickOutside.js";

export default function menuMobile() {
  const navMenu = document.querySelector("nav");
  const menu = document.querySelector(".button");

  function handleClick() {
    navMenu.classList.add("menuClick");
    menu.classList.toggle("menuClick");
    handleClickOutside("click", navMenu, [menu]);
  }

  menu.addEventListener("click", handleClick);
}
