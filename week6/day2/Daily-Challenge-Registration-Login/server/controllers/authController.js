// controllers/authController.js - Authentication controller
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register a new user
exports.register = async (req, res) => {
  try {
    const { email, username, first_name, last_name, password } = req.body;
    
    // Validate input
    if (!email || !username || !first_name || !last_name || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Create user
    const userId = await User.create({
      email,
      username,
      first_name,
      last_name,
      password
    });
    
    res.status(201).json({
      message: 'User registered successfully',
      userId: userId.id
    });
  } catch (err) {
    console.error('Registration error:', err);
    
    if (err.code === '23505') { // PostgreSQL unique violation code
      return res.status(409).json({ message: 'Username or email already exists' });
    }
    
    res.status(500).json({ message: 'Error registering user' });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Validate input
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
    
    // Find user
    const user = await User.findByUsername(username);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Remove password from response
    const { password: _, ...userData } = user;
    
    res.status(200).json({
      message: 'Login successful',
      user: userData
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Error during login' });
  }
};