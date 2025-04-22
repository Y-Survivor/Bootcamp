// data/emojis.js
const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '😂', name: 'Joy' },
  { emoji: '😎', name: 'Cool' },
  { emoji: '😍', name: 'Heart Eyes' },
  { emoji: '🤔', name: 'Thinking' },
  { emoji: '😴', name: 'Sleeping' },
  { emoji: '😱', name: 'Scream' },
  { emoji: '👍', name: 'Thumbs Up' },
  { emoji: '👏', name: 'Clap' },
  { emoji: '🙏', name: 'Pray' },
  { emoji: '💪', name: 'Muscle' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🐱', name: 'Cat' },
  { emoji: '🐼', name: 'Panda' },
  { emoji: '🐵', name: 'Monkey' },
  { emoji: '🦁', name: 'Lion' },
  { emoji: '🐮', name: 'Cow' },
  { emoji: '🐷', name: 'Pig' },
  { emoji: '🦊', name: 'Fox' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '🍕', name: 'Pizza' },
  { emoji: '🍔', name: 'Burger' },
  { emoji: '🍦', name: 'Ice Cream' },
  { emoji: '🍩', name: 'Donut' },
  { emoji: '🥑', name: 'Avocado' }
];

function getRandomEmoji() {
  // Select a random emoji as the correct answer
  const correctIndex = Math.floor(Math.random() * emojis.length);
  const correctEmoji = emojis[correctIndex];
  
  // Generate random options (including the correct answer)
  const options = [correctEmoji.name];
  
  // Add 3 random incorrect options
  while (options.length < 4) {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomName = emojis[randomIndex].name;
    
    // Ensure we don't add duplicates
    if (!options.includes(randomName)) {
      options.push(randomName);
    }
  }
  
  // Shuffle options
  const shuffledOptions = options.sort(() => Math.random() - 0.5);
  
  return {
    emoji: correctEmoji.emoji,
    correctAnswer: correctEmoji.name,
    options: shuffledOptions
  };
}

module.exports = {
  emojis,
  getRandomEmoji
};
