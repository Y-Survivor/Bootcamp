// routes/index.js - Router module
const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.send('Welcome to the Homepage!');
});

router.get('/about', (req, res) => {
  res.send('About Us - Learn more about our company.');
});

module.exports = router;