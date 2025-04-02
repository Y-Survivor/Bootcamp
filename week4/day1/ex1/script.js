// 1. Analyse the code below, and predict what will be the value of a in all the following functions.
// 2. Write your prediction as comments in a js file. Explain your predictions.
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - Prediction: The alert will show "inside the funcOne function 3"
// Explanation: a will get the value of 3  aslong as the condition is true (a > 1). In this case, a= 5, so the condition is true and a is reassigned to 3. 

// #1.2 - If declared with const: 
// It will throw an error because const variables cannot be reassigned after declaration
// The line 'a = 3' would cause a TypeError

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - Predictions:
// funcThree() first call: alerts "inside the funcThree function 0" (global a is 0)
// funcTwo() call: modifies global a to 5 (no output)
// funcThree() second call: alerts "inside the funcThree function 5" (global a was changed)

// #2.2 - If declared with const:
// The code would throw an error at 'a = 5' in funcTwo because const variables can't be reassigned

//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - Predictions:
// funcFour(): assigns "hello" to window.a (global variable)
// funcFive(): alerts "inside the funcFive function hello"
// Explanation: funcFour creates a global variable on the window object, which funcFive can access

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// #4.1 - Prediction: 
// funcSix() will alert "inside the funcSix function test"
// Explanation: The local a variable shadows the global a variable inside the function

// #4.2 - If declared with const:
// Same behavior as with let in this case - the local const a shadows the global a
// No error because we're not reassigning, just creating a new variable in function scope

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - Predictions:
// First alert: "in the if block 5" (block-scoped a inside if)
// Second alert: "outside of the if block 2" (global a is unchanged)

// #5.2 - If declared with const:
// Same behavior as with let in this case - block-scoped const a shadows the outer a
// No error because we're not reassigning, just creating new block-scoped variables