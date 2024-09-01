import {getData} from './helpers.js';
const data = getData();
const todosWrapperElement = document.querySelector('.todos-wrapper');
const containerElement = document.querySelector('.container');
const buttonOpenModalAddElement = document.querySelector('#buttonOpenModalAdd');
const buttonOpenModalConfirmElement = document.querySelector('#dialog-confirm');
const todoStorageCurrentListElement = document.querySelector('.todo-storage__current__list');
const todoStorageInProgressListElement = document.querySelector('.todo-storage__in-progress__list');
const todoStorageDoneListElement = document.querySelector('.todo-storage__done__list');
const formAddElement = document.querySelector('#form-modal-add');
const buttonSubmitElement = document.querySelector('#button-submit');
const buttonDeleteAllElement = document.querySelector('.button-delete-all');
const selectUserNameElement = document.querySelector('#select__user-name');
const selectUserStatusElement = document.querySelector('#select__status');
const buttonDialogConfirmElement = document.querySelector('#buttonDialogConfirm');
const todoCounter = document.querySelector('#todo-counter');
const inProgressCounter = document.querySelector('#in-progress-counter');
const doneCounter = document.querySelector('#done-counter');

export {
  data,
  containerElement,
  buttonOpenModalAddElement,
  todoStorageCurrentListElement,
  todoStorageInProgressListElement,
  buttonOpenModalConfirmElement,
  todoStorageDoneListElement,
  inputTitleElement,
  inputDescriptionElement,
  formAddElement,
  buttonSubmitElement,
  buttonDeleteAllElement,
  selectUserNameElement,
  selectUserStatusElement,
  todosWrapperElement,
  buttonDialogConfirmElement,
  todoCounter,
  inProgressCounter,
  doneCounter,
};
