import {ObjectTodo} from './models.js';
import {setData, getData, render} from './helpers.js';
import {
  data,
  buttonOpenModalAddElement,
  todoStorageCurrentListElement,
  todoStorageInProgressListElement,
  todoStorageDoneListElement,
  buttonOpenModalConfirmElement,
  buttonDialogConfirmElement,
  // inputTitleElement,
  // inputDescriptionElement,
  formAddElement,
} from './declaration.js';

// Обработчик добавления тудушек
function handleSubmitForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const title = formData.get('title');
  const description = formData.get('description');

  let newTodo = new ObjectTodo(title, description);
  data.push(newTodo);
  setData(data);
  formAddElement.reset();
  render(data);

  // if (inputTitleElement !== '' || inputDescriptionElement !== '') {
  //   let newTodo = new ObjectTodo(inputTitleElement.value, inputDescriptionElement.value);
  //   todosList.push(newTodo);
  //   setData(todosList);
  //   formAddElement.reset();
  //   render(getData());
  // }
}

function handleChangeSelectStatus({target}) {
  if (target.dataset.role === 'select-status') {
    const taskElement = target.closest('.todo-task');
    const id = taskElement.dataset.id;
    const task = data.find(task => task.id === id);
    task.status = target.value;
    setData(data);
    render(data);
  }
}

function handleClickButtonDelleteAll() {
  todoStorageCurrentListElement.innerHTML = '';
  todoStorageInProgressListElement.innerHTML = '';
  todoStorageDoneListElement.innerHTML = '';
  setData([]);
  render(data);
  // data.length = 0;
  // render(data);
}

function handleClickButtonClose({target}) {
  if (target.dataset.role == 'delete') {
    const todoElement = target.closest('.todo-task');
    const {id} = todoElement.dataset;
    console.log(todoElement);
    let result = confirm('Are you sure');
    if (result) {
      data.splice(
        data.findIndex(todo => todo.id == id),
        1
      );
    }
    setData(data);
    render(data);
  }
}

function handleEditTask({target}) {
  if (target.dataset.role == 'edit') {
    const taskElement = target.closest('.todo-task');
    const id = taskElement.dataset.id;
    const task = data.find(task => task.id === id);
    const titleElement = taskElement.querySelector('.todo-task-title');
    const descriptionElement = taskElement.querySelector('.todo-task-description');
    const editTitleElement = taskElement.querySelector('#edit-title');
    const editDescriptionElement = taskElement.querySelector('#edit-description');
    const buttonClose = taskElement.querySelector('.button-close');
    taskElement.classList.toggle('edit-task');
    titleElement.classList.toggle('hidden');
    descriptionElement.classList.toggle('hidden');
    buttonClose.classList.toggle('hidden');
    editTitleElement.classList.toggle('hidden');
    editDescriptionElement.classList.toggle('hidden');
    console.log(titleElement.innerHTML);
    editTitleElement.addEventListener('input', event => {
      titleElement.innerHTML = event.target.value;
      task.title = event.target.value;
    });
    editDescriptionElement.addEventListener('input', event => {
      descriptionElement.innerHTML = event.target.value;
      task.description = event.target.value;
    });
    setData(data);
  }
}
// function handleChangeSelectStatus(event) {
//   let todosList = getData();
//   let status = event.target.closest('#todo-select').value;
//   let todoTask = event.target.closest('.todo-task');
//   console.log(todoTask);
//   if (status === '1') {
//     console.error('1');
//     // todoStorageCurrentListElement.append(todoTask);
//     status = '1';
//     //   setData(todosList);
//     //   render(getData());
//   }
//   if (status === '2') {
//     console.error(todoStorageInProgressListElement);
//     todoStorageInProgressListElement.append(todoTask);
//     status = '2';
//     console.error('2');
//     // setData(todosList);
//     // render(getData());
//   }
//   if (status === '3') {
//     console.error('3');
//     // todoStorageDoneListElement.append(todoTask);
//     status = '3';
//     // setData(todosList);
//     // render(getData());
//   }
//   setData(todosList);
//   render(getData());
// }

// function handleClickButtonClose(event) {
//   let todosList = getData();
//   if (event.target.dataset.role == 'delete') {
//     const todoElement = event.target.closest('.todo-task');
//     const {id} = todoElement.dataset;
//     console.log(id);

//     todosList.splice(
//       todosList.findIndex(todo => todo.id == id),
//       1
//     );
//     setData(todosList);
//     render(getData());
//   }
// }
// function handleClickButtonClose(event) {
//   // let todosList = getData();
//   if (event.target.dataset.role == 'delete') {
//     let todoId = event.target.closest('.todo-task').dataset.id;
//     let targetTodoIndex = todosList.indexOf(todosList.find(item => item.id == todoId));
//     data.splice(targetTodoIndex, 1);
//     setData(data);
//     render(data, todoStorageCurrentListElement);
//   }
// }
export {
  handleSubmitForm,
  handleClickButtonDelleteAll,
  handleClickButtonClose,
  handleChangeSelectStatus,
  handleEditTask,
};
