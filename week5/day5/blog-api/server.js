// server.js - RESTful API for a blog platform

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory data store for blog posts
let data = [
  { id: 1, title: 'Introduction to REST APIs', content: 'REST APIs allow you to interact with web services via HTTP protocols...' },
  { id: 2, title: 'Express.js Fundamentals', content: 'Express is a minimal and flexible Node.js web application framework...' },
  { id: 3, title: 'Building a Blog API', content: 'In this tutorial, we will build a complete REST API for a blog platform...' }
];

// GET /posts - Return all blog posts
app.get('/posts', (req, res) => {
  res.status(200).json(data);
});

// GET /posts/:id - Return a specific blog post
app.get('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = data.find(post => post.id === id);
  
  if (!post) {
    return res.status(404).json({ error: 'Blog post not found' });
  }
  
  res.status(200).json(post);
});

// POST /posts - Create a new blog post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  
  // Validation
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  
  // Generate a new ID (in a real app, this would be handled by the database)
  const newId = data.length > 0 ? Math.max(...data.map(post => post.id)) + 1 : 1;
  
  // Create new post
  const newPost = {
    id: newId,
    title,
    content
  };
  
  // Add to data store
  data.push(newPost);
  
  res.status(201).json(newPost);
});

// PUT /posts/:id - Update an existing blog post
app.put('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  
  // Find the post
  const postIndex = data.findIndex(post => post.id === id);
  
  if (postIndex === -1) {
    return res.status(404).json({ error: 'Blog post not found' });
  }
  
  // Validation
  if (!title && !content) {
    return res.status(400).json({ error: 'Title or content is required for update' });
  }
  
  // Update post (keeping existing values if not provided)
  const updatedPost = {
    id,
    title: title || data[postIndex].title,
    content: content || data[postIndex].content
  };
  
  // Update in data store
  data[postIndex] = updatedPost;
  
  res.status(200).json(updatedPost);
});

// DELETE /posts/:id - Delete a blog post
app.delete('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  // Find the post
  const postIndex = data.findIndex(post => post.id === id);
  
  if (postIndex === -1) {
    return res.status(404).json({ error: 'Blog post not found' });
  }
  
  // Remove from data store
  const deletedPost = data.splice(postIndex, 1)[0];
  
  res.status(200).json({ message: 'Blog post deleted successfully', deletedPost });
});

// Error handling for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware for server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong on the server' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Blog API server is running on port ${PORT}`);
});