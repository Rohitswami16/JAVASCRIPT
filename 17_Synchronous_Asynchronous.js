// Program 1: Simple Task Logging
console.log("1 task");
console.log("2 tasks");
console.log("3 task");

/**
 * What this program does:
 * Logs three messages to the console sequentially.
 * 
 * Expected Output:
 * 1 task
 * 2 tasks
 * 3 task
 */

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Program 2: Task Logging with setTimeout
console.log("1 task");
setTimeout(function () {
    console.log("2 tasks");
}, 1000); // 2nd task is delayed by 1 second
console.log("3 task");

/**
 * What this program does:
 * Demonstrates asynchronous behavior using `setTimeout`.
 * The "2 tasks" message is delayed, while the other messages are logged immediately.
 * 
 * Expected Output:
 * 1 task
 * 3 task
 * (after 1 second) 2 tasks
 */

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Program 3: Function with a Variable Error
function add() {
    a = 10;
    b = 20;
    c = a + b;
    console.log(sum); // 'sum' is undefined, causing an error
}

console.log("Program Started");
add();
console.log("Program Ended");

/**
 * What this program does:
 * Tries to log a variable (`sum`) that is not defined, causing a runtime error.
 * 
 * Expected Output:
 * Program Started
 * ReferenceError: sum is not defined
 * Program Ended is not reached because of the error.
 */

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Program 4: Function with Exception Handling
function add() {
    try {
        a = 10;
        b = 20;
        c = a + b;
        console.log(sum); // 'sum' is undefined, causing an exception
    } catch (ex) {
        console.log("Exception handled"); // Handles the exception gracefully
    }
}

console.log("Program Started");
add();
console.log("Program Ended");

/**
 * What this program does:
 * Introduces exception handling to handle the error gracefully without stopping program execution.
 * 
 * Expected Output:
 * Program Started
 * Exception handled
 * Program Ended
 */

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Program 5: Function with Exception Handling and Finally Block
function add() {
    try {
        a = 10;
        b = 20;
        c = a + b;
        console.log(sum); // 'sum' is undefined, causing an exception
    } catch (ex) {
        console.log("Exception handled"); // Handles the exception gracefully
    } finally {
        console.log("Program Ended in finally block"); // Ensures this message is always printed
    }
}

console.log("Program Started");
add();
console.log("Program Ended");

/**
 * What this program does:
 * Demonstrates exception handling and ensures the `finally` block executes regardless of an error.
 * 
 * Expected Output:
 * Program Started
 * Exception handled
 * Program Ended in finally block
 * Program Ended
 */

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
