
// public/script.js
document.addEventListener('DOMContentLoaded', () => {
    // Game state
    let gameState = {
      gameId: null,
      score: 0,
      round: 1,
      currentEmoji: null,
      options: []
    };
  
    // DOM elements
    const welcomeScreen = document.getElementById('welcome-screen');
    const gameScreen = document.getElementById('game-screen');
    const endGameScreen = document.getElementById('end-game-screen');
    const startGameButton = document.getElementById('start-game');
    const currentEmojiElement = document.getElementById('current-emoji');
    const optionsContainer = document.getElementById('options');
    const scoreElement = document.getElementById('score');
    const roundElement = document.getElementById('round');
    const feedbackElement = document.getElementById('feedback');
    const finalScoreElement = document.getElementById('final-score');
    const totalRoundsElement = document.getElementById('total-rounds');
    const playerNameInput = document.getElementById('player-name');
    const submitScoreButton = document.getElementById('submit-score');
    const playAgainButton = document.getElementById('play-again');
    const leaderboardBody = document.querySelector('#leaderboard tbody');
  
    // Initial leaderboard load
    loadLeaderboard();
  
    // Event Listeners
    startGameButton.addEventListener('click', startGame);
    submitScoreButton.addEventListener('click', submitScore);
    playAgainButton.addEventListener('click', startGame);
  
    async function startGame() {
      try {
        // Reset game state
        gameState = {
          gameId: null,
          score: 0,
          round: 1,
          currentEmoji: null,
          options: []
        };
  
        // Update UI
        scoreElement.textContent = '0';
        roundElement.textContent = '1';
        feedbackElement.classList.add('hidden');
        
        // Switch screens
        welcomeScreen.classList.add('hidden');
        endGameScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
  
        // Start new game
        const response = await fetch('/api/game/new');
        const data = await response.json();
        
        gameState.gameId = data.gameId;
        gameState.currentEmoji = data.emoji;
        gameState.options = data.options;
        
        // Display emoji and options
        updateGameDisplay();
      } catch (error) {
        console.error('Error starting game:', error);
      }
    }
  
    function updateGameDisplay() {
      // Display current emoji
      currentEmojiElement.textContent = gameState.currentEmoji;
      
      // Create option buttons
      optionsContainer.innerHTML = '';
      gameState.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option;
        button.addEventListener('click', () => submitGuess(option));
        optionsContainer.appendChild(button);
      });
    }
  
    async function submitGuess(guess) {
      try {
        const response = await fetch('/api/game/guess', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            gameId: gameState.gameId,
            guess: guess
          })
        });
        
        const data = await response.json();
        
        // Show feedback
        feedbackElement.classList.remove('hidden');
        if (data.isCorrect) {
          feedbackElement.textContent = 'Correct! 🎉';
          feedbackElement.className = 'feedback correct';
          gameState.score = data.score;
          scoreElement.textContent = gameState.score;
        } else {
          feedbackElement.textContent = `Incorrect! The answer was "${data.correctAnswer}" 😞`;
          feedbackElement.className = 'feedback incorrect';
        }
        
        // Update round
        gameState.round += 1;
        roundElement.textContent = gameState.round;
        
        // Prepare next round
        setTimeout(() => {
          feedbackElement.classList.add('hidden');
          gameState.currentEmoji = data.nextEmoji;
          gameState.options = data.nextOptions;
          updateGameDisplay();
        }, 2000);
        
      } catch (error) {
        console.error('Error submitting guess:', error);
      }
    }
  
    async function endGame() {
      try {
        const response = await fetch('/api/game/end', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            gameId: gameState.gameId
          })
        });
        
        const data = await response.json();
        
        // Update end game screen
        finalScoreElement.textContent = data.finalScore;
        totalRoundsElement.textContent = data.totalRounds;
        
        // Show end game screen
        gameScreen.classList.add('hidden');
        endGameScreen.classList.remove('hidden');
        
      } catch (error) {
        console.error('Error ending game:', error);
      }
    }
  
    async function submitScore() {
      const playerName = playerNameInput.value.trim();
      
      if (!playerName) {
        alert('Please enter your name!');
        return;
      }
      
      try {
        await fetch('/api/game/end', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            gameId: gameState.gameId,
            playerName: playerName
          })
        });
        
        // Reload leaderboard
        loadLeaderboard();
        
        // Disable form
        playerNameInput.disabled = true;
        submitScoreButton.disabled = true;
        
      } catch (error) {
        console.error('Error submitting score:', error);
      }
    }
  
    async function loadLeaderboard() {
      try {
        const response = await fetch('/api/leaderboard');
        const scores = await response.json();
        
        // Clear current leaderboard
        leaderboardBody.innerHTML = '';
        
        // Add scores to leaderboard
        scores.forEach((score, index) => {
          const row = document.createElement('tr');
          
          const rankCell = document.createElement('td');
          rankCell.textContent = index + 1;
          
          const nameCell = document.createElement('td');
          nameCell.textContent = score.name;
          
          const scoreCell = document.createElement('td');
          scoreCell.textContent = score.score;
          
          row.appendChild(rankCell);
          row.appendChild(nameCell);
          row.appendChild(scoreCell);
          
          leaderboardBody.appendChild(row);
        });
        
      } catch (error) {
        console.error('Error loading leaderboard:', error);
      }
    }
  });