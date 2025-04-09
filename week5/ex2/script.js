// Create a new Promise that will either resolve (success) or reject (failure)
const myPromise = new Promise((resolve, reject) => {  
    // setTimeout delays execution of the callback function by 4 seconds (4000ms)
    setTimeout(() => {  
      // After 4 seconds, resolve the Promise with the string "success"
      resolve("success");  
    }, 4000);  
  });  
  
  // Attach a .then() handler to process the resolved value
  myPromise  
    .then((result) => {  
      // Log the resolved value ("success") when the Promise fulfills  
      console.log(result); // Output after 4 sec: "success"  
    })  
    // Attach a .catch() handler in case of rejection (not used here)
    .catch((error) => {  
      // This would execute if reject() was called (but it isn't in this example)  
      console.error(error);  
    });  