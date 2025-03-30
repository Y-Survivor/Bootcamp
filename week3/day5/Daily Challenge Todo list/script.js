const tasks = [];
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');

// Add task function
function addTask(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }
    
    const task = {
        id: Date.now(),
        text: taskText,
        done: false
    };
    
    tasks.push(task);
    renderTask(task);
    taskInput.value = '';
}

// Render task to DOM
function renderTask(task) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.dataset.taskId = task.id;
    
    if (task.done) {
        taskItem.classList.add('completed');
    }
    
    taskItem.innerHTML = `
        <input type="checkbox" ${task.done ? 'checked' : ''}>
        <label>${task.text}</label>
        <button class="delete-btn"><i class="fas fa-times"></i></button>
    `;
    
    // Add event listeners
    const checkbox = taskItem.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => doneTask(task.id));
    
    const deleteBtn = taskItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => deleteTask(task.id));
    
    taskList.appendChild(taskItem);
}

// Mark task as done
function doneTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.done = !task.done;
        const taskElement = document.querySelector(`.task-item[data-task-id="${taskId}"]`);
        if (taskElement) {
            taskElement.classList.toggle('completed');
        }
    }
}

// Delete task
function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        const taskElement = document.querySelector(`.task-item[data-task-id="${taskId}"]`);
        if (taskElement) {
            taskElement.remove();
        }
    }
}

// Clear all tasks
function clearTasks() {
    tasks.length = 0;
    taskList.innerHTML = '';
}

// Event listeners
taskForm.addEventListener('submit', addTask);
clearBtn.addEventListener('click', clearTasks);

// Initial render of example tasks
const exampleTasks = [
    { id: 1, text: 'Vanilla JavaScript', done: true },
    { id: 2, text: 'Vue.js', done: true },
    { id: 3, text: 'React.js', done: true },
    { id: 4, text: 'Node.js', done: true }
];

exampleTasks.forEach(task => {
    tasks.push(task);
    renderTask(task);
});