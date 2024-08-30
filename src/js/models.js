import {buildDate, createId} from './helpers.js';
import {selectUserNameElement, selectUserStatusElement} from './declaration.js';

export function ObjectTodo(title, description) {
  this.id = createId();
  this.title = title;
  this.description = description;
  this.createdAt = buildDate();
  this.userName = selectUserNameElement.value;
  // this.status = 'todo';
  this.status = selectUserStatusElement.value;
}
