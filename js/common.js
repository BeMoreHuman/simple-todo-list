(function(){
  const addTaskBtn = document.body.querySelector('.todo-form__btn');
  const addTaskInput = document.body.querySelector('.todo-form__input');
  const taskList = document.body.querySelector('.todo-card__list');
  const taskRemoveBtn = document.body.querySelector('.todo-card__btn');
  const clearTasksBtn = document.body.querySelector('.todo-card__clear');
  const doneTaskBtns = document.body.querySelectorAll('.todo-card__btn');

  taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('todo-card__btn')) {
      event.target.parentElement.classList.toggle('todo-card__item--done');
    }
  });

  /**
   * Create task
   * @param {string|number} taskName 
   */
  function createTask(taskName) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const btn = document.createElement('button');

    li.classList.add('todo-card__item');
    p.classList.add('todo-card__text');
    btn.classList.add('todo-card__btn');
    p.textContent = taskName;
    btn.textContent = '+';
    li.appendChild(p);
    li.appendChild(btn);

    return li;
  }

  /**
   * 
   * @param {HTMLLIElement} taskItem - new task element
   */
  function updateTaskList(taskItem) {
    taskList.prepend(taskItem);
  }

  addTaskBtn.addEventListener('click', () => {
    
    const task = addTaskInput.value.trim();
    const newTask = createTask(task);

    updateTaskList(newTask);
    // clear task input
    addTaskInput.value = '';
  });

  clearTasksBtn.addEventListener('click', () => {
    taskList.innerHTML = '';
  });
})();
