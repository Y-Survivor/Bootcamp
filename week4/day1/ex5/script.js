// 1. Function declaration
function kgToGramsDeclaration(kg) {
    return kg * 1000;
  }
  console.log(kgToGramsDeclaration(5)); // 5000
  
  // 2. Function expression
  const kgToGramsExpression = function(kg) {
    return kg * 1000;
  };
  console.log(kgToGramsExpression(3)); // 3000
  
  /* 
  Difference between function declaration and expression:
  - Declaration is hoisted (can be called before it's defined)
  - Expression isn't hoisted (must be defined before calling)
  - Expression is often used when function needs to be assigned to a variable
  */
  
  // 3. One line arrow function
  const kgToGramsArrow = kg => kg * 1000;
  console.log(kgToGramsArrow(2.5)); // 2500