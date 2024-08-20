// import { Tooltip, Toast, Popover } from 'bootstrap'
import {clock} from './helpels';
import {buttonOpenModalAddElement} from './declaration.js';
console.log(buttonOpenModalAddElement);
buttonOpenModalAddElement.addEventListener('click', () => {
  window.myDialog.showModal();
});
