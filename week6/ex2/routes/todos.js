// routes/todos.js - Router module for to-do operations
const express = require('express');
const router = express.Router();

// Sample in-memory database for storing to-do items
const todos = [
  { id: 1, title: 'Learn Express.js', completed: false },
  { id: 2, title: 'Build a REST API', completed: false }
];

// Helper function to find the next available ID
function getNextId() {
  return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

// Get all to-do items
router.get('/', (req, res) => {
  res.json(todos);
});

// Get a specific to-do item by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(todo => todo.id === id);
  
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  
  res.json(todo);
});

// Add a new to-do item
router.post('/', (req, res) => {
  const { title } = req.body;
  
  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }
  
  const newTodo = {
    id: getNextId(),
    title,
    completed: false
  };
  
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;
  
  const todoIndex = todos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  
  // Update only the provided fields
  if (title !== undefined) {
    todos[todoIndex].title = title;
  }
  
  if (completed !== undefined) {
    todos[todoIndex].completed = completed;
  }
  
  res.json(todos[todoIndex]);
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  
  const deletedTodo = todos.splice(todoIndex, 1)[0];
  res.json({ message: 'Todo deleted successfully', deletedTodo });
});

module.exports = router;