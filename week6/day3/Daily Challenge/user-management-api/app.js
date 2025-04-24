// app.js
const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// File paths
const USERS_FILE_PATH = path.join(__dirname, 'users.json');

// Initialize users.json if it doesn't exist
if (!fs.existsSync(USERS_FILE_PATH)) {
    fs.writeFileSync(USERS_FILE_PATH, JSON.stringify([], null, 2));
}

// Helper functions
function readUsersFile() {
    try {
        const data = fs.readFileSync(USERS_FILE_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading users file:', error);
        return [];
    }
}

function writeUsersFile(users) {
    try {
        fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(users, null, 2));
        return true;
    } catch (error) {
        console.error('Error writing to users file:', error);
        return false;
    }
}

// Routes
const userRouter = express.Router();

// Register route
userRouter.post('/register', async (req, res) => {
    try {
        const { name, lastName, email, username, password } = req.body;
        
        // Validate required fields
        if (!name || !lastName || !email || !username || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const users = readUsersFile();

        // Check if username or email already exists
        const userExists = users.some(user => 
            user.username === username || user.email === email
        );

        if (userExists) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create new user
        const newUser = {
            id: uuidv4(),
            name,
            lastName,
            email,
            username,
            password: hashedPassword,
            createdAt: new Date().toISOString()
        };

        // Add to users array and save to file
        users.push(newUser);
        
        if (writeUsersFile(users)) {
            return res.status(201).json({ 
                message: `User ${username} registered successfully!`,
                user: { ...newUser, password: undefined }
            });
        } else {
            return res.status(500).json({ message: 'Error saving user data' });
        }
    } catch (error) {
        console.error('Register error:', error);
        return res.status(500).json({ message: 'Server error during registration' });
    }
});

// Login route
userRouter.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate required fields
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        const users = readUsersFile();
        
        // Find user by username
        const user = users.find(user => user.username === username);

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Successful login
        return res.status(200).json({ 
            message: `Welcome back, ${user.name}!`,
            user: { ...user, password: undefined }
        });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Server error during login' });
    }
});

// Get all users
userRouter.get('/users', (req, res) => {
    try {
        const users = readUsersFile();
        // Return users without exposing password hashes
        const sanitizedUsers = users.map(user => ({ ...user, password: undefined }));
        res.status(200).json(sanitizedUsers);
    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({ message: 'Server error retrieving users' });
    }
});

// Get user by ID
userRouter.get('/users/:id', (req, res) => {
    try {
        const { id } = req.params;
        const users = readUsersFile();
        const user = users.find(user => user.id === id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return user without exposing password hash
        res.status(200).json({ ...user, password: undefined });
    } catch (error) {
        console.error('Get user by ID error:', error);
        res.status(500).json({ message: 'Server error retrieving user' });
    }
});

// Update user by ID
userRouter.put('/users/:id', (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        
        // Don't allow password updates through this endpoint for security
        if (updateData.password) {
            delete updateData.password;
        }

        const users = readUsersFile();
        const userIndex = users.findIndex(user => user.id === id);

        if (userIndex === -1) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update user object
        users[userIndex] = {
            ...users[userIndex],
            ...updateData,
            updatedAt: new Date().toISOString()
        };

        if (writeUsersFile(users)) {
            return res.status(200).json({ 
                message: 'User updated successfully',
                user: { ...users[userIndex], password: undefined }
            });
        } else {
            return res.status(500).json({ message: 'Error updating user data' });
        }
    } catch (error) {
        console.error('Update user error:', error);
        res.status(500).json({ message: 'Server error updating user' });
    }
});

// Use routes
app.use('/', userRouter);

// Serve HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;