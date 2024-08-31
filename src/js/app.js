// import { Tooltip, Toast, Popover } from 'bootstrap'
import {clock, getData, setData, render} from './helpers';
import {
  data,
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
todoStorageDoneListElement.addEventListener('click', handleClickButtonClose);
todosWrapperElement.addEventListener('change', handleChangeSelectStatus);
todosWrapperElement.addEventListener('click', handleEditTask);
//------
todoStorageCurrentListElement.addEventListener('click', handleClickButtonClose);
todoStorageInProgressListElement.addEventListener('click', handleClickButtonClose);
todoStorageDoneListElement.addEventListener('click', handleClickButtonClose);

render(data);
