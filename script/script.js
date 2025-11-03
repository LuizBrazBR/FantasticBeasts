import navegacaoTab from "./modules/navegacaotab.js";
import navegacaoAccordion from "./modules/navegacaoaccordion.js";
import scrollSuave from "./modules/scrollsuave.js";
import efeitoScroll from "./modules/scrollefeito.js";
import modal from "./modules/modal.js";
import tooltip from "./modules/tooltip.js";
import menu from "./modules/menu.js";
import menuMobile from "./modules/menuMobile.js";
import horario from "./modules/horario.js";
import animais from "./modules/fetchAnimais.js";
import btc from "./modules/btc.js";

navegacaoTab();

const accordion = new navegacaoAccordion(".faq dt");
accordion.init();

const scrollSuavizado = new scrollSuave('[data-anime="scroll"]  a[href^="#"]');
scrollSuavizado.init();

efeitoScroll();
modal();
tooltip();
menu();
menuMobile();
horario();
animais();
btc();
