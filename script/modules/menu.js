export default function menu() {
  const menus = document.querySelectorAll("[data-menu] a");
  const ul = document.querySelector("[data-menu] ul");

  menus.forEach((menu) => {
    ["click", "touchstart"].forEach((userEvent) => {
      menu.addEventListener(userEvent, (e) => {
        e.preventDefault();
        ul.classList.toggle("menuClick");
      });
    });
  });
}
