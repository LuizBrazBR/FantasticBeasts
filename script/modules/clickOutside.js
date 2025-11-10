export default function handleClickOutside(userEvent, menu, menuMobile) {
  const html = document.documentElement;
  if (!menu.hasAttribute("clickOutside")) {
    menu.setAttribute("clickOutside", "");
    userEvent.forEach((events) => {
      html.addEventListener(events, clickOutside);
    });
  }

  function clickOutside(e) {
    if (!menu.contains(e.target)) {
      menu.classList.remove("menuClick");
      if (menuMobile) menuMobile.classList.remove("menuClick");
      menu.removeAttribute("clickOutside");
      userEvent.forEach((events) => {
        html.removeEventListener(events, clickOutside);
      });
    }
  }
}
