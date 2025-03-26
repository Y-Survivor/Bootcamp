// Helper function to validate number input
function getValidNumberInput(promptMessage) {
    let input;
    do {
        input = parseFloat(prompt(promptMessage));
    } while (isNaN(input));
    return input;
}

// Helper function to validate string input
function getValidStringInput(promptMessage) {
    let input;
    do {
        input = prompt(promptMessage)?.trim();
    } while (!input);
    return input;
}

// 1. Hotel cost calculation
function hotelCost(nights) {
    const nightlyRate = 140;
    return nights * nightlyRate;
}

// 2. Plane ride cost calculation
function planeRideCost(destination) {
    switch (destination.toLowerCase()) {
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
}

// 3. Rental car cost calculation
function rentalCarCost(days) {
    const dailyRate = 40;
    let total = days * dailyRate;
    // Apply 5% discount for rentals over 10 days
    if (days > 10) {
        total *= 0.95;
    }
    return total;
}

// 4. Total vacation cost calculation
function totalVacationCost() {
    // Get user inputs
    const nights = getValidNumberInput("How many nights would you like to stay at the hotel?");
    const destination = getValidStringInput("What is your destination?");
    const carDays = getValidNumberInput("For how many days would you like to rent a car?");
    
    // Calculate costs
    const hotelTotal = hotelCost(nights);
    const planeTotal = planeRideCost(destination);
    const carTotal = rentalCarCost(carDays);
    const totalCost = hotelTotal + planeTotal + carTotal;
    
    // Display results
    console.log(`Hotel cost for ${nights} nights: $${hotelTotal}`);
    console.log(`Plane ticket to ${destination}: $${planeTotal}`);
    console.log(`Car rental for ${carDays} days: $${carTotal}`);
    console.log(`Total vacation cost: $${totalCost}`);
    
    return totalCost;
}

// Run the vacation cost calculator
totalVacationCost();