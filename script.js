function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create the li element
    const taskItem = document.createElement('li');

    // Create a text node for the task text (or a span element)
    const taskTextNode = document.createTextNode(taskText);
    taskItem.appendChild(taskTextNode);

    // Create the remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Assign onclick to remove the taskItem
    removeBtn.onclick = () => {
        taskList.removeChild(taskItem);
    };

    // Append the remove button to the li
    taskItem.appendChild(removeBtn);

    // Append li to the ul
    taskList.appendChild(taskItem);

    // Clear input
    taskInput.value = '';
}

