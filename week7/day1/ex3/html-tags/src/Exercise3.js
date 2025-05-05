import React from 'react';

class Exercise extends React.Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    // CSS for paragraph (Part III - simulating imported CSS)
    const paraStyle = {
      backgroundColor: "#282c34",
      color: "white",
      padding: "40px",
      fontFamily: "Arial",
      textAlign: "center"
    };

    return (
      <div className="border p-4">
        <h1 style={style_header}>This is a Header</h1>
        
        <p style={paraStyle}>This is a Paragraph</p>
        
        <a href="#" className="text-blue-500">This is a Link</a>
        
        <div className="my-4">
          <p>This is a Form:</p>
          <div>
            <label>Enter your name:</label>
            <div className="flex mt-1">
              <input type="text" className="border px-2 py-1" />
              <button className="ml-2 px-2 py-1 bg-gray-200 border">Submit</button>
            </div>
          </div>
        </div>
        
        <div className="my-4">
          <p>Here is an image:</p>
          <img 
            src="/api/placeholder/400/320" 
            alt="React Logo" 
            className="w-64 h-48"
          />
        </div>
        
        <div>
          <p>This is a List:</p>
          <ul className="list-disc pl-8">
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Exercise;