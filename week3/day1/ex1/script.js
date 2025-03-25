// Part I: Review about arrays

const people = ["Greg", "Mary", "Devon", "James"];

// 1. Write code to remove "Greg" from the people array.
people.shift();
console.log(people); // ["Mary", "Devon", "James"]

// 2. Write code to replace "James" to "Jason".
people[2] = "Jason";
console.log(people); // ["Mary", "Devon", "Jason"]

// 3. Write code to add your name to the end of the people array.
people.push("Yourname");
console.log(people); // ["Mary", "Devon", "Jason", "Yourname"]

// 4. Write code that console.logs Mary's index.
console.log(people.indexOf("Mary")); // 0

// 5. Write code to make a copy of the people array using the slice method.
// The copy should NOT include "Mary" or your name.
const peopleCopy = people.slice(1, 3);
console.log(peopleCopy); // ["Devon", "Jason"]

// 6. Write code that gives the index of "Foo". Why does it return -1?
console.log(people.indexOf("Foo")); // -1
// It returns -1 because "Foo" is not present in the array.

// 7. Create a variable called last which value is the last element of the array.
const last = people[people.length - 1];
console.log(last); // "Yourname"

// Part II - Loops

// 1. Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
  }
  // Output:
  // Mary
  // Devon
  // Jason
  // Yourname
  
  // 2. Using a loop, iterate through the people array and exit the loop after you console.log "Devon".
  for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
      break;
    }
  }
  // Output:
  // Mary
  // Devon