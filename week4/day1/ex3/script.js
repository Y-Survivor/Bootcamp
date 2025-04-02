// To answer the question, we will Write a JavaScript arrow function that checks whether the value
//  of the argument passed, is a string or not. The function should return true or false

const isString = (value) => {
    return Object.prototype.toString.call(value) === '[object String]';
  };
  
  // Test cases
  console.log(isString('hello'));          // true (primitive string)
  console.log(isString(new String('hi'))); // true (String object)
  console.log(isString([1, 2, 4, 0]));    // false
  console.log(isString(123));              // false
  console.log(isString(null));             // false
  console.log(isString(undefined));        // false
  console.log(isString(''));               // true (empty string)