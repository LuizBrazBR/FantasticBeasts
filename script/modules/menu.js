export default function menu() {
  const menus = document.querySelectorAll("[data-menu] .menu");
  const li = document.querySelector("[data-menu] a");

  menus.forEach((menu) => {
    ["click", "touchstart"].forEach((userEvent) => {
      menu.addEventListener(userEvent, (e) => {
        e.preventDefault();
        e.currentTarget.classList.add("ssss");
      });
    });
  });
}
