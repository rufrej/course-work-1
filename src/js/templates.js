// Шаблон
export function buildTemplateTodo({id, title, description, createdAt, userName, status}) {
  const statusToDo = status === 'todo' ? 'selected' : '';
  const statusInProgress = status === 'in-progress' ? 'selected' : '';
  const statusDone = status === 'done' ? 'selected' : '';
  return `
         <div class="todo-task"  data-id="${id}"">
            <div class="todo-task-header">
              <h4 class="todo-task-title">${title}</h4>
                <input class="hidden" id="edit-title" value="${title}" />
              <button type="button" class="button-close btn btn-danger" data-role="delete">
                <svg  class="pe-none" style="transform: scale(150%)" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></button>
            </div>
            <p class="todo-task-description">
             ${description}
            </p>
             <textarea  rows="3"
             id="edit-description" class="hidden">${description}</textarea>
            <div class="todo-task-info">
              <p class="todo-task-user-name">${userName}</p>
              <p class="todo-task-time">${createdAt}</p>
            </div>
            <div class="todo-task-setting">
             <select id="todo-select" class="form-select" data-role="select-status">
                 <option value="todo" ${statusToDo}>ToDo</option>
                <option value="in-progress" ${statusInProgress}>In Progress</option>
                <option value="done" ${statusDone}>Done</option>
              </select>
              <button type="button" class="btn btn-warning"  data-role="edit">Edit</button>
            </div>
          </div>
      `;
}

// export function buildTemplateTodo({id, title, description, createdAt, userName, status}) {
//   const statusToDo = status === 'todo' ? 'selected' : '';
//   const statusInProgress = status === 'in-progress' ? 'selected' : '';
//   const statusDone = status === 'done' ? 'selected' : '';
//   return `
//          <div class="todo-task"  data-id="${id}"">
//             <div class="todo-task-header">
//               <h4 class="todo-task-title">${title}</h4>
//               <button type="button" class="button-close btn btn-danger" data-role="delete">
//                 <svg  class="pe-none" style="transform: scale(150%)" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                  <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                  <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                  <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                  <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                  <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 </svg></button>
//             </div>
//             <p class="todo-task-description">
//              ${description}
//             </p>
//             <div class="todo-task-info">
//               <p class="todo-task-user-name">${userName}</p>
//               <p class="todo-task-time">${createdAt}</p>
//             </div>
//             <div class="todo-task-setting">
//              <select id="todo-select" class="form-select" data-role="select-status">
//                  <option value="todo" ${statusToDo}>ToDo</option>
//                 <option value="in-progress" ${statusInProgress}>In Progress</option>
//                 <option value="done" ${statusDone}>Done</option>
//               </select>
//               <button type="button" class="btn btn-warning"  data-role="edit">Edit</button>
//             </div>
//           </div>
//       `;
// }

{
  /* <textarea  rows="1"
             cols="30" id="edit-title" class="hidden">${title}</textarea> */
}
