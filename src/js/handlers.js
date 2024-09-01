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
  selectUserStatusElement,
  // inputTitleElement,
  // inputDescriptionElement,
  formAddElement,
} from './declaration.js';

// Обработчик добавления тудушек
function handleSubmitForm(event) {
  event.preventDefault();
  const inProgressList = data.filter(function (task) {
    return task.status === 'in-progress';
  });
  console.warn(selectUserStatusElement.value);
  if ((inProgressList.length === 6) & (selectUserStatusElement.value === 'in-progress')) {
    console.warn('aaaaaaaaa');
    console.log(event.target);
    checkInProgressList(event);
  } else {
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const description = formData.get('description');
    let newTodo = new ObjectTodo(title, description);
    data.push(newTodo);
    setData(data);
    formAddElement.reset();
    render(data);
  }
}

function checkInProgressList({target}) {
  // const inProgressList = data.filter(function (task) {
  //   return task.status === 'in-progress';
  // });
  console.log(target);
  window.dialogWarning.showModal();
  window.dialogWarning.classList.remove('top');
  dialogWarning.querySelector('.dialog-warning__button-close').addEventListener('click', () => {
    window.dialogWarning.classList.add('top');
    render(data);
  });
}

function handleChangeSelectStatus({target}) {
  if (target.dataset.role === 'select-status') {
    const inProgressList = data.filter(function (task) {
      return task.status === 'in-progress';
    });

    if ((inProgressList.length === 6) & (target.value === 'in-progress')) {
      checkInProgressList({target});
    } else {
      //   checkInProgressList({target});
      // } else {
      const taskElement = target.closest('.todo-task');
      const id = taskElement.dataset.id;
      const task = data.find(task => task.id === id);
      task.status = target.value;
      setData(data);
      render(data);
    }
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

// function handleEditTask({target}) {
//   if (target.dataset.role == 'edit') {
//     const taskElement = target.closest('.todo-task');
//     const id = taskElement.dataset.id;
//     const task = data.find(task => task.id === id);
//     const titleElement = taskElement.querySelector('.todo-task-title');
//     const descriptionElement = taskElement.querySelector('.todo-task-description');
//     const editTitleElement = taskElement.querySelector('#task-edit-title');
//     const editDescriptionElement = taskElement.querySelector('#task-edit-description');
//     const buttonClose = taskElement.querySelector('.button-close').classList.toggle('hidden');
//     const buttonCloseEdit = taskElement.querySelector('.button-close-edit');
//     const editTitle = taskElement.querySelector('.edit-title').classList.toggle('hidden');
//     buttonCloseEdit.classList.toggle('hidden');
//     console.log(buttonCloseEdit);
//     taskElement.classList.toggle('edit-task');
//     titleElement.classList.toggle('hidden');
//     descriptionElement.classList.toggle('hidden');
//     // buttonClose.classList.toggle('hidden');
//     editTitleElement.classList.toggle('hidden');
//     editDescriptionElement.classList.toggle('hidden');
//     buttonCloseEdit.addEventListener('click');
//     editTitleElement.addEventListener('input', event => {
//       titleElement.innerHTML = event.target.value;
//       task.title = event.target.value;
//     });
//     editDescriptionElement.addEventListener('input', event => {
//       descriptionElement.innerHTML = event.target.value;
//       task.description = event.target.value;
//     });
//     setData(data);
//   }
// }

function handleEditTask({target}) {
  if (target.dataset.role == 'edit') {
    const taskElement = target.closest('.todo-task');
    const id = taskElement.dataset.id;
    const task = data.find(task => task.id === id);
    const titleElement = taskElement.querySelector('.todo-task-title');
    const descriptionElement = taskElement.querySelector('.todo-task-description');
    const editTitleElement = taskElement.querySelector('#task-edit-title');
    const editDescriptionElement = taskElement.querySelector('#task-edit-description');
    const buttonDeleteTask = taskElement
      .querySelector('.button-delete-task')
      .classList.toggle('hidden');
    const buttonCloseEdit = taskElement.querySelector('.button-close-edit');
    const editTitle = taskElement.querySelector('.edit-title').classList.toggle('hidden');
    buttonCloseEdit.classList.toggle('hidden');
    console.log(buttonCloseEdit);
    taskElement.classList.toggle('edit-task');
    titleElement.classList.toggle('hidden');
    descriptionElement.classList.toggle('hidden');
    editTitleElement.classList.toggle('hidden');
    editDescriptionElement.classList.toggle('hidden');
    console.warn(task.title);
    buttonCloseEdit.addEventListener('click', () => {
      titleElement.textContent = task.value;
      render(data);
    });
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

export {
  handleSubmitForm,
  handleClickButtonDelleteAll,
  handleClickButtonClose,
  handleChangeSelectStatus,
  handleEditTask,
};
