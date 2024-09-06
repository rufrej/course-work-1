import {getData} from './helpers.js';
const data = getData();
const tasksWrapperElement = document.querySelector('.task-wrapper');
const buttonOpenModalAddElement = document.querySelector('#buttonOpenModalAdd');
const todoListElement = document.querySelector('.to-do__list');
const inProgressListElement = document.querySelector('.in-progress__list');
const doneListElement = document.querySelector('.done__list');
const formAddElement = document.querySelector('#form__modal-add');
const selectUserNameElement = document.querySelector('#select__user-name');
const SelectEditUserNameElement = document.querySelector('#modal-edit__select__user-name');
const selectUserStatusElement = document.querySelector('#select__status');
const todoCounter = document.querySelector('#todo-counter');
const inProgressCounter = document.querySelector('#in-progress-counter');
const doneCounter = document.querySelector('#done-counter');
const buttonOpenModalUsersListElement = document.querySelector('#buttonOpenModalUsersList');
const buttonOpenModalUsersListEditElement = document.querySelector('#buttonOpenModalUsersListEdit');
const dialogUsersListElement = document.querySelector('#dialogUsersIcons');
const buttonDeleteAllElement = document.querySelector('#button-delete-all');
const imageUrls = [
  'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
  'https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png',
  'https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_profile_smiley_happy_people_icon_181659.png',
  'https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_girl_female_woman_profile_smiley_happy_people_icon_181662.png',
  'https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_girl_female_woman_profile_smiley_happy_people_icon_181656.png',
  'https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_girl_female_woman_profile_smiley_happy_people_icon_181665.png',
  'https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_boy_girl_female_male_woman_profile_smiley_happy_people_man_icon_181664.png',
  'https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181658.png',
  'https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181660.png',
  'https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181661.png',
  'https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_girl_female_woman_profile_smiley_happy_people_icon_181663.png',
];

export {
  data,
  buttonOpenModalAddElement,
  todoListElement,
  inProgressListElement,
  doneListElement,
  formAddElement,
  selectUserNameElement,
  SelectEditUserNameElement,
  selectUserStatusElement,
  tasksWrapperElement,
  todoCounter,
  inProgressCounter,
  doneCounter,
  buttonOpenModalUsersListElement,
  buttonOpenModalUsersListEditElement,
  imageUrls,
  dialogUsersListElement,
  buttonDeleteAllElement,
};
