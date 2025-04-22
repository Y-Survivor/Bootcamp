// File: app.js
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const quizRouter = require('./routes/quiz');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'trivia-quiz-secret',
  resave: false,
  saveUninitialized: true
}));

// Set view engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.use('/quiz', quizRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});