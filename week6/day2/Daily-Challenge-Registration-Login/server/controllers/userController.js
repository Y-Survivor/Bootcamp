// controllers/userController.js - User controller
const User = require('../models/User');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    console.error('Error retrieving users:', err);
    res.status(500).json({ message: 'Error retrieving users' });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.status(200).json(user);
  } catch (err) {
    console.error('Error retrieving user:', err);
    res.status(500).json({ message: 'Error retrieving user' });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { email, username, first_name, last_name } = req.body;
    
    // Validate input
    if (!email || !username || !first_name || !last_name) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    const updatedUser = await User.update(userId, {
      email,
      username,
      first_name,
      last_name
    });
    
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.status(200).json({
      message: 'User updated successfully',
      user: updatedUser
    });
  } catch (err) {
    console.error('Error updating user:', err);
    
    if (err.code === '23505') {
      return res.status(409).json({ message: 'Username or email already exists' });
    }
    
    res.status(500).json({ message: 'Error updating user' });
  }
};