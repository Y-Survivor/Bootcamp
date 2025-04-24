/**
 * Custom math module that provides basic arithmetic operations
 */

/**
 * Adds two or more numbers together
 * @param {...number} numbers - Numbers to add
 * @returns {number} - Sum of all numbers
 */
const add = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
  };
  
  /**
   * Multiplies two or more numbers together
   * @param {...number} numbers - Numbers to multiply
   * @returns {number} - Product of all numbers
   */
  const multiply = (...numbers) => {
    return numbers.reduce((product, num) => product * num, 1);
  };
  
  /**
   * Subtracts subsequent numbers from the first number
   * @param {number} initial - The initial number
   * @param {...number} numbers - Numbers to subtract
   * @returns {number} - Result after subtraction
   */
  const subtract = (initial, ...numbers) => {
    return numbers.reduce((result, num) => result - num, initial);
  };
  
  /**
   * Divides the first number by subsequent numbers
   * @param {number} initial - The initial number
   * @param {...number} numbers - Numbers to divide by
   * @returns {number} - Result after division
   */
  const divide = (initial, ...numbers) => {
    return numbers.reduce((result, num) => {
      if (num === 0) throw new Error("Division by zero is not allowed");
      return result / num;
    }, initial);
  };
  
  // Export the functions
  module.exports = {
    add,
    multiply,
    subtract,
    divide
  };