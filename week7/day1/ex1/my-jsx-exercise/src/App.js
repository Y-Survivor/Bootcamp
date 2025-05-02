import React from 'react';

function App() {
  // Step 2: Create a constant variable with JSX
  const myelement = <h1>I Love JSX!</h1>;
  
  // Step 3: Create a constant variable named sum
  const sum = 5 + 5;
  
  return (
    <div className="p-4">
      {/* Step 1: Display "Hello World!" in a paragraph */}
      <p>Hello World!</p>
      
      {/* Step 2: Render the JSX element */}
      {myelement}
      
      {/* Step 3: Render the sentence with the sum variable */}
      <p>React is {sum} times better with JSX</p>
    </div>
  );
}

export default App;