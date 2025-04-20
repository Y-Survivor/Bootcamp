// Import the TodoList class from the todo.js module
import { TodoList } from './todo.js';

// Create an instance of TodoList
const myTodoList = new TodoList();

console.log('Creating a new Todo List...');

// Add tasks
myTodoList.addTask('Complete JavaScript project', 'Finish the todo list application using ES6 modules');
myTodoList.addTask('Go grocery shopping', 'Buy fruits, vegetables, and milk');
myTodoList.addTask('Pay utility bills', 'Electricity and water bills due by the end of the month');
myTodoList.addTask('Call mom', 'Wish her happy birthday');

// List all tasks
myTodoList.listTasks();

// Mark some tasks as complete
console.log('\nMarking tasks as complete...');
myTodoList.markAsComplete(2); // Marking "Go grocery shopping" as complete
myTodoList.markAsComplete(4); // Marking "Call mom" as complete

// List all tasks again to see the updated status
myTodoList.listTasks();

// List only completed tasks
console.log('Showing only completed tasks:');
myTodoList.listTasks(true);

// Try to mark a non-existent task as complete
myTodoList.markAsComplete(10); // Should show "Task #10 not found"

// Remove a task
myTodoList.removeTask(3); // Remove "Pay utility bills"

// List all tasks again after removal
console.log('Task list after removal:');
myTodoList.listTasks();