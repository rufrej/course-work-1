import {selectUserNameElement, SelectEditUserNameElement} from './declaration.js';

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  })
  .then(data => {
    printUserCard(data);
    printUserOption(data, selectUserNameElement);
    printUserOption(data, SelectEditUserNameElement);
    console.log(data);
  })
  .catch(error => {
    alert(' «Что-то пошло не так, попробуйте позже!»');
  });

function printUserCard(data) {
  const usersListElement = document.querySelector('.users-list');
  data.forEach(function (item) {
    usersListElement.insertAdjacentHTML('beforeend', buildTemplateTodo(item));
  });
}
function printUserOption(data, select) {
  // const usersSelectAddElement = document.querySelector('#select__user-name');
  // const usersSelectEditElement = document.querySelector('#modal-edit__select__user-name');
  // console.warn(usersSelectAddElement);
  data.forEach(function (item) {
    const option = document.createElement('option');
    option.value = `${item.name}`;
    option.text = `${item.name}`;
    select.add(option);
  });

  // data.forEach(function (item) {
  //   usersSelectElement.insertAdjacentHTML('beforeend', buildTemplateSelectUsers(item));
  //   console.warn(usersSelectElement);
  // });
}

function buildTemplateTodo({id, name, username, email, phone, website, address, company}) {
  return `
  <div class="user-card" data-id="${id}">
          <h6>Name:  ${name}</h6>
          <p>User Name:  ${username}</p>
          <p>Email:  ${email}</p>
          <p>Phone:  ${phone}</p>
          <p>Website:  <a href="">${website}</a></p>
          <p>City:  ${address.city}</p>
          <p>Company:  ${company.name}</p>
        </div>
  `;
}

// function buildTemplateSelectUsers({id, name}) {
//   return `
//   <option value="${id}">${name}</option>
//   `;
// }
