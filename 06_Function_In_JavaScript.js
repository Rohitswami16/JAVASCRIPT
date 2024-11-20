// Function Execution Example
function fun() {
    console.log("Executing...");
}
fun();
// Output:
// Executing...

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Greet Function
function greet(name) {
    console.log("Welcome to", name);
} 
greet("Kodnest");
// Output:
// Welcome to Kodnest

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Sum Function with Two Parameters
function sum(n1, n2) {
    return n1 + n2;
}
console.log("Sum =", sum(10, 20));
// Output:
// Sum = 30

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Simple Interest Calculation Function
function calculateSI() {
    let p = 10000; // Principal
    let r = 7.5;   // Rate
    let t = 2;     // Time

    let si = (p * r * t) / 100; // Simple Interest formula
    return si;
}
console.log("Simple Interest =", calculateSI());
// Output:
// Simple Interest = 1500

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Function Overloading Example (JavaScript does not support true overloading)
function addTwo(a, b) {
    return a + b;
}

function add(a, b, c) {
    return a + b + c;
}

function add(a, b, c, d) {
    return a + b + c + d;
}

console.log("Sum of two numbers =", addTwo(10, 20));           // 2 parameters
console.log("Sum of three numbers =", addThree(10, 20, 30));   // 3 parameters
console.log("Sum of four numbers =", addFour(10, 20, 30, 40)); // 4 parameters
// Output:
// Sum of two numbers =   NAN
// Sum of three numbers = NAN
// Sum of four numbers = 100

// Note: JavaScript does not support traditional function overloading.
// Use unique function names or the rest operator for flexibility.

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Variable Arguments Sum Function
function addfun(...args) {
    console.log("Number of arguments:", args.length);
    let sum = 0;

    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

console.log("Sum =", addfun(10, 20, 30)); // Sum of all arguments
// Output:
// Number of arguments: 3
// Sum = 60

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Function Expression Example with Two Parameters
let s = function(n1, n2) {
    return n1 + n2;
};
console.log("Sum =", s(10, 20));
// Output:
// Sum = 30
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
