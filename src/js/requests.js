import {selectUserNameElement, SelectEditUserNameElement} from './declaration.js';
import {printUserCard, printUserOption} from './helpers.js';

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  })
  .then(data => {
    printUserCard(data);
    printUserOption(data, selectUserNameElement);
    printUserOption(data, SelectEditUserNameElement);
  })
  .catch(error => {
    alert(' «Что-то пошло не так, попробуйте позже!»');
  });
