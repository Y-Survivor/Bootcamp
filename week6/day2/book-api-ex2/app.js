// app.js
const express = require('express');
const dotenv = require('dotenv');
const { initDatabase } = require('./server/config/db');
const bookRoutes = require('./server/routes/bookRoutes');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Body parser middleware
app.use(express.json());

// Mount routes
app.use('/api/books', bookRoutes);

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Server error',
    error: process.env.NODE_ENV === 'production' ? {} : err.message
  });
});

// Define port
const PORT = process.env.PORT || 5000;

// Start server
const startServer = async () => {
  try {
    // Initialize database and create tables if they don't exist
    await initDatabase();
    
    // Start listening for requests
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();