// JavaScript does not support function overloading in the traditional sense.
// If multiple functions with the same name are defined, the last one overrides the others.


// Function Overloading Issue in JavaScript:
// In JavaScript, you cannot have multiple functions with the same name.
// The latest definition of the function with the same name will override all previous definitions.
  
// Solution for Function Overloading:
// To simulate overloading, you can use default parameters or check the number of arguments passed using arguments.length.

// Function with no parameters
function fun() {
    console.log("0-Parameter function");
}

// Function with one parameter
function fun(a) {
    console.log("1-Parameter function:", a);
}

// Function with two parameters
function fun(a, b) {
    console.log("2-Parameter function:", a, b);
}

// Calling the function
fun();           // Calls the latest definition (overrides earlier ones)
fun(10);         // Only the last defined version of `fun` is used
fun(10, 20);     // Handles two parameters

// Expected Output:
// 2-Parameter function: undefined undefined
// 2-Parameter function: 10 undefined
// 2-Parameter function: 10 20

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Alternative Code

// Simulating function overloading
function fun(a, b) {
    if (arguments.length === 0) {
        console.log("0-Parameter function");
    } else if (arguments.length === 1) {
        console.log("1-Parameter function:", a);
    } else if (arguments.length === 2) {
        console.log("2-Parameter function:", a, b);
    }
}

// Calling the function
fun();           // 0-Parameter function
fun(10);         // 1-Parameter function: 10
fun(10, 20);     // 2-Parameter function: 10 20

// Expected Output:
// 0-Parameter function
// 1-Parameter function: 10
// 2-Parameter function: 10 20

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
