// Program 1: Using Callback Functions

// Function to display data
function display(data) {
    console.log("data " + data); // Logs the data to the console
}

// Function to add two numbers and display the result using a callback
function add(a, b, show) {
    let res = a + b; // Calculate the sum
    show(res); // Call the callback function with the result
}

// Call add with numbers and the display function
add(10, 20, display); 

// Excepted Output:
// data 30

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Program 2: Calculator with Callback Functions

// Define basic arithmetic functions
function add(a, b) {
    return a + b; // Returns the sum
}

function sub(a, b) {
    return a - b; // Returns the difference
}

function mul(a, b) {
    return a * b; // Returns the product
}

function div(a, b) {
    return a / b; // Returns the quotient
}

// Function to calculate using a specific operation
function calc(a, b, op) {
    let res = op(a, b); // Execute the operation
    console.log("res: " + res); // Log the result
}

// Test the calc function with different operations
calc(10, 20, add); // res: 30
calc(10, 20, sub); // res: -10
calc(10, 20, mul); // res: 200
calc(10, 20, div); // res: 0.5

// Excepted output
// res: 30
// res: -10
// res: 200
// res: 0.5

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Program 3: Calculator with Arrow Functions

// Define basic arithmetic functions using arrow syntax
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

// Function to calculate using a specific operation
function calc(a, b, op) {
    let res = op(a, b); // Execute the operation
    console.log("res: " + res); // Log the result
}

// Test the calc function with different operations
calc(10, 20, add); // res: 30
calc(10, 20, sub); // res: -10
calc(10, 20, mul); // res: 200
calc(10, 20, div); // res: 0.5

// Excepted output
// res: 30
// res: -10
// res: 200
// res: 0.5

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Program 4: Circle Operations with Callback Functions

// Arrow functions for circle operations
let area = r => r * r * 3.142; // Calculates the area of a circle
let pri = r => 2 * 3.142 * r; // Calculates the perimeter of a circle
let dia = r => 2 * r; // Calculates the diameter of a circle

// Function to calculate circle properties
function circle(r, op) {
    let res = op(r); // Execute the operation
    console.log(res); // Log the result
}

// Test the circle function
circle(4, area); // 50.272 (Area)
circle(4, pri);  // 25.136 (Perimeter)
circle(4, dia);  // 8 (Diameter)

// Excepted output
// 50.272 (Area)
// 25.136 (Perimeter)
// 8 (Diameter)

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Program 5: Closure Demonstration
// Outer function that returns an inner function
function outer() {
    let out = 10; // Variable in the outer function
    return function inner() { 
        console.log(out); // Inner function accesses 'out' from closure
    };
}

// Call the outer function
let res = outer(); 
console.log(res); // Logs the inner function definition

// Call the inner function
res(); 

// Excepted Output:
// [Function: inner]
// 10
