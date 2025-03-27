// Part I: Alert "Hello World" after 2 seconds using setTimeout
setTimeout(function() {
    alert("Hello World");
  }, 2000);
  
  // Part II: Add a paragraph after 2 seconds using setTimeout
  setTimeout(function() {
    const container = document.getElementById('container');
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Hello World';
    container.appendChild(paragraph);
  }, 2000);
  
  // Part III: Add a paragraph every 2 seconds using setInterval, with clear conditions
  const container = document.getElementById('container');
  const clearButton = document.getElementById('clear');
  
  let intervalId = setInterval(function() {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Hello World';
    container.appendChild(paragraph);
    
    // Clear interval if there are 5 or more paragraphs
    if (container.getElementsByTagName('p').length >= 5) {
      clearInterval(intervalId);
    }
  }, 2000);
  
  // Clear interval when button is clicked
  clearButton.addEventListener('click', function() {
    clearInterval(intervalId);
  });