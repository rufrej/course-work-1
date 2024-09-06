import {
  // buttonOpenModalAddElement,
  data,
  todoListElement,
  inProgressListElement,
  doneListElement,
  selectUserNameElement,
  selectUserStatusElement,
  todoCounter,
  inProgressCounter,
  doneCounter,
  usersIcons,
} from './declaration.js';

import {buildTemplateTodo} from './templates.js';
import {ObjectTodo} from './models.js';

// function getUserName() {
//   selectUserNameElement.addEventListener('change', () => {
//     return this.value;
//   });
// }

function showUserIcon(user) {
  if (user == 'Ilya') {
    return usersIcons.user1;
  }
  if (user == 'Artem') {
    return usersIcons.user2;
  }
  if (user == 'Polina') {
    return usersIcons.user3;
  }
  if (user == 'Diana') {
    return usersIcons.user4;
  }
  if (user == 'Irina') {
    return usersIcons.user5;
  }
}

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

// Получаем данные из LocalStorage
function getData() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}
// Записывавем данные в LocalStorage
function setData(data) {
  localStorage.setItem('todos', JSON.stringify(data));
}

//Рендерим всю страницу
// function render(payload) {
//   todoStorageCurrentListElement.innerHTML = '';
//   payload.forEach(todo => {
//     todoStorageCurrentListElement.insertAdjacentHTML('beforeend', buildTemplateTodo(todo));
//   });
// }

// function render(payload) {
//   todoStorageCurrentListElement.innerHTML = '';
//   todoStorageInProgressListElement.innerHTML = '';
//   todoStorageDoneListElement.innerHTML = '';

//   payload.forEach(todo => {
//     if (selectUserStatusElement.value === '1') {
//       todoStorageCurrentListElement.insertAdjacentHTML('beforeend', buildTemplateTodo(todo));
//     }
//     if (selectUserStatusElement.value === '2') {
//       todoStorageInProgressListElement.insertAdjacentHTML('beforeend', buildTemplateTodo(todo));
//     }
//     if (selectUserStatusElement.value === '3') {
//       todoStorageDoneListElement.insertAdjacentHTML('beforeend', buildTemplateTodo(todo));
//     }
//   });
// }
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
    todoListElement.insertAdjacentHTML('beforeend', buildTemplateTodo(todo));
  });
  inProgressList.forEach(todo => {
    inProgressListElement.insertAdjacentHTML('beforeend', buildTemplateTodo(todo));
  });
  doneList.forEach(todo => {
    doneListElement.insertAdjacentHTML('beforeend', buildTemplateTodo(todo));
  });
}

export {clock, checkInProgressList, createId, buildDate, getData, setData, render, showUserIcon};
