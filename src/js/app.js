// import { Tooltip, Toast, Popover } from 'bootstrap'
import {clock, getData, setData, render} from './helpers';
import {
  buttonOpenModalAddElement,
  todoStorageCurrentElement,
  todoStorageInProgressElement,
  todoStorageDoneElement,
  inputTitleElement,
  inputDescriptionElement,
  formAddElement,
  buttonSubmitElement,
} from './declaration.js';

import {handleClickButtonSubmit} from './handlers.js';
buttonOpenModalAddElement.addEventListener('click', () => {
  window.dialogOpenModalAdd.showModal();
});

// formAddElement.addEventListener('submit', handleClickButtonSubmit);
// console.log(buttonSubmitElement);
// buttonSubmitElement.addEventListener('click', () => {
//   console.log('hohoho');
// });

buttonSubmitElement.addEventListener('click', handleClickButtonSubmit);
console.log(buttonSubmitElement);
// const a = document.querySelector('.todo-storage__task');
// const b = document.querySelector('.todo-storage__in-progress');

// b.appendChild(a);

render(getData());
