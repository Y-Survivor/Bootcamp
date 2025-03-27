function myMove() {
    const animate = document.getElementById('animate');
    const container = document.getElementById('container');
    let position = 0;
    
    // Calculate the maximum position (container width - box width)
    const maxPosition = container.offsetWidth - animate.offsetWidth;
    
    // Clear any existing interval (to prevent multiple clicks causing issues)
    if (window.animationInterval) {
      clearInterval(window.animationInterval);
    }
    
    // Move the box 1px every millisecond
    window.animationInterval = setInterval(function() {
      if (position >= maxPosition) {
        clearInterval(window.animationInterval);
      } else {
        position++;
        animate.style.left = position + 'px';
      }
    }, 1);
  }