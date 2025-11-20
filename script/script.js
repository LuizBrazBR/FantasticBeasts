import navegacaoTab from "./modules/navegacaotab.js";
import navegacaoAccordion from "./modules/navegacaoaccordion.js";
import scrollSuave from "./modules/scrollsuave.js";
import efeitoScroll from "./modules/scrollefeito.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import Menu from "./modules/menu.js";
import MenuMobile from "./modules/menuMobile.js";
import animais from "./modules/fetchAnimais.js";
import btc from "./modules/btc.js";
import Horario from "./modules/horario.js";
import { SliderButton } from "./modules/slide.js";

const NavegacaoTab = new navegacaoTab(
  "[data-anime='tab'] li",
  "[data-anime='content'] div"
);
NavegacaoTab.init();

const accordion = new navegacaoAccordion(".faq dt");
accordion.init();

const scrollSuavizado = new scrollSuave('[data-anime="scroll"]  a[href^="#"]');
scrollSuavizado.init();

const efeitoscroll = new efeitoScroll("h1[data-anime='top']", "ativo");
efeitoscroll.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="modal"]',
  '[data-modal="fechar"]'
);

modal.init();

const tooltip = new Tooltip("[data-tooltip]");

tooltip.init();

const menu = new Menu("[data-menu]");
menu.init();

const menumobile = new MenuMobile("nav", ".button");

const horario = new Horario("[data-semana]", "[data-horario]");
horario.init();

animais(
  [
    "Eurasian Wolf",
    "Tibetan Fox",
    "Eastern Gray Squirrel",
    "Asiatic Black Bear",
  ],
  ".numero"
);
btc("https://blockchain.info/ticker", ".btc-preco");

const slider = new SliderButton(".slider", ".wrapper");
slider.init();
slider.activePaginacao("active", ".nav-top");
