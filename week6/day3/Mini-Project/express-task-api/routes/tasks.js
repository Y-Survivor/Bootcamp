// File: routes/tasks.js
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const router = express.Router();

const tasksFilePath = path.join(__dirname, '../data/tasks.json');

// Utility function to read tasks from file
async function readTasks() {
  try {
    const data = await fs.readFile(tasksFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      // If file doesn't exist, create it with an empty array
      await fs.mkdir(path.dirname(tasksFilePath), { recursive: true });
      await fs.writeFile(tasksFilePath, JSON.stringify([], null, 2));
      return [];
    }
    throw error;
  }
}
//yassir
// Utility function to write tasks to file
async function writeTasks(tasks) {
  await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
}

// GET /tasks - Retrieve all tasks
router.get('/', async (req, res, next) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

// GET /tasks/:id - Retrieve a specific task by ID
router.get('/:id', async (req, res, next) => {
  try {
    const tasks = await readTasks();
    const task = tasks.find(t => t.id === req.params.id);
    
    if (!task) {
      return res.status(404).json({ 
        status: 'error', 
        message: `Task with id ${req.params.id} not found` 
      });
    }
    
    res.json(task);
  } catch (error) {
    next(error);
  }
});

// POST /tasks - Create a new task
router.post('/', async (req, res, next) => {
  try {
    const { title, description } = req.body;
    
    // Validation
    if (!title) {
      return res.status(400).json({ 
        status: 'error', 
        message: 'Title is required' 
      });
    }
    
    const tasks = await readTasks();
    
// Create new task with unique ID
    const newTask = {
      id: Date.now().toString(),
      title,
      description: description || '',
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    tasks.push(newTask);
    await writeTasks(tasks);
    
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
});

// PUT /tasks/:id - Update a task
router.put('/:id', async (req, res, next) => {
  try {
    const { title, description, completed } = req.body;
    const tasks = await readTasks();
    
    const taskIndex = tasks.findIndex(t => t.id === req.params.id);
    
    if (taskIndex === -1) {
      return res.status(404).json({ 
        status: 'error', 
        message: `Task with id ${req.params.id} not found` 
      });
    }
    
// Update task with provided fields
    const updatedTask = {
      ...tasks[taskIndex],
      title: title !== undefined ? title : tasks[taskIndex].title,
      description: description !== undefined ? description : tasks[taskIndex].description,
      completed: completed !== undefined ? completed : tasks[taskIndex].completed,
      updatedAt: new Date().toISOString()
    };
    
    // Validation
    if (!updatedTask.title) {
      return res.status(400).json({ 
        status: 'error', 
        message: 'Title is required' 
      });
    }
    
    tasks[taskIndex] = updatedTask;
    await writeTasks(tasks);
    
    res.json(updatedTask);
  } catch (error) {
    next(error);
  }
});

// DELETE /tasks/:id - Delete a task
router.delete('/:id', async (req, res, next) => {
  try {
    const tasks = await readTasks();
    const taskIndex = tasks.findIndex(t => t.id === req.params.id);
    
    if (taskIndex === -1) {
      return res.status(404).json({ 
        status: 'error', 
        message: `Task with id ${req.params.id} not found` 
      });
    }
    
    const deletedTask = tasks[taskIndex];
    tasks.splice(taskIndex, 1);
    await writeTasks(tasks);
    
    res.json({ 
      status: 'success', 
      message: 'Task deleted successfully',
      data: deletedTask
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;