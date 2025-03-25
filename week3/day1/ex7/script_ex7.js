const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// 1. Extract the first letter of each name
const firstLetters = names.map(name => name[0]);

// 2. Sort the letters alphabetically
const sortedLetters = firstLetters.sort();

// 3. Join the letters to form the society name
const societyName = sortedLetters.join('');

console.log(societyName); // Output: "ABJKPS"