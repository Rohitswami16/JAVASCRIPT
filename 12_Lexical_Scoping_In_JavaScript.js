// Global Scope
let a = 10; // `a` is declared in the global scope and can be accessed anywhere outside local or block scopes.

function fun() {
    // Local Scope
    let b = 20; // `b` is declared in the function scope and is accessible only within this function.

    if (5 < b) {
        // Block Scope
        let c = 30; // `c` is declared inside the block scope and is accessible only within this block.
        console.log("Accessing in if block:");
        console.log("A = " + a); 
        console.log("B = " + b); 
        console.log("C = " + c); 
    }

    console.log("Accessing in function block:");
    console.log("A = " + a); 
    console.log("B = " + b); 
    // console.log("C = " + c); // Error: `c` is not accessible outside its block
}

fun();

console.log("Accessing globally:");
console.log("A = " + a); 
// console.log("B = " + b); // Error: `b` is not accessible outside the function
// console.log("C = " + c); // Error: `c` is not accessible outside its block


// Expected Output:

// Accessing in if block:
// A = 10
// B = 20
// C = 30
// Accessing in function block:
// A = 10
// B = 20
// Accessing globally:
// A = 10

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Global Scope
var x = 10; // `x` is declared in the global scope and can be accessed anywhere globally.

function outer() {
    console.log("outer() executing");
    var y = 20; // `y` is declared in the function scope and accessible only within `outer`.

    function inner() {
        console.log("inner() executing");
        var z = 30; // `z` is declared in the function scope of `inner` and is accessible only within `inner`.

        // Access all variables in respective scopes
        console.log("x = " + x); 
        console.log("y = " + y);
        console.log("z = " + z); 
    }

    // Access variables in global and local scopes
    console.log("x = " + x); 
    console.log("y = " + y); 
    // console.log("z = " + z); // Error: `z` is not accessible outside `inner`

    inner(); // Call the inner function
}

outer();
// inner(); // Error: `inner` is not accessible outside `outer`
console.log("x = " + x); 
// console.log("y = " + y); // Error: `y` is not accessible outside `outer`
// console.log("z = " + z); // Error: `z` is not accessible outside `inner`



// Expected Output:

// outer() executing
// x = 10
// y = 20
// inner() executing
// x = 10
// y = 20
// z = 30
// x = 10
