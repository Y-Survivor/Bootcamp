const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  const position = index + 1;
  // Determine the correct ordinal suffix
  const suffix = 
    position % 100 >= 11 && position % 100 <= 13 ? 'th' : // Handle 11th, 12th, 13th
    ordinal[position % 10] || 'th'; // Use ordinal array or default to 'th'
  
  console.log(`${position}${suffix} choice is ${color}.`);
});