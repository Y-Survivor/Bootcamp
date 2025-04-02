// Here's a self-invoking function (Immediately Invoked Function Expression - IIFE) that displays 
// your fortune in the DOM:

(function(children, partner, location, job) {
    const fortune = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    document.body.innerHTML = `<p>${fortune}</p>`;
  })(2, "Alex", "Hawaii", "web developer");