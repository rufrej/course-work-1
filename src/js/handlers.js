import {ObjectTodo} from './models.js';
import {setData, getData, render} from './helpers.js';
import {
  buttonOpenModalAddElement,
  todoStorageCurrentElement,
  todoStorageInProgressElement,
  todoStorageDoneElement,
  inputTitleElement,
  inputDescriptionElement,
  formAddElement,
} from './declaration.js';
// Рендерим всю страницу
function render(payload) {
  todoListElement.innerHTML = '';
  payload.forEach(todo => {
    todoListElement.insertAdjacentHTML('beforeend', buildTemplateTodo(todo));
  });
}

// Обработчик добавления тудушек
function handleClickButtonSubmit(event) {
  event.preventDefault();
  let todosList = getData();
  if (inputTitleElement !== '' || inputDescriptionElement !== '') {
    let newTodo = new ObjectTodo(inputTitleElement.value, inputDescriptionElement.value);
    todosList.push(newTodo);
    setData(todosList);
    formAddElement.reset();
    render(getData());
  }
}

export {handleClickButtonSubmit};
