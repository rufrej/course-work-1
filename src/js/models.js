import {buildDate, createId} from './helpers.js';

export function ObjectTodo(title, description) {
  this.id = createId();
  this.title = title;
  this.description = description;
  this.createdAt = buildDate();
}
