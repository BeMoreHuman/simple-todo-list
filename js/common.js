(function(){
  const addTaskBtn = document.body.querySelector('.todo-form__btn');
  const addTaskInput = document.body.querySelector('.todo-form__input');
  const taskList = document.body.querySelector('.todo-card__list');
  const taskRemoveBtn = document.body.querySelector('.todo-card__btn');
  const clearTasksBtn = document.body.querySelector('.todo-card__clear');

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
    li.appendChild(p);
    li.appendChild(btn);

    return li;
  }

  createTask(2);
})();

