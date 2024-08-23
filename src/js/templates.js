// Шаблон
export function buildTemplateTodo({id, title, description, createdAt}) {
  //
  return `
         <div class="todo-storage__task  data-id="${id}">
            <div class="todo-storage__task-header">
              <h4 class="todo-storage__task-title">${title}</h4>
              <button type="button" class="btn btn-danger">
                <img style="transform: scale(140%)" src="./image/delete-svgrepo-com.svg" alt="X" />
              </button>
            </div>
            <p class="todo-storage__task-description">
             ${description}
            </p>
            <div class="todo-storage__task-info">
              <p class="todo-storage__task-user-name">UserName</p>
              <p class="todo-storage__task-time">${createdAt}</p>
            </div>
            <div class="todo-storage__task-setting">
              <select class="form-select">
                <option value="1">Set</option>
                <option value="2">In progress</option>
                <option value="3">Done</option>
              </select>
              <button type="button" class="btn btn-warning">Edit</button>
            </div>
          </div>
      `;
}
