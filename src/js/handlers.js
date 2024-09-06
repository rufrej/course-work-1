import {ObjectTask} from './models.js';
import {setData, getData, render, showUserIcon, checkInProgressList} from './helpers.js';
import {
  data,
  buttonOpenModalAddElement,
  todoListElement,
  inProgressListElement,
  doneListElement,
  // buttonOpenModalConfirmElement,
  // buttonDialogConfirmElement,
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
  if ((inProgressList.length === 6) & (selectUserStatusElement.value === 'in-progress')) {
    checkInProgressList(event);
  } else {
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const description = formData.get('description');
    let newTodo = new ObjectTask(title, description);
    data.push(newTodo);
    setData(data);
    formAddElement.reset();
    render(data);
  }
}

function handleChangeSelectStatus({target}) {
  if (target.dataset.role === 'select-status') {
    const inProgressList = data.filter(function (task) {
      return task.status === 'in-progress';
    });

    if ((inProgressList.length === 6) & (target.value === 'in-progress')) {
      checkInProgressList({target});
    } else {
      const taskElement = target.closest('.todo-task');
      const id = taskElement.dataset.id;
      const task = data.find(task => task.id === id);
      task.status = target.value;
      setData(data);
      render(data);
    }
  }
}

// function handleClickButtonDelleteAll() {
//   todoStorageCurrentListElement.innerHTML = '';
//   todoStorageInProgressListElement.innerHTML = '';
//   todoStorageDoneListElement.innerHTML = '';
//   setData([]);
//   render(data);
//   // data.length = 0;
//   // render(data);
// }

function handleClickButtonClose({target}) {
  if (target.dataset.role == 'delete') {
    const todoElement = target.closest('.todo-task');
    const {id} = todoElement.dataset;

    let result = confirm('Are you sure?');
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
    window.dialogModalEdit.showModal();
    const dialogModalEditElement = document.querySelector('#dialogModalEdit');
    const formEdit = document.querySelector('#form__modal-edit');
    const taskElement = target.closest('.todo-task');
    const id = taskElement.dataset.id;
    const task = data.find(task => task.id === id);
    const titleElement = taskElement.querySelector('.todo-task-title');
    const descriptionElement = taskElement.querySelector('.todo-task-description');
    const taskUserName = taskElement.querySelector('.task-user-name');
    //------------------
    const editTitleElement = formEdit.querySelector('#input-title');
    const editDescriptionElement = formEdit.querySelector('#input-description');
    const editUserName = dialogModalEditElement.querySelector('#modal-edit__select__user-name');
    const userIcon = dialogModalEditElement.querySelector('#user-icon');
    //-----------------
    editTitleElement.value = titleElement.textContent;
    editDescriptionElement.value = descriptionElement.textContent;
    editUserName.value = taskUserName.textContent;
    // userIcon.innerHTML = showUserIcon(editUserName.value);
    // editUserName.addEventListener('click', () => {
    //   userIcon.innerHTML = showUserIcon(editUserName.value);
    // });
    // -----------------
    formEdit.addEventListener('submit', () => {
      let result = confirm('Apply changes?');
      if (result) {
        titleElement.textContent = editTitleElement.value;
        task.title = editTitleElement.value;
        descriptionElement.textContent = editDescriptionElement.value;
        task.description = editDescriptionElement.value;
        taskUserName.textContent = editUserName.value;
        task.userName = editUserName.value;
        // task.userIcon = showUserIcon(editUserName.value);
        setData(data);
      }
    });
  }
}

// function handleSubmitEditTask() {
//   titleElement.textContent = editTitleElement.value;
//   task.title = editTitleElement.value;
//   descriptionElement.textContent = editDescriptionElement.value;
//   task.description = editDescriptionElement.value;
//   taskUserName.textContent = editUserName.value;
//   task.userName = editUserName.value;
//   taskStatus.value = editStatus.value;
//   task.status = editStatus.value;
//   setData(data);
// }

// function handleEditTask({target}) {
//   if (target.dataset.role == 'edit') {
//     const taskElement = target.closest('.todo-task');
//     const id = taskElement.dataset.id;
//     const task = data.find(task => task.id === id);
//     const titleElement = taskElement.querySelector('.todo-task-title');
//     const descriptionElement = taskElement.querySelector('.todo-task-description');
//     const editTitleElement = taskElement.querySelector('#task-edit-title');
//     const editDescriptionElement = taskElement.querySelector('#task-edit-description');
//     const buttonDeleteTaskElement = taskElement.querySelector('.button-delete-task');
//     const buttonCloseEditElement = taskElement.querySelector('.button-close-edit');
//     const editTitle = taskElement.querySelector('.edit-title').classList.toggle('hidden');
//     const taskFormSelectElement = taskElement.querySelector('#card-select__user-name');
//     const taskUserName = taskElement.querySelector('.task-user-name');
//     buttonCloseEditElement.classList.toggle('hidden');
//     buttonDeleteTaskElement.classList.toggle('hidden');
//     taskElement.classList.toggle('edit-task');
//     titleElement.classList.toggle('hidden');
//     descriptionElement.classList.toggle('hidden');
//     editTitleElement.classList.toggle('hidden');
//     editDescriptionElement.classList.toggle('hidden');
//     taskFormSelectElement.classList.toggle('hidden');
//     taskUserName.classList.toggle('hidden');
//     console.warn(task.userName);
//     console.log(taskUserName);
//     console.log(taskFormSelectElement.value);
//     taskFormSelectElement.value = task.userName;
//     taskFormSelectElement.addEventListener('click', () => {
//       taskUserName.innerHTML = taskFormSelectElement.value;
//       task.userName = taskFormSelectElement.value;
//       task.UserIcon = showUserIcon();
//     });
//     buttonCloseEditElement.addEventListener('click', () => {
//       titleElement.innerHTML = task.title;
//       descriptionElement.innerHTML = task.description;
//       render(data);
//     });
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

// function handleEditTask({target}) {
//   if (target.dataset.role == 'edit') {
//     // console.log('yes');
//     window.dialogModalEdit.showModal();
//     const dialogModalEditElement = document.querySelector('#dialogModalEdit');
//     const formEdit = document.querySelector('#form__modal-edit');
//     const taskElement = target.closest('.todo-task');
//     const id = taskElement.dataset.id;
//     const task = data.find(task => task.id === id);
//     const titleElement = taskElement.querySelector('.todo-task-title');
//     const descriptionElement = taskElement.querySelector('.todo-task-description');
//     const editTitleElement = formEdit.querySelector('#input-title');
//     const editDescriptionElement = formEdit.querySelector('#input-description');

//     console.warn(descriptionElement.textContent);

//     editTitleElement.value = titleElement.textContent;
//     editDescriptionElement.value = descriptionElement.textContent;
//   }
// }

export {
  handleSubmitForm,
  // handleClickButtonDelleteAll,
  handleClickButtonClose,
  handleChangeSelectStatus,
  handleEditTask,
};
