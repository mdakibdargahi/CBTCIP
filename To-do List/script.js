// task form and task list elements
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("incompleteTasks");
const completedList = document.getElementById("completedTasks");

//event listener for form submission
taskForm.addEventListener("submit", addTask);

// Function to add a new task
function addTask(event) {
  event.preventDefault();

  // Get the task input value
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", markComplete);

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Delete icon from Font Awesome Version 5

    // "delete-button" class for styling
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", deleteTask);

    const date = new Date();
    const dateString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    const time = document.createElement("span");
    time.textContent = dateString;
    time.className = "timestamp";

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(time);
    li.appendChild(deleteButton);

    //new task to the incomplete task list
    taskList.appendChild(li);

    // Clear the task input
    taskInput.value = "";
  }
}

// Function to mark a task as complete
function markComplete() {
  const listItem = this.parentElement;
  const timestamp = listItem.querySelector(".timestamp");

  if (this.checked) {
    completedList.appendChild(listItem);
    timestamp.style.display = "none";
    listItem.classList.add("completed");
  } else {
    taskList.appendChild(listItem);
    timestamp.style.display = "inline";
    listItem.classList.remove("completed");
  }
}

// Function to delete a task
function deleteTask() {
  const listItem = this.parentElement;
  listItem.remove();
}
