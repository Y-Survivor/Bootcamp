// File structure:
// - app.js (main Express server)
// - public/
//   - index.html (game interface)
//   - style.css (styling)
//   - script.js (client-side logic)
// - data/
//   - emojis.js (emoji data)
//   - leaderboard.js (leaderboard logic)

// app.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Import data modules
const { emojis, getRandomEmoji } = require('./data/emojis');
const { leaderboard, updateLeaderboard, getTopScores } = require('./data/leaderboard');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Session storage for active games
const activeGames = new Map();

// Routes
app.get('/api/game/new', (req, res) => {
  const gameId = Date.now().toString();
  const { emoji, correctAnswer, options } = getRandomEmoji();
  
  // Initialize game session
  activeGames.set(gameId, {
    currentEmoji: emoji,
    correctAnswer: correctAnswer,
    score: 0,
    rounds: 0
  });
  
  res.json({
    gameId,
    emoji,
    options
  });
});

app.post('/api/game/guess', (req, res) => {
  const { gameId, guess } = req.body;
  
  if (!activeGames.has(gameId)) {
    return res.status(404).json({ error: 'Game not found' });
  }
  
  const game = activeGames.get(gameId);
  game.rounds += 1;
  
  const isCorrect = guess === game.correctAnswer;
  if (isCorrect) {
    game.score += 1;
  }
  
  // Generate new emoji for next round
  const { emoji, correctAnswer, options } = getRandomEmoji();
  game.currentEmoji = emoji;
  game.correctAnswer = correctAnswer;
  
  res.json({
    isCorrect,
    correctAnswer: isCorrect ? null : game.correctAnswer,
    score: game.score,
    nextEmoji: emoji,
    nextOptions: options
  });
});

app.post('/api/game/end', (req, res) => {
  const { gameId, playerName } = req.body;
  
  if (!activeGames.has(gameId)) {
    return res.status(404).json({ error: 'Game not found' });
  }
  
  const game = activeGames.get(gameId);
  const finalScore = game.score;
  
  // Add to leaderboard if name provided
  if (playerName) {
    updateLeaderboard(playerName, finalScore);
  }
  
  // Clean up game session
  activeGames.delete(gameId);
  
  res.json({
    finalScore,
    totalRounds: game.rounds
  });
});

app.get('/api/leaderboard', (req, res) => {
  res.json(getTopScores(10));
});

// Start server
app.listen(PORT, () => {
  console.log(`Emoji Guessing Game server running on port ${PORT}`);
});

