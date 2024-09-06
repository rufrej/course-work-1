// import { Tooltip, Toast, Popover } from 'bootstrap'
import {clock, getData, setData, render} from './helpers';
import {
  data,
  todosWrapperElement,
  containerElement,
  buttonOpenModalAddElement,
  todoListElement,
  inProgressListElement,
  doneListElement,
  inputTitleElement,
  inputDescriptionElement,
  formAddElement,
  buttonSubmitElement,
  buttonDeleteAllElement,
  buttonOpenModalUsersListElement,
  buttonOpenModalUsersListEditElement,
} from './declaration.js';

import {
  handleSubmitForm,
  handleClickButtonDelleteAll,
  handleClickButtonClose,
  handleChangeSelectStatus,
  handleEditTask,
} from './handlers.js';
buttonOpenModalAddElement.addEventListener('click', () => {
  window.dialogModalAdd.showModal();
  // const selectUserName = document.querySelector('#add-select')
  // selectUserName.addEventListener('click', () => {
  //   userIcon.innerHTML = showUserIcon(editUserName.value);
  // });
});

formAddElement.addEventListener('submit', handleSubmitForm);
// buttonDeleteAllElement.addEventListener('click', handleClickButtonDelleteAll);
todosWrapperElement.addEventListener('change', handleChangeSelectStatus);
todosWrapperElement.addEventListener('click', handleEditTask);
buttonOpenModalUsersListElement.addEventListener('click', () => {
  window.dialogUsersList.showModal();
});
buttonOpenModalUsersListEditElement.addEventListener('click', () => {
  window.dialogUsersList.showModal();
});
//------
todoListElement.addEventListener('click', handleClickButtonClose);
inProgressListElement.addEventListener('click', handleClickButtonClose);
doneListElement.addEventListener('click', handleClickButtonClose);

render(data);
