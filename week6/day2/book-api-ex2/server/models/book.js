// server/models/book.js
const db = require('../config/db');

class Book {
  static async findAll() {
    const result = await db.query('SELECT * FROM books ORDER BY created_at DESC');
    return result.rows;
  }

  static async findById(id) {
    const result = await db.query('SELECT * FROM books WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(title, author, publishedYear) {
    const result = await db.query(
      'INSERT INTO books (title, author, published_year) VALUES ($1, $2, $3) RETURNING *',
      [title, author, publishedYear]
    );
    return result.rows[0];
  }

  static async update(id, title, author, publishedYear) {
    const result = await db.query(
      'UPDATE books SET title = $1, author = $2, published_year = $3 WHERE id = $4 RETURNING *',
      [title, author, publishedYear, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = Book;