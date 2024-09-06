import {buildDate, createId} from './helpers.js';
import {selectUserNameElement, selectUserStatusElement} from './declaration.js';

// export function ObjectTask(title, description) {
//   this.id = createId();
//   this.title = title;
//   this.description = description;
//   this.createdAt = buildDate();
//   this.userIcon = showUserIcon();
//   this.userName = selectUserNameElement.value;
//   this.status = selectUserStatusElement.value;
// }

export class ObjectTask {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
  id = createId();
  createdAt = buildDate();
  // userIcon = showUserIcon();
  userName = selectUserNameElement.value;
  status = selectUserStatusElement.value;
}
