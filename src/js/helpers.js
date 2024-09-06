import {
  data,
  todoListElement,
  inProgressListElement,
  doneListElement,
  todoCounter,
  inProgressCounter,
  doneCounter,
} from './declaration.js';

import {buildTemplateTask, buildTemplateUserCard} from './templates.js';
import {ObjectTodo} from './models.js';

function checkInProgressList({target}) {
  window.dialogWarning.showModal();
  window.dialogWarning.classList.remove('top');
  dialogWarning.querySelector('.dialog-warning__button-close').addEventListener('click', () => {
    window.dialogWarning.classList.add('top');
    render(data);
  });
}

const clock = setInterval(() => {
  let date = new Date();
  let clockElement = document.querySelector('.clock');
  clockElement.innerHTML = date.toLocaleTimeString();
}, 1000);

function buildDate() {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}  ${date.toLocaleDateString()}`;
}

function createId() {
  const newId = crypto.randomUUID();
  return newId;
}

function printUserCard(data) {
  const usersListElement = document.querySelector('.users-list');
  data.forEach(function (item) {
    usersListElement.insertAdjacentHTML('beforeend', buildTemplateUserCard(item));
  });
}
function printUserOption(data, select) {
  data.forEach(function (item) {
    const option = document.createElement('option');
    option.value = `${item.name}`;
    option.text = `${item.name}`;
    select.add(option);
  });
}

function getData() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function setData(data) {
  localStorage.setItem('todos', JSON.stringify(data));
}

function render(payload) {
  const todoList = payload.filter(function (task) {
    return task.status === 'todo';
  });
  const inProgressList = payload.filter(function (task) {
    return task.status === 'in-progress';
  });
  const doneList = payload.filter(function (task) {
    return task.status === 'done';
  });

  todoCounter.innerHTML = todoList.length;
  inProgressCounter.innerHTML = inProgressList.length;
  doneCounter.innerHTML = doneList.length;

  todoListElement.innerHTML = '';
  inProgressListElement.innerHTML = '';
  doneListElement.innerHTML = '';

  todoList.forEach(todo => {
    todoListElement.insertAdjacentHTML('beforeend', buildTemplateTask(todo));
  });
  inProgressList.forEach(todo => {
    inProgressListElement.insertAdjacentHTML('beforeend', buildTemplateTask(todo));
  });
  doneList.forEach(todo => {
    doneListElement.insertAdjacentHTML('beforeend', buildTemplateTask(todo));
  });
}

export {
  clock,
  checkInProgressList,
  createId,
  buildDate,
  printUserCard,
  printUserOption,
  getData,
  setData,
  render,
};
