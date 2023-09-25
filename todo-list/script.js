// Getting all required elements

const inputField = document.querySelector('.input-field textarea'),todoLists = document.querySelector('.todoLists'),
pendingNum = document.querySelector('.pending-num'),
clearButton = document.querySelector('.clear-button'), addButton = document.querySelector('.add-button');


// We will call this function while adding, deleting and checking-unchecking the tasks

function allTasks() {
  let tasks = document.querySelectorAll('.pending');

  // if tasks length is 0 then pending num text content will be no, if not then pending num value will be the tasks length
  pendingNum.textContent = tasks.length === 0 ? 'no' : tasks.length;

  let allLists = document.querySelectorAll('.list');
  if(allLists.length > 0) {
    todoLists.style.marginTop = '20px';
    clearButton.style.pointerEvents = 'auto';
    return;
  }
  todoLists.style.marginTop = '0px';
  clearButton.style.pointerEvents = 'none';
}

// Add task when the "Add Task" button is clicked
addButton.addEventListener('click', () => {
  let inputVal = inputField.value.trim();

  if (inputVal.length > 0) {
    let liTag = `<li class="list pending" onclick='handleStatus(this)'>
      <input type="checkbox">
      <span class="task">${inputVal}</span>
      <i class="uil uil-trash" onclick='deleteTask(this)'></i>
    </li>`;

    todoLists.insertAdjacentHTML('beforeend', liTag);
    inputField.value = '';
    allTasks();
  }
});

// Add task while we put value in text area and press enter
inputField.addEventListener('keyup', (e) => {
  let inputVal = inputField.value.trim(); //trim function removes space of front and back of the inputed value

  // If enter button is clicked and inputed value length is greater than 0
  if(e.key === 'Enter' && inputVal.length > 0) {
    let liTag = `<li class="list pending" onclick='handleStatus(this)'>
    <input type="checkbox">
    <span class="task">${inputVal}</span>
    <i class="uil uil-trash" onclick='deleteTask(this)'></i>
  </li>`;

  todoLists.insertAdjacentHTML('beforeend', liTag); // inserting li tag inside the todo list
    inputField.value = ''; // removing value from input field
    allTasks();
  }
});

//checking and unchecking the checkbox while we click on the task
function handleStatus(e) {
  const checkbox = e.querySelector('input'); //getting checkbox
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle('pending') //eliminating the pending
  allTasks();
}

//deleting tasks while we click on the delete
function deleteTask(e) {
  e.parentElement.remove(); //getting parent element and removing it

}

//deleting all the tasks when we click on the clear button
clearButton.addEventListener('click', () => {
  todoLists.innerHTML = '';
  allTasks();
})