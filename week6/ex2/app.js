// app.js - Main application file
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Import routes
const todosRouter = require('./routes/todos');

// Mount the router with a prefix
app.use('/todos', todosRouter);

// Start the server
app.listen(port, () => {
  console.log(`Todo API server running at http://localhost:${port}`);
});