// File: routes/quiz.js
const express = require('express');
const router = express.Router();
const triviaQuestions = require('../models/quiz');

// Helper function to initialize or reset the quiz
function initializeQuiz(req) {
  req.session.currentQuestion = 0;
  req.session.score = 0;
  req.session.totalQuestions = triviaQuestions.length;
  req.session.feedback = null;
}

// GET /quiz - Start or continue the quiz
router.get('/', (req, res) => {
  // Initialize the quiz if it hasn't been started
  if (req.session.currentQuestion === undefined) {
    initializeQuiz(req);
  }
  
  // Check if quiz is completed
  if (req.session.currentQuestion >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }
  
  // Get current question
  const questionData = triviaQuestions[req.session.currentQuestion];
  
  res.render('quiz', {
    questionNumber: req.session.currentQuestion + 1,
    totalQuestions: req.session.totalQuestions,
    question: questionData.question,
    feedback: req.session.feedback,
    score: req.session.score
  });
});

// POST /quiz - Submit an answer
router.post('/', (req, res) => {
  const { answer } = req.body;
  const currentQuestion = req.session.currentQuestion;
  
  // Validate current question index
  if (currentQuestion >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }
  
  // Check answer
  const correctAnswer = triviaQuestions[currentQuestion].answer;
  const isCorrect = answer.toLowerCase() === correctAnswer.toLowerCase();
  
  // Update score if correct
  if (isCorrect) {
    req.session.score += 1;
    req.session.feedback = {
      status: 'correct',
      message: 'Correct answer!'
    };
  } else {
    req.session.feedback = {
      status: 'incorrect',
      message: `Incorrect. The correct answer is "${correctAnswer}".`
    };
  }
  
  // Move to next question
  req.session.currentQuestion += 1;
  
  res.redirect('/quiz');
});

// GET /quiz/score - Display final score
router.get('/score', (req, res) => {
  // If quiz hasn't been started, redirect to start
  if (req.session.score === undefined) {
    return res.redirect('/quiz');
  }
  
  res.render('score', {
    score: req.session.score,
    totalQuestions: req.session.totalQuestions
  });
});

// GET /quiz/reset - Reset the quiz
router.get('/reset', (req, res) => {
  initializeQuiz(req);
  res.redirect('/quiz');
});

module.exports = router;