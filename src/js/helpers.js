import {
  buttonOpenModalAddElement,
  todoStorageCurrentElement,
  todoStorageInProgressElement,
  todoStorageDoneElement,
} from './declaration.js';

import {buildTemplateTodo} from './templates.js';

const clock = setInterval(() => {
  let date = new Date();
  let clockElement = document.querySelector('.clock');
  clockElement.innerHTML = date.toLocaleTimeString();
}, 1000);

// Получаем дату
function buildDate() {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}  ${date.toLocaleDateString()}`;
}
// создаём ID
function createId() {
  const newId = crypto.randomUUID();
  return newId;
}

// Получаем данные из LocalStorage
function getData() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}
// Записывавем данные в LocalStorage
function setData(data) {
  localStorage.setItem('todos', JSON.stringify(data));
}

// Рендерим всю страницу
function render(payload) {
  todoStorageCurrentElement.innerHTML = '';
  payload.forEach(todo => {
    todoStorageCurrentElement.insertAdjacentHTML('beforeend', buildTemplateTodo(todo));
    todoStorageInProgressElement.insertAdjacentHTML('beforeend', buildTemplateTodo(todo));
    todoStorageDoneElement.insertAdjacentHTML('beforeend', buildTemplateTodo(todo));
  });
}
export {clock, createId, buildDate, getData, setData, render};
