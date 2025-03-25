// Prompt the user for a number
let userInput = prompt("Please enter a number:");

// Check the data type from the prompt (it will always be string)
console.log(typeof userInput); // "string"

// Convert the input to a number
let number = Number(userInput);

// While loop to continue asking until number is 10 or greater
while (number < 10) {
  userInput = prompt("Please enter a new number (must be 10 or greater):");
  number = Number(userInput);
}

console.log(`Thank you! You entered ${number} which is 10 or greater.`);