// Part 1: Evaluate [2] === [2] and {} === {}

Answer: Both are false.

Explanation:

/* In JavaScript, arrays and objects are reference types. 
When you compare two arrays or objects using ===, it checks if they refer to the exact same object 
in memory, not if their contents are the same.

[2] === [2]: These are two different array instances, even though they contain the same value.
Hence, false.

{} === {}: These are two different object instances.
Hence, false.*/

// Part 2: Object Property Values
// Given the following code:

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number); // ?
console.log(object3.number); // ?
console.log(object4.number); // ?

// The Answers are:

object2.number: 4

object3.number: 4

object4.number: 5

Explanation:

object1, object2, and object3 all reference the same object in memory. Changing object1.number affects object2 and object3 because they point to the same object.

object4 is a new object with its own number property, so it remains 5 regardless of changes to object1.

// Part 3: To create Classes Animal and Mammal
/* We need to:

1. Create an Animal class with name, type, and color attributes.

2. Extend Animal with a Mammal class that adds a sound() method.

3. Create a farmerCow instance of Mammal that "moos".*/

// Solution Code:

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  sound(animalSound) {
    return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('Moooo'));

/* Explanation:

Animal Class:
    Constructor initializes name, type, and color.

Mammal Class:
    Extends Animal.
    Adds a sound() method that takes animalSound and returns a string combining the sound and the animal's details.

farmerCow Instance:
    Created with name = 'Lily', type = 'cow', and color = 'brown and white'.
    Calling farmerCow.sound('Moooo') outputs: "Moooo I'm a cow, named Lily and I'm brown and white".

Final Outputs:
[2] === [2] → false

{} === {} → false

object2.number → 4

object3.number → 4

object4.number → 5

farmerCow.sound('Moooo') → "Moooo I'm a cow, named Lily and I'm brown and white".*/