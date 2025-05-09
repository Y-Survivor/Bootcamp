// server/routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const { 
  getAllBooks, 
  getBook, 
  createBook, 
  updateBook, 
  deleteBook 
} = require('../controllers/bookController');

router.route('/')
  .get(getAllBooks)
  .post(createBook);

router.route('/:bookId')
  .get(getBook)
  .put(updateBook)
  .delete(deleteBook);

module.exports = router;