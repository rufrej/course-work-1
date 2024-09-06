import {ObjectTask} from './models.js';
import {setData, render, checkInProgressList} from './helpers.js';
import {
  data,
  doneListElement,
  selectUserStatusElement,
  formAddElement,
  doneCounter,
} from './declaration.js';

function handleSubmitForm(event) {
  event.preventDefault();
  // checking tasks in progress
  const inProgressList = data.filter(function (task) {
    return task.status === 'in-progress';
  });
  if ((inProgressList.length === 6) & (selectUserStatusElement.value === 'in-progress')) {
    checkInProgressList(event);
  }
  // add task
  else {
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
    // checking tasks in progress
    const inProgressList = data.filter(function (task) {
      return task.status === 'in-progress';
    });
    if ((inProgressList.length === 6) & (target.value === 'in-progress')) {
      checkInProgressList({target});
    }
    // change of status
    else {
      const taskElement = target.closest('.task');
      const id = taskElement.dataset.id;
      const task = data.find(task => task.id === id);
      task.status = target.value;
      setData(data);
      render(data);
    }
  }
}

function handleClickButtonDelleteAll() {
  let result = confirm('Are you sure?');
  if (true) {
    doneListElement.innerHTML = '';
    const newList = data.filter(task => task.status !== 'done');
    doneCounter.innerHTML = '0';
    setData(newList);
  }
}

function handleClickButtonClose({target}) {
  if (target.dataset.role == 'delete') {
    const todoElement = target.closest('.task');
    const {id} = todoElement.dataset;

    let result = confirm('Are you sure?');
    if (true) {
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
    // finding the task variables
    const dialogModalEditElement = document.querySelector('#dialogModalEdit');
    const formEdit = document.querySelector('#form__modal-edit');
    const taskElement = target.closest('.task');
    const id = taskElement.dataset.id;
    const task = data.find(task => task.id === id);
    const titleElement = taskElement.querySelector('.task-title');
    const descriptionElement = taskElement.querySelector('.task-description');
    const taskUserName = taskElement.querySelector('.task-user-name');
    // find the variables of the modal window
    const editTitleElement = formEdit.querySelector('#input-title');
    const editDescriptionElement = formEdit.querySelector('#input-description');
    const editUserName = dialogModalEditElement.querySelector('#modal-edit__select__user-name');
    // setting values
    editTitleElement.value = titleElement.textContent;
    editDescriptionElement.value = descriptionElement.textContent;
    editUserName.value = taskUserName.textContent;
    // add handler
    formEdit.addEventListener('submit', () => {
      let result = confirm('Apply changes?');
      if (true) {
        titleElement.textContent = editTitleElement.value;
        task.title = editTitleElement.value;
        descriptionElement.textContent = editDescriptionElement.value;
        task.description = editDescriptionElement.value;
        taskUserName.textContent = editUserName.value;
        task.userName = editUserName.value;
        setData(data);
      }
    });
  }
}

export {
  handleSubmitForm,
  handleClickButtonClose,
  handleChangeSelectStatus,
  handleEditTask,
  handleClickButtonDelleteAll,
};
