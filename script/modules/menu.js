export default function menu() {
  const menus = document.querySelectorAll("[data-menu] a");
  const ul = document.querySelector("[data-menu] ul");
  const html = document.documentElement;

  menus.forEach((menu) => {
    ["click", "touchstart"].forEach((userEvent) => {
      menu.addEventListener(userEvent, (e) => {
        e.preventDefault();
        ul.classList.add("menuClick");
        const target = e.target;

        html.addEventListener("click", (event) =>
          handleClickOutside(event, target)
        );
      });
    });
  });

  function handleClickOutside(event, target) {
    if (!target.contains(event.target)) {
      ul.classList.remove("menuClick");
    }
  }
}
