const express = require('express');
const app = express();
const dataService = require('./data/dataService');

// Middleware to parse JSON
app.use(express.json());

// GET endpoint to fetch all posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await dataService.fetchPosts();
    console.log('Data successfully retrieved and sent as response');
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});