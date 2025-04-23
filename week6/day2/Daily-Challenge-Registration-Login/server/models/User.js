// models/User.js - User model
const pool = require('../config/database');
const bcrypt = require('bcrypt');

class User {
  static async findAll() {
    try {
      const result = await pool.query('SELECT id, email, username, first_name, last_name, created_at FROM users');
      return result.rows;
    } catch (err) {
      throw err;
    }
  }

  static async findById(id) {
    try {
      const result = await pool.query(
        'SELECT id, email, username, first_name, last_name, created_at FROM users WHERE id = $1',
        [id]
      );
      return result.rows[0];
    } catch (err) {
      throw err;
    }
  }

  static async findByUsername(username) {
    try {
      const result = await pool.query(
        'SELECT u.id, u.email, u.username, u.first_name, u.last_name, h.password ' +
        'FROM users u JOIN hashpwd h ON u.username = h.username ' +
        'WHERE u.username = $1',
        [username]
      );
      return result.rows[0];
    } catch (err) {
      throw err;
    }
  }

  static async create(userData) {
    const { email, username, first_name, last_name, password } = userData;
    const client = await pool.connect();
    
    try {
      await client.query('BEGIN');
      
      // Insert into users table
      const userResult = await client.query(
        'INSERT INTO users (email, username, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING id',
        [email, username, first_name, last_name]
      );
      
      // Hash the password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      
      // Insert into hashpwd table
      await client.query(
        'INSERT INTO hashpwd (username, password) VALUES ($1, $2)',
        [username, hashedPassword]
      );
      
      await client.query('COMMIT');
      
      return userResult.rows[0];
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
  }

  static async update(id, userData) {
    const { email, username, first_name, last_name } = userData;
    
    try {
      const result = await pool.query(
        'UPDATE users SET email = $1, username = $2, first_name = $3, last_name = $4 WHERE id = $5 RETURNING id, email, username, first_name, last_name',
        [email, username, first_name, last_name, id]
      );
      
      return result.rows[0];
    } catch (err) {
      throw err;
    }
  }
}

module.exports = User;