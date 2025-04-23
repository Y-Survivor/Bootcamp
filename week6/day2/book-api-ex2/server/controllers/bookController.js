// server/controllers/bookController.js
const Book = require('../models/book');

// Get all books
exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.findAll();
    res.status(200).json({
      success: true,
      count: books.length,
      data: books
    });
  } catch (error) {
    next(error);
  }
};

// Get single book
exports.getBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.bookId);
    
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: book
    });
  } catch (error) {
    next(error);
  }
};

// Create new book
exports.createBook = async (req, res, next) => {
  try {
    const { title, author, publishedYear } = req.body;
    
    if (!title || !author) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title and author'
      });
    }
    
    const book = await Book.create(title, author, publishedYear);
    
    res.status(201).json({
      success: true,
      data: book
    });
  } catch (error) {
    next(error);
  }
};

// Update book
exports.updateBook = async (req, res, next) => {
  try {
    const { title, author, publishedYear } = req.body;
    
    if (!title || !author) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title and author'
      });
    }
    
    const book = await Book.update(req.params.bookId, title, author, publishedYear);
    
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: book
    });
  } catch (error) {
    next(error);
  }
};

// Delete book
exports.deleteBook = async (req, res, next) => {
  try {
    const book = await Book.delete(req.params.bookId);
    
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};