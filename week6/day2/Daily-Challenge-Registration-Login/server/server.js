// server.js - Main server file
const express = require('express');
const bodyParser = require('body-parser');
const { setupDatabase } = require('./config/dbSetup');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize database
setupDatabase();

// Routes
app.use('/', authRoutes);
app.use('/', userRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('User Management API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});