// 1. Analysis of the first peice of code:
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// The ouput will display the values of the variabels fruits and vegetables incide the array result.
// The output, here, will be: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// 2. Analysis of the second peice of code:

const country = "USA";
console.log([...country]);

/* The spread operator ... can also be used on strings. In this example, it splits the string 
into an array of its individual characters.

Therefore in this situation, Output Prediction will be: ['U', 'S', 'A']
*/

// 3. Analysis of the third peice of code (Bonus):

let newArray = [...[,,]];
console.log(newArray);

// Output Prediction here will be: [undefined, undefined]
// This is because the spread operator is used on an array with two empty slots (length = 2).
