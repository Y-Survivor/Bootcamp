// Create a promise that resolves with the value 3
const resolvedPromise = Promise.resolve(3);

// Create a promise that rejects with the string "Boo!"
const rejectedPromise = Promise.reject("Boo!");

// You can verify these promises work by attaching handlers:
resolvedPromise.then(value => {
  console.log("Resolved:", value); // Will log "Resolved: 3"
});

rejectedPromise.catch(error => {
  console.log("Rejected:", error); // Will log "Rejected: Boo!"
});