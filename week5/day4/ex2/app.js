console.log("App starting...");
// In app.js, import the array of person objects from the data.js module.
import people from './data.js';

// Write a function that calculates and prints the average age of all the persons in the array.
// Use the imported array and the average age function in app.js to display the result in the console.
function calculateAverageAge(people) {
    const totalAge = people.reduce((sum, person) => sum + person.age, 0);
    return totalAge / people.length;
}
// Run app.js and confirm that the average age is correctly calculated and displayed.
const averageAge = calculateAverageAge(people);
console.log(`The average age is: ${averageAge}`);   
