import React, { useState } from 'react';
import Garage from './Garage';

function Car({ carInfo }) {
  // Part II: Use useState hook to add a color variable
  const [color, setColor] = useState("red");
  
  return (
    <div>
      {/* Part II: Return the color and model */}
      <h2>This car is {color} {carInfo.model}</h2>
      
      {/* Part III: Use the Garage component inside Car */}
      <Garage size="small" />
    </div>
  );
}

export default Car;