export default function debounce(fnc, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fnc, delay);
  };
}
