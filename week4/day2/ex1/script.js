const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Display colors with their choice number
colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});

// Check if array contains "Violet"
if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}