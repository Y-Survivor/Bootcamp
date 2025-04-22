// app.js - Main application file
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Import routes
const booksRouter = require('./routes/books');

// Mount the router with a prefix
app.use('/books', booksRouter);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Book Management API. Use /books to access the book endpoints.');
});

// Start the server
app.listen(port, () => {
  console.log(`Book API server running at http://localhost:${port}`);
});