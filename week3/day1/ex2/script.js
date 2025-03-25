// Create an array of favorite colors
const colors = ["blue", "green", "purple", "red", "yellow"];

// Part 1: Basic loop with numbering
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// Bonus: With proper ordinal suffixes
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

/* Output: 

My #1 choice is blue
My #2 choice is green
My #3 choice is purple
My #4 choice is red
My #5 choice is yellow

My 1st choice is blue
My 2nd choice is green
My 3rd choice is purple
My 4th choice is red
My 5th choice is yellow

*/

// Alternative Bonus Solution (more dynamic):

// More flexible solution that works beyond 5 items
for (let i = 0; i < colors.length; i++) {
    let suffix;
    const num = i + 1;
    
    if (num % 100 >= 11 && num % 100 <= 13) {
      suffix = 'th';
    } else {
      switch (num % 10) {
        case 1: suffix = 'st'; break;
        case 2: suffix = 'nd'; break;
        case 3: suffix = 'rd'; break;
        default: suffix = 'th';
      }
    }
    
    console.log(`My ${num}${suffix} choice is ${colors[i]}`);
  }