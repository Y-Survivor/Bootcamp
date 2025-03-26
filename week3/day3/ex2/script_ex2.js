const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
};

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let total = 0;
    
    for (const item of shoppingList) {
        // Check if item is in stock and available
        if (item in stock && stock[item] > 0) {
            // Add item price to total
            total += prices[item];
            // Bonus: Decrease stock by 1
            stock[item] -= 1;
            console.log(`Added ${item} to your cart. Stock left: ${stock[item]}`);
        } else {
            console.log(`${item} is out of stock and wasn't added to your cart.`);
        }
    }
    
    return total;
}

// Calculate and display the total bill
const totalBill = myBill();
console.log(`Total bill: $${totalBill}`);

// Show updated stock
console.log("Updated stock:", stock);