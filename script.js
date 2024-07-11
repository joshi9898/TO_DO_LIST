// script.js

document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const taskPriority = document.getElementById('task-priority');
    const taskCategory = document.getElementById('task-category');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const taskText = taskInput.value;
        const dueDate = taskDate.value;
        const priority = taskPriority.value;
        const category = taskCategory.value;

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <div class="task-details">
                <span>${taskText}</span>
                <small>Due: ${dueDate} | Priority: ${priority} | Category: ${category}</small>
            </div>
            <div class="task-buttons">
                <button class="edit-task">Edit</button>
                <button class="delete-task">Delete</button>
            </div>
        `;

        taskList.appendChild(taskItem);

        taskInput.value = '';
        taskDate.value = '';
        taskPriority.value = 'low';
        taskCategory.value = '';

        const editButton = taskItem.querySelector('.edit-task');
        const deleteButton = taskItem.querySelector('.delete-task');

        editButton.addEventListener('click', () => {
            taskInput.value = taskText;
            taskDate.value = dueDate;
            taskPriority.value = priority;
            taskCategory.value = category;
            taskList.removeChild(taskItem);
        });

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    });
});
