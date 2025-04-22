// data/leaderboard.js
const leaderboard = [];

function updateLeaderboard(playerName, score) {
  // Add new score
  leaderboard.push({ name: playerName, score });
  
  // Sort by score (highest first)
  leaderboard.sort((a, b) => b.score - a.score);
}

function getTopScores(limit = 10) {
  return leaderboard.slice(0, limit);
}

module.exports = {
  leaderboard,
  updateLeaderboard,
  getTopScores
};
