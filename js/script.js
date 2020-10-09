import SmoothScroll from './modules/smooth-scroll.js';
import AnimeScroll from './modules/anime-scroll.js';
import Accordion from './modules/accordion-list.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import MenuMobile from './modules/menu-mobile.js';
import fetchAnimals from './modules/fetch-animais.js';
import DropdownMenu from './modules/dropdown-menu.js';
import Operation from './modules/operation.js';


const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt', '[data-anime="accordion"] dd')
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const animeScroll = new AnimeScroll('[data-anime="scroll"]');
animeScroll.init()

const dropdownMenus = new DropdownMenu('[data-dropdown]');
dropdownMenus.init()

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const operation = new Operation('[data-semana]')
operation.init();

fetchAnimals('../../animaisapi.json', '.numeros-grid')