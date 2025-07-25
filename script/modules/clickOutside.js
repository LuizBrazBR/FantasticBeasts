export default function handleClickOutsideFactory(menuDiv, ul, html) {
  return function handleClickOutside(event) {
    if (!menuDiv.contains(event.target)) {
      html.removeEventListener("click", handleClickOutside);
      ul.classList.remove("menuClick");
    }
  };
}
