// Global variable to store all bold items
let allBoldItems;

// Function to collect all bold items
function getBoldItems() {
    allBoldItems = document.querySelectorAll('#boldParagraph strong');
}

// Function to highlight bold items in blue
function highlight() {
    if (!allBoldItems) getBoldItems(); // Ensure items are collected
    allBoldItems.forEach(item => {
        item.style.color = 'blue';
    });
}

// Function to return bold items to default (black)
function returnItemsToDefault() {
    if (!allBoldItems) getBoldItems(); // Ensure items are collected
    allBoldItems.forEach(item => {
        item.style.color = 'black';
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // First collect all bold items
    getBoldItems();
    
    // Get the paragraph element
    const paragraph = document.getElementById('boldParagraph');
    
    // Add event listeners
    paragraph.addEventListener('mouseover', highlight);
    paragraph.addEventListener('mouseout', returnItemsToDefault);
});