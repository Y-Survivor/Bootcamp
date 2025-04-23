// config/dbSetup.js - Script to initialize database tables
const pool = require('./database');

const setupDatabase = async () => {
  try {
    // Create users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        username VARCHAR(100) UNIQUE NOT NULL,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Create hashpwd table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS hashpwd (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
      )
    `);
    
    console.log('Database tables created successfully');
  } catch (err) {
    console.error('Error setting up database tables:', err);
  }
};

module.exports = { setupDatabase };

