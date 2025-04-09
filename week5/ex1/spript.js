// Define a function called compareToTen that takes a number as an argument
function compareToTen(num) {
    // Return a new Promise object
    return new Promise((resolve, reject) => {
      // Check if the input number is less than or equal to 10
      if (num <= 10) {
        // If the condition is true, resolve the Promise with a success message
        // This means the Promise operation was successful
        resolve(`${num} is less than or equal to 10`);
      } else {
        // If the condition is false (number > 10), reject the Promise with an error message
        // This means the Promise operation failed
        reject(`${num} is greater than 10`);
      }
    });
  }
  
  // Test case 1: Number is greater than 10 (should reject)
  compareToTen(15)
    // .then() handles successful Promise resolution (won't run in this case)
    .then(result => console.log(result))
    // .catch() handles Promise rejection (will run here)
    .catch(error => console.log(error)); 
    // Expected output: "15 is greater than 10"
  
  // Test case 2: Number is less than 10 (should resolve)
  compareToTen(8)
    // .then() handles successful Promise resolution (will run here)
    .then(result => console.log(result))
    // .catch() handles Promise rejection (won't run in this case)
    .catch(error => console.log(error)); 
    // Expected output: "8 is less than or equal to 10"