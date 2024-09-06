import {buildDate, createId, showUserIcon} from './helpers.js';
import {selectUserNameElement, selectUserStatusElement} from './declaration.js';

export function ObjectTask(title, description) {
  this.id = createId();
  this.title = title;
  this.description = description;
  this.createdAt = buildDate();
  this.userIcon = showUserIcon();
  // this.userId = selectUserNameElement.value
  this.userName = selectUserNameElement.value;
  this.status = selectUserStatusElement.value;
}

console.log(selectUserNameElement.label);
