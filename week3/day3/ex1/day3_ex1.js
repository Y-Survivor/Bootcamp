function displayNumbersDivisible(divisor = 23) {
    let sum = 0;
    let divisibleNumbers = [];
    
    for (let i = 0; i <= 500; i++) {
      if (i % divisor === 0) {
        divisibleNumbers.push(i);
        sum += i;
      }
    }
    
    console.log(divisibleNumbers.join(' '));
    console.log(`Sum: ${sum}`);
  }
  
  // Test with default divisor (23)
  console.log("Numbers divisible by 23:");
  displayNumbersDivisible(); 
  
  // Test with other divisors (bonus)
  console.log("\nNumbers divisible by 3:");
  displayNumbersDivisible(3);
  
  console.log("\nNumbers divisible by 45:");
  displayNumbersDivisible(45);