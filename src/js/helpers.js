import {
  buttonOpenModalAddElement,
  todoStorageCurrentListElement,
  todoStorageInProgressListElement,
  todoStorageDoneListElement,
  selectUserNameElement,
  selectUserStatusElement,
  todoCounter,
  inProgressCounter,
  doneCounter,
} from './declaration.js';

import {buildTemplateTodo} from './templates.js';
import {ObjectTodo} from './models.js';

// function getUserName() {
//   selectUserNameElement.addEventListener('change', () => {
//     return this.value;
//   });
// }

// function showUserIcon() {
//   if (selectUserNameElement.value == 'ilya') {
//     return ` <img src="./image/user1.png" alt="user1" />`;
//   }
// }

// console.warn(getUserName());

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
console.log(todoCounter.innerHTML);
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

  todoStorageCurrentListElement.innerHTML = '';
  todoStorageInProgressListElement.innerHTML = '';
  todoStorageDoneListElement.innerHTML = '';

  todoList.forEach(todo => {
    todoStorageCurrentListElement.insertAdjacentHTML('beforeend', buildTemplateTodo(todo));
  });
  inProgressList.forEach(todo => {
    todoStorageInProgressListElement.insertAdjacentHTML('beforeend', buildTemplateTodo(todo));
  });
  doneList.forEach(todo => {
    todoStorageDoneListElement.insertAdjacentHTML('beforeend', buildTemplateTodo(todo));
  });

  // payload.forEach(({id, title, description, createdAt, userName, status}) => {
  //   const task = buildTemplateTodo({id, title, description, createdAt, userName});
  //   if (status == 'todo') {
  //     todoStorageCurrentListElement.insertAdjacentHTML('beforeend', task);
  //   }
  //   if (status == 'in-progress') {
  //     todoStorageCurrentListElement.insertAdjacentHTML('beforeend', task);
  //   }
  //   if (status == 'done') {
  //     todoStorageCurrentListElement.insertAdjacentHTML('beforeend', task);
  //   }
  // });
}

export {getUserName, clock, createId, buildDate, getData, setData, render};
