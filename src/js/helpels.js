const clock = setInterval(() => {
  let date = new Date();
  let clockElement = document.querySelector('.clock');
  clockElement.innerHTML = date.toLocaleTimeString();
}, 1000);

export {clock};
