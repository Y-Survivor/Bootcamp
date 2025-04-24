// routes/books.js - Router module for book operations
const express = require('express');
const router = express.Router();

// Sample in-memory database for storing books
const books = [
  { 
    id: 1, 
    title: 'To Kill a Mockingbird', 
    author: 'Harper Lee', 
    publishedYear: 1960,
    genre: 'Fiction'
  },
  { 
    id: 2, 
    title: '1984', 
    author: 'George Orwell', 
    publishedYear: 1949,
    genre: 'Dystopian'
  }
];

// Helper function to find the next available ID
function getNextId() {
  return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;
}

// Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Get a specific book by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(book => book.id === id);
  
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  
  res.json(book);
});

// Add a new book
router.post('/', (req, res) => {
  const { title, author, publishedYear, genre } = req.body;
  
  // Validate required fields
  if (!title || !author) {
    return res.status(400).json({ message: 'Title and author are required' });
  }
  
  const newBook = {
    id: getNextId(),
    title,
    author,
    publishedYear: publishedYear || null,
    genre: genre || 'Unknown'
  };
  
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author, publishedYear, genre } = req.body;
  
  const bookIndex = books.findIndex(book => book.id === id);
  
  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }
  
  // Update only the provided fields
  const updatedBook = {
    ...books[bookIndex],
    title: title !== undefined ? title : books[bookIndex].title,
    author: author !== undefined ? author : books[bookIndex].author,
    publishedYear: publishedYear !== undefined ? publishedYear : books[bookIndex].publishedYear,
    genre: genre !== undefined ? genre : books[bookIndex].genre
  };
  
  books[bookIndex] = updatedBook;
  res.json(updatedBook);
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const bookIndex = books.findIndex(book => book.id === id);
  
  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }
  
  const deletedBook = books.splice(bookIndex, 1)[0];
  res.json({ 
    message: 'Book deleted successfully', 
    deletedBook 
  });
});

module.exports = router;