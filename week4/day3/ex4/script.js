// Code Analysis
// 1. Class Definition:

class Person {
  constructor(name) {
    this.name = name;
  }
}

/* A class Person is defined with a constructor that takes a name parameter.

Inside the constructor, the name parameter is assigned to the instance property this.name. */

// Object Instantiation:

const member = new Person('John');

/* An instance of the Person class is created with the name 'John'.

The new keyword is used to create an object (member) that is an instance of the Person class. */

// 3. Type Check:

console.log(typeof member);

/* The typeof operator is used to determine the type of the member variable.

Since member is an object (an instance of the Person class), the typeof operator will return 'object'. */

// Expected Output

// The output of the code will be:

object