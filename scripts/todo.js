'use strict';

function init() {
  const todoList = document.getElementById('todo-list');
  const inputTask = document.getElementById('input-task');
  const btnAddTask = document.getElementById('btn-add');
  const currentUser = getCurrentUser('currentUser');

  if (!currentUser) return;
  let todoArr = getTodoArr(currentUser.userName) || [];

  // render task table
  function renderTask(todoArr) {
    todoList.innerHTML = '';
    todoArr.forEach((t, i) => {
      let checked = '';
      if (t.isDone) checked = 'checked';
      const html = `<li class=${checked}>${t.task}<span data-no=${i} class="close">×</span></li>`;
      todoList.insertAdjacentHTML('beforeend', html);
    });
  }

  // add task
  btnAddTask.addEventListener('click', function () {
    const inputContent = inputTask.value;

    if (!inputContent) {
      alert('input field is empty!!');
      return;
    }

    const currentTask = new Task(inputContent, currentUser.userName, false);
    todoArr.push(currentTask);
    renderTask(todoArr);
    setTodoArr(currentUser.userName, todoArr);
    inputTask.value = '';
  });

  // delete task
  todoList.addEventListener('click', function (e) {
    e.stopPropagation();
    const btnDel = e.target.closest('.close');
    if (!btnDel) return;
    const delNo = btnDel.dataset.no;
    todoArr.splice(delNo, 1);
    setTodoArr(currentUser.userName, todoArr);
    renderTask(todoArr);
  });

  // checked task
  todoList.addEventListener('click', function (e) {
    e.stopPropagation();
    const btnDel = e.target.closest('.close');
    const toggleLi = e.target.closest('li');
    const toggleSpan = toggleLi.querySelector('.close');
    const index = toggleSpan.dataset.no;
    if (btnDel) return;
    if (toggleLi) toggleLi.classList.toggle('checked');
    if (toggleLi.classList.contains('checked')) todoArr[index].isDone = true;
    else todoArr[index].isDone = false;
    setTodoArr(currentUser.userName, todoArr);
  });

  renderTask(todoArr);
}

init();
