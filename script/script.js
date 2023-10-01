// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements
    const taskInput = document.getElementById("taskInput"); // Input field for adding tasks
    const addTaskButton = document.getElementById("addTask"); // Button to add a task
    const taskList = document.getElementById("taskList"); // List to display tasks

    // Add an event listener to the "Add Task" button to handle task addition
    addTaskButton.addEventListener("click", addTask);

    // Function to add a new task to the list
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            return; // If the input is empty, do nothing
        }

        // Create a new list item for the task
        const taskItem = document.createElement("li");
        taskItem.classList.add("taskItem"); // Add a class for styling

        // Create a span element to display the task text
        const taskTextSpan = document.createElement("span");
        taskTextSpan.innerText = taskText;

        // Create a "Delete" button for removing the task
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", removeTask); // Attach a click event handler

        // Append the text and delete button to the task item
        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(deleteButton);

        // Add a click event listener to toggle task completion
        taskItem.addEventListener("click", toggleCompletion);

        // Add the task item to the task list and clear the input field
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }

    // Function to remove a task when the "Delete" button is clicked
    function removeTask() {
        this.parentElement.remove();
    }

    // Function to toggle the completion status of a task
    function toggleCompletion() {
        this.classList.toggle("completed"); // Toggle the "completed" class
    }

    // Add a keypress event listener to the input field for adding tasks
    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTask(); // If Enter key is pressed, add the task
        }
    });
});
