const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clear')
const sortBtn = document.getElementById('sortBtn')
const sort = document.getElementById('sort')
let flag = true;
let ascendingOrder = true;
sortBtn.addEventListener("click", () => {
  if (flag) {
      sortImg.src = "./Group 38.svg";
      console.log(sort.src)
      flag = !flag
  } else{
      sortImg.src = "./Group 90.svg";
      console.log(sort.src)
      flag = !flag
  }

const items = Array.from(list.children).sort((a, b) => {
  const aValue = a.firstElementChild.textContent.toLowerCase();
  const bValue = b.firstElementChild.textContent.toLowerCase();

  if (aValue < bValue) {
      return ascendingOrder ? -1 : 1;
  } else if (aValue > bValue) {
      return ascendingOrder ? 1 : -1;
  } else {
      return 0;
  }
});
function addTask(e) {
  e.preventDefault();
  const taskText = taskInput.value;
  if (taskText.trim() !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span class="task-text">${taskText}</span>
      <span class="task-actions">
        <button class="complete-button">Complete</button>
        <button class="delete-button">Delete</button>
      </span>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}
function completeTask(e) {
  const taskItem = e.target.closest('li');
  taskItem.classList.toggle('completed');
}
function deleteTask(e) {
  const taskItem = e.target.closest('li');
  taskList.removeChild(taskItem);
}
addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('complete-button')) {
    completeTask(e);
  } else if (e.target.classList.contains('delete-button')) {
    deleteTask(e);
  }
});
clearBtn.addEventListener("click", () => {
  taskInput.value = "";
  console.log(taskInput);
});
