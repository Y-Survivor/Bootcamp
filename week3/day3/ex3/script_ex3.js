function changeEnough(itemPrice, amountOfChange) {
    // Calculate the total value of the change
    const quartersValue = amountOfChange[0] * 0.25;
    const dimesValue = amountOfChange[1] * 0.10;
    const nickelsValue = amountOfChange[2] * 0.05;
    const penniesValue = amountOfChange[3] * 0.01;
    
    const totalChange = quartersValue + dimesValue + nickelsValue + penniesValue;
    
    // Compare with item price and return result
    return totalChange >= itemPrice;
}

// Test cases
console.log(changeEnough(4.25, [25, 20, 5, 0]));  // true (8.50 >= 4.25)
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false (2.50 >= 14.11)
console.log(changeEnough(0.75, [0, 0, 20, 5]));   // true (1.05 >= 0.75)