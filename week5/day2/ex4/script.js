/* The resolveAfter2Seconds Function:
    This function returns a new Promise.
    The Promise executor sets a timeout of 2000 milliseconds (2 seconds).
    After the timeout, the Promise resolves with the value 'resolved'.
*/
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
/*
asyncCall Function:
    This is an async function, which means it will return a Promise and can use await inside it.
    It first logs 'calling' to the console.
    It then awaits the result of resolveAfter2Seconds(). This pauses the execution of asyncCall until the Promise returned by resolveAfter2Seconds is resolved.
    Once the Promise is resolved, the resolved value ('resolved') is assigned to result, and it is logged to the console.
*/

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}
// In the end, the asyncCall function is called to execute the code.
asyncCall();

/* 
Inside asyncCall:
    console.log('calling') is executed immediately, logging 'calling' to the console.
    The await keyword is encountered, and resolveAfter2Seconds() is called. This starts the 2-second timer.
    The execution of asyncCall is paused until the Promise from resolveAfter2Seconds resolves.
After 2 seconds:
    The setTimeout callback runs, resolving the Promise with the value 'resolved'.
    The await in asyncCall is fulfilled, and result is set to 'resolved'.
    console.log(result) is executed, logging 'resolved' to the console.

Final Output:

The console will show the following output with a 2-second delay between the two logs:
    calling
    resolved*/