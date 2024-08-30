// import { Tooltip, Toast, Popover } from 'bootstrap'
import {clock, getData, setData, render} from './helpers';
import {
  todosWrapperElement,
  containerElement,
  buttonOpenModalAddElement,
  todoStorageCurrentListElement,
  todoStorageInProgressListElement,
  todoStorageDoneListElement,
  inputTitleElement,
  inputDescriptionElement,
  formAddElement,
  buttonSubmitElement,
  buttonDeleteAllElement,
} from './declaration.js';

import {
  handleSubmitForm,
  handleClickButtonDelleteAll,
  handleClickButtonClose,
  handleChangeSelectStatus,
  handleEditTask,
} from './handlers.js';
buttonOpenModalAddElement.addEventListener('click', () => {
  window.dialogOpenModalAdd.showModal();
});

formAddElement.addEventListener('submit', handleSubmitForm);
buttonDeleteAllElement.addEventListener('click', handleClickButtonDelleteAll);
// todoStorageCurrentListElement.addEventListener('click', handleClickButtonClose);
// todoStorageInProgressListElement.addEventListener('click', handleClickButtonClose);
todoStorageDoneListElement.addEventListener('click', handleClickButtonClose);
// todosWrapperElement.addEventListener('click', handleClickButtonClose);
todosWrapperElement.addEventListener('change', handleChangeSelectStatus);
todosWrapperElement.addEventListener('click', handleEditTask);
//------
todoStorageCurrentListElement.addEventListener('click', handleClickButtonClose);
todoStorageInProgressListElement.addEventListener('click', handleClickButtonClose);
todoStorageDoneListElement.addEventListener('click', handleClickButtonClose);
// console.log(buttonSubmitElement);
// todoStorageCurrentListElement.addEventListener('click', () => {
//   console.log('hohoho');
// });

// buttonSubmitElement.addEventListener('click', handleClickButtonSubmit);
// console.log(buttonSubmitElement);
// const a = document.querySelector('.todo-storage__task');
// const b = document.querySelector('.todo-storage__in-progress');

// b.appendChild(a);

render(getData());
