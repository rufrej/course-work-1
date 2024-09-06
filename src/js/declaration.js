import {getData} from './helpers.js';
const data = getData();
const todosWrapperElement = document.querySelector('.todos-wrapper');
// const containerElement = document.querySelector('.container');
const buttonOpenModalAddElement = document.querySelector('#buttonOpenModalAdd');
// const buttonOpenModalConfirmElement = document.querySelector('#dialog-confirm');
const todoListElement = document.querySelector('.to-do__list');
const inProgressListElement = document.querySelector('.in-progress__list');
const doneListElement = document.querySelector('.done__list');
const formAddElement = document.querySelector('#form__modal-add');
// const buttonSubmitElement = document.querySelector('#button-submit');
// const buttonDeleteAllElement = document.querySelector('.button-delete-all');
const selectUserNameElement = document.querySelector('#select__user-name');
const SelectEditUserNameElement = document.querySelector('#modal-edit__select__user-name');
const selectUserStatusElement = document.querySelector('#select__status');
// const buttonDialogConfirmElement = document.querySelector('#buttonDialogConfirm');
const todoCounter = document.querySelector('#todo-counter');
const inProgressCounter = document.querySelector('#in-progress-counter');
const doneCounter = document.querySelector('#done-counter');
const buttonOpenModalUsersListElement = document.querySelector('#buttonOpenModalUsersList');
const buttonOpenModalUsersListEditElement = document.querySelector('#buttonOpenModalUsersListEdit');
const usersIcons = {
  user1: ` <img
        src="https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png"
        alt="user1"
      />`,
  user2: `<img
        src="https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_profile_smiley_happy_people_icon_181659.png"
        alt="user2"
      />`,
  user3: `<img
        src="https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_girl_female_woman_profile_smiley_happy_people_icon_181662.png"
        alt="user3"
      />`,
  user4: `<img
        src="https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_girl_female_woman_profile_smiley_happy_people_icon_181656.png"
        alt="user4"
      />`,
  user5: `<img
        src="https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_girl_female_woman_profile_smiley_happy_people_icon_181665.png"
        alt="user5"
      />`,
};

// console.log(usersIcons.user1);
export {
  data,
  // containerElement,
  buttonOpenModalAddElement,
  todoListElement,
  inProgressListElement,
  doneListElement,
  // buttonOpenModalConfirmElement,

  // inputTitleElement,
  // inputDescriptionElement,
  formAddElement,
  // buttonSubmitElement,
  // buttonDeleteAllElement,
  selectUserNameElement,
  SelectEditUserNameElement,
  selectUserStatusElement,
  todosWrapperElement,
  // buttonDialogConfirmElement,
  todoCounter,
  inProgressCounter,
  doneCounter,
  usersIcons,
  buttonOpenModalUsersListElement,
  buttonOpenModalUsersListEditElement,
};
