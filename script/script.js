import navegacaoTab from "./modules/navegacaotab.js";
import navegacaoAccordion from "./modules/navegacaoaccordion.js";
import scrollSuave from "./modules/scrollsuave.js";
import efeitoScroll from "./modules/scrollefeito.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import menu from "./modules/menu.js";
import menuMobile from "./modules/menuMobile.js";
import horario from "./modules/horario.js";
import animais from "./modules/fetchAnimais.js";
import btc from "./modules/btc.js";

const NavegacaoTab = new navegacaoTab(
  "[data-anime='tab'] li",
  "[data-anime='content'] div"
);
NavegacaoTab.init();

const accordion = new navegacaoAccordion(".faq dt");
accordion.init();

const scrollSuavizado = new scrollSuave('[data-anime="scroll"]  a[href^="#"]');
scrollSuavizado.init();

efeitoScroll();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="modal"]',
  '[data-modal="fechar"]'
);

modal.init();

const tooltip = new Tooltip("[data-tooltip]");

tooltip.init();

menu();
menuMobile();
horario();
animais(
  [
    "Eurasian Wolf",
    "Tibetan Fox",
    "Eastern Gray Squirrel",
    "Asiatic Black Bear",
  ],
  ".numero"
);
btc();
