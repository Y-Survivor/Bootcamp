// app.js - Basic CRUD API for managing books

const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data - collection of books
let books = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
  { id: 2, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', publishedYear: 1813 },
  { id: 5, title: 'The Hobbit', author: 'J.R.R. Tolkien', publishedYear: 1937 }
];

// GET /api/books - Read all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// GET /api/books/:bookId - Read a specific book by ID
app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(book => book.id === bookId);
  
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  
  res.status(200).json(book);
});

// POST /api/books - Create a new book
app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;
  
  // Basic validation
  if (!title || !author) {
    return res.status(400).json({ message: 'Title and author are required' });
  }
  
  // Generate new ID (find max ID and increment)
  const maxId = books.length > 0 ? Math.max(...books.map(book => book.id)) : 0;
  const newId = maxId + 1;
  
  // Create new book object
  const newBook = {
    id: newId,
    title,
    author,
    publishedYear: publishedYear || null
  };
  
  // Add to collection
  books.push(newBook);
  
  // Return the newly created book with 201 status
  res.status(201).json(newBook);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Book API server is running on port ${PORT}`);
});