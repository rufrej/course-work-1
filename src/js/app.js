import {render} from './helpers';
import {
  data,
  tasksWrapperElement,
  buttonOpenModalAddElement,
  // todoListElement,
  // inProgressListElement,
  // doneListElement,
  formAddElement,
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
});
formAddElement.addEventListener('submit', handleSubmitForm);
tasksWrapperElement.addEventListener('change', handleChangeSelectStatus);
tasksWrapperElement.addEventListener('click', handleEditTask);
buttonOpenModalUsersListElement.addEventListener('click', () => {
  window.dialogUsersList.showModal();
});
buttonOpenModalUsersListEditElement.addEventListener('click', () => {
  window.dialogUsersList.showModal();
});
buttonDeleteAllElement.addEventListener('click', handleClickButtonDelleteAll);
tasksWrapperElement.addEventListener('click', handleClickButtonClose);
render(data);
