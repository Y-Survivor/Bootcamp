console.log("Starting shop.js");
// In shop.js, require the product objects from the products.js module.
const products = require('./products');
// Create a function that takes a product name as a parameter and searches for the corresponding product object.
function findProductByName(name) {
  return products.find(product => product.name.toLowerCase() === name.toLowerCase());
}

// Call this function with different product names and print the details of the products.
console.log(findProductByName("Laptop")); // { name: 'Laptop', price: 999.99, category: 'Electronics' }
console.log(findProductByName("Desk Chair")); // { name: 'Desk Chair', price: 149.99, category: 'Furniture' }
console.log(findProductByName("Coffee Maker")); // { name: 'Coffee Maker', price: 89.99, category: 'Appliances' }

// Run shop.js and verify that the correct product details are displayed.

