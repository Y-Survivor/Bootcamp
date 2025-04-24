// File: app.js
const express = require('express');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/tasks', tasksRouter);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    status: 'error',
    message: err.message || 'Something went wrong!'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
