import React from 'react';
import Car from './Components/Car';

function App() {
  // Part I: Create a carInfo object
  const carInfo = {name: "Ford", model: "Mustang"};
  
  return (
    <div className="App">
      <h1>My React Car App</h1>
      {/* Part I: Import and use the Car component */}
      <Car carInfo={carInfo} />
    </div>
  );
}

export default App;