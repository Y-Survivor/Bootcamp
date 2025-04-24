// Import the lodash library
const _ = require('lodash');

// Import our custom math module
const math = require('./math');

console.log('===== MATH OPERATIONS =====');

// Using our custom math module
console.log('\n--- Custom Math Module ---');
console.log(`Addition: 5 + 3 + 2 = ${math.add(5, 3, 2)}`);
console.log(`Multiplication: 4 × 3 × 2 = ${math.multiply(4, 3, 2)}`);
console.log(`Subtraction: 10 - 3 - 2 = ${math.subtract(10, 3, 2)}`);
console.log(`Division: 24 ÷ 2 ÷ 3 = ${math.divide(24, 2, 3)}`);

// Using lodash with our math module
console.log('\n--- Combined with Lodash ---');

// Create an array of numbers using lodash's range function
const numbers = _.range(1, 6); // [1, 2, 3, 4, 5]
console.log(`Numbers array: [${numbers}]`);

// Sum the array using our add function
console.log(`Sum of array: ${math.add(...numbers)}`);

// Multiply the array using our multiply function
console.log(`Product of array: ${math.multiply(...numbers)}`);

// Using lodash to chunk the array and sum each chunk with our add function
const chunks = _.chunk(numbers, 2);
console.log(`\nChunked array: ${JSON.stringify(chunks)}`);

const chunkSums = chunks.map(chunk => math.add(...chunk));
console.log(`Sum of each chunk: [${chunkSums}]`);

// Using lodash to get unique values and then multiply them
const duplicatedArray = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const uniqueValues = _.uniq(duplicatedArray);
console.log(`\nUnique values from [${duplicatedArray}]: [${uniqueValues}]`);
console.log(`Product of unique values: ${math.multiply(...uniqueValues)}`);

// Using lodash to shuffle an array and then perform operations
const shuffled = _.shuffle(numbers);
console.log(`\nShuffled array: [${shuffled}]`);
console.log(`Sum of shuffled array: ${math.add(...shuffled)}`);
console.log(`Product of shuffled array: ${math.multiply(...shuffled)}`);

// Using lodash's _.reduce with our math functions
const sumWithLodash = _.reduce(numbers, (sum, num) => math.add(sum, num), 0);
console.log(`\nSum using lodash reduce: ${sumWithLodash}`);

const productWithLodash = _.reduce(numbers, (product, num) => math.multiply(product, num), 1);
console.log(`Product using lodash reduce: ${productWithLodash}`);