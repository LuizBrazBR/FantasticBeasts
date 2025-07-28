export default function handleClickOutside(userEvent, menu) {
  const html = document.documentElement;

  //Adiciona apenas 1 evento, senao a cada clique vai adicionar um novo duplicado
  if (!menu.hasAttribute("clickOutside")) {
    menu.setAttribute("clickOutside", "");
    html.addEventListener(userEvent, clickOutside);
  }
  function clickOutside(e) {
    if (!menu.contains(e.target)) {
      menu.classList.remove("menuClick");
      html.removeEventListener(userEvent, clickOutside); //Remove o evento
      menu.removeAttribute("clickOutside");
    }
  }
}
