let form = document.querySelector("#todo-form");
let input = document.querySelector("#todo-input");
let container = document.querySelector("#todo-container");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let listName = input.value;
  if (!listName) return;

  let todoList = createTodoList(listName);
  container.appendChild(todoList);
});

function createTodoList(listName) {
  let list = document.createElement("div");
  list.classList.add("todo-list");

  let title = document.createElement("h2");
  title.innerText = listName;
  list.appendChild(title);

  let taskList = document.createElement("ul");
  list.appendChild(taskList);

  let addTask = document.createElement("button");
  addTask.innerText = "Add Task";
  addTask.classList.add("add-task");
  addTask.addEventListener("click", function () {
    let task = createTask();
    taskList.appendChild(task);
  });
  list.appendChild(addTask);

  return list;
}

function createTask() {
  let task = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  task.appendChild(checkbox);

  let taskName = document.createElement("input");
  taskName.type = "text";
  task.appendChild(taskName);

  let deleteTask = document.createElement("button");
  deleteTask.innerText = "Delete";
  deleteTask.classList.add("delete-task");
  deleteTask.addEventListener("click", function () {
    task.remove();
  });
  task.appendChild(deleteTask);

  let moveUp = document.createElement("button");
  moveUp.innerText = "Move Up";
  moveUp.classList.add("move-up");
  moveUp.addEventListener("click", function () {
    let prevTask = task.previousElementSibling;
    if (!prevTask) return;
    task.parentElement.insertBefore(task, prevTask);
  });
  task.appendChild(moveUp);

  let moveDown = document.createElement("button");
  moveDown.innerText = "Move Down";
  moveDown.classList.add("move-down");
  moveDown.addEventListener("click", function () {
    let nextTask = task.nextElementSibling;
    if (!nextTask) return;
    task.parentElement.insertBefore(nextTask, task);
  });
  task.appendChild(moveDown);

  return task;
}

// code to change the to-do lists background color
